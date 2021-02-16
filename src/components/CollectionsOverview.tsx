import { gql, useQuery } from '@apollo/client';
import { CollectionsArr } from '../Types';
import CollectionPreview from './CollectionPreview';
import Spinner from './Spinner';

const CollectionsOverview = () => {
  // Using graphQL
  const { loading, error, data } = useQuery<{
    collections: CollectionsArr;
  }>(gql`
    query {
      collections {
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
  `);

  if (loading) return <Spinner />;
  if (error) return <h1>Error :(</h1>;

  return (
    <div className="collections-overview">
      {data!.collections.map(collection => (
        <CollectionPreview key={collection.id} collection={collection} />
      ))}
    </div>
  );
};

export default CollectionsOverview;
