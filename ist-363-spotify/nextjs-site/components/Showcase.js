// import styles from "./showcase.module.scss"; unused stylesheet
import Image from "next/image";
import Section from "./Section";
import Row from "./Row";
import Col from "./Col";
import Container from "./Container";
import Paragraph from "./Paragraph";
import Heading from "./Heading";
import Button from "./Button";

const Showcase = () => {
	return (
		<Section>
			<Container>
				<Row>
					<Col xs="4" md="3">
						<Image
							src={`/images/led-zeppellin-ii.jpg`}
							alt="Led Zeppelin II"
							width={300}
							height={300}
						/>
					</Col>
					<Col
						xs="8"
						md="9"
						flexDirection="column"
						justifyContent="center"
					>
						<Heading level="1" marginBottom="1">
							Listening is everything.
						</Heading>
						<Paragraph marginBottom="1">
							Millions of songs and podcasts. No credit card
							needed.
						</Paragraph>
						<Button
							label="Get Spotify Free"
							type="primary"
							path="/download"
						/>
					</Col>
				</Row>
			</Container>
		</Section>
	);
};
export default Showcase;
