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
    event.preventDefault(); // Prevents form submission
    return false;
  }

  return true;
}