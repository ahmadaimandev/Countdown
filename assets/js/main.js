document.addEventListener('DOMContentLoaded', function () {
    // Simulate preloader delay (you may want to remove this in production)
    setTimeout(function () {
      document.querySelector('.d-flex').classList.add('d-none');
      document.querySelector('.container').classList.remove('d-none');
      startCountdown();
    }, 2000); // 2000 milliseconds (2 seconds)

    function startCountdown() {
      const countdownElement = document.getElementById('countdown');

      function updateCountdown() {
        const currentTime = new Date();
        const newYear = new Date(currentTime.getFullYear() + 1, 0, 1);
        const timeDifference = newYear - currentTime;

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
      }

      setInterval(updateCountdown, 1000);
      updateCountdown(); // Initial call to set the initial values
    }
  });