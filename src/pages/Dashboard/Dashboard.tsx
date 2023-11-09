import { LateralMenu } from '../../components/LateralMenu/LateralMenu'
import { MainContent } from '../../components/MainContent/MainContent'
import { Nav } from '../../components/Nav/Nav'
import style from './Dashboard.module.css'

interface Props {
    search: string,
  setSearch: (text:string) => void
}

export const Dashboard = ({ search, setSearch }: Props): JSX.Element => {
    return (
        <div>
            <div className={style.grid}>
                <LateralMenu />

                <div className={style.content}>
                    <Nav search={search} setSearch={setSearch}/>
                    <MainContent />
                </div>
            </div>
        </div>
    )
}
