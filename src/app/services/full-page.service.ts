import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FullPageService {
  fullpage_api: any;
  private currentPageIndex: number;

  constructor() { }

  setCurrentPageIndex(pageIndex: number) {
    console.log('currentIndex', pageIndex);
    this.currentPageIndex = pageIndex;
  }

  previousPage() {
    this.fullpage_api.moveSectionUp()
  }

  nextPage() {
    this.fullpage_api.moveSectionDown()
  }

  jumpTo(pageIndex: number) {
    this.fullpage_api.moveTo('secondPage', pageIndex)
  }

}
