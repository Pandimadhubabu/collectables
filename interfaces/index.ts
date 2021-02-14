export type Category = {
  id: number;
  name: string;
};

export type Collectable = {
  category: Category;
  id: number;
  name: string;
  boughtAt: string;
  hardware: string;
  photo: string;
  reference: string;
  minimumOs?: string;
  currentOs?: string;
  maximumOs?: string;
  notes: string;
};
