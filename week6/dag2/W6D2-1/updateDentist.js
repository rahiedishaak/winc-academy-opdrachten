// Fetch dentists from localStorage
const workingState = fetchState();
const dentists = workingState.dentists;

// Generate list of dentists
const dentistsListContainer = document.querySelector('#dentists-list');
let dentistsList = '<option value="none">- Kies een tandarts -</option>';
dentists.forEach(dentist => {
    dentistsList += `<option value="${dentist.id}">${dentist.name} ${dentist.surname}</option>`;
});
dentistsListContainer.innerHTML = dentistsList;

// Update checkbox, based on selected dentist
const dentistAvailabilityCheckbox = document.querySelector('#dentist-availability-checkbox');
dentistsListContainer.addEventListener('change', function(event) {
    event.preventDefault();

    if (dentistsListContainer.value !== 'none') {
        const dentist = dentists.find(dentist => dentist.id === parseInt(dentistsListContainer.value))
        dentistAvailabilityCheckbox.checked = dentist.isAvailable;
    }
});

// Update availability of dentist
const updateDentistAvailabilityForm = document.querySelector('#update-dentist-availability');
updateDentistAvailabilityForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    if (event.target.dentist.value !== 'none') {
        const dentist = dentists.find(dentist => dentist.id === parseInt(event.target.dentist.value));
        const dentistIndex = dentists.indexOf(dentist);

        dentist.isAvailable = event.target.available.checked;
        
        dentists[dentistIndex] = dentist;
        workingState.dentists = dentists;
        localStorage.setItem('state', JSON.stringify(workingState));
        window.location = '/viewCalendar.html';
    }
});