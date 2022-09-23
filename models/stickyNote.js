import mongoose from "mongoose";

const StickyNoteSchema = new mongoose.Schema(
	{
		owner: { type: String, required: true },
		details: { type: String, required: true },
		permission: {
			type: String,
			enum : ['PERSONAL','INTERNAL','PUBLIC'] ,
			required: true
		}
	},

	{ timestamps: true }
);

module.exports = mongoose.model("StickyNote", StickyNoteSchema);
