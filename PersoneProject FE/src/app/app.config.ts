import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Lara from '@primeng/themes/lara';


import { routes } from './app.routes';
import { provideHttpClient, withInterceptors} from '@angular/common/http';
import {provideAuth, LogLevel, authInterceptor} from 'angular-auth-oidc-client';


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor()])),
    provideAnimationsAsync(),
    provideAuth({
      config: {
        authority: 'http://localhost:9090/realms/customer',
        redirectUrl: window.location.origin,
        postLogoutRedirectUri: window.location.origin,
        clientId: 'frontend',
        scope: 'email profile openid roles',
        responseType: 'code',
        silentRenew: true,
        useRefreshToken: true,
        logLevel: LogLevel.Debug,
        secureRoutes: ['http://localhost:8080'],
      },
    }),
    providePrimeNG({
        theme: {
            preset: Lara,
            options: {
            cssLayer: {
                name: 'primeng',
                order: 'theme, base, primeng'
            }
        }
        }
    })]
};
