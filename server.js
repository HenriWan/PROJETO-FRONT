const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

//sevidor estaticos do front

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

//adicionar o endpoint para ficar recenbendo os dados do forms.

app.post('/api/formulario', (req, res) => {
    console.log(req.body); //isso serve para receber os dados 
        
        res.status(200).json({
            message: 'Formulário recebido!' , 
            data: req.body
        });


});
        
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);

});

