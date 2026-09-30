import mongoose from "mongoose";

const usersSchema = new mongoose.Schema(
  {
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  age: { type: Number,  min: 18,
    max: 60 },
 phone: {type:String , required: true}
  },
  {}
);

const usermodel = mongoose.model("user", usersSchema);

export default usermodel;