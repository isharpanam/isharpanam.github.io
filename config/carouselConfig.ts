export interface CarouselItem {
  id: string;
  image: string;
  title: string;
  description: string;
  price: number;
  redirectTo: string;
  poojaInfo: {
    name: string;
    nameGujarati: string;
    sections: Array<{
      title: string;
      titleGujarati: string;
      items: Array<{
        itemGujarati: string;
        itemEnglish: string;
      }>;
    }>;
  };
}

export const CAROUSEL_ITEMS: CarouselItem[] = [
  {
    id: 'ganapati-pooja-1',
    image: 'images/pojaa1.jpeg',
    title: 'Eco-Friendly Pooja Kit',
    description: 'Complete Ganpati worship kit with all traditional items for home and corporate offices',
    price: 1499,
    redirectTo: '/ganapati-kit',
    poojaInfo: {
      name: 'Ganapati Pooja Saman List',
      nameGujarati: '🪔 ગણપતિ પૂજા સામાન સૂચિ',
      sections: [
        {
          title: 'For Aasan & Idol',
          titleGujarati: '1️⃣ આસન અને મૂર્તિ માટે',
          items: [
            {
              itemGujarati: 'ગણપતિની માટીની મૂર્તિ',
              itemEnglish: 'Ganapati Clay Idol'
            },
            {
              itemGujarati: 'લાલ કપડું આસન માટે',
              itemEnglish: 'Red Cloth for Aasan'
            }
          ]
        },
        {
          title: 'Essential Pooja Items',
          titleGujarati: '2️⃣ પૂજા માટેની આવશ્યક વસ્તુઓ',
          items: [
            {
              itemGujarati: 'કંકુ',
              itemEnglish: 'Kanku'
            },
            {
              itemGujarati: 'ચોખા',
              itemEnglish: 'Rice'
            },
            {
              itemGujarati: 'અબિલ',
              itemEnglish: 'Abil'
            },
            {
              itemGujarati: 'ગુલાલ',
              itemEnglish: 'Gulal'
            },
            {
              itemGujarati: 'સિંદૂર',
              itemEnglish: 'Sindoor'
            },
            {
              itemGujarati: 'નાડાછડીનો દોરો',
              itemEnglish: 'Nadachhadi Thread'
            },
            {
              itemGujarati: 'જનોઈ',
              itemEnglish: 'Sacred Thread (Janoi)'
            },
            {
              itemGujarati: 'દુર્વા',
              itemEnglish: 'Durva Grass'
            }
          ]
        },
        {
          title: 'For Naivedyam & Bhog',
          titleGujarati: '3️⃣ નૈવેદ્ય અને ભોગ માટે',
          items: [
            {
              itemGujarati: 'ગોળ ભોગ માટે',
              itemEnglish: 'Jaggery for Bhog'
            },
            {
              itemGujarati: 'મિક્સ સુકા મેવા',
              itemEnglish: 'Mix Dry Fruits'
            },
            {
              itemGujarati: 'સુપારી',
              itemEnglish: 'Betel Nut'
            },
            {
              itemGujarati: 'તજ-લવિંગ-એલચી',
              itemEnglish: 'Cinnamon, Clove & Cardamom'
            }
          ]
        },
        {
          title: 'For Fragrance & Ambience',
          titleGujarati: '4️⃣ સુગંધ અને વાતાવરણ માટે',
          items: [
            {
              itemGujarati: 'અત્તરની બોટલ',
              itemEnglish: 'Scent Bottle'
            },
            {
              itemGujarati: 'ધૂપ',
              itemEnglish: 'Dhoop'
            }
          ]
        },
        {
          title: 'For Lighting the Lamp',
          titleGujarati: '5️⃣ દીવો પ્રજ્વલિત કરવા માટે',
          items: [
            {
              itemGujarati: 'માટીનો દીવો',
              itemEnglish: 'Clay Lamp (Mati no Divo)'
            },
            {
              itemGujarati: 'વાટ',
              itemEnglish: 'Vat (Cotton Wick)'
            },
            {
              itemGujarati: 'કપૂર',
              itemEnglish: 'Camphor'
            },
            {
              itemGujarati: 'ઘી',
              itemEnglish: 'Ghee'
            },
            {
              itemGujarati: 'માચિસનું બોક્સ',
              itemEnglish: 'Matchbox'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'ganapati-pooja-2',
    image: 'images/pojaa2.jpeg',
    title: 'Eco-Friendly Pooja Kit',
    description: 'Complete Ganpati worship kit with all traditional items for home and corporate offices',
    price: 1499,
    redirectTo: '/ganapati-kit',
    poojaInfo: {
      name: 'Ganapati Pooja Saman List',
      nameGujarati: '🪔 ગણપતિ પૂજા સામાન સૂચિ',
      sections: [] // Same as above, can reference the first one
    }
  },
  {
    id: 'ganapati-pooja-3',
    image: 'images/pojaa3.jpeg',
    title: 'Eco-Friendly Pooja Kit',
    description: 'Complete Ganpati worship kit with all traditional items for home and corporate offices',
    price: 1499,
    redirectTo: '/ganapati-kit',
    poojaInfo: {
      name: 'Ganapati Pooja Saman List',
      nameGujarati: '🪔 ગણપતિ પૂજા સામાન સૂચિ',
      sections: [] // Same as above, can reference the first one
    }
  },
  {
    id: 'ganapati-pooja-4',
    image: 'images/pojaa4.jpeg',
    title: 'Eco-Friendly Pooja Kit',
    description: 'Complete Ganpati worship kit with all traditional items for home and corporate offices',
    price: 1499,
    redirectTo: '/ganapati-kit',
    poojaInfo: {
      name: 'Ganapati Pooja Saman List',
      nameGujarati: '🪔 ગણપતિ પૂજા સામાન સૂચિ',
      sections: [] // Same as above, can reference the first one
    }
  }
];