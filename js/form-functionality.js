document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('id_full_form');
    var deetsRef = document.getElementById('id_display_deets');

    if (!form) {
        console.error("Error: Form with ID 'id_full_form' not found.");
        return; // Stop execution if the form isn't found
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the default form submission

        // Update these to match the 'name' attributes in your HTML
        const firstName = form.elements['first-name']?.value || '';
        const lastName = form.elements['last-name']?.value || '';
        const email = form.elements['email']?.value || '';
        const phone = form.elements['phone']?.value || '';
        const address = form.elements['address']?.value || '';
        const city = form.elements['city']?.value || '';
        const state = form.elements['state']?.value || '';
        const zip = form.elements['zip']?.value || '';
        const country = form.elements['country']?.value || '';

        // For file inputs, you'll generally interact with them differently (e.g., FormData)
        // For display purposes, you might just show the file name.
        const resumeFile = form.elements['resume']?.files[0]?.name || 'Not uploaded';
        const coverLetterFile = form.elements['cover-letter']?.files[0]?.name || 'Not uploaded';

        const gender = form.querySelector('input[name="gender"]:checked')?.value || 'Not specified';

        // Correctly get all checked race/ethnicity interests
        const raceEthnicity = Array.from(form.querySelectorAll('input[name="race_ethnicity"]:checked'))
                                 .map(checkbox => checkbox.value)
                                 .join(', ') || 'Not specified';

        const bio = form.elements['bio']?.value || '';


        deetsRef.innerHTML = `
            <h3>Submitted Details:</h3>
            <strong>Name:</strong> ${firstName} ${lastName}<br>
            <strong>Email:</strong> ${email}<br>
            <strong>Phone:</strong> ${phone}<br>
            <strong>Address:</strong> ${address}, ${city}, ${state} ${zip}, ${country}<br>
            <strong>Resume:</strong> ${resumeFile}<br>
            <strong>Cover Letter:</strong> ${coverLetterFile}<br>
            <strong>Gender:</strong> ${gender}<br>
            <strong>Race/Ethnicity:</strong> ${raceEthnicity}<br>
            <strong>Bio:</strong> ${bio}
        `;

        form.reset(); // Reset the form fields after submission
    });
});