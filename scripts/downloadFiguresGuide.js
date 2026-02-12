#!/usr/bin/env node

/**
 * Historical Figures Photos - Download Guide
 *
 * Since Wikipedia is not accessible in China, this script provides
 * manual download instructions for Chinese users.
 *
 * Usage: node scripts/downloadFiguresGuide.js
 */

const fs = require('fs');
const path = require('path');

// Figures to download
const FIGURES = {
  // Episode 02: Rothschild Family
  mayer_rothschild: { nameEn: 'Mayer Amschel Rothschild', nameCn: '老梅耶·罗斯柴尔德' },
  nathan_rothschild: { nameEn: 'Nathan Mayer Rothschild', nameCn: '内森·梅耶·罗斯柴尔德' },
  james_rothschild: { nameEn: 'James de Rothschild', nameCn: '詹姆斯·罗斯柴尔德' },
  salomon_rothschild: { nameEn: 'Salomon Mayer von Rothschild', nameCn: '所罗门·梅耶·罗斯柴尔德' },
  amschel_rothschild: { nameEn: 'Amschel Mayer von Rothschild', nameCn: '阿姆谢尔·梅耶·罗斯柴尔德' },
  karl_rothschild: { nameEn: 'Carl Mayer von Rothschild', nameCn: '卡尔·梅耶·罗斯柴尔德' },

  // Episode 03: Presidents
  alexander_hamilton: { nameEn: 'Alexander Hamilton', nameCn: '亚历山大·汉密尔顿' },
  thomas_jefferson: { nameEn: 'Thomas Jefferson', nameCn: '托马斯·杰斐逊' },
  andrew_jackson: { nameEn: 'Andrew Jackson', nameCn: '安德鲁·杰克逊' },
  abraham_lincoln: { nameEn: 'Abraham Lincoln', nameCn: '亚伯拉罕·林肯' },

  // Episode 04: Fed Founders
  woodrow_wilson: { nameEn: 'Woodrow Wilson', nameCn: '伍德罗·威尔逊' },
  jp_morgan: { nameEn: 'J. P. Morgan', nameCn: '约翰·皮尔庞特·摩根' },
  john_d_rockefeller: { nameEn: 'John D. Rockefeller', nameCn: '约翰·洛克菲勒' },
  nelson_aldrich: { nameEn: 'Nelson W. Aldrich', nameCn: '纳尔逊·奥尔德里奇' },
  frank_vanderlip: { nameEn: 'Frank A. Vanderlip', nameCn: '弗兰克·范德利普' },
  henry_davison: { nameEn: 'Henry P. Davison', nameCn: '亨利·戴维森' },
  benjamin_strong: { nameEn: 'Benjamin Strong Jr.', nameCn: '本杰明·斯特朗' },
  paul_warburg: { nameEn: 'Paul Warburg', nameCn: '保罗·沃伯格' },

  // Episode 05: Depression Era
  franklin_roosevelt: { nameEn: 'Franklin D. Roosevelt', nameCn: '富兰克林·罗斯福' },
  herbert_hoover: { nameEn: 'Herbert Hoover', nameCn: '赫伯特·胡佛' },

  // Additional Figures
  john_law: { nameEn: 'John Law', nameCn: '约翰·劳' },
  nicholas_biddle: { nameEn: 'Nicholas Biddle', nameCn: '尼古拉斯·比德尔' },
  george_peabody: { nameEn: 'George Peabody', nameCn: '乔治·皮博迪' },
};

// Target directory
const FIGURES_DIR = path.join(__dirname, '..', 'public', 'assets', 'figures');

// Create directory if it doesn't exist
if (!fs.existsSync(FIGURES_DIR)) {
  fs.mkdirSync(FIGURES_DIR, { recursive: true });
}

/**
 * Check which figures are missing
 */
function checkFiguresStatus() {
  console.log('📊 Checking figures status...\n');

  const missing = [];
  const existing = [];

  Object.keys(FIGURES).forEach(id => {
    const filePath = path.join(FIGURES_DIR, `${id}.jpg`);
    if (fs.existsSync(filePath)) {
      existing.push(id);
    } else {
      missing.push(id);
    }
  });

  console.log(`✅ Found: ${existing.length} figures`);
  console.log(`❌ Missing: ${missing.length} figures`);

  if (missing.length > 0) {
    console.log('\n📥 Missing figures:');
    missing.forEach((id, i) => {
      const fig = FIGURES[id];
      console.log(`   ${i + 1}. ${fig.nameEn} (${fig.nameCn})`);
      console.log(`      Search: "${fig.nameEn} portrait" on Bing Images`);
    });
  } else {
    console.log('\n🎉 All figures are ready!');
  }

  return { missing, existing };
}

/**
 * Show download instructions
 */
function showDownloadInstructions(missing) {
  console.log('\n═════════════════════════════════════════');
  console.log('  🔍 下载指南 / Download Guide');
  console.log('═════════════════════════════════════\n');

  console.log('方法一：使用必应图片 (推荐) / Method 1: Use Bing Images (Recommended)');
  console.log('─────────────────────────────────────────────────');
  console.log('1. 访问 https://www.bing.com/images');
  console.log('2. 搜索 "[人物英文名] portrait"');
  console.log('3. 选择高清、正面的人物肖像');
  console.log('4. 下载并保存到 public/assets/figures/[文件名].jpg\n');

  console.log('方法二：使用百度百科 / Method 2: Use Baidu Baike');
  console.log('─────────────────────────────────────────────────');
  console.log('1. 访问 https://baike.baidu.com/');
  console.log('2. 搜索人物英文名或中文名');
  console.log('3. 找到历史人物的肖像照片');
  console.log('4. 右键保存图片到 public/assets/figures/ 目录\n');

  console.log('方法三：VPN访问维基百科 / Method 3: Use VPN for Wikipedia');
  console.log('─────────────────────────────────────────────────');
  console.log('1. 如果有条件，可以使用代理或VPN访问维基百科');
  console.log('2. 下载原始高清照片');
  console.log('3. 每个人物的维基链接在源代码中有标注\n');

  console.log('💡 Tips / 提示:');
  console.log('─────────────────────────────────────────────────');
  console.log('- 照片格式：JPG 或 PNG');
  console.log('- 推荐尺寸：至少 800x1000 像素');
  console.log('- 命名格式：[人物ID].jpg（如 nathan_rothschild.jpg）');
  console.log('- 下载后重新运行此脚本检查状态\n');
}

/**
 * Main execution
 */
function main() {
  console.log('═══════════════════════════════════════');
  console.log('  Historical Figures Photos - Guide');
  console.log('═════════════════════════════════════\n');

  const { missing, existing } = checkFiguresStatus();

  if (missing.length > 0 || existing.length === 0) {
    showDownloadInstructions(missing);
  }

  console.log('\n═══════════════════════════════════════');
  console.log('📁 Figures directory: ' + FIGURES_DIR);
  console.log('═════════════════════════════════════\n');
}

// Run the guide
main();
