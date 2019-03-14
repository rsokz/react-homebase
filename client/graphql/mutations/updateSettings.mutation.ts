import { gql } from 'apollo-boost';

export default gql`
  mutation UpdateSettings($settings: updatedSettings) {
    updateSettings(settings: $settings) {
      name
    }
  }
`;
