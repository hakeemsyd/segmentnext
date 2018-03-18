'use strict';
import { observable } from 'mobx';
// import { Router } from '../router';
// import { Constants } from '../utils/constants';

class Post {
    id: number;
    title: string;
    body: string;
    image: string;
    url: string;

    constructor(id: number, title: string, body: string, image: string, url: string) {
      this.id = id;
      this.title = title;
      this.body = body;
      this.image = image;
      this.url = url;
    }
}

export class PostsListStore {
    @observable
    posts: Post[];

    constructor() {
      const p = [
          {
              id: 1,
              title: 'Nathan Anderson',
              body: 'Some post 1',
              image: '',
              url: 'https://unsplash.com/photos/C9t94JC4_L8'
          },
          {
              id: 2,
              title: 'Jamison McAndie',
              body: 'some post 2',
              image: '',
              url: 'https://unsplash.com/photos/waZEHLRP98s'
          },
          {
              id: 3,
              title: 'Alberto Restifo',
              body: 'some post 3',
              image: '',
              url: 'https://unsplash.com/photos/cFplR9ZGnAk'
          },
          {
              id: 4,
              title: 'John Towner',
              body: 'SOme post 4',
              image: '',
              url: 'https://unsplash.com/photos/89PFnHKg8HE'
          }
      ]
      this.posts = p;
    }


    addPost(id: string, title: string, body: string): void {
        this.posts.push({
          id: id,
          title: title,
          body: body,
          image: '',
          url: ''
        });
    }
}
