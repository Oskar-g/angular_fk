import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PERSONAS_COMPONENTES } from './componente.component';
import { FormsModule } from '@angular/forms';
import { MpCoreModule } from 'src/mp-core';
import { CommonAppModule } from '../common-app';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [PERSONAS_COMPONENTES],
  exports: [PERSONAS_COMPONENTES],
  imports: [
    CommonModule, FormsModule, RouterModule.forChild([]), MpCoreModule, CommonAppModule,
  ]
})
export class PersonasModule { }
