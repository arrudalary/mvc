import apis from '../models/apis.js';

class ApiController {
// criando as propriedades das classes que serão responsaveis pelas rotas
    static getAllApis = (req, res) => {
apis.find((err, apis) => {
    res.status(200).json(apis)
})
    }

}

export default ApiController;