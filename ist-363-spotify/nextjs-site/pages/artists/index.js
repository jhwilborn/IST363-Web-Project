import Col from "../../components/Col";
import Heading from "../../components/Heading";
import Image from "next/image";
import Layout from "../../components/Layout";
import Link from "next/link";
import Paragraph from "../../components/Paragraph";
import Row from "../../components/Row";
import { getArtists } from "../../lib/api.js";
import Container from "../../components/Container";

export async function getStaticProps() {
	// Get external data from the file system, API, DB, etc.
	const artists = await getArtists(); // The value of the `props` key will be // passed to the `Home` component
	return {
		props: { artists },
	};
}

const ArtistsLandingPage = ({ artists }) => {
	return (
		<Layout>
			<Container>
			<Heading level="1">Artists</Heading>
			<Row>
				{artists.map((artist, index) => {
					const { title, slug, featuredImage } = artist.node;
					const { sourceUrl, altText, mediaDetails } = featuredImage.node;
					// const {title, slug} = artist;
					return (
						<Col key={index} xs="6" sm="6">
							<Image
								src={sourceUrl}
								alt={altText}
								width={mediaDetails.width}
								height={mediaDetails.height}
							/>
							<Heading level="2">{title}</Heading>
							<Paragraph>
								<Link href={`/artists/${slug}`}>
									<a>Read More</a>
								</Link>
							</Paragraph>
						</Col>
					);
				})}
			</Row>
			</Container>
		</Layout>
	);
};
export default ArtistsLandingPage;
