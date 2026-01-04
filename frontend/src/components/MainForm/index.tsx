import { CheckCheckIcon } from "lucide-react";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import styles from "./styles.module.css";
import { useRef } from "react";

export function MainForm() {
  const UserNameInput = useRef<HTMLInputElement>(null);
  const EmailInput = useRef<HTMLInputElement>(null);
  const Pass1Input = useRef<HTMLInputElement>(null);
  const Pass2Input = useRef<HTMLInputElement>(null);

  async function handleRegister(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const userCreation = {
      username: UserNameInput.current?.value,
      email: EmailInput.current?.value,
      password: Pass1Input.current?.value,
      password2: Pass2Input.current?.value,
    };

    const response = await fetch("http://127.0.0.1:8000/api/register/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userCreation),
    });

    const data = await response.json();
    console.log(data, userCreation);
  }

  return (
    <>
      <div className={styles.containerForm}>
        <form className={styles.formRow} onSubmit={handleRegister} action="">
          <DefaultInput
            id="register"
            labelText="Username"
            placeholder="Username"
            type="text"
            ref={UserNameInput}
          />
          <DefaultInput
            id="email"
            labelText="E-mail"
            placeholder="exemplo@email.com"
            type="email"
            ref={EmailInput}
          />
          <DefaultInput
            id="password"
            labelText="Senha"
            placeholder="Senha"
            type="password"
            ref={Pass1Input}
          />
          <DefaultInput
            id="password2"
            labelText="Confirme sua Senha"
            placeholder="Senha"
            type="password"
            ref={Pass2Input}
          />

          <div className={styles.formBtnRow}>
            <DefaultButton type="submit" icon={<CheckCheckIcon />} />
          </div>

          <div>
            <p>
              Já tem conta? Faça <a href="">Login</a> aqui!
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
