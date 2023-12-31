document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('survey-form');
    const resetButton = document.getElementById('reset-button');
    const submitButton = document.getElementById('submit-button');
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('close-popup');
    const formData = document.getElementById('form-data');

    resetButton.addEventListener('click', function () {
        form.reset();
    });

    submitButton.addEventListener('click', function () {
        if (form.checkValidity()) {
            const firstName = document.getElementById('first-name').value;
            const lastName = document.getElementById('last-name').value;
            const dob = document.getElementById('dob').value;
            const country = document.getElementById('country').value;
            const gender = [...document.querySelectorAll('input[name="gender"]:checked')].map(el => el.value);
            const profession = document.getElementById('profession').value;
            const email = document.getElementById('email').value;
            const mobile = document.getElementById('mobile').value;

            formData.innerHTML = `
                <p><strong>First Name:</strong> ${firstName}</p>
                <p><strong>Last Name:</strong> ${lastName}</p>
                <p><strong>Date of Birth:</strong> ${dob}</p>
                <p><strong>Country:</strong> ${country}</p>
                <p><strong>Gender:</strong> ${gender.join(', ')}</p>
                <p><strong>Profession:</strong> ${profession}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Mobile Number:</strong> ${mobile}</p>
            `;

            popup.style.display = 'block';
        } else {
            alert('Please fill in all required fields.');
        }
    });

    closePopup.addEventListener('click', function () {
        popup.style.display = 'none';
        form.reset();
    });
});
