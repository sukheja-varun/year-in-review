import { Component, OnInit } from '@angular/core';
import { ReviewHttpService } from 'src/app/services/review-http.service';

@Component({
  selector: 'app-savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.scss']
})
export class SavingsComponent implements OnInit {
  constructor(public _reviewHttp: ReviewHttpService) {}

  ngOnInit() {}
}
