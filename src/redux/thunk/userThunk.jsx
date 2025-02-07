import { createAsyncThunk } from "@reduxjs/toolkit";
const Token = import.meta.env.VITE_API_KEY;
const URLUSER = "https://api.github.com/users/Viktorwahlqvist";

// Hämta information om user

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  const response = await fetch(URLUSER, {
    headers: {
      Authorization: `token ${Token}`,
    },
  });
  if (!response.ok) {
    throw new Error("Couldn't fetch user...");
  }
  const data = await response.json();
  console.log(data);
  return data;
});
