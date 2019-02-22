import { gql } from 'apollo-boost';

export default gql`
  {
    currentUser {
      id
      email
      name
    }
  }
`;
