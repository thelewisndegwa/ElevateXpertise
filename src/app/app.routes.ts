import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { MarketingPageComponent } from './services/marketing-page/marketing-page.component';
import { ProjectsComponent } from './projects/projects.component';
import { ServicePageComponent } from './services/service-page/service-page.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'contact', component: ContactpageComponent },
    { path: 'testimonials', component: TestimonialsComponent },
    { path: 'tech', component: ServicePageComponent, data: { service: 'tech' } },
    { path: 'marketing', component: MarketingPageComponent },
    { path: 'automation', component: ServicePageComponent, data: { service: 'automation' } },
    { path: 'projects', component: ProjectsComponent }
];
