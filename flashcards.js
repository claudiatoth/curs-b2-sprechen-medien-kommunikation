// ============================================
// FLASHCARDS — Sprechen B2: Medien & Kommunikation
// Claudia Toth · 32 carduri · audio Hedda WAV pregenerat
// ⚠️ ZERO ghilimele interne — CAPS pentru emfază
// ============================================

const flashcardsData = [
    // ===== Klassische Medien (6) =====
    { de: "die Zeitung · die Zeitungen", ro: "ziarul · ziarele (f)", audio: "audio/cards/01-zeitung.wav" },
    { de: "die Tageszeitung", ro: "cotidianul (Süddeutsche, FAZ, Bild)", audio: "audio/cards/02-tageszeitung.wav" },
    { de: "die Zeitschrift · die Zeitschriften", ro: "revista · revistele (f)", audio: "audio/cards/03-zeitschrift.wav" },
    { de: "das Fernsehen", ro: "televiziunea (n, nur Sg, instituție)", audio: "audio/cards/04-fernsehen.wav" },
    { de: "der Fernseher · die Fernseher", ro: "televizorul · televizoarele (m, aparat)", audio: "audio/cards/05-fernseher.wav" },
    { de: "die Nachrichten (Pl.)", ro: "știrile (Pl. în context jurnalistic)", audio: "audio/cards/06-nachrichten.wav" },

    // ===== Digitale Medien (6) =====
    { de: "die Online-Zeitung", ro: "ziarul online (f)", audio: "audio/cards/07-online-zeitung.wav" },
    { de: "der Streaming-Dienst", ro: "serviciu streaming (Netflix, Prime)", audio: "audio/cards/08-streaming-dienst.wav" },
    { de: "der Podcast · die Podcasts", ro: "podcastul · podcasturile (m, anglicism)", audio: "audio/cards/09-podcast.wav" },
    { de: "der Newsletter", ro: "newsletter (m, plural identic)", audio: "audio/cards/10-newsletter.wav" },
    { de: "die App · die Apps", ro: "aplicația · aplicațiile (f! excepție)", audio: "audio/cards/11-app.wav" },
    { de: "der Bildschirm · die Bildschirme", ro: "ecranul · ecranele (m)", audio: "audio/cards/12-bildschirm.wav" },

    // ===== Soziale Medien & Influencer (6) =====
    { de: "die sozialen Medien (Pl.)", ro: "rețelele sociale (NUR Plural)", audio: "audio/cards/13-soziale-medien.wav" },
    { de: "der/die Influencer/in", ro: "influencer / influenceriță (m/f)", audio: "audio/cards/14-influencer.wav" },
    { de: "die Reichweite", ro: "anvergura, audiența (f)", audio: "audio/cards/15-reichweite.wav" },
    { de: "der Follower · die Follower", ro: "urmăritor · urmăritori (m, plural identic)", audio: "audio/cards/16-follower.wav" },
    { de: "die Werbung", ro: "publicitatea, reclama (f, nur Sg)", audio: "audio/cards/17-werbung.wav" },
    { de: "posten, liken, teilen", ro: "a posta, a da like, a distribui", audio: "audio/cards/18-posten-liken-teilen.wav" },

    // ===== Nachrichten & Information (4) =====
    { de: "die seriöse Quelle", ro: "sursă serioasă, verificată (f)", audio: "audio/cards/19-serioese-quelle.wav" },
    { de: "Fake News", ro: "știri false (anglicism)", audio: "audio/cards/20-fake-news.wav" },
    { de: "die Tatsache vs. die Meinung", ro: "faptul vs. opinia (B2 cheie!)", audio: "audio/cards/21-tatsache-meinung.wav" },
    { de: "die Quellenkritik", ro: "verificarea sursei (f, nur Sg)", audio: "audio/cards/22-quellenkritik.wav" },

    // ===== Probleme moderne (5) =====
    { de: "die Filterblase", ro: "filter bubble, bula algoritmică (f)", audio: "audio/cards/23-filterblase.wav" },
    { de: "die Echokammer", ro: "camera de ecou (f)", audio: "audio/cards/24-echokammer.wav" },
    { de: "die Informationsüberflutung", ro: "potopul de informații (f, nur Sg)", audio: "audio/cards/25-informationsueberflutung.wav" },
    { de: "die Bildschirmzeit", ro: "timpul ecran (f, nur Sg)", audio: "audio/cards/26-bildschirmzeit.wav" },
    { de: "der Datenschutz", ro: "protecția datelor (m, nur Sg)", audio: "audio/cards/27-datenschutz.wav" },

    // ===== Trends 2025-2026 (3) =====
    { de: "der KI-Journalismus", ro: "jurnalismul cu AI (m, nur Sg)", audio: "audio/cards/28-ki-journalismus.wav" },
    { de: "die Paywall", ro: "zid de plată (f, anglicism)", audio: "audio/cards/29-paywall.wav" },
    { de: "die Medienkompetenz", ro: "competența media (f, B2 cheie!)", audio: "audio/cards/30-medienkompetenz.wav" },

    // ===== Conectori argumentativi cheie (2) =====
    { de: "Heutzutage", ro: "în zilele noastre (Sprechen Teil 2!)", audio: "audio/cards/31-heutzutage.wav" },
    { de: "Laut ARD-Studie", ro: "potrivit unui studiu ARD (citare TV)", audio: "audio/cards/32-laut-ard-studie.wav" }
];

let currentCardIndex = 0;
let currentFlashAudio = null;

function buildFlashcards() {
    const c = document.getElementById('flashcards-container');
    if (!c) return;
    c.innerHTML = `
        <div class="exercise-instruction">
            <strong>📇 32 carduri Sprechen B2 — Medien & Kommunikation</strong> — 6 Klassische Medien + 6 Digitale Medien + 6 Soziale Medien & Influencer + 4 Nachrichten & Info + 5 Probleme moderne + 3 Trends + 2 conectori cheie.<br>
            Click pe card pentru traducere. Click pe 🔊 pentru pronunție Hedda. Folosește săgețile pentru navigare.
        </div>
        <div class="flashcard-counter" id="flashcard-counter">Card 1 / ${flashcardsData.length}</div>
        <div class="flashcard" id="flashcard" onclick="flipCard()">
            <button class="flashcard-audio-btn" onclick="playFlashcardAudio(event)" title="Ascultă pronunția">🔊</button>
            <div class="flashcard-content">
                <div class="de" id="flashcard-de">${flashcardsData[0].de}</div>
                <div class="ro" id="flashcard-ro">${flashcardsData[0].ro}</div>
            </div>
            <div class="flashcard-hint">👆 Click pentru traducere</div>
        </div>
        <div class="flashcard-controls">
            <button class="flashcard-btn" onclick="prevCard()" id="prev-btn">← Anterior</button>
            <button class="flashcard-btn" onclick="nextCard()" id="next-btn">Următor →</button>
        </div>
    `;
    updateFlashcard();
}

function updateFlashcard() {
    const card = flashcardsData[currentCardIndex];
    const deEl = document.getElementById('flashcard-de');
    const roEl = document.getElementById('flashcard-ro');
    const counter = document.getElementById('flashcard-counter');
    const fc = document.getElementById('flashcard');
    if (deEl) deEl.textContent = card.de;
    if (roEl) roEl.textContent = card.ro;
    if (counter) counter.textContent = `Card ${currentCardIndex + 1} / ${flashcardsData.length}`;
    if (fc) fc.classList.remove('flipped');
}

function flipCard() {
    const fc = document.getElementById('flashcard');
    if (fc) fc.classList.toggle('flipped');
}

function nextCard() {
    currentCardIndex = (currentCardIndex + 1) % flashcardsData.length;
    updateFlashcard();
}

function prevCard() {
    currentCardIndex = (currentCardIndex - 1 + flashcardsData.length) % flashcardsData.length;
    updateFlashcard();
}

function playFlashcardAudio(event) {
    event.stopPropagation();
    const card = flashcardsData[currentCardIndex];
    if (currentFlashAudio) {
        currentFlashAudio.pause();
        currentFlashAudio.currentTime = 0;
    }
    if (card.audio) {
        currentFlashAudio = new Audio(card.audio);
        currentFlashAudio.play().catch(() => playWithTTS(card.de));
    } else {
        playWithTTS(card.de);
    }
}

function playWithTTS(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(text);
        u.lang = 'de-DE';
        u.rate = 0.82;
        window.speechSynthesis.speak(u);
    }
}

buildFlashcards();
