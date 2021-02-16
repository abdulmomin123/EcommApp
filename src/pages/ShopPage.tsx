import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Category from '../components/Category';
import CollectionsOverview from '../components/CollectionsOverview';
const ShopPage = () => {
  const match = useRouteMatch();

  return (
    <div className="shop-page">
      <Switch>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />

        <Route path={`${match.path}/:categoryId`} component={Category} />
      </Switch>
    </div>
  );
};

export default ShopPage;
