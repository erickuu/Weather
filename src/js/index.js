const pointUrl = 'http://api.weatherapi.com/v1/current.json?key=4cc20ceba315426996f43152212712&aqi=no';
let country = '';
let data = '';


var input = document.getElementById("input");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    event.preventDefault();
    weather(event.target.value);
  }
});

function weather(search){
  fetch(`${pointUrl}&q=${search}`)
  .then(response => response.json())
  .then(data => printD(data))
  .catch(err => console.log(err));
}

function printD(data){
  console.log(data);
  for (var i = 0 ; i < 1 ; i++) {
    const container = document.getElementById('country-info');
    console.log(container);
    // Container
    container.innerHTML = ' '+data.location.country;
    container.innerHTML = ' '+data.location.region;
    container.innerHTML = ' '+data.location.name;

    const weatherInfo = document.getElementById('weather-info');
    weatherInfo.innerHTML = ' '+data.current.condition.text ;

    const weatherGrade = document.getElementById('weather-grade');
    console.log(container);
    weatherGrade.innerHTML = ' '+data.current.temp_c+' º';
  }
}
