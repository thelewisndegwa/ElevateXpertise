import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface TestimonialVideo {
  url: string;
  poster: string;
  playing: boolean;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  videos: TestimonialVideo[] = [
    { url: 'assets/videos/vid3.mp4', poster: 'assets/videos/posters/vid3.jpg', playing: false },
    { url: 'assets/videos/cityRealty.mp4', poster: 'assets/videos/posters/cityRealty.jpg', playing: false },
    { url: 'assets/videos/vid1.mp4', poster: 'assets/videos/posters/vid1.jpg', playing: false },
    { url: 'assets/videos/vid2.mp4', poster: 'assets/videos/posters/vid2.jpg', playing: false }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  playVideo(index: number): void {
    if (isPlatformBrowser(this.platformId)) {
      const videoEl = document.getElementById('testimonial-video-' + index) as HTMLVideoElement;
      if (videoEl) {
        videoEl.play();
      }
    }
  }

  onVideoPlay(index: number): void {
    this.videos[index].playing = true;
  }
}
