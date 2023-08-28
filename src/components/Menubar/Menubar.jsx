import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style'

function Menubar({ children }) {


    return (
        <div css={S.SLayout}>
            <div css={S.SContainer}>
                {children}
            </div>
        </div>
    );
}

export default Menubar;