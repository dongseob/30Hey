/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false, //ture일 경우 useEffect()가 두번씩 실행되어서 false로 변경
    swcMinify: true,
    images: {
        loader: "imgix",
        path: "https://", //https://로 시작하는 모든 이미지는 loader()적용
    },
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer(nextConfig)