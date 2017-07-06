import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgencyComponent } from './agency/agency.component';
import { AgencylistComponent } from './agencylist/agencylist.component';
import { AgencyloginComponent } from './agencylogin/agencylogin.component';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component'
@NgModule({
  declarations: [
    AppComponent,
    AgencyComponent,
    AgencylistComponent,
    AgencyloginComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseconfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
