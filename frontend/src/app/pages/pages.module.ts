import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MainComponent,
    CreateProfileComponent
  ]
})
export class PagesModule { }
