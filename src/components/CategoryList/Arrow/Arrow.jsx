import React from "react";
/** @jsxImportSource @emotion/react */
import * as S from './Style'
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'

function Arrow({
    children,
    disabled,
    onClick
}) {
    return (
        <button
        disabled={disabled}
        onClick={onClick}
        css={S.SButton(disabled)}
        >
        {children}
        </button>
    );
}

export function LeftArrow() {
    const {
        isFirstItemVisible,
        scrollPrev,
        visibleElements,
        initComplete
    } = React.useContext(VisibilityContext);

    const [disabled, setDisabled] = React.useState(
        !initComplete || (initComplete && isFirstItemVisible)
    );
    React.useEffect(() => {
        // NOTE: detect if whole component visible
        if (visibleElements.length) {
        setDisabled(isFirstItemVisible);
        }
    }, [isFirstItemVisible, visibleElements]);

    return (
        <Arrow disabled={disabled} onClick={() => scrollPrev()}>
            <BiChevronLeft />
        </Arrow>
    );
}

export function RightArrow() {
    const { isLastItemVisible, scrollNext, visibleElements } = React.useContext(
        VisibilityContext
    );

    const [disabled, setDisabled] = React.useState(
        !visibleElements.length && isLastItemVisible
    );
    React.useEffect(() => {
        if (visibleElements.length) {
        setDisabled(isLastItemVisible);
        }
    }, [isLastItemVisible, visibleElements]);

    return (
        <Arrow disabled={disabled} onClick={() => scrollNext()}>
            <BiChevronRight />
        </Arrow>
    );
}