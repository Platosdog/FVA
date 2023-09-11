import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Calendar } from '@syncfusion/ej2-angular-calendars';

const routes: Routes = [
  {path: 'index',
  component: Component,
  children: [
    {
      path: 'calendar',
      component: Calendar,
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
