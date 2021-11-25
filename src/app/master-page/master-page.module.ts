import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header';
import { FooterComponent } from './footer';
import { NavigationbarComponent } from './navigationbar';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavigationbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    NavigationbarComponent
  ]
})
export class MasterPageModule { }
