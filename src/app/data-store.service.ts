import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class DataStoreService {
  availableTags = ['Tech', 'Feature', 'Frontend', 'DB', 'JS', 'Framework'];
  posts = [
    {
      id: 1,
      title: 'Oldest',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      tags: ['Feature', 'Tech', 'JS'],
      likes: 15,
      createdOn: new Date('05/20/2021'),
    },
    {
      id: 2,
      title: 'Title',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      tags: ['Feature', 'Frontend', 'JS'],
      likes: 8,
      createdOn: new Date('05/21/2021'),
    },
    {
      id: 3,
      title: 'Title',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      tags: ['Feature', 'Tech', 'JS'],
      likes: 1,
      createdOn: new Date('05/22/2021'),
    },
    {
      id: 4,
      title: 'Latest',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      tags: ['Feature', 'Tech', 'JS'],
      likes: 12,
      createdOn: new Date('05/23/2021'),
    },
  ];

  // Returned by db after login
  user = {
    likedPosts: [2],
  };

  loggedUser: string = null;

  parentFormGroup: FormGroup = null;

  constructor() {}
}
