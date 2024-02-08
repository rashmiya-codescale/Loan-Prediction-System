import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  user_email: {
    type: String,
    required: true,
  },
  loanType: {
    type: String,
  },
  loanPurpose: {
    type: String,
  },
  amount: {
    type: Number,
  },
  status: {
    type: String,
  },
});

const userModelData = mongoose.model("UserModelData", userSchema);
export default userModelData;
