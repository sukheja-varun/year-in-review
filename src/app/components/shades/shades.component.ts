import { Component, OnInit } from '@angular/core';
import { ReviewHttpService } from 'src/app/services/review-http.service';

@Component({
  selector: 'app-shades',
  templateUrl: './shades.component.html',
  styleUrls: ['./shades.component.scss']
})
export class ShadesComponent implements OnInit {
  constructor(public _reviewHttp: ReviewHttpService) {}

  ngOnInit() {}
}
