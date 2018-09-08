const express = require("express");
const router = express.Router();

// import db
const db = require("../../config/mongo");

// import keys
const keys = require("../../config/keys");

router.get("/test", (req, res) => res.json({ testworks: "Test works" }));

// searches for a song
router.post("/search", (req, res) => {
  const { songname } = req.body;
  const { youtubeURI } = keys;

  fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${songname}&regionCode=CA&key=${youtubeURI}`
  )
    .then(res => res.json())
    .then(json => res.json(json));
});

// add song to room
router.post("/add", (req, res) => {
  const {
    code,
    songURL,
    songTitle,
    songThumbnailURL,
    artistTitle,
    sessionUUID
  } = req.body;

  db.collection("rooms")
    .find({ code })
    .asArray()
    .then(results => {
      if (results.length === 0) res.status(404).json({ notfound: "Not found" });

      const result = results[0];
      let exists = false;
      result.songs.forEach(song => {
        if (song.songURL === songURL) exists = true;
      });

      if (exists)
        return res.status(400).json({ alreadyexists: "Song already exists" });

      result.songs.unshift({
        songURL,
        songTitle,
        songThumbnailURL,
        artistTitle,
        upvoters: [sessionUUID]
      });

      // save
      db.collection("rooms")
        .updateOne({ code }, { $set: result })
        .then(response => res.json(response));
    })
    .catch(err => res.status(400).json(err));
});

// add upvote to song
router.post("/upvote", (req, res) => {
  const { code, songURL, sessionUUID } = req.body;

  db.collection("rooms")
    .find({ code })
    .asArray()
    .then(results => {
      if (results.length === 0)
        return res.status(404).json({ notfound: "Not found" });

      let result = results[0];
      result.songs = result.songs.map(song => {
        if (song.songURL === songURL) {
          if (song.upvoters.indexOf(sessionUUID) >= 0)
            return res.status(400).json({ alreadyupvoted: "Already upvoted" });

          song.upvoters.unshift(sessionUUID);
        }

        return song;
      });

      // save
      db.collection("rooms")
        .updateOne({ code }, { $set: result })
        .then(results => res.json(results));
    });
});

module.exports = router;
