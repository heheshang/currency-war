#!/bin/bash
# Download public domain images for Currency War documentary
# All images are from Wikimedia Commons, Library of Congress, or other public domain sources
# License: CC0, Public Domain, or CC BY/CC BY-SA (attributed in log)

set -e

BASE_DIR="public/assets/images"
LOG_FILE="$BASE_DIR/DOWNLOAD_LOG.md"

# Create log file header
create_log() {
    cat > "$LOG_FILE" << 'EOF'
# Image Download Log

Generated: $(date)

All images are from public domain or Creative Commons licensed sources.
**License Key:**
- PD = Public Domain
- CC0 = Creative Commons Zero
- CC BY = Creative Commons Attribution
- CC BY-SA = Creative Commons Attribution-ShareAlike

---

EOF
}

# Download function with logging
download_image() {
    local url="$1"
    local output="$2"
    local source="$3"
    local license="$4"
    local description="$5"
    
    if [ -f "$output" ]; then
        echo "SKIP: $output already exists"
        return
    fi
    
    echo "Downloading: $output"
    curl -L -s -o "$output" "$url" 2>/dev/null
    
    if [ -f "$output" ]; then
        echo "- Downloaded: $output"
        echo "| $output | $description | $source | $license |" >> "$LOG_FILE"
    else
        echo "FAILED: $output"
    fi
}

# Create directories
mkdir -p "$BASE_DIR"/{ep01,ep02,ep03,ep04,ep05,ep06,ep07,ep08,ep09,ep10,ep11}

echo "=== Downloading Episode 01 Images ==="
# Ancient gold coins - Public Domain
download_image \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Hoard_of_ancient_gold_coins.jpg/1280px-Hoard_of_ancient_gold_coins.jpg" \
    "$BASE_DIR/ep01/gold-ancient.jpg" \
    "Wikimedia Commons" \
    "PD" \
    "Hoard of ancient gold coins"

# Roman gold coins - CC BY 2.0
download_image \
    "https://upload.wikimedia.org/wikipedia/commons/5/5c/Ancient_Roman_Gold_Coins_%285986643391%29.jpg" \
    "$BASE_DIR/ep01/gold-coins-roman.jpg" \
    "Wikimedia Commons - Erik Drost" \
    "CC BY 2.0" \
    "Ancient Roman gold coins"

echo "=== Downloading Episode 02 Images ==="
# Rothschild family portrait - Public Domain
download_image \
    "https://upload.wikimedia.org/wikipedia/commons/1/1b/Nathan_Mayer_Rothschild_by_Moritz_Daniel_Oppenheim_1853.jpg" \
    "$BASE_DIR/ep02/rothschild-portrait.jpg" \
    "Wikimedia Commons - Moritz Daniel Oppenheim" \
    "PD" \
    "Nathan Mayer Rothschild portrait 1853"

# Mayer Amschel Rothschild - Public Domain
download_image \
    "https://upload.wikimedia.org/wikipedia/commons/5/5e/Mayer_Amschel_Rothschild.jpg" \
    "$BASE_DIR/ep02/rothschild-mayer.jpg" \
    "Wikimedia Commons" \
    "PD" \
    "Mayer Amschel Rothschild portrait"

# Battle of Waterloo - Public Domain
download_image \
    "https://upload.wikimedia.org/wikipedia/commons/1/1d/Battle_of_Waterloo_1815.PNG" \
    "$BASE_DIR/ep02/waterloo-battle.jpg" \
    "Wikimedia Commons - William Sadler" \
    "PD" \
    "Battle of Waterloo 1815 painting"

echo "=== Downloading Episode 03 Images ==="
# Abraham Lincoln portrait - Public Domain
download_image \
    "https://upload.wikimedia.org/wikipedia/commons/a/ab/Abraham_Lincoln_O-77_matte_collodion_print.jpg" \
    "$BASE_DIR/ep03/lincoln-portrait.jpg" \
    "Wikimedia Commons - Alexander Gardner" \
    "PD" \
    "Abraham Lincoln portrait 1863"

# Civil War battlefield - Public Domain
download_image \
    "https://upload.wikimedia.org/wikipedia/commons/9/9e/Dead_Confederate_soldiers_in_the_field_in_front_of_Dunker_Church_after_Battle_of_Antietam.jpg" \
    "$BASE_DIR/ep03/civil-war.jpg" \
    "Wikimedia Commons - Alexander Gardner" \
    "PD" \
    "Civil War Antietam battlefield"

# Continental Currency - Public Domain
download_image \
    "https://upload.wikimedia.org/wikipedia/commons/6/6a/1776_Continental_Currency.jpg" \
    "$BASE_DIR/ep03/continental-currency.jpg" \
    "Wikimedia Commons" \
    "PD" \
    "1776 Continental Currency"

echo "=== Downloading Episode 04 Images ==="
# Jekyll Island Club - CC BY-SA 3.0
download_image \
    "https://upload.wikimedia.org/wikipedia/commons/4/4a/GA_Jekyll_Island_Club_HD_Clubhouse01.jpg" \
    "$BASE_DIR/ep04/jekyll-island.jpg" \
    "Wikimedia Commons - Ebyabe" \
    "CC BY-SA 3.0" \
    "Jekyll Island Club clubhouse"

# Federal Reserve Building - Public Domain (US Gov)
download_image \
    "https://upload.wikimedia.org/wikipedia/commons/8/8c/US_Federal_Reserve_Eccles_Building_1937.jpg" \
    "$BASE_DIR/ep04/federal-reserve.jpg" \
    "Wikimedia Commons - Federal Reserve" \
    "PD-USGov" \
    "Federal Reserve Eccles Building 1937"

# Woodrow Wilson portrait - Public Domain
download_image \
    "https://upload.wikimedia.org/wikipedia/commons/1/1d/President_Woodrow_Wilson_%281913%29.jpg" \
    "$BASE_DIR/ep04/wilson-portrait.jpg" \
    "Wikimedia Commons - Frank Graham Cootes" \
    "PD" \
    "President Woodrow Wilson portrait 1913"

echo "=== Downloading Episode 05 Images ==="
# WWI Soldiers - Public Domain
download_image \
    "https://upload.wikimedia.org/wikipedia/commons/5/5a/Soldiers_Marching_into_battle_World_War_I.png" \
    "$BASE_DIR/ep05/world-war-1.jpg" \
    "Wikimedia Commons" \
    "PD" \
    "WWI soldiers marching"

# 1929 Wall Street Crash - Public Domain
download_image \
    "https://upload.wikimedia.org/wikipedia/commons/e/e7/Crowds_gathering_outside_New_York_Stock_Exchange.jpg" \
    "$BASE_DIR/ep05/crash-1929.jpg" \
    "Wikimedia Commons - Associated Press" \
    "PD" \
    "1929 Wall Street crash crowds"

# Great Depression breadline - Public Domain
download_image \
    "https://upload.wikimedia.org/wikipedia/commons/4/4e/White_Angel_Breadline%2C_San_Francisco%2C_1932%2C_by_Dorothea_Lange%2C_3.jpg" \
    "$BASE_DIR/ep05/great-depression.jpg" \
    "Wikimedia Commons - Dorothea Lange" \
    "PD" \
    "Great Depression breadline 1932"

echo "=== Downloading Episode 06 Images ==="
# BIS Building Basel - Public Domain
download_image \
    "https://upload.wikimedia.org/wikipedia/commons/5/5a/Basel_BIS_building_by_Mario_Botta_20070723.jpg" \
    "$BASE_DIR/ep06/bis-building.jpg" \
    "Wikimedia Commons - Julian Mendez" \
    "PD" \
    "BIS Building Basel"

# IMF Headquarters - Public Domain
download_image \
    "https://upload.wikimedia.org/wikipedia/commons/7/7a/IMF_building_HR.jpg" \
    "$BASE_DIR/ep06/imf-headquarters.jpg" \
    "Wikimedia Commons - IMF" \
    "PD-IMF" \
    "IMF Headquarters Washington DC"

echo "=== Downloading Episode 07 Images ==="
# Bretton Woods Conference - Public Domain
download_image \
    "https://upload.wikimedia.org/wikipedia/commons/5/5c/Morgenthau_Bretton_Woods_opening_1944.jpg" \
    "$BASE_DIR/ep07/bretton-woods.jpg" \
    "Wikimedia Commons - NARA" \
    "PD-USGov" \
    "Bretton Woods Conference 1944"

# Mount Washington Hotel - Public Domain
download_image \
    "https://upload.wikimedia.org/wikipedia/commons/7/7a/Image-Mount_Washington_Hotel.jpg" \
    "$BASE_DIR/ep07/bretton-woods-hotel.jpg" \
    "Wikimedia Commons - Mwanner" \
    "PD" \
    "Mount Washington Hotel Bretton Woods"

echo "=== Downloading Episode 08 Images ==="
# Nixon 1971 - Public Domain
download_image \
    "https://upload.wikimedia.org/wikipedia/commons/a/a6/President_Richard_Nixon_Delivering_the_1971_State_of_the_Union_Address.jpg" \
    "$BASE_DIR/ep08/nixon-shock.jpg" \
    "Wikimedia Commons - NARA" \
    "PD-USGov" \
    "President Nixon 1971"

# Fort Knox Gold Vault - Public Domain
download_image \
    "https://upload.wikimedia.org/wikipedia/commons/5/5e/FortKnoxGoldVault.jpg" \
    "$BASE_DIR/ep08/gold-standard.jpg" \
    "Wikimedia Commons - Kevyn Jacobs" \
    "PD" \
    "Fort Knox Gold Vault"

# Fort Knox Gold 1941 - Public Domain
download_image \
    "https://upload.wikimedia.org/wikipedia/commons/5/5d/FortKnoxGold010.jpg" \
    "$BASE_DIR/ep08/fort-knox-gold.jpg" \
    "Wikimedia Commons - US Post Office" \
    "PD-USGov" \
    "Fort Knox gold transport 1941"

echo "=== Downloading Episode 09 Images ==="
# George Soros - CC BY 4.0
download_image \
    "https://upload.wikimedia.org/wikipedia/commons/6/6a/George_Soros_-_May_31%2C_2017.jpg" \
    "$BASE_DIR/ep09/soros.jpg" \
    "Wikimedia Commons - European Commission" \
    "CC BY 4.0" \
    "George Soros 2017"

echo "=== Downloading Episode 10 Images ==="
# Lehman Brothers collapse - CC BY 2.0
download_image \
    "https://upload.wikimedia.org/wikipedia/commons/4/4a/Lehman_Brothers-NYC-20080915.jpg" \
    "$BASE_DIR/ep10/lehman-brothers.jpg" \
    "Wikimedia Commons - Robert Scoble" \
    "CC BY 2.0" \
    "Lehman Brothers bankruptcy 2008"

# Lehman Brothers building - CC BY-SA 3.0
download_image \
    "https://upload.wikimedia.org/wikipedia/commons/8/8a/NYC_Lehman_Brothers_building.jpg" \
    "$BASE_DIR/ep10/2008-crisis.jpg" \
    "Wikimedia Commons - Arnoldius" \
    "CC BY-SA 3.0" \
    "Lehman Brothers building NYC"

echo ""
echo "=== Download Complete ==="
echo "Log file: $LOG_FILE"
echo ""
echo "Summary of downloaded images:"
find "$BASE_DIR" -name "*.jpg" -type f | wc -l | xargs echo "Total images:"
