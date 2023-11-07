import { Genre } from './genre';
import { PlayableDevice } from './playableDevice';

export interface Game {
	_id: string;
	categoryId: number;
	gameId: number;
	gameName: string;
	gameImg: string;
	rating: string;
	cost: string;
	releaseDate: string;
	gameDecription: string;
	playableDevice: PlayableDevice[];
	Genre: Genre[];
}
