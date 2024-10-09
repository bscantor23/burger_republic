import { API_BASE_URL } from "../constants";
import bcrypt from "bcryptjs";

export const validateFormController = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const response = await fetch(`${API_BASE_URL}/users`);
  const data = await response.json();

  const user = data.find((user: any) => user.email === email);
  if (user && (await bcrypt.compare(password, user.password))) {
    return user;
  }
};
