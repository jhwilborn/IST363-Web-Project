import {Fragment} from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

// when you call <Layout> you run the function that puts the page content in a container div and applies the styles to that div

export default function Layout ({children}) {
	return <Fragment>
		<Header/>
			<Main>
				{children}
			</Main>
		<Footer/>
		</Fragment>
}
