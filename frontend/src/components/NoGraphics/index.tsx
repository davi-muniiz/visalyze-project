import { ChartLine } from "lucide-react";
import { DefaultButton } from "../DefaultButton";
import styles from "./styles.module.css";

export function NoGraphics() {
  function handleButton() {}

  return (
    <>
      <div className={styles.outsideBox}>
        <div className={styles.insideBox}>
          <p>
            Ops, nenhum gráfico por aqui! <br /> Comece agora!
          </p>
          <div className={styles.buttonDiv}>
            <DefaultButton
              type="submit"
              icon={<ChartLine />}
              onSubmit={handleButton}
            />
          </div>
        </div>
      </div>
    </>
  );
}
