import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { NavbarComponent } from "../shared/navbar/navbar.component";
import { MainCardsComponent } from "../shared/main-cards/main-cards.component";
import { FooterComponent } from "../shared/footer/footer.component";
import { projects } from '../data/projects';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  projects = projects.slice(0, 3);
  videos: any[] = [
    { url: 'assets/videos/vid3.mp4', playing: false },
    { url: 'assets/videos/cityRealty.mp4', playing: false },
    { url: 'assets/videos/vid1.mp4', playing: false },
    { url: 'assets/videos/vid2.mp4', playing: false }
  ];

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      import('aos').then(AOS => {
        AOS.default.init(); 
      });
    }
  }

  playVideo(index: number): void {
    if (isPlatformBrowser(this.platformId)) {
      const videoEl = document.getElementById('home-video-' + index) as HTMLVideoElement;
      if (videoEl) {
        videoEl.play();
      }
    }
  }

  onVideoPlay(index: number): void {
    this.videos[index].playing = true;
  }

  navigateToContact() {
    this.router.navigate(['contact']);
    if (isPlatformBrowser(this.platformId)) window.scrollTo(0, 0);
  }

  navigateToTech() {
    this.router.navigate(['tech']);
    if (isPlatformBrowser(this.platformId)) window.scrollTo(0, 0);
  }

  navigateToMarketing() {
    this.router.navigate(['marketing']);
    if (isPlatformBrowser(this.platformId)) window.scrollTo(0, 0);
  }

  navigateToAutomation() {
    this.router.navigate(['automation']);
    if (isPlatformBrowser(this.platformId)) window.scrollTo(0, 0);
  }

  navigateToTestimonials() {
    this.router.navigate(['testimonials']);
    if (isPlatformBrowser(this.platformId)) window.scrollTo(0, 0);
  }

  navigateToProjects() {
    this.router.navigate(['projects']);
    if (isPlatformBrowser(this.platformId)) window.scrollTo(0, 0);
  }
  
}
