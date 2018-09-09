const {
  Stitch,
  RemoteMongoClient,
  AnonymousCredential
} = require("mongodb-stitch-server-sdk");

const client = Stitch.initializeDefaultAppClient("pyro-slqqw");

const db = client
  .getServiceClient(RemoteMongoClient.factory, "mongodb-atlas")
  .db("pyro");

client.auth
  .loginWithCredential(new AnonymousCredential())
  .then(user =>
    db
      .collection("songs")
      .updateOne(
        { owner_id: client.auth.user.id },
        { $set: { number: 42 } },
        { upsert: true }
      )
  )
  .then(() =>
    db
      .collection("songs")
      .find({ owner_id: client.auth.user.id }, { limit: 100 })
      .asArray()
  )
  .then(docs => {
    console.log("Found docs", docs);
    console.log("[MongoDB Stitch] Connected to Stitch");
  })
  .catch(err => {
    console.error(err);
  });

module.exports = db;
