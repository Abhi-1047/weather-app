const submitBtn = document.getElementById('submit');
const cityname = document.getElementById('cityname')
const city_name = document.getElementById('city_name')


const temp_real_val = document.getElementById('temp_real_val')
const temp_status = document.getElementById('temp_status')

const middle_layer = document.getElement
const dataHide = document.querySelector('.middle_layer')
// const dataHide = document.getElementsByClassName('middle_layer')

getInfo = async(event) => {
    event.preventDefault();
    let cityVal = cityname.value;

    
// const params = new URLSearchParams({
//     // access_key:'592c385c9110e5f4f4be245596d3f77b',
//     // 32b22370edc715932b0bdfa3368da561
//     query: `${cityVal} , India`,
//     units: 'm',
// })

    if(cityVal === ''){
        city_name.innerText = `Plz write the name before search`;
        dataHide.classList.add('data_hide');
    }
    else{
        try{
            // const url = `http://api.weatherstack.com/current?${params}`
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=32b22370edc715932b0bdfa3368da561`
            const response = await fetch(url)
            const data = await response.json();
            const arrData = [data];
            // console.log(arrData);

            city_name.innerText = `${arrData[0].name} , ${arrData[0].sys.country} `;

            temp_real_val.innerText = arrData[0].main.temp;
            //check sunny or cloudy
            const tempMood = arrData[0].weather[0].main;

            if(tempMood == 'clear'){
                temp_status.innerHTML = 
                " <i class='fas fa-sun' style='color: #eccc68;'></i> "
            }
            else if(tempMood == 'clouds'){
                temp_status.innerHTML = 
                " <i class='fas fa-cloud' style='color: #f1f2f6;'></i> "
            }
            else if(tempMood == 'Rain'){
                temp_status.innerHTML = 
                " <i class='fas fa-rain' style='color: #a4b0be;'></i> "
            }
            else{
                temp_status.innerHTML = 
                " <i class='fas fa-sun' style='color: #eccc68;'></i> "
            }

        dataHide.classList.remove('data_hide');


        }catch{
        city_name.innerText = `Plz enter the city name properly`;
        dataHide.classList.add('data_hide');

        }

    }
}



submitBtn.addEventListener('click' , getInfo)
// .then(res=> res.json()).then(console.log);