import { css } from "@emotion/react";

export const SLayout = css`
    position: relative;
`;

export const SMain = css`
    position: absolute;
    width: 100%;
`;

export const SModal= (isModalshow) => css`
    position: absolute;
    z-index: 3;
    display: ${isModalshow ? "flex" : "none"};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 963px;
    background-color: rgba(0, 0, 0, 0.7);
`;

export const SAlert = css`
    border-radius: 12px;
    width: 335px;
    height: 180px;
    background-color: white;
`;

export const SContent = css`
    text-align: center;
    line-height: 20px;
    padding: 36px 18px 21px 18px;
    font-size: 18px;
    font-weight: 700;
    height: 126px;
`;

export const SButtonContainer = css`
    border-top: 1px solid rgb(236, 240, 242);
    width: 335px;
    height: 54px;
`;

export const SButton = css`
    border: none;
    border-radius: 12px;
    width: 335px;
    height: 53px;
    font-size: 16px;
    font-weight: 400;
    color: #00b49b;
    background-color: white;
    cursor: pointer;
`;

export const SLocationModal= (isLocationModalShow) => css`
    position: absolute;
    z-index: 3;
    display: ${isLocationModalShow ? "flex" : "none"};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 963px;
    background-color: rgba(0, 0, 0, 0.7);
`;

export const SLAlert = css`
    border-radius: 12px;
    width: 340px;
    height: 153px;
    background-color: white;
`;

export const SLContent = css`
    text-align: center;
    padding: 36px 15px 21px 15px;
    font-size: 15px;
    height: 99px;
    color: #666;
`;

export const SLButtonContainer = css`
    display: flex;
    border-top: 1px solid rgb(236, 240, 242);
    width: 335px;
    height: 54px;
`;

export const SNoButton = css`
    border: none;
    border-radius: 12px;
    width: 335px;
    height: 53px;
    font-size: 16px;
    font-weight: 400;
    color: #242424;
    background-color: white;
    cursor: pointer;
`;

export const SYesButton = css`
    border: none;
    border-left: 1px solid rgb(236, 240, 242);
    border-radius: 12px;
    width: 335px;
    height: 53px;
    font-size: 16px;
    font-weight: 400;
    color: #00b49b;
    background-color: white;
    cursor: pointer;
`;