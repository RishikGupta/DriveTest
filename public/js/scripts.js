/*!
* Start Bootstrap - Clean Blog v6.0.9 (https://startbootstrap.com/theme/clean-blog)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/LICENSE)
*/
window.addEventListener('DOMContentLoaded', () => {
    let scrollPos = 0;
    const mainNav = document.getElementById('mainNav');
    const headerHeight = mainNav.clientHeight;
    window.addEventListener('scroll', function() {
        const currentTop = document.body.getBoundingClientRect().top * -1;
        if ( currentTop < scrollPos) {
            // Scrolling Up
            if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-visible');
            } else {
                mainNav.classList.remove('is-visible', 'is-fixed');
            }
        } else {
            // Scrolling Down
            mainNav.classList.remove(['is-visible']);
            if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-fixed');
            }
        }
        scrollPos = currentTop;
    });
    // using window object's location propery to access the pathname of the current page
    if(window.location.pathname == "/login"){
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
            const password = document.getElementById("password");
            const confirmPassword = document.getElementById("confirm_password");
            console.log(password.value);
            console.log(confirmPassword.value);
            if(password.value !== confirmPassword.value){
                alert("Passwords do not match");
                evt.preventDefault();
            }
        })
    }

    if(window.location.pathname == "/g_page"){
        document.getElementById("license_retrieve").focus();
    }
    if(window.location.pathname == "/getLicense"){
        if(document.getElementById("user_error") == null){
            document.getElementById("update_button").addEventListener("click", (evt) => {
                alert("Your details have been successfully updated");
            })
        }
    }
    const isEmpty = str => !str.trim().length;
    if(window.location.pathname == "/g2_page" || window.location.pathname == "/signupUser"){
        document.getElementById("first_name").focus();
        document.getElementById("submit").addEventListener("click", (evt) => {
            
            let noError = true;
            const username = document.getElementById("username");
            const password = document.getElementById("password");
            const firstName = document.getElementById("first_name");
            const lastName = document.getElementById("last_name");
            const license = document.getElementById("license");
            const age = document.getElementById("age");
            const dob = document.getElementById("dob");
            const carMake = document.getElementById("car_make");
            const carModel = document.getElementById("car_model");
            const carYear = document.getElementById("car_year");
            const carPlate = document.getElementById("car_plate");

            if (isEmpty(username.value)){
                alert("Please enter your username");
                noError = false;
                username.focus();
            }
            else if (isEmpty(password.value)){
                alert("Please enter your password");
                noError = false;
                password.focus();
            }
            else if (isEmpty(firstName.value)){
                alert("Please enter your first name");
                noError = false;
                firstName.focus();
            }
            else if (isEmpty(lastName.value)){
                alert("Please enter your last name");
                noError = false;
                lastName.focus();
            }
            else if (isEmpty(license.value)){
                alert("Please enter your license number");
                noError = false;
                license.focus();
            }
            else if (isEmpty(age.value) || parseInt(age.value) < 18){
                alert("Please enter your age");
                noError = false;
                age.focus();
            }
            else if (isEmpty(dob.value.toString())){
                alert("Please enter your date of birth");
                noError = false;
                dob.focus();
            }
            else if (isEmpty(carMake.value)){
                alert("Please enter your car make");
                noError = false;
                carMake.focus();
            }
            else if (isEmpty(carModel.value)){
                alert("Please enter your car model");
                noError = false;
                carModel.focus();
            }
            else if (isEmpty(carYear.value) || parseInt(carYear.value) < 1950){
                alert("Please enter your car year");
                noError = false;
                carYear.focus();
            }
            else if (isEmpty(carPlate.value)){
                alert("Please enter your car plate");
                noError = false;
                carPlate.focus();
            }
            if (!noError){
                evt.preventDefault();
                return;
            }
            alert("Your details have been saved! Please enter your license number to continue");
        })
        document.getElementById("clear").addEventListener("click", (evt) => {
            document.getElementById("first_name").value = "";
            document.getElementById("last_name").value = "";
            document.getElementById("license").value = "";
            document.getElementById("age").value = "";
            document.getElementById("dob").value = "";
            document.getElementById("car_make").value = "";
            document.getElementById("car_model").value = "";
            document.getElementById("car_year").value = "";
            document.getElementById("car_plate").value = "";
        });
    }
})
