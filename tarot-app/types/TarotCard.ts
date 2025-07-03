export interface TarotCard {
    id: number;
    name: string;
    arcana: 'Major' | 'Minor';
    keywords: string[];
    description: string;
    image?: string; // optional path to image
  }
  