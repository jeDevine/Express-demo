import express from 'express';
const userRoutes = express.Router();

userRoutes.get("/", (req, res) => {
    res.json("users page");
})

userRoutes.post("/", (req, res) => {
    console.log(req.body);
})
//getting user by id
userRoutes.get("/:id", (req, res) => {
    res.json(`User ID: ${req.params.id}`); //localhost:3000/users/<id number>
})

export default userRoutes;