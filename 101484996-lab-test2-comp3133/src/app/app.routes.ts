import { Routes } from '@angular/router';
import { Missionlist } from './components/missionlist/missionlist';
import { Missiondetails } from './components/missiondetails/missiondetails';

export const routes: Routes = [
  { path: '', component: Missionlist },
  { path: 'details/:id', component: Missiondetails }
];