// Add patient
const addPatientForm = document.querySelector('#add-patient-form');
addPatientForm.addEventListener('submit', function(event) {
  event.preventDefault();

  if (event.target.name.value && event.target.surname.value && event.target.phone.value && event.target.email.value && event.target.birthYear.value) {
    const state = fetchState();

    const patient = {
      id: state.patients.length + 1,
      name: event.target.name.value,
      surname: event.target.surname.value,
      phone: event.target.phone.value,
      email: event.target.email.value,
      birthYear: event.target.birthYear.value,
      isAvailable: true,
      appointments: []
    };

    state.patients.push(patient);
    localStorage.setItem('state', JSON.stringify(state));

    event.target.name.value = '';
    event.target.surname.value = '';
    event.target.phone.value = '';
    event.target.email.value = '';
    event.target.birthYear.value = '';
  }
});