import { setSelectTitle, toggleHidden, getNumber } from "./helper";

const dropdownSale = document.querySelector("#dropdown-sale");
const saleFoodBtn = document.querySelector("#sale-food-btn");
const saleFoodLabel = document.querySelector("#sale-food-label");
const submitSaleBtn = document.querySelector("#submit-sale-btn");
const saleResetBtn = document.querySelector("#sale-reset-btn");
const money = document.querySelector("#money");
const items = document.querySelector("#items");
const dropdownSalesRadioButtonsArray =
	document.getElementsByName("radio-sales");

const arrow = document.querySelector("#sale-food-btn-arrow");

export let foodValue = "";
export let moneyValue = "";
export let itemsValue = "";

export function setMoneyValue(value) {
	moneyValue = value;
}
export function setItemsValue(value) {
	itemsValue = value;
}

export const displayDropdownSale = () => {
	const foods = [
		"alege un tip de hrană",
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
						required
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

	arrow.classList.toggle("rotate-arrow");
	toggleHidden(dropdownSale);
	toggleHidden(saleResetBtn);
	toggleHidden(submitSaleBtn);
});

dropdownSale.addEventListener("click", (event) => {
	// Toggle the `Dropdown`, `Reset` and `Submit sale` buttons
	if (event.target.classList.contains("radio-sales")) {
		saleFoodLabel.textContent = setSelectTitle(event);
		toggleHidden(dropdownSale);
		toggleHidden(saleResetBtn);
		toggleHidden(submitSaleBtn);
		arrow.classList.toggle("rotate-arrow");
	}

	if (event.target.value === "alege") {
		foodValue = "";
		saleFoodBtn.style.backgroundColor = "var(--invalid-background-color)";
		saleFoodLabel.style.color = "var(--invalid-color)";
		submitSaleBtn.classList.remove("btn-enabled");
		submitSaleBtn.disabled = true;

		if (money.value === "" && items.value === "") {
			submitSaleBtn.disabled = true;
			saleResetBtn.classList.remove("btn-enabled");
		}
	} else {
		foodValue = "food";
		saleFoodBtn.style.backgroundColor = "var(--input-field-background-color)";
		saleFoodLabel.style.color = "var(--input-field-color)";
		saleResetBtn.disabled = false;
		saleResetBtn.classList.add("btn-enabled");

		if (moneyValue === "money" && itemsValue === "items") {
			submitSaleBtn.classList.add("btn-enabled");
			submitSaleBtn.disabled = false;
		}
	}
});

// Sales form behavior logic for `money` and `items` input
// (validity check)
saleResetBtn.disabled = true;
submitSaleBtn.disabled = true;
const regex = new RegExp("^[0-9]{1,4}$");

money.addEventListener("input", (event) => {
	event.preventDefault();

	if (event.target.value !== "") {
		saleResetBtn.disabled = false;
		saleResetBtn.classList.add("btn-enabled");
	} else {
		if (foodValue !== "food" && itemsValue !== "items") {
			saleResetBtn.disabled = true;
		}
	}

	if (regex.test(event.target.value)) {
		moneyValue = "money";

		if (foodValue === "food" && itemsValue === "items") {
			submitSaleBtn.classList.add("btn-enabled");
			submitSaleBtn.disabled = false;
		}
	} else if (
		event.target.value === "" &&
		foodValue !== "food" &&
		itemsValue !== "items"
	) {
		saleResetBtn.classList.remove("btn-enabled");
		moneyValue = "";
	} else {
		moneyValue = "";
		submitSaleBtn.classList.remove("btn-enabled");
		submitSaleBtn.disabled = true;
		saleResetBtn.classList.add("btn-enabled");
	}
});

items.addEventListener("input", (event) => {
	event.preventDefault();

	if (event.target.value !== "") {
		saleResetBtn.disabled = false;
	} else {
		if (foodValue !== "food" && moneyValue !== "money") {
			saleResetBtn.disabled = true;
		}
	}

	if (regex.test(event.target.value)) {
		itemsValue = "items";
		saleResetBtn.classList.add("btn-enabled");

		if (foodValue === "food" && moneyValue === "money") {
			submitSaleBtn.classList.add("btn-enabled");
			submitSaleBtn.disabled = false;
		}
	} else if (
		event.target.value === "" &&
		foodValue !== "food" &&
		moneyValue !== "money"
	) {
		saleResetBtn.classList.remove("btn-enabled");
		itemsValue = "";
	} else {
		itemsValue = "";
		submitSaleBtn.classList.remove("btn-enabled");
		submitSaleBtn.disabled = true;
		saleResetBtn.classList.add("btn-enabled");
	}
});

// Sales form `reset` button logic
saleResetBtn.addEventListener("click", (event) => {
	saleResetBtn.blur();

	saleFoodLabel.textContent = "alege un tip de hrană";
	saleFoodBtn.style.backgroundColor = "var(--invalid-background-color)";
	saleFoodLabel.style.color = "var(--invalid-color)";
	money.value = "";
	items.value = "";
	foodValue = "";
	moneyValue = "";
	itemsValue = "";

	dropdownSalesRadioButtonsArray.forEach((radioBtn) => {
		radioBtn.checked = false;
	});

	submitSaleBtn.disabled = true;
	submitSaleBtn.classList.remove("btn-enabled");
	saleResetBtn.disabled = true;
	saleResetBtn.classList.remove("btn-enabled");
});

// Sales form `submit` button logic
submitSaleBtn.addEventListener("click", (event) => {
	foodValue = "";
	saleResetBtn.disabled = true;
	submitSaleBtn.disabled = true;
});

// Sales form Spinner buttons logic
const moneySpinnerDec = document.querySelector("#moneySpinnerDec");
const moneySpinnerInc = document.querySelector("#moneySpinnerInc");
const itemsSpinnerDec = document.querySelector("#itemsSpinnerDec");
const itemsSpinnerInc = document.querySelector("#itemsSpinnerInc");

moneySpinnerDec.addEventListener("click", (event) => {
	event.preventDefault();
	moneyValue = "money";
	saleResetBtn.disabled = false;

	if (money.value > 5) {
		money.value = getNumber(money.value) - 5;
	}
});

moneySpinnerInc.addEventListener("click", (event) => {
	event.preventDefault();
	moneyValue = "money";
	saleResetBtn.disabled = false;

	if (money.value === "") {
		money.value += 0;
	}
	money.value = getNumber(money.value) + 5;
	saleResetBtn.classList.add("btn-enabled");

	if (foodValue === "food" && itemsValue === "items") {
		submitSaleBtn.classList.add("btn-enabled");
		submitSaleBtn.disabled = false;
	}
});

itemsSpinnerDec.addEventListener("click", (event) => {
	event.preventDefault();
	itemsValue = "items";
	saleResetBtn.disabled = false;

	if (items.value > 10) {
		items.value = getNumber(items.value) - 10;
	}
});

itemsSpinnerInc.addEventListener("click", (event) => {
	event.preventDefault();
	itemsValue = "items";
	saleResetBtn.disabled = false;

	if (items.value === "") {
		items.value += 0;
	}
	items.value = getNumber(items.value) + 10;
	saleResetBtn.classList.add("btn-enabled");

	if (foodValue === "food" && moneyValue === "money") {
		submitSaleBtn.classList.add("btn-enabled");
		submitSaleBtn.disabled = false;
	}
});
