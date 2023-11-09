import { Outlet } from "react-router-dom"
import style from './MainContent.module.css'



export const MainContent = (): JSX.Element => {
    return (

        <div className={style.content}>
            {/* <h3 className={style.title}>ORDENES OFICINA CENTRAL</h3> se cambia el nombre */}


            <Outlet />
        </div>

    )
}
