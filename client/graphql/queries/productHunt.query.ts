import { gql } from 'apollo-boost';

export default gql`
  {
    products {
      posts {
        id
        discussion_url
        name
        tagline
        thumbnail {
          image_url
        }
        topics {
          name
        }
        votes_count
      }
    }
  }
`;
