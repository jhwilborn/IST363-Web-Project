import {useState} from 'react';
import Tabs from "./Tabs";
import Tracks from "./Tracks";

import { getTracks, getGenres, filterTracksByGenre} from '../lib/api';

const TracksByGenre = ({ items }) => {
	const [activeGenre, setActiveGenre] = useState("Rock"); //initalize 2 vars, one holds the value of the state, 2nd sets state
	const genres = getGenres();
	
	//const [stateVariable, setStateFunction] = useState(initialValue);
	
	return <div> 
		<h2> Top songs by genre</h2>
		<Tabs 
		items={genres} 
		activeItem={activeGenre} 
		clickHandler={setActiveGenre}
		/>
		<Tracks items={filterTracksByGenre(items, activeGenre)}/>
	</div>
}
export default TracksByGenre;