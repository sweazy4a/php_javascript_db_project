document.addEventListener('DOMContentLoaded', function() {
    // check if the button should still be disabled based on stored timestamp
    const submitButton = document.querySelector('.ipSubmitBtn');
    const disabledUntil = localStorage.getItem('submitBtnDisabledUntil');
    if (disabledUntil && new Date().getTime() < disabledUntil) {
      const timeLeft = Math.round((disabledUntil - new Date().getTime()) / 1000);
      submitButton.disabled = true;
      submitButton.innerText = `Submit (${timeLeft}s left)`;
  
      const intervalId = setInterval(() => {
        const currentTime = new Date().getTime();
        const timeLeft = Math.round((disabledUntil - currentTime) / 1000);
        if (timeLeft <= 0) {
          clearInterval(intervalId);
          submitButton.disabled = false;
          submitButton.innerText = 'Submit';
        } else {
          submitButton.innerText = `Submit (${timeLeft}s left)`;
        }
      }, 1000);
  
      return;
    }
  });