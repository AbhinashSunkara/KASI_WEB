import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { AppRoutingModule } from './app-routing-module';
import { MainLayout } from './layout/main-layout/main-layout';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';

@NgModule({
  declarations: [
    App,
    MainLayout,
    Header,
    Footer
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule {}