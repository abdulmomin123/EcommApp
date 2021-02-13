import { call, put, takeLatest } from 'redux-saga/effects';
import { firestore } from '../../firebase/firebase.utils';
import { Collection, CollectionsArr } from '../../Types';
import { collectionsAsObj } from '../../helpers';
import {
  fetchCollectionsFailure,
  fetchCollectionsSuccess,
} from './shop.actions';

function* fetchCollectionsAsync() {
  try {
    // The refrence to our collections in DB
    const collectionRef = firestore.collection('/collections');

    const collectionsArr: CollectionsArr = yield collectionRef
      .get()
      .then(snapshot => snapshot.docs.map(doc => doc.data() as Collection));

    const collections = yield call(collectionsAsObj, collectionsArr);

    yield put(fetchCollectionsSuccess(collections));
  } catch (err) {
    yield put(fetchCollectionsFailure(err.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest('FETCH_COLLECTIONS_START', fetchCollectionsAsync);
}
