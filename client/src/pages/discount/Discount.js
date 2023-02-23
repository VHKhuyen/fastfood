import { useEffect, useState } from 'react'

import { Button } from '@/components'
import classNames from 'classnames/bind'
import style from './discount.module.scss'

const cx = classNames.bind(style)
const tabs = [
	{
		type: 'bestseller',
		title: 'Bestseller',
	},
	{
		type: 'burger',
		title: 'Burger',
	},
	{
		type: 'pasta',
		title: 'Mỳ ý',
	},
	{
		type: 'drink',
		title: 'Đồ uống',
	},
]

function Discount() {
	const [typeTab, setTypeTab] = useState('new')

	return (
		<section className={cx('wrapper')}>
			<main className={cx('main')}>
				<div className={cx('container')}>
					<div className={cx('tabs-wrapper')}>
						{tabs.map((tab) => (
							<Button
								key={tab.type}
								primary={typeTab === tab.type ? true : false}
								radius
								onClick={() => setTypeTab(tab.type)}
							>
								{tab.title}
							</Button>
						))}
					</div>
				</div>
			</main>
		</section>
	)
}

export default Discount
