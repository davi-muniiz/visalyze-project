import { Container  } from "../Container";
import { useRef } from "react";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import styles from "./styles.module.css"
import { CheckCheckIcon } from "lucide-react";

export function LoginComponent() {

    const UserNameInput = useRef<HTMLInputElement>(null);
    const Pass1Input = useRef<HTMLInputElement>(null);
    

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
 
    const userLogin = {
    "username": UserNameInput.current?.value,
    "password": Pass1Input.current?.value,
    
  }

    const response = await fetch("http://127.0.0.1:8000/api/token/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userLogin), 
  });

  const data = await response.json();
  console.log(data, userLogin);

  }
  

  return (
    <>
      <div className={styles.backgroundDiv}>
        <div className={styles.centralizer}>
          <Container>
            <div className={styles.containerForm}>
              <form className={styles.formRow} onSubmit={handleLogin} action="">
                <DefaultInput
                  id='register'              
                  labelText='Username'
                  placeholder='Username'
                  type='text'
                  ref={UserNameInput}
                />
                <DefaultInput 
                  id='password'
                  labelText='Senha'
                  placeholder='Senha'
                  type='password'
                  ref={Pass1Input}
                />

                  <div className={styles.formBtnRow}>
                    <DefaultButton
                      type='submit'
                      icon={<CheckCheckIcon/>}
                    />
                </div>

                <div>
                  <p>Não tem conta? Faça sua <a href="">Conta</a> aqui!</p>
                </div>
              </form>

          </div>   
          </Container>
        </div>
      </div>
    </>
  )
}