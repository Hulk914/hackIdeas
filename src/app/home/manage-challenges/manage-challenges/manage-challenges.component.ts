import { Router } from '@angular/router';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { DataStoreService } from './../../../data-store.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-manage-challenges',
  templateUrl: './manage-challenges.component.html',
  styleUrls: ['./manage-challenges.component.scss'],
})
export class ManageChallengesComponent implements OnInit {
  parentFormGroup: FormGroup;
  availableTags: string[] = [];

  constructor(
    private dataStore: DataStoreService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.dataStore.parentFormGroup) {
      this.initializeForm();
    }
    this.parentFormGroup = this.dataStore.parentFormGroup;
    this.availableTags = this.dataStore.availableTags;
  }

  initializeForm() {
    this.dataStore.parentFormGroup = this.fb.group({
      posts: this.fb.array(
        this.dataStore.posts.map((post) => this.createPosts(post))
      ),
    });
  }

  addChallenge() {
    this.postsFormArray.insert(0, this.createPosts());
  }

  createPosts(post: any = {}) {
    return this.fb.group({
      id: [post.id ? post.id : `id${new Date().getTime()}`],
      title: [post.title ? post.title : '', Validators.required],
      description: [
        post.description ? post.description : '',
        Validators.required,
      ],
      tags: this.fb.array(
        post.tags ? post.tags.map((tag) => this.fb.group({ tag })) : []
      ),
      likes: [post.likes ? post.likes : 0],
      createdOn: [post.createdOn ? post.createdOn : new Date()],
    });
  }

  isBadgeSelected(i, badge) {
    const tagArray = (this.postsFormArray.controls[i].get('tags') as FormArray)
      .value;
    return this.findTagInPost(tagArray, badge) !== -1;
  }

  updateTagSelection(i, badge) {
    const tagFormArray = this.postsFormArray.controls[i].get(
      'tags'
    ) as FormArray;
    const badgeIndex = this.findTagInPost(tagFormArray.value, badge);
    if (badgeIndex === -1) {
      tagFormArray.push(this.fb.group({ tag: badge }));
    } else {
      tagFormArray.removeAt(badgeIndex.toString());
    }
  }

  findTagInPost(tagArray, badge) {
    return tagArray.findIndex((bdge) => bdge.tag === badge);
  }

  saveChanges() {
    if(this.postsFormArray.invalid) {
      this.postsFormArray.markAllAsTouched();
      return;
    }
    this.router.navigate(['/home/features/view']);
  }

  get postsFormArray(): FormArray {
    return this.dataStore.parentFormGroup.get('posts') as FormArray;
  }
}
