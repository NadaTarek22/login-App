let getEmail= localStorage.getItem('email');
let getPass = localStorage.getItem('pass')
let h1Text= document.querySelector('#h1Text');


if (localStorage.getItem('Users') != null){
    usersArray=  JSON.parse(localStorage.getItem('Users'));
}




for (const userr of usersArray) {
    if(userr.Email==getEmail && userr.passward==getPass){
        h1Text.innerHTML = `Welcome  ${userr.name}`;

    }
}

 

