import { CircleUserIcon, List } from "lucide-react"
import styles from './styles.module.css'

export function NavBar() {

  return (
    <>
      <nav className={styles.fullNav}>
        <aside className={styles.insideNav}>
          <div className={styles.List}>
            <a href="#">{<List/>}</a>
          </div>

          <h1><a href="#">Visalyze</a></h1>

          <div className={styles.CircleUser}>
            <a href="#">{<CircleUserIcon/>}</a>
            </div>
        </aside>
      </nav>

    </>
  )
}