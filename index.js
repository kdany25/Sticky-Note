import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import express from "express";
import Mongoose from "mongoose";
import cors from "cors";
import StickyNoteRoute from "./route/StickyNoteRoute.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;

Mongoose.connect(process.env.MONGO_URL)
	.then(() => console.log("DataBase connection successfull"))
	.catch((err) => {
		console.log(err);
	});

app.use(cors());
app.use(express.json());
app.use("/api/stickyNotes", StickyNoteRoute);

app.listen(PORT, () => {
	console.log("backend has started ");
});
