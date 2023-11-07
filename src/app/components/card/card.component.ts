import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
	@Input()
	gameCover: string = '';
	@Input()
	gameLabel: string = '';
	@Input()
	gameType: string = 'XPTO | PS4';
	@Input()
	gamePrice: string | null = '';
	@Input()
	device: string | null = '';

	constructor() {}

	ngOnInit(): void {
		this.gamePrice = (parseFloat(this.gamePrice!) / 10).toString();
	}
}
