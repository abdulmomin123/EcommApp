import { useSelector } from 'react-redux';
import { selectCollectionsAsArr } from '../redux/shop/shop.selectors';
import CollectionPreview from './CollectionPreview';

const CollectionsOverview = () => {
  const collections = useSelector(selectCollectionsAsArr);

  return (
    <div className="collections-overview">
      {collections.map(collection => (
        <CollectionPreview key={collection.id} collection={collection} />
      ))}
    </div>
  );
};

export default CollectionsOverview;
