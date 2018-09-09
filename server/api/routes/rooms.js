const express = require("express");
const router = express.Router();
const randomstring = require("randomstring");

// import database
const db = require("../../config/mongo");

router.get("/test", (req, res) => {
  res.send({ testsuccess: "Test works" });
});

// creates a room
router.post("/create", (req, res) => {
  let { code, categories, ambiance } = req.body;

  if (!code) code = randomstring.generate(8);
  if (!categories) categories = [];
  if (!ambiance) ambiance = "";

  db.collection("rooms")
    .find({ code })
    .asArray()
    .then(docs => {
      if (docs.length === 0) {
        db.collection("rooms")
          .insertOne({
            code,
            categories,
            ambiance,
            songs: []
          })
          .then(id => res.json({ success: code }))
          .catch(err => res.status(404).json(err));
      } else
        return res.status(404).json({ alreadyexists: "Code already exists" });
    });
});

// find a room
router.post("/find", (req, res) => {
  let { code } = req.body;

  if (!code) return res.status(404).json({ doesnotexist: "Does not exist" });

  db.collection("rooms")
    .find({ code })
    .asArray()
    .then(docs => {
      if (docs.length === 0)
        return res.status(404).json({ doesnotexist: "Does not exist" });
      else {
        const doc = docs[0];
        doc.songs.sort(compare); //sort by upvoters.length
        return res.json(docs[0]);
      }
    })
    .catch(err => res.status(400).json(err));
});

const compare = (song1, song2) => {
  if (song1.upvoters.length < song2.upvoters.length) return 1;
  if (song1.upvoters.length > song2.upvoters.length) return -1;
  return 0;
};

// removes room
router.delete("/", (req, res) => {
  let { code } = req.body;

  if (!code) return res.status(404).json({ doesnotexist: "Does not exist" });

  db.collection("rooms")
    .deleteOne({ code })
    .then(result => {
      if (result.deletedCount === 0)
        res.status(404).json({ doesnotexist: "Does not exist" });
      else return res.status(404).json({ removed: "Room deleted" });
    })
    .catch(err => res.status(404).json({ doesnotexist: "Does not exist" }));
});

// lists all rooms
router.get("/all", (req, res) => {
  db.collection("rooms")
    .find()
    .asArray()
    .then(docs => res.json(docs));
});

module.exports = router;
