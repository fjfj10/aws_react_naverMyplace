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