import express from 'express';
const search = express.Router();

search.get("/search", (req, res) => {
    res.json(`keyword: ${req.query.keyword} || page: ${req.query.page}`);
})

export default search;