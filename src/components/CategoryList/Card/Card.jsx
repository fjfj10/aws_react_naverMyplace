import React from "react";
/** @jsxImportSource @emotion/react */
import * as S from './Style'

export function Card({
    selected,
    onClick,
    title
}) {

    return (
        <button
        onClick={() => onClick()}
        css={S.SButton(selected)}
        tabIndex={0}
        className="card"
        >
            {title}
        </button>
    );
}