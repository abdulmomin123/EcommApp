import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectCollection } from '../redux/shop/shop.selectors';
import '../styles/Collection.scss';
import { CollectionNames } from '../Types';
import CollectionItem from './CollectionItem';

const Category = () => {
  const params = useParams<{ categoryId: CollectionNames }>();
  const { title, items } = useSelector(selectCollection(params.categoryId));

  // Scrolling to the top
  useEffect(() => window.scrollTo({ top: 0, behavior: 'smooth' }), []);

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Category;
