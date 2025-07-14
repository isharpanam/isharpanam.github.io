import type { PoojaItem } from '../types';
import { POOJA_SAMAGRI_DATA } from '../constants';

export async function fetchPoojaItems(poojaName: string): Promise<PoojaItem[]> {
  // Simulate API delay for better UX
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Find the pooja by name and return its samagri items
  const poojaKey = Object.keys(POOJA_SAMAGRI_DATA).find(key => {
    const poojaId = key.toLowerCase().replace(/[-\s]/g, '');
    const searchName = poojaName.toLowerCase().replace(/[-\s]/g, '');
    return poojaId.includes(searchName.split(' ')[0]) || searchName.includes(poojaId.split('-')[0]);
  });

  if (poojaKey && POOJA_SAMAGRI_DATA[poojaKey]) {
    return POOJA_SAMAGRI_DATA[poojaKey];
  }

  // Fallback to default items if specific pooja not found
  return [
    {
      id: 'kalash-generic',
      name: 'Kalash (Sacred Pot)',
      description: 'Brass or copper pot for holding sacred water',
      quantity: 1,
      price: 350,
      unit: 'piece'
    },
    {
      id: 'coconut-generic',
      name: 'Coconut (Nariyal)',
      description: 'Fresh coconut for offering',
      quantity: 1,
      price: 40,
      unit: 'piece'
    },
    {
      id: 'incense-generic',
      name: 'Incense Sticks',
      description: 'Fragrant incense for divine atmosphere',
      quantity: 10,
      price: 30,
      unit: 'piece'
    },
    {
      id: 'flowers-generic',
      name: 'Fresh Flowers',
      description: 'Mixed fresh flowers for decoration',
      quantity: 1,
      price: 50,
      unit: 'bundle'
    },
    {
      id: 'ghee-generic',
      name: 'Pure Ghee',
      description: 'Clarified butter for lamp and offerings',
      quantity: 250,
      price: 150,
      unit: 'gm'
    },
    {
      id: 'rice-generic',
      name: 'Rice (Chawal)',
      description: 'Unbroken rice for offerings',
      quantity: 500,
      price: 45,
      unit: 'gm'
    },
    {
      id: 'camphor-generic',
      name: 'Camphor (Kapoor)',
      description: 'Pure camphor for aarti',
      quantity: 10,
      price: 25,
      unit: 'piece'
    },
    {
      id: 'vermillion-generic',
      name: 'Vermillion (Sindoor)',
      description: 'Red powder for tilak',
      quantity: 1,
      price: 40,
      unit: 'packet'
    },
    {
      id: 'turmeric-generic',
      name: 'Turmeric (Haldi)',
      description: 'Yellow powder for rituals',
      quantity: 100,
      price: 60,
      unit: 'gm'
    },
    {
      id: 'cotton-wicks-generic',
      name: 'Cotton Wicks',
      description: 'Wicks for oil lamps',
      quantity: 20,
      price: 15,
      unit: 'piece'
    }
  ];
}