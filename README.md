# 104homework
- 注意事項：
- 解析度 1920 下必須大小一致。
- 要包含頁面區塊的全功能與變版。
- 內容使用 vue 資料綁定。
- 相容性：請支援 IE 11 與最新兩版的主流瀏覽器（chrome、safari、edge）。
- 會針對以下幾點作為評核標準：
- HTML 標籤與結構選用。
- 樣式與變版處理。
- 功能和資料結構。
- 參考網址：https://kad.events.104.com.tw/t-ambassador_20210826/
# 專案紀錄與說明
- 專案page:https://abc820219.github.io/104HOMEWORK/
## 專案初始化設定
- node版本使用v12.18.4。
- 配置專案eslint設定自動格式化。
- 配置assets。
- images（圖片）。
- modules (放js工具)。
- scss (放scss)。
- components (放組件)。
## SCSS規劃
- _reset 使用https://meyerweb.com/eric/tools/css/reset/
- _base 放一些初始化設定。
- _extend 放置要寫很多代碼的固定樣式。
- _keyFrame 放置動畫特效。
- _mixin 放置斷點與可變動樣式。
- _utilities 放置直接寫在tag上的樣式。
- _variable 放置頁面上比較常見的顏色與字體大小。
- all.scss 部分引入至此檔案再引入到頁面上做開發。
## 切版規劃 卡片部分
- List（右） --> 主要邏輯放在ItContent不拆出來。
- Ｈeader（上） --> ItContentHeader.vue。
- Taiwain （左）--> ItContentTaiwan。
- Hints （下）--> ItContentHints。
## 資料規劃
- 因為結構比較簡單不使用vuex,資料定義在最上層直接使用props傳遞。
## 優化部分
- 使用Tinypng壓縮圖片。
- 使用預渲染套件優化首屏加載與SEO。
## 作業製作思考流程
1. 分析專案需求。
2. 依照需求建置專案環境，資料夾，圖檔等等準備好。
3. 開始切版電腦版 --> 手機板。
4. 切完版後撰寫功能與拆分組件。
5. 測試兼容性與功能。
6. 優化代碼與撰寫文件。
7. 打包部屬至gitHub。

