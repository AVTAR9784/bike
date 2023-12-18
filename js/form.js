function validateForm(formId) {
  var form = document.getElementById(formId);
  var isValid = true;

  // Resetting previously highlighted fields
  var inputs = form.querySelectorAll('input, select');
  inputs.forEach(function(input) {
    input.classList.remove('is-invalid');
  });

  // Validating each field
  var requiredInputs = form.querySelectorAll('[required]');
  requiredInputs.forEach(function(input) {
    if (input.type === 'select-one') {
      if (input.value.trim() === '') {
        input.classList.add('is-invalid');
        isValid = false;
      }
    } else if (input.type === 'text' || input.type === 'email') {
      if (input.value.trim() === '') {
        input.classList.add('is-invalid');
        isValid = false;
      }
    }
  });

  if (!isValid) {
    // If the form is invalid, prevent submission
    event.preventDefault();
    return false;
  }

  return true;
}