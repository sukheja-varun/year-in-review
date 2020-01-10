import { Component, OnInit } from '@angular/core';
import { ReviewHttpService } from 'src/app/services/review-http.service';

@Component({
  selector: 'app-products-viewed',
  templateUrl: './products-viewed.component.html',
  styleUrls: ['./products-viewed.component.scss']
})
export class ProductsViewedComponent implements OnInit {

  constructor(public _reviewHttp: ReviewHttpService) { }

  ngOnInit() {
  }

}
