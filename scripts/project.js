
/* Declare and initialize global variables */
const articlesElement = document.getElementById("articles");
/* W05: Programming Tasks */
let wData = null;
let URL = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,rain&timezone=auto&forecast_days=1"

function getCoordinates() {
    let long = document.querySelector("#longitude").value;
    let lati = document.querySelector("#latitude").value;    
    let days = document.querySelector("#days").value;
    if (days == "") {
        days = "1";
    }
    URL = `https://api.open-meteo.com/v1/forecast?latitude=${lati}&longitude=${long}&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,rain&timezone=auto&forecast_days=${days}`;
    reset();
    getData();
}

document.querySelector("#apply").addEventListener("click", getCoordinates);

function createTables (targetArticle){
    const newTable = document.createElement("table");
    newTable.innerHTML = 
    `<tr>
        <th>Hour</th>
        <th>Temperature</th>
        <th>Apparent Temperature</th>
        <th>Rain</th>
        <th>Relative Humidity</th>
    </tr>`;
    targetArticle.appendChild(newTable);
    return newTable;
}

function populateTables(newTable, weatherData, startIndex) {
    let end = startIndex + 24;
    
    for (let i = startIndex; i < end; i++) {
        const newRow = document.createElement("tr");
        newRow.innerHTML = 
            `<td>${weatherData.hourly.time[i].slice(11,16)}</td>
            <td>${weatherData.hourly.apparent_temperature[i]}</td>
            <td>${weatherData.hourly.temperature_2m[i]}</td> 
            <td>${weatherData.hourly.relative_humidity_2m[i]}</td>
            <td>${weatherData.hourly.rain[i]}</td>`
        newTable.appendChild(newRow);
    }
}

/* async displayTemples Function */
const displayTables = () => {
    let startIndex = 0;
    let tablesNumber = URL.charAt(URL.length - 1)
    for (let x = 0; x < Number(tablesNumber); x++) {
        const newArt = document.createElement("article");
        const title = document.createElement("h3");
        let titleText = wData.hourly.time[startIndex].slice(0,10)
        title.textContent = titleText;
        articlesElement.appendChild(newArt);
        newArt.appendChild(title);
        let table = createTables(newArt);
        populateTables(table, wData, startIndex);
        startIndex += 24; // Increment the starting index for the next iteration
    };
}

/* async getTemples Function using fetch()*/
const getData = async () => {
    const response = await fetch(URL);
    if (response.ok) {
        wData = await response.json();
        displayTables(wData);
    }
}

/* reset Function */
function reset() {
    articlesElement.innerHTML = "";
}

/* filterTemples Function */

getData();

