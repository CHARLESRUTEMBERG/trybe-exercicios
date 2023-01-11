window.onload = () => {
    
    const concordo = document.getElementById('concordo');
    //concordo.addEventListener('change', enableSubmit);

    const submit = document.getElementById('submit')
   

    const enableSubmit = () => {
        const submitButton = document.getElementById('submit');
        //const concordo = document.getElementById('concordo');
        submitButton.disabled = !concordo.checked;
        console.log('olá');
    };

    function textInput() {
        const name = document.getElementById('nome');
        const emailInvalid = name.value.length < 10 || name.value.length > 40;

        const email = document.getElementById('email');
        const nameInvalid = email.value.length < 10 || email.value.length > 50;

        const text = document.getElementById('viajar');
        const textIvalid = text.value.length > 500;

        if (name || email || text) {
            return true;
        } else {
            return false;
        }
    }
    const buttonSubmit = () => {
        // event.preventDefault();
         const validation = textInput();
         if (validation === false) {
             alert('Dados inválidos');
         } else {
             alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.')
         }
         
     }
     submit.addEventListener('click', buttonSubmit);
     
    
    

}