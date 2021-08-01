const express = require("express");

const validUrl = require("valid-url");

const shortid = require("shortid");

const router = express.Router();

const Url = require("../models/url.models");
const shortid = require("shortid");

const baseUrl = "http:localhost:5000";

router.post("/short", async (req, res) => {
  console.log(req.body);
  const { longUrl } = req.body;
  if (!validUrl.isUri(baseUrl)) {
    return res.status(401).json({
      message: "Invalid Base URL",
    });
  }
  const urlCode = shortid.generate();
  if (validUrl.isUri(longUrl)) {
    try {
      let url = await Url.findOne({
        longUrl,
      });
      if (url) {
        res.json(url);
      } else {
        const shortUrl = baseUrl + "/" + urlCode;
        url = new Url({
          longUrl,
          shortUrl,
          urlCode,
          date: new Date(),
        });
        await url.save();
        res.json(url);
        res.status(200).json({
          message: "Data fetched successfully",
          postData: url,
        });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "something went wrong",
        error: err,
      });
    }
  } else {
    res.status(401).json({
      message: "Invalid longUrl",
      error: err,
    });
  }
});

module.exports = router;
