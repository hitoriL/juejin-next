import { AuthorCard } from './AuthorCard';
import { RelateArticle } from './RelateArticle';

const data = {
  id: 'aaa',
  tags: ['a', 'b'],
}

const SideBar = () => {
  return (
    <div>
      <AuthorCard id={data.id} />
      <RelateArticle tags={data.tags} />
    </div>
  );
}

export default SideBar;