import { useState, useRef, useEffect } from 'react'
import classNames from 'classnames/bind'
import style from './search.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons'
import HeadlessTippy from '@tippyjs/react/headless'

import { Wrapper as PopperWrapper } from '@/components/popper'
import SearchProduct from '@/components/SearchProduct'
import { useDebounce } from '@/hooks'
import { requestTikTok } from '@/utils/request'

const cx = classNames.bind(style)

function Search() {
	const [searchValue, setSearchValue] = useState('')
	const [searchResult, setSearchResult] = useState([])
	const [showResult, setShowResult] = useState(true)
	const [showLoading, setLoading] = useState(false)

	const debounce = useDebounce(searchValue, 500)
	const inputRef = useRef()

	const handleClear = () => {
		setSearchValue('')
		inputRef.current.focus()
	}

	const handleHideResults = () => {
		setShowResult(false)
	}

	useEffect(() => {
		if (!debounce.trim()) {
			setSearchResult([])
			return
		}
		setLoading(true)
		async function fetchData() {
			try {
				const response = await requestTikTok.get('/users/search', {
					params: {
						q: debounce,
						type: 'less',
					},
				})
				if (response) {
					setSearchResult(response.data.data)
				}
				setLoading(false)
			} catch (error) {
				setLoading(false)
			}
		}
		fetchData()
	}, [debounce])
	return (
		<HeadlessTippy
			visible={showResult && searchResult.length > 0}
			interactive
			render={(attrs) => (
				<div className={cx('search-result')} tabIndex="-1" {...attrs}>
					<PopperWrapper>
						<h4 className={cx('search-title')}>product</h4>
						{searchResult.map((result) => (
							<SearchProduct key={result.id} {...result} />
						))}
					</PopperWrapper>
				</div>
			)}
			onClickOutside={handleHideResults}
		>
			<div className={cx('search', 'd-flex-center')}>
				<input
					ref={inputRef}
					onFocus={() => setShowResult(true)}
					value={searchValue}
					type="text"
					onChange={(e) => setSearchValue(e.target.value)}
					placeholder="Tìm kiếm sản phẩm, bài viết,..."
				/>
				{showLoading && (
					<button className={cx('loading')}>
						<FontAwesomeIcon icon={faSpinner} />
					</button>
				)}
				{!!searchValue && !showLoading && (
					<button className={cx('clear')} onClick={handleClear}>
						<FontAwesomeIcon icon={faCircleXmark} />
					</button>
				)}
				<span></span>
				<button className={cx('search-btn')}>
					<FontAwesomeIcon icon={faMagnifyingGlass} />
				</button>
			</div>
		</HeadlessTippy>
	)
}
export default Search
