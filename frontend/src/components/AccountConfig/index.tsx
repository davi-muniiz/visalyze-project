import { CircleUserIcon, DeleteIcon } from 'lucide-react'
import styles from './styles.module.css'
import { DefaultInput } from '../DefaultInput'
import { DefaultButton } from '../DefaultButton'

export function AccountConfig() {

  return (<>
  <div className={styles.responsive}>
    <div className={styles.generalDiv}>
      <div className={styles.example}>
        <div className={styles.innerExample}>
          <CircleUserIcon/>
          <p> Nome Usuário</p>
        </div>
      </div>
      <div className={styles.accImage}>
        <div className={styles.innerAccImage}>
          <CircleUserIcon />
          <p> Trocar Imagem</p>
        </div>
      </div>
      <div className={styles.nameConfig}>
        <div className={styles.innerNameConfig}>
          <DefaultInput 
          labelText='Username'
          id='username'
          placeholder='Username'/>
        </div>
      </div>
      <div className={styles.emailConfig}>
        <div className={styles.innerEmailConfig}>
          <DefaultInput 
            labelText='Email'
            id='email'
            placeholder='Email'
          />
        </div>
      </div>
      <div className={styles.passwordConfig}>
        <div className={styles.innerPasswordConfig}>
        <DefaultInput 
          labelText='Password'
          id='password'
          placeholder='Password'
        />
        </div>
      </div>

      <div className={styles.deleteAcc}>
        <p> Deseja deletar sua conta?</p>
        <DefaultButton
          icon={< DeleteIcon />}
          color='red'
        />
      </div>
    </div>
  </div>

  </>)
}