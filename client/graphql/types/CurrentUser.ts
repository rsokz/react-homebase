export interface Data {
  currentUser: {
    id: string;
    email: string;
    name: string;
    settings: {
      backgroundImage: number;
      websites: {
        url: string;
        iconURL: string;
      }[];
    };
  };
}
