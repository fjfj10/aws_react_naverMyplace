import { css } from "@emotion/react";

export const SLayout = css`
    padding: 20px 0px 11px 0px;
    width: 100%;
    height: 151px;
    font-size: 16px;
    background-color: rgb(6, 180, 149);
`;

export const SContainer = css`
    padding: 0px 20px;
    margin: 0px auto;
    width: 335px;
    height: 120px;
    font-size: 16px;
    background-color: rgb(6, 180, 149);
`;

export const SUserProfile = css`
    display: flex;
    align-items: center;
    border: none;
    padding: 0px;
    width: 191.5px;
    height: 64px;
    line-height: 20px;
    background-color: rgb(6, 180, 149);
    cursor: pointer;
`;

export const SUserImgContainer = css`
    margin-right: 25px;
    border-radius: 50%;
    width: 64px;
    height: 64px;
`;

export const SImgBack = css`
    position: relative;
    z-index: 1;
    border-radius: 50%;
    width: 64px;
    height: 64px;
    background-color: white;
`;

export const SUserImg = css`
    position: absolute;
    z-index: 2;
    top: 2px;
    left: 2px;
    bottom: 2px;
    right: 2px;
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 50%;
    width: 60px;
    height: 60px;
`;

export const SLogin = css`
    display: flex;
    margin-right: 5px;
    width: 98.5px;
    height: 20px;
    color: white;
    font-size: 16px;
    font-weight: 500;
`;

export const SButtons = css`
    display: flex;
    margin-top: 18px;
    width: 335px;
    height: 38px;
`;



export const SReviewButton = css`
    border: none;
    border-radius: 8px;
    width: 226px;
    height: 38px;
    font-size: 15px;
    font-weight: 700;
    color: white;
    background-color: rgb(12, 197, 164);
    cursor: pointer;
`;

export const SSpan = css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 3px 0px;
`;

export const SReviewIcon = css`
    margin-right: 3px;
    width: 22px;
    height: 18px;
`;

export const SMissionContainer = css`
    margin-left: 7px;
    width: 108px;
    height: 38px;
`;

export const SMissionButton = css`
    border: none;
    border-radius: 8px;
    width: 102px;
    height: 38px;
    font-size: 15px;
    font-weight: 700;
    color: white;
    background-color: rgb(12, 197, 164);
    cursor: pointer;
`;

export const SMissionIcon = css`
    margin-right: 3px;
    width: 20px;
    height: 17px;
`;