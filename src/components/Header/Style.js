import { css } from "@emotion/react";

export const SLayout = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 1, 0.04) ;
    padding: 8px 18px 8px 15px;
    width: 100%;
    height: 53px;
    background-color: rgb(6, 180, 149);
`;

export const SHeadStart = css`
    display: flex;
    flex-direction: row;
    height: 36px;
    padding: 7px 0px;
`;

export const SNaverButton = css`
    border: none;
    padding: 6px 5px 4px 5px;
    font-size: 10px;
    color: rgb(6, 180, 149);
    background-color: white;
    cursor: pointer;
`;

export const SMyplaceButton = css`
    margin-left: 5px;
    border: none;
    padding: 0px 2px;
    font-size: 15px;
    color: white;
    background-color: rgb(6, 180, 149);
    cursor: pointer;
`;

export const SHeadEnd = css`
    display: flex;
    flex-direction: row;
    padding: 7px 0px;
`;

export const SCouponButton = css`
    border: none;
    padding: 5px 2px;
    width: 36px;
    height: 36px;
    font-size: 23px;
    color: white;
    background-color: rgb(6, 180, 149);
    cursor: pointer;
`;

export const SCouponImg = css`
    width: 32px;
    height: 26px;
`;

export const SMenuButton = css`
    border: none;
    padding: 5px 2px;
    width: 32px;
    height: 36px;
    font-size: 23px;
    color: white;
    background-color: rgb(6, 180, 149);
    cursor: pointer;
`;