import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReviewHttpService } from 'src/app/services/review-http.service';
import { FullPageService } from 'src/app/services/full-page.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  title = 'year-in-review';
  config: any;
  fullpage_api: any;

  constructor(
    private _activatedRoute: ActivatedRoute,
    public _reviewHttp: ReviewHttpService,
    private _fullPage: FullPageService
  ) {
    // console.log(_activatedRoute.snapshot.params.id);

    // for more details on config options please visit fullPage.js docs
    this.config = {
      // fullpage options
      licenseKey: 'YOUR LICENSE KEY HERE',
      anchors: [
        'getStarted',
        'firstPage',
        'secondPage',
        'thirdPage',
        'fourthPage',
        'fifthPage',
        'sixthPage',
        'seventhPage',
        'eighthPage',
        'ninthPage',
        'lastPage'
      ],
      menu: '#menu',

      // fullpage callbacks
      afterResize: () => {
        console.log('After resize');
      },
      afterLoad: (origin, destination, direction) => {
        // console.log('origin ===> ', origin, destination, direction);

        this._fullPage.setCurrentPageIndex(destination.index);
      }
    };
  }

  ngOnInit() {
    this.getUserData();
  }

  getUserData() {
    this._reviewHttp.getUserData(this._activatedRoute.snapshot.params.id);
  }

  setRef(fullPageRef) {
    this._fullPage.fullpage_api = fullPageRef;
  }
}
