import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ServicePageContent, servicePages } from '../../data/service-pages';

@Component({
  selector: 'app-service-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './service-page.component.html',
})
export class ServicePageComponent {
  page?: ServicePageContent;

  constructor() {
    inject(ActivatedRoute).data.pipe(takeUntilDestroyed()).subscribe((data) => {
      this.page = servicePages[data['service']];
    });
  }
}
