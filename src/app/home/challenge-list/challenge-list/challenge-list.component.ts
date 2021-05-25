import { DataStoreService } from './../../../data-store.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-challenge-list',
  templateUrl: './challenge-list.component.html',
  styleUrls: ['./challenge-list.component.scss'],
})
export class ChallengeListComponent implements OnInit {
  challenges = [];

  constructor(private dataStore: DataStoreService, private fb: FormBuilder) {}

  ngOnInit(): void {
    if (!this.dataStore.parentFormGroup) {
      this.initializeForm();
    }
    this.challenges = this.dataStore.parentFormGroup.get('posts').value;
  }

  initializeForm() {
    this.dataStore.parentFormGroup = this.fb.group({
      posts: this.fb.array(
        this.dataStore.posts.map((post) => this.createPosts(post))
      ),
    });
  }

  createPosts(post) {
    return this.fb.group({
      id: [post.id ? post.id : ''],
      title: [post.title ? post.title : ''],
      description: [post.description ? post.description : ''],
      tags: this.fb.array(
        post.tags ? post.tags.map((tag) => this.fb.group({ tag })) : ''
      ),
    });
  }

  likeHandler(index) {
    console.log(index);
  }
}
