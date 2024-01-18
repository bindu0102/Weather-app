function weather(){
    let city=document.getElementById("place").value;
    let name=document.getElementById("name");
    let degree=document.getElementById("degree");
    let wind=document.getElementById("wind")
    let humidity=document.getElementById("humidity")
    let pressure=document.getElementById("pressure")
    let longitude=document.getElementById("longitude")
    let latittude=document.getElementById("lattitude")
    let cloud=document.getElementById('cloud')
    let apikey='8e0c89584490212921485f1c603d26cf'
  
      let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
      fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      name.innerHTML=data.name
      degree.innerHTML=Math.floor(data.main.feels_like-273)+'°C'
      wind.innerHTML=data.wind.speed+'kmph'
      humidity.innerHTML=data.main.humidity+'%'
      pressure.innerHTML=data.main.pressure+'p'
      longitude.innerHTML=data.coord.lon
      latittude.innerHTML=data.coord.lat
    });
  }