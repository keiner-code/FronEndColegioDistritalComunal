import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { NavComponent } from './components/nav/nav.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { HomeContentComponent } from './components/home-content/home-content.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { InterestComponent } from './pages/interest/interest.component';
import { InfoComponent } from './components/info/info.component';
import { InfoContentComponent } from './containers/info-content/info-content.component';
import { InstitutionComponent } from './pages/institution/institution.component';
import { InstitucionContentComponent } from './containers/institucion-content/institucion-content.component';
import { PlatformComponent } from './pages/platform/platform.component';
import { NotasComponent } from './components/notas/notas.component';
import { NotasContentComponent } from './containers/notas-content/notas-content.component';
import { TablaNotasComponent } from './components/tabla-notas/tabla-notas.component';
import { ControlNotasComponent } from './pages/control-notas/control-notas.component';
import { DocumentContentComponent } from './containers/document-content/document-content.component';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { ColegioCrudComponent } from './components/colegio-crud/colegio-crud.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TablaUserComponent } from './components/tabla-user/tabla-user.component';
import { MateriaComponent } from './components/materia/materia.component';
import { CursoComponent } from './components/curso/curso.component';
import { FormatosComponent } from './pages/formatos/formatos.component';
import { FormatContentComponent } from './containers/format-content/format-content.component';
import { TablaFormatosComponent } from './components/tabla-formatos/tabla-formatos.component';
import { DiplomaComponent } from './components/diploma/diploma.component';
import { InfoColegioComponent } from './pages/info-colegio/info-colegio.component';


@NgModule({
  declarations: [
    NavComponent,
    LayoutComponent,
    HomeComponent,
    HomeContentComponent,
    FooterComponent,
    InterestComponent,
    InfoComponent,
    InfoContentComponent,
    InstitutionComponent,
    InstitucionContentComponent,
    PlatformComponent,
    NotasComponent,
    NotasContentComponent,
    TablaNotasComponent,
    ControlNotasComponent,
    DocumentContentComponent,
    ContactComponent,
    ColegioCrudComponent,
    TablaUserComponent,
    MateriaComponent,
    CursoComponent,
    FormatosComponent,
    FormatContentComponent,
    TablaFormatosComponent,
    DiplomaComponent,
    InfoColegioComponent
  ],
  imports: [
    WebsiteRoutingModule,
    CarouselModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class WebsiteModule { }
