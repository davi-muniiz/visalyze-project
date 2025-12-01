import styles from './styles.module.css'

type DefaultButtonProps = {
  icon: React.ReactNode,
  color?: 'green' | 'red'
} & React.ComponentProps<'button'>

export function DefaultButton({icon, type, color = 'green', ...rest}: DefaultButtonProps) {

  return (
    <>

    <button className={`${styles.defaultbutton} ${styles.color}`} {...rest}>{icon}</button>

    </>
  )
}