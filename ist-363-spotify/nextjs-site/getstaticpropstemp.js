export async function getStaticProps() { 
	// Get external data from the file system, API, DB, etc. 
	const tracks = getTracks(); // The value of the `props` key will be // passed to the `Home` component 
	const genres = getGenres();
	return { 
		props: {
			tracks,
			genres
		} 
	} 
}

