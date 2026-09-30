
import usermodel from "../../DB/models/users.model.js";


export const signup = async (req, res,next) => {
  try {
    const { name, email, password, phone, age } = req.body;


    const existingUser = await usermodel.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "Email already exists" });
    }

    const newUser = await usermodel.create(req.body);

    res.status(201).json({
      message: "user created successfully",
      user: {
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        phone: newUser.phone,
        age: newUser.age,
      },
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
  next();
};

export const login = async (req, res, next) => {
  try {
    const { name, password } = req.body;
    const user = await usermodel.findOne({ name, password });

    if (!user) {
      return res.status(401).json({ message: "Invalid name" });
    }
else 
    return res.status(200).json({
      message: "Login successful",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        age: user.age,
      },
    });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
  next();
};

export const update = async (req, res, next) => {
  try {
    const { id } = req.query; 
    const { name, email, age } = req.body; 

    if (email) {
      const existingUser = await usermodel.findOne({
        email,
        _id: { $ne: id }, 
      });
      if (existingUser) {
        return res.status(409).json({ message: "Email already exists" });
      }
    }

    const updatedUser = await usermodel.findByIdAndUpdate(
      id,
      { name, email, age },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "user not found" });
    }

    return res.status(200).json({
      message: "User updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
  next();
};
export const deleteUser = async (req, res, next) => {
    try {
        const { id } = req.query;
        const user = await usermodel.findByIdAndDelete(id);

        if (!user) {
          return res.status(404).json({ message: "User not found" });
        }

        return res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
    next();
};
export const getUser = async (req, res, next) => {
  try {
    const { id } = req.query;

    const user = await usermodel.findById(id).select("-password"); 

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({
      message: "User fetched successfully",
      user,
    });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};