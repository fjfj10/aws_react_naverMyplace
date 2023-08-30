import React from "react";
/** @jsxImportSource @emotion/react */
import * as S from './Style'
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import 'react-horizontal-scrolling-menu/dist/styles.css';

import { LeftArrow, RightArrow } from "../CategoryList/Arrow/Arrow";
import { Card } from "../CategoryList/Card/Card";

const categoryList = ['한식', '테마파크', '카페', '피크닉', '양식', '등산/트레킹', '일식', '아이와 함께', '역사유적',
'분식/치킨', '숙박', '중식', '체험관광', '아시아/퓨전음식', '캠핑', '뷔페/레스토랑', '낚시'];


const getItems = () =>
    categoryList.map((category) => ({ id: category }));

    console.log(categoryList.map((category) => category.id));
function CategoryList(props) {
    const [items] = React.useState(getItems);
    const [selected, setSelected] = React.useState("");

     // NOTE: for select item
    const handleItemClick = (itemId) => () => setSelected(itemId);
    return (
        <div css={S.SScrollMenu}>
            <ScrollMenu
            LeftArrow={LeftArrow}
            RightArrow={RightArrow}
            >
            {items.map(({ id }) => (
                <Card
                    title={id}
                    key={id}
                    onClick={handleItemClick(id)}
                    selected={id === selected}
                />
            ))}
        </ScrollMenu>
        </div>
        
    );
}

export default CategoryList;