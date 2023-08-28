import { css } from "@emotion/react";

export const SButton = css`
    border: none;
    height: 51px;
    color: rgba(255, 255, 255, 0.7);
    background-color: rgb(6, 180, 149);
    cursor: pointer;
`;

export const SSelectedButton = css`
    border-top: none;
    border-right: none;
    border-bottom: 2px solid white;
    border-left: none;
    height: 51px;
    color: rgb(255, 255, 255);
    background-color: rgb(6, 180, 149);
    cursor: pointer;
`;

export const SContent = css`
    padding: 14px 5px;
    height: 51px;
    font-size: 17px;
    font-weight: 400;
`;

export const SSelectedContent = css`
    padding: 14px 5px;
    height: 51px;
    font-size: 17px;
    font-weight: 800;
`;

export const SContainer = css`
    flex-grow: 1;
    padding: 25px 20px;
    height: 499px;
`;

export const SBoard = css`
    margin: 0px auto;
    border: none;
    border-radius: 15px;
    padding: 34px 30px 40px 30px;
    width: 720px;
    height: 449px;
    color: white;
    background-image: linear-gradient(127deg, #717cea 6%, #4b81da 87%);
`;

export const SFlag = css`
    margin: 0px auto 15px auto;
    width: 19px;
    height: 20px;
`;

export const SFlagimg = css`
    width: 19px;
    height: 20px;
`;

export const SFirstContent = css`
    line-height: 26px;
    text-align: center;
    width: 660px;
    height: 54px;
    font-size: 20px;
`;

export const SSpan = css`
    font-weight: 900;
`;

export const SSecondContent = css`
    margin-top: 5px;
    text-align: center;
    width: 660px;
    height: 26px;
    font-size: 15px;
    color: #d1f7fe;
`;

export const SImgContianer = css`
    margin-top: 27px;
    text-align: center;
    width: 660px;
    height: 163px;
`;

export const SImg = css`
    width: 251px;
    height: 163px;
`;

export const SButtonContainer = css`
    margin-top: 22px;
    text-align: center;
    width: 660px;
    height: 46px;
`;

export const SReviewButton = css`
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 22px;
    padding: 9px 0px;
    width: 141px;
    height: 46px;
    font-size: 16px;
    line-height: 26px;
    color: white;
    background-color: transparent;
    cursor: pointer;
`;