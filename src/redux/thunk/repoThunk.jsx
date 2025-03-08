import { createAsyncThunk } from "@reduxjs/toolkit";
const Token = import.meta.env.VITE_API_KEY;
const URLREPOS = "https://api.github.com/users/Viktorwahlqvist/repos";
const URLREADME = "https://api.github.com/repos/Viktorwahlqvist";
const GithubBase = "https://github.com/Viktorwahlqvist/";
// Hämtar alla repon
export const fetchRepos = createAsyncThunk("repos/fetchRepos", async () => {
  const response = await fetch(URLREPOS, {
    headers: {
      Authorization: `token ${Token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Couldn't fetch data...");
  }
  const data = await response.json();

  return data;
});

// Hämta readme filerna i repot.

export const fetchReadMe = createAsyncThunk(
  "readMe/fetchReadMe",
  async (repo) => {
    const response = await fetch(`${URLREADME}/${repo}/readme`, {
      headers: {
        Authorization: `token ${Token}`,
      },
    });
    if (!response.ok) {
      // Har ingen readmefil så skippas det.
      if (response.status === 404) {
        return null;
      }
      throw new Error("Couldn't fetch readme...");
    }
    const data = await response.json();
    // Dekodar Base64
    const content = atob(data.content);

    // funktion för att hitta bilden i readmefilen.
    const getImageLinks = (text) => {
      // Regex för att hitta bilden som är ![image](URL)
      const regex = /!\[.*?\]\((https?:\/\/[^\s]+)\)/g;

      const match = regex.exec(text);
      if (match) {
        //om match finns return första.
        return match[1];
      }
      // om ingen finns return null.
      return null;
    };
    const id = repo.id;
    // använder funktionen för att hitta bilden med content som är readme filen.
    const imageLinks = getImageLinks(content);
    // return allt till slices.
    return { repo, imageLinks, repoLink: `${GithubBase}${repo}`, id };
  }
);
