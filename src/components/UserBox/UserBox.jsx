import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style'
import { RxCaretRight } from 'react-icons/rx'
import { PiPencilSimpleLineLight } from 'react-icons/pi'
import { LiaCheckCircleSolid } from 'react-icons/lia'

function UserBox(props) {
    return (
        <div css={S.SLayout}>
            <div css={S.SContainer}>
                <button css={S.SUserProfile}>
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
                        <button css={S.SReviewButton}>
                            <span css={S.SSpan}>
                                <PiPencilSimpleLineLight css={S.SReviewIcon}/>
                                리뷰 쓰기
                            </span>
                        </button>
                    </span>
                    <span css={S.SMissionContainer}>
                        <button css={S.SMissionButton}>
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