import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyAeRIGOeYSXuvlp-rw6jt4Q0XReh2Fut6o',
  authDomain: 'chatapp-dc29d.firebaseapp.com',
  databaseURL: 'https://chatapp-dc29d.firebaseio.com',
  storageBucket: 'chatapp-dc29d.appspot.com',
  messagingSenderId: '184044674679'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
