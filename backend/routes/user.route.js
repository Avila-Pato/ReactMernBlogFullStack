import express from "express"

const router  = express.Router()

router.get("/another", (req, res) => {
    res.status(200).send("User route")
})

export default router