import express from "express";
import  connectDB from "./DB/connectionDB.js";
import userrouter from "./modules/users/users.controller.js";
import notesrouter from "./modules/notes/notes.controller.js";
const app = express();
const PORT = 3000;

const bootstrap = async () => {
  app.use(express.json());
  app.get("/", (req, res) => res.status(200).json({ message: "Hello, World!" }));

  await connectDB();
  app.use("/user", userrouter);
  app.use("/notes",notesrouter)

 app.use("/*demo", (req, res) => res.status(404).json({ message: "Route not found" })); 
 app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
};
export default bootstrap;