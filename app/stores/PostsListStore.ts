'use strict';
import { observable } from 'mobx';
import { Router } from '../router';
import { Constants } from '../utils/constants';


export class PostsListStore {
    @observable
    posts: [];

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
