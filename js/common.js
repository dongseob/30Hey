/**
 * 각 플랫폼에 대한 아이콘을 map()할 때, 출력
 * @param val
 * @returns
 */
export const dynamicIcon = (val) => {
    let returnValue = "";

    switch (val) {
        case "Youtube":
            returnValue = "/image/icon/youtube.png";
            break;
        case "Twitch":
            returnValue = "/image/icon/twitch.png";
            break;
        case "AfreecaTV":
            returnValue = "/image/icon/afreecaTV.png";
            break;
        case "AppleTV":
            returnValue = "/image/icon/appleTV.png";
            break;
        case "CoupangPlay":
            returnValue = "/image/icon/coupangPlay.png";
            break;
        case "DisneyPlus":
            returnValue = "/image/icon/disneyPlus.png";
            break;
        case "HboMax":
            returnValue = "/image/icon/hboMax.png";
            break;
        case "KakaoTV":
            returnValue = "/image/icon/kakaoTV.png";
            break;
        case "NaverTV":
            returnValue = "/image/icon/naverTV.png";
            break;
        case "Netflix":
            returnValue = "/image/icon/netflix.png";
            break;
        case "PrimeVideo":
            returnValue = "/image/icon/primeVideo.png";
            break;
        case "Reels":
            returnValue = "/image/icon/reels2.png";
            break;
        case "Shorts":
            returnValue = "/image/icon/shorts.png";
            break;
        case "Tiktok":
            returnValue = "/image/icon/tiktok.png";
            break;
        case "Tving":
            returnValue = "/image/icon/tving.png";
            break;
        case "Watcha":
            returnValue = "/image/icon/watcha.png";
            break;
        case "Wavve":
            returnValue = "/image/icon/wavve.png";
            break;
    }

    return returnValue;
};
