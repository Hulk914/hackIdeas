import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { DataStoreService } from './../../../data-store.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-challenges',
  templateUrl: './manage-challenges.component.html',
  styleUrls: ['./manage-challenges.component.scss'],
})
export class ManageChallengesComponent implements OnInit {
  parentFormGroup: FormGroup;

  constructor(private dataStore: DataStoreService, private fb: FormBuilder) {}

  ngOnInit(): void {
    if (!this.dataStore.parentFormGroup) {
      this.initializeForm();
    }
    this.parentFormGroup = this.dataStore.parentFormGroup;
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

  get postsFormArray(): FormArray {
    return this.dataStore.parentFormGroup.get('posts') as FormArray;
  }
}
