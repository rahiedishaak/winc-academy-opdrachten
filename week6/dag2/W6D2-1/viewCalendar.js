// Fetch appointments
const workingState = fetchState();
const appointments = workingState.appointments;
const dentists = workingState.dentists;
const assistants = workingState.assistants;
const patients = workingState.patients;

// Render appointments to DOM
appointments.forEach(appointment => {
    const appointmentEl = document.getElementById(`${appointment.day}-${appointment.hour}`);

    // Find patient with id of appointment.patientID
    const patient = patients.find(patient => patient.id === appointment.patientID);

    // Find dentist with id of appointment.dentistID
    const dentist = dentists.find(dentist => dentist.id === appointment.dentistID);

    // style to apply when dentist is ill
    let styleSpan = '';
    if (!dentist.isAvailable) styleSpan = 'background-color: red; color: white;';

    appointmentEl.innerHTML += `<span style="${styleSpan}">${patient.name} ${patient.surname}</span><br>`;
})