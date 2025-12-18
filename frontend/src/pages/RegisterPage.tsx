import { Container } from "../components/Container";
import { MainForm } from "../components/MainForm";
import { Spacing } from "../components/Spacing";
import { MainTemplate } from "../templates/MainTemplate";
import styles from './styles.module.css'

export function RegisterPage() {

  return (
    <>
    <MainTemplate>
      <Spacing/>
      <MainForm/>   
    </MainTemplate>      
  
    </>
  )
}