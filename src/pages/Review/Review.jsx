import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style'
import Menubar from '../../components/Menubar/Menubar';
import { Link } from 'react-router-dom';

function Review(props) {

    const handleReviewButtonOnClick = () => {
        
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
                    <button css={S.SButton}>
                        <span css={S.SContent}>타임라인</span>
                    </button>
                </Link>
                <Link to={'/review'}>
                    <button css={S.SSelectedButton}>
                        <span css={S.SSelectedContent}>리뷰</span>
                    </button>
                </Link>
            </Menubar>
            <div css={S.SContainer}>
                <div css={S.SBoard}>
                    <div css={S.SFlag}>
                        <img src="/images/flag2.png" alt="" css={S.SFlagimg} />
                    </div>
                    <div css={S.SFirstContent}>
                        <h1>
                            정성스레 작성한
                            <span css={S.SSpan}> 리뷰</span>
                        </h1>
                        <h1>
                            내 리뷰를 모아 만든
                            <span css={S.SSpan}> 테마리스트</span>
                        </h1>
                    </div>
                    <div css={S.SSecondContent}>나의 발자취를 소중한 기록으로 남겨보세요.</div>
                    <div css={S.SImgContianer}>
                        <img src="/images/review-img.png" alt="" css={S.SImg}/>
                    </div>
                    <div css={S.SButtonContainer}>
                        {/* 버튼 틀릭 시 모달 창 나오게 하기 */}
                        <button css={S.SReviewButton}>리뷰 참여하기</button>
                    </div>                
                </div>
            </div>
        </div>
    );
}

export default Review;