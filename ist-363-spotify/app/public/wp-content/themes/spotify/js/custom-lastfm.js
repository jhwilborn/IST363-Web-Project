console.log("custom-lastfm.js loaded");
// Create a cache object
var cache = new LastFMCache();

// Create a LastFM object
var lastfm = new LastFM({
	apiKey: "5100a074a21d804094ecb53f144e82c7",
	apiSecret: "023a0c6ed2252843d282eaa514545104",
	cache: cache,
});
const player = document.getElementById("player");

//Function to display tracks from clicked genre to console, add to HTML
function displayTracks(data) {
	console.log(data);
	const { track } = data.tracks; //destructuring, goes from data.tracks.track to const {track}
	trackList.replaceChildren(); //Clears children between clicks to remove generated html

	for (let i = 0; i < track.length; i++) {
		// console.log(track[i].name);
		//Creates LI element within the constant trackItem
		const trackItem = document.createElement("li");
		//Adds the class track-item to each <li> in trackItem
		trackItem.classList.add("track-item");

		//Creates h3 element within constant trackName
		const trackName = document.createElement("h3");
		//Fills content of the h3 with the track name at track[i]
		trackName.innerText = track[i].name;
		//Append the created <h3> to the <li>
		trackItem.appendChild(trackName);

		//Creates h4 element within constant trackArtist
		const trackArtist = document.createElement("h4");
		//Fills content of h4 with the artist name at track[i]
		trackArtist.innerText = track[i].artist.name;
		//Append the created <h4> to the <li>, after <h3>
		trackItem.appendChild(trackArtist);

		trackItem.addEventListener("click", function(){
			player.classList.add("active");

		});
		//Add completed track item to the trackList array
		trackList.appendChild(trackItem);
	}
}

const tags = ["rock", "country", "rap"];
console.log(tags);

const tagList = document.getElementById("tagList");

//Initialize trackList variable from html element with the id trackList
const trackList = document.getElementById("trackList");

//let i = 0; i < x.length; i++
for (let i = 0; i < tags.length; i++) {
	console.log(tags[i]);
	const tagItem = document.createElement("li");
	tagItem.classList.add("tag-item");

	const tagIcon = document.createElement("img");
	tagIcon.setAttribute(
		"src",
		`/wp-content/themes/spotify/images/genres/${tags[i]}.svg`
	); //first arg is attribute, second arg is value but made from a template literal in this case (dynamic value). Takes contents from tags[i] and pre/appends file path and .svg
	tagItem.appendChild(tagIcon);

	const tagLabel = document.createElement("span");
	tagLabel.innerText = tags[i];
	tagItem.appendChild(tagLabel);

	//event listener
	//event name, function
	tagItem.addEventListener("click", function () {
		const tagItems = document.getElementsByClassName("tag-item");
		
		//loop through all items without regard for the particular index value
		for (let li of tagItems){
			li.classList.remove("active");
		}
		//assign the class active to the clicked item
		tagItem.classList.add("active");
		//console.log(`clicked on ${tags[i]}`);
		// Load top songs for rock.
		lastfm.tag.getTopTracks(
			{ tag: tags[i] },
			{
				success: function (data) {
					// console.log(data);
					displayTracks(data);
				},
				error: function (code, message) {
					console.log(message);
				},
			}
		);
	});

	tagList.appendChild(tagItem);
}

// const tagItems = document.getElementsByClassName("tag-item");

// tagItems[0].classList.add("active");

// lastfm.tag.getTopTracks(
// 	{ tag: tags[0] },
// 	{
// 		success: function (data) {
// 			// console.log(data);
// 			displayTracks(data);
// 		},
// 		error: function (code, message) {
// 			console.log(message);
// 		},
// 	}
// );

