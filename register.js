/** @type {HTMLFormElement} */
let form = document.getElementById("register-form")

form.addEventListener("submit", function(e){
    e.preventDefault()

    //username min 8 char dan minimal 2 kata
    let username = document.getElementById("username")

    //email ends with @gmail.com
    let email = document.getElementById("email")

    //min 6 karakter dan contains 1 angka, 1 kapital, 1 lowercase
    let password = document.getElementById("password")

    //equals with pass
    let confirm = document.getElementById("confirm_password")

    //not empty
    let dob =  document.getElementById("dob")

    //not empty
    let gender = document.getElementById("gender")

    //not empty
    let plan = form.plan


    let errorText = document.getElementById("error-txt")

    errorText.innerText =""
    if(username.value.length < 8){
        errorText.innerText = "username must at least 8 character"
    }
    else if(username.value.trim().split(" ").length < 2){
        // "aku meisya" 
        errorText.innerText = "username at least 2 words"
    }
    else if(!email.value.endsWith("@gmail.com")){
        errorText.innerText = "email must ends with @gmail.com"
    }
    else if(password.value.length < 6){
        errorText.innerText = "password at least must 6 char"
    }
    else if(!validatePassword(password.value)){
        errorText.innerText = "password must at least contain 1 digits, 1 capital, 1 lowercase letter"

    }
    else if(password.value != confirm.value){
        errorText.innerText = "confirm pass must equal to pass"
    }
    else if(dob.value == "" || dob.value == undefined){
        errorText.innerText = "must not empty"
    }
    else if(gender.value == "" || gender.value == undefined){
        errorText.innerText = "must not empty"
    }
    else if(plan.value == "" || plan.value == undefined){
        errorText.innerText = "must not empty"
    }
    // console.log(dob.value == "" || dob.value == undefined){
    //     errorText.innerText = "fail"
    // }
    else{
        let checkbox = document.getElementById("agree_terms")
        if(!checkbox.checked){
            errorText.innerText = " you must agree with terms and conditions"
        }
        else{
            alert("register succes")
            window.open("https://bit.ly/face-mc-shooty", "_blank")
        }
    }











    //alert("Submit")
})

function validatePassword(input){
    let containDigits = false
    let containCapital = false
    let containLowerCase = false

    for(let i = 0; i < input.length; i++){
        const c = input[i]
        if(c >= '0' && c <= '9'){
            containDigits = true
        }
        if( c >= 'A' && c <= 'Z'){
            containCapital = true
        }
        if(c >= 'a' && c <= 'z'){
            containLowerCase = true
        }
    }

    return containDigits && containCapital && containLowerCase
}