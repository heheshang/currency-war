# 历史人物照片

此目录包含《货币战争》纪录片系列中使用的历史人物照片。

## 照片来源

由于维基百科在国内无法访问，推荐使用以下替代方案：

### 国内可访问的图片来源

1. **必应图片** - https://www.bing.com/images
   - 搜索："[人物英文名] portrait"
   - 例如："Nathan Rothschild portrait"
   - 下载高清照片，保存到 `public/assets/figures/`

2. **百度图片** - https://image.baidu.com
   - 搜索："[人物英文名] 肖像"
   - 选择历史风格的照片

3. **历史学习网站**
   - 百度百科 - https://baike.baidu.com/
   - 中科院历史上的今天 - https://www.lsbin.cn/
   - 各大学图书馆数字化档案

4. **代理/VPN访问维基百科**
   - 如果有条件，可以使用代理或VPN访问维基百科
   - 下载原始高清照片

### 照片文件命名规范

使用人物的ID作为文件名：

```
nathan_rothschild.jpg    - 内森·罗斯柴尔德
andrew_jackson.jpg       - 安德鲁·杰克逊
jp_morgan.jpg            - J.P.摩根
benjamin_strong.jpg      - 本杰明·斯特朗
```

## 手动下载步骤

### 方法一：使用必应图片

1. 访问 https://www.bing.com/images
2. 搜索 "Nathan Rothschild portrait"
3. 选择高清、正面的人物肖像
4. 下载并保存到 `public/assets/figures/nathan_rothschild.jpg`

### 方法二：使用百度百科

1. 访问 https://baike.baidu.com/
2. 搜索人物英文名或中文名
3. 找到历史人物的肖像照片
4. 右键保存图片到 `public/assets/figures/` 目录

### 方法三：查看参考链接

每个历史人物的维基百科链接保存在 `src/components/characters/historicalFigures.ts` 文件中：

```typescript
nathan_rothschild: {
  sourceUrl: "https://commons.wikimedia.org/wiki/File:Nathan_Mayer_Rothschild.jpg",
  // 如果可以访问维基百科，可以使用此链接
}
```

## 完整人物列表

### Episode 02 - 罗斯柴尔德家族

| ID                 | 英文名                       | 中文名                   | 文件名 |
| ------------------ | ---------------------------- | ------------------------ | ------ |
| mayer_rothschild   | Mayer Amschel Rothschild     | 老梅耶·罗斯柴尔德        |
| nathan_rothschild  | Nathan Mayer Rothschild      | 内森·梅耶·罗斯柴尔德     |
| james_rothschild   | James de Rothschild          | 詹姆斯·罗斯柴尔德        |
| salomon_rothschild | Salomon Mayer von Rothschild | 所罗门·梅耶·罗斯柴尔德   |
| amschel_rothschild | Amschel Mayer von Rothschild | 阿姆谢尔·梅耶·罗斯柴尔德 |
| karl_rothschild    | Carl Mayer von Rothschild    | 卡尔·梅耶·罗斯柴尔德     |

### Episode 03 - 历任总统

| ID                 | 英文名             | 中文名            | 文件名 |
| ------------------ | ------------------ | ----------------- | ------ |
| alexander_hamilton | Alexander Hamilton | 亚历山大·汉密尔顿 |
| thomas_jefferson   | Thomas Jefferson   | 托马斯·杰斐逊     |
| andrew_jackson     | Andrew Jackson     | 安德鲁·杰克逊     |
| abraham_lincoln    | Abraham Lincoln    | 亚伯拉罕·林肯     |

### Episode 04 - 美联储创始人

| ID                 | 英文名              | 中文名             | 文件名 |
| ------------------ | ------------------- | ------------------ | ------ |
| woodrow_wilson     | Woodrow Wilson      | 伍德罗·威尔逊      |
| jp_morgan          | J. P. Morgan        | 约翰·皮尔庞特·摩根 |
| john_d_rockefeller | John D. Rockefeller | 约翰·洛克菲勒      |
| nelson_aldrich     | Nelson W. Aldrich   | 纳尔逊·奥尔德里奇  |
| frank_vanderlip    | Frank A. Vanderlip  | 弗兰克·范德利普    |
| henry_davison      | Henry P. Davison    | 亨利·戴维森        |
| benjamin_strong    | Benjamin Strong Jr. | 本杰明·斯特朗      |
| paul_warburg       | Paul Warburg        | 保罗·沃伯格        |

### Episode 05 - 大萧条时期

| ID                 | 英文名                | 中文名          | 文件名 |
| ------------------ | --------------------- | --------------- | ------ |
| franklin_roosevelt | Franklin D. Roosevelt | 富兰克林·罗斯福 |
| herbert_hoover     | Herbert Hoover        | 赫伯特·胡佛     |

### 其他人物

| ID              | 英文名          | 中文名          | 文件名 |
| --------------- | --------------- | --------------- | ------ |
| nicholas_biddle | Nicholas Biddle | 尼古拉斯·比德尔 |
| george_peabody  | George Peabody  | 乔治·皮博迪     |
| john_law        | John Law        | 约翰·劳         |

## 使用方法

### 在组件中使用

```tsx
import { HistoricalFigure } from "@/components/characters/HistoricalFigure";
import { getFigure } from "@/components/characters/historicalFigures";

// 方法1：使用配置文件（推荐）
<HistoricalFigure
  photoSrc={getFigure("nathan_rothschild")?.photoSrc || ""}
  nameEn="Nathan Mayer Rothschild"
  nameCn="内森·梅耶·罗斯柴尔德"
  frameStyle="gold"
  photoFilter="vintage"
  action="talking"
  frame={frame}
/>;
```

### 框架样式

- `none` - 无装饰框
- `classic` - 简单深色框配金色边框
- `gold` - 金色强调框，用于富豪人物
- `vintage` - 复古风格，19世纪人物
- `modern` - 简洁风格，20世纪人物

### 照片滤镜

- `none` - 无滤镜，原始色彩
- `sepia` - 棕褐色调
- `grayscale` - 黑白色
- `vintage` - 微棕褐+轻微对比度调整
- `dramatic` - 高对比度，用于情感场景

## 许可说明

所有照片仅用于教育目的的历史纪录片。建议：

1. **优先使用公开领域照片**（如维基百科、美国国会图书馆）
2. **注明图片来源**（如果需要）
3. **不要用于商业目的** - 仅限教育使用
4. **选择高质量照片** - 至少 800x1000 像素

## 快速开始

1. 选择一个人物，使用必应图片下载其照片
2. 保存到 `public/assets/figures/[人物ID].jpg`
3. 运行 `bun run dev` 预览效果
4. 如果照片加载失败，组件会显示"请下载照片"提示
