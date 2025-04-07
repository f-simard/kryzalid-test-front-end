document.addEventListener("DOMContentLoaded", function () {
	// Code à exécuter une fois que le DOM est chargé
	console.log("DOM chargé lol!");

	// Exemple d'utilisation de l'API Fetch
	Promise.all([
		fetch("http://localhost:4000/posts").then((response) =>
			response.json()
		),
		fetch("http://localhost:4000/categories").then((response) =>
			response.json()
		),
	])
		.then(([posts, categories]) => {
			console.log("Posts récupérés:", posts);
			console.log("Categories récupérées:", categories);

			posts.sort((a, b) => {
				const dateA = new Date(a.date);
				const dateB = new Date(b.date);
				return dateB - dateA;
			});

			renderHeader(categories);
			renderNews(posts, categories);
		})
		.catch((error) => {
			console.error(
				"Erreur lors de la récupération des données :",
				error
			);
		});

	const formHTML = document.querySelector("form");
	formHTML.addEventListener("submit", function (event) {
		event.preventDefault();
	});
});

function renderHeader(categories) {
	const selectHTML = document.querySelector("select");

	selectHTML.innerHTML = "";

	categories.forEach((cat) => {
		const option = document.createElement("option");
		option.value = cat.id;
		option.text = cat.name;
		option.selected = false;

		selectHTML.appendChild(option);
	});
}

function renderNews(news, categories) {
	const containerHTML = document.querySelector(".container");
	const newsTemplate = document.querySelector("#newsTemplate");

	news.forEach((n) => {
		let clone = newsTemplate.content.cloneNode(true);

		let date = new Date(n.date);
		const dateOptions = {
			day: "numeric",
			month: "long",
			year: "numeric",
		};
		const dateFormatted = date.toLocaleDateString("fr-CA", dateOptions);

		const category = categories.find(
			(cat) => cat.id === String(n.categoryId)
		);

		clone.querySelector("[data-news='title']").innerHTML = n.title;
		clone.querySelector("[data-news='date']").innerHTML = dateFormatted;
		clone.querySelector("[data-news='category']").innerHTML =
			category?.name ?? "undefined";
		clone.querySelector("[data-news='intro']").innerHTML = n.intro;
		clone.querySelector("img").src = n.thumbnail;

		containerHTML.appendChild(clone);
	});
}
