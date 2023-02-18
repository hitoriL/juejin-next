import Image from 'next/image';
import Avator from '../TempImages/rem.png'
import style from './styles/style.module.css'

const data = {
  avator: Avator,
  name: '孟祥_成都',
  introduction: '前端开发（成都） @aaaaaaaaaaa',
}

interface AuthorCardProps {
  id: string;
}

export const AuthorCard: React.FC<AuthorCardProps> = ({ id }) => {
  return (
    <div className={style.card}>
      <Image src={data.avator} alt={'Avator of the auther'} className={style.avator} />
      <div className={style.info}>
        <div className={style.name}>
          {data.name}
        </div>
        <div className={style.introduction}>
          {data.introduction.length < 10 ? data.introduction : data.introduction.slice(0, 10) + '...'}
        </div>
      </div>
    </div>
  );
};