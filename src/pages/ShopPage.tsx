import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Category from '../components/Category';
import CollectionsOverview from '../components/CollectionsOverview';
import Spinner from '../components/Spinner';
import { fetchCollectionsStart } from '../redux/shop/shop.actions';
import { selectCollections } from '../redux/shop/shop.selectors';

const ShopPage = () => {
  // Using store
  const collections = useSelector(selectCollections);
  const dispatch = useDispatch();

  const match = useRouteMatch();

  // Fetching collections from firestore
  useEffect(() => {
    // If the collections already fetched, return
    if (collections) return;

    dispatch(fetchCollectionsStart());
  }, [collections, dispatch]);

  return (
    <div className="shop-page">
      {collections ? (
        <Switch>
          <Route exact path={`${match.path}`} component={CollectionsOverview} />

          <Route path={`${match.path}/:categoryId`} component={Category} />
        </Switch>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default ShopPage;
