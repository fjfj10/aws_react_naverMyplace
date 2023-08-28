import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style'
import Menubar from '../../components/Menubar/Menubar';
import { Link } from 'react-router-dom';

function Feed(props) {

    return (
        <div>
            <Menubar>
                <Link to={'/feed'}>
                    <button css={S.SSelectedButton}>
                        <span css={S.SSelectedContent} >피드</span>
                    </button>
                </Link>
                <Link to={'/visit'}>
                    <button css={S.SButton}>
                        <span css={S.SContent}>타임라인</span>
                    </button>
                </Link>
                <Link to={'/review'}>
                    <button css={S.SButton}>
                        <span css={S.SContent}>리뷰</span>
                    </button>
                </Link>
            </Menubar>
            <div>
                
            </div>
        </div>
    );
}

export default Feed;