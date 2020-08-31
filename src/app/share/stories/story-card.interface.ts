export interface StoryCardInterface {
  id: string;
  date: Date;
  categories?: string[];
  imageUrl: string;
  title: string;
  summery: string;
  story: any;
}
