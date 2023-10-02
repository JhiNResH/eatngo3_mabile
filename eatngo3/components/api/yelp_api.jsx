// 在 YelpAPI.js 文件中
import React from 'react'; // 导入 React，如果你的文件中包含 JSX 代码
import { fetch } from 'react-native'; // 导入 React Native 的 fetch 函数

const apiKey = 'YOUR_YELP_API_KEY';
const apiUrl = `https://api.yelp.com/v3/businesses/search?term=restaurant&location=San+Francisco`;

export const fetchYelpData = () => {
    return fetch(apiUrl, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${apiKey}`,
        },
    })
        .then((response) => response.json())
        .then((data) => {
            // 处理获取到的商店数据
            return data.businesses;
        })
        .catch((error) => {
            // 处理错误
            console.error('Error fetching Yelp data:', error);
            throw error;
        });
};
