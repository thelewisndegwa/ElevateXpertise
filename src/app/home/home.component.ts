import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { projects } from '../data/projects';

interface HomeOffering {
  title: string;
  description: string;
  image: string;
  alt: string;
  cta: string;
  link: string;
  external?: boolean;
  imagePosition?: string;
}

interface HomeClient {
  name: string;
  href?: string;
}

interface HomeVideo {
  url: string;
  poster: string;
  playing: boolean;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  projects = projects.slice(0, 3);

  clients: HomeClient[] = [
    { name: 'Biashara Business', href: 'https://biashara.business/' },
    { name: 'City Realty', href: 'https://play.google.com/store/apps/details?id=com.cityrealty.landlord_tenant' },
    { name: 'Elevate Profile Studio', href: 'https://elevateprofilestudio.com' },
    { name: 'AI in Action' },
    { name: 'Golden Sail', href: 'https://goldensail.de/' },
    { name: 'Topnotch Books' },
    { name: 'Murphy Auctioneers' },
    { name: 'Code Kenya', href: 'https://www.codekenya.org/' },
    { name: 'P.C.E.A Makupa Parish', href: 'https://pceamakupaparish.org' },
  ];

  offerings: HomeOffering[] = [
    {
      title: 'EX Automation',
      description: 'Chatbots, workflows, and follow-up that run without a person in the loop.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=900&q=80',
      alt: 'Two people shaking hands in front of a robot representing AI automation and collaboration',
      cta: 'Explore EX Automation',
      link: '/automation',
    },
    {
      title: 'EX Tech',
      description: 'Web apps, mobile products, and platforms built around how you work.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
      alt: 'Laptop computer with multiple screens displaying different applications',
      cta: 'Explore EX Tech',
      link: '/tech',
    },
    {
      title: 'EX Profile Studio',
      description: 'Portfolio sites and profiles that make a clear first impression.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&crop=faces&w=900&h=520&q=80',
      alt: 'Professional portrait representing a personal website and digital identity',
      cta: 'Visit EX Profile Studio',
      link: 'https://elevateprofilestudio.com',
      external: true,
      imagePosition: 'center 30%',
    },
  ];

  videos: HomeVideo[] = [
    { url: 'assets/videos/vid3.mp4', poster: 'assets/videos/posters/vid3.jpg', playing: false },
    { url: 'assets/videos/cityRealty.mp4', poster: 'assets/videos/posters/cityRealty.jpg', playing: false },
    { url: 'assets/videos/vid1.mp4', poster: 'assets/videos/posters/vid1.jpg', playing: false },
    { url: 'assets/videos/vid2.mp4', poster: 'assets/videos/posters/vid2.jpg', playing: false }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

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
}
