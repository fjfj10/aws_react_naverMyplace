import { css } from "@emotion/react";

export const SContainer = css`
    width: 100%;
    height: auto;
`;

export const SPost = css`
    width: 100%;
    height: 659px;
`;

export const SPostLayout = css`
    margin: 0px auto;
    padding: 16px 20px 28px 20px;
    width: 720px;
    height: 659px;
`;

export const SProfil = css`
    display: flex;
    align-items: center;
    width: 680px;
    height: 65px;
`;

export const SProfilButton = css`
    display: flex;
    align-items: center;
    margin: -10px;
    padding: 10px;
    border: none;
    width: 612px;
    height: 62px;
    background-color: transparent;
    cursor: pointer;
`;

export const SProfilImgContainer = css`
    margin-right: 8px;
    border-radius: 50%;
    width: 42px;
    height: 42px;
`;

export const SImgBack = css`
    position: relative;
    z-index: 1;
    border-radius: 50%;
    width: 42px;
    height: 42px;
    background-color: white;
    box-shadow: #efefef 1px 1px 1px 1px;
`;

export const SImg = css`
    position: absolute;
    z-index: 2;
    top: 2px;
    left: 2px;
    bottom: 2px;
    right: 2px;
    border-radius: 50%;
    width: 38px;
    height: 38px;
`;

export const SProfilInfoContainer = css`
    margin-top: 3px;
    min-width: 122.5px;
    height: 38px;
`;

export const SUserName = css`
    width: 122.5px;
    height: 20px;
    color: rgb(36, 36, 36);
    text-align: left;
    font-size: 15px;
    font-weight: 700;
`;

export const SUserInfo = css`
    display: flex;
    margin-top: 2px;
    height: 16px;
    text-align: left;
`;

export const SUserInfoContent = css`
    color: rgb(143, 143, 143);
    font-size: 12px;
    font-weight: 400;
`;

export const SUserInfoMiddle = css`
    margin: 8px 5px 0px 5px;
    border-radius: 50%;
    width: 2px;
    height: 2px;
    background-color: rgb(143, 143, 143);
`;

export const SFollowButton = css`
    border: none;
    border-radius: 4px;
    width: 70px;
    height: 30px;
    font-size: 13px;
    font-weight: 600;
    color: rgb(40, 124, 255);
    background-color: rgb(239, 246, 254);
    cursor: pointer;
`;

export const SOptionContainer = css`
    position: relative;
    margin: 0px -12px 0px 4px;
    width: 26px;
    height: 30px;
`;

export const SPostOptionButton = css`
    border: none;
    padding: 0px;
    width: 26px;
    height: 30px;
    text-align: center;
    background-color: transparent;
    cursor: pointer;
`;

export const SPostOptionIcon = css`
    position: absolute;
    top: 2px;
    left: 4px;
    width: 20px;
    height: 26px;
    font-size: 16px;
    font-weight: 400;
`;

export const SOption = (isOptionShow) => css`
    position: absolute;
    ${isOptionShow ? "" : "display: none;"}
    border: 1px solid rgb(222, 224, 226);
    border-radius: 18px;
    width: 184px;
    height: 114px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 6px 0px;
    background-color: white;
`;

export const SOptionButton = css`
    position: relative;
    border: none;
    padding: 0px 0px 0px 20px;
    width: 182px;
    height: 56px;
    text-align: left;
    font-size: 16px;
    font-weight: 400;
    color: rgb(51, 51, 51);
    background-color: transparent;
`;

export const SOptionIcon = css`
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 153px;
    margin: 20.5px 0px;
    width: 15px;
    height: 15px;
`;

export const SOptionUnderButton = css`
    position: relative;
    border: none;
    border-top: 1px solid #eaeef2;
    padding: 0px 0px 0px 20px;
    width: 182px;
    height: 56px;
    text-align: left;
    font-size: 16px;
    font-weight: 400;
    color: rgb(51, 51, 51);
    background-color: transparent;
`;

export const SPictureContainer = css`
    margin-top: 2px;
    width: 680px;
    height: 360px;
`;

export const SPictureButton = css`
    border: 1px solid #eee;
    border-radius: 8px;
    width: 680px;
    height: 360px;
    background-color: transparent;
    cursor: pointer;
`;

export const STextContainer = css`
    margin-top: 10px;
    padding: 0px;
    width: 680px;
    line-height: 22px;
    font-size: 15px;
`;

export const SText = css`
    text-decoration: none;
    color: rgb(102, 102, 102);
`;

export const STagContainer = css`
    margin-top: 6px;
    margin-bottom: -7px;
    width: 680px;
    height: 33px;
`;

export const STag = css`
    margin: 0px 4px 7px 0px;
    padding: 4px 7px;
    border: none;
    border-radius: 4px;
    font-size: 13px;
    height: 26px;
    color: rgb(102, 102, 102);
    background-color: rgb(245, 247, 248);
`;

export const STagImg = css`
    width: 18px;
    height: 18px;
`;

export const STagContent = css`
    margin-left: 5px;
`;

export const SAgree = css`
    margin: 0px 4px 7px 0px;
    padding: 4px 7px;
    border: none;
    border-radius: 4px;
    font-size: 13px;
    height: 26px;
    color: rgb(102, 102, 102);
    background-color: rgb(245, 247, 248);
`;

export const SCommentContainer = css`
    position: relative;
    display: flex;
    margin-top: 17px;
    width: 680px;
    height: 24px;
`;

export const SComment = css`
    margin-right: 30px;
    flex-grow: 1;
    height: 24px;
`;

export const SCommentButton = css`
    display: flex;
    align-items: flex-start;
    margin-left: 2px;
    border: none;
    padding: 0px;
    width: 101.5px;
    height: 24px;
    font-size: 14px;
    font-weight: 500;
    color: #424242;
    background-color: transparent;
    cursor: pointer;
`;


export const SCommentImg = css`
    margin: 0px 6px 0px -1px;
    width: 24px;
    height: 24px;
`;

export const SCommentSpan =css`
    padding: 2px 0px;
    height: 24px;
`;
export const SDate = css`
    width: 65px;
    height: 24px;
    font-size: 12px;
    color: rgb(154, 154, 154);
`;

export const SLocaionInfo = css`
    display: flex;
    margin-top: 15px;
    border: 1px solid rgb(236, 240, 242);
    border-radius: 8px;
    padding: 13px 16px 12px 15px;
    width: 680px;
    height: 68px;
`;

export const SLocaion = css`
    width: 593px;
    height: 40px;
`;

export const SLocaionNameContainer = css`
    display: flex;
    width: 593px;
    height: 20px;
`;

export const SLocaionNameButton = css`
    display: flex;
    align-items: center;
    border: none;
    padding: 0px;
    height: 20px;
    font-size: 16px;
    background-color: white;
    cursor: pointer;
`;

export const SAdrressContainer = css`
    display: flex;
    margin-top: 4px;
    width: 593px;
    height: 16px;
`;

export const SContent = css`
    color: rgb(143, 143, 143);
    font-size: 12px;
    font-weight: 400;
`;

export const SMiddle = css`
    margin: 8px 5px 0px 5px;
    border-radius: 50%;
    width: 2px;
    height: 2px;
    background-color: rgb(143, 143, 143);
`;


export const SSave = css`
    margin-top: 2px;
    margin-left: 28px;
    width: 26px;
    height: 39px;
`;

export const SSaveButton = css`
    border: none;
    padding: 0px;
    width: 26px;
    height: 39px;
    background-color: white;
    cursor: pointer;
`;

export const SSaveIcon = css`
    width: 18px;
    height: 18px;
    color: #b8b8b8;
`;

export const SSaveContent = css`
    margin-top: 6px;
    width: 26px;
    height: 13px;
    font-size: 11px;
    font-weight: 500;
    color: #b8b8b8;
`;