import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './star.component.html',
})
class StarComponent implements OnChanges {
  @Input()
  rating: number = 0;

  starWidth: number;
  ngOnChanges(): void {
    this.starWidth = (this.rating * 74) / 5;
  }
}

export { StarComponent };
