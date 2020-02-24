import { Component, OnInit, Input } from '@angular/core';
import { IButtonSize } from './ButtonSize';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  constructor() { }

  @Input() size: IButtonSize = 'small';

  sizeMap = {
    small: '40px',
    medium: '120px',
    big: '200px'
  };

  ngOnInit(): void {
  }

}
