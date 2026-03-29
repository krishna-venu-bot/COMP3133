import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RemoveSpacesPipe } from '../remove-spaces-pipe';
import { InputFormatDirective } from '../input-format';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, FormsModule, RemoveSpacesPipe, InputFormatDirective],   
  templateUrl: './heroes.html',
  styleUrl: './heroes.css'
})
export class HeroesComponent {

  heroes = [
    { id: 1, name: 'Iron-Man' },
    { id: 2, name: 'Spider-Man' },
    { id: 3, name: 'Thor' }
  ];

  selectedHero: any;

  selectHero(hero: any) {
    this.selectedHero = hero;
  }
}