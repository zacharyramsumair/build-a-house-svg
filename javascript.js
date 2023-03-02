let cost = 200000;

let completeHouse = document.getElementById("completeHouse");
let landscapingSvg = document.getElementById("landscaping");
let mailboxSvg = document.getElementById("mailbox");
let roadSvg = document.getElementById("road");
let garageSvg = document.getElementById("garage");
let treesSvg = document.getElementById("trees");

let landscapingButton = document.querySelector(".landscaping");
let mailboxButton = document.querySelector(".mailbox");
let roadButton = document.querySelector(".road");
let garageButton = document.querySelector(".garage");
let treesButton = document.querySelector(".trees");
let price = document.querySelector(".price");

const updateCost = () => {
	cost = 200000;

	if (completeHouse.classList.contains("addLandscaping")) {
        cost += 30000;

		landscapingSvg.style.display = "block";
	} else {
		landscapingSvg.style.display = "none";
	}

	if (completeHouse.classList.contains("addMailbox")) {
		mailboxSvg.style.display = "block";
		cost += 300;
	} else {
		mailboxSvg.style.display = "none";
	}

	if (completeHouse.classList.contains("addRoad")) {
		roadSvg.style.display = "block";

		cost += 35000;
	} else {
		roadSvg.style.display = "none";
	}

	if (completeHouse.classList.contains("addGarage")) {
		garageSvg.style.display = "block";

		cost += 100000;
	} else {
		garageSvg.style.display = "none";
	}

	if (completeHouse.classList.contains("addTrees")) {
		treesSvg.style.display = "block";

		cost += 20000;
	} else {
		treesSvg.style.display = "none";
	}

	price.textContent = `Cost $${cost}`;
};

landscapingButton.addEventListener("click", () => {
	landscapingButton.classList.toggle("selected");
	completeHouse.classList.toggle("addLandscaping");
	updateCost();
});
mailboxButton.addEventListener("click", () => {
	mailboxButton.classList.toggle("selected");

	completeHouse.classList.toggle("addMailbox");
	updateCost();
});
roadButton.addEventListener("click", () => {
	roadButton.classList.toggle("selected");

	completeHouse.classList.toggle("addRoad");
	updateCost();
});
garageButton.addEventListener("click", () => {
	garageButton.classList.toggle("selected");

	completeHouse.classList.toggle("addGarage");
	updateCost();
});
treesButton.addEventListener("click", () => {
	treesButton.classList.toggle("selected");
	completeHouse.classList.toggle("addTrees");
	updateCost();
});
