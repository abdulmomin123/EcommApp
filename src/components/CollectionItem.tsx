import React from 'react';
import { updateCartItems } from '../graphql/resolvers';
import '../styles/CollectionItem.scss';
import { Item } from '../Types';
import CustomButton from './CustomButton';

interface Props {
  item: Item;
}

const CollectionItem: React.FC<Props> = ({
  item: { name, price, imageUrl },
  item,
}) => {
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />

      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>

      <div
        className={'btn-container'}
        onClick={() => updateCartItems({ ...item, quantity: 1 })}
      >
        {/* Add to cart */}
        <CustomButton inverted>Add To Cart</CustomButton>
      </div>
    </div>
  );
};

export default CollectionItem;
