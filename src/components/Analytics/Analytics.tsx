import style from './Analytic.module.css';
import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/img3.png';

export const Analytics = (): JSX.Element => {

  return (
    <div className={style.content}>

      <div className={style.img1}>
        <img src={img1} alt="" />
      </div>

      <div className={style.img2}>
        <h3>Análisis de pedidos</h3>
        <img src={img2} alt="" />
      </div>

      <div className={style.img3}>
        <h3>Porcentaje de éxito</h3>
        <img src={img3} alt="" />
      </div>
      
      <div className={style.cont}>
        <h3>Pedidos del día</h3>
        <table className={style.table}>
          <thead>
            <tr className={style.tr}>
              <th className={style.th}>ID pedido</th>
              <th className={style.th}>Origen</th>
              <th className={style.th}>Destino</th>
              <th className={style.th}>Estado</th>
            </tr>
          </thead>
          <tbody>
            <tr className={style.tr}>
              <td className={style.td}>7472</td>
              <td className={style.td}>Medellín</td>
              <td className={style.td}>Bogotá</td>
              <td className={style.td}>Recibido</td>
            </tr>
            <tr className={style.tr}>
              <td className={style.td}>7473</td>
              <td className={style.td}>Medellín</td>
              <td className={style.td}>Bogotá</td>
              <td className={style.td}>Enviado</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
