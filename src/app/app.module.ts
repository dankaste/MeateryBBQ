import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './menu/menu.component';
import { MenuItemsService } from './services/menu-items.service';
import { HomeComponent } from './home/home.component';
import { CartService } from './services/cart.service';
import {
  MatButtonModule,
  MatMenuModule,
  MatIconModule,
  MatStepperModule,
  MatListModule,
  MatGridListModule,
  MatChipsModule,
  MatSlideToggleModule,
  MatToolbarModule } from '@angular/material';
import { MenuItemListComponent } from './menu-item-list/menu-item-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    MenuItemListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatStepperModule,
    MatListModule,
    MatGridListModule,
    MatChipsModule,
    MatSlideToggleModule,
    MatToolbarModule
  ],
  providers: [MenuItemsService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
