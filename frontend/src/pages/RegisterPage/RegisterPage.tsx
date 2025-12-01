import { Container } from "../../components/Container";
import { MainForm } from "../../components/MainForm";
import styles from './styles.module.css'

export function RegisterPage() {

  return (
    <>
      <div className={styles.backgroundDiv}>
        <div className={styles.centralizer}>
          <Container>
            <MainForm/>   
          </Container>
        </div>
      </div>

    </>
  )
}