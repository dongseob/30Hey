# 30Hey


## Document

인기 동영상 정보 플랫폼

![Image Title](/public/image/30Hey.jpg)

<p align="center">
  <a href="https://30-hey.vercel.app/" target="_blank"><strong>Explore Page »</strong></a>
</p>

<p align="center">
    <a href="mailto:jds3567@gmail.com" target="_blank">
        jds3567@gmail.com.com
    </a>
</p>

<br>

## Status
[![Github All Releases](https://img.shields.io/github/languages/count/dongseob/30Hey )]()<!-- 사용언어 수 -->
[![Github All Releases](https://img.shields.io/github/languages/top/dongseob/30Hey )]()<!-- 최다사용언어 -->
<!-- [![Github All Releases](https://img.shields.io/github/downloads/dongseob/30Hey/total)]()레포 다운로드 수 -->
[![Github All Releases](https://img.shields.io/github/repo-size/dongseob/30Hey)]()<!-- 레포 사이즈 -->
[![Github All Releases](https://img.shields.io/github/commit-activity/m/dongseob/30Hey)]()<!-- 달에 몇번 커밋했는지 -->
[![Github All Releases](https://img.shields.io/github/last-commit/dongseob/30Hey)]()<!-- 마지막커밋 날짜 -->

<br>

## Content

<Blockquote>
  모든 컨텐츠의 정렬 방식은 자체적으로 계산한 heyScore의 기준으로 정렬되었다.
</Blockquote>

<br>

### Youtube API
```
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
```

### Twitch API
```
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
```
