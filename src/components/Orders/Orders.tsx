import { useNavigate } from 'react-router-dom'
import { Button } from '../Button/Button'
import { FormSelect } from '../FormFields/FormSelect'
import style from './Orders.module.css'

interface Props {
  orders: { id: string, from: string, to: string, status: string, name: string }[],
  setFormValue: (text: string) => void,
  options: { value: string, optionName: string }[],
  formValue: string
}

export const Orders = ({ orders, options, setFormValue, formValue }: Props) => {

  const navigate = useNavigate();

  return (
    <div className={style.container}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginInline: 30 }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h2 style={{ paddingBlock: 10 }}>Pedidos</h2>
          <FormSelect label='' options={options} placeHolder='Estado' setFormValue={setFormValue} value={formValue} />
        </div>
        <Button name='Descargar archivo' onClick={() => null} />
      </div>
      <div className={style.tableContainer}>
        <table className={style.table}>
          <thead>
            <tr className={style.tr}>
              <th className={style.th}>ID pedido</th>
              <th className={style.th}>Nombre</th>
              <th className={style.th}>Origen</th>
              <th className={style.th}>Destino</th>
              <th className={style.th}>Estado</th>
            </tr>
          </thead>
          <tbody className={style.body}>
            {
              orders?.map(e =>
                <tr className={style.tr} key={e.id} onClick={ ()=>navigate(`tracking/${e.id}`)}>
                  <td className={style.td}>{e.id}</td>
                  <td className={style.td}>{e.name}</td>
                  <td className={style.td}>{e.from}</td>
                  <td className={style.td}>{e.to}</td>
                  <td className={style.td}>{e.status}</td>
                </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
