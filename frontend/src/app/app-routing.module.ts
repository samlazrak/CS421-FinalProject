import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResourcesComponent } from './pages/resources/resources.component';
import { ResourceComponent } from './core/components/resource/resource.component';
import { MainComponent} from './pages/main/main.component';
import { CreateProfileComponent } from './pages/create-profile/create-profile.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'resources/:id', component: ResourceComponent },
  {path: 'createProfile', component: CreateProfileComponent},
  {path: 'userProfile', component: UserProfileComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
export const routingComponents = [MainComponent, ResourceComponent, ResourcesComponent, CreateProfileComponent, UserProfileComponent];
