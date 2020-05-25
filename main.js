
window.addEventListener("load", ()=>{
  let lati;
  let longi;
  
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position=>{
    
      longi = position.coords.longitude;
      lati = position.coords.latitude;
      const proxy ='https://cors-anywhere.herokuapp.com';
      const api = `${}api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&appid=${your api key}`;
    });
  };
});
