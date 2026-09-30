import mongoose, { Types } from "mongoose";

const notesSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      validate: {
        validator: function (value) {
          return value !== value.toUpperCase();
        },
      },
    },
    content: { type: String, required: true },
       userId: { type: Types.ObjectId, ref: "user", required: true },
  },
  { timestamps: true }
);


const notesmodel = mongoose.model("note", notesSchema);

export default notesmodel;