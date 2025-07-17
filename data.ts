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
  METER: 'meter',
  QS: 'qs' // Quantity sufficient
};


export const POOJA_ITEMS_MASTER = {
'coconut-watered': {
    id: 'coconut-watered',
    name: 'Coconut Watered - પાણીવાળું નાળિયેર (Pani valu Naliyer)',
    description: 'Fresh coconut with water for offerings',
    price: 30,
    unit: UNITS.PIECE
  },
  'coconut-without-water': {
    id: 'coconut-without-water',
    name: 'Coconut without water - કોરું નાળિયેર (Koru Naliyer)',
    description: 'Dry coconut without water for specific rituals',
    price: 30,
    unit: UNITS.PIECE
  },
  'kanku': {
    id: 'kanku',
    name: 'Kanku - કંકુ (Kanku)',
    description: 'Vermillion powder for tilak',
    price: 1,
    unit: UNITS.GRAM
  },
  'gulal': {
    id: 'gulal',
    name: 'Gulal - ગુલાલ (Gulal)',
    description: 'Colored powder for festivities',
    price: 1,
    unit: UNITS.GRAM
  },
  'abel': {
    id: 'abel',
    name: 'Abel - અબીલ (Abil)',
    description: 'Fragrant powder for worship',
    price: 1,
    unit: UNITS.GRAM
  },
  'sakar': {
    id: 'sakar',
    name: 'Sakar - સાકર (Sakar)',
    description: 'Sugar for offerings and prasad',
    price: 150,
    unit: UNITS.GRAM
  },
  'drax': {
    id: 'drax',
    name: 'Drax',
    description: 'Grapes for offerings',
    price: 8,
    unit: UNITS.GRAM
  },
  'common-dry-fruits': {
    id: 'common-dry-fruits',
    name: 'Common dry fruits - સુકા મેવા (Suka Meva)',
    description: 'Mixed dry fruits for offerings',
    price: 1000,
    unit: UNITS.GRAM
  },
  'supari': {
    id: 'supari',
    name: 'Supari - સોપારી (Sopari)',
    description: 'Betel nuts for offerings',
    price: 800,
    unit: UNITS.KILOGRAM
  },
  'taj': {
    id: 'taj',
    name: 'Taj - તજ (Taj)',
    description: 'Cinnamon for offerings',
    price: 0.8,
    unit: UNITS.GRAM
  },
  'lavang': {
    id: 'lavang',
    name: 'Lavang - લવિંગ (Laving)',
    description: 'Cloves for offerings',
    price: 0.9,
    unit: UNITS.GRAM
  },
  'elichi': {
    id: 'elichi',
    name: 'Elichi - એલચી (Elachi)',
    description: 'Cardamom for offerings',
    price: 3.5,
    unit: UNITS.GRAM
  },
  'nadachadi-thread': {
    id: 'nadachadi-thread',
    name: 'Nadachadi thread - નાડાછડી (Nadachhadi)',
    description: 'Sacred thread for rituals',
    price: 20,
    unit: UNITS.PIECE
  },
  'agarbatti': {
    id: 'agarbatti',
    name: 'Agarbatti - અગરબત્તી (Agarbatti)',
    description: 'Incense sticks for worship',
    price: 40,
    unit: UNITS.PIECE
  },
  'topra-na-vatka': {
    id: 'topra-na-vatka',
    name: 'Topra na vatka - કોપરાના વાટકા (Kopra na Vatka)',
    description: 'Coconut pieces for offerings',
    price: 20,
    unit: UNITS.PIECE
  },
  'ganpati-idol': {
    id: 'ganpati-idol',
    name: 'Ganpati Idol - ગણપતિની મૂર્તિ (Ganpati ni Murti)',
    description: 'Clay idol of Lord Ganesha',
    price: 250,
    unit: UNITS.PIECE
  },
  'bajot': {
    id: 'bajot',
    name: 'Bajot - બાજોટ (Bajot)',
    description: 'Wooden platform for worship',
    price: 1000,
    unit: UNITS.PIECE
  },
  'patla': {
    id: 'patla',
    name: 'Patla - પાટલો (Patlo)',
    description: 'Wooden board for offerings',
    price: 1000,
    unit: UNITS.PIECE
  },
  'kel-na-pan': {
    id: 'kel-na-pan',
    name: 'Kel na pan - કેળના પાન (Kel na Pan)',
    description: 'Banana leaves for serving',
    price: 30,
    unit: UNITS.PIECE
  },
  'tulsi-na-pan': {
    id: 'tulsi-na-pan',
    name: 'Tulsi na pan - તુલસીના પાન (Tulsi na Pan)',
    description: 'Holy basil leaves for worship',
    price: 0.1,
    unit: UNITS.PIECE
  },
  'aasopalav-na-pan': {
    id: 'aasopalav-na-pan',
    name: 'Aasopalav na Pan - આસોપાલવના પાન (Aasopalav na Pan)',
    description: 'Aasopalav leaves for rituals',
    price: 0.5,
    unit: UNITS.PIECE
  },
  'nagarvel-na-pan': {
    id: 'nagarvel-na-pan',
    name: 'Nagarvel na pan - નાગરવેલના પાન (Nagarvel na Pan)',
    description: 'Betel leaves for offerings',
    price: 2,
    unit: UNITS.PIECE
  },
  'gud': {
    id: 'gud',
    name: 'Gud - ગોળ (Gol)',
    description: 'Jaggery for offerings',
    price: 70,
    unit: UNITS.KILOGRAM
  },
  'panchamrit': {
    id: 'panchamrit',
    name: 'Panchamrit - પંચામૃત (Panchamrit)',
    description: 'Sacred mixture of five ingredients',
    price: 2,
    unit: UNITS.MILLILITER
  },
  'chhuta-phool': {
    id: 'chhuta-phool',
    name: 'Chhuta Phool - છૂટા ફૂલ (Chhuta Phool)',
    description: 'Loose flowers for worship',
    price: 200,
    unit: UNITS.KILOGRAM
  },
  'phool-har': {
    id: 'phool-har',
    name: 'Phool Har - ફૂલ હાર (Phool Har)',
    description: 'Flower garland for decoration',
    price: 40,
    unit: UNITS.PIECE
  },
  'kagaj-na-duna': {
    id: 'kagaj-na-duna',
    name: 'Kagaj na Duna - કાગળના દુના (Kagaj na Duna)',
    description: 'Paper cups for offerings',
    price: 0.5,
    unit: UNITS.PIECE
  },
  'ghau': {
    id: 'ghau',
    name: 'Ghau - ઘઉં (Ghau)',
    description: 'Wheat for offerings',
    price: 200,
    unit: UNITS.KILOGRAM
  },
  'chokha': {
    id: 'chokha',
    name: 'Chokha - ચોખા (Chokha)',
    description: 'Rice for offerings',
    price: 200,
    unit: UNITS.KILOGRAM
  },
  'mindhol': {
    id: 'mindhol',
    name: 'Mindhol - મીંઢોળ (Mindhol)',
    description: 'Special ingredient for marriage rituals',
    price: 20,
    unit: UNITS.KILOGRAM
  },
  'chali': {
    id: 'chali',
    name: 'Chali - છાલી (Chhali)',
    description: 'Rice husks for rituals',
    price: 10,
    unit: UNITS.KILOGRAM
  },
  'manik-stambh': {
    id: 'manik-stambh',
    name: 'Manik Stambh - માણેક સ્તંભ (Manek Stambh)',
    description: 'Precious pillar for ceremonies',
    price: 200,
    unit: UNITS.PIECE
  },
  'pipal-na-pan': {
    id: 'pipal-na-pan',
    name: 'Pipal na pan - પીપળના પાન (Pipal na Pan)',
    description: 'Pipal leaves for worship',
    price: 0.2,
    unit: UNITS.PIECE
  },
  'pakka-fal': {
    id: 'pakka-fal',
    name: 'Pakka fal - પાકા ફળ (Pakka Fal)',
    description: 'Ripe fruits for offerings',
    price: 150,
    unit: UNITS.KILOGRAM
  },
  'mag': {
    id: 'mag',
    name: 'Mag - મગ (Mag)',
    description: 'Mung beans for offerings',
    price: 150,
    unit: UNITS.KILOGRAM
  },
  'sutli-thread': {
    id: 'sutli-thread',
    name: 'Sutli thread for toran - સૂતળી (Sutli)',
    description: 'Thread for decorative garlands',
    price: 20,
    unit: UNITS.METER
  },
  'clay-divda': {
    id: 'clay-divda',
    name: 'Small clay Divda / Kodiya',
    description: 'Small clay lamps for lighting',
    price: 10,
    unit: UNITS.PIECE
  },
  'aluminium-thali': {
    id: 'aluminium-thali',
    name: 'Utensil aluminium thali - એલ્યુમિનિયમ થાળી (Aluminium Thali)',
    description: 'Aluminium plate for worship',
    price: 100,
    unit: UNITS.PIECE
  },
  'vatka': {
    id: 'vatka',
    name: 'Vatka - વાટકા (Vatka)',
    description: 'Small bowl for offerings',
    price: 50,
    unit: UNITS.PIECE
  },
  'rakabi': {
    id: 'rakabi',
    name: 'Rakabi - રકાબી (Rakabi)',
    description: 'Plate for offerings',
    price: 50,
    unit: UNITS.PIECE
  },
  'lamp-divo': {
    id: 'lamp-divo',
    name: 'Lamp - દીવો (Divo)',
    description: 'Oil lamp for lighting',
    price: 150,
    unit: UNITS.PIECE
  },
  'ghee-liquid': {
    id: 'ghee-liquid',
    name: 'Ghee - ઘી (Ghee)',
    description: 'Clarified butter for lamps and offerings',
    price: 1,
    unit: UNITS.MILLILITER
  },
  'ghee-cotton': {
    id: 'ghee-cotton',
    name: 'Ghee cotton - વાટ (Vaat)',
    description: 'Cotton wicks for oil lamps',
    price: 20,
    unit: UNITS.PIECE
  },
  'machis': {
    id: 'machis',
    name: 'Machis - માચીસ (Machis)',
    description: 'Matchbox for lighting',
    price: 5,
    unit: UNITS.PIECE
  },
  'dhana': {
    id: 'dhana',
    name: 'Dhana - ધાણા (Dhana)',
    description: 'Coriander seeds for offerings',
    price: 600,
    unit: UNITS.KILOGRAM
  },
  'guggul': {
    id: 'guggul',
    name: 'Guggul - ગુગળ (Gugal)',
    description: 'Sacred resin for havan',
    price: 800,
    unit: UNITS.GRAM
  },
  'cow-mud': {
    id: 'cow-mud',
    name: 'Cow mud - ગાયનું છાણ (Gay nu Chhan)',
    description: 'Cow dung for purification',
    price: 20,
    unit: UNITS.KILOGRAM
  },
  'sthapan-clothing-other': {
    id: 'sthapan-clothing-other',
    name: 'Sthapan clothing other colour - સ્થાપન વસ્ત્રો (Sthapan Vastron)',
    description: 'Cloth for deity installation',
    price: 50,
    unit: UNITS.PIECE
  },
  'sthapan-clothing-red': {
    id: 'sthapan-clothing-red',
    name: 'Sthapan clothing Red - સ્થાપન વસ્ત્રો લાલ (Sthapan Vastron Laal)',
    description: 'Red cloth for deity installation',
    price: 50,
    unit: UNITS.PIECE
  },
  'sthapan-clothing-black': {
    id: 'sthapan-clothing-black',
    name: 'Sthapan clothing Black - સ્થાપન વસ્ત્રો કાળો (Sthapan Vastron Kalo)',
    description: 'Black cloth for deity installation',
    price: 50,
    unit: UNITS.PIECE
  },
  'sthapan-clothing-green': {
    id: 'sthapan-clothing-green',
    name: 'Sthapan clothing Green - સ્થાપન વસ્ત્રો લીલો (Sthapan Vastron Lilo)',
    description: 'Green cloth for deity installation',
    price: 50,
    unit: UNITS.PIECE
  },
  'sthapan-clothing-yellow': {
    id: 'sthapan-clothing-yellow',
    name: 'Sthapan clothing Yellow - સ્થાપન વસ્ત્રો પીળો (Sthapan Vastron Pilo)',
    description: 'Yellow cloth for deity installation',
    price: 50,
    unit: UNITS.PIECE
  },
  'sthapan-clothing-white': {
    id: 'sthapan-clothing-white',
    name: 'Sthapan clothing White - સ્થાપન વસ્ત્રો સફેદ (Sthapan Vastron Safed)',
    description: 'White cloth for deity installation',
    price: 50,
    unit: UNITS.PIECE
  },
  'udad': {
    id: 'udad',
    name: 'Udad - અડદ (Adad)',
    description: 'Black gram for offerings',
    price: 200,
    unit: UNITS.KILOGRAM
  },
  'chanadal': {
    id: 'chanadal',
    name: 'Chanadal - ચણાની દાળ (Chana ni Dal)',
    description: 'Split chickpeas for offerings',
    price: 150,
    unit: UNITS.KILOGRAM
  },
  'juvar': {
    id: 'juvar',
    name: 'Juvar - જુવાર (Juvar)',
    description: 'Sorghum for offerings',
    price: 120,
    unit: UNITS.KILOGRAM
  },
  'chandan-powder': {
    id: 'chandan-powder',
    name: 'Chandan powder - ચંદન પાવડર (Chandan Powder)',
    description: 'Sandalwood powder for tilak',
    price: 150,
    unit: UNITS.GRAM
  },
  'pittal-utensils-other': {
    id: 'pittal-utensils-other',
    name: 'Pittal utensils other - પિત્તળના વાસણો (Pittala na Vasano)',
    description: 'Brass utensils for worship',
    price: 1000,
    unit: UNITS.PIECE
  },
  'pittal-utensils-dish': {
    id: 'pittal-utensils-dish',
    name: 'Pittal utensils Dish - પિત્તળના વાસણો ડીશ (Dish)',
    description: 'Brass dish for offerings',
    price: 1000,
    unit: UNITS.PIECE
  },
  'pittal-utensils-lota': {
    id: 'pittal-utensils-lota',
    name: 'Pittal utensils Lota - પિત્તળના વાસણો લોટો (Loto)',
    description: 'Brass water pot',
    price: 700,
    unit: UNITS.PIECE
  },
  'pittal-utensils-glass': {
    id: 'pittal-utensils-glass',
    name: 'Pittal utensils Glass - પિત્તળના વાસણો ગ્લાસ (Glass)',
    description: 'Brass glass for offerings',
    price: 500,
    unit: UNITS.PIECE
  },
  'pittal-utensils-dabbo': {
    id: 'pittal-utensils-dabbo',
    name: 'Pittal utensils Dabbo - પિત્તળના વાસણો ડબ્બો (Dabbo)',
    description: 'Brass container for storage',
    price: 1000,
    unit: UNITS.PIECE
  },
  'tramba-kumbh': {
    id: 'tramba-kumbh',
    name: 'Tramba kumbh - તાંબાનો કુંભ (Tamba no Kumbh)',
    description: 'Copper pot for rituals',
    price: 1000,
    unit: UNITS.PIECE
  },
  'clay-kumbh': {
    id: 'clay-kumbh',
    name: 'Clay kumbh - માટીનો કુંભ (Mati no Kumbh)',
    description: 'Clay pot for rituals',
    price: 250,
    unit: UNITS.PIECE
  },
  'dhoti': {
    id: 'dhoti',
    name: 'Dhoti - ધોતી (Dhoti)',
    description: 'Traditional male garment',
    price: 400,
    unit: UNITS.PIECE
  },
  'jabbha-nu-kapad': {
    id: 'jabbha-nu-kapad',
    name: 'Jabbha nu kapad - ઝભ્ભાનું કાપડ (Jabbha nu Kapad)',
    description: 'Cloth for religious robe',
    price: 500,
    unit: UNITS.PIECE
  },
  'sari': {
    id: 'sari',
    name: 'Sari - સાડી (Sari)',
    description: 'Traditional female garment',
    price: 1000,
    unit: UNITS.PIECE
  },
  'chanio': {
    id: 'chanio',
    name: 'Chanio - ચાણિયો (Chanio)',
    description: 'Traditional head covering',
    price: 250,
    unit: UNITS.PIECE
  },
  'blouse-piece': {
    id: 'blouse-piece',
    name: 'Blouse piece - બ્લાઉઝ પીસ (Blouse Piece)',
    description: 'Cloth for blouse',
    price: 250,
    unit: UNITS.PIECE
  },
  'godadu': {
    id: 'godadu',
    name: 'Godadu - ગોદડું (Godadu)',
    description: 'Blanket for rituals',
    price: 2500,
    unit: UNITS.PIECE
  },
  'oshiku': {
    id: 'oshiku',
    name: 'Oshiku - ઓશીકું (Oshiku)',
    description: 'Pillow for rituals',
    price: 500,
    unit: UNITS.PIECE
  },
  'ochhad': {
    id: 'ochhad',
    name: 'Ochhad - ઓઢાડ (Ochhad)',
    description: 'Covering cloth',
    price: 250,
    unit: UNITS.PIECE
  },
  'chatri': {
    id: 'chatri',
    name: 'Chatri - છત્રી (Chatri)',
    description: 'Umbrella for deity',
    price: 200,
    unit: UNITS.PIECE
  },
  'chappal': {
    id: 'chappal',
    name: 'Chappal - ચપ્પલ (Chappal)',
    description: 'Footwear for deity',
    price: 250,
    unit: UNITS.PIECE
  },
  'vas-ni-chhabdi': {
    id: 'vas-ni-chhabdi',
    name: 'Vas ni chhabdi - વાંસની છાબડી (Vas ni Chhabdi)',
    description: 'Bamboo basket',
    price: 100,
    unit: UNITS.PIECE
  },
  'chandla-packet': {
    id: 'chandla-packet',
    name: 'Chandla packet - ચાંદલાનું પેકેટ (Chandla nu Packet)',
    description: 'Sandalwood packet',
    price: 20,
    unit: UNITS.PIECE
  },
  'bangdi': {
    id: 'bangdi',
    name: 'Bangdi - બંગડી (Bangdi)',
    description: 'Bangles for deity',
    price: 50,
    unit: UNITS.PIECE
  },
  'ariso': {
    id: 'ariso',
    name: 'Ariso - અરીસો (Ariso)',
    description: 'Mirror for deity',
    price: 50,
    unit: UNITS.PIECE
  },
  'comb': {
    id: 'comb',
    name: 'Comb - કાંસકો (Kansko)',
    description: 'Comb for deity',
    price: 20,
    unit: UNITS.PIECE
  },
  'oil-bottle': {
    id: 'oil-bottle',
    name: 'Oil bottle - તેલની બોટલ (Tel ni Bottle)',
    description: 'Oil bottle for rituals',
    price: 40,
    unit: UNITS.PIECE
  },
  'kajal': {
    id: 'kajal',
    name: 'Kajal - કાજળ (Kajal)',
    description: 'Kohl for deity',
    price: 20,
    unit: UNITS.PIECE
  },
  'sent': {
    id: 'sent',
    name: 'Sent - સેન્ટ (Sent)',
    description: 'Perfume for deity',
    price: 50,
    unit: UNITS.PIECE
  },
  'kang': {
    id: 'kang',
    name: 'Kang - કાંગ (Kang)',
    description: 'Comb for deity',
    price: 200,
    unit: UNITS.PIECE
  },
  'til': {
    id: 'til',
    name: 'Til - તલ (Tal)',
    description: 'Sesame seeds for offerings',
    price: 400,
    unit: UNITS.KILOGRAM
  },
  'jaar': {
    id: 'jaar',
    name: 'Jaar - જાર (Jar)',
    description: 'Jar for storing offerings',
    price: 150,
    unit: UNITS.KILOGRAM
  },
  'moti': {
    id: 'moti',
    name: 'Moti - મોતી (Moti)',
    description: 'Pearls for decoration',
    price: 500,
    unit: UNITS.KILOGRAM
  },
  'sutar-thread-ni-dadi': {
    id: 'sutar-thread-ni-dadi',
    name: 'Sutar thread ni dadi - સૂતરની દડી (Sutar ni Dadi)',
    description: 'Cotton thread ball',
    price: 10,
    unit: UNITS.PIECE
  },
  'kali-drax': {
    id: 'kali-drax',
    name: 'Kali drax - કાળી દ્રાક્ષ (Kali Drax)',
    description: 'Black grapes for offerings',
    price: 600,
    unit: UNITS.KILOGRAM
  },
  'darbh-leaves': {
    id: 'darbh-leaves',
    name: 'Darbh leaves - દર્ભ (Darbh)',
    description: 'Sacred grass for rituals',
    price: 10,
    unit: UNITS.GRAM
  },
  'jav': {
    id: 'jav',
    name: 'Jav - જવ (Jav)',
    description: 'Barley for offerings',
    price: 150,
    unit: UNITS.KILOGRAM
  },
  'kamod': {
    id: 'kamod',
    name: 'Kamod - કામોદ (Kamod)',
    description: 'Wheat flour for offerings',
    price: 200,
    unit: UNITS.KILOGRAM
  },
  'black-til': {
    id: 'black-til',
    name: 'Black til - કાળા તલ (Kala Tal)',
    description: 'Black sesame seeds for offerings',
    price: 200,
    unit: UNITS.KILOGRAM
  },
  'jav-flour': {
    id: 'jav-flour',
    name: 'Jav flour - જવનો લોટ (Jav no Lot)',
    description: 'Barley flour for offerings',
    price: 400,
    unit: UNITS.KILOGRAM
  },
  'udad-flour': {
    id: 'udad-flour',
    name: 'Udad flour - અડદનો લોટ (Adad no Lot)',
    description: 'Black gram flour for offerings',
    price: 200,
    unit: UNITS.KILOGRAM
  },
  'kala-til-powder': {
    id: 'kala-til-powder',
    name: 'Kala til powder - કાળા તલનો પાવડર (Kala Tal no Powder)',
    description: 'Black sesame powder',
    price: 400,
    unit: UNITS.KILOGRAM
  },
  'black-clay-matki': {
    id: 'black-clay-matki',
    name: 'Black clay matki - કાળી માટીની માટલી (Kali Mati ni Matli)',
    description: 'Black clay pot for rituals',
    price: 200,
    unit: UNITS.PIECE
  },
  'vas-ni-sundli': {
    id: 'vas-ni-sundli',
    name: 'Vas ni sundli - વાંસની સુડલી (Vas ni Sudli)',
    description: 'Bamboo stick for rituals',
    price: 100,
    unit: UNITS.PIECE
  },
  'wood-for-yagna': {
    id: 'wood-for-yagna',
    name: 'Wood for yagna - યજ્ઞ માટે લાકડું (Yagna mate Lakdu)',
    description: 'Sacred wood for fire rituals',
    price: 200,
    unit: UNITS.KILOGRAM
  },
  'janoi': {
    id: 'janoi',
    name: 'Janoi - જનોઈ (Janoi)',
    description: 'Sacred thread for rituals',
    price: 20,
    unit: UNITS.PIECE
  },
  'pako-siddho': {
    id: 'pako-siddho',
    name: 'Pako Siddho - પાકો સિદ્ધો (Pako Siddho)',
    description: 'Cooked offering for deity',
    price: 500,
    unit: UNITS.PIECE
  },
  'towel': {
    id: 'towel',
    name: 'Towel - ટુવાલ (Tuval)',
    description: 'Towel for deity',
    price: 100,
    unit: UNITS.PIECE
  },
  'napkin': {
    id: 'napkin',
    name: 'Napkin - નેપકિન (Napkin)',
    description: 'Napkin for rituals',
    price: 50,
    unit: UNITS.PIECE
  },
  'male-shirt-pant-kapad': {
    id: 'male-shirt-pant-kapad',
    name: 'Male Shirt and Pant Kapad - પુરુષ માટે શર્ટ અને પેન્ટનું કાપડ (Purush mate Shirt ane Pant nu Kapad)',
    description: 'Cloth for male garments',
    price: 1000,
    unit: UNITS.PIECE
  },
  'water': {
    id: 'water',
    name: 'Water - પાણી (Pani)',
    description: 'Sacred water for rituals',
    price: 20,
    unit: UNITS.LITER
  },
  'silver-turtle': {
    id: 'silver-turtle',
    name: 'Silver turtle - ચાંદીનો કાચબો (Chandi no Kachbo)',
    description: 'Silver turtle for rituals',
    price: 200,
    unit: UNITS.PIECE
  },
  'silver-snake': {
    id: 'silver-snake',
    name: 'Silver snake - ચાંદીનો સાપ (Chandi no Saap)',
    description: 'Silver snake for rituals',
    price: 200,
    unit: UNITS.PIECE
  },
  'tambani-tabudi': {
    id: 'tambani-tabudi',
    name: 'Tambani Tabudi - તાંબાની તબુડી (Tambani Tabudi)',
    description: 'Copper vessel for rituals',
    price: 200,
    unit: UNITS.PIECE
  },
  'char-chock-ni-mati': {
    id: 'char-chock-ni-mati',
    name: 'Char chock ni mati - ચાર ચોકની માટી (Char Chok ni Mati)',
    description: 'Clay from four corners',
    price: 100,
    unit: UNITS.KILOGRAM
  },
  'aasan': {
    id: 'aasan',
    name: 'Aasan - આસન (Aasan)',
    description: 'Seat for deity',
    price: 250,
    unit: UNITS.PIECE
  },
  'chamachi': {
    id: 'chamachi',
    name: 'Chamachi - ચમચી (Chamachi)',
    description: 'Spoon for offerings',
    price: 50,
    unit: UNITS.PIECE
  },
  'kalash-tramba': {
    id: 'kalash-tramba',
    name: 'Kalash tramba - કળશ તાંબા (Kalash Tamba)',
    description: 'Copper sacred pot',
    price: 500,
    unit: UNITS.PIECE
  },
  'chundi': {
    id: 'chundi',
    name: 'Chundi - ચૂંદડી (Chundi)',
    description: 'Sacred vessel for rituals',
    price: 100,
    unit: UNITS.PIECE
  },
  'rumal': {
    id: 'rumal',
    name: 'Rumal - રૂમાલ (Rumal)',
    description: 'Handkerchief for deity',
    price: 20,
    unit: UNITS.PIECE
  },
  'face-powder': {
    id: 'face-powder',
    name: 'Face powder - ફેસ પાવડર (Face Powder)',
    description: 'Face powder for deity',
    price: 50,
    unit: UNITS.PIECE
  },
  'nail-polish': {
    id: 'nail-polish',
    name: 'Nail polish - નિલ પોલિશ (Nail Polish)',
    description: 'Nail polish for deity',
    price: 50,
    unit: UNITS.PIECE
  },
  'kapoor': {
    id: 'kapoor',
    name: 'Kapoor - કપૂર (Kapoor)',
    description: 'Camphor for aarti',
    price: 50,
    unit: UNITS.PIECE
  },
  'kamalkakdi': {
    id: 'kamalkakdi',
    name: 'Kamalkakdi - કમલ કાકડી (Kamal Kakdi)',
    description: 'Lotus stem for offerings',
    price: 200,
    unit: UNITS.KILOGRAM
  },
  'ral-no-dhup': {
    id: 'ral-no-dhup',
    name: 'Ral no dhup - રાલનો ધૂપ (Ral no Dhup)',
    description: 'Resin incense for worship',
    price: 50,
    unit: UNITS.QS
  },
  'dry-coconut-powder': {
    id: 'dry-coconut-powder',
    name: 'Dry coconut powder - કોપરાનો પાવડર (Kopra no Powder)',
    description: 'Dried coconut powder',
    price: 50,
    unit: UNITS.QS
  },
  'sugandhi-valo': {
    id: 'sugandhi-valo',
    name: 'Sugandhi valo - સુગંધી વાળો (Sugandhi Valo)',
    description: 'Fragrant material for worship',
    price: 50,
    unit: UNITS.QS
  },
  'tamal-patra': {
    id: 'tamal-patra',
    name: 'Tamal patra - તમાલપત્ર (Tamal Patra)',
    description: 'Tamal leaves for worship',
    price: 50,
    unit: UNITS.QS
  },
  'dabhdo-grass': {
    id: 'dabhdo-grass',
    name: 'Dabhdo grass - દર્ભ ઘાસ (Darbh Ghas)',
    description: 'Sacred grass for rituals',
    price: 50,
    unit: UNITS.QS
  },
  'cow-urine': {
    id: 'cow-urine',
    name: 'Cow urine - ગૌમૂત્ર (Gomutra)',
    description: 'Cow urine for purification',
    price: 20,
    unit: UNITS.QS
  },
  'chana': {
    id: 'chana',
    name: 'Chana - ચણા (Chana)',
    description: 'Chickpeas for offerings',
    price: 200,
    unit: UNITS.KILOGRAM
  },
  'savliyu': {
    id: 'savliyu',
    name: 'Savliyu - સાવળિયું (Savaliyu)',
    description: 'Sacred offering for deity',
    price: 250,
    unit: UNITS.KILOGRAM
  },
  'trambano-trass': {
    id: 'trambano-trass',
    name: 'Trambano trass - તાંબાનો ત્રાંસ (Tamba no Tras)',
    description: 'Copper vessel for rituals',
    price: 1000,
    unit: UNITS.PIECE
  },
  'kanthi-mala': {
    id: 'kanthi-mala',
    name: 'Kanthi/Mala - કંઠી/માળા (Kanthi/Mala)',
    description: 'Sacred necklace for deity',
    price: 50,
    unit: UNITS.PIECE
  },
  'gaumukhi': {
    id: 'gaumukhi',
    name: 'Gaumukhi - ગૌમુખી (Gaumukhi)',
    description: 'Cow-shaped vessel for rituals',
    price: 25,
    unit: UNITS.PIECE
  },
  'dhramraja-silver-image': {
    id: 'dhramraja-silver-image',
    name: 'Dhramraja silver image - ધર્મરાજની ચાંદીની છબી (Dharmaraj ni Chandi ni Chhabi)',
    description: 'Silver image of Dharmaraj',
    price: 100,
    unit: UNITS.PIECE
  },
  'cow-silver-image': {
    id: 'cow-silver-image',
    name: 'Cow silver image - ગાયની ચાંદીની છબી (Gay ni Chandi ni Chhabi)',
    description: 'Silver image of cow',
    price: 100,
    unit: UNITS.PIECE
  },
  'swastik-silver': {
    id: 'swastik-silver',
    name: 'Swastik silver - ચાંદીનો સ્વસ્તિક (Chandi no Swastik)',
    description: 'Silver swastik symbol',
    price: 100,
    unit: UNITS.PIECE
  },
  'nisarani-silver': {
    id: 'nisarani-silver',
    name: 'Nisarani silver - ચાંદીની નિસરણી (Chandi ni Nisarani)',
    description: 'Silver nisarani for rituals',
    price: 100,
    unit: UNITS.PIECE
  },
  'ship-silver': {
    id: 'ship-silver',
    name: 'Ship silver - ચાંદીનો જહાજ (Chandi no Nav)',
    description: 'Silver ship for rituals',
    price: 100,
    unit: UNITS.PIECE
  },
  'janoi-silver': {
    id: 'janoi-silver',
    name: 'Janoi silver - ચાંદીની જનોઈ (Chandi ni Janoi)',
    description: 'Silver sacred thread',
    price: 100,
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

  'kacha-fal': {
    id: 'kacha-fal',
    name: 'Kacha Fal - કાચા ફળ (Kacha Fal)',
    description: 'Raw fruits for offerings',
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
  'coins-offering': {
    id: 'coins-offering',
    name: 'Coins for Offering - સિક્કા (Sikka)',
    description: 'Coins for monetary offerings',
    price: 1,
    unit: UNITS.PIECE
  },

  'male-shirt-pant': {
    id: 'male-shirt-pant',
    name: 'Male Shirt and Pant - પુરુષ માટે શર્ટ અને પેન્ટનું કાપડ (Purush mate Shirt ane Pant nu Kapad)',
    description: 'Cloth for male shirt and pant',
    price: 1000,
    unit: UNITS.PIECE
  },
  'water-pani': {
    id: 'water-pani',
    name: 'Water - પાણી (Pani)',
    description: 'Water for rituals',
    price: 20,
    unit: UNITS.LITER
  },
  'char-chok-ni-mati': {
    id: 'char-chok-ni-mati',
    name: 'Char Chok ni Mati - ચાર ચોકની માટી (Char Chok ni Mati)',
    description: 'Clay from four directions for rituals',
    price: 100,
    unit: UNITS.KILOGRAM
  },
  'silver-coin': {
    id: 'silver-coin',
    name: 'Silver Coin - ચાંદી (Chandi)',
    description: 'Silver coin for offerings',
    price: 500,
    unit: UNITS.PIECE
  },
  'kapoor-camphor': {
    id: 'kapoor-camphor',
    name: 'Kapoor - કપૂર (Kapoor)',
    description: 'Camphor for aarti',
    price: 50,
    unit: UNITS.PIECE
  },
  'dhramraja-silver-foil': {
    id: 'dhramraja-silver-foil',
    name: 'Dhramraja Silver Image Foil - ધર્મરાજની ચાંદીની છબી (Dharmaraj ni Chandi ni Chhabi)',
    description: 'Silver foil image of Dharmraj',
    price: 100,
    unit: UNITS.PIECE
  },
  'cow-silver-foil': {
    id: 'cow-silver-foil',
    name: 'Cow Silver Image Foil - ગાયની ચાંદીની છબી (Gay ni Chandi ni Chhabi)',
    description: 'Silver foil image of cow',
    price: 100,
    unit: UNITS.PIECE
  }
};