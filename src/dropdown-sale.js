import { setSelectTitle, toggleHidden } from "./helper";

const dropdownSale = document.querySelector("#dropdown-sale");
const saleFoodBtn = document.querySelector("#sale-food-btn");
const saleFoodLabel = document.querySelector("#sale-food-label");
const submitSaleBtn = document.querySelector("#submit-sale-btn");
const saleResetBtn = document.querySelector("#sale-reset-btn");
const money = document.querySelector("#money");
const items = document.querySelector("#items");
const dropdownSalesRadioButtonsArray =
	document.getElementsByName("radio-sales");

submitSaleBtn.disabled = true;
let foodValue = "";
let moneyValue = "";
let itemsValue = "";

export const displayDropdownSale = () => {
	const foods = [
		"alege un tip de hrana",
		"Superworms",
		"Mealworms",
		"Dubia",
		"Redhead",
	];

	foods.forEach((food) => {
		let html = `<input 
						type="radio"
						id="select-${food.toLowerCase()}"
						name="radio-sales"
						value=${food.toLowerCase()}
						class="option radio-sales"
					/>
					<label 
						for="select-${food.toLowerCase()}" 
						class="select-item">${food}
					</label>`;

		dropdownSale.insertAdjacentHTML("beforeend", html);
	});
};

saleFoodBtn.addEventListener("click", (event) => {
	event.preventDefault();

	toggleHidden(dropdownSale);
	toggleHidden(saleResetBtn);
	toggleHidden(submitSaleBtn);
});

dropdownSale.addEventListener("click", (event) => {
	if (event.target.value === "alege") {
		submitSaleBtn.classList.remove("btn-enabled");
		saleResetBtn.classList.remove("btn-enabled");
	}

	if (event.target.classList.contains("radio-sales")) {
		saleFoodLabel.textContent = setSelectTitle(event);
		toggleHidden(dropdownSale);
		toggleHidden(saleResetBtn);
		toggleHidden(submitSaleBtn);

		submitSaleBtn.disabled = false;
		foodValue = "food";

		if (
			event.target.value != "alege" ||
			moneyValue === "money" ||
			itemsValue === "items"
		) {
			saleResetBtn.classList.add("btn-enabled");
		}

		if (
			event.target.value != "alege" &&
			moneyValue === "money" &&
			itemsValue === "items"
		) {
			submitSaleBtn.classList.add("btn-enabled");
		}
	}
});

saleResetBtn.addEventListener("click", (event) => {
	// event.preventDefault();
	saleResetBtn.blur();

	saleFoodLabel.textContent = "alege un tip de hrana";
	money.value = "";
	items.value = "";
	foodValue = "";
	moneyValue = "";
	itemsValue = "";

	dropdownSalesRadioButtonsArray.forEach((radioBtn) => {
		radioBtn.checked = false;
	});

	submitSaleBtn.disabled = true;
	saleResetBtn.classList.remove("btn-enabled");
	submitSaleBtn.classList.remove("btn-enabled");
});

money.addEventListener("input", (event) => {
	event.preventDefault();

	if (event.target.value != "") {
		saleResetBtn.classList.add("btn-enabled");
		moneyValue = "money";
	} else {
		saleResetBtn.classList.remove("btn-enabled");
	}

	if (foodValue === "food" && itemsValue === "items") {
		submitSaleBtn.classList.add("btn-enabled");
	}
});

items.addEventListener("input", (event) => {
	event.preventDefault();

	if (event.target.value != "") {
		saleResetBtn.classList.add("btn-enabled");
		itemsValue = "items";
	} else {
		saleResetBtn.classList.remove("btn-enabled");
	}

	if (foodValue === "food" && moneyValue === "money") {
		submitSaleBtn.classList.add("btn-enabled");
	}
});
