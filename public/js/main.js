const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp_status = document.getElementById('temp_status');
const temp = document.getElementById('temp');

const getInfo = async (event) => {
    event.preventDefault();
    let cityVal = cityName.value;

    if (cityVal == "") {
        city_name.innerText = `Please enter the city name before you search !!!`;
    } else {
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=ddcc777907926c5ca81a0c2adabab224`;
            const response = await fetch(url);
            // console.log(response);
            const data = await response.json();
            const arrData = [data];

            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp.innerText = arrData[0].main.temp;

            const tempMood = arrData[0].weather[0].main;
            console.log(temp);
            console.log(temp_status);

            // condition to check sunny or cloudy
            if (tempMood == "clear") {
                temp_status.innerHTML = "<i class='fa fa-sun style='color: #eccc68;'></i>"
            } else if (tempMood == "cloud") {
                temp_status.innerHTML = "<i class='fa fa-cloud style='color: #f1f2f6;'></i>"
            } else if (tempMood == "Rain") {
                temp_status.innerHTML = "<i class='fa fa-cloud-rain style='color: #a4b0be;'></i>"
            } else {
                temp_status.innerHTML = "<i class='fa fa-cloud style='color: #a4b0be;'></i>"
            }
        } catch {
            city_name.innerText = `Please enter the city name properly !!!`;
        }


    }
}

submitBtn.addEventListener('click', getInfo);


