import { Collections, ShopActions } from '../../Types';

export const fetchCollectionsStart = (): ShopActions => ({
  type: 'FETCH_COLLECTIONS_START',
  payload: null,
});

export const fetchCollectionsSuccess = (
  collections: Collections
): ShopActions => ({ type: 'FETCH_COLLECTIONS_SUCCESS', payload: collections });

export const fetchCollectionsFailure = (message: string): ShopActions => ({
  type: 'FETCH_COLLECTIONS_FAILURE',
  payload: message,
});
