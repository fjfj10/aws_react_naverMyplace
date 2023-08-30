import { css } from "@emotion/react";


export const SButton = (disabled) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: none;
    opacity: ${disabled ? "0" : "1"};
    user-select: none;
    color: white;
    background-color: transparent;
    cursor: pointer;
    &:hover{
        color: #666;
    }
`;