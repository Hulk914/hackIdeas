import { DataStoreService } from './data-store.service';
import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginGuardService implements CanLoad {
  constructor(private _dataS: DataStoreService) {}
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return (
      this._dataS.loggedUserIndex !== null &&
      this._dataS.loggedUserIndex !== undefined
    );
  }
}
