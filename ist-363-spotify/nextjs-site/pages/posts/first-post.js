import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/Layout";
import Button from "../../components/Button";

export default function FirstPost() {
	return (
		<Layout>
			<Head>
				<title>Blog Post | JW </title>
				<meta name="description" content="page description" />
			</Head>
			<h1>First Post</h1>
			<h2>
				<Link href="../">
					<a>Back to home</a>
				</Link>
			</h2>
		</Layout>
	);
}
