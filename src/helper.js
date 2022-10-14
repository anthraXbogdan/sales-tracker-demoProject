export const getYear = (date) => {
	return date.getFullYear();
};

export const getMonth = (date) => {
	const options = { month: "long" };
	// return date.getMonth() + 1;
	return new Intl.DateTimeFormat("ro-RO", options).format(date);
};

export const getDate = (date) => {
	return date.getDate();
};

export const getNumber = (string) => {
	return Number.parseInt(string, 10);
};

export const getTotalItems = (itemsArray, keyword, itemSum, domElement) => {
	const filteredItems = itemsArray.filter((item) => {
		return item.type === keyword;
	});

	filteredItems.forEach((item) => {
		itemSum += getNumber(item.items);
	});
	domElement.textContent = itemSum + " buc";
};

export const getCustomStats = (
	itemsArray,
	year,
	month,
	foodType,
	itemsSold,
	itemsDomElement,
	sum,
	sumDomElement
) => {
	const filteredItems = itemsArray.filter((item) => {
		if (month === "toate lunile" && foodType === "toate categ.") {
			return item.year === year;
		}

		if (month === "toate lunile") {
			return item.year === year && item.type === foodType;
		} else if (foodType === "toate categ.") {
			return item.year === year && item.month === month;
		}

		return item.year === year && item.month === month && item.type === foodType;
	});

	filteredItems.forEach((item) => {
		itemsSold += getNumber(item.items);
	});
	itemsDomElement.textContent = itemsSold + " buc";

	filteredItems.forEach((item) => {
		sum += getNumber(item.money);
	});
	sumDomElement.textContent = sum + " lei";
};

export const toggleHidden = (element) => {
	element.classList.toggle("hidden");
};

export const setSelectTitle = (event) => {
	const labelElement = document.querySelector(
		`label[for="${event.target.id}"]`
	).innerHTML;
	return labelElement;
};
