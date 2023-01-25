const  form = document.querySelector("#form");
const  nameInput = document.querySelector("#name");
const  emailInput = document.querySelector("#email");
const  passwordInput = document.querySelector("#password");
const  jobSelect = document.querySelector("#job");

//função de validação
form.addEventListener("submit", (event) => {
    event.preventDefault();

    //verificar se o nome é valido
    if (nameInput.value === ("")){
        alert("Por favor escreva um nome valido!!");
        return;
    }

    // verificar se o email é valido
    if (emailInput.value === ("")){
        alert("Por favor escreva um email valido!!");
        return;
    }

    // verificar se senha é valido
    if (!validatePassword(passwordInput.value, 8)) {
        alert("senha tem que conter no minimo 8 digitos");
        return;
    }

    // selecione huma opção valida
    if (jobSelect.value === "" ) {
        alert("Por favor selecione sua situação!!");
        return;
    }
    //se todos os campos tiverem preenchido , enviar
    form.submit();

});

function validatePassword(password, minDigits){
    if(password.length >= minDigits) {
        //senha valida
        return true
    }
    //senha invalida
    return false
}