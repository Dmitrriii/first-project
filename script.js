const video = document.getElementById('video');
const btnCamera = document.getElementById('btn-camera');
const btnLocation = document.getElementById('btn-location');
const locationText = document.getElementById('location-text');

// 1. Funcție pentru camera dispozitivului
btnCamera.addEventListener('click', async () => {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream;
    } catch (err) {
        alert("Eroare la accesarea camerei: " + err.message);
    }
});

// 2. Funcție pentru locație GPS
btnLocation.addEventListener('click', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;
                locationText.textContent = `Locație: ${lat}, ${lng}`;
                
                // Trimite la Firebase
                database.ref('locations').set({ lat, lng });
            },
            (error) => {
                alert("Eroare locație: " + error.message);
            }
        );
    } else {
        alert("Geolocația nu este suportată pe acest dispozitiv.");
    }
});