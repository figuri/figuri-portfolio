const skyfinder = document.getElementById('important-project')
const codeQuiz = document.getElementById('code-quiz')
const weatherDashboard = document.getElementById('weather-dashboard')
const workDayScheduler = document.getElementById('work-day-scheduler')
const passwordGenerator = document.getElementById('password-generator')


// make functions for going to links for each project in a new tab

function goToSkyFinder() {
    window.open("https://ssherp.github.io/SkyFinder-project/");
}

function goToCodeQuiz() {
    window.open("https://figuri.github.io/Quizzo/");
}

function goToWeatherDashboard() {
    window.open("https://figuri.github.io/4-cast-app/");
}

function goToWorkDayScheduler() {
    window.open("https://figuri.github.io/PLANIT/");
}

function goToPasswordGenerator() {
    window.open("https://figuri.github.io/YoushallnotPass/");
}

// add event listeners to each project

skyfinder.addEventListener('click', goToSkyFinder);
codeQuiz.addEventListener('click', goToCodeQuiz);
weatherDashboard.addEventListener('click', goToWeatherDashboard);
workDayScheduler.addEventListener('click', goToWorkDayScheduler);
passwordGenerator.addEventListener('click', goToPasswordGenerator);