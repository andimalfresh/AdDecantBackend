const express = require("express")
const router = express.Router()
const queries = require("./queries_CUSTOMERS.js")


    
    router.get("/", (req,res) => {
       queries.listAll().then(CUSTOMER => res.status(200).send(CUSTOMER))
    })
    router.get("/:id", (req,res) => {
        queries.getById(req.params.id).then(CUSTOMER => res.status(200).send(CUSTOMER))
    })
    router.post("/", (req, res, next) => {
        queries.createCUSTOMER(req.body).then(CUSTOMER => res.status(201).send(CUSTOMER))
    })
    router.delete("/:id", (req, res) => {
        queries.deleteCUSTOMER(req.params.id).then(res.sendStatus(204))
    })
    router.put("/:id", (req, res) => {
        queries.updateCUSTOMER(req.params.id, req.body).then(CUSTOMER => res.json(CUSTOMER))
    })   

    module.exports = router