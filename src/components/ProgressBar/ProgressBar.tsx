import style from './ProgressBar.module.css'

interface ProgressBarProps {
    porcentaje: number;
}

export const ProgressBar = ({ porcentaje }: ProgressBarProps): JSX.Element => {
    const estiloBarra = {
        width: `${porcentaje}%`,
    };

    return (
        <>
        <div className={style.status}>
            <strong>Orden confirmada</strong>
            <strong>En preparación</strong>
            <strong>En camino</strong>
            <strong>Entregado</strong>
        </div>
        <div className={style.bar}>
            <div className={style.fill} style={estiloBarra}></div>
        </div>
        </>
    );
};

