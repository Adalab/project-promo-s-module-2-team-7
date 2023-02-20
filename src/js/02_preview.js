/* eslint-disable strict */
function updatePreview() {
    if (data.name === '') {
    previewName.innerHTML = 'Nombre y Apellidos';
    } else {
    previewName.innerHTML = data.name;
    }

    if (data.job === '') {
    previewJob.innerHTML = 'Front-end developer';
    } else {
    previewJob.innerHTML = data.job;
    }

    previewMail.href= `mailto:${data.email}`;
    previewPhone.href = `tel:${data.phone}`;
    previewLinkedin.href = `https://linkedin.com/in/${data.linkedin}`;
    previewGithub.href  = `https://github.com/${data.github}`;
    
}




const handleClickReset = () => {
    

    data.palette = 1;
    data.name = '';
    data.job = '';
    data.phone = '';
    data.email = '';
    data.linkedin = '';
    data.github = '';
    data.photo = '';

    updatePreview();
   


    
    for (let i = 0; i < allInputsList.length; i++) {
    allInputsList[i].value = ''; 
}
}


buttonReset.addEventListener('click', handleClickReset);