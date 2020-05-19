let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI notify the user they can install the PWA
  showInstallPromotion();
});

let buttonInstall = document.querySelector('.install-btn')

buttonInstall.addEventListener('click', (e) => {
  // Hide the app provided install promotion
  hideMyInstallPromotion();
  // Show the install prompt
  deferredPrompt.prompt();
  // Wait for the user to respond to the prompt
  deferredPrompt.userChoice.then((choiceResult) => {
    if (choiceResult.outcome === 'accepted') {
      console.log('User accepted the install prompt');
    } else {
      console.log('User dismissed the install prompt');
    }
  })
});

window.addEventListener('appinstalled', (evt) => {
  console.log('a2hs installed');
});

window.addEventListener("load", ()=>{
  let lati;
  let longi;
  
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position=>{
    
      longi = position.coords.longitude;
      lati = position.coords.latitude;
      const proxy ='https://cors-anywhere.herokuapp.com';
      //const api = `${}`;
    });
  };
});
