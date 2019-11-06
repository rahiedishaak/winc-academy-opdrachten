// Fetch patients from localStorage
const workingState = fetchState();
const patients = workingState.patients;
const appointments = workingState.appointments;
const dentists = workingState.dentists;
const assistants = workingState.assistants;

// Generate list of patients
const patientsListContainer = document.querySelector('#patients-list');
let patientsList = '<option value="none">- Kies een patient -</option>';
patients.forEach(patient => {
    patientsList += `<option value="${patient.id}">${patient.name} ${patient.surname}</option>`;
});
patientsListContainer.innerHTML = patientsList;

// Update checkbox, based on selected patient
const patientAvailabilityCheckbox = document.querySelector('#patient-availability-checkbox');
patientsListContainer.addEventListener('change', function(event) {
    event.preventDefault();

    if (patientsListContainer.value !== 'none') {
        const patient = patients.find(patient => patient.id === parseInt(patientsListContainer.value))
        patientAvailabilityCheckbox.checked = patient.isAvailable;
    }
});

// Update availability of patient
const updatePatientAvailabilityForm = document.querySelector('#update-patient-availability');
updatePatientAvailabilityForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    if (event.target.patient.value !== 'none') {
        const patient = patients.find(patient => patient.id === parseInt(event.target.patient.value));
        const patientIndex = patients.indexOf(patient);
        const patientAppointments = patient.appointments;

        patient.isAvailable = event.target.available.checked;
        if (!event.target.available.checked) patient.appointments = [];
        patients[patientIndex] = patient;        
        workingState.patients = patients;

        const remainingAppointments = appointments.reduce((filteredAppointments, currentAppointment) => {
            if (currentAppointment.patientID !== patient.id) filteredAppointments.push(currentAppointment);
            return filteredAppointments;
        }, []);
        workingState.appointments = remainingAppointments;

        dentists.forEach(dentist => {
            const dentistAppointments = dentist.appointments;
            const newDentistAppointments = dentistAppointments.reduce((filteredAppointments, currentAppointment) => {
                if (!patientAppointments.includes(currentAppointment)) {
                    filteredAppointments.push(currentAppointment);
                }
                return filteredAppointments;
            }, []);

            dentist.appointments = newDentistAppointments;
        });
        workingState.dentists = dentists;

        assistants.forEach(assistant => {
            const assistantAppointments = assistant.appointments;
            const newAssistantAppointments = assistantAppointments.reduce((filteredAppointments, currentAppointment) => {
                if (!patientAppointments.includes(currentAppointment)) {
                    filteredAppointments.push(currentAppointment);
                }
                return filteredAppointments;
            }, []);

            assistant.appointments = newAssistantAppointments;
        });
        workingState.assistants = assistants;

        localStorage.setItem('state', JSON.stringify(workingState));
        window.location = '/viewCalendar.html';
    }
});