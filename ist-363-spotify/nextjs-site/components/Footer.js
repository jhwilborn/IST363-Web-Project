import Container from './Container';
import styles from './footer.module.scss';
import Logo from './Logo';
import Col from './Col';
import Row from './Row';
import Nav from './Nav';
import Link from 'next/link';

const Footer = () => {
	return <footer className={styles.footer}>
		<Container>
			<Row alignItems="center" nowrap>
				<Col xs="6" sm="3">
				<Link href={`/`}>
							<a>
								<Logo color="white" size="2" />
							</a>
						</Link>
				</Col>
				<Col sm="6">
					<Nav/>
				</Col>
				<Col sm="3">
					Social Media Links
				</Col>
			</Row>
			<Row>
				<Col> Copyright 2022 Spotify </Col>
			</Row>
		</Container>
	</footer>
}
export default Footer;