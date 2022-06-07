export interface Monday {
  opens_at: string;
  closes_at: string;
  is_closed: boolean;
}

export interface Tuesday {
  opens_at: string;
  closes_at: string;
  is_closed: boolean;
}

export interface Wednesday {
  opens_at: string;
  closes_at: string;
  is_closed: boolean;
}

export interface Thursday {
  opens_at: string;
  closes_at: string;
  is_closed: boolean;
}

export interface Friday {
  opens_at: string;
  closes_at: string;
  is_closed: boolean;
}

export interface Saturday {
  opens_at: string;
  closes_at: string;
  is_closed: boolean;
}

export interface Sunday {
  opens_at: string;
  closes_at: string;
  is_closed: boolean;
}

export interface Hours {
  monday: Monday;
  tuesday: Tuesday;
  wednesday: Wednesday;
  thursday: Thursday;
  friday: Friday;
  saturday: Saturday;
  sunday: Sunday;
}

export interface IRootObjectRestaurant {
  id: number;
  uid: string;
  name: string;
  type: string;
  description: string;
  review: string;
  logo: string;
  phone_number: string;
  address: string;
  hours: Hours;
}
