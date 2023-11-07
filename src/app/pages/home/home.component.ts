import { Component, OnInit } from '@angular/core';
import { PlaystationResponse } from 'src/app/model/playstationResponse';
import { PlaystationService } from 'src/app/services/playstation.service';
import { lastValueFrom } from 'rxjs';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
	games: PlaystationResponse | undefined;
	constructor(private playstationService: PlaystationService) {}

	async ngOnInit(): Promise<void> {
		this.games = await lastValueFrom(this.playstationService.get());
		console.log(this.games);
	}
}
