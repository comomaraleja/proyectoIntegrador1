import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoapComponent } from './components/logoap/logoap.component';

import { BannerComponent } from './components/banner/banner.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { HttpClientModule} from '@angular/common/http';

//Circle progress//

import { NgCircleProgressModule } from 'ng-circle-progress';
import { HsskillsComponent } from './components/hsskills/hsskills.component';



import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoapComponent,
   
    BannerComponent,
    AboutComponent,
    ExperienciaComponent,
    EducacionComponent,
    HsskillsComponent,
    
    ProjectsComponent,
         FooterComponent,
         HomeComponent,
         LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

    //especificacion de modulo httpClient//
    
    HttpClientModule,
    //import circle progress//
    NgCircleProgressModule.forRoot({})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
