import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style'
import { SiNaver } from 'react-icons/si'
import { AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-router-dom';

function Header(props) {
    const handleOpenNaverOnClick = () => {
        const url = "https://www.naver.com/"
        window.open(url);
    }

    const handleOpenLoginPageOnClick = () => {
        const url = "https://nid.naver.com/nidlogin.login?svctype=262144&url=https%3A%2F%2Fm.place.naver.com%2Fmy%2Ffeed"
        window.open(url);
    }

    return (
        <div css={S.SLayout}>
            <h1 css={S.SHeadStart}>
                <button css={S.SNaverButton} onClick={handleOpenNaverOnClick}>
                    <SiNaver />
                </button>
                <Link to={'/feed'}>
                    <button css={S.SMyplaceButton} >
                        <span>MY플레이스</span>
                    </button>
                </Link>
                
            </h1>
            <div css={S.SHeadEnd}>
                <button css={S.SCouponButton} onClick={handleOpenLoginPageOnClick}>
                    <img src="/images/coupon.png" alt="" css={S.SCouponImg} />
                </button>
                <button css={S.SMenuButton} onClick={handleOpenLoginPageOnClick}>
                    <AiOutlineMenu />
                </button>
            </div>
        </div>
    );
}

export default Header;