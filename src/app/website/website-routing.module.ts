import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { InterestComponent } from './pages/interest/interest.component';
import { InstitutionComponent } from './pages/institution/institution.component';
import { PlatformComponent } from './pages/platform/platform.component';
import { ControlNotasComponent } from './pages/control-notas/control-notas.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FormatosComponent } from './pages/formatos/formatos.component';
import { InfoColegioComponent } from './pages/info-colegio/info-colegio.component';

const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [
    {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    },
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'interes',
      component: InterestComponent
    },
    {
      path: 'institucion',
      component: InstitutionComponent
    },
    {
      path: 'plataforma',
      component: PlatformComponent
    },
    {
      path: 'control notas',
      component: ControlNotasComponent
    },
    {
      path: 'boletines',
      component: ContactComponent
    },
    {
      path: 'formatos',
      component: FormatosComponent
    },
    {
      path: 'info',
      component: InfoColegioComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
