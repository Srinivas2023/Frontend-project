// totality-frontend-challenge/src/app/utils/mockData.ts

export interface Property {
    id: number;
    title: string;
    description: string;
    price: number; // Price in INR
    imageUrl: string;
}
  
export const properties: Property[] = [
    {
        id: 1,
        title: 'Beachfront Pool Villa',
        description: 'Enjoy breathtaking views from this beautiful villa with a pool.',
        price: 24600, // 300 USD to INR
        imageUrl: '/images/BeachfrontPoolVilla-10.jpg',
    },
    {
        id: 2,
        title: 'Cashmere House',
        description: 'A spacious family home with luxurious amenities.',
        price: 12300, // 150 USD to INR
        imageUrl: '/images/cashmere-house-2.jpg',
    },
    {
        id: 3,
        title: 'Modern Studio',
        description: 'A modern studio apartment with all the essentials.',
        price: 6560, // 80 USD to INR
        imageUrl: '/images/modern-sliding-glass-doors-separate-sleeping-corner.jpg',
    },
    {
        id: 4,
        title: 'Luxury Penthouse',
        description: 'Experience luxury living in this stunning penthouse.',
        price: 20500, // 250 USD to INR
        imageUrl: '/images/fe842e88624669.5ddc26b68e4a0.jpg',
    },
    {
        id: 5,
        title: 'Spacious Apartment',
        description: 'A spacious apartment perfect for families.',
        price: 8200, // 100 USD to INR
        imageUrl: '/images/21.jpg',
    },
];
