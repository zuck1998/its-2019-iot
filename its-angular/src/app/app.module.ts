import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ButtonComponent } from './button/button.component';
import { ProductInsertComponent } from './product-insert/product-insert.component';

@NgModule({
  declarations: [
    AppComponent,
    ListItemComponent,
    ButtonComponent,
    ProductInsertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
