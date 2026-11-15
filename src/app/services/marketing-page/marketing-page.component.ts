import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-marketing-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './marketing-page.component.html',
  styleUrl: './marketing-page.component.scss'
})
export class MarketingPageComponent {}
