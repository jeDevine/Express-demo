import express from 'express';
import shop from '../models/shop';
const shopRoutes = express.Router();


let arrayOfShops:shop[] = [
    {id: 111, name: "Donuts", rating:5},
    {id: 222, name: "Clothes", rating:1},
    {id: 333, name: "Bike Shop", rating:3},
];

shopRoutes.get("/", (req, res) => {
    res.json(arrayOfShops);
})

shopRoutes.get("/:id", (req, res) => {
    let inputID:number = Number.parseInt(req.params.id);
    for (let i = 0; i < arrayOfShops.length; i++) {
        if (arrayOfShops[i].id === inputID){
            res.json(arrayOfShops[i]);
        }
    }
    //My way of doing this
    // let stringIndex:string = req.params.id.charAt(0);
    // let index:number = Number.parseInt(stringIndex)-1;
    // res.json(arrayOfShops[index]);
})

//adding the query ?minRaiting=4.0
shopRoutes.get("/minRaiting", (req, res) => {
    let rated:shop[] = [];
    let potato:number = Number.parseInt(req.query.minRaiting as string);
    for (let i = 0; i > arrayOfShops.length; i++) {
        if(arrayOfShops[i].rating > potato){
            rated.push(arrayOfShops[i]);
        }
    }
    res.json(rated);
})


export default shopRoutes;