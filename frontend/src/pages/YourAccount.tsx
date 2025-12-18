import { AccountConfig } from "../components/AccountConfig";
import { ContainerBox } from "../components/ContainerBox";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { Spacing } from "../components/Spacing";

export function YourAccount () {

  return (<>
    <NavBar/>
      <Spacing/>
      <AccountConfig/>
   
    <Footer/>
  </>)
}