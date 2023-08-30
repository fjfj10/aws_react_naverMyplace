import React, { useEffect } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style'
import Header from '../Header/Header'
import UserBox from '../UserBox/UserBox';
import Footer from '../Footer/Footer';
import { useRecoilState } from 'recoil';
import { isModalShowState, isLocationModalShowState } from '../../store/Modal';

function Mainlayout({ children }) {
    const [ isModalShow, setIsModalShow ] = useRecoilState(isModalShowState);
    const [ isLocationModalShow, setIsLocationModalShow ] = useRecoilState(isLocationModalShowState);

    useEffect(() => {
        if (isModalShow || isLocationModalShow) {
            // 모달이 떠 있을 때 스크롤을 막음
            document.body.style.overflow = 'hidden';
        } else {
            // 모달이 닫혔을 때 스크롤 복원
            document.body.style.overflow = 'auto';
        }
    }, [isModalShow, isLocationModalShow]);

    const handleCloseModalOnClick = () => {
        setIsModalShow(!isModalShow);
    }

    const handleCloseLocationModalOnClick = () => {
        setIsLocationModalShow(!isLocationModalShow);
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
                        <button css={S.SButton} onClick={handleCloseModalOnClick} >확인</button>
                    </div>
                </div>
            </div>
            <div css={S.SLocationModal(isLocationModalShow)}>
                <div css={S.SLAlert}>
                    <div css={S.SLContent}>
                        <p>이서비스는위치정보를사용하는서비스입니다.</p>
                        <p>위치정보사용 동의 하시겠습니까?</p>
                    </div>
                    <div css={S.SLButtonContainer}>
                        <button css={S.SNoButton} onClick={handleCloseLocationModalOnClick} >아니오</button>
                        <button css={S.SYesButton} onClick={handleCloseLocationModalOnClick} >예</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mainlayout;