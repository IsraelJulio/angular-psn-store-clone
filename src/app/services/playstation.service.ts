import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PlaystationResponse } from '../model/playstationResponse';

@Injectable({
	providedIn: 'root',
})
export class PlaystationService {
	constructor(private http: HttpClient) {}
	private playstationApiUrl: string =
		'https://playstationapi-bfns.onrender.com/gameIdproduct';
	get = () => this.http.get<PlaystationResponse>(`${this.playstationApiUrl}`);
}
