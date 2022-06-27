import Heading from "../../components/Heading";
import Image from "next/image";
import Layout from "../../components/Layout";
import Link from "next/link";
import { getAllArtistSlugs, getSingleArtistData } from "../../lib/api";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Paragraph from "../../components/Paragraph";
import Container from "../../components/Container";
import Section from "../../components/Section";

export async function getStaticPaths() {
	const paths = await getAllArtistSlugs();
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const artistData = await getSingleArtistData(params.id);
	return {
		props: {
			artistData,
		},
	};
}

const SingleArtistPage = ({ artistData }) => {
	const { title, content, featuredImage, artistInformation } = artistData;
	const { sourceUrl, altText, mediaDetails } = featuredImage.node;
	const { artistsToAlbums } = artistInformation;

	return (
		<Layout>
			<Container>
				<Row>
					<Col xs="12" md="3">
						<Image
							src={sourceUrl}
							alt={altText}
							width={mediaDetails.width}
							height={mediaDetails.height}
						/>
					</Col>
					<Col xs="6" sm="8" justifyContent="center">
						<Heading level="1">{title}</Heading>
					</Col>
				</Row>

				{/* if artiststoalbums is not empty, run the below */}
				{artistsToAlbums && (
					<Section>
						<Heading level="2" pushIn>Albums</Heading>

						<Row>
							{artistsToAlbums.map((album, index) => {
								const { title, featuredImage, slug } = album;
								const { sourceUrl, altText, mediaDetails } =
									featuredImage.node;
								return (
									<Col key={index} xs="6" sm="4" md="3">
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
						<Paragraph pushIn>
							<Link href="/artists">
								<a>Back to artists</a>
							</Link>
						</Paragraph>
					</Section>
				)}
			</Container>
		</Layout>
	);
};
export default SingleArtistPage;
