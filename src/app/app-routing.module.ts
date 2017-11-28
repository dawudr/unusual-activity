import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {VolumeChartComponent} from './volume-chart/volume-chart.component';
import {VolumeTableComponent} from './volume-table/volume-table.component';
import {PriceChartComponent} from './price-chart/price-chart.component';
import {PriceTableComponent} from './price-table/price-table.component';

import { StockListComponent } from './stock/stock-list/stock-list.component';
import { StockItemComponent } from './stock/stock-item/stock-item.component';
import { SuggestStocksComponent } from './stock/suggest-stocks/suggest-stocks.component';
import { StockStartComponent } from './stock/stock-start/stock-start.component';
import { VolumePageComponent } from './volume/volume-page/volume-page.component';

const routes: Routes = [
  {path: ' ', redirectTo: '/', pathMatch: 'full'},
  {path: 'volume-page', component: VolumePageComponent},
  {path: 'volume-chart', component: VolumeChartComponent},
  {path: 'volume-table', component: VolumeTableComponent},
  {path: 'price-chart', component: PriceChartComponent},
  {path: 'price-table', component: PriceTableComponent},
  {path: 'stock', component: StockListComponent, children: [
          { path: '', component: StockStartComponent },
          { path: ':symbol', component: StockItemComponent }
      ]
  },
  { path: 'suggest', component: SuggestStocksComponent },
  { path: '**', redirectTo: '/stock' }  // 404 redirect to /'stock'
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
