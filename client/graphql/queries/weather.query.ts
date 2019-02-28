import { gql } from 'apollo-boost';

export default gql`
  query Weather($lat: Float!, $long: Float!) {
    weather(lat: $lat, long: $long) {
      time
      summary
      icon
      temperature
    }
  }
`;
