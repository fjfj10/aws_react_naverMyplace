import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style'
import Header from '../Header/Header'
import UserBox from '../UserBox/UserBox';
import Footer from '../Footer/Footer';

function Mainlayout({ children }) {
    

    return (
        <div css={S.SLayout}>
            <div css={S.SMain}>
                <Header />
                <UserBox />
                {children}
                <Footer />
            </div>
            <div css={S.SModal}>
                <div css={S.SAlert}>
                    <div css={S.SContent}>
                        <p>인증은</p>
                        <p>모바일 환경에서만</p>
                        <p>가능합니다</p>
                    </div>
                    <div css={S.SButtonContainer}>
                        {/* 클릭시 모달 닫히게 */}
                        <button css={S.SButton}>확인</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mainlayout;