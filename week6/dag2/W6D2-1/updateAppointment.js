// Fetch state from localStorage
const workingState = fetchState();
const appointments = workingState.appointments;
const dentists = workingState.dentists;
const assistants = workingState.assistants;
const patients = workingState.patients;

// Find requested appointment
const requestedAppointmentID = window.location.search.slice(4);
const appointment = appointments.find(appointment => appointment.id === parseInt(requestedAppointmentID));
const appointmentIndex = appointments.findIndex(appointment => appointment.id === parseInt(requestedAppointmentID));

// Generate list of dentists
const dentistsListContainer = document.querySelector('#dentists-list');
let dentistsList = '';
dentists.forEach(dentist => {
    dentistsList += `<option value="${dentist.id}">${dentist.name} ${dentist.surname}</option>`;
});
dentistsListContainer.innerHTML = dentistsList;

// Generate list of assistants
const assistantsListContainer = document.querySelector('#assistants-list');
let assistantsList = '';
assistants.forEach(assistant => {
    assistantsList += `<option value="${assistant.id}">${assistant.name} ${assistant.surname}</option>`;
});
assistantsList += `<option value="none">- Geen assistent(e) nodig -</option>`;
assistantsListContainer.innerHTML = assistantsList;

// Generate list of patients
const patientsListContainer = document.querySelector('#patients-list');
let patientsList = '';
patients.forEach(patient => {
    patientsList += `<option value="${patient.id}">${patient.name} ${patient.surname}</option>`;
});
patientsListContainer.innerHTML = patientsList;

// Select current values of appointment in form
const daySelectOptions = document.querySelectorAll('#days-list option');
daySelectOptions.forEach(option => {
    if (appointment.day === parseInt(option.value)) option.selected = true;
});

const hourSelectOptions = document.querySelectorAll('#hours-list option');
hourSelectOptions.forEach(option => {
    if (appointment.hour === parseInt(option.value)) option.selected = true;
});

const dentistSelectOptions = document.querySelectorAll('#dentists-list option');
dentistSelectOptions.forEach(option => {
    if (appointment.dentistID === parseInt(option.value)) option.selected = true;
});

const assistantSelectOptions = document.querySelectorAll('#assistants-list option');
if (appointment.assistantID) {
    assistantSelectOptions.forEach(option => {
        if (appointment.assistantID === parseInt(option.value)) option.selected = true;
    });
} else {
    assistantSelectOptions[assistantSelectOptions.length - 1].selected = true;
}

const patientSelectOptions = document.querySelectorAll('#patients-list option');
patientSelectOptions.forEach(option => {
    if (appointment.patientID === parseInt(option.value)) option.selected = true;
});

// Submit appointment update to database
const updateAppointmentForm = document.querySelector('#update-appointment-form');
updateAppointmentForm.addEventListener('submit', function(event) {
    event.preventDefault();

    if (event.target.day.value && event.target.hour.value && event.target.dentist.value && event.target.assistant.value && event.target.patient.value) {
        const newAppointment = {
            id: appointment.id,
            day: parseInt(event.target.day.value),
            hour: parseInt(event.target.hour.value),
            dentistID: parseInt(event.target.dentist.value),
            assistantID: event.target.assistant.value === 'none' ? null : parseInt(event.target.assistant.value),
            patientID: parseInt(event.target.patient.value)
        };

        // Check if dentist is available at new appointment time
        const appointmentDentistConflict = appointments.filter(app => 
            app.day === newAppointment.day && app.hour === newAppointment.hour && app.dentistID === newAppointment.dentistID);

        // Check if assistant is available at new appointment time
        let appointmentAssistantConflict = [];
        if (newAppointment.assistantID) {
            appointmentAssistantConflict = appointments.filter(app => 
                app.day === newAppointment.day && app.hour === newAppointment.hour && app.assistantID === newAppointment.assistantID);
        }

        const appointmentConflict = appointmentDentistConflict.concat(appointmentAssistantConflict);

        const errorDiv = document.querySelector('#error');

        if (appointmentConflict.length === 0) {
            errorDiv.style.backgroundColor = '';
            errorDiv.style.color = '';
            errorDiv.style.padding = '';
            errorDiv.style.fontWeight = '';
            errorDiv.textContent = '';
            appointments[appointmentIndex] = newAppointment;
            workingState.appointments = appointments;
            localStorage.setItem('state', JSON.stringify(workingState));
            history.back();
        } else {
            errorDiv.style.backgroundColor = 'red';
            errorDiv.style.color = 'white';
            errorDiv.style.padding = '10px';
            errorDiv.style.fontWeight = 'bold';
            errorDiv.textContent = 'De tandarts en/of assistent(e) heeft voor dit moment al een afspraak!';
        }
    }
});

// Generate link to go back to previous page
const previousPageLink = document.querySelector('#previous-page-link');
previousPageLink.addEventListener('click', function(event) {
    history.back();
});