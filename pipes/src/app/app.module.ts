import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import locale from '@angular/common/locales/es';
import { AppComponent } from './app.component';
import { CapitalizedPipe } from './pipes/capitalized.pipe';

registerLocaleData(locale);

@NgModule({
  declarations: [
    AppComponent,
    CapitalizedPipe,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
