import { Query } from 'react-apollo';

export interface Data {
  currentUser: {
    id: string;
    email: string;
    name: string;
  };
}
