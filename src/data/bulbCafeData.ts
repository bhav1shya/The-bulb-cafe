import {
  MenuItem,
  MenuCategoryDisplay,
  FeaturedDish,
  GalleryPhoto,
  TestimonialReview,
} from '../types';

import heroImg from '../assets/images/bulb_cafe_hero_1790168252452.jpg';
import interiorImg from '../assets/images/bulb_cafe_interior_1790168266621.jpg';
import exteriorImg from '../assets/images/bulb_cafe_exterior_1790168387535.jpg';
import burgerSandwichImg from '../assets/images/bulb_burgers_sandwich_1790168279785.jpg';
import chineseMomosImg from '../assets/images/bulb_chinese_momos_1790168294656.jpg';
import shakesDrinksImg from '../assets/images/bulb_shakes_drinks_1790168309261.jpg';
import tandooriTikkaImg from '../assets/images/bulb_tandoori_tikka_1790168325406.jpg';
import streetStyleImg from '../assets/images/bulb_street_style_1790168338555.jpg';
import dessertBrownieImg from '../assets/images/bulb_dessert_brownie_1790168351490.jpg';
import breakfastThaliImg from '../assets/images/bulb_breakfast_thali_1790168372606.jpg';

export const BULB_IMAGES = {
  hero: heroImg,
  interior: interiorImg,
  exterior: exteriorImg,
  burgerSandwich: burgerSandwichImg,
  chineseMomos: chineseMomosImg,
  shakesDrinks: shakesDrinksImg,
  tandooriTikka: tandooriTikkaImg,
  streetStyle: streetStyleImg,
  dessertBrownie: dessertBrownieImg,
  breakfastThali: breakfastThaliImg,
};

export const BUSINESS_INFO = {
  name: 'Bulb Cafe',
  tagline: 'Good food • Great vibes • Always a bright idea',
  headline: 'Food tastes better when the vibe is right.',
  description:
    'A cozy café in Mansarovar, Jaipur serving delicious food, refreshing beverages and memorable moments.',
  address: {
    street: '75/04, Opp. Landscape Garden, Mansarovar Sector 7',
    area: 'Shipra Path, Barh Devariya, Mansarovar',
    city: 'Jaipur, Rajasthan',
    pincode: '302020',
    full: '75/04, Opp. Landscape Garden, Mansarovar Sector 7, Shipra Path, Barh Devariya, Mansarovar, Jaipur, Rajasthan 302020',
  },
  phone: '097820 35098',
  phoneRaw: '+919782035098',
  priceRange: '₹200–₹400 per person',
  timings: {
    hours: '10:00 AM – 11:00 PM',
    days: 'Monday to Sunday',
    closeNote: 'Open every day until 11:00 PM',
  },
  rating: {
    score: 4.7,
    count: '610+',
    source: 'Google Verified Reviews',
  },
  badges: [
    'Great Food',
    'LGBTQ+ Friendly',
    'Perfect for Groups',
    'Prime Location',
  ],
  googleMapsUrl:
    'https://maps.google.com/?q=Bulb+Cafe+75/04+Opp+Landscape+Garden+Mansarovar+Sector+7+Jaipur',
};

export const WHY_VISIT_FEATURES = [
  {
    id: 'good-food',
    title: 'GOOD FOOD',
    description: 'Fresh and delicious food for every mood.',
    iconName: 'Utensils',
  },
  {
    id: 'great-vibes',
    title: 'GREAT VIBES',
    description: 'A warm, cozy and Instagram-worthy atmosphere.',
    iconName: 'Sparkles',
  },
  {
    id: 'perfect-groups',
    title: 'PERFECT FOR GROUPS',
    description: 'Great place for friends, families and celebrations.',
    iconName: 'Users',
  },
  {
    id: 'brighter-moments',
    title: 'BRIGHTER MOMENTS',
    description: 'Come for the food, stay for the memories.',
    iconName: 'Lightbulb',
  },
];

export const ABOUT_HIGHLIGHTS = [
  'Cozy & Instagrammable Ambience',
  'Vegetarian Friendly',
  'LGBTQ+ Friendly',
  'Great for Friends & Families',
  'Perfect for Celebrations',
];

export const MENU_CATEGORIES_PREVIEW: MenuCategoryDisplay[] = [
  {
    id: 'breakfast',
    name: 'Breakfast',
    tagline: 'Morning comfort',
    description: 'Start your day right',
    image: breakfastThaliImg,
    itemCount: 8,
  },
  {
    id: 'fries-burger',
    name: 'Burgers & Sandwiches',
    tagline: 'Loaded bites',
    description: 'Bite into happiness',
    image: burgerSandwichImg,
    itemCount: 13,
  },
  {
    id: 'rolls',
    name: 'Rolls',
    tagline: 'Warm wraps',
    description: 'Perfectly rolled',
    image: burgerSandwichImg,
    itemCount: 4,
  },
  {
    id: 'chinese',
    name: 'Chinese',
    tagline: 'Wok & momos',
    description: 'Asian favourites',
    image: chineseMomosImg,
    itemCount: 16,
  },
  {
    id: 'shakes-slush',
    name: 'Shakes & Beverages',
    tagline: 'Chilled delights',
    description: 'Cool sips, warm smiles',
    image: shakesDrinksImg,
    itemCount: 29,
  },
  {
    id: 'desserts',
    name: 'Desserts',
    tagline: 'Sweet cravings',
    description: 'Sweet endings',
    image: dessertBrownieImg,
    itemCount: 4,
  },
  {
    id: 'tandoori',
    name: 'Tandoori',
    tagline: 'Smoky clay oven',
    description: 'Charred to perfection',
    image: tandooriTikkaImg,
    itemCount: 7,
  },
  {
    id: 'street-style',
    name: 'Street Style',
    tagline: 'Desi flavours',
    description: 'Chaat, vada pav & more',
    image: streetStyleImg,
    itemCount: 18,
  },
  {
    id: 'combos',
    name: 'Combos',
    tagline: 'Value meals',
    description: 'Delicious meal combos',
    image: breakfastThaliImg,
    itemCount: 8,
  },
  {
    id: 'thali',
    name: 'Thali',
    tagline: 'Wholesome feast',
    description: 'Traditional royal platters',
    image: breakfastThaliImg,
    itemCount: 2,
  },
];

export const FEATURED_DISHES: FeaturedDish[] = [
  {
    id: 'feat-kurkure-momo',
    name: 'Kurkure Paneer Momo',
    category: 'Ching Chang Chinese',
    price: '₹160',
    numericPrice: 160,
    description:
      'Golden crunchy panko-crusted dumplings packed with seasoned spiced paneer, served with fiery momo dip and garlic mayo.',
    image: chineseMomosImg,
    tag: 'Must Try',
  },
  {
    id: 'feat-paneer-bruschetta',
    name: 'Paneer Tikka Bruschetta',
    category: 'Garlic Bread & Toast',
    price: '₹250',
    numericPrice: 250,
    description:
      'Toasted artisanal herb bread crowned with smoky tandoori paneer tikka, juicy diced tomatoes, fresh basil, and spiced drizzle.',
    image: burgerSandwichImg,
    tag: 'Chef Signature',
  },
  {
    id: 'feat-nutella-shake',
    name: 'Nutella Brownie Shake',
    category: 'Shakes & Beverages',
    price: '₹150',
    numericPrice: 150,
    description:
      'Thick, velvety milkshake blended with premium Nutella hazelnut cocoa, crowned with whipped cream and chocolate fudge brownie crumbles.',
    image: shakesDrinksImg,
    tag: 'Crowd Favourite',
  },
  {
    id: 'feat-tandoori-paneer',
    name: 'Tandoori Paneer Tikka',
    category: 'Tandoori Special',
    price: '₹280',
    numericPrice: 280,
    description:
      'Succulent cubes of farm cottage cheese marinated in hung curd, Kashmiri spices, and char-grilled with crunchy peppers and onions.',
    image: tandooriTikkaImg,
    tag: 'Smoky Delight',
  },
  {
    id: 'feat-vada-pav',
    name: 'Cheese Vada Pav & Adrak Chai',
    category: 'Street Style Combo',
    price: '₹60',
    numericPrice: 60,
    description:
      'Spiced potato batata vada inside buttered pav with spicy dry garlic chutney, molten cheese slice, and hot fried chili.',
    image: streetStyleImg,
    tag: 'Desi Classic',
  },
  {
    id: 'feat-sizzling-brownie',
    name: 'Brownie with Ice Cream & Hot Chocolate',
    category: 'Dessert',
    price: '₹150',
    numericPrice: 150,
    description:
      'Warm molten fudge brownie sizzling on hot iron with cold vanilla bean ice cream and bubbling dark chocolate ganache.',
    image: dessertBrownieImg,
    tag: 'Indulgent Finish',
  },
];

export const FULL_MENU_ITEMS: MenuItem[] = [
  // BREAKFAST
  { id: 'bf-1', name: 'Poha', category: 'breakfast', price: '₹70', numericPrice: 70, description: 'Steamed flattened rice tossed with mustard seeds, peanuts, and lemon', isVegetarian: true },
  { id: 'bf-2', name: 'Upma', category: 'breakfast', price: '₹70', numericPrice: 70, description: 'Traditional roasted semolina with curry leaves and green chillies', isVegetarian: true },
  { id: 'bf-3', name: 'Aloo Pyaz Paratha', category: 'breakfast', price: '₹80', numericPrice: 80, description: 'Golden stuffed flatbread with spiced potato-onion filling and butter', isVegetarian: true },
  { id: 'bf-4', name: 'Paneer Paratha', category: 'breakfast', price: '₹120', numericPrice: 120, description: 'Whole-wheat paratha packed with crumbled cottage cheese and spices', isVegetarian: true },
  { id: 'bf-5', name: 'Dal Pakwan', category: 'breakfast', price: '₹100', numericPrice: 100, description: 'Crispy carom seed crackers served with comforting spiced chana dal', isVegetarian: true },
  { id: 'bf-6', name: 'Railway Cutlet', category: 'breakfast', price: '₹120', numericPrice: 120, description: 'Crispy spiced vegetable patties served with bread toasts and dip', isVegetarian: true },
  { id: 'bf-7', name: 'Fried Idly', category: 'breakfast', price: '₹120', numericPrice: 120, description: 'Crispy pan-tossed rice cakes seasoned with curry leaves and mustard seeds', isVegetarian: true },
  { id: 'bf-8', name: 'Aloo Puri', category: 'breakfast', price: '₹120', numericPrice: 120, description: 'Puffed golden puris served with traditional spicy potato curry', isVegetarian: true },

  // STREET STYLE
  { id: 'ss-1', name: 'Vada Pav', category: 'street-style', price: '₹40', numericPrice: 40, description: 'Mumbai batata vada in pav with spicy garlic chutney', isVegetarian: true },
  { id: 'ss-2', name: 'Cheese Vada Pav', category: 'street-style', price: '₹60', numericPrice: 60, description: 'Classic vada pav stuffed with melting cheddar slice', isVegetarian: true },
  { id: 'ss-3', name: 'Ulta Vada Pav', category: 'street-style', price: '₹60', numericPrice: 60, description: 'Inverted crispy battered stuffed bun delight', isVegetarian: true },
  { id: 'ss-4', name: 'Masala Vada Pav', category: 'street-style', price: '₹70', numericPrice: 70, description: 'Tawa tossed vada pav coated with spicy onion tomato masala', isVegetarian: true },
  { id: 'ss-5', name: 'Veg Keema Pav', category: 'street-style', price: '₹120', numericPrice: 120, description: 'Minced soy & spiced vegetable keema with butter toasted pav', isVegetarian: true },
  { id: 'ss-6', name: 'Muska Bun', category: 'street-style', price: '₹40', numericPrice: 40, description: 'Fresh soft bun slathered generously with salted butter', isVegetarian: true },
  { id: 'ss-7', name: 'Aloo Chaat', category: 'street-style', price: '₹100', numericPrice: 100, description: 'Crispy golden potato cubes tossed with tangy chaat masalas and chutney', isVegetarian: true },
  { id: 'ss-8', name: 'Dahi Papdi Chaat', category: 'street-style', price: '₹100', numericPrice: 100, description: 'Crisp flour discs topped with sweet yogurt, tamarind and mint chutney', isVegetarian: true },
  { id: 'ss-9', name: 'Bhel Puri', category: 'street-style', price: '₹100', numericPrice: 100, description: 'Light puffed rice with crunchy sev, potatoes and tangy chutneys', isVegetarian: true },
  { id: 'ss-10', name: 'Bajra Bhel Puri', category: 'street-style', price: '₹100', numericPrice: 100, description: 'Nutritious roasted pearl millet bhel with fresh herbs and spices', isVegetarian: true },
  { id: 'ss-11', name: 'Veg Pakode', category: 'street-style', price: '₹130', numericPrice: 130, description: 'Assorted seasonal vegetable fritters fried to crisp perfection', isVegetarian: true },
  { id: 'ss-12', name: 'Paneer Pakode', category: 'street-style', price: '₹200', numericPrice: 200, description: 'Tender paneer cubes stuffed with green chutney and gram flour crust', isVegetarian: true },
  { id: 'ss-13', name: 'Peanut Masala', category: 'street-style', price: '₹120', numericPrice: 120, description: 'Roasted crunchy peanuts with chopped onions, tomatoes, lime and herbs', isVegetarian: true },
  { id: 'ss-14', name: 'Hara Bhara Kabab', category: 'street-style', price: '₹160', numericPrice: 160, description: 'Spinach and green pea patties subtly flavored with aromatic spices', isVegetarian: true },
  { id: 'ss-15', name: 'Cheese Ball', category: 'street-style', price: '₹170', numericPrice: 170, description: 'Golden crispy crust filled with molten cheese core and herbs', isVegetarian: true },
  { id: 'ss-16', name: 'Pav Bhaji', category: 'street-style', price: '₹120', numericPrice: 120, description: 'Rich spiced mashed vegetable gravy served with hot buttered pav', isVegetarian: true, isMustTry: true },
  { id: 'ss-17', name: 'Potato Wedges', category: 'street-style', price: '₹150', numericPrice: 150, description: 'Skin-on thick potato wedges seasoned with herbs and dips', isVegetarian: true },
  { id: 'ss-18', name: 'Paneer Steamed Kulcha', category: 'street-style', price: '₹180', numericPrice: 180, description: 'Soft steamed Amritsari kulcha stuffed with seasoned paneer', isVegetarian: true },

  // MAGGI
  { id: 'mg-1', name: 'Masala Maggi', category: 'maggi', price: '₹80', numericPrice: 80, description: 'Classic comfort Maggi cooked with authentic tastemaker', isVegetarian: true },
  { id: 'mg-2', name: 'Veg Maggi', category: 'maggi', price: '₹100', numericPrice: 100, description: 'Loaded with sautéed green peas, carrots, onions, and bell peppers', isVegetarian: true },
  { id: 'mg-3', name: 'Tadka Maggi', category: 'maggi', price: '₹110', numericPrice: 110, description: 'Desi butter tadka of cumin, green chilies, and garlic over noodles', isVegetarian: true },
  { id: 'mg-4', name: 'Cheese Garlic Maggi', category: 'maggi', price: '₹130', numericPrice: 130, description: 'Indulgent melted cheese infused with roasted aromatic garlic', isVegetarian: true, isMustTry: true },

  // CHING CHANG CHINESE
  { id: 'cn-1', name: 'Steam Momo', category: 'chinese', price: '₹100', numericPrice: 100, description: 'Delicate steamed dumplings filled with finely chopped garden vegetables', isVegetarian: true },
  { id: 'cn-2', name: 'Steam Paneer Momo', category: 'chinese', price: '₹140', numericPrice: 140, description: 'Steamed thin-wrapper momos stuffed with seasoned paneer', isVegetarian: true },
  { id: 'cn-3', name: 'Fried Momo', category: 'chinese', price: '₹120', numericPrice: 120, description: 'Golden fried vegetable momos with crispy crunch', isVegetarian: true },
  { id: 'cn-4', name: 'Fried Paneer Momo', category: 'chinese', price: '₹150', numericPrice: 150, description: 'Crisp fried paneer dumplings served with red chili chutney', isVegetarian: true },
  { id: 'cn-5', name: 'Kurkure Momo', category: 'chinese', price: '₹140', numericPrice: 140, description: 'Crunchy panko-crusted vegetable momos with dips', isVegetarian: true },
  { id: 'cn-6', name: 'Kurkure Paneer Momo', category: 'chinese', price: '₹160', numericPrice: 160, description: 'Ultra-crispy spiced paneer momos — our bestselling Chinese snack', isVegetarian: true, isMustTry: true },
  { id: 'cn-7', name: 'Honey Chilli Potato', category: 'chinese', price: '₹160', numericPrice: 160, description: 'Crisp fried potato fingers tossed in sesame, chili honey glaze', isVegetarian: true },
  { id: 'cn-8', name: 'Spring Roll', category: 'chinese', price: '₹150', numericPrice: 150, description: 'Golden crispy rolls packed with julienned vegetables and noodles', isVegetarian: true },
  { id: 'cn-9', name: 'Chilli Paneer', category: 'chinese', price: '₹200', numericPrice: 200, description: 'Fried paneer cubes tossed with soy, garlic, capsicum and spring onions', isVegetarian: true },
  { id: 'cn-10', name: 'Veg Manchurian', category: 'chinese', price: '₹160', numericPrice: 160, description: 'Vegetable dumplings simmered in savory garlic coriander sauce', isVegetarian: true },
  { id: 'cn-11', name: 'Hakka Noodles', category: 'chinese', price: '₹150', numericPrice: 150, description: 'Classic wok-tossed noodles with shredded vegetables and light soy', isVegetarian: true },
  { id: 'cn-12', name: 'Chowmein', category: 'chinese', price: '₹150', numericPrice: 150, description: 'Desi street style spicy chowmein with crunchy cabbage and peppers', isVegetarian: true },
  { id: 'cn-13', name: 'Chilly Garlic Noodles', category: 'chinese', price: '₹150', numericPrice: 150, description: 'Fiery noodles packed with aromatic roasted garlic and red chillies', isVegetarian: true, isSpicy: true },
  { id: 'cn-14', name: 'Fried Rice', category: 'chinese', price: '₹150', numericPrice: 150, description: 'Wok tossed fragrant rice with finely diced vegetables and scallions', isVegetarian: true },
  { id: 'cn-15', name: 'Crispy Corn', category: 'chinese', price: '₹150', numericPrice: 150, description: 'Crunchy sweet corn kernels tossed with peppers and chatpata spices', isVegetarian: true },
  { id: 'cn-16', name: 'Bao Bun', category: 'chinese', price: '₹160', numericPrice: 160, description: 'Steamed fluffy Asian bao buns stuffed with spicy cottage cheese & veggies', isVegetarian: true },

  // GARLIC BREAD, BRUSCHETTA & TOAST
  { id: 'gb-1', name: 'Plain Garlic Bread', category: 'garlic-bread', price: '₹120', numericPrice: 120, description: 'Warm toasted French baguette brushed with garlic infused butter', isVegetarian: true },
  { id: 'gb-2', name: 'Cheese Garlic Bread', category: 'garlic-bread', price: '₹160', numericPrice: 160, description: 'Loaded with melted mozzarella and cheddar over roasted garlic bread', isVegetarian: true },
  { id: 'gb-3', name: 'Tomato and Basil Bruschetta', category: 'garlic-bread', price: '₹200', numericPrice: 200, description: 'Crisp crostini with marinated tomatoes, fresh basil and extra virgin olive oil', isVegetarian: true },
  { id: 'gb-4', name: 'Paneer Tikka Bruschetta', category: 'garlic-bread', price: '₹250', numericPrice: 250, description: 'Fusion bruschetta topped with smoky clay oven paneer tikka', isVegetarian: true, isMustTry: true },
  { id: 'gb-5', name: 'Chilli Cheese Toast', category: 'garlic-bread', price: '₹140', numericPrice: 140, description: 'Crisp bread topped with cheese and green chili peppers', isVegetarian: true },
  { id: 'gb-6', name: 'Schezwan Paneer Toast', category: 'garlic-bread', price: '₹170', numericPrice: 170, description: 'Spicy Schezwan spread topped with grated paneer and herbs', isVegetarian: true },
  { id: 'gb-7', name: 'Pull Apart Garlic Bun', category: 'garlic-bread', price: '₹150', numericPrice: 150, description: 'Signature soft bread bun loaded with garlic butter and stretchy cheese', isVegetarian: true, isMustTry: true },

  // SANDWICH
  { id: 'sw-1', name: 'Bombay Sandwich', category: 'sandwich', price: '₹110', numericPrice: 110, description: 'Mint chutney, boiled potato, cucumber, tomato and sandwich masala', isVegetarian: true },
  { id: 'sw-2', name: 'Veg Grilled Sandwich', category: 'sandwich', price: '₹130', numericPrice: 130, description: 'Crisp toasted bread with spiced vegetable medley and green sauce', isVegetarian: true },
  { id: 'sw-3', name: 'Veg Cheese Sandwich', category: 'sandwich', price: '₹150', numericPrice: 150, description: 'Triple layered with spiced veggies and molten mozzarella cheese', isVegetarian: true },
  { id: 'sw-4', name: 'Paneer Tikka Sandwich', category: 'sandwich', price: '₹160', numericPrice: 160, description: 'Filled with char-grilled paneer tikka, mint mayo and onions', isVegetarian: true, isMustTry: true },
  { id: 'sw-5', name: 'Cheese Corn Sandwich', category: 'sandwich', price: '₹160', numericPrice: 160, description: 'Sweet corn kernels drenched in cheese and baked crispy', isVegetarian: true },
  { id: 'sw-6', name: 'Veg Keema Sandwich', category: 'sandwich', price: '₹160', numericPrice: 160, description: 'Spiced plant keema filling grilled between thick bread slices', isVegetarian: true },

  // ROLLS
  { id: 'rl-1', name: 'Aloo Masala Roll', category: 'rolls', price: '₹100', numericPrice: 100, description: 'Spiced potato mash rolled in flaky paratha with sliced onions and chutneys', isVegetarian: true },
  { id: 'rl-2', name: 'Veg Roll', category: 'rolls', price: '₹130', numericPrice: 130, description: 'Sautéed crunchy seasonal vegetables with tangy masala roll', isVegetarian: true },
  { id: 'rl-3', name: 'Paneer Tikka Roll', category: 'rolls', price: '₹160', numericPrice: 160, description: 'Tandoori paneer wrapped with crunchy peppers and garlic chutney', isVegetarian: true, isMustTry: true },
  { id: 'rl-4', name: 'Cheese Corn Roll', category: 'rolls', price: '₹160', numericPrice: 160, description: 'Sweet corn and cheddar cheese rolled in warm golden paratha', isVegetarian: true },

  // FRIES & BURGERS
  { id: 'fb-1', name: 'Salted French Fries', category: 'fries-burger', price: '₹120', numericPrice: 120, description: 'Golden potato fries seasoned with sea salt', isVegetarian: true },
  { id: 'fb-2', name: 'Peri Peri Fries', category: 'fries-burger', price: '₹140', numericPrice: 140, description: 'Crispy fries tossed in zesty African peri peri spice blend', isVegetarian: true, isSpicy: true },
  { id: 'fb-3', name: 'Cheesy Tornado', category: 'fries-burger', price: '₹120', numericPrice: 120, description: 'Spiral cut potato skewers drizzled with molten cheese sauce', isVegetarian: true },
  { id: 'fb-4', name: 'Aloo Tikki Burger', category: 'fries-burger', price: '₹70', numericPrice: 70, description: 'Crisp potato patty with lettuce, tomatoes, and house burger spread', isVegetarian: true },
  { id: 'fb-5', name: 'Veg Burger', category: 'fries-burger', price: '₹90', numericPrice: 90, description: 'Crispy mixed vegetable patty with creamy mayo and pickles', isVegetarian: true },
  { id: 'fb-6', name: 'Cheese Burger', category: 'fries-burger', price: '₹110', numericPrice: 110, description: 'Loaded vegetable burger with melted American cheddar slice', isVegetarian: true },
  { id: 'fb-7', name: 'Burger Shots', category: 'fries-burger', price: '₹160', numericPrice: 160, description: 'Mini slider burgers perfect for sharing with friends', isVegetarian: true },

  // SLUSH & SHAKES
  { id: 'sh-1', name: 'Cold Coffee', category: 'shakes-slush', price: '₹60/₹100', numericPrice: 60, description: 'Classic chilled blended brew (Regular ₹60 / Large ₹100)', isVegetarian: true },
  { id: 'sh-2', name: 'Cold Cocoa', category: 'shakes-slush', price: '₹150', numericPrice: 150, description: 'Rich chocolate cocoa served icy cold and thick', isVegetarian: true },
  { id: 'sh-3', name: 'Brownie Shake', category: 'shakes-slush', price: '₹150', numericPrice: 150, description: 'Blended with chocolate brownie and hot fudge drizzle', isVegetarian: true, isMustTry: true },
  { id: 'sh-4', name: 'Nutella Shake', category: 'shakes-slush', price: '₹150', numericPrice: 150, description: 'Pure Nutella hazelnut blended into dense creamy shake', isVegetarian: true, isMustTry: true },
  { id: 'sh-5', name: 'Oreo Shake', category: 'shakes-slush', price: '₹150', numericPrice: 150, description: 'Crushed Oreo cookies with rich vanilla ice cream and whipped cream', isVegetarian: true },
  { id: 'sh-6', name: 'Chocolate Shake', category: 'shakes-slush', price: '₹150', numericPrice: 150, description: 'Decadent chocolate syrup milkshake', isVegetarian: true },
  { id: 'sh-7', name: 'KitKat Shake', category: 'shakes-slush', price: '₹180', numericPrice: 180, description: 'Topped with crispy KitKat fingers and chocolate crunch', isVegetarian: true },
  { id: 'sh-8', name: 'Blueberry Shake', category: 'shakes-slush', price: '₹80/₹120', numericPrice: 80, description: 'Sweet wild blueberry shake (Regular ₹80 / Large ₹120)', isVegetarian: true },
  { id: 'sh-9', name: 'Pan Shake', category: 'shakes-slush', price: '₹80/₹120', numericPrice: 80, description: 'Refreshing Banarasi betel leaf flavored shake (Regular ₹80 / Large ₹120)', isVegetarian: true },
  { id: 'sh-10', name: 'Butter Scotch Shake', category: 'shakes-slush', price: '₹80/₹120', numericPrice: 80, description: 'Caramel butterscotch shake with praline crunch', isVegetarian: true },
  { id: 'sh-11', name: 'Strawberry Shake', category: 'shakes-slush', price: '₹80/₹120', numericPrice: 80, description: 'Fresh strawberry milkshake (Regular ₹80 / Large ₹120)', isVegetarian: true },
  { id: 'sh-12', name: 'Vanilla Shake', category: 'shakes-slush', price: '₹80/₹120', numericPrice: 80, description: 'Madagascar vanilla bean shake (Regular ₹80 / Large ₹120)', isVegetarian: true },
  { id: 'sh-13', name: 'Strawberry Slush', category: 'shakes-slush', price: '₹120', numericPrice: 120, description: 'Ice-blended sweet strawberry cooler', isVegetarian: true },
  { id: 'sh-14', name: 'Blueberry Slush', category: 'shakes-slush', price: '₹120', numericPrice: 120, description: 'Frosty crushed ice blueberry slush', isVegetarian: true },
  { id: 'sh-15', name: 'Kiwi Slush', category: 'shakes-slush', price: '₹120', numericPrice: 120, description: 'Zesty green kiwi frozen slush', isVegetarian: true },
  { id: 'sh-16', name: 'Guava Slush', category: 'shakes-slush', price: '₹120', numericPrice: 120, description: 'Pink guava slush served with chili rim', isVegetarian: true },

  // DESSERT
  { id: 'ds-1', name: 'Brownie with Hot Chocolate', category: 'desserts', price: '₹150', numericPrice: 150, description: 'Warm fudgy walnut brownie smothered in molten chocolate sauce', isVegetarian: true },
  { id: 'ds-2', name: 'Brownie with Ice Cream', category: 'desserts', price: '₹150', numericPrice: 150, description: 'Warm brownie served with creamy vanilla ice cream on hot iron', isVegetarian: true, isMustTry: true },
  { id: 'ds-3', name: 'Vanilla Ice Cream', category: 'desserts', price: '₹60', numericPrice: 60, description: 'Scoop of premium vanilla ice cream', isVegetarian: true },
  { id: 'ds-4', name: 'Chocolate Ice Cream', category: 'desserts', price: '₹70', numericPrice: 70, description: 'Rich Dutch chocolate ice cream scoop', isVegetarian: true },

  // BULBICIOUS BOWL
  { id: 'bb-1', name: 'Daal Makhani Chawal', category: 'bulbicious-bowls', price: '₹170', numericPrice: 170, description: 'Slow cooked black lentils with steamed basmati rice bowl', isVegetarian: true },
  { id: 'bb-2', name: 'Butter Paneer Masala Chawal', category: 'bulbicious-bowls', price: '₹200', numericPrice: 200, description: 'Tender paneer in rich tomato-butter gravy with rice', isVegetarian: true, isMustTry: true },
  { id: 'bb-3', name: 'Rajma Chawal', category: 'bulbicious-bowls', price: '₹120', numericPrice: 120, description: 'Homestyle North Indian spiced kidney beans with rice', isVegetarian: true },
  { id: 'bb-4', name: 'Chole Chawal', category: 'bulbicious-bowls', price: '₹120', numericPrice: 120, description: 'Punjabi spiced chickpeas served with aromatic rice', isVegetarian: true },
  { id: 'bb-5', name: 'Vegetable Paneer Saute', category: 'bulbicious-bowls', price: '₹220', numericPrice: 220, description: 'Herbed grilled paneer with tossed broccoli, zucchini & corn', isVegetarian: true },
  { id: 'bb-6', name: 'Corn Chaat', category: 'bulbicious-bowls', price: '₹170', numericPrice: 170, description: 'Warm buttered corn bowl with tangy chaat seasonings', isVegetarian: true },
  { id: 'bb-7', name: 'Manchurian Fried Rice', category: 'bulbicious-bowls', price: '₹180', numericPrice: 180, description: 'Wok fried rice topped with savory veg Manchurian gravy', isVegetarian: true },

  // TANDOORI
  { id: 'td-1', name: 'Cauliflower Tikka Masala', category: 'tandoori', price: '₹150', numericPrice: 150, description: 'Spiced cauliflower florets roasted in the clay tandoor', isVegetarian: true },
  { id: 'td-2', name: 'Tandoori Paneer Tikka', category: 'tandoori', price: '₹280', numericPrice: 280, description: 'Classic red spice marinade with charcoal grilled cottage cheese', isVegetarian: true, isMustTry: true },
  { id: 'td-3', name: 'Afghani Paneer Tikka', category: 'tandoori', price: '₹300', numericPrice: 300, description: 'Mild cashew, cream and cardamom marinade grilled to perfection', isVegetarian: true },
  { id: 'td-4', name: 'Tandoori Momo', category: 'tandoori', price: '₹160', numericPrice: 160, description: 'Vegetable momos marinated in tandoori paste and char-grilled', isVegetarian: true },
  { id: 'td-5', name: 'Afghani Momo', category: 'tandoori', price: '₹160', numericPrice: 160, description: 'Creamy Afghani glazed char-grilled momos with onions', isVegetarian: true },
  { id: 'td-6', name: 'Tandoori Masala Chaap', category: 'tandoori', price: '₹240', numericPrice: 240, description: 'Spicy tandoori roasted soybean chaap skewers with mint chutney', isVegetarian: true },
  { id: 'td-7', name: 'Afghani Chaap', category: 'tandoori', price: '₹260', numericPrice: 260, description: 'Melt-in-mouth soya chaap marinated in creamy white cashew sauce', isVegetarian: true, isMustTry: true },

  // COMBOS
  { id: 'cb-1', name: 'Vada Pav/Bun Muska with Adrak Chai', category: 'combos', price: '₹55', numericPrice: 55, description: 'Signature street combo: Choice of Vada Pav or Muska Bun with hot Ginger Chai', isVegetarian: true, isMustTry: true },
  { id: 'cb-2', name: 'Aloo Tikki Burger with Portion of Fries & Lemon Mint Mojito', category: 'combos', price: '₹250', numericPrice: 250, description: 'Burger + Crispy French Fries + Chilled Mojito', isVegetarian: true },
  { id: 'cb-3', name: 'Veg Sandwich with Portion of Fries & Lemon Mint Mojito', category: 'combos', price: '₹300', numericPrice: 300, description: 'Grilled sandwich + Fries + Chilled Mojito', isVegetarian: true },
  { id: 'cb-4', name: 'OTC Pizza with Portion of Fries & Lemon Mint Mojito', category: 'combos', price: '₹350', numericPrice: 350, description: 'Onion Tomato Capsicum Pizza + Fries + Mojito', isVegetarian: true },
  { id: 'cb-5', name: 'Paneer Makhani with 2 Lacha Paratha', category: 'combos', price: '₹180', numericPrice: 180, description: 'Rich paneer gravy served with 2 flaky layered parathas', isVegetarian: true },
  { id: 'cb-6', name: 'Dal Makhani with 2 Lacha Paratha', category: 'combos', price: '₹180', numericPrice: 180, description: 'Creamy black lentils served with 2 layered lacha parathas', isVegetarian: true, isMustTry: true },
  { id: 'cb-7', name: 'Dal Tadka with Jeera Rice', category: 'combos', price: '₹150', numericPrice: 150, description: 'Yellow dal tempered with cumin and garlic with fragrant cumin rice', isVegetarian: true },
  { id: 'cb-8', name: 'Veg Biryani with Raita', category: 'combos', price: '₹180', numericPrice: 180, description: 'Spiced aromatic dum cooked rice with vegetable layers & cucumber raita', isVegetarian: true },

  // THALI
  { id: 'th-1', name: 'Executive Thali', category: 'thali', price: '₹190', numericPrice: 190, description: 'Paneer Butter Masala, Dal Makhani/Tadka, Jeera Rice, 2 Roti, Salad & Pickle', isVegetarian: true },
  { id: 'th-2', name: 'Premium Thali', category: 'thali', price: '₹240', numericPrice: 240, description: 'Paneer Dish, Dal Makhani, Mixed Vegetable, Jeera Rice, 2 Lacha Parathas, Sweet & Raita', isVegetarian: true, isMustTry: true },

  // BEVERAGES (HOT & COLD & BUBBLE MOCKTAIL)
  { id: 'bv-1', name: 'Kullad Adrak Chai', category: 'beverages', price: '₹20/₹30', numericPrice: 20, description: 'Aromatic crushed ginger tea brewed in traditional earthen clay cup', isVegetarian: true, isMustTry: true },
  { id: 'bv-2', name: 'Kullad Masala Chai', category: 'beverages', price: '₹25/₹35', numericPrice: 25, description: 'Cardamom and clove spiced royal tea served in a kullad', isVegetarian: true },
  { id: 'bv-3', name: 'Black Tea', category: 'beverages', price: '₹50', numericPrice: 50, description: 'Steeped Assam tea leaves served hot', isVegetarian: true },
  { id: 'bv-4', name: 'Green Tea', category: 'beverages', price: '₹50', numericPrice: 50, description: 'Antioxidant rich refreshing green tea', isVegetarian: true },
  { id: 'bv-5', name: 'Hand Beaten Coffee', category: 'beverages', price: '₹80', numericPrice: 80, description: 'Classic frothy whipped Indian café style hot coffee', isVegetarian: true, isMustTry: true },
  { id: 'bv-6', name: 'Americano Coffee', category: 'beverages', price: '₹60', numericPrice: 60, description: 'Double shot espresso diluted with hot water', isVegetarian: true },
  { id: 'bv-7', name: 'Hot Chocolate', category: 'beverages', price: '₹120', numericPrice: 120, description: 'Velvety rich cocoa with steamed milk', isVegetarian: true },
  { id: 'bv-8', name: 'Lemonana', category: 'beverages', price: '₹120', numericPrice: 120, description: 'Middle-Eastern crushed mint and fresh lemon cooler', isVegetarian: true },
  { id: 'bv-9', name: 'Lemon Mint Mojito', category: 'beverages', price: '₹120', numericPrice: 120, description: 'Zesty lemon, mint leaves, cane sugar and sparkling soda', isVegetarian: true },
  { id: 'bv-10', name: 'Green Apple Mojito', category: 'beverages', price: '₹120', numericPrice: 120, description: 'Crisp green apple syrup with fresh mint and soda', isVegetarian: true },
  { id: 'bv-11', name: 'Water Melon Mojito', category: 'beverages', price: '₹120', numericPrice: 120, description: 'Sweet watermelon crush with mint and lime', isVegetarian: true },
  { id: 'bv-12', name: 'Kiwi Mojito', category: 'beverages', price: '₹120', numericPrice: 120, description: 'Tart kiwi with fresh mint leaves and bubbly soda', isVegetarian: true },
  { id: 'bv-13', name: 'Lemon Iced Tea', category: 'beverages', price: '₹120', numericPrice: 120, description: 'Brewed black tea infused with lemon zest over ice', isVegetarian: true },
  { id: 'bv-14', name: 'Water Melon Iced Tea', category: 'beverages', price: '₹120', numericPrice: 120, description: 'Fruity watermelon infused iced black tea', isVegetarian: true },
  { id: 'bv-15', name: 'Peach Iced Tea', category: 'beverages', price: '₹120', numericPrice: 120, description: 'Sweet Georgia peach flavor brewed with iced tea', isVegetarian: true },
  { id: 'bv-16', name: 'Strawberry Iced Tea', category: 'beverages', price: '₹120', numericPrice: 120, description: 'Sweet berry notes and cool brewed tea', isVegetarian: true },
  { id: 'bv-17', name: 'Guava Iced Tea', category: 'beverages', price: '₹120', numericPrice: 120, description: 'Tropical guava flavor in iced tea with spice hint', isVegetarian: true },
  { id: 'bv-18', name: 'Masala Cola', category: 'beverages', price: '₹120', numericPrice: 120, description: 'Fizzy cola spiked with chatpata rock salt, cumin & lemon', isVegetarian: true },
  { id: 'bv-19', name: 'Imli Banta', category: 'beverages', price: '₹140', numericPrice: 140, description: 'Traditional tamarind tangy desi banta soda with masala', isVegetarian: true },
  { id: 'bv-20', name: 'Kachi Masti', category: 'beverages', price: '₹140', numericPrice: 140, description: 'Raw mango kairi cooler with black salt and mint', isVegetarian: true },
  { id: 'bv-21', name: 'Bubble Lemon Mint', category: 'beverages', price: '₹120', numericPrice: 120, description: 'Popping boba spheres in refreshing lemon mint cooler', isVegetarian: true },
  { id: 'bv-22', name: 'Bubble Hibiscus Tea', category: 'beverages', price: '₹120', numericPrice: 120, description: 'Ruby hibiscus flower infusion with fruit popping pearls', isVegetarian: true },
  { id: 'bv-23', name: 'Bubble Strawberry', category: 'beverages', price: '₹120', numericPrice: 120, description: 'Sweet strawberry mocktail with burst-in-mouth boba', isVegetarian: true },
  { id: 'bv-24', name: 'Bubble Mango Passion', category: 'beverages', price: '₹120', numericPrice: 120, description: 'Tropical mango passion fruit blend with popping bubbles', isVegetarian: true, isMustTry: true },
  { id: 'bv-25', name: 'Tomato Soup', category: 'beverages', price: '₹130', numericPrice: 130, description: 'Creamy ripe tomato soup served with crisp bread croutons', isVegetarian: true },
  { id: 'bv-26', name: 'Hot N Sour Soup', category: 'beverages', price: '₹150', numericPrice: 150, description: 'Spicy tangy Asian broth with shredded vegetables', isVegetarian: true },
  { id: 'bv-27', name: 'Manchow Soup', category: 'beverages', price: '₹150', numericPrice: 150, description: 'Hearty garlic ginger soup topped with fried crispy noodles', isVegetarian: true },
  { id: 'bv-28', name: 'Sweet Corn Soup', category: 'beverages', price: '₹150', numericPrice: 150, description: 'Mild comforting sweet corn cream soup', isVegetarian: true },
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'gal-1',
    title: 'Warm Filament Ambience',
    category: 'Ambience',
    src: interiorImg,
    description: 'Vintage glowing Edison bulbs creating our signature golden evening vibe in Mansarovar.',
  },
  {
    id: 'gal-2',
    title: 'Gourmet Burgers & Sandwiches',
    category: 'Food',
    src: burgerSandwichImg,
    description: 'Cheesy Bombay grilled sandwiches and crispy potato patties with golden fries.',
  },
  {
    id: 'gal-3',
    title: 'Crispy Momos & Asian Bites',
    category: 'Food',
    src: chineseMomosImg,
    description: 'Golden kurkure paneer momos, steamed dumplings and spicy chili garlic wok noodles.',
  },
  {
    id: 'gal-4',
    title: 'Decadent Shakes & Coolers',
    category: 'Drinks',
    src: shakesDrinksImg,
    description: 'Thick Nutella Brownie milkshakes and iced mint lemon mojitos for sunny afternoons.',
  },
  {
    id: 'gal-5',
    title: 'Sizzling Tandoor Grill',
    category: 'Food',
    src: tandooriTikkaImg,
    description: 'Smoky clay-oven paneer tikka skewers with charred bell peppers and fresh mint dip.',
  },
  {
    id: 'gal-6',
    title: 'Mansarovar Twilight Facade',
    category: 'Exterior',
    src: exteriorImg,
    description: 'Welcoming glowing storefront opposite Landscape Garden in Mansarovar Sector 7.',
  },
  {
    id: 'gal-7',
    title: 'Desi Street Classics',
    category: 'Food',
    src: streetStyleImg,
    description: 'Crisp hot Mumbai vada pav and buttery pav bhaji served with lemon and chopped onions.',
  },
  {
    id: 'gal-8',
    title: 'Sizzling Hot Brownie',
    category: 'Dessert',
    src: dessertBrownieImg,
    description: 'Bubbling hot chocolate fudge over rich walnut brownie and velvety vanilla ice cream.',
  },
];

export const REVIEWS_DATA: TestimonialReview[] = [
  {
    id: 'rev-1',
    theme: 'Great ambience',
    comment:
      'The lighting and atmosphere here is simply gorgeous. The hanging bulb decor and cozy seating makes it one of the best evening hangout spots in Mansarovar.',
    authorType: 'Local Regular',
    rating: 5,
    tag: 'Cozy Atmosphere',
  },
  {
    id: 'rev-2',
    theme: 'Good food',
    comment:
      'Loved the Kurkure Paneer Momos and the Nutella Brownie Shake! Everything is fresh, piping hot, and full of flavor. Definitely our go-to cafe now.',
    authorType: 'Foodie Couple',
    rating: 5,
    tag: 'Delicious Food',
  },
  {
    id: 'rev-3',
    theme: 'Nice place for friends',
    comment:
      'We celebrated my friend’s birthday here. The staff is extremely welcoming, music is at the right volume, and group table arrangements are super comfortable.',
    authorType: 'College Group',
    rating: 5,
    tag: 'Perfect for Groups',
  },
  {
    id: 'rev-4',
    theme: 'Cozy atmosphere',
    comment:
      'Warm yellow lights, relaxed couches, and delicious ginger chai in a traditional kullad. Perfect spot to read a book or have long quiet conversations.',
    authorType: 'Solo Visitor',
    rating: 5,
    tag: 'Great Vibe',
  },
  {
    id: 'rev-5',
    theme: 'Good value',
    comment:
      'Prices are surprisingly reasonable (₹200–₹400 for two) for such a well-designed, premium feeling café in Jaipur. The combos are great value for money.',
    authorType: 'Mansarovar Resident',
    rating: 5,
    tag: 'Affordable & Premium',
  },
];
