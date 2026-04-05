import { platformBrowser } from "@angular/platform-browser";
import { AppModule } from "./app/app-module";
import 'zone.js';

platformBrowser().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true,
})
  .catch(err => console.error(err));