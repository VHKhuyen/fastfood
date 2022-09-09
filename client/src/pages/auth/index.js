import { Button } from '@/components'
import style from './auth.module.scss';
import classNames from "classnames/bind";

const cx = classNames.bind(style)
function Auth() {
	return (
		<div className={cx('wrapper')}>
			<Button radius small > me!</Button>
			<Button  primary href="https" >Click me!</Button>
		</div>
	)
}

export default Auth
