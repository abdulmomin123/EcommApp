import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import '../styles/CollectionPreview.scss';
import { Collection } from '../Types';
import CollectionItem from './CollectionItem';

interface Props {
  collection: Collection;
}

const CollectionPreview: React.FC<Props> = ({
  collection: { title, items, routeName },
}) => {
  const match = useRouteMatch();

  return (
    <div className="collection-preview">
      <Link to={`${match.path}/${routeName}`} className="title">
        {title.toUpperCase()}
      </Link>
      <div className="preview">
        {items.slice(0, 4).map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
