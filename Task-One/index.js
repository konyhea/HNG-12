function currentTime() {
    const timeNow = new Date().toLocaleTimeString();
    document.getElementById('currentTime').textContent = timeNow;
}

// Call once to display the time immediately
currentTime();

// Update every second
setInterval(currentTime, 1000);
