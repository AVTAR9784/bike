function validateForm(formId) {
        var form = document.getElementById(formId);
        var inputs = form.querySelectorAll('input, select, textarea');
        var isValid = true;
    
        inputs.forEach(function(input) {
            if (input.hasAttribute('required') && input.value.trim() === '') {
                isValid = false;
            }
            // Add more specific validations as needed for different fields
        });
    
        if (!isValid) {
            alert("Please fill in all required fields.");
            return false;
        }
    
        return true;
    } 