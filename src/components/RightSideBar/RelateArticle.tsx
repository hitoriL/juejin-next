import Link from 'next/link';
import style from './styles/style.module.css';

interface RelateArticleProps {
    tags: string[];
}

const tagsMock = [
  {
    name: 'aaa',
    postId: 1,
  },
  {
    name: 'bbb',
    postId: 2,
  },
  {
    name: 'ccc',
    postId: 3,
  },
  {
    name: 'ddd',
    postId: 4,
  },
  {
    name: 'eee',
    postId: 5,
  },
];

export const RelateArticle: React.FC<RelateArticleProps> = ({ tags }) => {
  return (
    <div className={style.card} style={{flexDirection: 'column'}}>
      <div className={style.title}>
        相关文章
      </div>
      <hr className={style.divider} />
      <ul>
        {
          tagsMock.map((value) => {
            return <li key={value.name} className={style.li}>
              <Link href={''}>
                {value.name}
              </Link>
            </li>
          })
        }
      </ul>
    </div>
  );
}