// Get the form name from the URL parameters
const urlParams = new URLSearchParams(window.location.search);
const formName = urlParams.get('form');

if (formName) {
    // Update the form heading based on the form name
    document.getElementById('form-heading').textContent = formName.replace('_', ' ').toUpperCase();
}
