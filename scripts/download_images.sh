#!/bin/bash

# 图片下载脚本 - Episode 02-11
# 使用 Unsplash 和 Wikipedia Commons 的公开图片

BASE_DIR="/Users/ssk/Documents/project/personal/ai/currency-war/public/assets/images"

echo "开始下载缺失的图片..."

# ===== Episode 03 =====
echo "下载 Episode 03 图片..."
cd "$BASE_DIR/ep03"

# Colonial America
curl -sL "https://images.unsplash.com/photo-1569974507005-6dc61f97fb5c?w=1920" -o ep03-colonial-america.jpg 2>/dev/null || echo "Failed: colonial-america"

# Lincoln Portrait (使用替代图片)
curl -sL "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1920" -o ep03-lincoln-portrait.jpg 2>/dev/null || echo "Failed: lincoln-portrait"

# Civil War
curl -sL "https://images.unsplash.com/photo-1551913902-c92207136625?w=1920" -o ep03-civil-war.jpg 2>/dev/null || echo "Failed: civil-war"

# ===== Episode 04 =====
echo "下载 Episode 04 图片..."
cd "$BASE_DIR/ep04"

# Jekyll Island
curl -sL "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1920" -o ep04-jekyll-island.jpg 2>/dev/null || echo "Failed: jekyll-island"

# Federal Reserve Building
curl -sL "https://images.unsplash.com/photo-1523699289804-55347c09047d?w=1920" -o ep04-fed-building.jpg 2>/dev/null || echo "Failed: fed-building"

# Wilson Portrait
curl -sL "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920" -o ep04-wilson-portrait.jpg 2>/dev/null || echo "Failed: wilson-portrait"

# ===== Episode 05 =====
echo "下载 Episode 05 图片..."
cd "$BASE_DIR/ep05"

# WWI
curl -sL "https://images.unsplash.com/photo-1533558717700-1198a8a16e3a?w=1920" -o ep05-ww1.jpg 2>/dev/null || echo "Failed: ww1"

# 1929 Crash
curl -sL "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1920" -o ep05-crash-1929.jpg 2>/dev/null || echo "Failed: crash-1929"

# Great Depression
curl -sL "https://images.unsplash.com/photo-1506619216599-9d16dc0907df?w=1920" -o ep05-great-depression.jpg 2>/dev/null || echo "Failed: great-depression"

# ===== Episode 06 =====
echo "下载 Episode 06 图片..."
cd "$BASE_DIR/ep06"

# BIS Building
curl -sL "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920" -o ep06-bis-building.jpg 2>/dev/null || echo "Failed: bis-building"

# IMF
curl -sL "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920" -o ep06-imf.jpg 2>/dev/null || echo "Failed: imf"

# Bilderberg (使用替代 - meeting room)
curl -sL "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1920" -o ep06-bilderberg.jpg 2>/dev/null || echo "Failed: bilderberg"

# CFR
curl -sL "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1920" -o ep06-cfr.jpg 2>/dev/null || echo "Failed: cfr"

# Trilateral
curl -sL "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920" -o ep06-trilateral.jpg 2>/dev/null || echo "Failed: trilateral"

# ===== Episode 07 =====
echo "下载 Episode 07 图片..."
cd "$BASE_DIR/ep07"

# WWII
curl -sL "https://images.unsplash.com/photo-1584043720379-b46755a5afc9?w=1920" -o ep07-ww2.jpg 2>/dev/null || echo "Failed: ww2"

# Bretton Woods
curl -sL "https://images.unsplash.com/photo-1560221328-12fe60f83ab8?w=1920" -o ep07-bretton-woods.jpg 2>/dev/null || echo "Failed: bretton-woods"

# War Bonds
curl -sL "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=1920" -o ep07-war-bonds.jpg 2>/dev/null || echo "Failed: war-bonds"

# Elite Meeting
curl -sL "https://images.unsplash.com/photo-1557804506-669a67965ba0e?w=1920" -o ep07-elite-meeting.jpg 2>/dev/null || echo "Failed: elite-meeting"

# ===== Episode 08 =====
echo "下载 Episode 08 图片..."
cd "$BASE_DIR/ep08"

# Bretton Woods
curl -sL "https://images.unsplash.com/photo-1560221328-12fe60f83ab8?w=1920" -o ep08-bretton-woods.jpg 2>/dev/null || echo "Failed: bretton-woods"

# Nixon
curl -sL "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1920" -o ep08-nixon.jpg 2>/dev/null || echo "Failed: nixon"

# Gold Standard
curl -sL "https://images.unsplash.com/photo-1610375461246-83df859d849d?w=1920" -o ep08-gold-standard.jpg 2>/dev/null || echo "Failed: gold-standard"

# Kennedy
curl -sL "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920" -o ep08-kennedy.jpg 2>/dev/null || echo "Failed: kennedy"

# Petrodollar
curl -sL "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1920" -o ep08-petrodollar.jpg 2>/dev/null || echo "Failed: petrodollar"

# Silver
curl -sL "https://images.unsplash.com/photo-1531654470136-f8857c9a73e4?w=1920" -o ep08-silver.jpg 2>/dev/null || echo "Failed: silver"

# ===== Episode 09 =====
echo "下载 Episode 09 图片..."
cd "$BASE_DIR/ep09"

# Asian Crisis
curl -sL "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920" -o ep09-asian-crisis.jpg 2>/dev/null || echo "Failed: asian-crisis"

# Soros
curl -sL "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1920" -o ep09-soros.jpg 2>/dev/null || echo "Failed: soros"

# Oil Crisis
curl -sL "https://images.unsplash.com/photo-1473621032319-61d3c35b4a67?w=1920" -o ep09-oil-crisis.jpg 2>/dev/null || echo "Failed: oil-crisis"

# Japan Bubble
curl -sL "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1920" -o ep09-japan-bubble.jpg 2>/dev/null || echo "Failed: japan-bubble"

# Volcker
curl -sL "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920" -o ep09-volcker.jpg 2>/dev/null || echo "Failed: volcker"

# Hong Kong
curl -sL "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=1920" -o ep09-hong-kong.jpg 2>/dev/null || echo "Failed: hong-kong"

# ===== Episode 10 =====
echo "下载 Episode 10 图片..."
cd "$BASE_DIR/ep10"

# 2008 Crisis
curl -sL "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1920" -o ep10-financial-crisis-2008.jpg 2>/dev/null || echo "Failed: financial-crisis-2008"

# Lehman
curl -sL "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920" -o ep10-lehman.jpg 2>/dev/null || echo "Failed: lehman"

# Housing Bubble
curl -sL "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920" -o ep10-housing-bubble.jpg 2>/dev/null || echo "Failed: housing-bubble"

# Derivatives
curl -sL "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920" -o ep10-derivatives.jpg 2>/dev/null || echo "Failed: derivatives"

# Gold Price
curl -sL "https://images.unsplash.com/photo-1610375461246-83df859d849d?w=1920" -o ep10-gold-price.jpg 2>/dev/null || echo "Failed: gold-price"

# Debt
curl -sL "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=1920" -o ep10-debt.jpg 2>/dev/null || echo "Failed: debt"

# ===== Episode 11 =====
echo "下载 Episode 11 图片..."
cd "$BASE_DIR/ep11"

# Future
curl -sL "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1920" -o ep11-future.jpg 2>/dev/null || echo "Failed: future"

# CBDC
curl -sL "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1920" -o ep11-cbdc.jpg 2>/dev/null || echo "Failed: cbdc"

# Gold Silver
curl -sL "https://images.unsplash.com/photo-1531658719577-a64f48b8b2e7?w=1920" -o ep11-gold-silver.jpg 2>/dev/null || echo "Failed: gold-silver"

# World Reserve
curl -sL "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1920" -o ep11-world-reserve.jpg 2>/dev/null || echo "Failed: world-reserve"

# Financial War
curl -sL "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1920" -o ep11-financial-war.jpg 2>/dev/null || echo "Failed: financial-war"

echo "下载完成!"
