import classNames from "classnames/bind"
import styles from './searchProduct.module.scss'
const cx = classNames.bind(styles)

function SearchProduct() {
    return (
        <a href="/" className={cx('search-product')}>
                <img className={cx('avatar')} src='https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?cs=srgb&dl=pexels-valeria-boltneva-1251198.jpg&fm=jpg' alt="Food" />
            <div className={cx('info')}>
                <h3 className={cx('name')}>burger avatar</h3>
                <span className={cx('price')}>12.000</span>
            </div>
        </a>
    )
}

export default SearchProduct