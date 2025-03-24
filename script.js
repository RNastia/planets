
let planets = [
    { name: "Меркурий", size: 4879, distance: 57.9, img: "../images/Merkuriy.jpg" },
    { name: "Венера", size: 12104, distance: 108.2, img: "../images/Venera.jpg" },
    { name: "Земля", size: 12742, distance: 149.6, img: "../images/Zemlya.jpg" },
    { name: "Марс", size: 6779, distance: 227.9, img: "../images/Mars.jpg" },
    { name: "Юпитер", size: 139820, distance: 778.3, img: "../images/Yupiter.jpg" },
    { name: "Сатурн", size: 116460, distance: 1427, img: "../images/saturn.jpg" },
    { name: "Уран", size: 50724, distance: 2871, img: "../images/Uran.png" },
    { name: "Нептун", size: 49244, distance: 4495, img: "../images/Neptun.jpg" }
];

const quotes = [
    "Космос — это космос",
    "Мы всего лишь пыль звезд.",
    "Вселенная бесконечна, как и наши мечты.",
    "Чем дальше в космос, тем ближе к себе.",
    "Земля — это лишь песчинка во Вселенной."
];



document.addEventListener("DOMContentLoaded", () => {
    const planetList = document.getElementById("planet-list");
    const quoteText = document.getElementById("quote");

    planetList.innerHTML = "";
    planets.forEach((planet) => {
        const div = document.createElement("div");
        div.innerHTML = `<span>${planet.name} - ${planet.size} км</span><img class="planet-img" src=${planet.img} />`;
        div.classList.add("card");
        planetList.appendChild(div);
    })



    document.getElementById("random-quote").addEventListener("click", () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteText.textContent = quotes[randomIndex];
        quoteText.style.opacity = "0";

        setTimeout(() => {
            quoteText.style.opacity = "1";
        }, 100);
    });

    document.getElementById("theme-toggle").addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });


    // const planetList = document.getElementById("planet-list");
    // const planetCount = document.getElementById("planet-count");
    // const searchInput = document.getElementById("search-input");



    // function renderPlanets(planetsToRender) {
    //     planetList.innerHTML = "";
    //     planetsToRender.forEach((planet, index) => {
    //         const li = document.createElement("li");
    //         li.textContent = `${planet.name} - ${planet.size} км`;
    //         planetList.appendChild(li);

    //         setTimeout(() => {
    //             li.classList.add("visible");
    //         }, index * 100);
    //     });

    //     planetCount.textContent = `Всего планет: ${planetsToRender.reduce(acc => acc + 1, 0)}`;
    // }

    // document.getElementById("filter-large").addEventListener("click", () => {
    //     const largePlanets = planets.filter(planet => planet.size > 10000);
    //     renderPlanets(largePlanets);
    // });

    //     document.getElementById("search-button").addEventListener("click", () => {
    //         const searchValue = searchInput.value.trim().toLowerCase();
    //         const foundPlanet = planets.find(planet => planet.name.toLowerCase() === searchValue);

    //         if (foundPlanet) {
    //             renderPlanets([foundPlanet]);
    //         } else {
    //             planetList.innerHTML = '<li>Планета не найдена</li>';
    //         }
    //     });

    //     document.getElementById("reset-filter").addEventListener("click", () => {
    //         renderPlanets(planets);
    //     });

    //     document.getElementById("add-planet").addEventListener("click", () => {
    //         const name = prompt("Введите название планеты:");
    //         const size = parseInt(prompt("Введите размер планеты (км):"));
    //         const distance = parseFloat(prompt("Введите расстояние до Солнца (млн км):"));

    //         if (name && !isNaN(size) && !isNaN(distance)) {
    //             planets.push({ name, size, distance });
    //             renderPlanets(planets);
    //         } else {
    //             alert("Некорректные данные.");
    //         }
    //     });

    //     document.getElementById("show-nearest").addEventListener("click", () => {
    //         const nearestPlanet = planets.sort((a, b) => a.distance - b.distance)[0];
    //         renderPlanets([nearestPlanet]);
    //     });




    //     renderPlanets(planets);
});