import { Outlet } from "react-router-dom";
import { Header } from "../components/header/Header";
export const Root = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>

      <footer></footer>
    </>
  );
};
