import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
    selector: 'my-hero-details',
    template: `
    <div *ngIf="hero">
    <h2>{{hero.name}} details!</h2>
    <div>
        <label>id: </label>{{hero.id}}</div>
        <div>
            <label>name: </label>
            <input [(ngModel)]="hero.name" placeholder="name"/>
        </div>
    </div>
    `

})
export class HeroDetailComponent {
    title = 'Tour of Heroes';
    heroes = HEROES;
    hero: Hero;
    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    [class.selected] = 'hero === selectedHero'
}