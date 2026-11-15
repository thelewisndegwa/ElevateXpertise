import { afterNextRender, Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'elevate-expertise';

  constructor() {
    const router = inject(Router);
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      let aos: { init: () => void; refreshHard: () => void } | undefined;

      import('aos').then((module) => {
        aos = module.default;
        aos.init();
      });

      router.events
        .pipe(
          filter((event): event is NavigationEnd => event instanceof NavigationEnd),
          takeUntilDestroyed(destroyRef)
        )
        .subscribe(() => {
          setTimeout(() => aos?.refreshHard(), 50);
        });
    });
  }
}
