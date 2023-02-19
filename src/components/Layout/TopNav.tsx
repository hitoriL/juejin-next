import Image from 'next/image';
// import Avator from '../TempImages/rem.png'
import Link from 'next/link';
import style from './styles/style.module.css'


const tagsMock = [
  {
    id: 0,
    title: '首页',
  },
  {
    id: 1,
    title: '首页',
  },
  {
    id: 2,
    title: '首页',
  },
  {
    id: 3,
    title: '首页',
  },
];
let flag = true
const themeImg = [
  {id:0,
  url:'/day.svg'
  },
  {id:1,
  url:'/night.svg'
  }
]
const TopNav = () => {
  const changeTheme = (e) => {
    flag = !flag
    e.target.src = themeImg[Number(flag)].url
    const theme = flag? 'day':'dark'
    document.documentElement.className = theme
  }
  return (
      <div className={style.container}>
        <div className={style.w}>
          <Link href={''} className={style.logo}>
            <Image src="/juejinlogo.svg" alt="me" width="22" height="22" className={style.img} />
            <h1 className={style.title}>稀土掘金</h1>
          </Link>
          <ul className={style.nav}>
              {
                tagsMock.map((nav) => {
                  return <li key={nav.id} className={style.navItme}>
                    <Link href={''}>
                      {nav.title}
                    </Link>
                  </li>
                })
              }
            </ul>
          <div className={style.theme}>
            <Image src={themeImg[Number(flag)].url} alt="day" width="22" height="22" className={style.themeImg} onClick={changeTheme}/>
          </div>
        </div>
    </div>
  );
}

export default TopNav;