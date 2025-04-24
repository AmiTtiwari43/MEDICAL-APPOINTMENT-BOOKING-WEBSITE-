// Appointment form submission simulation
document.getElementById('appointment-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Gather form data
    const formData = {
        patientName: document.getElementById('patientName').value,
        email: document.getElementById('email').value,
        phoneNumber: document.getElementById('phoneNumber').value,
        appointmentDate: document.getElementById('appointmentDate').value,
        appointmentTime: document.getElementById('appointmentTime').value,
        doctor: document.getElementById('doctor').value,
        reason: document.getElementById('reason').value
    };

    // Basic validation
    if (!/^\d{10}$/.test(formData.phoneNumber)) {
        alert('Please enter a valid 10-digit phone number.');
        return;
    }

    const today = new Date();
    const selectedDate = new Date(formData.appointmentDate);
    if (selectedDate < today) {
        alert('Please select a future date for the appointment.');
        return;
    }

    // Simulate submission
    console.log('Appointment Data:', formData); // For debugging
    alert(`Appointment request submitted successfully for ${formData.patientName} with ${formData.doctor} on ${formData.appointmentDate} at ${formData.appointmentTime}.`);
    this.reset();
});

// Set minimum date to today
document.getElementById('appointmentDate').min = new Date().toISOString().split('T')[0];
