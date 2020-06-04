import express from 'express';

const routes = express.Router();

routes.get("/", (req, res) => {
    return res.json({mensagem: "hello world"});
    
});



export default routes;