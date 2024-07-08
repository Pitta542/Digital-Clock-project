function UpdateClock(){
    const now = new Date();
    let Hours = now.getHours().toString().padStart(2, 0);
    const meridiem = Hours >= 12 ? "PM" : "AM";
    Hours = Hours % 12 || 12;
    Hours = Hours.toString().padStart(2, 0);
    const Minutes = now.getMinutes().toString().padStart(2, 0);
    const Seconds = now.getSeconds().toString().padStart(2, 0);
    const TimeString = `${Hours}:${Minutes}:${Seconds} ${meridiem}`;
    document.getElementById("clock").textContent = TimeString;
}

UpdateClock();
setInterval(UpdateClock, 1000);