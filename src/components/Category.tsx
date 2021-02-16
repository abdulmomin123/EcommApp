import { gql, useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Collection.scss';
import { Collection, CollectionNames } from '../Types';
import CollectionItem from './CollectionItem';
import Spinner from './Spinner';

const Category = () => {
  const params = useParams<{ categoryId: CollectionNames }>();

  // Using graphQL
  const { loading, error, data } = useQuery<{
    getCollectionsByTitle: Collection;
  }>(
    gql`
      query getCollectionsByTitle($title: String!) {
        getCollectionsByTitle(title: $title) {
          id
          title
          items {
            id
            name
            price
            imageUrl
          }
        }
      }
    `,
    { variables: { title: params.categoryId } }
  );

  // Scrolling to the top
  useEffect(() => window.scrollTo({ top: 0, behavior: 'smooth' }), []);

  if (loading) return <Spinner />;
  if (error) return <h1>Error :(</h1>;

  const {
    getCollectionsByTitle: { title, items },
  } = data!;

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Category;
