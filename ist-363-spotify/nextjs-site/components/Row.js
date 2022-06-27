import styles from './row.module.scss';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles) //allows you to use t/f conditionals in variable

const Row = ({children, justifyContent, alignItems, nowrap}) => {
		let rowClasses = cx({
		row : true, //default parent class
		[`justify-content-${justifyContent}`] : justifyContent,  //template literal. if therer's anything in justifyContent, use it
		[`align-items-${alignItems}`] : alignItems,
		nowrap : nowrap

		}); //end of rowClasses = cx
	return <div className={rowClasses}>{children}</div>

}
export default Row;