import styles from './styles.module.css'

type ContainerBoxProps = {
  width?: '500px' | '1000px',
  children: React.ReactNode;
} & React.ComponentProps<'div'>;


export function ContainerBox({width, children}: ContainerBoxProps) {

  return (<>
    <div className={`${styles.containerBox} ${styles.width}`}>{children}</div>

  </>)

}