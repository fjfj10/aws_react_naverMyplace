import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style'
import { PiDotsThreeVerticalThin, PiSirenLight } from 'react-icons/pi'
import { MdBlock } from 'react-icons/md'
import { GoSmiley, GoStar } from 'react-icons/go'
import { BsChevronRight } from 'react-icons/bs'
import postListData from './PostList';

function PostContainer({ name }) {
    const [ isOptionShow, setIsOptionShow ] = useState(false);

    const handlePostOptionButtonOnClick = () => {
        setIsOptionShow(!isOptionShow);
    }

    let filteredPostList = postListData;

    // 팔로잉 버튼을 눌렀을 때 isFollowing이 true인 post만 보여줌
    // 전체와 팔로잉 버튼을 누를 때마다 재 랜더링 되므로 useState 사용하지 않음
    if (name === "following") {
        filteredPostList = postListData.filter(post => post.isFollowing)
    }

    return (
        <ul css={S.SContainer}>
            {filteredPostList.map((post) => 
                <li css={S.SPost} key={post.id}>
                    <div css={S.SPostLayout}>
                        <div css={S.SProfil}>
                            <button css={S.SProfilButton}>
                                <div css={S.SProfilImgContainer}>
                                    <div css={S.SImgBack}>
                                        <img src={post.profilImgSrc} alt="profileImg" css={S.SImg}/>
                                    </div>
                                </div>
                                <div css={S.SProfilInfoContainer}>
                                    <div css={S.SUserName}>{post.username}</div>
                                    <div css={S.SUserInfo}>
                                        <div css={S.SUserInfoContent}>
                                            사진리뷰
                                            <span> {post.reviewCount}</span>
                                        </div>
                                        <div css={S.SUserInfoMiddle}></div>
                                        <div css={S.SUserInfoContent}>
                                            팔로워
                                            <span> {post.follower}</span>
                                        </div>
                                    </div>
                                </div>
                            </button>
                            <button css={S.SFollowButton}>팔로우</button>
                            <div css={S.SOptionContainer}>
                                <button css={S.SPostOptionButton} onClick={handlePostOptionButtonOnClick}>
                                    <PiDotsThreeVerticalThin css={S.SPostOptionIcon}/>
                                </button>
                                <div css={S.SOption(isOptionShow)}>
                                    <button css={S.SOptionButton}>
                                        리뷰/리뷰어 신고
                                        <PiSirenLight css={S.SOptionIcon}/>
                                    </button>
                                    <button css={S.SOptionUnderButton}>
                                        리뷰어 차단
                                        <MdBlock css={S.SOptionIcon}/>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div css={S.SPictureContainer}>
                            <button css={S.SPictureButton}>
                                <img src={post.postImgSrc} alt="포스트 관련 사진" />
                            </button>
                        </div>
                        <div css={S.STextContainer}>
                            <a href="" css={S.SText}>
                                {post.text}
                            </a>
                        </div>
                        <div css={S.STagContainer}>
                            <span css={S.STag} >
                                <img src={post.tagImg} alt="tag-img" css={S.STagImg}/>
                                <span css={S.STagContent}>{post.tagContent}</span>
                            </span>
                            <span css={S.SAgree}>
                                +{post.agreeCount}
                            </span>
                        </div>
                        <div css={S.SCommentContainer}>
                            <div css={S.SComment}>
                                <button css={S.SCommentButton}>
                                    <span>
                                        <GoSmiley css={S.SCommentImg}/>
                                    </span>
                                    <span css={S.SCommentSpan}>
                                        반응남기기
                                    </span>
                                </button>
                            </div>
                            <div css={S.SDate}>
                                <span>{post.date}</span>
                            </div>
                        </div>
                        <div css={S.SLocaionInfo}>
                            <div css={S.SLocaion}>
                                <div css={S.SLocaionNameContainer}>
                                    <button css={S.SLocaionNameButton}>
                                        <span>{post.location}</span>
                                        <BsChevronRight />
                                    </button>
                                </div>
                                <div css={S.SAdrressContainer}>
                                    <div css={S.SContent}>
                                        {post.category}
                                    </div>
                                    <div css={S.SMiddle}></div>
                                    <div css={S.SContent}>
                                        {post.adrress}
                                    </div>
                                </div>
                            </div>
                            <div css={S.SSave}>
                                <button css={S.SSaveButton}>
                                    <GoStar css={S.SSaveIcon}/>
                                    <span css={S.SSaveContent}>저장</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </li>
            )}
            
        </ul>
    );
}

export default PostContainer;