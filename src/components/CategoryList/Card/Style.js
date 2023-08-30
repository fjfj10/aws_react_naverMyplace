import { css } from "@emotion/react";

export const SButton = (selected) => css`
    margin: 0px 3px;
    border: 1px solid rgb(234, 238, 242);
    border-radius: 19px;
    padding: 0px 13px;
    width: auto;
    height: 36px;
    color: ${selected ? "#fff" : "#666"};
    font-size: 14px;
    font-weight: ${selected ? "600" : "500"};
    background-color: ${selected ? "#424242" : "transparent"};
    cursor: pointer;
    user-select: none;
    white-space: nowrap;
`;