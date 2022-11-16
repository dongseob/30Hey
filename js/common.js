// 각 플랫폼에 대한 아이콘을 map()할 때, 출력
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

//유튜브 영상의 재생시간 구하는 함수
export const youtubePlayTime = (val) => {
    let data = "";

    //1차 정규화 작업 및 배열로 생성
    data =
        /^PT(?:(?<hour>\d{1,2})H)?(?:(?<minute>\d{1,2})M)?(?:(?<seconds>\d{1,2})S)?$/i.exec(
            val
        );

    let result = "";
    //2차 생성된 배열의 길이로 시,분,초 계산
    data.map((el, i) => {
        if (i > 0 && el !== undefined) {
            if (i === 3) {
                //초에는 ":"가 필요x
                result += el;
            } else {
                result += el + ":";
            }
        }
    });

    // console.log("result : ", result);
    return result;
};

export const youtubeHeyScore = (
    viewCount,
    likeCount,
    favoriteCount,
    commentCount
) => {
    let result = null;

    const viewVal = Number(viewCount);
    const likeVal = Number(likeCount);
    const favoriteVal = Number(favoriteCount);
    const commentVal = Number(commentCount);

    //(조회수 + 좋아요수) * (즐겨찾기 + 댓글수) /12
    result = Math.round(
        ((viewVal + likeVal) * (favoriteVal + commentVal)) / 12
    );

    // console.log(result)

    return result;
};

export const twitchLiveDate = (val) => {
    const date2 = new Date(val);  //영상의 date를 한국표준시로 변경
    
    const date = new Date(); //현재 시각
    let hour = date.getHours() - date2.getHours();
    let minute = date.getMinutes() - date2.getMinutes();
    let second = date.getSeconds() - date2.getSeconds();
    
    //음수일 경우, maximum에서 뺀값
    if (Math.sign(hour) === -1) {
      hour = 24 - hour * -1;
    }
    if (Math.sign(minute) === -1) {
      minute = 60 - minute * -1;
    }
    if (Math.sign(second) === -1) {
      second = 60 - second * -1;
    }
    
    // console.log(hour + ":" + minute + ":" + second);
    
    const result = hour + ":" + minute + ":" + second;
    
    return result;
}
