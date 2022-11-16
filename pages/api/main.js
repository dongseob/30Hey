import * as Common from "../../js/common";
const axios = require("axios");

export default async function handler(req, res) {
    let result = [];

    //youtube
    await axios({
        method: "GET",
        url: "https://www.googleapis.com/youtube/v3/videos",
        params: {
            key: "AIzaSyBcWEWqJ3a-YxXit5XSA7oxL2vnDWUzEig",
            part: "snippet,contentDetails,statistics",
            chart: "mostPopular",
            regionCode: "kr",
            maxResults: 5,
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

    //twitch
    await axios({
        method: "get",
        url: "https://api.twitch.tv/helix/streams?language=ko&first=5",
        headers: {
            Authorization: "Bearer ktoh70fz1pwac861l9xwh899cc2rfy",
            "Client-Id": "lt5h0as8sp509eef2an2jph0e97qwx",
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

    // await fetch("https://api.twitch.tv/helix/streams?language=ko&first=9", {
    //     method: "get",
    //     headers: {
    //         Authorization: "Bearer oimn0lk86ydwcxvqacucwhzfkq8hjo",
    //         "Client-Id": "g901hktaiu6c4v5dt4vkjoptq5vjtk",
    //     },
    // })
    //     .then((response) => response.json())
    //     .then((data) => {
    //         let items = data.data;

    //         if (items) {
    //             for (let i = 0; i < items.length; i++) {
    //                 results.push({
    //                     id: items[i].id,                                        //영상 아이디
    //                     title: items[i].title,                                  //영상 제목
    //                     href: "https://www.twitch.tv/" + items[i].user_login,   //영상 주소
    //                     imgUrl: items[i].thumbnail_url.replace(
    //                         "{width}x{height}",
    //                         "640x480"
    //                     ),                                                      //썸네일 경로
    //                     channel: items[i].user_name,                            //채널명
    //                     quality: items[i].viewer_count,                         //시청자 수 (라이브 영상만 해당)
    //                     date: items[i].started_at,                              //라이브 시작 시간 (라이브 영상만 해당)
    //                     tag: items[i].tag_ids,                                  //영상에 등록된 태그(트위치는 정의된 태그가 없어서 현재 의미x => 서칭해봐야됨)
    //                     platform: "Twitch",                                     //플랫폼 종류
    //                     // type2: "Live", //실시간 스트리밍 유무
    //                     // hit: items[i].viewer_count, //moaboda의 인기도 점수
    //                 });
    //             }
    //         }
    //     });

    // // TMDB

    // await axios.all([axios.get("https://api.themoviedb.org/3/movie/popular?api_key=e134931ac620c57b8200b44c971fd541&language=ko-KR&page=1"), axios.get("https://api.themoviedb.org/3/movie/popular?api_key=e134931ac620c57b8200b44c971fd541&language=ko-KR&page=2")])
    // .then(
    //     await axios.spread(async(res1, res2) => {
    //         for(let i = 0; i < res1.data.results.length; i++){
    //             await axios.get("https://api.themoviedb.org/3/movie/" + res1.data.results[i].id + "?api_key=e134931ac620c57b8200b44c971fd541&language=ko")
    //             .then(function(resp) {
    //                 if((resp.data.homepage).includes('netflix')){
    //                     console.log(resp.data);
    //                     results.push({
    //                         id: resp.data.id,                                                                       //영상 아이디
    //                         title: resp.data.title,                                                                 //영상 제목
    //                         href: resp.data.homepage,                                                               //영상 주소
    //                         imgUrl: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/'+resp.data.poster_path,   //썸네일 경로
    //                         channel: '/image/ott/neflix.svg',                                                       //채널명
    //                         quality: resp.data.popularity,                                                          //총 재생수
    //                         date: resp.data.release_date,                                                           //업로드일
    //                         tag: resp.data.genres,                                                                  //영상에 등록된 태그
    //                         platform: "Netflix",                                                                    //플랫폼 종류
    //                     });
    //                 }
    //             })
    //         }
    //         for(let i = 0; i < res2.data.results.length; i++){
    //             await axios.get("https://api.themoviedb.org/3/movie/" + res2.data.results[i].id + "?api_key=e134931ac620c57b8200b44c971fd541&language=ko")
    //             .then(function(resp) {
    //                 if((resp.data.homepage).includes('netflix')){
    //                     console.log(resp.data);
    //                     results.push({
    //                         id: resp.data.id,                                                                       //영상 아이디
    //                         title: resp.data.title,                                                                 //영상 제목
    //                         href: resp.data.homepage,                                                               //영상 주소
    //                         imgUrl: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/'+resp.data.poster_path,   //썸네일 경로
    //                         channel: '/image/ott/neflix.svg',                                                       //채널명
    //                         quality: resp.data.popularity,                                                          //총 재생수
    //                         date: resp.data.release_date,                                                           //업로드일
    //                         tag: resp.data.genres,                                                                  //영상에 등록된 태그
    //                         platform: "Netflix",                                                                    //플랫폼 종류
    //                     });
    //                 }
    //             })
    //         }

    //     })
    // )

    // console.log("result : ", result);

    res.send({ result: result });
}
