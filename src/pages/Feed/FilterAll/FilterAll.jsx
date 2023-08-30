import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style'
import MainFilter from '../../../components/MainFilter/MainFilter';
import { TfiTarget } from 'react-icons/tfi'
import { Link } from 'react-router-dom';
import MainContainer from '../../../components/MainContainer/MainContainer';
import CategoryList from '../../../components/CategoryList/CategoryList';

import PostContainer from '../../../components/MainContainer/PostContainer/PostContainer';

function FilterAll(props) {
    const name = "all"
    
    const handleAddButtonOnClick = () => {
        alert("네이버 로그인 하신 후 이용해 주시기 바랍니다.")
    }


    return (
        <MainContainer>
            <MainFilter>
                <div css={S.SButtons}>
                    <div css={S.SAllButtonContainer}>
                        <Link to={'/feed/all'}>
                        <button css={S.SAllButton}>전체</button>
                        </Link>
                    </div>
                    <div css={S.SFollowingButtonContainer}>
                        <Link to={'/feed/following'}>
                        <button css={S.SFollwingButton}>팔로잉</button>
                        </Link>
                    </div>
                    <div css={S.SAddButtonContainer}>
                        <button css={S.SAddButton} onClick={handleAddButtonOnClick}>+ 관심지역</button>
                    </div>
                </div>
                <div css={S.SLocation}>
                    <div css={S.SBetween}></div>
                    {/* Modal창 띄우기 */}
                    <button css={S.SLocationButton}>
                        <div>
                        <TfiTarget css={S.SLocationIcon}/>
                        </div>
                        <span css={S.SLocationSpan}>현위치</span>
                    </button>
                </div>
            </MainFilter>
            <div css={S.SCategoryListContainer}>
                <div css={S.SCategoryList}>
                    <button>한식</button>
                    <button>테마파크</button>
                    <button>카페</button>
                    <button>피크닉</button>
                    <button>양식</button>
                    <button>등산/트레킹</button>
                    <button>일식</button>
                    <button>아이와 함께</button>
                    <button>역사유적</button>
                    <button>분식/치킨</button>
                    <button>숙박</button>
                    <button>중식</button>
                    <button>체험관광</button>
                    <button>아시아/퓨전음식</button>
                    <button>캠핑</button>
                    <button>뷔페/레스토랑</button>
                    <button>낚시</button>
                </div>
            </div>
            <PostContainer name={name}/>
        </MainContainer>
    );
}

export default FilterAll;