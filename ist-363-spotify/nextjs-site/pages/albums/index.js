import Col from "../../components/Col";
import Container from "../../components/Container";
import Heading from "../../components/Heading";
import Image from "next/image";
import Layout from "../../components/Layout";
import Link from "next/link";
import Paragraph from "../../components/Paragraph";
import Row from "../../components/Row";

import { getAlbums } from "../../lib/api";

export async function getStaticProps() {
	const albums = await getAlbums();
	return {
		props: {
			albums,
		},
	};
}

const AlbumsPage = ({ albums }) => {
	return (
		<Layout>
			<Container>
				<Heading level="1">Albums</Heading>
				<Row>
					{albums.map((album, index) => {
						const { title, featuredImage, slug } = album.node;
						const { sourceUrl, altText, mediaDetails } =
							featuredImage.node;
						return (
							<Col key={index} xs="6" sm="4" marginBottom="2">

									<Link href={`/albums/${slug}`}>
										<a>
											<Image
												src={sourceUrl}
												alt={altText}
												width={mediaDetails.width}
												height={mediaDetails.height}
											/>
											<Heading level="3">
												{title}
											</Heading>
										</a>
									</Link>

							</Col>
						);
					})}
				</Row>
			</Container>
		</Layout>
	);
};
export default AlbumsPage;

/* import Col from '../../components/Col';
import Heading from '../../components/Heading';
import Image from 'next/image';
import Layout from '../../components/Layout';
import Link from 'next/link';
import Paragraph from '../../components/Paragraph';
import Row from '../../components/Row';
import {getArtists} from '../../lib/api.js';


export async function getStaticProps() { // Get external data from the file system, API, DB, etc. 
	const artists = getArtists(); // The value of the `props` key will be // passed to the `Home` component  
	return { 
		props: {artists}
	}
}

const ArtistsLandingPage = ({artists}) => {
	return <Layout>
				<Heading level="1">Artists</Heading>
				<Row>
					{artists.map((artist, index) => {
						const { title, slug, featuredImage } = artist;
						const { src, alt, width, height } = featuredImage;
						// const {title, slug} = artist;
						return <Col key={index} xs="6" sm="6">
							<Image
								src={`/images/${src}`}
								alt={alt}
								width={width}
								height={height}
							/>
							<Heading level="3">{artist.title}</Heading>
							<Paragraph>
								<Link href={`/artists/${slug}`}>
									<a>
										Read More
									</a>
								</Link>
							</Paragraph>
						</Col>
					})}
				</Row>
			</Layout>
}
export default ArtistsLandingPage; */
