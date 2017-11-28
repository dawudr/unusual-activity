import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';
import { NvD3Component } from 'ng2-nvd3';
import { NvD3Module } from 'ng2-nvd3';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment.prod';

import { AppComponent } from './app.component';
import { AppRoutingModule} from './app-routing.module';
import { VolumeChartComponent } from './volume-chart/volume-chart.component';
import { VolumeTableComponent } from './volume-table/volume-table.component';
import { PriceTableComponent } from './price-table/price-table.component';
import { PriceChartComponent } from './price-chart/price-chart.component';

import { StockListComponent } from './stock/stock-list/stock-list.component';
import { StockItemComponent } from './stock/stock-item/stock-item.component';
import { SuggestStocksComponent } from './stock/suggest-stocks/suggest-stocks.component';
import { StockStartComponent } from './stock/stock-start/stock-start.component';
import { StockDataService } from './stock/stock-data.service';
import { StockInfoService } from './stock/stock-info.service';
import { MessageService } from './shared/message.service';
import { DropdownDirective } from 'app/shared/dropdown.directive';

import { InputTextModule, DataTableModule, ButtonModule, DialogModule, MultiSelectModule, GrowlModule, InputSwitchModule } from 'primeng/primeng';
import { NgPipesModule } from 'ngx-pipes';
import { SubscriptionsService } from './shared/subscriptions.service';

@NgModule({
  declarations: [
    AppComponent,
    DropdownDirective,

    VolumeChartComponent,
    VolumeTableComponent,
    PriceTableComponent,
    PriceChartComponent,
    StockListComponent,
    StockItemComponent,
    SuggestStocksComponent,
    StockStartComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFontAwesomeModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
    AngularFireDatabaseModule, // imports firebase/database, for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    NvD3Module,

    NgPipesModule,

    InputTextModule,
    DataTableModule,
    ButtonModule,
    DialogModule,
    MultiSelectModule,
    GrowlModule,
    InputSwitchModule,
  ],
  providers: [StockInfoService, StockDataService, MessageService, SubscriptionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
