import { SearchBar } from '../SearchBar/SearchBar';
import style from './Nav.module.css';
import bell from '../../assets/bell.png';

interface Props {
  search: string,
  setSearch: (text:string) => void
}

export const Nav = ({ search, setSearch }: Props) => {
  return (
    <div className={style.content}>
      <SearchBar setValue={setSearch} value={search} />
      <img className={style.img} src={bell} alt="" />
    </div>
  )
}
