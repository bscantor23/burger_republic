import { API_BASE_URL } from "../constants";
import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";

export const registerController = async (formData: FormData) => {
  const password = await bcrypt.hash(
    formData.get("registerPassword") as string,
    10
  );

  return await fetch(`${API_BASE_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: uuidv4(),
      avatar: "https://avatars.githubusercontent.com/u/70112741",
      email: formData.get("registerEmail"),
      fullName: formData.get("fullName"),
      address: formData.get("address"),
      phoneNumber: formData.get("phoneNumber"),
      jobTitle: formData.get("jobTitle"),
      password,
    }),
  });
};

export const deleteController = async (id: string) => {
  return await fetch(`${API_BASE_URL}/users/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const updateController = async (formData: FormData) => {
  const userResponse = await fetch(
    `${API_BASE_URL}/users/${formData.get("userId")}`
  );
  const user = await userResponse.json();

  let password;
  if (formData.get("registerPassword")) {
    password = await bcrypt.hash(
      formData.get("registerPassword") as string,
      10
    );
  } else {
    password = user.password;
  }

  return await fetch(`${API_BASE_URL}/users/${formData.get("userId")}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      avatar: user.avatar,
      email: formData.get("registerEmail"),
      fullName: formData.get("fullName"),
      address: formData.get("address"),
      phoneNumber: formData.get("phoneNumber"),
      jobTitle: formData.get("jobTitle"),
      password,
    }),
  });
};
