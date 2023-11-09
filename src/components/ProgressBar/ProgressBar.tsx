import style from './ProgressBar.module.css'

interface ProgressBarProps {
    porcentaje: number;
}

export const ProgressBar = ({ porcentaje }: ProgressBarProps): JSX.Element => {
    const estiloBarra = {
        width: `${porcentaje}%`,
    };

    return (
        <div className={style.bar}>
            <div className={style.fill} style={estiloBarra}></div>
        </div>
    );
};

