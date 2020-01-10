import { Component, OnInit } from '@angular/core';
import { ReviewHttpService } from 'src/app/services/review-http.service';

@Component({
  selector: 'app-unique-products',
  templateUrl: './unique-products.component.html',
  styleUrls: ['./unique-products.component.scss']
})
export class UniqueProductsComponent implements OnInit {
  constructor(public _reviewHttp: ReviewHttpService) {}

  ngOnInit() {}
}
