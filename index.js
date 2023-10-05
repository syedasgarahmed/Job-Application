document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myform');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault(); 
  
      // Get form inputs
      const firstName = document.getElementById('first_name').value.trim();
      const lastName = document.getElementById('last_name').value.trim();
      const email = document.getElementById('email').value.trim();
      const jobRole = document.getElementById('job_role').value;
      const address = document.getElementById('address').value.trim();
      const city = document.getElementById('city').value.trim();
      const pincode = document.getElementById('pincode').value.trim();
      const date = document.getElementById('date').value.trim();
      const upload = document.getElementById('upload').value.trim();
  
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
      clearAllErrorMessages();
  
      let hasError = false;
  
      if (!firstName || firstName.length < 2) {
        hasError = true;
        showError('first-name-error', 'Please enter a valid first name.');
      }
  
      if (!lastName || lastName.length < 2) {
        hasError = true;
        showError('last-name-error', 'Please enter a valid last name.');
      }
  
      if (!emailRegex.test(email)) {
        hasError = true;
        showError('email-error', 'Please enter a valid email address.');
      }
  
      if (jobRole === '') {
        hasError = true;
        showError('job-role-error', 'Please select a job role.');
      }
  
      if (!address) {
        hasError = true;
        showError('address-error', 'Please enter an address.');
      }
  
      if (!city) {
        hasError = true;
        showError('city-error', 'Please enter a city name.');
      }
  
      if (!/^\d{6}$/.test(pincode)) {
        hasError = true;
        showError('pincode-error', 'Please enter a valid 6-digit pincode.');
      }
  
      if (!date) {
      }
  
      if (!upload) {
        hasError = true;
        showError('upload-error', 'Please upload the CV first')
      }
  
      if (!hasError) {
        alert('submitted!');
        form.reset();
      }
    });
  
    function clearAllErrorMessages() {
      const errorElements = document.querySelectorAll('.error');
      errorElements.forEach((errorElement) => {
        errorElement.textContent = '';
      });
    }
  
    function showError(elementId, errorMessage) {
      const errorElement = document.getElementById(elementId);
      if (errorElement) {
        errorElement.textContent = errorMessage;
      }
    }
  });
  