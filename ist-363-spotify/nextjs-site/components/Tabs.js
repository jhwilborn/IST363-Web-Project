import classNames from "classnames/bind";

import styles from "./tabs.module.scss"

let cx = classNames.bind(styles)

const Tabs = ({items, activeItem, clickHandler}) => {
	return <ul className={styles.tabs}>
		{items.map((item, index) => { //for loop iteration index
			let tabItemClasses = cx({
				tabItem : true,
				active : activeItem === item
				})
			return <li 
			key={index}
			className={tabItemClasses}
			onClick={() => { //will trigger instantly without being contained in another function. seems like a bug?
				clickHandler(item)
			}}
			>{item}</li>
		})}
	</ul>
}
export default Tabs;