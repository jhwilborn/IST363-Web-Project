import classNames from 'classnames/bind';
import styles from "./paragraph.module.scss";

let cx = classNames.bind(styles) //allows you to use t/f conditionals in variable

export default function Paragraph({children, intro, marginBottom, pushIn}){ //deconstructs here instead of having to say Heading(props) here and const {label} = props later
	//const {label} = props; //make local var called label from props
	
	let paragraphClasses = cx({
		paragraph : true,
		intro : intro,
		[`margin-bottom-${marginBottom}`] : marginBottom,
		pushIn : pushIn
	});
	
	return <p className = {paragraphClasses}>{children}</p>
}