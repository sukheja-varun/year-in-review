import { Component, OnInit } from '@angular/core';
import { ReviewHttpService } from 'src/app/services/review-http.service';
import { FullPageService } from 'src/app/services/full-page.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  hover: boolean = false;

  constructor(public _reviewHttp: ReviewHttpService,
    private _fullPage: FullPageService) { }

  ngOnInit() { }

  onNext() {
    this._fullPage.nextPage();
  }
}
