const parameters ={
  city_name:"grand-Bornand", 
  APIKEY:"24bb3a9583004b5acfa078769132721a"
 } 
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${parameters.city_name},&appid=${parameters.APIKEY}&units=metric&lang=fr`;
 
fetch(url)
.then((response) =>
   response.json().then((data) => {
  console.log(data);
  document.querySelector("#city").innerHTML=data.name;
  document.querySelector("#temp").innerHTML=
  "<i class='fas fa-thermometer-half'></i>" + data.main.temp + '°';
  document.querySelector("#humidity").innerHTML=
  "<i class='fas fa-tint'></i>"+ data.main.humidity + '%';
  document.querySelector("#wind").innerHTML= 
  "<i class='fas fa-wind'></i>" + data.wind.speed +'km/h';
})
).catch(err => console.log('erreur : ' + err));

