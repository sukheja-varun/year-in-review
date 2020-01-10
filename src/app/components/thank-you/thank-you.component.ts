import { Component, OnInit } from '@angular/core';
import { FullPageService } from 'src/app/services/full-page.service';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent implements OnInit {

  constructor(private _fullPage: FullPageService) { }

  ngOnInit() {
  }

  onPrev() {
    this._fullPage.previousPage();
  }

}
