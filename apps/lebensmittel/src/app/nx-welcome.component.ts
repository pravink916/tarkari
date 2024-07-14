import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyUiLibComponent } from '@tarkari/my-ui-lib';

@Component({
  selector: 'app-nx-welcome',
  standalone: true,
  imports: [CommonModule, MyUiLibComponent],
  template: `<lib-my-ui-lib></lib-my-ui-lib>`,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {}
