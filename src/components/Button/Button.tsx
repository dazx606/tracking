import styles from './Button.module.css';

interface Props {
    name: string,
    onClick: () => void
    type?: 'red' | 'purple' | 'blue' | 'green',
    style?: React.CSSProperties
}

export const Button = ({ type, name, onClick, style }: Props) => {
    return (
        <div title='Sin autorización' style={style ? style : {}} className={`${styles.button} ${type ? styles[type] : ''}`} onClick={onClick}>
           <p className={styles.text}>{name}</p> 
        </div>
    )
}
