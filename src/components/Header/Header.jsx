import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style'
import { SiNaver } from 'react-icons/si'
import { RiCouponLine } from 'react-icons/ri'
import { AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-router-dom';

function Header(props) {
    const handleNaverButtonClick = () => {
        const url = "https://www.naver.com/"
        window.open(url);
    }

    

    return (
        <div css={S.SLayout}>
            <h1 css={S.SHeadStart}>
                <button css={S.SNaverButton} onClick={handleNaverButtonClick}>
                    <SiNaver />
                </button>
                <Link to={'/feed'}>
                    <button css={S.SMyplaceButton} >
                        <span>MY플레이스</span>
                    </button>
                </Link>
                
            </h1>
            <div css={S.SHeadEnd}>
                <button css={S.SCouponButton}>
                    <img src="/images/coupon.png" alt="" css={S.SCouponImg} />
                </button>
                <button css={S.SMenuButton}>
                    <AiOutlineMenu />
                </button>
            </div>
        </div>
    );
}

export default Header;