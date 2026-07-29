//==============================
// Appointment Modal
//==============================

const appointmentModal = document.getElementById("appointmentModal");
const openButtons = document.querySelectorAll(".open-appointment");
const closeButton = document.getElementById("closeModal");
const appointmentForm = document.querySelector(".appointment-form");
const dateInput = appointmentForm.querySelector("input[type='date']");

//==============================
// Minimum Date = Today
//==============================

const today = new Date().toISOString().split("T")[0];
dateInput.setAttribute("min", today);

//==============================
// Open Modal
//==============================

openButtons.forEach(function(button){

    button.addEventListener("click", function(e){

        e.preventDefault();

        appointmentModal.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});

//==============================
// Close Modal
//==============================

function closeModal(){

    appointmentModal.classList.remove("active");

    document.body.style.overflow = "auto";

}

//==============================
// Close Button
//==============================

closeButton.addEventListener("click", closeModal);

//==============================
// Click Outside
//==============================

appointmentModal.addEventListener("click", function(e){

    if(e.target === appointmentModal){

        closeModal();

    }

});

//==============================
// ESC Key
//==============================

document.addEventListener("keydown", function(e){

    if(e.key === "Escape" && appointmentModal.classList.contains("active")){

        closeModal();

    }

});

//==============================
// Form Submit
//==============================

appointmentForm.addEventListener("submit", function(e){

    e.preventDefault();

    const name = appointmentForm.querySelector("input[type='text']").value.trim();

    const phone = appointmentForm.querySelector("input[type='tel']").value.trim();

    const selects = appointmentForm.querySelectorAll("select");

    const vehicle = selects[0].value;

    const service = selects[1].value;

    const date = appointmentForm.querySelector("input[type='date']").value;

    const time = appointmentForm.querySelector("input[type='time']").value;

    // Validation

    if(name === ""){

        alert("Please enter your full name.");

        return;

    }

    if(phone.length !== 10 || isNaN(phone)){

        alert("Please enter a valid 10-digit phone number.");

        return;

    }

    if(vehicle === "Select Vehicle"){

        alert("Please select a vehicle.");

        return;

    }

    if(service === "Select Service"){

        alert("Please select a service.");

        return;

    }

    if(date === ""){

        alert("Please choose a preferred date.");

        return;

    }

    if(time === ""){

        alert("Please choose a preferred time.");

        return;

    }

    // Success

    alert("✅ Appointment Booked Successfully!\n\nOur team will contact you shortly.");

    appointmentForm.reset();

    closeModal();

});