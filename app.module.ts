import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HighlightDirective } from './directives/highlight.directiv';
import { StudentService } from './services/student.service';
import { HomeComponent } from './home.component';
import { AboutUsComponent } from './about-us.component';
import { WelcomeComponent } from './welcome.component';
import { GalleryComponent } from './gallery.component';
import { GymServiceComponent } from './gymservise.component';
import { ContactUsComponent } from './contactus.component';
import { NotFoundComponent } from './notfound.component';


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'welcome', pathMatch: "full" },
      { path: 'welcome', component: WelcomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'gymservice/:id', component: GymServiceComponent },
      { path: 'galleryPage', component: GalleryComponent },
      { path: 'aboutus', component: AboutUsComponent },
      { path: 'contactus', component: ContactUsComponent },
     // { path: '**', component: NotFoundComponent }
      // {path : 'gymservice/:id',component : GymServiceComponent}
    ])],
  declarations: [AppComponent, HighlightDirective, WelcomeComponent, GalleryComponent,
    HomeComponent, AboutUsComponent, GymServiceComponent, ContactUsComponent,NotFoundComponent],
  providers: [StudentService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
