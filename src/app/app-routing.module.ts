import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from 'src/app/main/main.component';
import { IncludeComponent } from 'src/app/include/include.component';
import { DeleteComponent } from 'src/app/delete/delete.component';

const routes: Routes = [
  { path: "", component: MainComponent },
  { path: "include/:id", component: IncludeComponent },
  { path: "delete", component: DeleteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
