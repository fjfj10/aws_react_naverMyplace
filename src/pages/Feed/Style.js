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
