const form = document.querySelector("#ticketForm");
const ticketType = document.querySelector("#ticketType");
const studentNumberContainer = document.querySelector("#studentNumberContainer");
const guestCodeContainer = document.querySelector("#guestCodeContainer");
const numbers = document.querySelector("#numbers");
const codes = document.querySelector("#codes");
const output = document.querySelector("#output");

function updateNotesField() {
  const value = ticketType.value;
  if (value === "student"){
    studentNumberContainer.hidden = false;
    numbers.required = true;
  } else{
    studentNumberContainer.hidden = true;
    numbers.required = false; 
  }
  
  if (value === "guest"){
    guestCodeContainer.hidden = false;
    codes.required = true;
  } else{
    guestCodeContainer.hidden = true;
    codes.required = false; 
  }
}

form.addEventListener("change", updateNotesField);
updateNotesField();


// Ensure they choose a date later than the current date
function isPastDate(value) {
  const today = new Date();
  const chosen = new Date(value);
  return chosen < today;
}

function getSelectedCampuses() {
  //.from converts a NodeList into a real array, so then you can use .filter and .map
  return Array.from(campusBoxes)
    .filter(box => box.checked)
    .map(box => box.value); 
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  output.textContent = "";

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const type = form.ticketType.value;
  const eventDate = form.eventDate.value;
  const numbers = form.numbers.value.trim();
  const codes = form.codes.value.trim();
  const value = ticketType.value;

  // Validate the input
  // If they are a student the input label will indicate 'Student I#' and they need to enter a 9 digit student I number.
  if (value === "student" && numbers.length !== 9){
    output.textContent = "Student I# must be 9 digits";
    return;
  }
  
  // If they are a guest the label will indicate 'Access Code' and they need to enter the event code 'EVENT131' 
  if (value === "guest" && codes !== "EVENT131"){
    output.textContent = "Please enter the correct event code";
    console.log("wrong here, line 69");
    return;
  }

  if (isPastDate(eventDate)) {
    output.textContent = "Please choose a later date.";
    console.log("test");
    return;
  }

  output.innerHTML = `
  <h2>Preference Submitted</h2>
  <p>${firstName} ${lastName}</p>
  <p>Email: ${email}</p>
  <p>Event Date: ${eventDate}</p>
  <p>Ticket Type: ${type}</p>
  `;

  form.reset();
  updateNotesField();
});
          