import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './user.service';
import { TrainService } from './train.service';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { TicketService } from './ticket.service';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService,TrainService,TicketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
