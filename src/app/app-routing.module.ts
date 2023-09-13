import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Calendar } from '@syncfusion/ej2-angular-calendars';
import { TestComponent } from 'src/app/test/test.component';

const routes: Routes = [
  {path: 'index',
  component: Component,
  children: [
    {
      path: 'test',
      component: TestComponent,
    },
    {

    }

  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
