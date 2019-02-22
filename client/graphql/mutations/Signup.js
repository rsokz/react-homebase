import { gql } from "apollo-boost";

export default gql`
  mutation Signup($email: String, $password: String, $name: String) {
    signup(email: $email, password: $password, name: $name) {
      id
      email
      name
    }
  }
`;
