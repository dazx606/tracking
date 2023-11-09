import style from './LateralBtn.module.css';

interface Props {
    img: string,
    label: string,
    styles?: React.CSSProperties
    onPress?:()=>void,
}


export const LateralBtn = ({ img, label, onPress, styles }: Props): JSX.Element => {
    return (
        <div className={style.btn} style={styles ? styles : {}} onClick={onPress} >
            <img src={img} alt={img} className={style.image} />
            <p className={style.text}>{label}</p>
        </div>
    )
}
