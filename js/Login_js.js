const form = document.querySelector("form");
eField = form.querySelector(".email"),
eInput = eField.querySelector("input"),
pField = form.querySelector(".password"),
pInput = pField.querySelector("input");
form.onsubmit = (e)=>{
  e.preventDefault(); //impedir el envío de formularios
  //Si el correo electrónico y la contraseña están en blanco, agregue la clase Shake y llame a la función especificada
  (eInput.value == "") ? eField.classList.add("shake", "error") : checkEmail();
  (pInput.value == "") ? pField.classList.add("shake", "error") : checkPass();
  setTimeout(()=>{ //Eliminar la clase de agitación después de 500ms
    eField.classList.remove("shake");
    pField.classList.remove("shake");
  }, 500);
  eInput.onkeyup = ()=>{checkEmail();} //llamar a la función checkEmail en email input keyup
  pInput.onkeyup = ()=>{checkPass();} //llamar a la función checkPassword en pass input keyup
  function checkEmail(){ //checkEmail
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //pattern for validate email
    if(!eInput.value.match(pattern)){ //if pattern not matched then add error and remove valid class
      eField.classList.add("error");
      eField.classList.remove("valid");
      let errorTxt = eField.querySelector(".error-txt");
      //if email value is not empty then show please enter valid email else show Email can't be blank
      (eInput.value != "") ? errorTxt.innerText = "Correo ingresado no valido" : errorTxt.innerText = "El correo no puede estar vacio";
    }else{ //if pattern matched then remove error and add valid class
      eField.classList.remove("error");
      eField.classList.add("valid");
    }
  }
  function checkPass(){ //checkPass function
    if(pInput.value == ""){ //if pass is empty then add error and remove valid class
      pField.classList.add("error");
      pField.classList.remove("valid");
    }else{ //if pass is empty then remove error and add valid class
      pField.classList.remove("error");
      pField.classList.add("valid");
    }
  }
  //si eField y pField no contienen un error en la clase, el usuario rellenó el campo
  if(!eField.classList.contains("error") && !pField.classList.contains("error")){
    window.location.href = "home.html";
  }
}
