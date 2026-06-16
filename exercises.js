// ============================================
// EXERCIȚII - Sprechen B2: Medien & Kommunikation
// Claudia Toth · 5 exerciții (toate text inputs)
// ============================================

function normalizeAnswer(str) {
    return (str || '')
        .toString()
        .toLowerCase()
        .trim()
        .replace(/ß/g, 'ss')
        .replace(/ä/g, 'ae')
        .replace(/ö/g, 'oe')
        .replace(/ü/g, 'ue')
        .replace(/[ăâ]/g, 'a')
        .replace(/î/g, 'i')
        .replace(/[șş]/g, 's')
        .replace(/[țţ]/g, 't')
        .replace(/…/g, '...')
        .replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ')
        .replace(/\s*,\s*/g, ' ')
        .replace(/\s+/g, ' ')
        .replace(/[.!?;:]/g, '').trim();
}

// ============================================
// EX 1: Traducere DE → RO (vocabular cheie)
// ============================================
const ex1Data = [
    { id: 'a', de: 'die Filterblase', correct: 'filter bubble (bula algoritmică)', accept: ['filter bubble', 'bula algoritmică', 'bula algoritmica', 'filterblase', 'efect bulă', 'efect bula'] },
    { id: 'b', de: 'die Quellenkritik', correct: 'verificarea sursei', accept: ['verificarea sursei', 'verificare sursă', 'verificare sursa', 'critică sursă', 'critica sursa', 'quellenkritik'] },
    { id: 'c', de: 'die Reichweite', correct: 'anvergura (audiență)', accept: ['anvergura', 'audiență', 'audienta', 'reichweite', 'numărul de urmăritori', 'numarul de urmaritori'] },
    { id: 'd', de: 'die Informationsüberflutung', correct: 'potopul de informații', accept: ['potopul de informații', 'potopul de informatii', 'inundație de informații', 'inundatie de informatii', 'informationsüberflutung'] },
    { id: 'e', de: 'die Tatsache', correct: 'faptul (verificabil)', accept: ['faptul', 'fapt', 'tatsache', 'faptul verificabil'] },
    { id: 'f', de: 'die Paywall', correct: 'zid de plată', accept: ['zid de plată', 'zid de plata', 'paywall', 'plată de acces', 'plata de acces'] },
    { id: 'g', de: 'die Medienkompetenz', correct: 'competența media', accept: ['competența media', 'competenta media', 'medienkompetenz', 'alfabetizare media'] },
    { id: 'h', de: 'die Mediendiät', correct: 'dieta media', accept: ['dieta media', 'dieta de media', 'mediendiät', 'mediendiat', 'consum conștient', 'consum constient'] }
];

function buildEx1() {
    const container = document.getElementById('ex1-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>🔁 Tradu termenul german în română.</strong><br>
            Diacriticele românești (ă, â, î, ș, ț) sunt opționale — sistemul acceptă ambele forme.
        </div>
    `;
    ex1Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label><strong style="color:#065f46; font-size:1.05rem;">${item.de}</strong></label>
                    <input type="text" id="ex1-${item.id}" placeholder="traducere RO...">
                </div>
                <div class="feedback" id="ex1-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx1() {
    let correct = 0;
    const total = ex1Data.length;
    ex1Data.forEach(item => {
        const input = document.getElementById(`ex1-${item.id}`);
        const fb = document.getElementById(`ex1-f${item.id}`);
        const userAnswer = normalizeAnswer(input.value);
        const isCorrect = item.accept.some(a => normalizeAnswer(a) === userAnswer);
        if (isCorrect) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// ============================================
// EX 2: Traducere RO → DE (vocabular activ)
// ============================================
const ex2Data = [
    { id: 'a', ro: 'eu citesc ziarul', correct: 'ich lese die Zeitung', accept: ['ich lese die zeitung', 'ich lese zeitung'] },
    { id: 'b', ro: 'știri online', correct: 'Online-Nachrichten', accept: ['online-nachrichten', 'nachrichten online', 'online nachrichten', 'die online-nachrichten'] },
    { id: 'c', ro: 'a verifica sursa', correct: 'die Quelle überprüfen', accept: ['die quelle überprüfen', 'die quelle ueberpruefen', 'eine quelle überprüfen', 'quelle überprüfen', 'quelle ueberpruefen'] },
    { id: 'd', ro: 'rețelele sociale', correct: 'die sozialen Medien', accept: ['die sozialen medien', 'sozialen medien', 'social media'] },
    { id: 'e', ro: 'a urmări un influencer', correct: 'einem Influencer folgen', accept: ['einem influencer folgen', 'einer influencerin folgen', 'einen influencer folgen', 'einem influencer abonnieren'] },
    { id: 'f', ro: 'știri false', correct: 'Fake News', accept: ['fake news', 'die fake news', 'falschmeldungen'] },
    { id: 'g', ro: 'a-mi reduce timpul ecran', correct: 'meine Bildschirmzeit reduzieren', accept: ['meine bildschirmzeit reduzieren', 'die bildschirmzeit reduzieren', 'bildschirmzeit reduzieren'] },
    { id: 'h', ro: 'jurnalist independent', correct: 'unabhängiger Journalist', accept: ['unabhängiger journalist', 'unabhaengiger journalist', 'ein unabhängiger journalist', 'ein unabhaengiger journalist'] }
];

function buildEx2() {
    const container = document.getElementById('ex2-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>🔁 Tradu expresia română în germană.</strong><br>
            <em>💡 Diacritice germane:</em> poți scrie <code>ae</code> (= ä), <code>oe</code> (= ö), <code>ue</code> (= ü), <code>ss</code> (= ß).
        </div>
    `;
    ex2Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label><strong style="color:#5A5147; font-size:1.05rem;">${item.ro}</strong></label>
                    <input type="text" id="ex2-${item.id}" placeholder="traducere DE...">
                </div>
                <div class="feedback" id="ex2-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx2() {
    let correct = 0;
    const total = ex2Data.length;
    ex2Data.forEach(item => {
        const input = document.getElementById(`ex2-${item.id}`);
        const fb = document.getElementById(`ex2-f${item.id}`);
        const userAnswer = normalizeAnswer(input.value);
        const isCorrect = item.accept.some(a => normalizeAnswer(a) === userAnswer);
        if (isCorrect) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// ============================================
// EX 3: Completează propoziția cu substantivul potrivit
// ============================================
const ex3Data = [
    { id: 'a', sentence: 'Jeden Morgen lese ich die ______ . (ziar/cotidian)', correct: 'Tageszeitung', accept: ['tageszeitung', 'zeitung'] },
    { id: 'b', sentence: 'Auf Instagram hat sie 100.000 ______ . (urmăritori)', correct: 'Follower', accept: ['follower', 'abonnenten'] },
    { id: 'c', sentence: 'Nach 5 Artikeln zeigt die Zeitung eine ______ . (paywall)', correct: 'Paywall', accept: ['paywall'] },
    { id: 'd', sentence: 'Soziale Medien erzeugen oft eine ______ . (filter bubble)', correct: 'Filterblase', accept: ['filterblase'] },
    { id: 'e', sentence: 'Eine ______ ist eine subjektive Aussage. (opinie)', correct: 'Meinung', accept: ['meinung'] },
    { id: 'f', sentence: 'Die ______ entscheidet, was du im Feed siehst. (algoritm)', correct: 'Algorithmus', accept: ['algorithmus', 'algorithmus der app'] },
    { id: 'g', sentence: 'Bei seriösen Quellen ist ______ wichtig. (verificarea sursei)', correct: 'Quellenkritik', accept: ['quellenkritik'] },
    { id: 'h', sentence: 'Mein Spotify- ______ kostet 10 Euro pro Monat. (abonament)', correct: 'Abonnement', accept: ['abonnement', 'abo'] }
];

function buildEx3() {
    const container = document.getElementById('ex3-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>📝 Completează cu substantivul potrivit din vocabular.</strong><br>
            Sugestia română între paranteze. Scrie EXACT cu majusculă (substantivele se scriu cu majusculă în germană!).
        </div>
    `;
    ex3Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>${item.sentence}</label>
                    <input type="text" id="ex3-${item.id}" placeholder="substantiv...">
                </div>
                <div class="feedback" id="ex3-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx3() {
    let correct = 0;
    const total = ex3Data.length;
    ex3Data.forEach(item => {
        const input = document.getElementById(`ex3-${item.id}`);
        const fb = document.getElementById(`ex3-f${item.id}`);
        const userAnswer = normalizeAnswer(input.value);
        const isCorrect = item.accept.some(a => normalizeAnswer(a) === userAnswer);
        if (isCorrect) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// ============================================
// EX 4: Conectori argumentativi pentru Sprechen Teil 2
// ============================================
const ex4Data = [
    { id: 'a', sentence: 'Im ______ zu früher konsumieren wir mehr digitale Medien. (comparație cu)', correct: 'Vergleich', accept: ['vergleich', 'gegensatz'] },
    { id: 'b', sentence: '______ einer ARD-Studie verbringen Jugendliche 9 Stunden pro Tag mit Medien. (potrivit)', correct: 'Laut', accept: ['laut', 'nach'] },
    { id: 'c', sentence: '______ informieren sich viele über soziale Medien statt klassische Zeitungen. (azi / nowadays)', correct: 'Heutzutage', accept: ['heutzutage', 'heute'] },
    { id: 'd', sentence: 'Es ______ darauf an, dass man Quellen kritisch hinterfragt. (depinde de)', correct: 'kommt', accept: ['kommt'] },
    { id: 'e', sentence: 'Soziale Medien können süchtig machen, ______ sind sie nicht nur negativ. (totuși)', correct: 'trotzdem', accept: ['trotzdem', 'aber', 'jedoch'] },
    { id: 'f', sentence: 'Meiner ______ nach ist Medienkompetenz wichtiger als Zugang. (părere)', correct: 'Meinung', accept: ['meinung'] },
    { id: 'g', sentence: '______ Algorithmen kontrollieren wir nur scheinbar unseren Feed. (din cauza / wegen)', correct: 'Wegen', accept: ['wegen', 'aufgrund'] },
    { id: 'h', sentence: '______ die Filterblase real ist, müssen wir verschiedene Quellen lesen. (deși)', correct: 'Obwohl', accept: ['obwohl', 'auch wenn'] }
];

function buildEx4() {
    const container = document.getElementById('ex4-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>🗣️ Completează cu conectorul argumentativ potrivit.</strong><br>
            Aceste structuri sunt esențiale pentru proba orală B2 — pentru comparație, citare studii, opinie, contrast.
        </div>
    `;
    ex4Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>${item.sentence}</label>
                    <input type="text" id="ex4-${item.id}" placeholder="conector...">
                </div>
                <div class="feedback" id="ex4-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx4() {
    let correct = 0;
    const total = ex4Data.length;
    ex4Data.forEach(item => {
        const input = document.getElementById(`ex4-${item.id}`);
        const fb = document.getElementById(`ex4-f${item.id}`);
        const userAnswer = normalizeAnswer(input.value);
        const isCorrect = item.accept.some(a => normalizeAnswer(a) === userAnswer);
        if (isCorrect) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// ============================================
// EX 5: Schreibwerkstatt — argument scurt cu Google Form (regula 18)
// ============================================
function buildEx5() {
    const container = document.getElementById('ex5-container');
    if (!container) return;
    container.innerHTML = `
        <div class="exercise-instruction">
            <strong>✍️ Schreibwerkstatt — exersează un argument scurt</strong><br>
            Scrie 4-6 propoziții (60-100 cuvinte) în germană pentru una dintre situațiile de mai jos. Sunt situații tipice pentru <strong>Sprechen Teil 2</strong> (dialog pe perechi cu argumente).
        </div>

        <div class="theory-box" style="background:#F5F0E8; border-color:#D4A574;">
            <h4>📋 Alege UNA dintre cele 3 teme:</h4>
            <ol>
                <li><strong>„Klassische Medien (Zeitung, TV) vs. soziale Medien — was ist seriöser?"</strong> Argumentează care e mai de încredere cu minim 2 motive concrete.</li>
                <li><strong>„Sind Influencer Vorbilder oder Werbeträger?"</strong> Prezintă 2 perspective folosind <em>„Auf der einen Seite ... auf der anderen Seite ..."</em>.</li>
                <li><strong>„Wie erkennt man Fake News?"</strong> Dă 3 sfaturi concrete folosind <em>„Man sollte ..."</em> + <em>„Es ist wichtig, dass ..."</em>.</li>
            </ol>
        </div>

        <div class="theory-box" style="background:#dbeafe; border-color:#D4A574;">
            <h4>💡 Structuri utile (le poți copia)</h4>
            <ul>
                <li><strong>Meiner Meinung nach</strong> + verb pe poz. 2: „Meiner Meinung nach sind klassische Medien seriöser."</li>
                <li><strong>Im Vergleich zu früher</strong>: „Im Vergleich zu früher konsumieren wir viel mehr digitale Inhalte."</li>
                <li><strong>Heutzutage</strong>: „Heutzutage informieren sich viele über soziale Medien."</li>
                <li><strong>Laut ARD-Studie / Laut Bitkom</strong>: „Laut ARD-Studie verbringen Jugendliche 9 Stunden pro Tag mit Medien."</li>
                <li><strong>Auf der einen Seite ... auf der anderen Seite ...</strong></li>
            </ul>
        </div>

        <p style="margin: 14px 0;">📝 Scrie textul tău în câmpul de mai jos (doar pentru proba personală — nu se verifică automat). Pentru corectură de la Annette → folosește formularul:</p>

        <textarea id="ex5-text" rows="8" style="width:100%; padding:14px; border:2px solid #d1fae5; border-radius:8px; font-family:inherit; font-size:1rem; line-height:1.6;" placeholder="Schreib hier deinen Text (4-6 Sätze, 60-100 Wörter)..."></textarea>

        <div style="margin: 14px 0; padding: 16px 20px; background:#ecfdf5; border: 2px solid #10b981; border-radius:10px; text-align:center;">
            <p style="margin: 0 0 10px; color:#065f46; font-weight:600;">📨 Trimite textul tău spre corectură (Annette îți răspunde personal cu feedback)</p>
            <a href="https://forms.gle/QwekxUn6a5gMXdoi8" target="_blank" rel="noopener" style="display:inline-block; background:linear-gradient(135deg, #10b981 0%, #059669 100%); color:white; padding:12px 28px; border-radius:8px; text-decoration:none; font-weight:700; font-size:1rem;">📨 Trimite spre corectură</a>
            <p style="margin: 8px 0 0; color:#5A5147; font-size:0.85rem; font-style:italic;">(formularul deschis în tab nou — în el alegi „Sprechen B2 — Medien & Kommunikation")</p>
        </div>
    `;
}

function checkEx5() {
    const textarea = document.getElementById('ex5-text');
    const userText = (textarea?.value || '').trim();
    const wordCount = userText ? userText.split(/\s+/).length : 0;

    if (wordCount < 30) {
        return { correct: 0, total: 1, message: 'Scrie cel puțin 30 de cuvinte ca să poți trimite textul spre corectură.' };
    }
    return { correct: 1, total: 1, message: `Ai scris ${wordCount} cuvinte. Acum trimite textul prin Google Form pentru corectură personală.` };
}

document.addEventListener('DOMContentLoaded', function() {
    buildEx1();
    buildEx2();
    buildEx3();
    buildEx4();
    buildEx5();
});
