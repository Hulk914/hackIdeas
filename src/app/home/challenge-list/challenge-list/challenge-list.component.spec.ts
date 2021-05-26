import { DataStoreService } from './../../../data-store.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { ChallengeListComponent } from './challenge-list.component';

describe('ChallengeListComponent', () => {
  let component: ChallengeListComponent;
  let fixture: ComponentFixture<ChallengeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChallengeListComponent],
      providers: [FormBuilder, DataStoreService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should sort by most upvotes', () => {
    if (component.challenges.length > 1) {
      component.sortChallenges('upvote');
      const likesFirstChallenge = component.challenges[0].likes;
      const likesSecondChallenge = component.challenges[1].likes;
      expect(likesFirstChallenge).toBeGreaterThanOrEqual(likesSecondChallenge);
    }
    expect(component).toBeTruthy();
  });

  it('should sort by most recent challenges', () => {
    if (component.challenges.length > 1) {
      component.sortChallenges('date');
      const dateFirstChallenge = component.challenges[0].createdOn.getTime();
      const dateSecondChallenge = component.challenges[1].createdOn.getTime();
      expect(dateFirstChallenge).toBeGreaterThanOrEqual(dateSecondChallenge);
    }
    expect(component).toBeTruthy();
  });

  it('should update challenge votes', () => {
    const postId = component.challenges[0].id;
    const currentLikes = component.challenges[0].likes;
    const likedPosts = component.dataStore.user.likedPosts;
    let isLiked = true;
    if (likedPosts.findIndex((id) => postId === id) === -1) {
      isLiked = false;
    }
    component.likeHandler(postId, 0);
    const newLikesAdj = isLiked
      ? component.challenges[0].likes + 1
      : component.challenges[0].likes - 1;

    expect(newLikesAdj).toEqual(currentLikes);
  });
});
