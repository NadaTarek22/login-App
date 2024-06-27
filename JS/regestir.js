
let userName =document.querySelector('#signinName');
let signUpEmail =document.querySelector('#signInEmail2');
let signUpPass =document.querySelector('#signInPass2');

let usersArray = [];

userName.addEventListener("input", ()=>{
    userName.value= userName.value[0].toUpperCase() + userName.value.slice(1);
});

if (localStorage.getItem('Users') != null){
    usersArray=  JSON.parse(localStorage.getItem('Users'));
    //console.log(usersArray);
}

signUpBtn.addEventListener('click', function(){

    let user = 
    {
        name: userName.value,
        Email : signUpEmail.value,
        passward :signUpPass.value
    };

    if(validEmail()==true && valiPassward()==true && validUserName()==true){

        let isExist= false;
        for (const userr of usersArray) {
            if(userr.name==userName.value && userr.Email==signUpEmail.value && userr.passward==signUpPass.value){
                isExist= true;
            }
        }

        if(isExist== false){
            usersArray.push(user)
            localStorage.setItem('Users',JSON.stringify(usersArray) );
      
            console.log(usersArray);
    
            document.querySelector('.successMsg').classList.remove('form-hidden') 
            document.querySelector('.errorssMsg').classList.add('form-hidden')   
            document.querySelector('.warnningMsg').classList.add('form-hidden') 
            document.querySelector('.emailExMsg').classList.add('form-hidden')

        }else{

            document.querySelector('.successMsg').classList.add('form-hidden') 
            document.querySelector('.errorssMsg').classList.add('form-hidden')   
            document.querySelector('.warnningMsg').classList.add('form-hidden') 
            document.querySelector('.emailExMsg').classList.remove('form-hidden')
        }
        
                   


    }else{
        document.querySelector('.errorssMsg').classList.remove('form-hidden')    
        document.querySelector('.successMsg').classList.add('form-hidden') 
        document.querySelector('.warnningMsg').classList.add('form-hidden') 
        document.querySelector('.emailExMsg').classList.add('form-hidden') 

    }

    if(userName.value=='' || signUpEmail.value== '' || signUpPass.value=='' ){
        document.querySelector('.warnningMsg').classList.remove('form-hidden') 
        document.querySelector('.successMsg').classList.add('form-hidden') 
        document.querySelector('.errorssMsg').classList.add('form-hidden')   
        document.querySelector('.emailExMsg').classList.add('form-hidden') 
 
    }
    

    
});




function validUserName(){
    var nameRegex = /^[a-zA-Z]{3,}$/;
    if(userName.value.match(nameRegex)){
        return true;
    }
    else{
        return false;
    }

};

function validEmail(){
    var emailRegex = /^[\w\-\.]+@(gmail|hotmail|yahoo)\.com$/;
    if(!signUpEmail.value.match(emailRegex)){
        return false;
    }
    else{
        return true;
    }
};

function valiPassward(){
    if(!signUpPass.value.match(/^[^ ]{8,16}$/)){
        return false;
    }
    else{
        return true;
    }
};