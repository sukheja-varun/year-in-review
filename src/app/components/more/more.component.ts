import { Component, OnInit } from '@angular/core';
import { FullPageService } from 'src/app/services/full-page.service';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.scss']
})
export class MoreComponent implements OnInit {

  constructor(private _fullPage: FullPageService) { }

  ngOnInit() {
  }
  onNext() {
    this._fullPage.nextPage();
  }
}
