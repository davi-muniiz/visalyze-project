import { HouseIcon, OctagonXIcon } from "lucide-react";
import { Container } from "../../components/Container";
import styles from "./styles.module.css"
import { Footer } from "../../components/Footer";


export function NotFoundPage() {

  return (<>
  <Container>

     <nav className={styles.fullNav}>
        <aside className={styles.insideNav}>

          <h1><a href="#">Visalyze</a></h1>

          
        </aside>
      </nav>

    
        <div className={styles.containerText}>
          <div className={styles.box}>
            <div className={styles.paddingBox}>
              <div className={styles.iconSvg}>
              < OctagonXIcon/>
              </div>
              <p><strong> Ops... Página não existe!</strong></p>
              <p>Volte para a Página Principal</p>
              <div className={styles.spacingButton}>
              <a  href="#" ><div className={styles.divButton}>
                <HouseIcon/>
              </div>

              </a>
              </div>
            </div>
          </div>
        </div>

        <Footer/>
      
    </Container>



  </>)

}