import AWN from "awesome-notifications";
import ipRegex from 'ip-regex';

let options = {
  position: "bottom-right",
  icons: {
      enabled: false
  },
  maxNotifications: 1, 
};

function removeDuplicates() {
  const input = document.querySelector('.ipContent');
  const ips = input.value.trim().split(/\s+/);
  const uniqueIps = [...new Set(ips)].join(' ');
  input.value = uniqueIps;
}

function validateIpsFields() {
  const tables = document.querySelectorAll('.tableContainer');
  const input = document.querySelector('.ipContent');
  const errorDiv = document.querySelector('.error-notify');
  const ips = input.value.trim();
  const ipArray = ips.split(/\s+/);
  errorDiv.classList.add('hidden');

  if (ipArray.length > 30) {
    const submitButton = document.querySelector('.ipSubmitBtn');
    
    // check if the button should still be disabled based on stored timestamp
    const disabledUntil = localStorage.getItem('submitBtnDisabledUntil');
    if (disabledUntil && new Date().getTime() < disabledUntil) {
      submitButton.disabled = true;
      return;
    }

    errorDiv.classList.remove('hidden');
    errorDiv.textContent = 'Error: The maximum number of IPs is either greater than 30 or in an invalid format. Please wait for 1 minute.';
    tables.forEach(table => table.classList.add('hidden'));
    // disable the button and store the current timestamp
    submitButton.disabled = true;
    localStorage.setItem('submitBtnDisabledUntil', new Date().getTime() + 60000);
    
    setTimeout(() => {
      submitButton.disabled = false;
      localStorage.removeItem('submitBtnDisabledUntil');

    }, 60000); // 20 seconds
    
    return;
  }

  if (!ipRegex({exact: true}).test(ips)) {
    tables.forEach(table => table.classList.add('hidden'));
    return;
  }
}


document.addEventListener('DOMContentLoaded', function() {
  const submitBtn = document.querySelector('.ipSubmitBtn');
  const tables = document.querySelectorAll('.tableContainer');
  const input = document.querySelector('.ipContent');
  
  submitBtn.addEventListener('click', function(event) {
    event.preventDefault();
    
    removeDuplicates();
    validateIpsFields();
    
    const ips = input.value.trim();
    const ipArray = ips.split(/\s+/);

    if (ipArray.length < 30) {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', '../source/inc/GeoRenderData.php');
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.onload = function() {
        if (xhr.status === 200) {
          const responseText = xhr.responseText;
          
          if (responseText.includes('Fatal Error') || responseText.includes('Uncaught')) {
            tables.forEach(table => table.classList.add('hidden'));
            new AWN().alert('Something went wrong. Please check the IPs you have typed and ensure there are no extra spaces between them.', options);
          } else {
            tables.forEach(table => table.classList.remove('hidden'));
            document.querySelector('.tableContainer').innerHTML = responseText;
            new AWN().success('Data has been successfully generated.', options);
          }
        } else {
          console.error(`Error: ${xhr.status}`);
        }
      };
      xhr.send(`ips=${encodeURIComponent(ips)}`);
    }
  });
});

