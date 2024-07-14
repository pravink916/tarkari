import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MyUiLibComponent } from '@tarkari/my-ui-lib';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, MyUiLibComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'lebensmittel';
}
