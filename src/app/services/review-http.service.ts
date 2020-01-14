import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { usersReview } from '../data/db';
@Injectable({
  providedIn: 'root'
})
export class ReviewHttpService {
  userData: any;

  constructor(private _http: HttpClient) {}

  async getUserData(id: string) {
    // this.userData = await this._http
    //   .get('http://552809bf.ngrok.io/usersReview/' + id)
    //   .toPromise();
    this.userData = usersReview[id];

    console.log('user data ===> ', this.userData);
  }
}
