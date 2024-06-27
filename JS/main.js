
let loginBtn = document.querySelector('#loginBtn');

let signInEmail =document.querySelector('#signInEmail');
let signInPass =document.querySelector('#signInPass');

let usersArray = [];


if (localStorage.getItem('Users') != null){
    usersArray=  JSON.parse(localStorage.getItem('Users'));
    console.log(usersArray);
}

loginBtn.addEventListener('click', function(e){

    let isExist= false;
    for (const userr of usersArray) {
        if(userr.Email==signInEmail.value && userr.passward==signInPass.value){
            isExist= true;
        }
    }

    if(isExist== true){
        document.querySelector('.paragraph2').classList.add('form-hidden') 
        document.querySelector('.paragraph1').classList.add('form-hidden') 


        let link = document.querySelector('#anch');
        link.href = "./welcomePage.html";

    }else{
        document.querySelector('.paragraph1').classList.remove('form-hidden') 
        document.querySelector('.paragraph2').classList.add('form-hidden') 
    }

    if( signInEmail.value== '' || signInPass.value=='' ){
        document.querySelector('.paragraph2').classList.remove('form-hidden') 
        document.querySelector('.paragraph1').classList.add('form-hidden') 

        
    }
    localStorage.setItem('email',signInEmail.value);
    localStorage.setItem('pass',signInPass.value)


});



