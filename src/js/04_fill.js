function showErrorMsg() { 
   for (let i = 0; i < errorMsg.length; i++) { 
       errorMsg[i].innerHTML = ""; 
       errorMsg[i].innerHTML += `<i class="fa-solid fa-circle-exclamation"></i>Introduce tu ${errorMsg[i].id}`;

      console.log(errorMsg[i].id) 

    }   
         
  }


function handleInputForm(event) {
 data[event.target.name] = event.target.value;
 updatePreview();
 if (event.target.value === ""){    
    showErrorMsg();
}
}



for (let i = 0; i < allInputsList.length; i++) {
    allInputsList[i].addEventListener('input', handleInputForm);
}

