import { useState, useRef, useEffect } from 'react'
import classNames from 'classnames/bind'
import style from './search.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons'
import HeadlessTippy from '@tippyjs/react/headless'

import { Wrapper as PopperWrapper } from '@/components/popper'
import SearchProduct from '@/components/searchProduct/SearchProduct'
import { useDebounce } from '@/hooks'
import { search } from '@/services/searchServices'

const cx = classNames.bind(style)

function Search() {
	const [searchValue, setSearchValue] = useState('')
	const [searchResult, setSearchResult] = useState([])
	const [showResult, setShowResult] = useState(false)
	const [toggleSearch, setToggleSearch] = useState(false)
	const [showLoading, setLoading] = useState(false)
	const debounce = useDebounce(searchValue, 500)

	const inputRef = useRef()
	const searchRef = useRef()
	const showSearchRef = useRef()

	const handleClear = () => {
		setSearchValue('')
		inputRef.current.focus()
		setShowResult(false)
	}

	const handleHideResults = () => {
		setShowResult(false)
	}
	const handleSubmit = (e) => {
		e.preventDefault()
	}
	const handleChange = (e) => {
		const searchValue = e.target.value
		if (!searchValue.startsWith(' ')) {
			setSearchValue(searchValue)
		}
	}
	const handleFocus = () => {
		setShowResult(true)
	}
	const handleToggleSearch = () => {
		setToggleSearch(true)
	}

	const handleClickOutside = (e) => {
		if (e.target.parentNode === showSearchRef.current || e.target === showSearchRef.current) {
			return
		} else if (searchRef.current && !searchRef.current.contains(e.target)) {
			setToggleSearch(false)
		}
	}

	useEffect(() => {
		document.addEventListener('click', handleClickOutside)

		return () => {
			document.removeEventListener('click', handleClickOutside)
		}
	}, [toggleSearch])

	useEffect(() => {
		if (!debounce.trim()) {
			setSearchResult([])
			return
		}
		const controller = new AbortController()
		const fetchData = async () => {
			setLoading(true)
			const response = await search(controller, debounce)
			if (response) {
				setSearchResult(response.data)
			}
			setLoading(false)
		}
		fetchData()
		return () => {
			controller.abort()
		}
	}, [debounce])

	return (
		// div to fix waring tippy
		<div>
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
				<div ref={searchRef}>
					<div className={cx('search', { show: toggleSearch })}>
						<input
							id="input"
							ref={inputRef}
							value={searchValue}
							type="text"
							onFocus={handleFocus}
							onChange={handleChange}
							placeholder="Tìm kiếm sản phẩm, bài viết,..."
						/>
						<button className={cx('loading', { show: showLoading })}>
							<FontAwesomeIcon icon={faSpinner} />
						</button>
						<button className={cx('clear', { show: !!searchValue && !showLoading })} onClick={handleClear}>
							<FontAwesomeIcon icon={faCircleXmark} />
						</button>
						<span></span>
						<button className={cx('search-submit')} onMouseDown={handleSubmit}>
							<FontAwesomeIcon icon={faMagnifyingGlass} />
						</button>
					</div>
					<button ref={showSearchRef} onClick={handleToggleSearch} className={cx('search-btn', { hide: toggleSearch })}>
						<FontAwesomeIcon icon={faMagnifyingGlass} />
					</button>
				</div>
			</HeadlessTippy>
		</div>
	)
}
export default Search
