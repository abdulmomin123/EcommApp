import { Collections, CollectionsArr, CollectionNames } from './Types';

export const collectionsAsObj = (collections: CollectionsArr) => {
  const collectionsObj: Collections = collections.reduce((acc, cur) => {
    acc[cur.title as CollectionNames] = cur;

    return acc;
  }, {} as Collections);

  return collectionsObj;
};
