import { Component, OnInit } from '@angular/core';
import { ReviewHttpService } from 'src/app/services/review-http.service';

@Component({
  selector: 'app-glamm-circle',
  templateUrl: './glamm-circle.component.html',
  styleUrls: ['./glamm-circle.component.scss']
})
export class GlammCircleComponent implements OnInit {
  constructor(public _reviewHttp: ReviewHttpService) {}

  ngOnInit() {}
}
