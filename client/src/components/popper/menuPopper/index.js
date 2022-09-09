import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind"
import style from "./menuPopper.module.scss";
import { Wrapper as PopperWrapper } from '@/components/popper';


const cx = classNames.bind(style)

function MenuPopper({ children }) {
    return (
        <Tippy
            interactive
            placement='bottom-end'
            render={attrs => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <ul>
                            <li> <a href="/">Viết Blog</a></li>
                            <li> <a href="/">Bài viết của tôi</a></li>
                            <li> <a href="/">Bài viết đã lưu</a></li>
                            <li> <a href="/">Đăng xuất</a></li>
                        </ul>
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    )
}

export default MenuPopper;