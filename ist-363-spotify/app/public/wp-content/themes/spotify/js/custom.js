console.log("js loaded");
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenuBtn = document.getElementById("closeMenuBtn");

console.log(menuBtn);

//boolean
const syracuseWeather = 0;
let isFreezing = syracuseWeather <= 32 ? true : false;
console.log(isFreezing);

//need event name and function
menuBtn.addEventListener("click", function () {
	mobileMenu.classList.add("active");
	console.log("button clicked");
});

closeMenuBtn.addEventListener("click", function () {
	mobileMenu.classList.remove("active");
	console.log("menu closed");
});

//objects
const song = {
	title: "Come Sail Away",
	artist: "Styx",
	length: 180, //seconds
	image: "album.jpg",
};
// console.log(song.length); //prints song length value to console

//arrays
const colors = ["red", "orange", "yellow"];
// console.log(colors);
//for loop - counter;condition;incrementer
for (let i = 0; i < colors.length; i++) {
	// console.log(colors[i]);
}

const songs = [
	{
		title: "Come Sail Away",
		artist: "Styx",
		length: 180, //seconds
		image: "album.jpg",
	},
	{
		title: "Keep Sailing",
		artist: "Styx",
		length: 180, //seconds
		image: "album.jpg",
	},
	{
		title: "OK Please Stop Sailing",
		artist: "Styx",
		length: 180, //seconds
		image: "album.jpg",
	},
];

//create songList variable from songList HTML element
songList = document.getElementById("songList");
for (let index = 0; index < songs.length; index++) {
    console.log(songs[index].title);
    
    //creates li songItem
    const songItem = document.createElement("li");
    songItem.classList.add("col", "col-sm-4");
    
    //create h3 for each song songTitle
    const songTitle = document.createElement("h3");
    songTitle.innerText = songs[index].title;

    const songArtist = document.createElement("h4");
    songArtist.innerText = songs[index].artist;
    
    //insert h3 into li
    songItem.appendChild(songTitle);
    songItem.appendChild(songArtist);


    //insert li with h3 into songList
    songList.appendChild(songItem);
};

