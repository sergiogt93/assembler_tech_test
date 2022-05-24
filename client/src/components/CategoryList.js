import { useState } from "react";

import { useCategoryContext } from "../context/Category/CategoryContext";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useGifContext } from "../context/Gif/GifContext";

export const CategoryList = () => {
  const { categories } = useCategoryContext();
  const { searchGifsByCategory } = useGifContext();

  const handleSearchGif = (e) => {
    searchGifsByCategory(e.currentTarget.textContent);
  };

  return (
    <Autocomplete
      disablePortal
      options={categories.map((category) => category.name)}
      sx={{ marginTop: 3, paddingX: 50 }}
      renderInput={(params) => <TextField {...params} label="Categories" />}
      onChange={handleSearchGif}
    />
  );
};
