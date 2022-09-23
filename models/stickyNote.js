import mongoose from "mongoose";

const StickyNoteSchema = new mongoose.Schema(
	{
		owner: { type: String, required: true },
		details: { type: Number, required: true },
	},

	{ timestamps: true }
);

module.exports = mongoose.model("StickyNote", StickyNoteSchema);
