const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json())

app.use(cors());

// List of gig objects
let gigs = [{
  name: "Ane Brun",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Ane_Brun_2012-03-29_003.jpg/500px-Ane_Brun_2012-03-29_003.jpg",
  description: "Folk singer-songwriter",
  date: new Date("2025-06-01T00:00:00.000Z"),
  location: "The Town Hall, Accrington",
  id: 1,
},
{
  name: "Radiohead",
  image: "https://cdn.britannica.com/98/162198-050-6452139D/Radiohead-business-models-British-performers-innovator-Internet-2012.jpg?w=300",
  description: "Alternative",
  date: new Date("2025-06-14T00:00:00.000Z"),
  location: "The O2, Bristol",
  id: 2,
},
{
  name: "LCD Soundsystem",
  image: "https://magazine-resources.tidal.com/uploads/2017/09/LCD_1200.jpg",
  description: "Art-rock, electronic experimentalism, proto-punk fusion",
  date: new Date("2025-07-12T00:00:00.000Z"),
  location: "Millenium Stadium, Cardiff",
  id: 3,
}];

// Routes

// GET - /gigs - returns all gigs
app.get('/gigs', (req, res) => {
  res.send(gigs);
});

// GET - {"gig": {Gig where the id matches the one provided in the url}}
app.get("/gigs/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const gig = gigs.find(g => g.id === id);
  if (gig) {
    res.send(gig);
  } else {
    res.status(404).send({error: "Gig not found"});
  }
});

// DELETE - {"gig": {Delete Gig where the id matches the one provided in the url}}
app.delete("/gigs/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const gig = gigs.find(g => g.id === id);
  if (gig) {
    gigs = gigs.filter(g => g.id !== id);
    const data = {message: "Successfully deleted gig",
                  gigs: gigs};
    res.send(data);
    } else {
    res.status(404).send({error: "Gig not found"});
  }
});

// post request to add a gig
app.post("/gigs", (req, res) => {
  const newGig = req.body.gig;
  gigs.push(newGig);
  const message = {message: "Successfully posted new gig", gigs: gigs}
  // send res message
  res.status(201).send(message)
});

// Exports
module.exports = app;