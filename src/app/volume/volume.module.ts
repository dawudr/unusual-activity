import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VolumePageComponent } from './volume-page/volume-page.component';

import { NvD3Component } from 'ng2-nvd3';
import { NvD3Module } from 'ng2-nvd3';
import { VolumeChartComponent} from '../volume-chart/volume-chart.component';
import { StockListComponent } from '../stock/stock-list/stock-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [VolumePageComponent]
})
export class VolumeModule { }
