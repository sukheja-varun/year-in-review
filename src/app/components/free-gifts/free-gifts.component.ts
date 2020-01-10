import { Component, OnInit } from '@angular/core';
import { ReviewHttpService } from 'src/app/services/review-http.service';

@Component({
  selector: 'app-free-gifts',
  templateUrl: './free-gifts.component.html',
  styleUrls: ['./free-gifts.component.scss']
})
export class FreeGiftsComponent implements OnInit {
  constructor(public _reviewHttp: ReviewHttpService) {}

  ngOnInit() {}
}
