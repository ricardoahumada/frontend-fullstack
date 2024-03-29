import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { ListaProductosComponent } from './productos/lista-productos.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ListaProductosComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
