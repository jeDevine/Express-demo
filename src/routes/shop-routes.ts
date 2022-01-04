import express from 'express';
import shop from '../models/shop';
const shopRoutes = express.Router();


let arrayOfShops:shop[] = [
    {id: 111, name: "Donuts", rating:5},
    {id: 222, name: "Clothes", rating:1},
    {id: 333, name: "Bike Shop", rating:3},
];

// using post to create
let nextID = 444;
shopRoutes.post("/", (req, res) => {
    let newShop:shop = {id: nextID, name: req.body.name, rating: req.body.rating}; //setting newShop properties to request properties
    newShop.id = nextID;
    nextID += 111;
    arrayOfShops.push(newShop);
    res.status(201)
    res.json(newShop);
})

//using delete to delete
shopRoutes.delete("/:id", (req, res) => {
    let tobeDeleted:number = Number.parseInt(req.params.id);
    for (let i = 0; i < arrayOfShops.length; i++) {
        if (arrayOfShops[i].id === tobeDeleted) {
            arrayOfShops.splice(i, 1);
        }
    }
    res.status(204);
    res.json("delete was successful");
})

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
    let potato:number = Number.parseFloat(req.query.minRaiting as string);
    for (let i = 0; i > arrayOfShops.length; i++) {
        if(arrayOfShops[i].rating > potato){
            rated.push(arrayOfShops[i]);
        }
    }
    res.json(rated);
})


export default shopRoutes;