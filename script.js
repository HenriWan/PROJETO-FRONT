document.getElementById('contact-form').addEventListener('submit', function(event){
    event.preventDefault(); //evita o envio real do formulario
    alert('Formulário enviado com sucesso! Entraremos em contato em breve.')

    this.reset(); //ajuda na limpeza do formulario de consultoria

});