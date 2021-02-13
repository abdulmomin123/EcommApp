export interface MenuItemType {
  title: string;
  imageUrl: string;
  id: string;
  linkUrl: string;
  size?: string;
}

export interface Item {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
}

export interface Product extends Item {
  quantity: number;
}

export interface Collection {
  id: string;
  title: string;
  routeName: string;
  items: Item[];
}

export type CollectionNames =
  | 'hats'
  | 'sneakers'
  | 'jackets'
  | 'womens'
  | 'mens';

export type Collections = Record<CollectionNames, Collection>;
export type CollectionsArr = Collection[];

export interface UserProfile {
  displayName: string | null;
  email: string | null;
  uid: string;
  createdAt: Date;
  additionalData?: object;
}

export interface EmailPassword {
  email: string;
  password: string;
}

export interface SignupInfo {
  displayName: string;
  email: string;
  password: string;
}

// Redux reducer and actions types
export interface UserActions {
  type:
    | 'GOOGLE_SIGN_IN_START'
    | 'EMAIL_SIGN_IN_START'
    | 'SIGN_IN_SUCCESS'
    | 'SIGN_IN_FAILURE'
    | 'CHECK_USER_SESSION'
    | 'SIGN_OUT_START'
    | 'SIGN_OUT_SUCCESS'
    | 'SIGN_OUT_FAILURE'
    | 'SIGN_UP_START'
    | 'SIGN_UP_FAILURE';
  payload: UserProfile | null | string | EmailPassword | SignupInfo;
}

export interface ShopActions {
  type:
    | 'FETCH_COLLECTIONS_START'
    | 'FETCH_COLLECTIONS_SUCCESS'
    | 'FETCH_COLLECTIONS_FAILURE';
  payload: Collections | null | string;
}

export interface CartActions {
  type:
    | 'TOGGLE_CART_HIDDEN'
    | 'ADD_ITEM'
    | 'CLEAR_ITEM_FROM_CART'
    | 'REMOVE_ITEM'
    | 'CLEAR_CART';
  payload?: Product;
}
