import { useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames/bind'
import style from './search.module.scss'
import { faCircleXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import HeadlessTippy from '@tippyjs/react/headless'
import { Wrapper as PopperWrapper } from '@/components/popper'
import SearchProduct from '@/components/SearchProduct'
import { useEffect } from 'react/cjs/react.development'
const cx = classNames.bind(style)

function Search() {
	const [searchValue, setSearchValue] = useState('')
	const [searchResult, setSearchResult] = useState([])
	const [showResult, setShowResult] = useState(true)

	const inputRef = useRef()

	const handleClear = () => {
		setSearchValue('')
		inputRef.current.focus()
	}

	const handleHideResults = () => {
		setShowResult(false)
	}

	useEffect(() => {
		setTimeout(() => {
			setSearchResult([1, 2, 3])
		}, 0)
	}, [searchValue])
	return (
		<HeadlessTippy
			visible={showResult && searchResult.length > 0}
			interactive
			render={(attrs) => (
				<div className={cx('search-result')} tabIndex="-1" {...attrs}>
					<PopperWrapper>
						<h4 className={cx('search-title')}>product</h4>
						<SearchProduct />
						<SearchProduct />
						<SearchProduct />
						<SearchProduct />
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
				{/* <button className={cx("loading")}>
          <FontAwesomeIcon icon={faSpinner} />
        </button> */}
				{!!searchValue && (
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
