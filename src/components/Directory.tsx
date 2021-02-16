import '../styles/Directory.scss';
import { MENU_ITEMS } from '../constants';
import MenuItem from './MenuItem';

const Directory = () => {
  return (
    <div className="directory-menu">
      {MENU_ITEMS.map(menuItem => (
        <MenuItem key={menuItem.id} menuItem={menuItem} />
      ))}
    </div>
  );
};

export default Directory;
