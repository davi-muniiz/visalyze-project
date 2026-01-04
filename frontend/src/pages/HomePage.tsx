import { NavBar } from "../components/NavBar";
import { NoGraphics } from "../components/NoGraphics";
import { SideBar } from "../components/SideBar";

export function HomePage() {
  return (
    <>
      <NavBar />
      <SideBar />
      <NoGraphics />
    </>
  );
}
