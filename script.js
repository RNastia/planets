let planets = [
    { name: "Меркурий", size: 4879, distance: 57.9, img: "images/Merkuriy.jpg" },
    { name: "Венера", size: 12104, distance: 108.2, img: "images/Venera.jpg" },
    { name: "Земля", size: 12742, distance: 149.6, img: "images/Zemlya.jpg" },
    { name: "Марс", size: 6779, distance: 227.9, img: "images/Mars.jpg" },
    { name: "Юпитер", size: 139820, distance: 778.3, img: "images/Yupiter.jpg" },
    { name: "Сатурн", size: 116460, distance: 1427, img: "images/saturn.jpg" },
    { name: "Уран", size: 50724, distance: 2871, img: "images/Uran.png" },
    { name: "Нептун", size: 49244, distance: 4495, img: "images/Neptun.jpg" }
];

const quotes = [
    "Космос — это космос",
    "Мы всего лишь пыль звезд.",
    "Вселенная бесконечна, как и наши мечты.",
    "Чем дальше в космос, тем ближе к себе.",
    "Земля — это лишь песчинка во Вселенной."
];

let asc = true;

function renderPlanets(planetsToRender) {
    const planetList = document.getElementById("planet-list");
    planetList.innerHTML = "";
    planetsToRender.forEach((planet) => {
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `<span>${planet.name} - ${planet.size} км</span><img class="planet-img" src=${planet.img} />`;
        planetList.appendChild(div);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const quoteText = document.getElementById("quote");

    renderPlanets(planets);

    document.getElementById("random-quote").addEventListener("click", () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteText.textContent = quotes[randomIndex];
    });

    document.getElementById("theme-toggle").addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    document.getElementById("filter-large").addEventListener("click", () => {
        const bigPlanets = planets.filter(planet => planet.size > 10000);

        renderPlanets(bigPlanets);
    });

    document.getElementById("reset-filter").addEventListener("click", () => {
        renderPlanets(planets);
    });

    document.getElementById("add-planet").addEventListener("click", () => {
        const name = prompt("Введите название планеты:");
        const size = parseInt(prompt("Введите размер планеты (км):"));
        const distance = parseFloat(prompt("Введите расстояние до Солнца (млн км):"));

        if (!name || !size || !distance) {
            alert("Введите корректные данные");
            return;
        }

        planets.push({ name, size, distance, img: "../images/Venera.jpg" });
        renderPlanets(planets);
    });

    document.getElementById("show-nearest").addEventListener("click", () => {
        const sorted = planets.sort((a, b) => a.distance - b.distance);
        const nearestPlanet = sorted[0];
        renderPlanets([nearestPlanet]);
    });

    document.getElementById("search-button").addEventListener("click", () => {
        const searchInput = document.getElementById("search-input");
        const searchValue = searchInput.value.trim().toLowerCase();
        const foundPlanet = planets.find(planet => planet.name.toLowerCase() === searchValue);

        if (foundPlanet) {
            renderPlanets([foundPlanet]);
        } else {
            const planetList = document.getElementById("planet-list");
            planetList.innerHTML = '<div>Планета не найдена</div>';
        }
    });

    document.getElementById("sort-size").addEventListener("click", () => {
        const sorted = asc
            ? planets.sort((a, b) => a.size - b.size)
            : planets.sort((a, b) => b.size - a.size);

        renderPlanets(sorted);

        asc = !asc;
    });

});
