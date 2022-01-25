import { NgModule,Inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BibliothequeComponent } from './bibliotheque/bibliotheque.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { HttpClientModule } from  '@angular/common/http';
import { MaterialModule } from './material.module';
@NgModule({
  declarations: [
    AppComponent,
    BibliothequeComponent,
    ConnexionComponent,
    NavComponent
  ],
  imports: [
   BrowserModule, FormsModule, AppRoutingModule, BrowserAnimationsModule,HttpClientModule,MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
