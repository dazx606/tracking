import style from './Login.module.css';
import logo from '../../assets/logo.png'
import { LoginBox } from '../../components/LoginBox/LoginBox';


export const Login = (): JSX.Element => {
    return (
        <div className={style.container}>
            <div className={style.logo}>
                <img src={logo} alt="" width={250} />
            </div>
            <div className={style.login}>
                <LoginBox/>
            </div>
        </div>
    )
}
