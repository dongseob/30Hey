//asset
import Image from "next/image";

//statement
import { useRecoilState } from "recoil";
import { SELECT_ICON_FILTER } from "../../store/atom";

//functional
import * as common from "../../js/common";

//image assets
const iconData = [
    { name: "Youtube", imgUrl: "/image/icon/youtube.png" },
    { name: "Twitch", imgUrl: "/image/icon/twitch.png" },
    { name: "NaverTV", imgUrl: "/image/icon/naverTV.png" },
    { name: "KakaoTV", imgUrl: "/image/icon/kakaoTV.png" },
    { name: "Netflix", imgUrl: "/image/icon/netflix.png" },
    { name: "AfreecaTV", imgUrl: "/image/icon/afreecaTV.png" },
    { name: "AppleTV", imgUrl: "/image/icon/appleTV.png" },
    { name: "Watcha", imgUrl: "/image/icon/watcha.png" },
    { name: "Wavve", imgUrl: "/image/icon/wavve.png" },
    { name: "CoupangPlay", imgUrl: "/image/icon/coupangPlay.png" },
    { name: "DisneyPlus", imgUrl: "/image/icon/disneyPlus.png" },
    { name: "Tving", imgUrl: "/image/icon/tving.png" },
];

const IconFilter = () => {
    const [SELECTICONFILTER, setSELECTICONFILTER] =
        useRecoilState(SELECT_ICON_FILTER);

    const selectFilter = (name) => {
        if (SELECTICONFILTER.includes(name)) {
            //중복된다면 배열에서 제거
            setSELECTICONFILTER(SELECTICONFILTER.filter((el) => el !== name));
        } else {
            //중복안되면 배열에 추가
            setSELECTICONFILTER((prev) => [...prev, name]);
        }
    };

    return (
        <div className="mt-8 md:mt-12 mx-auto">
            <div className="flex items-center">
                <div className="truncate">
                    {SELECTICONFILTER.length > 0 ? (
                        <>
                            {/* 필터 2개 이상 적용 */}
                            {SELECTICONFILTER.length > 1 ? (
                                <div className="flex truncate">
                                    <span className="text-xl xl:text-2xl font-bold tracking-tight">
                                        &nbsp;선택된 플랫폼에 대한 미디어 컨텐츠
                                    </span>
                                </div>
                            ) : (
                                //필터 1개 적용
                                <>
                                    {iconData
                                        .filter((el) =>
                                            SELECTICONFILTER.some(
                                                (el2) => el.name === el2
                                            )
                                        )
                                        .map((el) => (
                                            <div key={el.name}>
                                                <h2 className="text-xl xl:text-2xl font-bold tracking-tight">
                                                    {el.name}에서 검색된 미디어
                                                    컨텐츠
                                                </h2>
                                            </div>
                                        ))}
                                </>
                            )}
                        </>
                    ) : (
                        //필터 미적용
                        <>
                            <h2 className="text-xl xl:text-2xl font-bold tracking-tight">
                                인기 영화 및 TV 프로그램
                            </h2>
                        </>
                    )}
                </div>

                <div className="ml-auto">
                    <a
                        href="#"
                        className="text-xs md:text-sm font-semibold hover:text-slate-300 transition-all"
                        onClick={() => setSELECTICONFILTER([])}
                    >
                        초기화
                        <span aria-hidden="true">&nbsp;&#8635;</span>
                    </a>
                </div>
            </div>

            <div className="mt-2 w-full">
                {SELECTICONFILTER.length > 0 ? (
                    // 필터가 적용되었다면
                    <div className="flex gap-3 flex-wrap">
                        {iconData.map((el) => (
                                <div
                                    className={
                                        // 배열에 있는 값과 선택한 아이콘이 같은 이름인지 구별
                                        SELECTICONFILTER.includes(el.name)
                                            ? "border-g w-10 md:w-12 xl:w-14 h-10 md:h-12 xl:h-14 rounded-lg relative my-2 transition-all opacity-100 cursor-pointer"
                                            : "border-g w-10 md:w-12 xl:w-14 h-10 md:h-12 xl:h-14 rounded-lg relative my-2 transition-all opacity-30 cursor-pointer"
                                    }
                                    id={el.name}
                                    onClick={() => selectFilter(el.name)}
                                >
                                    <Image
                                        src={el.imgUrl}
                                        alt={el.name}
                                        layout="fill"
                                        objectFit="contain"
                                        unoptimized={true}
                                        className="rounded-md"
                                    ></Image>
                                </div>
                        ))}
                    </div>
                ) : (
                    // 필터가 적용이 안되었다면
                    <div className="flex gap-3 flex-wrap">
                        {iconData.map((el) => (
                            <div
                                className="border-g w-10 md:w-12 xl:w-14 h-10 md:h-12 xl:h-14 relative my-2 transition-all cursor-pointer"
                                id={el.name}
                                key={el.name}
                                onClick={() => selectFilter(el.name)}
                            >
                                <Image
                                    src={common.dynamicIcon(el.name)}
                                    alt={el.name}
                                    layout="fill"
                                    objectFit="contain"
                                    unoptimized={true}
                                    className="rounded-md"
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};
export default IconFilter;
