import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpacexService } from '../../services/spacex';
import { Mission } from '../../models/mission';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-missiondetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './missiondetails.html',
  styleUrl: './missiondetails.css'
})
export class Missiondetails {

  mission: Mission | null = null;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private spacexService: SpacexService
  ) {}

  ngOnInit() {
  const id = this.route.snapshot.paramMap.get('id');

  console.log('Fetching mission ID:', id);

  if (id) {
    this.spacexService.getMissionById(id).subscribe({
      next: (data: Mission) => {
        console.log('MISSION DATA:', data);
        this.mission = data;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    });
  }
}
}