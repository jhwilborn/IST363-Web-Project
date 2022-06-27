import styles from './nav.module.scss';
import Link from 'next/link';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles)

const navLinks = [
	{
		label: "Premium",
		slug: "premium"
	},
	{
		label: "Support",
		slug: "support"
	},
	{
		label: "Download",
		slug: "download"
	},
	{
		label: "Account",
		slug: "account"
	},
	{
		label: "Logout",
		slug: "logout"
	}
]; //structured data array

const Nav = ({mobile, flexDirection}) => {
	let navClasses = cx({
		nav : true,
		mobile : mobile
	});
	let listClasses = cx({
		list : true,
		[`flex-direction-${flexDirection}`] : flexDirection
	});
	return <nav className={navClasses}>
		<ul className={listClasses}>
		{navLinks.map((navLink, index) => {
			return <li key={index} className={styles.listItem}>
				<Link href={`/${navLink.slug}`}>
					<a className={styles.link}>
						{navLink.label}
					</a>
				</Link>
			</li>
		})}
		</ul>
	</nav>
}
export default Nav;