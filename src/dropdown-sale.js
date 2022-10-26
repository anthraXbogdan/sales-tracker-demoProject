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

submitSaleBtn.disabled = true;

export let foodValue = "";
let moneyValue = "";
let itemsValue = "";

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
	}

	if (event.target.value === "alege") {
		foodValue = "";
		saleFoodBtn.style.backgroundColor = "rgba(239, 35, 60, 0.2)";
		saleFoodLabel.style.color = "#8a8c97";
		submitSaleBtn.classList.remove("btn-enabled");
		submitSaleBtn.disabled = true;

		if (money.value === "" && items.value === "") {
			saleResetBtn.classList.remove("btn-enabled");
		}
	} else {
		foodValue = "food";
		saleFoodBtn.style.backgroundColor = "#fff";
		saleFoodLabel.style.color = "#2b2d42";
		saleResetBtn.classList.add("btn-enabled");

		if (moneyValue === "money" && itemsValue === "items") {
			submitSaleBtn.classList.add("btn-enabled");
			submitSaleBtn.disabled = false;
		}
	}
});

// Sales form behavior logic for `money` and `items` input
// (validity check)
const regex = new RegExp("^[0-9]+$");

money.addEventListener("input", (event) => {
	event.preventDefault();

	if (regex.test(event.target.value)) {
		moneyValue = "money";
		saleResetBtn.classList.add("btn-enabled");
		money.style.backgroundColor = "#fff";
		money.style.color = "#2b2d42";

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
		money.style.backgroundColor = "rgba(239, 35, 60, 0.2)";
		money.style.color = "#8a8c97";
	} else {
		moneyValue = "";
		submitSaleBtn.classList.remove("btn-enabled");
		submitSaleBtn.disabled = true;
		saleResetBtn.classList.add("btn-enabled");
		money.style.backgroundColor = "rgba(239, 35, 60, 0.2)";
		money.style.color = "#8a8c97";
	}
});

items.addEventListener("input", (event) => {
	event.preventDefault();

	if (regex.test(event.target.value)) {
		itemsValue = "items";
		saleResetBtn.classList.add("btn-enabled");
		items.style.backgroundColor = "#fff";
		items.style.color = "#2b2d42";

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
		items.style.backgroundColor = "rgba(239, 35, 60, 0.2)";
		items.style.color = "#8a8c97";
	} else {
		itemsValue = "";
		submitSaleBtn.classList.remove("btn-enabled");
		submitSaleBtn.disabled = true;
		saleResetBtn.classList.add("btn-enabled");
		items.style.backgroundColor = "rgba(239, 35, 60, 0.2)";
		items.style.color = "#8a8c97";
	}
});

// Sales form `reset` button logic
saleResetBtn.addEventListener("click", (event) => {
	saleResetBtn.blur();

	saleFoodLabel.textContent = "alege un tip de hrană";
	saleFoodBtn.style.backgroundColor = "rgba(239, 35, 60, 0.2)";
	saleFoodLabel.style.color = "#8a8c97";
	money.value = "";
	money.style.backgroundColor = "rgba(239, 35, 60, 0.2)";
	money.style.color = "#8a8c97";
	items.value = "";
	items.style.backgroundColor = "rgba(239, 35, 60, 0.2)";
	items.style.color = "#8a8c97";

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

// Sales form `submit` button logic
submitSaleBtn.addEventListener("click", (event) => {
	foodValue = "";
	money.style.backgroundColor = "rgba(239, 35, 60, 0.2)";
	money.style.color = "#8a8c97";
	items.style.backgroundColor = "rgba(239, 35, 60, 0.2)";
	items.style.color = "#8a8c97";
});

// Sales form Spinner buttons logic
const moneySpinnerDec = document.querySelector("#moneySpinnerDec");
const moneySpinnerInc = document.querySelector("#moneySpinnerInc");
const itemsSpinnerDec = document.querySelector("#itemsSpinnerDec");
const itemsSpinnerInc = document.querySelector("#itemsSpinnerInc");

moneySpinnerDec.addEventListener("click", (event) => {
	event.preventDefault();
	moneyValue = "money";
	money.style.backgroundColor = "#fff";
	money.style.color = "#2b2d42";

	if (money.value > 0) {
		money.value = getNumber(money.value) - 1;
	}
});

moneySpinnerInc.addEventListener("click", (event) => {
	event.preventDefault();
	moneyValue = "money";
	money.style.backgroundColor = "#fff";
	money.style.color = "#2b2d42";

	if (money.value === "") {
		money.value += 0;
	}
	money.value = getNumber(money.value) + 1;
	saleResetBtn.classList.add("btn-enabled");

	if (foodValue === "food" && itemsValue === "items") {
		submitSaleBtn.classList.add("btn-enabled");
		submitSaleBtn.disabled = false;
	}
});

itemsSpinnerDec.addEventListener("click", (event) => {
	event.preventDefault();
	itemsValue = "items";
	items.style.backgroundColor = "#fff";
	items.style.color = "#2b2d42";

	if (items.value > 10) {
		items.value = getNumber(items.value) - 10;
	}
});

itemsSpinnerInc.addEventListener("click", (event) => {
	event.preventDefault();
	itemsValue = "items";
	items.style.backgroundColor = "#fff";
	items.style.color = "#2b2d42";

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
