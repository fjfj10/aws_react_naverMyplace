import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style'
import Header from '../Header/Header'
import UserBox from '../UserBox/UserBox';
import Footer from '../Footer/Footer';
import { useRecoilState } from 'recoil';
import { isModalShowState } from '../../store/Modal';

function Mainlayout({ children }) {
    const [ isModalShow, setIsModalShow ] = useRecoilState(isModalShowState);

    const handleCloseModalOnClick = () => {
        setIsModalShow(!isModalShow);
    }

    return (
        <div css={S.SLayout}>
            <div css={S.SMain}>
                <Header />
                <UserBox />
                {children}
                <Footer />
            </div>
            <div css={S.SModal(isModalShow)}>
                <div css={S.SAlert}>
                    <div css={S.SContent}>
                        <p>인증은</p>
                        <p>모바일 환경에서만</p>
                        <p>가능합니다</p>
                    </div>
                    <div css={S.SButtonContainer}>
                        {/* 클릭시 모달 닫히게 */}
                        <button css={S.SButton} onClick={handleCloseModalOnClick} >확인</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mainlayout;