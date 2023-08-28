import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style'
import Menubar from '../../components/Menubar/Menubar';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { isModalShowState } from '../../store/Modal';

function Visit(props) {
    const [ isModalShow, setIsModalShow ] = useRecoilState(isModalShowState);

    const handleOpenModalOnClick = () => {
        setIsModalShow(!isModalShow);
    }

    return (
        <div>
            <Menubar>
                <Link to={'/feed'}>
                    <button css={S.SButton}>
                        <span css={S.SContent} >피드</span>
                    </button>
                </Link>
                <Link to={'/visit'}>
                    <button css={S.SSelectedButton}>
                        <span css={S.SSelectedContent}>타임라인</span>
                    </button>
                </Link>
                <Link to={'/review'}>
                    <button css={S.SButton}>
                        <span css={S.SContent}>리뷰</span>
                    </button>
                </Link>
            </Menubar>
            <div css={S.SContainer}>
                <div css={S.SBoard}>
                    <div css={S.SFlag}>
                        <img src="/images/flag.png" alt="" css={S.SFlagimg} />
                    </div>
                    <div css={S.SFirstContent}>
                        <h1>
                            <span css={S.SSpan}>영수증/카드내역 인증, 예약, 주문</span>
                            한
                        </h1>
                        <p>장소가 나의 기록이 됩니다.</p>
                    </div>
                    <div css={S.SSecondContent}>방문했던 곳을 한 눈에 모아보세요.</div>
                    <div css={S.SMap}>
                        <img src="/images/visit-map-img.png" alt="" css={S.SMapimg} />
                    </div>
                    <div css={S.SButtonContainer}>
                        {/* 버튼 틀릭 시 모달 창 나오게 하기 */}
                        <button css={S.SReviewButton} onClick={handleOpenModalOnClick}>리뷰 참여하기</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Visit;