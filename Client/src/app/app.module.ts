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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatMenuModule,
  MatIconModule,
  MatStepperModule,
  MatListModule,
  MatGridListModule,
  MatChipsModule,
  MatSlideToggleModule,
  MatToolbarModule,
  MatDialogModule,
  MatInputModule
} from '@angular/material';
import { MenuItemListComponent } from './menu-item-list/menu-item-list.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  entryComponents: [
    CheckoutComponent
  ],
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    MenuItemListComponent,
    CheckoutComponent
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
    MatToolbarModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [MenuItemsService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
