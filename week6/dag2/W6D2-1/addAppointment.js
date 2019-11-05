// Fetch dentists, assistants, patients
const workingState = fetchState();
const dentists = workingState.dentists;
const assistants = workingState.assistants;
const patients = workingState.patients;

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

// Submit appointment to database
const addAppointmentForm = document.querySelector('#add-appointment-form');
addAppointmentForm.addEventListener('submit', function(event) {
    event.preventDefault();

    if (event.target.day.value && event.target.hour.value && event.target.dentist.value && event.target.assistant.value && event.target.patient.value) {
        const appointment = {
            id: workingState.appointments.length + 1,
            day: parseInt(event.target.day.value),
            hour: parseInt(event.target.hour.value),
            dentistID: parseInt(event.target.dentist.value),
            assistantID: event.target.assistant.value === 'none' ? null : parseInt(event.target.assistant.value),
            patientID: parseInt(event.target.patient.value)
        };

        // Add appointment to dentist
        const dentist = workingState.dentists.find(dentist => dentist.id === appointment.dentistID);
        dentist.appointments.push(appointment.id);
        
        const indexDentist = workingState.dentists.findIndex(dentist => dentist.id === appointment.dentistID);
        workingState.dentists[indexDentist] = dentist;
        
        // Add appointment to assistent
        if (event.target.assistant.value !== 'none') {
            const assistant = workingState.assistants.find(assistant => assistant.id === appointment.assistantID);
            assistant.appointments.push(appointment.id);

            const indexAssistant = workingState.assistants.findIndex(assistant => assistant.id === appointment.assistantID);
            workingState.assistants[indexAssistant] = assistant;
        }

        // Add appointment to patient
        const patient = workingState.patients.find(patient => patient.id === appointment.patientID);
        patient.appointments.push(appointment.id);

        const patientIndex = workingState.patients.findIndex(patient => patient.id === appointment.patientID);
        workingState.patients[patientIndex] = patient;

        // Check if dentist and assistant are available at current appointment time
        const appointmentConflict = workingState.appointments.filter(app => 
            (app.day === appointment.day && app.hour === appointment.hour && app.dentistID === appointment.dentistID) || 
            (app.day === appointment.day && app.hour === appointment.hour && app.assistantID === appointment.assistantID) 
        );

        const errorDiv = document.querySelector('#error');

        if (appointmentConflict.length === 0) {
            errorDiv.style.backgroundColor = '';
            errorDiv.style.color = '';
            errorDiv.style.padding = '';
            errorDiv.style.fontWeight = '';
            errorDiv.textContent = '';
            workingState.appointments.push(appointment);
            localStorage.setItem('state', JSON.stringify(workingState));
        } else {
            errorDiv.style.backgroundColor = 'red';
            errorDiv.style.color = 'white';
            errorDiv.style.padding = '10px';
            errorDiv.style.fontWeight = 'bold';
            errorDiv.textContent = 'De tandarts en/of assistent(e) heeft voor dit moment al een afspraak!';
        }
    }
});