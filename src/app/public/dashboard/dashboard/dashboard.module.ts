import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {SharedModule} from '../../../shared/shared.module';
import {PublicModule} from '../../public.module';



@NgModule({
  declarations: [
    DashboardComponent,
  ],
    imports: [
        CommonModule,
        SharedModule,
        PublicModule
    ]
})
export class DashboardModule { }
