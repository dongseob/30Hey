import { atom } from "recoil";
//atom의 모든 변수명은 대문자로 구분

/**
 * 메인 페이지 > 플랫폼 필터에 필요한 배열
 */
export const SELECT_ICON_FILTER = atom({
    key: "SELECT_ICON_FILTER",
    default: [],
});

/**
 * 결과 페이지 > 태그 필터에 필요한 배열
 */
 export const SELECT_FILTER = atom({
    key: "SELECT_FILTER",
    default: [],
});

/**
 * 결과 페이지 > 플랫폼 필터에 필요한 배열
 */
 export const SELECT_PLATFORM_FILTER = atom({
    key: "SELECT_PLATFORM_FILTER",
    default: [],
});