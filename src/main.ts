import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { TestComponent } from 'src/app/test/test.component';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
