# Historical Figures Photos Download Script
# PowerShell script to download historical figure photos
# Usage: Right-click this file and select "Run with PowerShell"

$figures = @{
    # Episode 02: Rothschild Family
    mayer_rothschild = @{
        url = "https://upload.wikimedia.org/wikipedia/commons/3/3e/Mayer_Amschel_Rothschild.jpg"
        file = "mayer_rothschild.jpg"
        name = "Mayer Amschel Rothschild"
    }
    nathan_rothschild = @{
        url = "https://upload.wikimedia.org/wikipedia/commons/a/a5/Nathan_Mayer_Rothschild.jpg"
        file = "nathan_rothschild.jpg"
        name = "Nathan Mayer Rothschild"
    }
    james_rothschild = @{
        url = "https://upload.wikimedia.org/wikipedia/commons/b/b5/James_de_Rothschild.jpg"
        file = "james_rothschild.jpg"
        name = "James de Rothschild"
    }
    salomon_rothschild = @{
        url = "https://upload.wikimedia.org/wikipedia/commons/c/c4/Salomon_Mayer_von_Rothschild.jpg"
        file = "salomon_rothschild.jpg"
        name = "Salomon Mayer von Rothschild"
    }
    amschel_rothschild = @{
        url = "https://upload.wikimedia.org/wikipedia/commons/2/22/Amschel_Mayer_von_Rothschild.jpg"
        file = "amschel_rothschild.jpg"
        name = "Amschel Mayer von Rothschild"
    }
    karl_rothschild = @{
        url = "https://upload.wikimedia.org/wikipedia/commons/7/7e/Carl_Mayer_von_Rothschild.jpg"
        file = "karl_rothschild.jpg"
        name = "Carl Mayer von Rothschild"
    }

    # Episode 03: Presidents
    alexander_hamilton = @{
        url = "https://upload.wikimedia.org/wikipedia/commons/a/ae/Alexander_Hamilton_portrait_by_John_Trumbull_1806.jpg"
        file = "alexander_hamilton.jpg"
        name = "Alexander Hamilton"
    }
    thomas_jefferson = @{
        url = "https://upload.wikimedia.org/wikipedia/commons/a/ae/Tjefferson.jpg"
        file = "thomas_jefferson.jpg"
        name = "Thomas Jefferson"
    }
    andrew_jackson = @{
        url = "https://upload.wikimedia.org/wikipedia/commons/a/ab/Andrew_Jackson-head.jpg"
        file = "andrew_jackson.jpg"
        name = "Andrew Jackson"
    }
    abraham_lincoln = @{
        url = "https://upload.wikimedia.org/wikipedia/commons/a/ab/Abraham_Lincoln_O-77_matte_collodion_print.jpg"
        file = "abraham_lincoln.jpg"
        name = "Abraham Lincoln"
    }

    # Episode 04: Fed Founders
    woodrow_wilson = @{
        url = "https://upload.wikimedia.org/wikipedia/commons/b/b0/Woodrow_Wilson_1919.jpg"
        file = "woodrow_wilson.jpg"
        name = "Woodrow Wilson"
    }
    jp_morgan = @{
        url = "https://upload.wikimedia.org/wikipedia/commons/1/1e/John_Pierpont_Morgan.jpg"
        file = "jp_morgan.jpg"
        name = "J.P. Morgan"
    }
    john_d_rockefeller = @{
        url = "https://upload.wikimedia.org/wikipedia/commons/d/d1/John_D._Rockefeller_1885.jpg"
        file = "john_d_rockefeller.jpg"
        name = "John D. Rockefeller"
    }
    nelson_aldrich = @{
        url = "https://upload.wikimedia.org/wikipedia/commons/4/4e/Nelson_Wilmarth_Aldrich_-_Brady-Handy.jpg"
        file = "nelson_aldrich.jpg"
        name = "Nelson W. Aldrich"
    }
    benjamin_strong = @{
        url = "https://upload.wikimedia.org/wikipedia/commons/e/e7/Benjamin_Strong_Jr.jpg"
        file = "benjamin_strong.jpg"
        name = "Benjamin Strong Jr."
    }

    # Episode 05: Depression Era
    franklin_roosevelt = @{
        url = "https://upload.wikimedia.org/wikipedia/commons/3/35/FDR_in_1933.jpg"
        file = "franklin_roosevelt.jpg"
        name = "Franklin D. Roosevelt"
    }
    herbert_hoover = @{
        url = "https://upload.wikimedia.org/wikipedia/commons/d/d3/Herbert_Hoover_1928.jpg"
        file = "herbert_hoover.jpg"
        name = "Herbert Hoover"
    }
}

# Create figures directory if not exists
$figuresDir = "public\assets\figures"
if (-not (Test-Path $figuresDir)) {
    New-Item -ItemType Directory -Force -Path $figuresDir
    Write-Host "Creating figures directory at: $figuresDir"
}

# Download function
function Download-Figure {
    param(
        [string]$Name,
        [string]$Url,
        [string]$File
    )

    $targetPath = Join-Path $figuresDir $File
    $outputPath = Join-Path $PWD "public\assets\figures\$File"

    Write-Host "Downloading: $Name"
    Write-Host "  From: $Url"
    Write-Host "  To: $outputPath"

    try {
        # Download using .NET WebClient (faster than Invoke-WebRequest)
        $webClient = New-Object System.Net.WebClient
        $webClient.Headers.Add("User-Agent", "PowerShell/7.0 (Windows NT 6.1; Trident/7.0)")

        # Download with timeout (30 seconds)
        $webClient.DownloadFileAsync($Url, $targetPath)

        # Wait for download to complete
        Start-Sleep -Seconds 5
        while ($webClient.IsBusy) {
            Write-Progress -Activity "Downloading" -Status "Downloading" -PercentComplete ($webClient.BytesReceived * 100 / $webClient.TotalBytesToReceive)
            Start-Sleep -Milliseconds 500
        }

        Write-Progress -Activity "Downloaded" -Status "Downloaded" -PercentComplete 100
        Write-Host "✅ Successfully downloaded: $Name" -ForegroundColor Green

        return $true
    }
    catch {
        Write-Host "❌ Failed to download: $Name" -ForegroundColor Red
        Write-Host $_.Exception.Message
        return $false
    }
}

# Main download logic
Write-Host "════════════════════════════════════"
Write-Host "  Historical Figures Photo Download Script"
Write-Host "════════════════════════════════════"
Write-Host ""

# Download all figures
$allFigures = @(
    "mayer_rothschild", "nathan_rothschild", "james_rothschild", "salomon_rothschild",
    "amschel_rothschild", "karl_rothschild",
    "alexander_hamilton", "thomas_jefferson", "andrew_jackson", "abraham_lincoln",
    "woodrow_wilson", "jp_morgan", "john_d_rockefeller",
    "nelson_aldrich", "benjamin_strong", "franklin_roosevelt", "herbert_hoover"
)

$total = 0
$success = 0

foreach ($key in $allFigures.Keys) {
    $total++
    $figure = $figures[$key]

    Write-Host "[$total/$($allFigures.Count)] Downloading: $($figure.name)" -ForegroundColor Cyan

    if (Download-Figure -Name $figure.name -Url $figure.url -File $figure.file) {
        $success++
    }
    else {
        Start-Sleep -Milliseconds 500
    }
}

Write-Host ""
Write-Host "══════════════════════════════════════"
Write-Host "Download Summary:" -ForegroundColor Yellow
Write-Host "  Total figures: $total" -ForegroundColor White
Write-Host "  Successful: $success" -ForegroundColor Green
Write-Host "  Failed: $($total - $success)" -ForegroundColor Red

if ($success -gt 0) {
    Write-Host ""
    Write-Host "✅ Download completed! Files are in: public\assets\figures\" -ForegroundColor Green
    Write-Host ""
    Write-Host "Next steps:" -ForegroundColor Yellow
    Write-Host "  1. Run: npm run dev" -ForegroundColor White
    Write-Host "  2. Open Remotion Studio to preview the videos" -ForegroundColor White
}
else {
    Write-Host ""
    Write-Host "❌ No files were downloaded. Possible issues:" -ForegroundColor Red
    Write-Host "  1. Wikipedia/Wikimedia may not be accessible from your network" -ForegroundColor White
    Write-Host "  2. Try using a VPN or proxy" -ForegroundColor White
    Write-Host "  3. Or manually download from the HTML page:" -ForegroundColor White
    Write-Host "    file:///$($PWD)/public/assets/figures/download.html" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "Alternative: Use Bing Images (www.bing.com)" -ForegroundColor Yellow
    Write-Host "            Search: '[Person Name] portrait high resolution'" -ForegroundColor White
}

Write-Host ""
Write-Host "Press any key to exit..."
$null = $Host.UI.RawUI.ReadKey()
