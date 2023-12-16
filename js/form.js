    // Get the form element
    const form = document.querySelector('.form-validate');

    // Function to validate the form
    function validateForm(event) {
        // Prevent the form from submitting by default
        event.preventDefault();

        // Get the form fields
        const name = form.querySelector('[name="yourname"]');
        const email = form.querySelector('[name="email"]');
        const mobile = form.querySelector('[name="Mobile_no"]');
        const service = form.querySelector('[name="service_request"]');

        // Check if fields are empty
        if (name.value.trim() === '') {
            alert('Please enter your name');
            return;
        }

        if (email.value.trim() === '') {
            alert('Please enter your email');
            return;
        }

        if (mobile.value.trim() === '') {
            alert('Please enter your mobile number');
            return;
        }

        if (service.value === 'Select A Service') {
            alert('Please select a service');
            return;
        }

        // If all validations pass, submit the form
        form.submit();
    }

    // Add event listener for form submission
    form.addEventListener('submit', validateForm);