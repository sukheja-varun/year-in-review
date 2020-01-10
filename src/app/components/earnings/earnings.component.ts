import { Component, OnInit } from '@angular/core';
import { ReviewHttpService } from 'src/app/services/review-http.service';

@Component({
  selector: 'app-earnings',
  templateUrl: './earnings.component.html',
  styleUrls: ['./earnings.component.scss']
})
export class EarningsComponent implements OnInit {
  constructor(public _reviewHttp: ReviewHttpService) {}

  ngOnInit() {}
}
