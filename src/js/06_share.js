function handleClickSend(event) {
event.preventDefault();
fetch('https://dev.adalab.es/api/card/', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
})
.then((response) => response.json() )
.then((data) => {
    const textError = document.querySelector('.js-dataError');
    const twitterLink = document.querySelector('.js-share-twitter');
    if(!data.success){
         if(data.error.includes('Mandatory fields')){
            textError.innerHTML = `<p class='text-error'>Faltan datos por rellenar en el formulario.</p>`;
        }else if (data.error.includes('Database error')){
            textError.innerHTML = `<p class='text-error'>Por favor, sube una imagen menor a 200x200px y 120kb</p>`;
        }else{
            textError.innerHTML = `<p class='text-error'>¡Algo estás haciendo mal! Inténtalo de nuevo</p>`;
            console.log(data)
        }
    }else {
       console.log(data);
        linkCard.innerHTML = data.cardURL;
        linkCard.href = data.cardURL;
        twitterLink.href = `https://twitter.com/intent/tweet?text=Mi%20tarjeta%20de%20presentaci%C3%B3n&url=${data.cardURL}`;
    }
})
};

sendBtn.addEventListener('click', handleClickSend)