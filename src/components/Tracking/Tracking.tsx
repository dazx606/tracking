import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { ProgressBar } from "../ProgressBar/ProgressBar";
import style from './Tracking.module.css';

interface Props {
  orders: { id: string, from: string, to: string, status: string, name: string }[],
}


export const Tracking = ({ orders }: Props) => {


  const [order, setOrder] = useState<{ id: string, from: string, to: string, status: string, name: string } | undefined>(undefined)
  const { id } = useParams();

  const getProgress = (status: string): number => {
    switch (status) {
      case 'Entregado':
        return 100


      case 'En preparación':
        return 40

      case 'En camino':
        return 75

      default:
        return 0

    }
  }

  useEffect(() => {
    setOrder(orders.filter(e => e.id === id)[0])
  }, [])

  return (
    <>
      {
        order !== undefined
          ?
          <div className={style.content}>
            <div style={{ display: 'flex', alignItems: 'center', }}>
              <h2>ID de la orden: </h2>
              <p style={{ fontSize: '1.3rem', paddingLeft: '1ch' }}>
                {order.id}
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', paddingTop: '2ch' }}>
              <h2>Estado: </h2>
              <p style={{ fontSize: '1.3rem', paddingLeft: '1ch' }}>
                {order.status}
              </p>
            </div>

            <ProgressBar porcentaje={getProgress(order.status)} />
          </div>
          :
          <h1>order no encontrada</h1>
      }
    </>
  )
}
