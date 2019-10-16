import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { DemosComponent } from './demos/demos.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { PageNotFoundComponent } from './main';
import { PersonasListComponent, PersonasViewComponent, PersonasEditComponent, PersonasAddComponent } from './personas';
import { AuthGuard } from './security';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'inicio', component: HomeComponent },
  { path: 'demos', component: DemosComponent },
  { path: 'chisme/de/hacer/numeros', component: CalculadoraComponent },
  { path: 'personas', component: PersonasListComponent },
  { path: 'personas/add', component: PersonasAddComponent, canActivate: [AuthGuard] },
  { path: 'personas/:id/edit', component: PersonasEditComponent, canActivate: [AuthGuard] },
  { path: 'personas/:id', component: PersonasViewComponent },
  { path: 'personas/:id/:kk', component: PersonasViewComponent },
  { path: 'pepito/grillo', redirectTo: '/personas/2' },
  { path: 'empleados', children: [
    { path: '', component: PersonasListComponent },
    { path: 'add', component: PersonasAddComponent },
    { path: ':id/edit', component: PersonasEditComponent },
    { path: ':id', component: PersonasViewComponent },
    { path: ':id/:kk', component: PersonasViewComponent },
  ]},
  { path: 'config', loadChildren: () => import('./config').then(mod => mod.ConfigModule)},

  { path: '404.html', component: PageNotFoundComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
