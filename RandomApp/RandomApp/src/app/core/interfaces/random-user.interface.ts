export interface IRandomUserEmployment {
  title: string;
  key_skill: string;
}

export interface IRandomUserCoordinates {
  lat: number;
  lng: number;
}

export interface IRandomUserAddress {
  city: string;
  street_name: string;
  street_address: string;
  zip_code: string;
  state: string;
  country: string;
  coordinates: IRandomUserCoordinates;
}

export interface IRandomUserCreditCard {
  cc_number: string;
}

export interface IRandomUserSubscription {
  plan: string;
  status: string;
  payment_method: string;
  term: string;
}

export interface IRandomUser {
  id: number;
  uid: string;
  password: string;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  avatar: string;
  gender: string;
  phone_number: string;
  social_insurance_number: string;
  date_of_birth: string;
  employment: IRandomUserEmployment;
  address: IRandomUserAddress;
  credit_card: IRandomUserCreditCard;
  subscription: IRandomUserSubscription;
}
