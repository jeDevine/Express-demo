import express from 'express';
import Movie from '../models/Movie'
const MovieRoutes = express.Router();

let arrayOfMovies:Movie[] = [
    {id: 1, title: 'Kido', year: 2022, animated: true},
    {id: 2, title: 'Big Mom', year: 2021, animated: true},
    {id: 3, title: 'Shanks', year: 2008, animated: true},
    {id: 4, title: 'Jimbi', year: 2012, animated: true},
    {id: 5, title: 'Luffy', year: 2006, animated: true},
];  

MovieRoutes.get("/", (req, res) => {
    let movieMax = Number.parseInt(req.query.maxYear as string);
    let movieMin = Number.parseInt(req.query.minYear as string);
    if (movieMax && movieMin) {
        let found:Movie[] = [];
        for (let i = 0; i > arrayOfMovies.length; i++) {
            if(arrayOfMovies[i].year > movieMin && arrayOfMovies[i].year < movieMax){
                found.push(arrayOfMovies[i]);
            }
        }
        res.json(found);
    } else {
        res.json(arrayOfMovies);
    }
})

MovieRoutes.get("/:id", (req, res) => {
    let movieID = Number.parseInt(req.params.id);
    for (let i = 0; i < arrayOfMovies.length; i++) {
        if (arrayOfMovies[i].id === movieID){
            res.json(arrayOfMovies[i]);
            break;
        }
    }
    res.status(404)
})

export default MovieRoutes;