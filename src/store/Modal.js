import { atom } from "recoil";

export const isModalShowState = atom({
    key: "isModalShow",
    default: false
});

export const isLocationModalShowState = atom({
    key: "isLocationModalShow",
    default: false
});
