import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormularioComponent} from "./pages/formulario/formulario.component"
import {ListarpacientesComponent} from "./pages/listarpacientes/listarpacientes.component"
import {LoginComponent} from "./pages/login/login.component"
import { NuevacitaComponent } from './pages/nuevacita/nuevacita.component';
import {UserpageComponent} from "./pages/userpage/userpage.component"
import {ListarcitasComponent} from "./pages/listarcitas/listarcitas.component"
import {ReprogramarcitaComponent} from "./pages/reprogramarcita/reprogramarcita.component"

const routes: Routes = [
  {path:"", component: ListarpacientesComponent},
  {path:"formulario", component:FormularioComponent},
  {path:"login", component:LoginComponent},
  {path:"userpage", component:UserpageComponent},
  {path:"nuevacita", component:NuevacitaComponent},
  {path:"listarcitas", component:ListarcitasComponent},
  {path:"reprogramarcita", component:ReprogramarcitaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
