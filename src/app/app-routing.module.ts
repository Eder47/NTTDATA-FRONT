import { BuscarComponent } from './components/buscar/buscar.component';
import { MostrarComponent } from './components/mostrar/mostrar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    component: BuscarComponent,
  },
  {
    path: 'buscar',
    component: BuscarComponent,
  },
  {
    path: 'datos-cliente',
    component: MostrarComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
