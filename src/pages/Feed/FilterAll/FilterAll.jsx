import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style'
import MainFilter from '../../../components/MainFilter/MainFilter';
import { TfiTarget } from 'react-icons/tfi'
import { Link } from 'react-router-dom';
import MainContainer from '../../../components/MainContainer/MainContainer';
import CategoryList from '../../../components/CategoryList/CategoryList';
import PostContainer from '../../../components/MainContainer/PostContainer/PostContainer';
import { useRecoilState } from 'recoil';
import { isLocationModalShowState } from '../../../store/Modal';


function FilterAll(props) {
    const name = "all"
    const [ isLocationModalShow, setIsLocationModalShow ] = useRecoilState(isLocationModalShowState);
    
    const handleAddButtonOnClick = () => {
        alert("네이버 로그인 하신 후 이용해 주시기 바랍니다.")
    }

    const handleCloseLocationModalOnClick = () => {
        setIsLocationModalShow(!isLocationModalShow);
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
                    <button css={S.SLocationButton} onClick={handleCloseLocationModalOnClick}>
                        <div>
                        <TfiTarget css={S.SLocationIcon}/>
                        </div>
                        <span css={S.SLocationSpan}>현위치</span>
                    </button>
                </div>
            </MainFilter>
            <CategoryList />
            <PostContainer name={name}/>
        </MainContainer>
    );
}

export default FilterAll;