const form=document.querySelector('#form');
const uname=document.querySelector('#uname');
const email=document.querySelector('#email');
const password=document.querySelector('#password');
const cpassword=document.querySelector('#cpassword');
 form.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(!Validate()){
    e.preventDefault();
 }
 })
 function Validate(){
    const uval=uname.value.trim();
    const eval= email.value.trim();
    const  pass=password.value.trim();
    const cpass=cpassword.value.trim();
    let success=true;
    if (uval==='')
    {
      success=false;
      Errror(uname,'Username is required');
    }
    else{
      SetSucess(uname);
    }
    if (eval==='')
    {
      success=false;
      Errror(email,'email is required');
    }
    else if(!validateEmail(eval)){
      success=false;
      Errror(email,'enter a valid email');
    }
    else{
      SetSucess(email);
    }
    if (pass==='')
    {
      success=false;
      Errror(password,'password is required');
    }
    else if(pass.length<8){
      sucess=false;
      Errror(password,'password must be 8characters');
    }
    else{
      SetSucess(password);
    }
    if (cpass==='')
    {
      success=false;
      Errror(cpassword,'confirm password is required');
    }
    else if(cpass!=pass)
    {
      success=false;
      Errror(cpassword,"password doesn't match");
    }
    else{
      SetSucess(cpassword);
    }
   return success; 
 }
 function Errror(ele,msg){ 
    const inputgrp=ele.parentElement;
    const err=inputgrp.querySelector('.error');
    err.innerText=msg;
    inputgrp.classList.add('error')
    inputgrp.classList.remove('success');

 }
 function SetSucess(ele){ 
   const inputgrp=ele.parentElement;
   const err=inputgrp.querySelector('.error');
   err.innerText=msg;
   inputgrp.classList.add('success')
   inputgrp.classList.remove('error');

}
const validateEmail = (email) => {
   return String(email)
     .toLowerCase()
     .match(
       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
     );
 };
