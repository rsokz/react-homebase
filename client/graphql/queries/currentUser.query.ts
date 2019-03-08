import { gql } from 'apollo-boost';

export default gql`
  {
    currentUser {
      id
      email
      name
      settings {
        backgroundImage
        websites {
          url
          iconURL
        }
      }
    }
  }
`;
