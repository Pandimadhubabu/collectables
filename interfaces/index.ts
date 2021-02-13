// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type User = {
  id: number;
  name: string;
};

export type Collectable = {
  id: number;
  name: string;
  serial: string;
  price: number;
  boughtAt: string;
  hardware: string;
  photo: string;
  reference: string;
  minimumOs: string;
  currentOs: string;
  maximumOs: string;
  notes: string;
};
