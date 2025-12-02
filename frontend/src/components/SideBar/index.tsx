import { CircleUserIcon } from 'lucide-react'
import styles from './styles.module.css'

export function SideBar () {

  return (<>
  
  <aside className={styles.externalAside}>
    <div className={styles.innerAside}>
      <div className={styles.iconAside}>
        <a href=""><CircleUserIcon/></a>  
        <p> Nome Usuário</p>
      </div>

      <div className={styles.foldersAside}>
        <ul>
          <li> Exemplo </li>
          <li> Exemplo </li>
          <li>Exemplo </li>
          <li>Exemplo</li>
        </ul>
      </div>
    </div>
  </aside>
  </>)
}