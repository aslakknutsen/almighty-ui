import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CollapseModule } from 'ng2-bootstrap';
import { DropdownModule } from 'ng2-dropdown';

import { IterationComponent } from './iteration.component';
import { IterationService } from './iteration.service';
import { ModalModule } from 'ng2-modal';
import { TooltipModule } from 'ng2-bootstrap/components/tooltip';

@NgModule({
  imports: [
    DropdownModule,
    CollapseModule,
    CommonModule,
    ModalModule,
    TooltipModule
  ],
  declarations: [IterationComponent],
  exports: [IterationComponent],
  providers: [IterationService]
})
export class IterationModule { }