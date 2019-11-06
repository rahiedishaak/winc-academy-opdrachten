// Fetch state from localStorage
const workingState = fetchState();
const appointments = workingState.appointments;
const patients = workingState.patients;
const dentists = workingState.dentists;
const assistants = workingState.assistants;

// Get requested day
const queryDay = window.location.search;
const day = queryDay.slice(5);

// Update title of document
document.title = `Afspraken op dag ${day}`;

// Update h1
const dayH1 = document.querySelector('#heading-day');
dayH1.textContent = `Afspraken op dag ${day}`;

// Filter appointments => only appointments of requested day
const dayAppointments = appointments.filter(appointment => appointment.day === parseInt(day));

// Sort dayAppointments by time
dayAppointments.sort((appointmentOne, appointmentTwo) => {
    if (appointmentOne.hour < appointmentTwo.hour) return -1;
    else if (appointmentOne.hour > appointmentTwo.hour) return 1;
    else return 0;
});

// Add appointments of day to table
const appointmentsDayTable = document.querySelector('#appointments-day');
const appointmentsContainer = document.querySelector('#appointments-container');
if (dayAppointments.length === 0) {
    appointmentsContainer.innerHTML = 'Er zijn nog geen afspraken voor deze dag';
} else {
    dayAppointments.forEach(appointment => {
        const patient = patients.find(patient => patient.id === appointment.patientID);
        const dentist = dentists.find(dentist => dentist.id === appointment.dentistID);
        let assistant = null;
    
        if (appointment.assistantID) {
            assistant = assistants.find(assistant => assistant.id === appointment.assistantID);
        }    
    
        const tableRow = document.createElement('tr');
        appointmentsDayTable.appendChild(tableRow);
        if (!dentist.isAvailable) {
            tableRow.style.backgroundColor = 'red';
            tableRow.style.color = 'white';
        }
    
        const tableRowCellTime = document.createElement('td');
        tableRowCellTime.textContent = `${appointment.hour}:00 uur`;
        tableRow.appendChild(tableRowCellTime);
    
        const tableRowCellPatient = document.createElement('td');
        tableRowCellPatient.textContent = `${patient.name} ${patient.surname}`;
        tableRow.appendChild(tableRowCellPatient);
    
        const tableRowCellDentist = document.createElement('td');
        tableRowCellDentist.textContent = `${dentist.name} ${dentist.surname}`;
        tableRow.appendChild(tableRowCellDentist);
    
        const tableRowCellAssistant = document.createElement('td');
        tableRowCellAssistant.textContent = assistant ? `${assistant.name} ${assistant.surname}` : '-';
        tableRow.appendChild(tableRowCellAssistant);

        const tableRowCellEdit = document.createElement('td');
        tableRowCellEdit.innerHTML = `<a href="updateAppointment.html?id=${appointment.id}">Bewerken</a>`;
        tableRow.appendChild(tableRowCellEdit);
    });
}
