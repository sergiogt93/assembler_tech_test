import { CategoryProvider } from "../context/Category/CategoryContext";
import { GifProvider } from "../context/Gif/GifContext";
import { Header } from "../components/Header";
import "../App.css";

export const Main = ({ children }) => {
  return (
    <div className="App">
      <Header className="App-header" />
      <CategoryProvider>
        <GifProvider>{children}</GifProvider>
      </CategoryProvider>
    </div>
  );
};
