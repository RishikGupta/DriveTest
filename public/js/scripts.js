/*!
* Start Bootstrap - Clean Blog v6.0.9 (https://startbootstrap.com/theme/clean-blog)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/LICENSE)
*/
window.addEventListener('DOMContentLoaded', () => {
    // using window object's location propery to access the pathname of the current page
    const isEmpty = str => !str.trim().length;
    if(window.location.pathname == "/login" || window.location.pathname == "/"){
        
        let today = setDate();
        document.getElementById("dob").setAttribute("max", today);
        document.getElementById("signup_link").addEventListener("click", (evt) => {
            evt.preventDefault();
            document.getElementById("login_heading").textContent = "Sign Up";
            document.getElementById("signup_container").style.display = "block";
            document.getElementById("login_container").style.display = "none"; 
        });
        document.getElementById("login_link").addEventListener("click", () => {
            document.getElementById("login_heading").textContent = "Login";
            document.getElementById("login_container").style.display = "block";
            document.getElementById("signup_container").style.display = "none"; 
        });
        document.getElementById("submit_signup").addEventListener("click", (evt) => {
            const username = document.getElementById("username");
            const age = document.getElementById("age");
            const dob = document.getElementById("dob");
            const password = document.getElementById("password");
            const confirmPassword = document.getElementById("confirm_password");

            let noError = true;
            if (isEmpty(username.value)){
                alert("Please enter your username");
                noError = false;
                username.focus();
            }
            else if( isEmpty(age.value) || parseInt(age.value) < 18 ){
                alert("Age must be greater than or equal to 18");
                noError = false;
                age.focus();
            }
            else if(isEmpty(dob.value)){
                alert("Please enter your date of birth");
                noError = false;
                dob.focus();
            }
            else if(password.value !== confirmPassword.value || isEmpty(password.value)){
                alert("Passwords are incorrect");
                noError = false;
                password.focus();
            }
            if(!noError)
                evt.preventDefault();
        })
    }
    if(window.location.pathname == "/g_page" || window.location.pathname == "/g2_page"){
        let today = setDate();
        document.getElementById("dob").setAttribute("max", today);
        appointmentButtons();
    }
    if(window.location.pathname == "/appointment"){
        appointmentButtons();
    }
    if(window.location.pathname == "/examiner"){
        document.getElementById("g_appointments_button").addEventListener("click", (evt) => {
            evt.preventDefault();
            document.getElementById("g_appointments_container").style.display = "block";
            document.getElementById("g2_appointments_container").style.display = "none";
        })
        document.getElementById("g2_appointments_button").addEventListener("click", (evt) => {
            evt.preventDefault();
            document.getElementById("g2_appointments_container").style.display = "block";
            document.getElementById("g_appointments_container").style.display = "none";
        })
    }
})

const appointmentButtons = () => {
    var allButtons = document.querySelectorAll('button[class^=time_slots]');
    for (var i = 0; i < allButtons.length; i++) {
        allButtons[i].addEventListener('click', function() {
            document.getElementById("selected_time").value = this.value;
        });
    }
}

const setDate = () => {
    let today = new Date()
    let dd = today.getDate()
    let mm = today.getMonth()+1
    let yyyy = today.getFullYear() - 18; 
    if(dd<10)
        dd = "0"+dd
    if(mm<10)
        mm = "0"+mm
    today = `${yyyy}-${mm}-${dd}`;
    return today;
}
