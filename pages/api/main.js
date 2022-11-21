import * as Common from "../../js/common";
const axios = require("axios");

export default async function handler(req, res) {
    let result = [];
    
    let maxResult = req.query.count; //요청받은 최대 출력 개수
    let filter = req.query.filter; //선택된아이콘 필터 (default: "all")
    
    //youtube
    if (filter === "all" || filter.includes("Youtube")) {
        await axios({
            method: "GET",
            url: "https://www.googleapis.com/youtube/v3/videos",
            params: {
                key: "AIzaSyBcWEWqJ3a-YxXit5XSA7oxL2vnDWUzEig",
                part: "snippet,contentDetails,statistics",
                chart: "mostPopular",
                regionCode: "kr",
                maxResults: maxResult,
            },
        }).then((resp) => {
            const items = resp.data.items;

            if (items) {
                for (let i = 0; i < items.length; i++) {
                    result.push({
                        id: items[i].id, //영상 아이디
                        title: items[i].snippet.title, //영상 제목
                        href: "https://www.youtube.com/watch?v=" + items[i].id, //영상 주소
                        imgUrl: items[i].snippet.thumbnails.high.url, //썸네일 경로
                        channelName: items[i].snippet.channelTitle, //채널명
                        viewCount: items[i].statistics.viewCount, //총 재생수
                        uploadDate: items[i].snippet.publishedAt, //업로드일
                        tags: items[i].snippet.tags, //영상에 등록된 태그
                        playTime: Common.youtubePlayTime(
                            items[i].contentDetails.duration
                        ), //재생시간
                        platform: "Youtube", //플랫폼 종류
                        heyScore: Common.youtubeHeyScore(
                            items[i].statistics.viewCount,
                            items[i].statistics.likeCount,
                            items[i].statistics.favoriteCount,
                            items[i].statistics.commentCount
                        ), //30Hey의 점수
                    });
                }
            }
        });
    }

    //twitch
    if (filter === "all" || filter.includes("Twitch")) {
        await axios({
            method: "get",
            url: "https://api.twitch.tv/helix/streams",
            headers: {
                Authorization: "Bearer ktoh70fz1pwac861l9xwh899cc2rfy",
                "Client-Id": "lt5h0as8sp509eef2an2jph0e97qwx",
            },
            params: {
                first: maxResult,
                language: "ko",
            },
        }).then((resp) => {
            const items = resp.data.data;

            if (items) {
                for (let i = 0; i < items.length; i++) {
                    result.push({
                        id: items[i].id, //영상 아이디
                        title: items[i].title, //영상 제목
                        href: "https://www.twitch.tv/" + items[i].user_login, //영상 주소
                        imgUrl: items[i].thumbnail_url.replace(
                            "{width}x{height}",
                            "640x480"
                        ), //썸네일 경로
                        channelName: items[i].user_name, //채널명
                        liveViewCount: items[i].viewer_count, //시청자 수 (라이브 영상만 해당)
                        liveDate: Common.twitchLiveDate(items[i].started_at), //라이브 시작 시간 (라이브 영상만 해당)
                        tags: items[i].tag_ids, //영상에 등록된 태그(트위치는 정의된 태그가 없어서 현재 의미x => 서칭해봐야됨)
                        platform: "Twitch", //플랫폼 종류
                        heyScore: items[i].viewer_count * 50000, //30Hey의 점수
                    });
                }
            }
        });
    }

    // console.log("result : ", result);

    res.send({ result: result });
}
