import { StoryCardInterface } from './story-card.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  storyList: StoryCardInterface[] = [
    {
      id: 1,
      date: new Date(),
      categories: [ 'fashion', 'design' ],
      summery: `Lorem ipsum dolor sit amet consectetur adipisicing elit.Odio nobis excepturi unde maxime magni.Impedit est
        ratione molestiae reiciendis tempora nostrum quae dignissimos eaque libero, vero amet explicabo incidunt! Eius?`,
      title: `Lorem ipsum dolor 1`,
      imageUrl: '../../../../assets/images/stories/1.jpg'
    },
    {
      id: 2,
      date: new Date(),
      categories: [ 'fashion', 'design' ],
      summery: `Lorem ipsum dolor sit amet consectetur adipisicing elit.Odio nobis excepturi unde maxime magni.Impedit est
        ratione molestiae reiciendis tempora nostrum quae dignissimos eaque libero, vero amet explicabo incidunt! Eius?`,
      title: `Lorem ipsum dolor 2`,
      imageUrl: '../../../../assets/images/stories/2.png'
    },
    {
      id: 3,
      date: new Date(),
      categories: [ 'fashion', 'design' ],
      summery: `Lorem ipsum dolor sit amet consectetur adipisicing elit.Odio nobis excepturi unde maxime magni.Impedit est
        ratione molestiae reiciendis tempora nostrum quae dignissimos eaque libero, vero amet explicabo incidunt! Eius?`,
      title: `Lorem ipsum dolor 3`,
      imageUrl: '../../../../assets/images/stories/3.jpg'
    },
    {
      id: 4,
      date: new Date(),
      categories: [ 'fashion', 'design' ],
      summery: `Lorem ipsum dolor sit amet consectetur adipisicing elit.Odio nobis excepturi unde maxime magni.Impedit est
        ratione molestiae reiciendis tempora nostrum quae dignissimos eaque libero, vero amet explicabo incidunt! Eius?`,
      title: `Lorem ipsum dolor 4`,
      imageUrl: '../../../../assets/images/stories/1.jpg'
    },
    {
      id: 5,
      date: new Date(),
      categories: [ 'fashion', 'design' ],
      summery: `Lorem ipsum dolor sit amet consectetur adipisicing elit.Odio nobis excepturi unde maxime magni.Impedit est
        ratione molestiae reiciendis tempora nostrum quae dignissimos eaque libero, vero amet explicabo incidunt! Eius?`,
      title: `Lorem ipsum dolor 5`,
      imageUrl: '../../../../assets/images/stories/2.png'
    },
    {
      id: 6,
      date: new Date(),
      categories: [ 'fashion', 'design' ],
      summery: `Lorem ipsum dolor sit amet consectetur adipisicing elit.Odio nobis excepturi unde maxime magni.Impedit est
        ratione molestiae reiciendis tempora nostrum quae dignissimos eaque libero, vero amet explicabo incidunt! Eius?`,
      title: `Lorem ipsum dolor 6`,
      imageUrl: '../../../../assets/images/stories/3.jpg'
    },
    {
      id: 7,
      date: new Date(),
      categories: [ 'fashion', 'design' ],
      summery: `Lorem ipsum dolor sit amet consectetur adipisicing elit.Odio nobis excepturi unde maxime magni.Impedit est
        ratione molestiae reiciendis tempora nostrum quae dignissimos eaque libero, vero amet explicabo incidunt! Eius?`,
      title: `Lorem ipsum dolor 7`,
      imageUrl: '../../../../assets/images/stories/1.jpg'
    },
    {
      id: 8,
      date: new Date(),
      categories: [ 'fashion', 'design' ],
      summery: `Lorem ipsum dolor sit amet consectetur adipisicing elit.Odio nobis excepturi unde maxime magni.Impedit est
        ratione molestiae reiciendis tempora nostrum quae dignissimos eaque libero, vero amet explicabo incidunt! Eius?`,
      title: `Lorem ipsum dolor 8`,
      imageUrl: '../../../../assets/images/stories/2.png'
    },
    {
      id: 9,
      date: new Date(),
      categories: [ 'fashion', 'design' ],
      summery: `Lorem ipsum dolor sit amet consectetur adipisicing elit.Odio nobis excepturi unde maxime magni.Impedit est
        ratione molestiae reiciendis tempora nostrum quae dignissimos eaque libero, vero amet explicabo incidunt! Eius?`,
      title: `Lorem ipsum dolor 9`,
      imageUrl: '../../../../assets/images/stories/3.jpg'
    },
    {
      id: 10,
      date: new Date(),
      categories: [ 'fashion', 'design' ],
      summery: `Lorem ipsum dolor sit amet consectetur adipisicing elit.Odio nobis excepturi unde maxime magni.Impedit est
        ratione molestiae reiciendis tempora nostrum quae dignissimos eaque libero, vero amet explicabo incidunt! Eius?`,
      title: `Lorem ipsum dolor 10`,
      imageUrl: '../../../../assets/images/stories/1.jpg'
    },
    {
      id: 11,
      date: new Date(),
      categories: [ 'fashion', 'design' ],
      summery: `Lorem ipsum dolor sit amet consectetur adipisicing elit.Odio nobis excepturi unde maxime magni.Impedit est
        ratione molestiae reiciendis tempora nostrum quae dignissimos eaque libero, vero amet explicabo incidunt! Eius?`,
      title: `Lorem ipsum dolor 11`,
      imageUrl: '../../../../assets/images/stories/2.png'
    },
    {
      id: 12,
      date: new Date(),
      categories: [ 'fashion', 'design' ],
      summery: `Lorem ipsum dolor sit amet consectetur adipisicing elit.Odio nobis excepturi unde maxime magni.Impedit est
        ratione molestiae reiciendis tempora nostrum quae dignissimos eaque libero, vero amet explicabo incidunt! Eius?`,
      title: `Lorem ipsum dolor 12`,
      imageUrl: '../../../../assets/images/stories/3.jpg'
    }
  ];

  constructor() {}

  getStories(): StoryCardInterface[] {
    return this.storyList.slice();
  }

  getStory(index: number): StoryCardInterface {
    return this.getStories()[index];
  }
}
