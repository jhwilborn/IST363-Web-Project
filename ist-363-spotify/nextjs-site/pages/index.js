
//components
import Head from "next/head";
import Layout from "../components/Layout";
import NewReleases from '../components/NewReleases'
import Showcase from '../components/Showcase';

//functions
import {getAlbums} from '../lib/api';




export async function getStaticProps(){
	const albums = await getAlbums()
	return {
		props:{
			albums
		}
	}
}

export default function Home({ albums }) {
	/* export default makes function available to the entire site rather than this page, home is called automatically as the default of the index */
	return (
		<Layout>
			<Head>
				<title></title>
				<link rel="icon" href="/favicon.ico" />
				<meta name="description" content="summary of website" />
			</Head>
			
			<Showcase/>
			<NewReleases items={albums}/>

			
		
    	  {/* <TracksByGenre items="tracks"/> */}
		</Layout>
	);
}
