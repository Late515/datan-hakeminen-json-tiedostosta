import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PhonesComponent } from './phones.component';

const routes: Routes = [{ path: 'phones/:id', component: PhonesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhonesRoutingModule {}
