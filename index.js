console.log("welocome to project 4");
const user = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
$('#failure').hide();
$('#success').hide();
let validPhone = false;
let validUser = false;
let validMail = false;

user.addEventListener("blur", () => {
    // console.log("event is fired");
    let regx = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;    //[a-zA-Z]([0-9a-zA-Z]){2,10}
    let str = user.value;
    // console.log(regx, str);
    // console.log(regx.test(str));
    if (regx.test(str)) {
        // console.log("your name is valid");
        // let uservaild=document.getElementById("namevalid");
        user.classList.remove('is-invalid');
        validUser = true;
    }
    else {
        // console.log("your name is not valid!");
        user.classList.add('is-invalid')
        validUser = false;
    }
});


email.addEventListener("blur", () => {
    // console.log("event is fired");
    let regx = /^([_\-\.a-zA-Z0-9]+)@([_\-\.a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    // console.log(regx, str);
    // console.log(regx.test(str));
    if (regx.test(str)) {
        // console.log("your email is valid");
        email.classList.remove('is-invalid');
        validMail = true
    }
    else {
        // console.log("your email is not valid!");
        email.classList.add('is-invalid')
        validMail = false;
    }
});


phone.addEventListener("blur", () => {
    // console.log("event is fired");
    let regx = /([0-9]){10}$/;
    let str = phone.value;
    // console.log(regx, str);
    // console.log(regx.test(str));
    if (regx.test(str)) {
        // console.log("your phone number is valid");
        phone.classList.remove('is-invalid');
        validPhone = true;
    }
    else {
        // console.log("your phone number is not valid!");
        phone.classList.add('is-invalid')
        validPhone = false;
    }
});


let submit = document.getElementById("submit");
submit.addEventListener("click", (e) => {
    // console.log("you are submitting");
    e.preventDefault();
    if (validMail && validPhone && validUser) {
        // console.log("phn username and gmail are valid");
        let failure = document.getElementById("failure");
        let success = document.getElementById("success");
        success.classList.add('show');
        $('#success').show();
        $('#failure').hide();

    }
    else {
        // console.log("there is error,user name or phn number or email is not valid");
        let success = document.getElementById("success");
        let failure = document.getElementById("failure");
        failure.classList.add('show');
        $('#failure').show();
        $('#success').hide();
    }

})
