const express = require("express");
const bodyParser = require("body-parser");

var app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: false}));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("index", {cotacaoDolar: "", cotacaoEuro: "", montanteReais: "", montanteEuros: "", montanteDolar: ""});
} );

app.post("/calcular", function(req, res){
    let cotacaoDolar = parseFloat(req.body.cotacaoDolar);
    let cotacaoEuro = parseFloat(req.body.cotacaoEuro);
    let montanteReais = parseFloat(req.body.montanteReais);
    let montanteDolar = montanteReais / cotacaoDolar;
    let montanteEuros = montanteReais / cotacaoEuro;
    res.render("index", {cotacaoDolar: cotacaoDolar.toFixed(2),
                         cotacaoEuro: cotacaoEuro.toFixed(2),
                         montanteReais: montanteReais.toFixed(2),
                         montanteDolar: montanteDolar.toFixed(2),
                         montanteEuros: montanteEuros.toFixed(2) 
                        });
});

app.listen(3000);
