export type Cat = {
  id: string;
  url: string;
}

export type CatState = {
  cats: Cat[];
  favorites: Cat[];
  status: 'fulfilled' | 'pending' | 'rejected';
}