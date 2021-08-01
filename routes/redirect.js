const express = require('express')

const router = express.Router()

const Url = require('../models/Url')

router.get('/:code', async (req, res) => {
    try {
        const url = await Url.findOne({
            urlCode: req.params.code
        })
        if (url) {
            return res.redirect(url.longUrl)
        } else {
            return res.status(404).json({
                message: "No URL Found",
            });
        }
    }
    catch (err) {
        console.error(err)
        res.status(500).json({
            message: "something went wrong",
            error: err,
        });
    }
})


module.exports = router