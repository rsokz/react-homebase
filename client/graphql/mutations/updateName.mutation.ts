import { gql } from 'apollo-boost';

export default gql`
  mutation UpdateName($name: String!) {
    updateName(name: $name) {
      name
    }
  }
`;
