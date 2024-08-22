document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('id_full_form');
    var deetsRef = document.getElementById('id_display_deets');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        
        const username = form.elements['username'].value;
        const email = form.elements['email'].value;
        const password = form.elements['password'].value;
        const gender = form.querySelector('input[name="gender"]:checked')?.value || 'Not specified';
        const interests = Array.from(form.querySelectorAll('input[name="interest"]:checked')).map(checkbox => checkbox.value);
        const bio = form.elements['bio'].value;

        deetsRef.innerHTML = `
            <strong>Username:</strong> ${username}<br>
            <strong>Email:</strong> ${email}<br>
            <strong>Password:</strong> ${password}<br>
            <strong>Gender:</strong> ${gender}<br>
            <strong>Interests:</strong> ${interests.join(', ')}<br>
            <strong>Bio:</strong> ${bio}
        `;

        form.reset();
    });
});
