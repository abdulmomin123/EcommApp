import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/MenuItem.scss';
import { MenuItemType } from '../Types';

interface Props {
  menuItem: MenuItemType;
}

const MenuItem: React.FC<Props> = ({ menuItem: { title, size, imageUrl } }) => {
  return (
    <Link to={`/shop/${title}`} className={`${size} menu-item`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </Link>
  );
};

export default MenuItem;
