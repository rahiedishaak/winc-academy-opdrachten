// Add dentist
const addDentistForm = document.querySelector('#add-dentist-form');
addDentistForm.addEventListener('submit', function(event) {
  event.preventDefault();

  if (event.target.name.value && event.target.surname.value && event.target.phone.value && event.target.email.value) {
    const state = fetchState();

    const dentist = {
      id: state.dentists.length + 1,
      name: event.target.name.value,
      surname: event.target.surname.value,
      phone: event.target.phone.value,
      email: event.target.email.value,
      isAvailable: true,
      appointments: []
    };

    state.dentists.push(dentist);
    localStorage.setItem('state', JSON.stringify(state));

    event.target.name.value = '';
    event.target.surname.value = '';
    event.target.phone.value = '';
    event.target.email.value = '';
  }
});