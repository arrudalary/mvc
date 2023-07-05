import Router from 'express'; //ISSO É A 1° ROTA  - PÁGINA INICIAL DA APLICAÇÃO // RAUTER

const router = Router();

router.get("/", function (req, res) {   //método https get. é usada para listar coisas - mostrar a página inicial de boas-vindas
    res.status(200).send({   //status tem a ver com sucesso (status 200) ou erro (status 400)
        tittle: "Hello world!",
        version: "1.0.0"
    })
})         

// a função sempre vem com dois parametros = requisição e resposta

export default router;

//local host é o numero da porta, sequencia númerica que serve para simular um domínio(site)
//localhost:8080/dicionario