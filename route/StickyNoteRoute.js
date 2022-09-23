import express from "express";
import StickyNote from "../models/stickyNote";

const router = express.Router();

router.post("/", async (req, res) => {
	const newNote = new StickyNote(req.body);

	try {
		const note = await newNote.save();
		res.status(201).json(note);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.delete("/:id", async (req, res) => {
  try {
    await StickyNote.findByIdAndDelete(req.params.id);
    res.status(200).json("Note has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const note = await StickyNote.findById(req.params.id);
    res.status(200).json(note);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/",  async (req, res) => {
  const query = req.query.new;
  try {
    const notes = query
      ? await StickyNote.find().sort({ _id: -1 }).limit(5)
      : await StickyNote.find();
     
    res.status(200).json(notes);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  
  try {
    const updatedNote = await StickyNote.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedNote);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;