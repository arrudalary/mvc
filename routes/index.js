import  Router  from 'express';
    
const router = Router();

router.get("/", function (req, res){
    res.status(200).send({   //status tem a ver com sucesso (status 200) ou erro (status 400)
        tittle: "Hello world!",
        version: "1.0.0"
    })
})         

export default router;