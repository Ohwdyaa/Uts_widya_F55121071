const form = document.getElementById('form');
const Username = document.getElementById('Username');
const Email = document.getElementById('Email');
const Password = document.getElementById('Password');
const Alamat= document.getElementById('Alamat');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();

});

function checkInputs(){
    //value input
    const UsernameValue = Username.value.trim();
    const emailValue = Email.value.trim();
    const passwordValue = Password.value.trim();
    const alamatValue = Alamat.value.trim();
     

    if(UsernameValue ===''){
        setErrorFor(Username, '*)username cannot be blank');
    }else{
        setSuccessFor(Username);
    }

    if(emailValue ===''){
        setErrorFor(Email, '*)Email cannot be blank');
    }else if(!isEmail(emailValue)){
        setErrorFor(Email, '*)Email is not valid');
    }else{
        setSuccessFor(Email);
    }

    if(passwordValue ===''){
        setErrorFor(Password,'*)Password cannot be blank');
    }else{
        setSuccessFor(Password);   
    }

    if(alamatValue ===''){
        setErrorFor(Alamat,'*)Alamat cannot be blank');
    }else{
        setSuccessFor(Alamat); 
    }  

        // show a success message
}   
function setErrorFor(input, message){
    const formControl = input.parentElement; //.form_control
    const small = formControl.querySelector('small');

    //add error message inside small
    small.innerText = message;

    //add error class
    formControl.className = 'form_control error';
}
function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form_control success';
}
function isEmail(Email){
    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(Email);
}