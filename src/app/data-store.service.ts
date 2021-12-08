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
      title: 'Reversal algorithm for array rotation',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      tags: ['Feature', 'Tech', 'JS'],
      likes: 15,
      createdOn: new Date('05/20/2021'),
    },
    {
      id: 2,
      title: 'Create a Tic Tac Toe Game',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      tags: ['Frontend', 'JS'],
      likes: 8,
      createdOn: new Date('05/21/2021'),
    },
    {
      id: 3,
      title: 'Split the array and add the first part to the end',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      tags: ['Feature', 'Tech', 'JS', 'Frontend'],
      likes: 1,
      createdOn: new Date('05/22/2021'),
    },
    {
      id: 4,
      title: 'Create an Image Gallery',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      tags: ['Feature', 'Tech', 'JS'],
      likes: 12,
      createdOn: new Date('05/23/2021'),
    },
  ];

  // Returned by db after login
  users = [
    {
      userName: 'u1',
      userId: 'u1',
      likedPosts: [3],
      posts: [
        {
          id: 3,
          title: 'Split the array and add the first part to the end',
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          tags: ['Feature', 'Tech', 'JS', 'Frontend'],
          likes: 1,
          createdOn: new Date('05/22/2021'),
        },
        {
          id: 4,
          title: 'Create an Image Gallery',
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          tags: ['Feature', 'Tech', 'JS'],
          likes: 12,
          createdOn: new Date('05/23/2021'),
        },
      ],
    },
    {
      userName: 'u2',
      userId: 'u2',
      likedPosts: [1],
      posts: [
        {
          id: 1,
          title: 'Reversal algorithm for array rotation',
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          tags: ['Feature', 'Tech', 'JS'],
          likes: 15,
          createdOn: new Date('05/20/2021'),
        },
        {
          id: 2,
          title: 'Create a Tic Tac Toe Game',
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          tags: ['Frontend', 'JS'],
          likes: 8,
          createdOn: new Date('05/21/2021'),
        },
      ],
    },
    {
      userName: 'u3',
      userId: 'u3',
      likedPosts: [2],
      posts: [
        {
          id: 1,
          title: 'Reversal algorithm for array rotation',
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          tags: ['Feature', 'Tech', 'JS'],
          likes: 15,
          createdOn: new Date('05/20/2021'),
        },
        {
          id: 3,
          title: 'Split the array and add the first part to the end',
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          tags: ['Feature', 'Tech', 'JS', 'Frontend'],
          likes: 1,
          createdOn: new Date('05/22/2021'),
        },
        {
          id: 4,
          title: 'Create an Image Gallery',
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          tags: ['Feature', 'Tech', 'JS'],
          likes: 12,
          createdOn: new Date('05/23/2021'),
        },
      ],
    },
  ];

  loginUser(id) {
    const loggedUserInd = this.users.findIndex((user) => user.userId === id);
    if (loggedUserInd !== -1) {
      this.loggedUserIndex = loggedUserInd;
      return true;
    }
    return false;
  }

  loggedUserIndex = null;

  parentFormGroup: FormGroup = null;

  constructor() {}
}
