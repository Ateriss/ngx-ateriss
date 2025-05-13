import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'ateriss-icon',
  standalone: true,
  imports: [CommonModule],
  template: `
  <span *ngIf="iconInfo?.iconName" [class]="'ateris_full_icon ' + iconInfo?.iconClass">
  <img class="ateris_full_icon" [src]="inconOrigin" />
  </span>
  `,
  styles: `
  .ateris_full_icon{
    width: 100%;
    height: 100%;
    display: block;
    margin: 0 auto;
  }
  `
})
export class NgxAterissIconComponent implements NgxAterissIconComponentInterface {
  @Input() iconInfo: IconInterface | null = null;

   inconOrigin:string = ''; 

  constructor() {
  }

  ngOnInit() {
    if (this.iconInfo && this.iconInfo.iconName) {
      this.iconInfo.iconClass = this.iconInfo.iconClass || null;
      this.iconInfo.iconType = this.iconInfo.iconType || 'material';
  
      this.setIconOrigin(this.iconInfo.iconType);
    }
  }
  

  private setIconOrigin(iconType: IconType) {
    const baseUrl = 'https://raw.githubusercontent.com/Ateriss/GoogleFontIcons/';
    const commitHash = '9952c8195b7f8aab09c9e71ed5d4a5915d81ff8c';
    const path = 'google/outline_curve';
    switch (iconType) {
      case 'material':
        this.inconOrigin = `${baseUrl}/${commitHash}/${path}/${this.iconInfo?.iconName}.svg`;
        break;
      case 'flaticon':
        this.inconOrigin = `${baseUrl}/${commitHash}/${path}/${this.iconInfo?.iconName}.svg`;
      break;
      case 'mine':
        this.inconOrigin = `${baseUrl}/${commitHash}/${path}/${this.iconInfo?.iconName}.svg`;
      break;
      default:
        this.inconOrigin = '';
    }
  }
}

export interface NgxAterissIconComponentInterface {
  iconInfo: IconInterface | null;
}

export interface IconInterface {
  iconName: string;
  iconClass?: string | null;
  iconType: IconType;
  mode?: string;
}

export type IconType = 'material' | 'flaticon' | 'mine'
