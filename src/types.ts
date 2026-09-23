export type MenuCategoryId =
  | 'all'
  | 'breakfast'
  | 'street-style'
  | 'maggi'
  | 'chinese'
  | 'garlic-bread'
  | 'sandwich'
  | 'rolls'
  | 'fries-burger'
  | 'shakes-slush'
  | 'desserts'
  | 'bulbicious-bowls'
  | 'tandoori'
  | 'combos'
  | 'thali'
  | 'beverages';

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategoryId;
  price: string;
  numericPrice: number;
  description?: string;
  isMustTry?: boolean;
  isVegetarian?: boolean;
  isSpicy?: boolean;
  tag?: string;
}

export interface MenuCategoryDisplay {
  id: MenuCategoryId;
  name: string;
  tagline: string;
  description: string;
  image: string;
  itemCount: number;
}

export interface FeaturedDish {
  id: string;
  name: string;
  category: string;
  price: string;
  numericPrice: number;
  description: string;
  image: string;
  tag: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'Ambience' | 'Food' | 'Drinks' | 'Dessert' | 'Exterior';
  src: string;
  description: string;
}

export interface TestimonialReview {
  id: string;
  theme: string;
  comment: string;
  authorType: string;
  rating: number;
  tag: string;
}

export interface ReservationFormData {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  specialRequest?: string;
}
