import "./style.css";
// https://sweetalert.js.org/ - alerts for the sale form submitting (swal)
import swal from "sweetalert";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { displayDropdownParams } from "./src/dropdown-stats";

import {
	getMonth,
	getYear,
	getNumber,
	getTotalItems,
	getCustomStats,
} from ".//src/helper";

import { displayDropdownSale } from "./src/dropdown-sale";

const date = new Date();

// Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAp5Rk71EEkp74h8GONSTUco_9RxRZSm_0",
	authDomain: "sales-tracker-demoproject.firebaseapp.com",
	projectId: "sales-tracker-demoproject",
	storageBucket: "sales-tracker-demoproject.appspot.com",
	messagingSenderId: "804031941012",
	appId: "1:804031941012:web:1ddc2d6cb76dd88d5b2781",
	measurementId: "G-JJ32NE0F2Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const sales = collection(db, "test");

// Grab elements from DOM

// - DOM elements for the Sales form card
const form = document.querySelector("#sale-form");
const money = document.querySelector("#money");
const items = document.querySelector("#items");
const selectLabel = document.querySelector("#sale-food-label");
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

// Submitting data introduced in the sales form card
form.addEventListener("submit", async (event) => {
	event.preventDefault();

	const data = [...new FormData(form)];
	console.log(data);

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
		console.log(`Document written with ID: ${docRef.id}`);

		// Sale form submitting alert
		// SweetAlert - swal("Vanzare adaugata cu succes!");
		swal({
			text: "Vânzare adăugată cu succes!",
		});

		selectLabel.textContent = "alege un tip de hrana";
		money.value = "";
		items.value = "";
		submitSaleBtn.disabled = true;
		submitSaleBtn.classList.remove("btn-enabled");
		saleResetBtn.classList.remove("btn-enabled");

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
