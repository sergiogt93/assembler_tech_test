import { Main } from "../layouts/Main";
import { CategoryList } from "../components/CategoryList";
import { GifList } from "../components/GifList";

export const Home = () => {
  return (
    <Main>
      <CategoryList />
      <GifList />
    </Main>
  );
};
