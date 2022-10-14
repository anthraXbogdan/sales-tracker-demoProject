import { toggleHidden, setSelectTitle, getCustomStats } from "./helper";
import { salesItems } from "../main";

const dropdownStatsYear = document.querySelector("#dropdown-stats-year");
const dropdownStatsMonth = document.querySelector("#dropdown-stats-month");
const dropdownStatsFood = document.querySelector("#dropdown-stats-food");

const statsYearLabel = document.querySelector("#stats-year-label");
const statsMonthLabel = document.querySelector("#stats-month-label");
const statsFoodLabel = document.querySelector("#stats-food-label");

const statsYearBtn = document.querySelector("#stats-year-btn");
const statsMonthBtn = document.querySelector("#stats-month-btn");
const statsFoodBtn = document.querySelector("#stats-food-btn");

const showStatBtn = document.querySelector("#show-stat-btn");

const foodType = document.querySelector("#food-type");
const dateElement = document.querySelector("#date");
const itemsSoldDomElement = document.querySelector("#items-sold");
const sumDomElement = document.querySelector("#sum");
const statsResetBtn = document.querySelector("#stats-reset-btn");

const radioBtnsYears = document.getElementsByName("radio-years");
const radioBtnsMonths = document.getElementsByName("radio-months");
const radionBtnsFoods = document.getElementsByName("radio-foods");

const showBtnsLayout = document.querySelector("#stats-buttons-layout");

showStatBtn.disabled = true;

// Toggle dropdown list of options for a statistics parameter (year, month or food)
const toggleOptions = (
	toggleBtn,
	optionsElement,
	secondElement,
	thirdElement
) => {
	toggleBtn.addEventListener("click", (event) => {
		event.preventDefault();

		toggleHidden(optionsElement);
		showBtnsLayout.classList.toggle("addSevenRem");

		if (!secondElement.classList.contains("hidden")) {
			toggleHidden(secondElement);
			showBtnsLayout.classList.toggle("addSevenRem");
		}

		if (!thirdElement.classList.contains("hidden")) {
			toggleHidden(thirdElement);
			showBtnsLayout.classList.toggle("addSevenRem");
		}
	});
};

toggleOptions(
	statsYearBtn,
	dropdownStatsYear,
	dropdownStatsMonth,
	dropdownStatsFood
);
toggleOptions(
	statsMonthBtn,
	dropdownStatsMonth,
	dropdownStatsYear,
	dropdownStatsFood
);
toggleOptions(
	statsFoodBtn,
	dropdownStatsFood,
	dropdownStatsYear,
	dropdownStatsMonth
);

// Arrays for the statistics parameters
const months = [
	"Luna",
	"Toate Lunile",
	"Ianuarie",
	"Februarie",
	"Martie",
	"Aprilie",
	"Mai",
	"Iunie",
	"Iulie",
	"August",
	"Septembrie",
	"Octombrie",
	"Noiembrie",
	"Decembrie",
];
const foods = [
	"Hrana",
	"Toate Categ.",
	"Superworms",
	"Mealworms",
	"Dubia",
	"Redhead",
];

// Create DOM elements of the statistics paramters
export const displayDropdownParams = (array, domElement, name) => {
	array.forEach((element) => {
		let html = `<input 
						type="radio"
						id="stats-${element.toLowerCase()}"
						name="radio-${name}";
						value=${element.toLowerCase()}
						class="option radio-stats"
					/>
					<label 
						for="stats-${element.toLowerCase()}" 
						class="select-item">${element}
					</label>`;
		domElement.insertAdjacentHTML("beforeend", html);
	});
};

displayDropdownParams(months, dropdownStatsMonth, "months");
displayDropdownParams(foods, dropdownStatsFood, "foods");

// Display the selected statistics paramters
const setButtonLabel = (dropdownElement, labelElement, placeholder) => {
	dropdownElement.addEventListener("click", (event) => {
		if (event.target.classList.contains("radio-stats")) {
			labelElement.textContent = setSelectTitle(event);
			toggleHidden(dropdownElement);
			showBtnsLayout.classList.toggle("addSevenRem");

			if (event.target.value != placeholder) {
				statsResetBtn.classList.add("btn-enabled");
			}

			if (
				statsYearLabel.textContent.toLowerCase().trim() === "anul" &&
				statsMonthLabel.textContent.toLowerCase().trim() === "luna" &&
				statsFoodLabel.textContent.toLowerCase().trim() === "hrana"
			) {
				statsResetBtn.classList.remove("btn-enabled");
				showStatBtn.classList.remove("btn-enabled");
			}

			if (
				statsYearLabel.textContent.toLowerCase().trim() != "anul" &&
				statsMonthLabel.textContent.toLowerCase().trim() != "luna" &&
				statsFoodLabel.textContent.toLowerCase().trim() != "hrana"
			) {
				showStatBtn.classList.add("btn-enabled");
				showStatBtn.disabled = false;
			} else {
				showStatBtn.classList.remove("btn-enabled");
			}
		}
	});
};

setButtonLabel(dropdownStatsYear, statsYearLabel, "anul");
setButtonLabel(dropdownStatsMonth, statsMonthLabel, "luna");
setButtonLabel(dropdownStatsFood, statsFoodLabel, "hrana");

let itemsSold = 0;
let sum = 0;

showStatBtn.addEventListener("click", (event) => {
	event.preventDefault();

	itemsSold = 0;
	sum = 0;
	foodType.textContent = statsFoodBtn.textContent.trim();
	dateElement.textContent = `${statsMonthBtn.textContent.trim()} ${statsYearBtn.textContent.trim()}`;

	getCustomStats(
		salesItems,
		Number.parseInt(statsYearBtn.textContent.trim(), 10),
		statsMonthBtn.textContent.trim().toLowerCase(),
		statsFoodBtn.textContent.trim().toLowerCase(),
		itemsSold,
		itemsSoldDomElement,
		sum,
		sumDomElement
	);

	radioBtnsYears.forEach((radioBtn) => {
		radioBtn.checked = false;
	});
	radioBtnsMonths.forEach((radioBtn) => {
		radioBtn.checked = false;
	});
	radionBtnsFoods.forEach((radioBtn) => {
		radioBtn.checked = false;
	});

	showStatBtn.disabled = true;
	statsYearLabel.textContent = "Anul";
	statsMonthLabel.textContent = "Luna";
	statsFoodLabel.textContent = "Hrana";
	statsResetBtn.classList.remove("btn-enabled");
	showStatBtn.classList.remove("btn-enabled");
	showStatBtn.blur();
});

statsResetBtn.addEventListener("click", (event) => {
	event.preventDefault();

	statsResetBtn.blur();
	statsYearLabel.textContent = "Anul";
	statsMonthLabel.textContent = "Luna";
	statsFoodLabel.textContent = "Hrana";

	statsResetBtn.classList.remove("btn-enabled");

	radioBtnsYears.forEach((radioBtn) => {
		radioBtn.checked = false;
	});
	radioBtnsMonths.forEach((radioBtn) => {
		radioBtn.checked = false;
	});
	radionBtnsFoods.forEach((radioBtn) => {
		radioBtn.checked = false;
	});
});
