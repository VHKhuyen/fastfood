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
	const [showLoading, setLoading] = useState(false)
	// const [lengthOfInput, setLengthOfInput] = useState(false)

	const debounce = useDebounce(searchValue, 500)
	const inputRef = useRef()

	const handleClear = () => {
		setSearchValue('')
		inputRef.current.focus()
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
		// setLengthOfInput(true)
	}
	const handleBlur = () => {
		// setLengthOfInput(false)
	}
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
			<div>
				<div
					className={cx('search', 'd-flex-center', {
						// 'input-large': lengthOfInput,
					})}
				>
					<input
						ref={inputRef}
						value={searchValue}
						type="text"
						onFocus={handleFocus}
						onChange={handleChange}
						onBlur={handleBlur}
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
					<button className={cx('search-btn')} onMouseDown={handleSubmit}>
						<FontAwesomeIcon icon={faMagnifyingGlass} />
					</button>
				</div>
			</div>
		</HeadlessTippy>
	)
}
export default Search
