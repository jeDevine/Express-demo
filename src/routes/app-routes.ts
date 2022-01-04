import express from 'express';
const routes = express.Router();
//localhost:3000
routes.get("/", (req, res) => {
    // res.json("HomePage");
    res.render(`home`,{
        name: "james",
        state: "MI",
        pets: [
            {name: "coco", type: "dog"},
            {name: "leo", type: "cat"}
        ],
        message: "Meeting on the 6th"
        });
}); //rendering the page from home.hbs and passing info
//localhost:3000/node
routes.get("/node", (req, res) => {
    res.json("NodePage");
})

export default routes;