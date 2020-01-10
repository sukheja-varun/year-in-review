import { Component, OnInit } from '@angular/core';
import { ReviewHttpService } from 'src/app/services/review-http.service';

@Component({
  selector: 'app-social-shares',
  templateUrl: './social-shares.component.html',
  styleUrls: ['./social-shares.component.scss']
})
export class SocialSharesComponent implements OnInit {
  constructor(public _reviewHttp: ReviewHttpService) {}

  ngOnInit() {}
}
