import userModelData from "../models/user.model";

export const getAllUsersService = async (): Promise<object | string> => {
  try {
    const userDatas = await userModelData.find();
    return userDatas;
  } catch (error) {
    return "Error :" + error;
  }
};

export const getUserByIdService = async (
  user_email: string
): Promise<object | string> => {
  try {
    console.log(user_email);
    const userData = await userModelData.find({ user_email: user_email });
    return userData;
  } catch (error) {
    return "Error :" + error;
  }
};

export const saveUserService = async (
  userData: any
): Promise<object | string> => {
  try {
    console.log("first-", userData);
    const user = new userModelData({
      user_email: userData.user_email,
      loanType: userData.loanType,
      loanPurpose: userData.loanPurpose,
      amount: userData.amount,
      status: userData.status,
    });
    const saveResponse = await user.save();
    return { message: "User added successfully !", saveResponse };
  } catch (error) {
    console.log("ser- ", error);
    return "Error s :" + error;
  }
};

// export const updateUserService = async (
//   data: any
// ): Promise<object | string> => {
//   try {
//     const { _id, ...updateData } = data;
//     const saveResponse = await userModelData.findOneAndUpdate(
//       { _id },
//       updateData
//     );

//     return { message: "UseLoanData added successfully!", saveResponse };
//   } catch (error) {
//     console.log("Error:", error);
//     return "Error: " + error;
//   }
// };
