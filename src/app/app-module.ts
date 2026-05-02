import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { App } from './app';
import { AppRoutingModule } from './app-routing-module';
import { MainLayout } from './layout/main-layout/main-layout';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { RefreshTokenInterceptor } from './core/interceptors/refresh.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './core/services/auth.reducer';

@NgModule({
  declarations: [
    App,
    MainLayout,
    Header,
    Footer
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ToastrModule.forRoot({
        positionClass: 'toast-top-right',
        timeOut: 3500,
        closeButton: true,
        progressBar: true,
        tapToDismiss: true,
      }),
    StoreModule.forRoot({ auth: authReducer }),
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideAnimations(),
    provideHttpClient(withInterceptorsFromDi()), // replaces HttpClientModule
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    {  provide: HTTP_INTERCEPTORS, useClass: RefreshTokenInterceptor, multi: true },
  ],
  bootstrap: [App]
})
export class AppModule {}