import { LogOutIcon, SunIcon } from "lucide-react"
import styles from './styles.module.css'

export function NavBar() {

  function handleTheme() {

  }

  function handleLogout() {

  }

  return (
    <>
      <nav className={styles.fullNav}>
        <aside className={styles.insideNav}>
          
          <div className={styles.visalyzeH1}>
            <h1><a href="#">Visalyze</a></h1>
          </div>

          <div className={styles.sunIcon}>
            <button type="button" onClick={handleTheme}><SunIcon/></button>
          </div>


          <div className={styles.logoutIcon}>
            <button type="button" onClick={handleLogout}><LogOutIcon/></button>
          </div>

          

        </aside>
      </nav>

    </>
  )
}