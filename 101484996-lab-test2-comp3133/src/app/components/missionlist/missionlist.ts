import { Component, signal } from '@angular/core';
import { SpacexService } from '../../services/spacex';
import { Mission } from '../../models/mission';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Missionfilter } from '../missionfilter/missionfilter';

@Component({
  selector: 'app-missionlist',
  standalone: true,
  imports: [CommonModule, Missionfilter],
  templateUrl: './missionlist.html',
  styleUrl: './missionlist.css'
})
export class Missionlist {

  missions = signal<Mission[]>([]);
  filteredMissions = signal<Mission[]>([]);

  constructor(
    private spacexService: SpacexService,
    private router: Router
  ) {
    this.loadMissions();
  }

  loadMissions() {
    this.spacexService.getMissions().subscribe((data: Mission[]) => {
      this.missions.set(data);
      this.filteredMissions.set(data);
    });
  }

  filterByYear(year: string) {
    const filtered = this.missions().filter(m =>
      new Date(m.date_utc).getFullYear().toString().includes(year)
    );
    this.filteredMissions.set(filtered);
  }

  goToDetails(mission: Mission) {
    this.router.navigate(['/details', mission.id]);
  }
}