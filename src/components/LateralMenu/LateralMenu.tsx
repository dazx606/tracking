import style from './LateralMenu.module.css';
import logo from '../../assets/logo.png'
import { LateralBtn } from '../LateralBtn/LateralBtn';
import box from '../../assets/box.png';
import analytics from '../../assets/stats.png';
import truck from '../../assets/truck.png';
import user from '../../assets/user.png';
import config from '../../assets/settings.png';
import info from '../../assets/info.png';
import { useLocation, useNavigate } from "react-router-dom";

export const LateralMenu = () => {

    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className={style.content}>
            <img src={logo} alt="" width={130} />
            <div className={style.btnContainer}>
                <LateralBtn img={box} label='Pedidos' onPress={() => navigate('')} styles={location.pathname === '/app' ? { backgroundColor: '#C0DAEF' } : undefined} />
                <LateralBtn img={analytics} label='Analíticas' onPress={() => navigate('analytics')}
                    styles={location.pathname === '/app/analytics' ? { backgroundColor: '#C0DAEF' } : undefined} />
                <LateralBtn img={truck} label='Rastreo' onPress={() => navigate('tracking/1')}
                    styles={location.pathname === '/app/tracking' ? { backgroundColor: '#C0DAEF' } : undefined} />
                <LateralBtn img={user} label='Cuenta' onPress={() => console.log(location.pathname === '/app')} />
                <LateralBtn img={config} label='Configuración' />
                <LateralBtn img={info} label='Ayuda' />
            </div>
        </div>
    )
}
