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
    if (input.type === 'radio') {
      var radioGroup = form.querySelectorAll('[name="' + input.name + '"]:checked');
      if (radioGroup.length === 0) {
        input.classList.add('is-invalid');
        isValid = false;
      }
    } else if (input.value.trim() === '') {
      input.classList.add('is-invalid');
      isValid = false;
    }
  });

  if (!isValid) {
    // If the form is invalid, prevent submission
    event.preventDefault();
    return false;
  }

  return true;
}