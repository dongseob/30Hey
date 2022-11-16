//funcional
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import * as common from "../../js/common";

import axios from "axios";
import React from "react";

//recoil
import { SELECT_ICON_FILTER } from "../../store/atom";
import { useRecoilState } from "recoil";

const MainList = () => {
    const [data, setData] = useState([]);
    const [SELECTICONFILTER] = useRecoilState(SELECT_ICON_FILTER);
    const [viewCount, setViewCount] = useState(null); //현재 출력 개수
    const [dataLength, setDataLength] = useState(null); //데이터 총 개수
    const moreRef = useRef(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        await axios({
            method: "GET",
            url: "/api/main",
            params: {
                count: 8, //요청 데이터 개수
                filter: SELECTICONFILTER.toString(), //요청 플랫폼 필터
            },
        }).then((res) => {
            console.log(res.data.result);
            setData(res.data.result);
        });
    };

    useEffect(() => {
        console.log(data);
    }, [data]);

    //아이콘 필터가 적용되었을 때
    useEffect(() => {
        // const fnMainFilterList = async () => {
        //     await axios({
        //         method: "GET",
        //         url: "/api/popular",
        //         params: {
        //             count: 8, //요청 데이터 개수
        //             filter: SELECTICONFILTER.toString(), //요청 플랫폼 필터
        //         },
        //     })
        //         .then((res) => {
        //             let mainData = res.data.data;
        //             let maxLength = res.data.maxLength;
        //             setData(mainData);
        //             setDataLength(maxLength);
        //             // console.log("data : ", mainData);
        //         })
        //         .catch((e) => {
        //             console.log("error: ", e);
        //         });
        // };
        // fnMainFilterList();
    }, [SELECTICONFILTER]);

    //더보기 버튼 함수
    // const fnMore = async () => {
    //     if(SELECTICONFILTER.length > 0){
    //         await axios({
    //             method: "GET",
    //             url: "/api/popular",
    //             params: {
    //                 count: viewCount + 8, //요청 데이터 개수
    //                 filter: SELECTICONFILTER.toString(), //요청 플랫폼 필터
    //             },
    //         })
    //             .then((res) => {
    //                 let mainData = res.data.data;
    //                 setData(mainData);
    //                 setViewCount(viewCount + 8);

    //                 if (viewCount + 8 > dataLength)
    //                     moreRef.current.classList.add("hidden"); //더 이상 불러올 데이터가 없다면 display:none
    //             })
    //             .catch((e) => {
    //                 console.log("error: ", e);
    //             });
    //     }else{
    //         await axios({
    //             method: "GET",
    //             url: "/api/popular",
    //             params: {
    //                 count: viewCount + 8, //요청 데이터 개수
    //             },
    //         })
    //             .then((res) => {
    //                 let mainData = res.data.data;
    //                 setData(mainData);
    //                 setViewCount(viewCount + 8);

    //                 if (viewCount + 8 > dataLength)
    //                     moreRef.current.classList.add("hidden"); //더 이상 불러올 데이터가 없다면 display:none
    //             })
    //             .catch((e) => {
    //                 console.log("error: ", e);
    //             });
    //     }

    // };

    return (
        <div className="mt-8 md:mt-12 flex flex-col gap-6 relative">
            <div className="bg-slate-800/60 px-4 py-6 rounded-xl shadow-xl">
                <div className="mx-auto">
                    <div className="items-baseline flex pb-4">
                        <h2 className="text-xl xl:text-2xl font-bold tracking-tight">
                            🔥&nbsp;인기 컨텐츠
                        </h2>
                    </div>

                    {data.length < 1 ? (
                        <>
                            <div className="grid gap-y-10 gap-x-6 xl:gap-x-8 grid-cols-2 md:grid-cols-3 2xl:grid-cols-4">
                                {new Array(8).fill().map((el) => (
                                    <div
                                        key={el}
                                        className="h-56 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-slate-700 lg:aspect-none relative animate-pulse2"
                                    ></div>
                                ))}
                            </div>
                        </>
                    ) : (
                        <div className="grid gap-y-10 gap-x-6 xl:gap-x-8 grid-cols-2 md:grid-cols-3 2xl:grid-cols-4">
                            <>
                                {data
                                    .sort(function (a, b) {
                                        //heyScore가 높은 순으로
                                        return b.heyScore - a.heyScore;
                                    })
                                    .map((el, i) => (
                                        <>
                                            <div key={el.id}>
                                                <div className="relative">
                                                    <div className="h-56 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-slate-800 lg:aspect-none relative">
                                                        <Image
                                                            src={el.imgUrl}
                                                            alt={el.title}
                                                            layout="fill"
                                                            objectFit="contain"
                                                            priority={true}
                                                            className="cursor-pointer hover:scale-110 transition-all duration-500"
                                                            unoptimized={true}
                                                            onClick={() => {
                                                                window.open(
                                                                    el.href,
                                                                    "_blank"
                                                                );
                                                            }}
                                                        ></Image>
                                                        <div className="absolute top-0 left-0 w-8 h-8">
                                                            <Image
                                                                src={common.dynamicIcon(
                                                                    el.platform
                                                                )}
                                                                alt={el.title}
                                                                layout="fill"
                                                                objectFit="contain"
                                                                unoptimized={
                                                                    true
                                                                }
                                                                className="rounded-md bg-red-500"
                                                            />
                                                        </div>
                                                        {/* 데이터 중 playTime이 존재 한다면 */}
                                                        {el.playTime !==
                                                        undefined ? (
                                                            <div className="absolute top-0 right-0 w-auto rounded-md py-1 px-2 bg-black/80 text-xs text-center">
                                                                <span>
                                                                    {
                                                                        el.playTime
                                                                    }
                                                                </span>
                                                            </div>
                                                        ) : null}
                                                        {/* 데이터 중 liveDate가 존재 한다면 */}
                                                        {el.liveDate !==
                                                        undefined ? (
                                                            <>
                                                                {/* 생방 시간 표시 */}
                                                                <div className="absolute top-0 right-0 w-auto rounded-md py-1 px-2 bg-black/80 text-xs text-center">
                                                                    <span>
                                                                        &nbsp;-
                                                                        {
                                                                            el.liveDate
                                                                        }
                                                                    </span>
                                                                </div>

                                                                {/* 생방 뱃지 */}
                                                                <div className="absolute bottom-0 right-0 w-auto rounded-md py-1 px-2 bg-red-600 text-xs text-center font-semibold">
                                                                    <span>
                                                                        Live
                                                                    </span>
                                                                </div>
                                                            </>
                                                        ) : null}
                                                    </div>
                                                    <div>
                                                        <h3 className="text-sm font-semibold w-full lg:text-base break-all line-clamp-2 mt-2">
                                                            {el.title}
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    ))}
                            </>
                        </div>
                    )}
                </div>

                {/* 더보기 버튼 */}
                <div ref={moreRef}>
                    <div className="mt-6"></div>
                    <button
                        className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 hover:from-black/90 transition-all duration-700 left-0 text-center rounded-b-xl py-3 text-xs"
                        onClick={() => fnMore()}
                    >
                        더보기
                    </button>
                </div>
            </div>
        </div>
    );
};
export default MainList;
