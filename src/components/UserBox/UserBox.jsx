import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style'
import { RxCaretRight } from 'react-icons/rx'
import { PiPencilSimpleLineLight } from 'react-icons/pi'
import { LiaCheckCircleSolid } from 'react-icons/lia'
import { useRecoilState } from 'recoil';
import { isModalShowState } from '../../store/Modal';

function UserBox(props) {
    const [ isModalShow, setIsModalShow ] = useRecoilState(isModalShowState);

    const handleOpenModalOnClick = () => {
        setIsModalShow(!isModalShow);
    }

    const handleOpenLoginPageOnClick = () => {
        const url = "https://nid.naver.com/nidlogin.login?svctype=262144&url=https%3A%2F%2Fm.place.naver.com%2Fmy%2Ffeed"
        window.open(url);
    }

    const handleOpenMissionPageOnClick = () => {
        const url = "https://m.place.naver.com/my/mission"
        window.open(url);
    }

    return (
        <div css={S.SLayout}>
            <div css={S.SContainer}>
                <button css={S.SUserProfile} onClick={handleOpenLoginPageOnClick}>
                    <div css={S.SUserImgContainer}>
                        <div css={S.SImgBack}>
                            <img src="/images/profile-img.png" alt="profileImg" css={S.SUserImg}/>
                        </div>
                    </div>
                    <div css={S.SLogin}>
                        <span>로그인하기</span>
                        <RxCaretRight />
                    </div>
                </button>
                <div css={S.SButtons}>
                    <span>
                        <button css={S.SReviewButton} onClick={handleOpenModalOnClick}>
                            <span css={S.SSpan}>
                                <PiPencilSimpleLineLight css={S.SReviewIcon}/>
                                리뷰 쓰기
                            </span>
                        </button>
                    </span>
                    <span css={S.SMissionContainer}>
                        <button css={S.SMissionButton} onClick={handleOpenMissionPageOnClick}>
                            <span css={S.SSpan}>
                                <LiaCheckCircleSolid css={S.SMissionIcon}/>
                                미션
                            </span>
                        </button>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default UserBox;