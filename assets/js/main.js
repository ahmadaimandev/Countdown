// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Set the date we're counting down to (New Year's Day)
    const countDownDate = new Date("January 1, 2024 00:00:00").getTime();

    // Update the countdown every 1 second
    const x = setInterval(function () {
        // Get the current date and time
        const now = new Date().getTime();

        // Calculate the remaining time
        const distance = countDownDate - now;

        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the countdown in the element with id "countdown"
        document.getElementById("countdown").innerHTML =
            "<div class='countdown-item'><span>" + days + "</span> days</div>" +
            "<div class='countdown-item'><span>" + hours + "</span> hours</div>" +
            "<div class='countdown-item'><span>" + minutes + "</span> minutes</div>" +
            "<div class='countdown-item'><span>" + seconds + "</span> seconds</div>";

        // If the countdown is over, display a message
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "Happy New Year!";
        }
    }, 1000);
});
