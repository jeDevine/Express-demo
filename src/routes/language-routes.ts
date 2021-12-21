import express from 'express';
const languageRoutes = express.Router();

let languages: string[] = ["English", "French", "German", "Spanish"];

//get languages by id
languageRoutes.get("/:id/", (req, res) => {
    let searchID: number = Number.parseInt(req.params.id)-1; //taking id making it index of array
    res.json([languages[searchID]]);
})


//localhost:3000/languages
languageRoutes.get("/" , (req, res) => {
    res.json(languages)
});
//localhost:3000/languages/random
languageRoutes.get("/random", (req, res) => {
    res.json("Random language page");
})

export default languageRoutes;