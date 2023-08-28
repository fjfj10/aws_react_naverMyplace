import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style'
import { RiCopyrightLine } from 'react-icons/ri'

function Footer(props) {
    return (
        <div css={S.SLayout}>
            <div css={S.SStart}>
                <button css={S.SStartButton}>로그인</button>
                <div css={S.SStartBetween}></div>
                <button css={S.SStartButton}>전체서비스</button>
            </div>
            <div css={S.SMiddle}>
                <button css={S.SMiddleButton}>이용정책</button>
                <div css={S.SMiddleBetween}></div>
                <button css={S.SMiddleButton}>MY플레이스 고객센터</button>
                <div css={S.SMiddleBetween}></div>
                <button css={S.SMiddleButton}>신고센터</button>
                <div css={S.SMiddleBetween}></div>
                <button css={S.SMiddleButton}>공지사항</button>
            </div>
            <div css={S.SEnd}>
                <button css={S.SEndButton}>
                    <RiCopyrightLine />
                    NAVER Corp
                </button>
            </div>
        </div>
    );
}

export default Footer;