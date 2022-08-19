export interface contactType {
  id: number;
  name: string;
  phone: string;
  email: string;
  address: string;
  photo: string;
  is_favourite: boolean;
  user_id: number;
}

export interface contactStateType {
  data: contactType[];
}
