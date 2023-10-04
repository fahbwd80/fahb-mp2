        // Get a reference to the form element
        const form = document.getElementById('checkout-form');

        // Add a submit event listener to the form
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get input values
            const nameOnCard = document.getElementById('name').value;
            const contactNumber = document.getElementById('contact-number').value;
            const cardNumber = document.getElementById('card-number').value;
            const expiringDate = document.getElementById('expiring-date').value;
            const cvc = document.getElementById('cvc').value;

            // Simple validation: Check if required fields are not empty
            if (!nameOnCard || !contactNumber || !cardNumber || !expiringDate || !cvc) {
                alert('Please fill in all fields.');
            } else {
                // If all fields are filled, you can proceed with form submission or other actions
                alert('Form submitted successfully!');
                // Add your form submission logic here
            }
        });