Add-Type -AssemblyName System.Speech
$synth = New-Object System.Speech.Synthesis.SpeechSynthesizer
try { $synth.SelectVoice("Microsoft Hedda Desktop") } catch { Write-Host "Hedda voice not available, using default DE voice" }
$synth.Rate = -2

$ae = [char]0x00E4; $oe = [char]0x00F6; $ue = [char]0x00FC; $ss = [char]0x00DF
$AE = [char]0x00C4; $OE = [char]0x00D6; $UE = [char]0x00DC

$outDir = "$PSScriptRoot\cards"
if (!(Test-Path $outDir)) { New-Item -ItemType Directory -Path $outDir | Out-Null }

$cards = @(
    @("01-zeitung.wav", "die Zeitung, die Zeitungen"),
    @("02-tageszeitung.wav", "die Tageszeitung"),
    @("03-zeitschrift.wav", "die Zeitschrift, die Zeitschriften"),
    @("04-fernsehen.wav", "das Fernsehen"),
    @("05-fernseher.wav", "der Fernseher, die Fernseher"),
    @("06-nachrichten.wav", "die Nachrichten"),
    @("07-online-zeitung.wav", "die Online-Zeitung"),
    @("08-streaming-dienst.wav", "der Streaming-Dienst"),
    @("09-podcast.wav", "der Podcast, die Podcasts"),
    @("10-newsletter.wav", "der Newsletter"),
    @("11-app.wav", "die App, die Apps"),
    @("12-bildschirm.wav", "der Bildschirm, die Bildschirme"),
    @("13-soziale-medien.wav", "die sozialen Medien"),
    @("14-influencer.wav", "der Influencer, die Influencerin"),
    @("15-reichweite.wav", "die Reichweite"),
    @("16-follower.wav", "der Follower, die Follower"),
    @("17-werbung.wav", "die Werbung"),
    @("18-posten-liken-teilen.wav", "posten, liken, teilen"),
    @("19-serioese-quelle.wav", "die seri${oe}se Quelle"),
    @("20-fake-news.wav", "Fake News"),
    @("21-tatsache-meinung.wav", "die Tatsache, die Meinung"),
    @("22-quellenkritik.wav", "die Quellenkritik"),
    @("23-filterblase.wav", "die Filterblase"),
    @("24-echokammer.wav", "die Echokammer"),
    @("25-informationsueberflutung.wav", "die Informations${ue}berflutung"),
    @("26-bildschirmzeit.wav", "die Bildschirmzeit"),
    @("27-datenschutz.wav", "der Datenschutz"),
    @("28-ki-journalismus.wav", "der K I Journalismus"),
    @("29-paywall.wav", "die Paywall"),
    @("30-medienkompetenz.wav", "die Medienkompetenz"),
    @("31-heutzutage.wav", "Heutzutage"),
    @("32-laut-ard-studie.wav", "Laut ARD Studie")
)

$total = $cards.Count
$ok = 0
foreach ($card in $cards) {
    $filename = $card[0]
    $text = $card[1]
    $outPath = Join-Path $outDir $filename
    try {
        $synth.SetOutputToWaveFile($outPath)
        $synth.Speak($text)
        $synth.SetOutputToNull()
        $ok++
        Write-Host "  [$ok/$total] $filename" -ForegroundColor Green
    } catch {
        Write-Host "  ERROR: $filename -- $_" -ForegroundColor Red
    }
}

$synth.Dispose()
Write-Host ""
Write-Host "Generated $ok / $total WAV files in $outDir" -ForegroundColor Cyan
