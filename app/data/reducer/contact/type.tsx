export interface contactState {
    id: number;
    firstName: string;
    lastName: string;
    photo: string;
    age: number;
  }
  
  export const initialContactState: contactState = {
    id: 0,
    firstName: '',
    lastName: '',
    photo: '',
    age: 0,
  };