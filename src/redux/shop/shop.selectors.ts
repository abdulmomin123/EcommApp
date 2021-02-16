import { createSelector } from 'reselect';
import { RootState } from '../rootReducer';
import { CollectionNames, Collections } from '../../Types';

const selectShop = (state: RootState) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  store => store.collections
);

export const selectCollectionsAsArr = createSelector(
  [selectCollections],
  collections =>
    Object.keys(collections!).map(
      key => (collections as Collections)[key as CollectionNames]
    )
);

export const selectCollection = (name: CollectionNames) =>
  createSelector(
    [selectCollections],
    collections => (collections as Collections)[name]
  );
