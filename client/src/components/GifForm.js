import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { uploadImage } from "../firebase/firebase";
import { useGifContext } from "../context/Gif/GifContext";
import { useCategoryContext } from "../context/Category/CategoryContext";
import "./gifForm.css";

export function GifForm() {
  const navigate = useNavigate();
  const { categories, category, setOneCategory } = useCategoryContext();
  const { addGif } = useGifContext();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [fileUpload, setFileUpload] = useState(null);
  const [fileUrl, setFileUrl] = useState("");

  const handleSubmitFullFile = async (e) => {
    e.preventDefault();
    const url = await uploadImage(fileUpload);
    addGif({ category: category._id, url: url });
    navigate("/");
  };

  const handleSubmitUrlFile = (e) => {
    e.preventDefault();
    addGif({ category: category._id, url: fileUrl });
    navigate("/");
  };

  const handleChangeCategory = (e) => {
    const index = categories.findIndex(
      (category) => category.name === e.currentTarget.value
    );
    setOneCategory(categories[index]);
    setSelectedCategory(category.name);
  };

  return (
    <div>
      <h2 className="title-gif-form">Upload File</h2>
      <form>
        <h4>Categorias</h4>
        <select
          required={true}
          value={selectedCategory}
          onChange={handleChangeCategory}
        >
          <option>Seleccione una categoria</option>
          {categories &&
            categories.map(({ _id, name }) => (
              <option key={_id} value={name}>
                {name}
              </option>
            ))}
        </select>
        <h4>GIF</h4>
        <label>Upload a GIF</label>
        <input
          name="fileFull"
          type="file"
          onChange={(e) => setFileUpload(e.currentTarget.files[0])}
        />
        <button onClick={handleSubmitFullFile}>Subir archivo</button>
        <h4>URL</h4>
        <label>Introduzca la dirreción de la imagen</label>
        <input
          name="fileUrl"
          value={fileUrl}
          onChange={(e) => setFileUrl(e.currentTarget.value)}
        />
        <button onClick={handleSubmitUrlFile}>Subir url</button>
      </form>
    </div>
  );
}
