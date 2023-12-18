function validateForm(formId) {
    var form = document.getElementById(formId);
    var isValid = true;
  
    // Resetting previously highlighted fields
    var inputs = form.querySelectorAll('input, select');
    inputs.forEach(function(input) {
      input.classList.remove('is-invalid');
    });
  
    // Validating each field
    inputs.forEach(function(input) {
      if (input.hasAttribute('required') && input.value.trim() === '') {
        input.classList.add('is-invalid');
        isValid = false;
      }
    });
  
    if (!isValid) {
      // If the form is invalid, prevent submission
      return false;
    }
  
    // If the form is valid, you can proceed with submission
    // Example: You can submit the form using AJAX or let it submit naturally
    // form.submit();
  
    return true;
  }