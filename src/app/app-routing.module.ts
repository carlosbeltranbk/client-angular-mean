import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//componentes del proyecto
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';

const routes: Routes = [
  {path: '', component: ListarProductosComponent},
  {path: 'crear-producto', component: CrearProductoComponent},
  {path: 'editar-producto/:id', component: CrearProductoComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'} //esta se pone para validar que no se ingrese ninguna ruta mal, en caso de que ocurra, la redirecciona al inicio.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
