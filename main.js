import "./style.css";
// https://sweetalert.js.org/ - alerts for the sale form submitting (swal)
import swal from "sweetalert";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { displayDropdownParams } from "./src/dropdown-stats";
import { toggleTheme } from ".//src/helper";

import {
	getMonth,
	getYear,
	getNumber,
	getTotalItems,
	getCustomStats,
} from ".//src/helper";

import {
	displayDropdownSale,
	setMoneyValue,
	setItemsValue,
} from "./src/dropdown-sale";

const date = new Date();

// Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCMSw_jpYL--CtqKFuwVuVbvdeRZ19nKa8",
	authDomain: "sales-tracker-demoprojec-7ad2d.firebaseapp.com",
	projectId: "sales-tracker-demoprojec-7ad2d",
	storageBucket: "sales-tracker-demoprojec-7ad2d.appspot.com",
	messagingSenderId: "843330215009",
	appId: "1:843330215009:web:d5606ff73d44e26d00de20",
	measurementId: "G-ZBG4QR9HD1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const sales = collection(db, "sales");

// Grab elements from DOM

// - DOM elements for nav
const themeBtn = document.querySelector("#theme-button");

// - DOM elements for the Sales form card
const form = document.querySelector("#sale-form");
const money = document.querySelector("#money");
const items = document.querySelector("#items");
const saleFoodBtn = document.querySelector("#sale-food-btn");
const saleFoodLabel = document.querySelector("#sale-food-label");
const submitSaleBtn = document.querySelector("#submit-sale-btn");
const saleResetBtn = document.querySelector("#sale-reset-btn");
const radioBntsSales = document.getElementsByName("radio-sales");

// - DOM elements for the Statistics card
const totalSales = document.querySelector("#total-sales");
const totalSuperworms = document.querySelector("#total-superworms");
const totalMealworms = document.querySelector("#total-mealworms");
const totalDubia = document.querySelector("#total-dubia");
const totalRedhead = document.querySelector("#total-red-head");
const foodType = document.querySelector("#food-type");
const dateElement = document.querySelector("#date");
const itemsSoldDomElement = document.querySelector("#items-sold");
const sumDomElement = document.querySelector("#sum");
const dropdownStatsYear = document.querySelector("#dropdown-stats-year");

// DOM elements for the footer
const copywrightYear = document.querySelector("#copywright-year");

export const salesItems = [];
displayDropdownSale();

// Change Dark/Light theme
themeBtn.addEventListener("click", (e) => {
	e.preventDefault();
	toggleTheme(document.documentElement);
});

const lightThemeIcon = document.querySelector("#light-theme-icon");
const darkThemeIcon = document.querySelector("#dark-theme-icon");

// Check client theme preferences
const checkThemePreference = () => {
	const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
	console.log(prefersDark);

	if (prefersDark) {
		lightThemeIcon.hidden = true;
		darkThemeIcon.hidden = false;
		document.documentElement.classList.add("dark");
	}
};

checkThemePreference();

// Submitting data introduced in the sales form card

// !!! Very important: when submit to Firestore DB use the submit button(type 'submit') with event type 'click' instead of submitting the form with event type 'submit'. For the second variant the submit works only in Firefox browser. With first variant the submit works on every browser.
submitSaleBtn.addEventListener("click", async (e) => {
	e.preventDefault();
	const data = [...new FormData(form)];

	try {
		// Clear the array (delete all data in it)
		salesItems.splice(0, salesItems.length);

		const docRef = await addDoc(sales, {
			type: `${data[0][1]}`,
			money: `${money.value}`,
			items: `${items.value}`,
			year: getYear(date),
			month: getMonth(date),
		});
		console.log(docRef.id);

		// Sale form submitting alert
		// SweetAlert - swal("Vanzare adaugata cu succes!");
		swal({
			text: "Vânzare adăugată cu succes!",
		});

		saleFoodLabel.textContent = "alege un tip de hrana";
		money.value = "";
		items.value = "";
		setMoneyValue("");
		setItemsValue("");
		submitSaleBtn.disabled = true;
		submitSaleBtn.classList.remove("btn-enabled");
		saleResetBtn.disabled = true;
		saleResetBtn.classList.remove("btn-enabled");

		saleFoodBtn.style.backgroundColor = "var(--invalid-background-color)";
		saleFoodLabel.style.color = "var(--invalid-color)";

		radioBntsSales.forEach((radioBtn) => {
			radioBtn.checked = false;
		});

		init();
	} catch (error) {
		console.error(`Error adding document: ${error}`);
		swal("Ooops! Vanzarea nu a fost adaugata! Mai incercati.");
	}
});

// Retrieve data for the Statistics card
let itemsSold = 0;
let sum = 0;

const init = async () => {
	money.value = "";
	items.value = "";

	const querySnapshot = await getDocs(sales);

	// Get total ammount of money
	let sumMoney = 0;

	querySnapshot.forEach((doc) => {
		sumMoney += getNumber(doc.data().money);
		// Fill salesItems array with all data from database
		salesItems.push(doc.data());
	});
	totalSales.textContent = sumMoney + " lei";

	// Get total no. of items in each category
	let sumSuperworms = 0;
	let sumMealworms = 0;
	let sumDubia = 0;
	let sumRedhead = 0;

	getTotalItems(salesItems, "superworms", sumSuperworms, totalSuperworms);
	getTotalItems(salesItems, "mealworms", sumMealworms, totalMealworms);
	getTotalItems(salesItems, "dubia", sumDubia, totalDubia);
	getTotalItems(salesItems, "redhead", sumRedhead, totalRedhead);

	itemsSold = 0;
	sum = 0;
	foodType.textContent = "Superworms";
	dateElement.textContent = `${
		getMonth(date)[0].toUpperCase() + getMonth(date).substring(1)
	} ${getYear(date)}`;

	getCustomStats(
		salesItems,
		getYear(date),
		getMonth(date),
		"superworms",
		itemsSold,
		itemsSoldDomElement,
		sum,
		sumDomElement
	);

	const yearsArray = [];
	salesItems.forEach((item) => {
		if (!yearsArray.includes(item.year + "")) {
			yearsArray.push(item.year + "");
		}
	});
	yearsArray.sort();
	yearsArray.unshift("Anul");

	dropdownStatsYear.innerHTML = "";
	displayDropdownParams(yearsArray, dropdownStatsYear, "years");

	// Show the current year in the footer Copywright message
	copywrightYear.textContent = getYear(date);
};

init();
