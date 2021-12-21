import express from 'express';
const routes = express.Router();
//localhost:3000
routes.get("/", (req, res) => {
    res.json("HomePage");
});
//localhost:3000/node
routes.get("/node", (req, res) => {
    res.json("NodePage");
})

export default routes;