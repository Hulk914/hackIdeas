import { DataStoreService } from './../../../data-store.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-challenge-list',
  templateUrl: './challenge-list.component.html',
  styleUrls: ['./challenge-list.component.scss'],
})
export class ChallengeListComponent implements OnInit {
  challenges = [];

  constructor(public dataStore: DataStoreService, private fb: FormBuilder) {}

  ngOnInit(): void {
    if (!this.dataStore.parentFormGroup) {
      this.initializeForm(this.dataStore.posts);
    }
    this.challenges = this.dataStore.parentFormGroup.get('posts').value;
  }

  initializeForm(postsArr) {
    this.dataStore.parentFormGroup = this.fb.group({
      posts: this.fb.array(postsArr.map((post) => this.createPosts(post))),
    });
  }

  createPosts(post) {
    // post sort array from form is synced hence tag is nested further
    return this.fb.group({
      id: [post.id ? post.id : `id${new Date().getTime()}`],
      title: [post.title ? post.title : '', Validators.required],
      description: [
        post.description ? post.description : '',
        Validators.required,
      ],
      tags: this.fb.array(
        post.tags
          ? post.tags.map((tag) =>
              tag.tag ? this.fb.group({ tag: tag.tag }) : this.fb.group({ tag })
            )
          : ''
      ),
      likes: [post.likes ? post.likes : 0],
      createdOn: [post.createdOn ? post.createdOn : new Date()],
    });
  }

  likeHandler(id, formIndex) {
    const index = this.dataStore.user.likedPosts.findIndex(
      (post) => post === id
    );
    const formCtrl = (
      this.dataStore.parentFormGroup.get('posts') as FormArray
    ).controls[formIndex.toString()].get('likes');
    if (index === -1) {
      this.dataStore.user.likedPosts.push(id);
      formCtrl.setValue(formCtrl.value + 1);
    } else {
      this.dataStore.user.likedPosts.splice(index, 1);
      formCtrl.setValue(formCtrl.value - 1);
    }
    this.challenges = this.dataStore.parentFormGroup.get('posts').value;
  }

  isLiked(id) {
    const index = this.dataStore.user.likedPosts.findIndex(
      (post) => post === id
    );
    return index !== -1;
  }

  sortChallenges(sortBasis) {
    if (sortBasis === 'upvote') {
      this.challenges.sort((a, b) => b.likes - a.likes);
    } else {
      this.challenges.sort(
        (a, b) => b.createdOn.getTime() - a.createdOn.getTime()
      );
    }
    this.initializeForm(this.challenges);
  }
}
