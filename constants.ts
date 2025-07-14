import { PoojaType, PoojaItem, VratType } from './types';

// Units for Pooja items
export const UNITS = {
  PIECE: 'piece',
  GRAM: 'gm',
  KILOGRAM: 'kg',
  MILLILITER: 'ml',
  LITER: 'ltr',
  PACKET: 'packet',
  SET: 'set',
  BUNDLE: 'bundle',
  METER: 'meter'
};

// Master Pooja Items Dictionary
export const POOJA_ITEMS_MASTER: Record<string, Omit<PoojaItem, 'quantity'>> = {
  // Containers & Vessels
  'kalash-pot': {
    id: 'kalash-pot',
    name: 'Kalash (Sacred Pot)',
    description: 'Brass or copper pot for holding sacred water',
    price: 350,
    unit: UNITS.PIECE
  },
  'brass-lamp': {
    id: 'brass-lamp',
    name: 'Brass Lamp',
    description: 'Traditional brass lamp for continuous lighting',
    price: 250,
    unit: UNITS.PIECE
  },
  'oil-lamp': {
    id: 'oil-lamp',
    name: 'Oil Lamp (Diya)',
    description: 'Traditional clay lamp for lighting',
    price: 5,
    unit: UNITS.PIECE
  },
  'diyas-earthen': {
    id: 'diyas-earthen',
    name: 'Earthen Diyas',
    description: 'Traditional clay lamps for lighting',
    price: 5,
    unit: UNITS.PIECE
  },

  // Fruits & Natural Items
  'coconut-nariyal': {
    id: 'coconut-nariyal',
    name: 'Coconut - નાળિયેર (Naliyer)',
    description: 'Fresh coconut for offerings',
    price: 40,
    unit: UNITS.PIECE
  },
  'coconut-entrance': {
    id: 'coconut-entrance',
    name: 'Coconut for Breaking',
    description: 'Coconut to break at entrance for removing obstacles',
    price: 40,
    unit: UNITS.PIECE
  },
  'banana-leaves': {
    id: 'banana-leaves',
    name: 'Banana Leaves',
    description: 'Fresh banana leaves for serving prasad',
    price: 10,
    unit: UNITS.PIECE
  },
  'mango-leaves': {
    id: 'mango-leaves',
    name: 'Mango Leaves (Aam ke Patte)',
    description: 'Fresh mango leaves for decoration and rituals',
    price: 20,
    unit: UNITS.BUNDLE
  },
  'tulsi-leaves': {
    id: 'tulsi-leaves',
    name: 'Tulsi Leaves',
    description: 'Holy basil leaves for worship',
    price: 1,
    unit: UNITS.PIECE
  },
  'betel-leaves': {
    id: 'betel-leaves',
    name: 'Betel Leaves (Paan ke Patte)',
    description: 'Fresh betel leaves for offerings',
    price: 2,
    unit: UNITS.PIECE
  },
  'lotus-flowers': {
    id: 'lotus-flowers',
    name: 'Lotus Flowers',
    description: 'Fresh or artificial lotus for worship',
    price: 15,
    unit: UNITS.PIECE
  },
  'marigold-flowers': {
    id: 'marigold-flowers',
    name: 'Marigold Flowers',
    description: 'Fresh marigold garlands for decoration',
    price: 30,
    unit: UNITS.PIECE
  },
  'rose-petals': {
    id: 'rose-petals',
    name: 'Rose Petals',
    description: 'Fresh rose petals for offerings',
    price: 50,
    unit: UNITS.GRAM
  },

  // Powders & Pastes
  'vermillion-sindoor': {
    id: 'vermillion-sindoor',
    name: 'Vermillion (Sindoor)',
    description: 'Red powder for tilak and decoration',
    price: 40,
    unit: UNITS.PACKET
  },
  'turmeric-haldi': {
    id: 'turmeric-haldi',
    name: 'Turmeric (Haldi)',
    description: 'Auspicious yellow powder for rituals',
    price: 60,
    unit: UNITS.GRAM
  },
  'kumkum-packets': {
    id: 'kumkum-packets',
    name: 'Kumkum Packets',
    description: 'Red kumkum powder for tilak',
    price: 10,
    unit: UNITS.PACKET
  },
  'chandan-paste': {
    id: 'chandan-paste',
    name: 'Chandan (Sandalwood) Paste',
    description: 'Pure sandalwood paste for tilak',
    price: 100,
    unit: UNITS.GRAM
  },
  'roli-chawal': {
    id: 'roli-chawal',
    name: 'Roli Chawal',
    description: 'Red tilak powder with rice',
    price: 25,
    unit: UNITS.PACKET
  },

  // Grains & Food Items
  'rice-chawal': {
    id: 'rice-chawal',
    name: 'Rice (Chawal)',
    description: 'Unbroken rice grains for offerings',
    price: 90,
    unit: UNITS.KILOGRAM
  },
  'rice-red': {
    id: 'rice-red',
    name: 'Red Rice (Lal Chawal)',
    description: 'Colored rice for offerings',
    price: 300,
    unit: UNITS.KILOGRAM
  },
  'puffed-rice': {
    id: 'puffed-rice',
    name: 'Puffed Rice (Murmura)',
    description: 'Light rice for goddess offerings',
    price: 250,
    unit: UNITS.KILOGRAM
  },
  'wheat-gehun': {
    id: 'wheat-gehun',
    name: 'Wheat (Gehun)',
    description: 'Whole wheat grains for offerings',
    price: 50,
    unit: UNITS.KILOGRAM
  },
  'sesame-seeds': {
    id: 'sesame-seeds',
    name: 'Sesame Seeds (Til)',
    description: 'White sesame seeds for rituals',
    price: 150,
    unit: UNITS.GRAM
  },
  'black-sesame': {
    id: 'black-sesame',
    name: 'Black Sesame Seeds',
    description: 'Black sesame for specific rituals',
    price: 200,
    unit: UNITS.GRAM
  },

  // Dairy & Liquids
  'ghee-clarified-butter': {
    id: 'ghee-clarified-butter',
    name: 'Ghee (Clarified Butter)',
    description: 'Pure cow ghee for lamp and prasad',
    price: 600,
    unit: UNITS.KILOGRAM
  },
  'milk-doodh': {
    id: 'milk-doodh',
    name: 'Milk (Doodh)',
    description: 'Fresh milk for abhishek and prasad',
    price: 60,
    unit: UNITS.LITER
  },
  'cow-milk': {
    id: 'cow-milk',
    name: 'Cow Milk',
    description: 'Pure cow milk for rituals',
    price: 60,
    unit: UNITS.LITER
  },
  'curd-dahi': {
    id: 'curd-dahi',
    name: 'Curd (Dahi)',
    description: 'Fresh curd for panchamrit',
    price: 80,
    unit: UNITS.GRAM
  },
  'mustard-oil': {
    id: 'mustard-oil',
    name: 'Mustard Oil',
    description: 'Pure mustard oil for lighting lamps',
    price: 320,
    unit: UNITS.LITER
  },
  'ganga-jal': {
    id: 'ganga-jal',
    name: 'Ganga Jal (Holy Water)',
    description: 'Sacred water from river Ganga',
    price: 50,
    unit: UNITS.MILLILITER
  },

  // Sweets & Dry Fruits
  'sugar-chini': {
    id: 'sugar-chini',
    name: 'Sugar (Chini)',
    description: 'For preparing prasad and offerings',
    price: 140,
    unit: UNITS.KILOGRAM
  },
  'jaggery-gud': {
    id: 'jaggery-gud',
    name: 'Jaggery (Gud)',
    description: 'Natural sweetener for prasad',
    price: 80,
    unit: UNITS.KILOGRAM
  },
  'honey': {
    id: 'honey',
    name: 'Pure Honey',
    description: 'Natural honey for panchamrit',
    price: 800,
    unit: UNITS.KILOGRAM
  },
  'dry-fruits': {
    id: 'dry-fruits',
    name: 'Mixed Dry Fruits',
    description: 'Almonds, cashews, raisins for prasad',
    price: 1200,
    unit: UNITS.KILOGRAM
  },
  'almonds': {
    id: 'almonds',
    name: 'Almonds (Badam)',
    description: 'Premium almonds for offerings',
    price: 800,
    unit: UNITS.GRAM
  },
  'cashews': {
    id: 'cashews',
    name: 'Cashews (Kaju)',
    description: 'Premium cashews for prasad',
    price: 1000,
    unit: UNITS.GRAM
  },
  'raisins': {
    id: 'raisins',
    name: 'Raisins (Kishmish)',
    description: 'Sweet raisins for offerings',
    price: 400,
    unit: UNITS.GRAM
  },
  'dates': {
    id: 'dates',
    name: 'Dates (Khajur)',
    description: 'Sweet dates for prasad',
    price: 300,
    unit: UNITS.GRAM
  },

  // Incense & Fragrance
  'incense-sticks': {
    id: 'incense-sticks',
    name: 'Incense Sticks (Agarbatti)',
    description: 'Fragrant incense for creating divine atmosphere',
    price: 3,
    unit: UNITS.PIECE
  },
  'dhoop-sticks': {
    id: 'dhoop-sticks',
    name: 'Dhoop Sticks',
    description: 'Sacred smoke for purification',
    price: 4,
    unit: UNITS.PIECE
  },
  'camphor-kapoor': {
    id: 'camphor-kapoor',
    name: 'Camphor (Kapoor)',
    description: 'Pure camphor for aarti',
    price: 2.5,
    unit: UNITS.PIECE
  },
  'guggul': {
    id: 'guggul',
    name: 'Guggul',
    description: 'Sacred resin for havan',
    price: 200,
    unit: UNITS.GRAM
  },

  // Cotton & Wicks
  'cotton-wicks': {
    id: 'cotton-wicks',
    name: 'Cotton Wicks',
    description: 'Cotton wicks for oil lamps',
    price: 1,
    unit: UNITS.PIECE
  },
  'sacred-thread': {
    id: 'sacred-thread',
    name: 'Sacred Thread (Janeu)',
    description: 'Sacred thread for rituals',
    price: 10,
    unit: UNITS.PIECE
  },
  'red-thread': {
    id: 'red-thread',
    name: 'Red Thread (Raksha Sutra)',
    description: 'Red protective thread',
    price: 20,
    unit: UNITS.METER
  },

  // Idols & Religious Items
  'lakshmi-idol': {
    id: 'lakshmi-idol',
    name: 'Lakshmi Idol',
    description: 'Beautiful idol of Goddess Lakshmi',
    price: 200,
    unit: UNITS.PIECE
  },
  'ganesh-murti': {
    id: 'ganesh-murti',
    name: 'Ganesha Murti',
    description: 'Clay idol of Lord Ganesha',
    price: 300,
    unit: UNITS.PIECE
  },
  'shivling': {
    id: 'shivling',
    name: 'Shivling',
    description: 'Sacred Shivling for worship',
    price: 150,
    unit: UNITS.PIECE
  },
  'durga-idol': {
    id: 'durga-idol',
    name: 'Durga Maa Idol',
    description: 'Beautiful idol of Goddess Durga',
    price: 350,
    unit: UNITS.PIECE
  },

  // Coins & Currency
  'gold-coins': {
    id: 'gold-coins',
    name: 'Gold Coins (Replica)',
    description: 'Small gold-plated coins for prosperity ritual',
    price: 30,
    unit: UNITS.PIECE
  },
  'silver-coins': {
    id: 'silver-coins',
    name: 'Silver Coins (Small)',
    description: 'Small silver coins for wealth prayers',
    price: 100,
    unit: UNITS.PIECE
  },

  // Decorative Items
  'swastik-stickers': {
    id: 'swastik-stickers',
    name: 'Swastik Stickers',
    description: 'Auspicious symbols for doorways',
    price: 3.5,
    unit: UNITS.PIECE
  },
  'rangoli-colors': {
    id: 'rangoli-colors',
    name: 'Rangoli Colors',
    description: 'Vibrant colors for creating rangoli',
    price: 50,
    unit: UNITS.SET
  },
  'kalash-decoration': {
    id: 'kalash-decoration',
    name: 'Kalash Decoration Items',
    description: 'Items to decorate the sacred kalash',
    price: 100,
    unit: UNITS.SET
  },

  // Specialty Items & Sets
  'panchamrit-ingredients': {
    id: 'panchamrit-ingredients',
    name: 'Panchamrit Ingredients',
    description: 'Honey, curd, and other ingredients for sacred mixture',
    price: 120,
    unit: UNITS.SET
  },
  'modak-ingredients': {
    id: 'modak-ingredients',
    name: 'Modak Making Kit',
    description: 'Rice flour, jaggery, coconut for Ganesha\'s favorite sweet',
    price: 120,
    unit: UNITS.SET
  },
  'havan-samagri': {
    id: 'havan-samagri',
    name: 'Havan Samagri',
    description: 'Complete mixture for fire rituals',
    price: 80,
    unit: UNITS.PACKET
  },
  'puja-thali': {
    id: 'puja-thali',
    name: 'Decorated Puja Thali',
    description: 'Beautiful plate for performing aarti',
    price: 200,
    unit: UNITS.PIECE
  },

  // Additional items found in existing data
  'kalash-new-home': {
    id: 'kalash-new-home',
    name: 'Decorated Kalash',
    description: 'Sacred pot decorated with mango leaves and coconut',
    price: 400,
    unit: UNITS.PIECE
  },
  'rock-salt': {
    id: 'rock-salt',
    name: 'Rock Salt (Sendha Namak)',
    description: 'For purification and negative energy removal',
    price: 200,
    unit: UNITS.KILOGRAM
  },
  'rangoli-powder': {
    id: 'rangoli-powder',
    name: 'Rangoli Powder',
    description: 'Colorful powder for making welcome patterns',
    price: 80,
    unit: UNITS.PACKET
  },
  'betel-nuts': {
    id: 'betel-nuts',
    name: 'Betel Nuts (Supari)',
    description: 'Sacred betel nuts for offerings',
    price: 400,
    unit: UNITS.KILOGRAM
  },
  'yellow-mustard-seeds': {
    id: 'yellow-mustard-seeds',
    name: 'Yellow Mustard Seeds',
    description: 'Seeds for rituals and purification',
    price: 300,
    unit: UNITS.KILOGRAM
  },
  'whole-wheat-flour': {
    id: 'whole-wheat-flour',
    name: 'Whole Wheat Flour (Atta)',
    description: 'For making prasad and offerings',
    price: 45,
    unit: UNITS.KILOGRAM
  },
  'mishri': {
    id: 'mishri',
    name: 'Mishri (Rock Sugar)',
    description: 'Crystalline sugar for offerings',
    price: 200,
    unit: UNITS.KILOGRAM
  },
  'kesar': {
    id: 'kesar',
    name: 'Kesar (Saffron)',
    description: 'Premium saffron for special offerings',
    price: 5000,
    unit: UNITS.GRAM
  },
  'elaichi': {
    id: 'elaichi',
    name: 'Elaichi (Cardamom)',
    description: 'Aromatic cardamom for prasad',
    price: 1500,
    unit: UNITS.KILOGRAM
  },
  'laung': {
    id: 'laung',
    name: 'Laung (Cloves)',
    description: 'Aromatic cloves for offerings',
    price: 2000,
    unit: UNITS.KILOGRAM
  },
  'dalchini': {
    id: 'dalchini',
    name: 'Dalchini (Cinnamon)',
    description: 'Aromatic cinnamon sticks',
    price: 800,
    unit: UNITS.KILOGRAM
  },
  'coconut-oil': {
    id: 'coconut-oil',
    name: 'Coconut Oil',
    description: 'Pure coconut oil for lamps',
    price: 300,
    unit: UNITS.LITER
  },
  'sesame-oil': {
    id: 'sesame-oil',
    name: 'Sesame Oil',
    description: 'Pure sesame oil for rituals',
    price: 400,
    unit: UNITS.LITER
  },
  'durva-grass': {
    id: 'durva-grass',
    name: 'Durva Grass',
    description: 'Sacred grass beloved by Lord Ganesha',
    price: 2,
    unit: UNITS.BUNDLE
  },
  'red-flowers': {
    id: 'red-flowers',
    name: 'Red Flowers (Jaba)',
    description: 'Fresh red hibiscus flowers',
    price: 5,
    unit: UNITS.PIECE
  },
  'laddu-ready': {
    id: 'laddu-ready',
    name: 'Ready Laddus',
    description: 'Sweet laddus as offering to Ganesha',
    price: 20,
    unit: UNITS.PIECE
  },

  // Gujarati Items
  'coconut-naliyer': {
    id: 'coconut-naliyer',
    name: 'Coconut - નાળિયેર (Naliyer)',
    description: 'Fresh coconut for offerings',
    price: 30,
    unit: UNITS.PIECE
  },
  'kanku': {
    id: 'kanku',
    name: 'Kanku - કંકુ (Kanku)',
    description: 'Vermillion powder for tilak',
    price: 0.1,
    unit: UNITS.GRAM
  },
  'gulal': {
    id: 'gulal',
    name: 'Gulal - ગુલાલ (Gulal)',
    description: 'Colored powder (often pink/red)',
    price: 0.1,
    unit: UNITS.GRAM
  },
  'abel': {
    id: 'abel',
    name: 'Abel - અબીલ (Abil)',
    description: 'White fragrant powder',
    price: 0.1,
    unit: UNITS.GRAM
  },
  'sakar': {
    id: 'sakar',
    name: 'Sakar - સાકર (Sakar)',
    description: 'Rock sugar/Sugar candy',
    price: 0.08,
    unit: UNITS.GRAM
  },
  'common-dry-fruits': {
    id: 'common-dry-fruits',
    name: 'Common Dry Fruits - સુકા મેવા (Suka Meva)',
    description: 'Mix of dry fruits for offerings',
    price: 1,
    unit: UNITS.GRAM
  },
  'supari': {
    id: 'supari',
    name: 'Supari - સોપારી (Sopari)',
    description: 'Areca nut/Betel nut',
    price: 0.6,
    unit: UNITS.GRAM
  },
  'taj': {
    id: 'taj',
    name: 'Taj - તજ (Taj)',
    description: 'Cinnamon for aromatics',
    price: 3,
    unit: UNITS.GRAM
  },
  'lavang': {
    id: 'lavang',
    name: 'Lavang - લવિંગ (Laving)',
    description: 'Cloves for fragrance',
    price: 6,
    unit: UNITS.GRAM
  },
  'elichi': {
    id: 'elichi',
    name: 'Elichi - એલચી (Elachi)',
    description: 'Cardamom for flavoring',
    price: 8,
    unit: UNITS.GRAM
  },
  'nadachadi-thread': {
    id: 'nadachadi-thread',
    name: 'Nadachadi Thread - નાડાછડી (Nadachhadi)',
    description: 'Sacred thread for rituals',
    price: 20,
    unit: UNITS.PIECE
  },
  'agarbatti': {
    id: 'agarbatti',
    name: 'Agarbatti - અગરબત્તી (Agarbatti)',
    description: 'Incense sticks for worship',
    price: 20,
    unit: UNITS.PACKET
  },
  'topra-na-vatka': {
    id: 'topra-na-vatka',
    name: 'Topra na Vatka - કોપરાના વાટકા (Kopra na Vatka)',
    description: 'Dried coconut halves/bowls',
    price: 0.1,
    unit: UNITS.GRAM
  },
  'ganpati-idol': {
    id: 'ganpati-idol',
    name: 'Ganpati Idol - ગણપતિની મૂર્તિ (Ganpati ni Murti)',
    description: 'Ganpati Idol for worship',
    price: 250,
    unit: UNITS.PIECE
  },
  'bajot': {
    id: 'bajot',
    name: 'Bajot - બાજોટ (Bajot)',
    description: 'Small wooden stool/seat (for idols)',
    price: 1000,
    unit: UNITS.PIECE
  },
  'patla': {
    id: 'patla',
    name: 'Patla - પાટલો (Patlo)',
    description: 'Wooden plank/stool (similar to Bajot)',
    price: 1000,
    unit: UNITS.PIECE
  },
  'kel-na-pan': {
    id: 'kel-na-pan',
    name: 'Kel na Pan - કેળના પાન (Kel na Pan)',
    description: 'Banana leaves for rituals',
    price: 20,
    unit: UNITS.PIECE
  },
  'tulsi-na-pan': {
    id: 'tulsi-na-pan',
    name: 'Tulsi na Pan - તુલસીના પાન (Tulsi na Pan)',
    description: 'Basil leaves for worship',
    price: 0.2,
    unit: UNITS.PIECE
  },
  'aasopalav-na-pan': {
    id: 'aasopalav-na-pan',
    name: 'Aasopalav na Pan - આસોપાલવના પાન (Aasopalav na Pan)',
    description: 'Ashoka leaves for offerings',
    price: 0.5,
    unit: UNITS.PIECE
  },
  'nagarvel-na-pan': {
    id: 'nagarvel-na-pan',
    name: 'Nagarvel na Pan - નાગરવેલના પાન (Nagarvel na Pan)',
    description: 'Betel leaves for rituals',
    price: 5,
    unit: UNITS.PIECE
  },
  'gud': {
    id: 'gud',
    name: 'Gud - ગોળ (Gol)',
    description: 'Jaggery for sweetening',
    price: 60,
    unit: UNITS.KILOGRAM
  },
  'panchamrit': {
    id: 'panchamrit',
    name: 'Panchamrit - પંચામૃત (Panchamrit)',
    description: 'A mixture of five sacred foods (milk, yogurt, ghee, honey, sugar)',
    price: 0.5,
    unit: UNITS.MILLILITER
  },
  'chhuta-phool': {
    id: 'chhuta-phool',
    name: 'Chhuta Phool - છૂટા ફૂલ (Chhuta Phool)',
    description: 'Loose flowers for decoration',
    price: 0.16,
    unit: UNITS.GRAM
  },
  'phool-har': {
    id: 'phool-har',
    name: 'Phool Har - ફૂલ હાર (Phool Har)',
    description: 'Flower garland for worship',
    price: 30,
    unit: UNITS.PIECE
  },
  'kagaj-na-duna': {
    id: 'kagaj-na-duna',
    name: 'Kagaj na Duna - કાગળના દુના (Kagaj na Duna)',
    description: 'Paper bowls/cups for offerings',
    price: 0.6,
    unit: UNITS.PIECE
  },
  'kacha-fal': {
    id: 'kacha-fal',
    name: 'Kacha Fal - કાચા ફળ (Kacha Fal)',
    description: 'Raw fruits for offerings',
    price: 20,
    unit: UNITS.PIECE
  },
  'ghau': {
    id: 'ghau',
    name: 'Ghau - ઘઉં (Ghau)',
    description: 'Wheat grains for offerings',
    price: 50,
    unit: UNITS.KILOGRAM
  },
  'chokha': {
    id: 'chokha',
    name: 'Chokha - ચોખા (Chokha)',
    description: 'Rice for rituals and offerings',
    price: 60,
    unit: UNITS.KILOGRAM
  },

  // Additional Gujarati Items
  'mindhol': {
    id: 'mindhol',
    name: 'Mindhol - મીંઢોળ (Mindhol)',
    description: 'A type of wristband or decorative item, often made with turmeric or other auspicious materials, used in weddings',
    price: 10,
    unit: UNITS.PIECE
  },
  'chali': {
    id: 'chali',
    name: 'Chali - છાલી (Chhali)',
    description: 'Betel nut skin/peel (often used in rituals)',
    price: 5,
    unit: UNITS.PIECE
  },
  'manik-stambh': {
    id: 'manik-stambh',
    name: 'Manik Stambh - માણેક સ્તંભ (Manek Stambh)',
    description: 'A pillar or column, often symbolic, possibly referring to a decorative or ritualistic pillar',
    price: 50,
    unit: UNITS.PIECE
  },
  'pipal-na-pan': {
    id: 'pipal-na-pan',
    name: 'Pipal na Pan - પીપળના પાન (Pipal na Pan)',
    description: 'Peepal leaves for worship',
    price: 1,
    unit: UNITS.PIECE
  },
  'phool-loose': {
    id: 'phool-loose',
    name: 'Phool - ફૂલ (Phool)',
    description: 'Flowers (loose) for decoration',
    price: 0.05,
    unit: UNITS.GRAM
  },
  'pakka-fal': {
    id: 'pakka-fal',
    name: 'Pakka Fal - પાકા ફળ (Pakka Fal)',
    description: 'Ripe fruits for offerings',
    price: 20,
    unit: UNITS.PIECE
  },
  'mag': {
    id: 'mag',
    name: 'Mag - મગ (Mag)',
    description: 'Green gram (moong dal)',
    price: 120,
    unit: UNITS.KILOGRAM
  },
  'sutli-thread': {
    id: 'sutli-thread',
    name: 'Sutli Thread for Toran - સૂતળી (Sutli)',
    description: 'Jute twine/thread (for making toran)',
    price: 20,
    unit: UNITS.PIECE
  },
  'sthapan-red-blouse': {
    id: 'sthapan-red-blouse',
    name: 'Sthapan Red Blouse Piece - સ્થાપન માટે લાલ બ્લાઉઝ પીસ (Sthapan mate Lal Blouse Piece)',
    description: 'Red blouse piece for ritualistic placement/establishment',
    price: 40,
    unit: UNITS.PIECE
  },
  'clay-divda': {
    id: 'clay-divda',
    name: 'Small Clay Divda/Kodiya - દિવડા/કોડિયા (Divda/Kodiya)',
    description: 'Small clay lamps for worship',
    price: 20,
    unit: UNITS.PIECE
  },
  'aluminium-thali': {
    id: 'aluminium-thali',
    name: 'Aluminium Thali - એલ્યુમિનિયમ થાળી (Aluminium Thali)',
    description: 'Aluminium plate for worship',
    price: 100,
    unit: UNITS.PIECE
  },
  'vatka': {
    id: 'vatka',
    name: 'Vatka - વાટકા (Vatka)',
    description: 'Small bowls for offerings',
    price: 50,
    unit: UNITS.PIECE
  },
  'rakabi': {
    id: 'rakabi',
    name: 'Rakabi - રકાબી (Rakabi)',
    description: 'Saucer for rituals',
    price: 50,
    unit: UNITS.PIECE
  },
  'lamp-divo': {
    id: 'lamp-divo',
    name: 'Lamp - દીવો (Divo)',
    description: 'Traditional lamp for worship',
    price: 250,
    unit: UNITS.PIECE
  },
  'ghee-liquid': {
    id: 'ghee-liquid',
    name: 'Ghee - ઘી (Ghee)',
    description: 'Clarified butter for rituals',
    price: 1.2,
    unit: UNITS.MILLILITER
  },
  'ghee-cotton': {
    id: 'ghee-cotton',
    name: 'Ghee Cotton - વાટ (Vaat)',
    description: 'Cotton wicks for ghee lamps',
    price: 20,
    unit: UNITS.PACKET
  },
  'machis': {
    id: 'machis',
    name: 'Machis - માચીસ (Machis)',
    description: 'Matchbox for lighting lamps',
    price: 5,
    unit: UNITS.PIECE
  },
  'dhana': {
    id: 'dhana',
    name: 'Dhana - ધાણા (Dhana)',
    description: 'Coriander seeds for offerings',
    price: 0.8,
    unit: UNITS.GRAM
  },
  'coins-offering': {
    id: 'coins-offering',
    name: 'Coins for Offering - સિક્કા (Sikka)',
    description: 'Coins for monetary offerings',
    price: 1,
    unit: UNITS.PIECE
  },
  
};

// Helper function to create PoojaItem with quantity from master data
const createPoojaItem = (itemId: string, quantity: number): PoojaItem => {
  const masterItem = POOJA_ITEMS_MASTER[itemId];
  if (!masterItem) {
    throw new Error(`Item with ID '${itemId}' not found in POOJA_ITEMS_MASTER`);
  }
  return {
    ...masterItem,
    quantity
  };
};

const POOJA_IMAGES = {
  // Existing Images
  satyanarayan: 'assets/Satyanarayan_pooja.png',
  grihaPravesh: 'https://images.pexels.com/photos/1647978/pexels-photo-1647978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  diwali: 'https://images.pexels.com/photos/5878471/pexels-photo-5878471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  ganesh: 'https://images.pexels.com/photos/12644933/pexels-photo-12644933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  navratri: 'https://images.pexels.com/photos/15707798/pexels-photo-15707798/free-photo-of-a-woman-in-a-red-sari-holding-a-plate-with-a-lit-candle.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  havan: 'https://images.pexels.com/photos/7747321/pexels-photo-7747321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  // New Images
  bolChauth: 'https://images.pexels.com/photos/162237/cow-animal-farm-meadow-162237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  dashamaa: 'https://images.pexels.com/photos/10100494/pexels-photo-10100494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  dhanlakshmi: 'https://images.pexels.com/photos/9780137/pexels-photo-9780137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  evratJivrat: 'https://images.pexels.com/photos/10100494/pexels-photo-10100494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  fulKajli: 'https://images.pexels.com/photos/96616/pexels-photo-96616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  ganeshGeneric: 'https://images.pexels.com/photos/10827299/pexels-photo-10827299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  gauriVrat: 'https://images.pexels.com/photos/14848332/pexels-photo-14848332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  jayaParvati: 'https://images.pexels.com/photos/14848332/pexels-photo-14848332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  kalsarp: 'https://images.pexels.com/photos/987157/pexels-photo-987157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  kevdaTrij: 'https://images.pexels.com/photos/58632/flower-plant-kewra-fragrant-pandan-58632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  krishna: 'https://images.pexels.com/photos/2048865/pexels-photo-2048865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  nakshatra: 'https://images.pexels.com/photos/110854/pexels-photo-110854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  navchandi: 'https://images.pexels.com/photos/7747333/pexels-photo-7747333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  pindDaan: 'https://images.pexels.com/photos/8432274/pexels-photo-8432274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  saibaba: 'https://images.pexels.com/photos/14886657/pexels-photo-14886657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  shiv: 'https://images.pexels.com/photos/4141679/pexels-photo-4141679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  bhagvat: 'https://images.pexels.com/photos/10959063/pexels-photo-10959063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  vadSavitri: 'https://images.pexels.com/photos/225769/pexels-photo-225769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  vishesh: 'https://images.pexels.com/photos/10959050/pexels-photo-10959050.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  // Marriage Pooja Images
  boysMarriage: 'https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  girlsMarriage: 'https://images.pexels.com/photos/1721558/pexels-photo-1721558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
};

export const POOJA_TYPES: PoojaType[] = [
  // Existing Poojas
  {
    id: 'satyanarayan-pooja',
    name: 'Satyanarayan Pooja',
    description: 'For prosperity, happiness, and the well-being of the family.',
    image: POOJA_IMAGES.satyanarayan,
  },
  {
    id: 'boys-marriage-pooja',
    name: 'Boys Marriage Pooja',
    description: 'Traditional rituals and ceremonies performed for the groom before and during the wedding ceremony.',
    image: POOJA_IMAGES.boysMarriage,
  },
  {
    id: 'girls-marriage-pooja',
    name: 'Girls Marriage Pooja',
    description: 'Sacred rituals and ceremonies performed for the bride before and during the wedding ceremony.',
    image: POOJA_IMAGES.girlsMarriage,
  },

  {
    id: 'griha-pravesh-pooja',
    name: 'Griha Pravesh Pooja',
    description: 'Performed when entering a new home to purify the space and bring good fortune.',
    image: POOJA_IMAGES.grihaPravesh,
  },
  {
    id: 'diwali-pooja',
    name: 'Diwali Pooja',
    description: 'Lakshmi Pooja performed on the auspicious day of Diwali to welcome wealth.',
    image: POOJA_IMAGES.diwali,
  },
  {
    id: 'ganesh-chaturthi-pooja',
    name: 'Ganesh Chaturthi Pooja',
    description: "Celebration of Lord Ganesha's birth with immense devotion and joy.",
    image: POOJA_IMAGES.ganesh,
  },
   {
    id: 'navratri-pooja',
    name: 'Navratri Pooja',
    description: 'Nine days of worship dedicated to Goddess Durga in her various forms.',
    image: POOJA_IMAGES.navratri,
  },
   {
    id: 'havan-yagna',
    name: 'Havan / Yagna',
    description: 'A fire ritual to invoke divine blessings for purification and specific goals.',
    image: POOJA_IMAGES.havan,
  },
  // New Poojas
  {
    id: 'bol-chauth-gaumata-pooja',
    name: 'Bol Chauth Gaumata Pooja',
    description: 'A sacred pooja dedicated to the worship of cows (Gaumata) for blessings and prosperity.',
    image: POOJA_IMAGES.bolChauth,
  },
  {
    id: 'dashamaa-vrat',
    name: 'Dashamaa Vrat',
    description: 'A ten-day vrat to honor Goddess Dashamaa, seeking her protection from misfortunes.',
    image: POOJA_IMAGES.dashamaa,
  },
  {
    id: 'dhanlakshmi-pooja',
    name: 'Dhanlakshmi Pooja',
    description: 'Invoke the blessings of Goddess Dhanlakshmi for financial stability and wealth.',
    image: POOJA_IMAGES.dhanlakshmi,
  },
  {
    id: 'evrat-jivrat-vrat',
    name: 'Evrat-Jivrat Vrat',
    description: 'A traditional vrat observed by women for the health and longevity of their beloved husbands.',
    image: POOJA_IMAGES.evratJivrat,
  },
  {
    id: 'ful-kajli-vrat',
    name: 'Ful-kajli Vrat',
    description: 'An auspicious vrat celebrated with devotion, involving offerings of flowers and kajal.',
    image: POOJA_IMAGES.fulKajli,
  },
  {
    id: 'ganesh-pooja',
    name: 'Ganesh Pooja',
    description: 'A devotional pooja to Lord Ganesha to remove obstacles and ensure success in endeavors.',
    image: POOJA_IMAGES.ganeshGeneric,
  },
  {
    id: 'gauri-vrat',
    name: 'Gauri Vrat',
    description: 'Worship of Goddess Gauri to seek blessings for a blissful marital life and well-being.',
    image: POOJA_IMAGES.gauriVrat,
  },
  {
    id: 'grah-shanti-pooja',
    name: 'Grah Shanti Pooja',
    description: 'A ritual to appease the nine planets and mitigate their negative astrological effects.',
    image: POOJA_IMAGES.havan, // Re-using havan image
  },
  {
    id: 'jaya-parvati-vrat',
    name: 'Jaya-Parvati Vrat',
    description: 'A five-day vrat dedicated to Goddess Jaya and Parvati for a good husband and happy family life.',
    image: POOJA_IMAGES.jayaParvati,
  },
  {
    id: 'kalsarp-vidhi-pooja',
    name: 'Kalsarp Vidhi Pooja',
    description: "A specialized ritual performed to alleviate the effects of the Kalsarp Dosha in one's horoscope.",
    image: POOJA_IMAGES.kalsarp,
  },
  {
    id: 'kevda-trij-vrat',
    name: 'Kevda Trij Vrat',
    description: 'A significant vrat for marital bliss, where Kevda (pandanus) flowers are offered to deities.',
    image: POOJA_IMAGES.kevdaTrij,
  },
  {
    id: 'krishna-pooja',
    name: 'Krishna Pooja',
    description: 'Celebrate the divine presence of Lord Krishna with this joyous and devotional worship.',
    image: POOJA_IMAGES.krishna,
  },
  {
    id: 'meldi-mata-vrat',
    name: 'Meldi Mata Vrat',
    description: 'A vrat to seek blessings and protection from the powerful folk goddess, Meldi Mata.',
    image: POOJA_IMAGES.dashamaa, // Re-using image
  },
  {
    id: 'nakshatra-vidhi-pooja',
    name: 'Nakshatra Vidhi Pooja',
    description: 'A pooja to harmonize the energies of the Nakshatras (lunar mansions) for peace and progress.',
    image: POOJA_IMAGES.nakshatra,
  },
  {
    id: 'navchandi-havan',
    name: 'Navchandi Havan',
    description: 'A powerful and intricate havan to Goddess Chandi for health, prosperity, and protection.',
    image: POOJA_IMAGES.navchandi,
  },
  {
    id: 'pind-daan-karma',
    name: 'Pind Daan Karma',
    description: "A vital Hindu ritual to offer homage to deceased ancestors, ensuring their soul's peace.",
    image: POOJA_IMAGES.pindDaan,
  },
  {
    id: 'pitru-shraddh-pooja',
    name: 'Pitru Shraddh Pooja',
    description: "An annual ceremony to express gratitude and pay respects to one's ancestors (Pitrus).",
    image: POOJA_IMAGES.pindDaan, // Re-using image
  },
  {
    id: 'saibaba-vrat',
    name: 'Saibaba Vrat',
    description: 'A nine-Thursday vrat dedicated to Shirdi Sai Baba to fulfill wishes and find spiritual guidance.',
    image: POOJA_IMAGES.saibaba,
  },
  {
    id: 'santoshi-mata-vrat',
    name: 'Santoshi Mata Vrat',
    description: 'A popular 16-Friday vrat to honor Santoshi Mata, the goddess of satisfaction and contentment.',
    image: POOJA_IMAGES.navratri, // Re-using image
  },
  {
    id: 'shiv-pooja',
    name: 'Shiv Pooja',
    description: 'Worship Lord Shiva, the supreme being, for spiritual growth, peace, and inner strength.',
    image: POOJA_IMAGES.shiv,
  },
  {
    id: 'shrimad-bhagvat-pooja',
    name: 'Shrimad Bhagvat Pooja',
    description: 'A sacred seven-day recitation of the Srimad Bhagavatam to attain spiritual enlightenment.',
    image: POOJA_IMAGES.bhagvat,
  },
  {
    id: 'vad-savitri-vrat',
    name: 'Vad-Savitri Vrat',
    description: "A traditional vrat where married women pray to the Banyan tree for their husband's long life.",
    image: POOJA_IMAGES.vadSavitri,
  },
  {
    id: 'vishesh-pooja',
    name: 'Vishesh Pooja',
    description: 'A special, customized pooja conducted for specific personal intentions or occasions.',
    image: POOJA_IMAGES.vishesh,
  },
  {
    id: 'vishnuyag-pooja',
    name: 'Vishnuyag Pooja',
    description: 'A grand yagna dedicated to Lord Vishnu to seek his divine blessings for universal peace.',
    image: POOJA_IMAGES.havan, // Re-using havan image
  },
  
];

// Vrat Images
const VRAT_IMAGES = {
  bij: 'https://images.pexels.com/photos/10770830/pexels-photo-10770830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  trij: 'https://images.pexels.com/photos/14848332/pexels-photo-14848332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  chaturthi: 'https://images.pexels.com/photos/12644933/pexels-photo-12644933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  panchami: 'https://images.pexels.com/photos/7747321/pexels-photo-7747321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  saptami: 'https://images.pexels.com/photos/110854/pexels-photo-110854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  ashtami: 'https://images.pexels.com/photos/7747333/pexels-photo-7747333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  dashami: 'https://images.pexels.com/photos/10959063/pexels-photo-10959063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  ekadashi: 'https://images.pexels.com/photos/4141679/pexels-photo-4141679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  chaudash: 'https://images.pexels.com/photos/8432274/pexels-photo-8432274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  purnima: 'https://images.pexels.com/photos/2048865/pexels-photo-2048865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  amavasya: 'https://images.pexels.com/photos/987157/pexels-photo-987157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  baras: 'https://images.pexels.com/photos/14886657/pexels-photo-14886657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  generic: 'https://images.pexels.com/photos/10100494/pexels-photo-10100494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  special: 'https://images.pexels.com/photos/15707798/pexels-photo-15707798/free-photo-of-a-woman-in-a-red-sari-holding-a-plate-with-a-lit-candle.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
};

// Vrat Types with Kit Prices
export const VRAT_TYPES: VratType[] = [
  // Bij (2nd day) Vrats
  {
    id: 'ashadhi-bij-rathyatra',
    name: 'Ashadhi Bij Rathyatra',
    description: 'Sacred vrat observed on the second day of the lunar fortnight during Ashadhi month',
    kitPrice: 250,
    category: 'Bij (2nd day)',
    image: VRAT_IMAGES.bij,
    duration: '1 day',
    bestTime: 'Early morning to sunset'
  },
  {
    id: 'kajri-bij',
    name: 'Kajri Bij',
    description: 'Traditional vrat for marital happiness and prosperity',
    kitPrice: 250,
    category: 'Bij (2nd day)',
    image: VRAT_IMAGES.bij,
    duration: '1 day',
    bestTime: 'Dawn to dusk'
  },
  {
    id: 'yamdvitiya',
    name: 'Yamdvitiya',
    description: 'Vrat for protection from untimely death and health of brothers',
    kitPrice: 250,
    category: 'Bij (2nd day)',
    image: VRAT_IMAGES.bij,
    duration: '1 day',
    bestTime: 'After sunrise'
  },
  
  // Trij (3rd day) Vrats
  {
    id: 'kevada-trij-vrat',
    name: 'Kevada Trij Vrat',
    description: 'Sacred vrat for marital bliss using Kevada (pandanus) flowers',
    kitPrice: 250,
    category: 'Trij (3rd day)',
    image: VRAT_IMAGES.trij,
    duration: '1 day',
    bestTime: 'Early morning'
  },
  {
    id: 'gori-trij-nu-vrat',
    name: 'Gori Trij nu Vrat',
    description: 'Traditional Gujarati vrat for the wellbeing of married women',
    kitPrice: 250,
    category: 'Trij (3rd day)',
    image: VRAT_IMAGES.trij,
    duration: '1 day',
    bestTime: 'Morning hours'
  },
  {
    id: 'sindoor-trutiya',
    name: 'Sindoor Trutiya',
    description: 'Vrat dedicated to the application of sindoor for marital happiness',
    kitPrice: 250,
    category: 'Trij (3rd day)',
    image: VRAT_IMAGES.trij,
    duration: '1 day',
    bestTime: 'Sunrise to noon'
  },
  
  // Chaturthi (4th day) Vrats
  {
    id: 'bahula-chaturthi',
    name: 'Bahula Chaturthi',
    description: 'Vrat observed during Krishna Paksha for prosperity',
    kitPrice: 250,
    category: 'Chaturthi (4th day)',
    image: VRAT_IMAGES.chaturthi,
    duration: '1 day',
    bestTime: 'Morning to evening'
  },
  {
    id: 'ganeshchoth',
    name: 'Ganeshchoth',
    description: 'Vrat dedicated to Lord Ganesha for removing obstacles',
    kitPrice: 250,
    category: 'Chaturthi (4th day)',
    image: VRAT_IMAGES.chaturthi,
    duration: '1 day',
    bestTime: 'Early morning'
  },
  {
    id: 'shankarji-choth',
    name: 'Shankarji Choth',
    description: 'Vrat in honor of Lord Shiva for spiritual growth',
    kitPrice: 250,
    category: 'Chaturthi (4th day)',
    image: VRAT_IMAGES.chaturthi,
    duration: '1 day',
    bestTime: 'Before sunrise'
  },
  {
    id: 'dagda-choth',
    name: 'Dagda Choth',
    description: 'Traditional vrat for family wellbeing and protection',
    kitPrice: 250,
    category: 'Chaturthi (4th day)',
    image: VRAT_IMAGES.chaturthi,
    duration: '1 day',
    bestTime: 'Morning hours'
  },
  {
    id: 'varad-choth',
    name: 'Varad Choth',
    description: 'Blessing vrat for fulfillment of wishes and desires',
    kitPrice: 250,
    category: 'Chaturthi (4th day)',
    image: VRAT_IMAGES.chaturthi,
    duration: '1 day',
    bestTime: 'Dawn to noon'
  },
  {
    id: 'kadva-choth',
    name: 'Kadva Choth',
    description: 'Special vrat observed by married women for husband\'s longevity',
    kitPrice: 500,
    category: 'Chaturthi (4th day)',
    image: VRAT_IMAGES.chaturthi,
    duration: '1 day',
    bestTime: 'Sunrise to moonrise'
  },

  // Panchami (5th day) Vrats
  {
    id: 'rangpanchami',
    name: 'Rangpanchami',
    description: 'Colorful festival celebrating the arrival of spring with vibrant colors',
    kitPrice: 250,
    category: 'Panchami (5th day)',
    image: VRAT_IMAGES.panchami,
    duration: '1 day',
    bestTime: 'Morning hours'
  },
  {
    id: 'shreepanchami',
    name: 'Shreepanchami',
    description: 'Dedicated to Goddess Saraswati for knowledge and wisdom',
    kitPrice: 250,
    category: 'Panchami (5th day)',
    image: VRAT_IMAGES.panchami,
    duration: '1 day',
    bestTime: 'Early morning'
  },
  {
    id: 'vasantpanchami',
    name: 'Vasantpanchami',
    description: 'Worship of Goddess Saraswati during spring season',
    kitPrice: 250,
    category: 'Panchami (5th day)',
    image: VRAT_IMAGES.panchami,
    duration: '1 day',
    bestTime: 'Morning worship'
  },
  {
    id: 'jaya-panchami',
    name: 'Jaya Panchami',
    description: 'Victory-oriented vrat for success in endeavors',
    kitPrice: 250,
    category: 'Panchami (5th day)',
    image: VRAT_IMAGES.panchami,
    duration: '1 day',
    bestTime: 'Sunrise hours'
  },
  {
    id: 'labhpanchami',
    name: 'Labhpanchami',
    description: 'Vrat for gaining profits and prosperity in business',
    kitPrice: 250,
    category: 'Panchami (5th day)',
    image: VRAT_IMAGES.panchami,
    duration: '1 day',
    bestTime: 'Morning time'
  },
  {
    id: 'bhishma-panchak',
    name: 'Bhishma Panchak',
    description: 'Five-day vrat period honoring Bhishma Pitamah',
    kitPrice: 250,
    category: 'Panchami (5th day)',
    image: VRAT_IMAGES.panchami,
    duration: '5 days',
    bestTime: 'Dawn to dusk'
  },

  // Saptami (7th day) Vrats
  {
    id: 'suryasaptami',
    name: 'Suryasaptami',
    description: 'Sacred vrat dedicated to Lord Surya (Sun God)',
    kitPrice: 250,
    category: 'Saptami (7th day)',
    image: VRAT_IMAGES.saptami,
    duration: '1 day',
    bestTime: 'Sunrise'
  },
  {
    id: 'fal-saptami',
    name: 'Fal Saptami',
    description: 'Vrat for receiving fruitful results of good deeds',
    kitPrice: 250,
    category: 'Saptami (7th day)',
    image: VRAT_IMAGES.saptami,
    duration: '1 day',
    bestTime: 'Morning hours'
  },
  {
    id: 'achala-saptami',
    name: 'Achala Saptami',
    description: 'Steadfast vrat for stability and strength',
    kitPrice: 250,
    category: 'Saptami (7th day)',
    image: VRAT_IMAGES.saptami,
    duration: '1 day',
    bestTime: 'Early morning'
  },
  {
    id: 'ganga-saptami',
    name: 'Ganga Saptami',
    description: 'Sacred vrat dedicated to River Ganga',
    kitPrice: 250,
    category: 'Saptami (7th day)',
    image: VRAT_IMAGES.saptami,
    duration: '1 day',
    bestTime: 'Dawn hours'
  },

  // Ashtami (8th day) Vrats
  {
    id: 'buddhastami',
    name: 'Buddhastami',
    description: 'Vrat on the eighth day dedicated to Lord Buddha',
    kitPrice: 250,
    category: 'Ashtami (8th day)',
    image: VRAT_IMAGES.ashtami,
    duration: '1 day',
    bestTime: 'Morning meditation'
  },
  {
    id: 'kalbhairav-ashtami',
    name: 'Kalbhairav Ashtami',
    description: 'Fierce vrat dedicated to Kalbhairav for protection',
    kitPrice: 250,
    category: 'Ashtami (8th day)',
    image: VRAT_IMAGES.ashtami,
    duration: '1 day',
    bestTime: 'Night worship'
  },
  {
    id: 'ashokashtami',
    name: 'Ashokashtami',
    description: 'Vrat for removing sorrows and bringing joy',
    kitPrice: 250,
    category: 'Ashtami (8th day)',
    image: VRAT_IMAGES.ashtami,
    duration: '1 day',
    bestTime: 'Evening hours'
  },
  {
    id: 'durgashtami',
    name: 'Durgashtami',
    description: 'Powerful vrat dedicated to Goddess Durga',
    kitPrice: 250,
    category: 'Ashtami (8th day)',
    image: VRAT_IMAGES.ashtami,
    duration: '1 day',
    bestTime: 'Evening worship'
  },
  {
    id: 'putrada-ashtami',
    name: 'Putrada Ashtami',
    description: 'Vrat for blessing with children',
    kitPrice: 250,
    category: 'Ashtami (8th day)',
    image: VRAT_IMAGES.ashtami,
    duration: '1 day',
    bestTime: 'Morning hours'
  },

  // Dashami (10th day) Vrats
  {
    id: 'dashamanu-vrat',
    name: 'Dashamanu Vrat',
    description: 'Tenth day vrat for protection and blessings',
    kitPrice: 250,
    category: 'Dashami (10th day)',
    image: VRAT_IMAGES.dashami,
    duration: '1 day',
    bestTime: 'Morning worship'
  },
  {
    id: 'asha-dashami',
    name: 'Asha Dashami',
    description: 'Vrat for fulfillment of hopes and wishes',
    kitPrice: 250,
    category: 'Dashami (10th day)',
    image: VRAT_IMAGES.dashami,
    duration: '1 day',
    bestTime: 'Dawn hours'
  },
  {
    id: 'vijaya-dashami',
    name: 'Vijaya Dashami',
    description: 'Victory celebration of good over evil (Dussehra)',
    kitPrice: 250,
    category: 'Dashami (10th day)',
    image: VRAT_IMAGES.dashami,
    duration: '1 day',
    bestTime: 'Afternoon celebration'
  },

  // Ekadashi (11th day) Vrats
  {
    id: 'nirjala-ekadashi',
    name: 'Nirjala Ekadashi',
    description: 'Waterless fast, most austere form of Ekadashi',
    kitPrice: 250,
    category: 'Ekadashi (11th day)',
    image: VRAT_IMAGES.ekadashi,
    duration: '1 day',
    bestTime: 'Complete day fast'
  },
  {
    id: 'putrada-ekadashi',
    name: 'Putrada Ekadashi',
    description: 'Ekadashi vrat for blessing with children',
    kitPrice: 250,
    category: 'Ekadashi (11th day)',
    image: VRAT_IMAGES.ekadashi,
    duration: '1 day',
    bestTime: 'Dawn to next dawn'
  },
  {
    id: 'rama-ekadashi',
    name: 'Rama Ekadashi',
    description: 'Dedicated to Lord Rama for righteousness',
    kitPrice: 250,
    category: 'Ekadashi (11th day)',
    image: VRAT_IMAGES.ekadashi,
    duration: '1 day',
    bestTime: 'Sunrise to sunrise'
  },
  {
    id: 'kamda-ekadashi',
    name: 'Kamda Ekadashi',
    description: 'Wish-fulfilling Ekadashi vrat',
    kitPrice: 250,
    category: 'Ekadashi (11th day)',
    image: VRAT_IMAGES.ekadashi,
    duration: '1 day',
    bestTime: 'Full day fast'
  },
  {
    id: 'jaya-ekadashi',
    name: 'Jaya Ekadashi',
    description: 'Victory-bringing Ekadashi for success',
    kitPrice: 250,
    category: 'Ekadashi (11th day)',
    image: VRAT_IMAGES.ekadashi,
    duration: '1 day',
    bestTime: 'Dawn to dawn'
  },
  {
    id: 'mohini-ekadashi',
    name: 'Mohini Ekadashi',
    description: 'Enchanting vrat for spiritual attraction',
    kitPrice: 250,
    category: 'Ekadashi (11th day)',
    image: VRAT_IMAGES.ekadashi,
    duration: '1 day',
    bestTime: 'Complete day'
  },
  {
    id: 'bhim-ekadashi',
    name: 'Bhim Ekadashi',
    description: 'Powerful vrat for strength and courage',
    kitPrice: 250,
    category: 'Ekadashi (11th day)',
    image: VRAT_IMAGES.ekadashi,
    duration: '1 day',
    bestTime: 'Sunrise to sunrise'
  },
  {
    id: 'parivartini-ekadashi',
    name: 'Parivartini Ekadashi',
    description: 'Transformational Ekadashi for positive change',
    kitPrice: 250,
    category: 'Ekadashi (11th day)',
    image: VRAT_IMAGES.ekadashi,
    duration: '1 day',
    bestTime: 'Dawn to next dawn'
  },
  {
    id: 'devashyani-ekadashi',
    name: 'Devashyani Ekadashi',
    description: 'When Lord Vishnu goes to sleep (Chaturmas begins)',
    kitPrice: 250,
    category: 'Ekadashi (11th day)',
    image: VRAT_IMAGES.ekadashi,
    duration: '1 day',
    bestTime: 'Morning to next morning'
  },
  {
    id: 'vijaya-ekadashi-2',
    name: 'Vijaya Ekadashi',
    description: 'Victory-granting Ekadashi for triumph',
    kitPrice: 250,
    category: 'Ekadashi (11th day)',
    image: VRAT_IMAGES.ekadashi,
    duration: '1 day',
    bestTime: 'Complete day fast'
  },
  {
    id: 'utpatti-ekadashi',
    name: 'Utpatti Ekadashi',
    description: 'Origin Ekadashi marking the birth of Ekadashi vrat',
    kitPrice: 250,
    category: 'Ekadashi (11th day)',
    image: VRAT_IMAGES.ekadashi,
    duration: '1 day',
    bestTime: 'Dawn to dawn'
  },
  {
    id: 'varuthini-ekadashi',
    name: 'Varuthini Ekadashi',
    description: 'Protective Ekadashi for divine protection',
    kitPrice: 250,
    category: 'Ekadashi (11th day)',
    image: VRAT_IMAGES.ekadashi,
    duration: '1 day',
    bestTime: 'Sunrise to sunrise'
  },
  {
    id: 'apara-ekadashi',
    name: 'Apara Ekadashi',
    description: 'Limitless Ekadashi for boundless blessings',
    kitPrice: 250,
    category: 'Ekadashi (11th day)',
    image: VRAT_IMAGES.ekadashi,
    duration: '1 day',
    bestTime: 'Full day observance'
  },
  {
    id: 'khattilam-ekadashi',
    name: 'Khattilam Ekadashi',
    description: 'Special regional Ekadashi vrat',
    kitPrice: 250,
    category: 'Ekadashi (11th day)',
    image: VRAT_IMAGES.ekadashi,
    duration: '1 day',
    bestTime: 'Dawn to next dawn'
  },
  {
    id: 'yogini-ekadashi',
    name: 'Yogini Ekadashi',
    description: 'Mystical Ekadashi for spiritual powers',
    kitPrice: 250,
    category: 'Ekadashi (11th day)',
    image: VRAT_IMAGES.ekadashi,
    duration: '1 day',
    bestTime: 'Complete day'
  },
  {
    id: 'aja-ekadashi',
    name: 'Aja Ekadashi',
    description: 'Unborn eternal Ekadashi vrat',
    kitPrice: 250,
    category: 'Ekadashi (11th day)',
    image: VRAT_IMAGES.ekadashi,
    duration: '1 day',
    bestTime: 'Sunrise to sunrise'
  },
  {
    id: 'prabodhini-ekadashi',
    name: 'Prabodhini Ekadashi',
    description: 'Awakening Ekadashi when Lord Vishnu wakes up',
    kitPrice: 250,
    category: 'Ekadashi (11th day)',
    image: VRAT_IMAGES.ekadashi,
    duration: '1 day',
    bestTime: 'Morning to next morning'
  },
  {
    id: 'papmochani-ekadashi',
    name: 'Papmochani Ekadashi',
    description: 'Sin-destroying Ekadashi for purification',
    kitPrice: 250,
    category: 'Ekadashi (11th day)',
    image: VRAT_IMAGES.ekadashi,
    duration: '1 day',
    bestTime: 'Dawn to dawn'
  },
  {
    id: 'mokshada-ekadashi',
    name: 'Mokshada Ekadashi',
    description: 'Liberation-granting Ekadashi for spiritual freedom',
    kitPrice: 250,
    category: 'Ekadashi (11th day)',
    image: VRAT_IMAGES.ekadashi,
    duration: '1 day',
    bestTime: 'Complete day fast'
  },
  {
    id: 'kamini-ekadashi',
    name: 'Kamini Ekadashi',
    description: 'Desire-fulfilling Ekadashi vrat',
    kitPrice: 250,
    category: 'Ekadashi (11th day)',
    image: VRAT_IMAGES.ekadashi,
    duration: '1 day',
    bestTime: 'Sunrise to sunrise'
  },
  {
    id: 'parma-ekadashi',
    name: 'Parma Ekadashi',
    description: 'Supreme Ekadashi for highest blessings',
    kitPrice: 250,
    category: 'Ekadashi (11th day)',
    image: VRAT_IMAGES.ekadashi,
    duration: '1 day',
    bestTime: 'Full day observance'
  },
  {
    id: 'pashankusha-ekadashi',
    name: 'Pashankusha Ekadashi',
    description: 'Bond-breaking Ekadashi for liberation from attachments',
    kitPrice: 250,
    category: 'Ekadashi (11th day)',
    image: VRAT_IMAGES.ekadashi,
    duration: '1 day',
    bestTime: 'Dawn to next dawn'
  },
  {
    id: 'padmini-ekadashi',
    name: 'Padmini Ekadashi',
    description: 'Lotus-like pure Ekadashi vrat',
    kitPrice: 250,
    category: 'Ekadashi (11th day)',
    image: VRAT_IMAGES.ekadashi,
    duration: '1 day',
    bestTime: 'Complete day'
  },
  {
    id: 'ashadh-vad-agiyaras',
    name: 'Ashadh Vad Agiyaras',
    description: 'Gujarati tradition Ekadashi in Ashadh month',
    kitPrice: 250,
    category: 'Ekadashi (11th day)',
    image: VRAT_IMAGES.ekadashi,
    duration: '1 day',
    bestTime: 'Traditional timings'
  },

  // Chaudash (14th day) Vrats
  {
    id: 'anant-chaudash',
    name: 'Anant Chaudash',
    description: 'Infinite blessings vrat dedicated to Lord Anant',
    kitPrice: 200,
    category: 'Chaudash (14th day)',
    image: VRAT_IMAGES.chaudash,
    duration: '1 day',
    bestTime: 'Afternoon hours'
  },
  {
    id: 'kalichaudash',
    name: 'Kalichaudash',
    description: 'Powerful vrat dedicated to Goddess Kali',
    kitPrice: 500,
    category: 'Chaudash (14th day)',
    image: VRAT_IMAGES.chaudash,
    duration: '1 day',
    bestTime: 'Night worship'
  },
  {
    id: 'varah-chaudash',
    name: 'Varah Chaudash',
    description: 'Boar incarnation vrat for protection',
    kitPrice: 250,
    category: 'Chaudash (14th day)',
    image: VRAT_IMAGES.chaudash,
    duration: '1 day',
    bestTime: 'Evening hours'
  },
  {
    id: 'bhairav-barash',
    name: 'Bhairav Barash',
    description: 'Fierce protective vrat for Bhairav',
    kitPrice: 500,
    category: 'Chaudash (14th day)',
    image: VRAT_IMAGES.chaudash,
    duration: '1 day',
    bestTime: 'Night time'
  },
  {
    id: 'pavitra-barash',
    name: 'Pavitra Barash',
    description: 'Purifying vrat for spiritual cleansing',
    kitPrice: 250,
    category: 'Chaudash (14th day)',
    image: VRAT_IMAGES.chaudash,
    duration: '1 day',
    bestTime: 'Morning hours'
  },

  // Purnima (Full Moon) Vrats
  {
    id: 'purnima-generic',
    name: 'Purnima',
    description: 'General full moon vrat for spiritual elevation',
    kitPrice: 250,
    category: 'Purnima (Full Moon)',
    image: VRAT_IMAGES.purnima,
    duration: '1 day',
    bestTime: 'Evening moonrise'
  },
  {
    id: 'purnimavrat',
    name: 'Purnimavrat',
    description: 'Traditional full moon fasting vrat',
    kitPrice: 250,
    category: 'Purnima (Full Moon)',
    image: VRAT_IMAGES.purnima,
    duration: '1 day',
    bestTime: 'Moonrise to moonset'
  },
  {
    id: 'chaitri-purnima',
    name: 'Chaitri Purnima',
    description: 'Spring full moon celebration',
    kitPrice: 250,
    category: 'Purnima (Full Moon)',
    image: VRAT_IMAGES.purnima,
    duration: '1 day',
    bestTime: 'Evening worship'
  },
  {
    id: 'gurupurnima',
    name: 'Gurupurnima',
    description: 'Reverence to spiritual teachers and gurus',
    kitPrice: 250,
    category: 'Purnima (Full Moon)',
    image: VRAT_IMAGES.purnima,
    duration: '1 day',
    bestTime: 'Evening guru worship'
  },
  {
    id: 'lakshmipurnmi-vrat',
    name: 'Lakshmipurnmi Vrat',
    description: 'Goddess Lakshmi worship on full moon',
    kitPrice: 250,
    category: 'Purnima (Full Moon)',
    image: VRAT_IMAGES.purnima,
    duration: '1 day',
    bestTime: 'Evening Lakshmi puja'
  },
  {
    id: 'brahmagauri-punam',
    name: 'Brahmagauri Punam',
    description: 'Divine feminine energy worship on full moon',
    kitPrice: 250,
    category: 'Purnima (Full Moon)',
    image: VRAT_IMAGES.purnima,
    duration: '1 day',
    bestTime: 'Moonlit evening'
  },
  {
    id: 'ekam-purnami',
    name: 'Ekam Purnami',
    description: 'Unity consciousness vrat on full moon',
    kitPrice: 250,
    category: 'Purnima (Full Moon)',
    image: VRAT_IMAGES.purnima,
    duration: '1 day',
    bestTime: 'Full moon night'
  },

  // Amavasya (New Moon) Vrats
  {
    id: 'mon-amavasya',
    name: 'Mon Amavasya',
    description: 'Silent new moon vrat for inner peace',
    kitPrice: 500,
    category: 'Amavasya (New Moon)',
    image: VRAT_IMAGES.amavasya,
    duration: '1 day',
    bestTime: 'Complete silence day'
  },
  {
    id: 'somvati-amas',
    name: 'Somvati Amas',
    description: 'Monday new moon vrat for marital bliss',
    kitPrice: 500,
    category: 'Amavasya (New Moon)',
    image: VRAT_IMAGES.amavasya,
    duration: '1 day',
    bestTime: 'Monday amavasya'
  },
  {
    id: 'diwali-amavasya',
    name: 'Diwali (falls on Amas)',
    description: 'Festival of lights celebrated on new moon',
    kitPrice: 1000,
    category: 'Amavasya (New Moon)',
    image: VRAT_IMAGES.amavasya,
    duration: '1 day',
    bestTime: 'Evening celebrations'
  },
  {
    id: 'aluna-vrat',
    name: 'Aluna Vrat (sometimes observed on Amas)',
    description: 'Special regional vrat sometimes on new moon',
    kitPrice: 500,
    category: 'Amavasya (New Moon)',
    image: VRAT_IMAGES.amavasya,
    duration: '1 day',
    bestTime: 'Dark moon hours'
  },

  // Baras (12th day) Vrats
  {
    id: 'bhairav-barash-12',
    name: 'Bhairav Barash',
    description: 'Twelfth day fierce protection vrat',
    kitPrice: 250,
    category: 'Baras (12th day)',
    image: VRAT_IMAGES.baras,
    duration: '1 day',
    bestTime: 'Evening worship'
  },
  {
    id: 'vaman-baras',
    name: 'Vaman Baras',
    description: 'Dwarf incarnation celebration vrat',
    kitPrice: 250,
    category: 'Baras (12th day)',
    image: VRAT_IMAGES.baras,
    duration: '1 day',
    bestTime: 'Morning to evening'
  },
  {
    id: 'surupa-baras',
    name: 'Surupa Baras',
    description: 'Beautiful form worship vrat',
    kitPrice: 250,
    category: 'Baras (12th day)',
    image: VRAT_IMAGES.baras,
    duration: '1 day',
    bestTime: 'Daytime hours'
  },

  // Other Vrats
  {
    id: 'sol-somvar-ni-varta',
    name: 'Sol Somvar ni Varta',
    description: 'Sixteen Monday vrat tradition',
    kitPrice: 250,
    category: 'Other Vrats',
    image: VRAT_IMAGES.special,
    duration: '16 Mondays',
    bestTime: 'Every Monday'
  },
  {
    id: 'sakariyo-somvar',
    name: 'Sakariyo Somvar',
    description: 'Sugar-offering Monday vrat',
    kitPrice: 250,
    category: 'Other Vrats',
    image: VRAT_IMAGES.special,
    duration: 'Multiple Mondays',
    bestTime: 'Monday morning'
  },
  {
    id: 'bhakhriyo-somvar',
    name: 'Bhakhriyo Somvar',
    description: 'Bread-offering Monday vrat',
    kitPrice: 250,
    category: 'Other Vrats',
    image: VRAT_IMAGES.special,
    duration: 'Multiple Mondays',
    bestTime: 'Monday worship'
  },
  {
    id: 'bhathiji-maharaj-nu-vrat',
    name: 'Bhathiji Maharaj nu Vrat',
    description: 'Regional deity worship vrat',
    kitPrice: 250,
    category: 'Other Vrats',
    image: VRAT_IMAGES.special,
    duration: '1 day',
    bestTime: 'Traditional timing'
  },
  {
    id: 'jaya-parvati-vrat-special',
    name: 'Jaya Parvati Vrat',
    description: 'Five-day vrat for Goddess Jaya Parvati',
    kitPrice: 250,
    category: 'Other Vrats',
    image: VRAT_IMAGES.special,
    duration: '5 days',
    bestTime: 'Morning worship'
  },
  {
    id: 'dhan-mas-bhagwan',
    name: 'Dhan Mas Bhagwan',
    description: 'Wealth month divine worship',
    kitPrice: 250,
    category: 'Other Vrats',
    image: VRAT_IMAGES.special,
    duration: '1 month',
    bestTime: 'Daily worship'
  },
  {
    id: 'gay-tulsi-vrat',
    name: 'Gay Tulsi Vrat',
    description: 'Cow and Tulsi combined worship vrat',
    kitPrice: 250,
    category: 'Other Vrats',
    image: VRAT_IMAGES.special,
    duration: '1 day',
    bestTime: 'Morning hours'
  },
  {
    id: 'siddheshwar-mahadev-nu-vrat',
    name: 'Siddheshwar Mahadev nu Vrat',
    description: 'Accomplished Lord Shiva worship',
    kitPrice: 250,
    category: 'Other Vrats',
    image: VRAT_IMAGES.special,
    duration: '1 day',
    bestTime: 'Night worship'
  },
  {
    id: 'sant-rambapnu-vrat',
    name: 'Sant Rambapnu Vrat',
    description: 'Saint Rambapa devotional vrat',
    kitPrice: 250,
    category: 'Other Vrats',
    image: VRAT_IMAGES.special,
    duration: '1 day',
    bestTime: 'Evening hours'
  },
  {
    id: 'pavitra-simantnu-vrat',
    name: 'Pavitra Simantnu Vrat',
    description: 'Pure boundary protection vrat',
    kitPrice: 250,
    category: 'Other Vrats',
    image: VRAT_IMAGES.special,
    duration: '1 day',
    bestTime: 'Dawn hours'
  },
  {
    id: 'pavitra-vratammas',
    name: 'Pavitra Vratammas',
    description: 'Pure vrat month observance',
    kitPrice: 250,
    category: 'Other Vrats',
    image: VRAT_IMAGES.special,
    duration: '1 month',
    bestTime: 'Daily observance'
  },
  {
    id: 'sai-vrat',
    name: 'Sai Vrat',
    description: 'Shirdi Sai Baba devotional vrat',
    kitPrice: 250,
    category: 'Other Vrats',
    image: VRAT_IMAGES.special,
    duration: '9 Thursdays',
    bestTime: 'Thursday worship'
  },
  {
    id: 'bolchoth',
    name: 'Bolchoth',
    description: 'Speech-related protective vrat',
    kitPrice: 250,
    category: 'Other Vrats',
    image: VRAT_IMAGES.special,
    duration: '1 day',
    bestTime: 'Silent hours'
  },
  {
    id: 'dariyadevnu-vrat',
    name: 'Dariyadevnu Vrat',
    description: 'Sea deity worship vrat',
    kitPrice: 250,
    category: 'Other Vrats',
    image: VRAT_IMAGES.special,
    duration: '1 day',
    bestTime: 'Coastal worship'
  },
  {
    id: 'shitala-satam',
    name: 'Shitala Satam',
    description: 'Cooling goddess worship for health',
    kitPrice: 250,
    category: 'Other Vrats',
    image: VRAT_IMAGES.special,
    duration: '7 days',
    bestTime: 'Morning hours'
  },
  {
    id: 'besatu-varsh',
    name: 'Besatu Varsh',
    description: 'Annual sitting vrat tradition',
    kitPrice: 250,
    category: 'Other Vrats',
    image: VRAT_IMAGES.special,
    duration: '1 year',
    bestTime: 'Annual observance'
  },
  {
    id: 'janamashtmi-vrat',
    name: 'Janamashtmi Vrat',
    description: 'Lord Krishna birth celebration vrat',
    kitPrice: 250,
    category: 'Other Vrats',
    image: VRAT_IMAGES.special,
    duration: '1 day',
    bestTime: 'Midnight celebration'
  },
  {
    id: 'suryanarayan-nu-vrat',
    name: 'Suryanarayan nu Vrat',
    description: 'Supreme Sun God worship (premium kit)',
    kitPrice: 2500,
    category: 'Other Vrats',
    image: VRAT_IMAGES.special,
    duration: '1 day',
    bestTime: 'Sunrise worship'
  },
  {
    id: 'mahashivratri',
    name: 'Mahashivratri',
    description: 'Great night of Lord Shiva',
    kitPrice: 250,
    category: 'Other Vrats',
    image: VRAT_IMAGES.special,
    duration: '1 night',
    bestTime: 'Night long vigil'
  },
  {
    id: 'navratri-special',
    name: 'Navratri',
    description: 'Nine nights of Goddess worship',
    kitPrice: 250,
    category: 'Other Vrats',
    image: VRAT_IMAGES.special,
    duration: '9 days',
    bestTime: 'Evening worship'
  }
];

// Static Pooja Samagri Data
export const POOJA_SAMAGRI_DATA: Record<string, PoojaItem[]> = {
  'satyanarayan-pooja': [
    createPoojaItem('coconut-nariyal', 1),
    createPoojaItem('kanku', 1),
    createPoojaItem('gulal', 1),
    createPoojaItem('abel', 1),
    createPoojaItem('sakar', 1),
    createPoojaItem('common-dry-fruits', 1),
    createPoojaItem('supari', 100),
    createPoojaItem('taj', 50),
    createPoojaItem('lavang', 25),
    createPoojaItem('elichi', 25),
    createPoojaItem('nadachadi-thread', 1),
    createPoojaItem('agarbatti', 10),
    createPoojaItem('topra-na-vatka', 1),
    createPoojaItem('ganpati-idol', 1),
    createPoojaItem('bajot', 1),
    createPoojaItem('patla', 1),
    createPoojaItem('kel-na-pan', 5),
    createPoojaItem('tulsi-na-pan', 25),
    createPoojaItem('aasopalav-na-pan', 5),
    createPoojaItem('nagarvel-na-pan', 21),
    createPoojaItem('gud', 1),
    createPoojaItem('panchamrit', 1),
    createPoojaItem('chhuta-phool', 10),
    createPoojaItem('phool-har', 2),
    createPoojaItem('kagaj-na-duna', 10),
    createPoojaItem('kacha-fal', 1),
    createPoojaItem('ghau', 1),
    createPoojaItem('chokha', 1)
  ],

  'griha-pravesh-pooja': [
    createPoojaItem('kalash-new-home', 1),
    createPoojaItem('mango-leaves', 25),
    createPoojaItem('ganga-jal', 250),
    createPoojaItem('rock-salt', 200),
    createPoojaItem('rangoli-powder', 1),
    createPoojaItem('dhoop-sticks', 12),
    createPoojaItem('swastik-stickers', 10),
    createPoojaItem('coconut-entrance', 1),
    createPoojaItem('cow-milk', 1),
    createPoojaItem('brass-lamp', 1)
  ],

  'diwali-pooja': [
    createPoojaItem('lakshmi-idol', 1),
    createPoojaItem('diyas-earthen', 21),
    createPoojaItem('mustard-oil', 1),
    createPoojaItem('lotus-flowers', 8),
    createPoojaItem('gold-coins', 5),
    createPoojaItem('rice-red', 1),
    createPoojaItem('puffed-rice', 1),
    createPoojaItem('dry-fruits', 1),
    createPoojaItem('silver-coins', 2),
    createPoojaItem('kumkum-packets', 5)
  ],

  'ganesh-chaturthi-pooja': [
    {
      id: 'ganesh-murti',
      name: 'Ganesha Murti',
      description: 'Clay idol of Lord Ganesha',
      quantity: 1,
      price: 300,
      unit: UNITS.PIECE
    },
    {
      id: 'modak-ingredients',
      name: 'Modak Making Kit',
      description: 'Rice flour, jaggery, coconut for Ganesha\'s favorite sweet',
      quantity: 1,
      price: 120,
      unit: UNITS.SET
    },
    {
      id: 'durva-grass',
      name: 'Durva Grass',
      description: 'Sacred grass beloved by Lord Ganesha',
      quantity: 21,
      price: 30,
      unit: UNITS.BUNDLE
    },
    {
      id: 'red-flowers',
      name: 'Red Flowers (Jaba)',
      description: 'Fresh red hibiscus flowers',
      quantity: 21,
      price: 105,
      unit: UNITS.PIECE
    },
    {
      id: 'laddu-ready',
      name: 'Ready Laddus',
      description: 'Sweet laddus as offering to Ganesha',
      quantity: 5,
      price: 100,
      unit: UNITS.PIECE
    },
    {
      id: 'sindoor-red',
      name: 'Bright Red Sindoor',
      description: 'Vermillion for decorating Ganesha',
      quantity: 1,
      price: 45,
      unit: UNITS.PACKET
    },
    {
      id: 'sandalwood-paste',
      name: 'Sandalwood Paste',
      description: 'Fragrant paste for tilak and decoration',
      quantity: 50,
      price: 80,
      unit: UNITS.GRAM
    },
    {
      id: 'banana-offering',
      name: 'Yellow Bananas',
      description: 'Fresh ripe bananas for offering',
      quantity: 11,
      price: 55,
      unit: UNITS.PIECE
    },
    {
      id: 'sacred-thread',
      name: 'Sacred Thread (Janeu)',
      description: 'White thread for ritual purposes',
      quantity: 1,
      price: 20,
      unit: UNITS.PIECE
    },
    {
      id: 'decorative-cloth',
      name: 'Decorative Cloth',
      description: 'Red and gold cloth for Ganesha decoration',
      quantity: 1,
      price: 150,
      unit: UNITS.PIECE
    }
  ],

  'navratri-pooja': [
    {
      id: 'durga-kalash',
      name: 'Durga Kalash Set',
      description: 'Decorated pot for invoking Goddess Durga',
      quantity: 1,
      price: 450,
      unit: UNITS.SET
    },
    {
      id: 'barley-seeds',
      name: 'Barley Seeds (Jau)',
      description: 'Seeds for growing during Navratri',
      quantity: 200,
      price: 40,
      unit: UNITS.GRAM
    },
    {
      id: 'clay-pot-small',
      name: 'Small Clay Pots',
      description: 'For growing barley and other offerings',
      quantity: 9,
      price: 90,
      unit: UNITS.PIECE
    },
    {
      id: 'coconut-nine',
      name: 'Nine Coconuts',
      description: 'One coconut for each day of Navratri',
      quantity: 9,
      price: 360,
      unit: UNITS.PIECE
    },
    {
      id: 'chunri-red',
      name: 'Red Chunri',
      description: 'Sacred red cloth for Mata Rani',
      quantity: 9,
      price: 270,
      unit: UNITS.PIECE
    },
    {
      id: 'navratri-colors',
      name: 'Nine Color Powders',
      description: 'Different colored powders for each day',
      quantity: 1,
      price: 120,
      unit: UNITS.SET
    },
    {
      id: 'prasad-ingredients',
      name: 'Navratri Prasad Kit',
      description: 'Ingredients for different day prasads',
      quantity: 1,
      price: 200,
      unit: UNITS.SET
    },
    {
      id: 'durga-photo',
      name: 'Durga Mata Photo',
      description: 'Beautiful framed photo of Goddess Durga',
      quantity: 1,
      price: 100,
      unit: UNITS.PIECE
    },
    {
      id: 'aarti-book',
      name: 'Navratri Aarti Book',
      description: 'Book containing all Navratri aartis',
      quantity: 1,
      price: 50,
      unit: UNITS.PIECE
    },
    {
      id: 'kalava-thread',
      name: 'Kalava (Red Thread)',
      description: 'Sacred red thread for protection',
      quantity: 1,
      price: 15,
      unit: UNITS.PIECE
    }
  ],

  'havan-yagna': [
    {
      id: 'havan-kund',
      name: 'Havan Kund',
      description: 'Square copper vessel for fire ceremony',
      quantity: 1,
      price: 800,
      unit: UNITS.PIECE
    },
    {
      id: 'havan-samagri',
      name: 'Havan Samagri Mix',
      description: 'Mixed herbs and materials for havan',
      quantity: 500,
      price: 150,
      unit: UNITS.GRAM
    },
    {
      id: 'mango-wood',
      name: 'Mango Wood Sticks',
      description: 'Sacred wood pieces for burning',
      quantity: 1,
      price: 80,
      unit: UNITS.BUNDLE
    },
    {
      id: 'cow-ghee-pure',
      name: 'Pure Cow Ghee',
      description: 'Clarified butter for offering to fire',
      quantity: 500,
      price: 300,
      unit: UNITS.GRAM
    },
    {
      id: 'sesame-seeds',
      name: 'White Sesame Seeds',
      description: 'Seeds for havan offerings',
      quantity: 250,
      price: 80,
      unit: UNITS.GRAM
    },
    {
      id: 'barley-havan',
      name: 'Barley for Havan',
      description: 'Clean barley grains for fire offerings',
      quantity: 250,
      price: 60,
      unit: UNITS.GRAM
    },
    {
      id: 'rice-broken',
      name: 'Broken Rice',
      description: 'Rice pieces for havan samagri',
      quantity: 200,
      price: 40,
      unit: UNITS.GRAM
    },
    {
      id: 'sandal-powder',
      name: 'Sandalwood Powder',
      description: 'Fragrant powder for havan',
      quantity: 50,
      price: 120,
      unit: UNITS.GRAM
    },
    {
      id: 'camphor-blocks',
      name: 'Camphor Blocks',
      description: 'Large camphor pieces for fire',
      quantity: 10,
      price: 60,
      unit: UNITS.PIECE
    },
    {
      id: 'cotton-cloth',
      name: 'Cotton Cloth Pieces',
      description: 'Pure cotton for fire offerings',
      quantity: 1,
      price: 50,
      unit: UNITS.PIECE
    }
  ],

  // Add more pooja types with their specific samagri...
  'ganesh-pooja': [
    {
      id: 'small-ganesh',
      name: 'Small Ganesha Idol',
      description: 'Compact clay idol for home worship',
      quantity: 1,
      price: 150,
      unit: UNITS.PIECE
    },
    {
      id: 'elephant-grass',
      name: 'Durva (Elephant Grass)',
      description: 'Sacred grass for Ganesha worship',
      quantity: 25,
      price: 25,
      unit: UNITS.BUNDLE
    },
    {
      id: 'jaggery-gud',
      name: 'Jaggery (Gud)',
      description: 'Natural sweetener for offerings',
      quantity: 250,
      price: 50,
      unit: UNITS.GRAM
    },
    {
      id: 'coconut-small',
      name: 'Small Coconut',
      description: 'Perfect sized coconut for offering',
      quantity: 1,
      price: 30,
      unit: UNITS.PIECE
    },
    {
      id: 'red-cloth',
      name: 'Red Cloth Piece',
      description: 'Sacred red fabric for covering',
      quantity: 1,
      price: 40,
      unit: UNITS.PIECE
    }
  ],

  'shiv-pooja': [
    {
      id: 'shivling',
      name: 'Shivling',
      description: 'Sacred stone representation of Lord Shiva',
      quantity: 1,
      price: 200,
      unit: UNITS.PIECE
    },
    {
      id: 'bilva-leaves',
      name: 'Bilva Leaves',
      description: 'Trifoliate leaves sacred to Lord Shiva',
      quantity: 108,
      price: 40,
      unit: UNITS.PIECE
    },
    {
      id: 'white-flowers',
      name: 'White Flowers',
      description: 'Pure white flowers for Shiva worship',
      quantity: 25,
      price: 75,
      unit: UNITS.PIECE
    },
    {
      id: 'rudraksha',
      name: 'Rudraksha Beads',
      description: 'Sacred beads for Shiva devotion',
      quantity: 1,
      price: 100,
      unit: UNITS.PACKET
    },
    {
      id: 'vibhuti',
      name: 'Vibhuti (Sacred Ash)',
      description: 'Holy ash for tilak and offerings',
      quantity: 50,
      price: 30,
      unit: UNITS.GRAM
    },
    {
      id: 'raw-milk',
      name: 'Raw Milk',
      description: 'Fresh milk for Shivling abhishek',
      quantity: 500,
      price: 35,
      unit: UNITS.MILLILITER
    },
    {
      id: 'honey-pure',
      name: 'Pure Honey',
      description: 'Natural honey for panchamrit',
      quantity: 100,
      price: 80,
      unit: UNITS.GRAM
    }
  ],
  'boys-marriage-pooja': [
    // Gujarati items
    createPoojaItem('mindhol', 1),
    createPoojaItem('chali', 1),
    createPoojaItem('manik-stambh', 1),
    createPoojaItem('pipal-na-pan', 5),
    createPoojaItem('phool-loose', 100), // assuming 100 grams
    createPoojaItem('pakka-fal', 5),
    createPoojaItem('mag', 1), // 1 kg
    createPoojaItem('sutli-thread', 1),
    createPoojaItem('sthapan-red-blouse', 1),
    createPoojaItem('clay-divda', 5),
    createPoojaItem('aluminium-thali', 1),
    createPoojaItem('vatka', 2),
    createPoojaItem('rakabi', 2),
    createPoojaItem('lamp-divo', 1),
    createPoojaItem('ghee-liquid', 250), // assuming 250 ml
    createPoojaItem('ghee-cotton', 1),
    createPoojaItem('machis', 1),
    createPoojaItem('dhana', 50), // assuming 50 grams
    createPoojaItem('coins-offering', 5)
  ],
  'girls-marriage-pooja': [
    createPoojaItem('lakshmi-idol', 1),
    createPoojaItem('diyas-earthen', 21),
    createPoojaItem('mustard-oil', 1),
    createPoojaItem('lotus-flowers', 8),
    createPoojaItem('gold-coins', 5),
    createPoojaItem('rice-red', 1),
    createPoojaItem('puffed-rice', 1),
    createPoojaItem('dry-fruits', 1),
    createPoojaItem('silver-coins', 2),
    createPoojaItem('kumkum-packets', 5)
  ],
};

export const WHATSAPP_BUSINESS_NUMBER = '9265053201'; // Replace with your actual business number
export const UPI_ID = 'uttampatel@okhdfcbank'; // Replace with your actual UPI ID