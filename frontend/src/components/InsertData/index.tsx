import styles from "./styles.module.css";
import { DefaultButton } from "../DefaultButton";
import { SaveIcon } from "lucide-react";

export function InsertDateComp() {
  function handlePost(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const fileInput = form.querySelector(
      'input[type="file"]'
    ) as HTMLInputElement;

    if (!fileInput.files || fileInput.files.length === 0) {
      alert("Selecione um arquivo");
      return;
    }

    const file = fileInput.files[0];

    const formData = new FormData();
    formData.append("file", file); // 👈 ESSE "file" é a chave do backend

    fetch("http://127.0.0.1:8000/api/filecsv/", {
      method: "POST",
      body: formData, // 👈 NÃO usa JSON.stringify
      // 👈 NÃO coloca headers
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Dados processados:", data);
      })
      .catch((err) => {
        console.error("Erro:", err);
      });
  }

  return (
    <>
      <div className={styles.overlay}>
        <div className={styles.cardUpArch}>
          <div className={styles.cardUpInner}>
            <div className={styles.innerText}>
              <h2>Insira seu arquivo: </h2>
            </div>
            <div className={styles.insertArch}>
              <form className={styles.form} onSubmit={handlePost}>
                <label htmlFor="file"> Arquivo:</label>
                <input type="file" name="file" id="csv" />
                <p>
                  <strong>Somente .csv e .xlsx</strong>
                </p>
                <DefaultButton type="submit" icon={<SaveIcon />} />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
