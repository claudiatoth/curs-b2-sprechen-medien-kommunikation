// ============================================
// TEORIE — Sprechen B2: Medien & Kommunikation
// Vocabular bilingv pentru proba orală B2 (Sprechen Teil 1 + Teil 2)
// Claudia Toth · Annettes Deutschkurs · Nivel B2
// Aliniat cu Testul 8 oficial Examen B2 (Medien & Kommunikation)
// ============================================

const theoryHTML = `
    <!-- 1: Klassische Medien -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(0)">
            <span>📰 1. Klassische Medien — ziar, televizor, radio (mediile tradiționale)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-0">
            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea îți spune:</div>
                    <div class="text">La proba orală B2: <em>„Welche Medien nutzt du?"</em>. Învață <strong>die Zeitung</strong> (cotidian, ziar — Tageszeitung Süddeutsche, Bild, FAZ) vs. <strong>die Zeitschrift</strong> (revistă tematică — Stern, Der Spiegel) și capcana cu plural <em>die Zeitungen / die Zeitschriften</em>. Și <strong>das Fernsehen</strong> (TV ca instituție, abstract — NUR Singular) vs. <strong>der Fernseher</strong> (aparatul concret, are plural). 🦋</div>
                </div>
            </div>

            <div class="theory-box">
                <h4>📚 Vocabular — Klassische Medien</h4>
                <table class="theory-table">
                    <thead><tr><th>Germană (Sg + Pl)</th><th>Traducere RO</th><th>Exemplu în context</th></tr></thead>
                    <tbody>
                        <tr><td class="verb">die Zeitung · die Zeitungen</td><td class="ro-text">ziarul (cotidian) / ziarele</td><td><em>Meine Großeltern lesen jeden Tag die Zeitung.</em></td></tr>
                        <tr><td class="verb">die Tageszeitung · -en</td><td class="ro-text">cotidianul (Süddeutsche, FAZ, Bild)</td><td><em>Die Süddeutsche ist eine seriöse Tageszeitung.</em></td></tr>
                        <tr><td class="verb">die Zeitschrift · die Zeitschriften</td><td class="ro-text">revista tematică / revistele</td><td><em>Der Spiegel ist eine wöchentliche Zeitschrift.</em></td></tr>
                        <tr><td class="verb">das Fernsehen (nur Sg.)</td><td class="ro-text">televiziunea (instituție, abstract)</td><td><em>Das Fernsehen ist immer noch wichtig in Deutschland.</em></td></tr>
                        <tr><td class="verb">der Fernseher · die Fernseher</td><td class="ro-text">televizorul / televizoarele (aparat)</td><td><em>Ich habe einen neuen Fernseher gekauft.</em></td></tr>
                        <tr><td class="verb">das Radio · die Radios</td><td class="ro-text">radioul / radiourile</td><td><em>Im Auto höre ich immer Radio.</em></td></tr>
                        <tr><td class="verb">die Nachrichten (Pl.) / die Nachricht (Sg.)</td><td class="ro-text">știrile / știrea</td><td><em>Ich schaue jeden Abend die Nachrichten.</em></td></tr>
                        <tr><td class="verb">der Sender · die Sender</td><td class="ro-text">postul (TV/radio) / posturile</td><td><em>ARD und ZDF sind öffentliche Sender.</em></td></tr>
                        <tr><td class="verb">die Sendung · die Sendungen</td><td class="ro-text">emisiunea / emisiunile</td><td><em>Diese Sendung läuft jeden Sonntag.</em></td></tr>
                    </tbody>
                </table>
            </div>

            <div class="theory-box" style="background:#dbeafe; border-color:#3b82f6;">
                <h4>💡 Strukturen für die mündliche Prüfung</h4>
                <ul>
                    <li><strong>Ich lese gerne</strong> + Akk: <em>Ich lese gerne die Zeitung am Morgen.</em></li>
                    <li><strong>Ich schaue Fernsehen</strong> (fără articol!) vs. <strong>Ich schaue den Fernseher</strong> (NU corect — folosește „Fernsehen" abstract): <em>Ich schaue jeden Abend Fernsehen.</em></li>
                    <li><strong>Im Radio / im Fernsehen</strong> (prepoziție „im" — în mass-media): <em>Im Radio habe ich gehört, dass…</em></li>
                </ul>
            </div>
        </div>
    </div>

    <!-- 2: Digitale Medien -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(1)">
            <span>📱 2. Digitale Medien — online, streaming, podcast, app</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-1">
            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea îți spune:</div>
                    <div class="text">Argument B2 frecvent: <em>„Online-Zeitung oder gedruckte Zeitung?"</em>. Învață anglicismele tehnologice — toate sunt **substantive neutre** în germană: <strong>das Streaming</strong>, <strong>das Podcast</strong>, <strong>das Newsletter</strong>, <strong>das Tablet</strong>. Excepție: <strong>die App</strong> (feminin, Abkürzung pentru „Applikation"). Tip: când vezi un anglicism, e neutru aproape mereu — cu excepția feminine derivate (die App, die SMS). 🦋</div>
                </div>
            </div>

            <div class="theory-box">
                <h4>📚 Vocabular — Digitale Medien</h4>
                <table class="theory-table">
                    <thead><tr><th>Germană (Sg + Pl)</th><th>Traducere RO</th><th>Exemplu în context</th></tr></thead>
                    <tbody>
                        <tr><td class="verb">die Online-Zeitung · -en</td><td class="ro-text">ziarul online / ziarele online</td><td><em>Online-Zeitungen sind oft aktueller als Print.</em></td></tr>
                        <tr><td class="verb">der Streaming-Dienst · -e</td><td class="ro-text">serviciu de streaming (Netflix, Prime)</td><td><em>Netflix ist ein beliebter Streaming-Dienst.</em></td></tr>
                        <tr><td class="verb">der Podcast · die Podcasts</td><td class="ro-text">podcastul / podcasturile (m, anglicism)</td><td><em>Ich höre täglich einen Podcast.</em></td></tr>
                        <tr><td class="verb">der Newsletter · die Newsletter</td><td class="ro-text">newsletter / newslettere (m, plural identic)</td><td><em>Jeden Montag bekomme ich einen Newsletter.</em></td></tr>
                        <tr><td class="verb">die App · die Apps</td><td class="ro-text">aplicația / aplicațiile (f!)</td><td><em>Diese App ist sehr nützlich.</em></td></tr>
                        <tr><td class="verb">das Tablet · die Tablets</td><td class="ro-text">tableta / tabletele</td><td><em>Auf dem Tablet lese ich elektronische Bücher.</em></td></tr>
                        <tr><td class="verb">der Bildschirm · die Bildschirme</td><td class="ro-text">ecranul / ecranele</td><td><em>Den ganzen Tag vor dem Bildschirm sitzen ist ungesund.</em></td></tr>
                        <tr><td class="verb">scrollen / klicken / streamen</td><td class="ro-text">a scroll-a / a face click / a face streaming</td><td><em>Ich scrolle stundenlang auf Instagram.</em></td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <!-- 3: Soziale Medien & Influencer -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(2)">
            <span>📲 3. Soziale Medien & Influencer — Instagram, TikTok, Werbung</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-2">
            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea îți spune:</div>
                    <div class="text">Argument B2 puternic: <em>„Sind Influencer Vorbilder oder Werbeträger?"</em>. Învață <strong>der/die Influencer/in</strong> (forma masculin/feminin existentă în germană din 2018) + <strong>die Reichweite</strong> (anvergura — câți oameni te urmăresc) + <strong>der Follower</strong> (urmăritor — anglicism, plural identic). Capcana cu plural: <em>die Influencer</em> (m), <em>die Influencerinnen</em> (f, plural specific). 🦋</div>
                </div>
            </div>

            <div class="theory-box">
                <h4>📚 Vocabular — Soziale Medien & Influencer</h4>
                <table class="theory-table">
                    <thead><tr><th>Germană (Sg + Pl)</th><th>Traducere RO</th><th>Exemplu în context</th></tr></thead>
                    <tbody>
                        <tr><td class="verb">die sozialen Medien (Pl.)</td><td class="ro-text">rețelele sociale (NUR Plural în context)</td><td><em>Die sozialen Medien dominieren unseren Alltag.</em></td></tr>
                        <tr><td class="verb">Instagram / TikTok / X (Twitter)</td><td class="ro-text">numele platformelor (genul: das)</td><td><em>Auf TikTok sind viele Jugendliche aktiv.</em></td></tr>
                        <tr><td class="verb">der/die Influencer/in · -in/-innen</td><td class="ro-text">influencer / influenceriță</td><td><em>Influencer verdienen oft mehr als klassische Models.</em></td></tr>
                        <tr><td class="verb">die Reichweite · die Reichweiten</td><td class="ro-text">anvergura (audiență) / anvergurile</td><td><em>Ihre Reichweite beträgt 5 Millionen Follower.</em></td></tr>
                        <tr><td class="verb">der Follower · die Follower</td><td class="ro-text">urmăritor / urmăritori (m, plural identic)</td><td><em>Sie hat 200.000 Follower auf Instagram.</em></td></tr>
                        <tr><td class="verb">die Werbung (nur Sg.)</td><td class="ro-text">publicitatea, reclama (abstract)</td><td><em>Influencer verdienen Geld durch Werbung.</em></td></tr>
                        <tr><td class="verb">der Hashtag · die Hashtags</td><td class="ro-text">hashtag-ul / hashtag-urile</td><td><em>Der Hashtag #Berlin ist sehr populär.</em></td></tr>
                        <tr><td class="verb">posten / liken / teilen / kommentieren</td><td class="ro-text">a posta / a da like / a distribui / a comenta</td><td><em>Sie postet jeden Tag ein Foto.</em></td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <!-- 4: Nachrichten & Information -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(3)">
            <span>📰 4. Nachrichten & Information — Qualität, Fake News, Quellenkritik</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-3">
            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea îți spune:</div>
                    <div class="text">Tema CHEIE B2: <em>„Wie erkennt man Fake News?"</em>. Învață <strong>die seriöse Quelle</strong> (sursă seroasă, verificată) vs. <strong>die Fake News</strong> (anglicism, plural folosit ca singular abstract) + <strong>die Tatsache vs. die Meinung</strong> (fapt vs. opinie — diferență esențială la examen!). Argument puternic: <em>„Quellenkritik ist eine Schlüsselkompetenz heute."</em> 🦋</div>
                </div>
            </div>

            <div class="theory-box">
                <h4>📚 Vocabular — Nachrichten & Information</h4>
                <table class="theory-table">
                    <thead><tr><th>Germană (Sg + Pl)</th><th>Traducere RO</th><th>Exemplu în context</th></tr></thead>
                    <tbody>
                        <tr><td class="verb">die seriöse Quelle · -n</td><td class="ro-text">sursa serioasă (verificată)</td><td><em>Wikipedia ist nicht immer eine seriöse Quelle.</em></td></tr>
                        <tr><td class="verb">die Fake News (Pl./Sg. abstract)</td><td class="ro-text">știrile false (anglicism)</td><td><em>Fake News verbreiten sich schnell im Internet.</em></td></tr>
                        <tr><td class="verb">die Tatsache · die Tatsachen</td><td class="ro-text">faptul / faptele (verificabil!)</td><td><em>Tatsachen kann man überprüfen, Meinungen nicht.</em></td></tr>
                        <tr><td class="verb">die Meinung · die Meinungen</td><td class="ro-text">opinia / opiniile</td><td><em>Jede Meinung ist subjektiv.</em></td></tr>
                        <tr><td class="verb">die Quellenkritik (nur Sg.)</td><td class="ro-text">verificarea sursei (abstract, B2 cheie!)</td><td><em>Quellenkritik ist heute wichtiger denn je.</em></td></tr>
                        <tr><td class="verb">die Recherche · die Recherchen</td><td class="ro-text">cercetarea / cercetările (jurnalistic)</td><td><em>Gute Journalisten machen gründliche Recherche.</em></td></tr>
                        <tr><td class="verb">der Journalist · die Journalisten</td><td class="ro-text">jurnalistul / jurnaliștii</td><td><em>Journalisten sollten objektiv berichten.</em></td></tr>
                        <tr><td class="verb">überprüfen · sich informieren</td><td class="ro-text">a verifica · a se informa</td><td><em>Vor dem Teilen sollte man jede Information überprüfen.</em></td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <!-- 5: Probleme moderne -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(4)">
            <span>⚠️ 5. Probleme moderne — Filterblase, Informationsüberflutung, Manipulation</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-4">
            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea îți spune:</div>
                    <div class="text">Argumente puternice B2: <strong>die Filterblase</strong> (filter bubble — algoritmul îți arată doar ce-ți place, „efect bulă") + <strong>die Echokammer</strong> (echo chamber — auzi doar opinii care confirmă ce gândești deja). Plus <strong>die Informationsüberflutung</strong> (potop de informații — cuvânt compus B2 tipic). Citează: „Laut einer Studie verbringen Jugendliche 9 Stunden pro Tag mit Medien." 🦋</div>
                </div>
            </div>

            <div class="theory-box">
                <h4>📚 Vocabular — Probleme moderne</h4>
                <table class="theory-table">
                    <thead><tr><th>Germană (Sg + Pl)</th><th>Traducere RO</th><th>Exemplu în context</th></tr></thead>
                    <tbody>
                        <tr><td class="verb">die Filterblase · -n</td><td class="ro-text">filter bubble (algoritm îți filtrează lumea)</td><td><em>In einer Filterblase sieht man nur ähnliche Meinungen.</em></td></tr>
                        <tr><td class="verb">die Echokammer · -n</td><td class="ro-text">camera de ecou (auzi doar ce-ți place)</td><td><em>Soziale Medien sind oft Echokammern.</em></td></tr>
                        <tr><td class="verb">die Informationsüberflutung (nur Sg.)</td><td class="ro-text">potopul de informații</td><td><em>Die Informationsüberflutung macht müde.</em></td></tr>
                        <tr><td class="verb">die Manipulation · die Manipulationen</td><td class="ro-text">manipularea / manipulările</td><td><em>Werbung ist eine Form von Manipulation.</em></td></tr>
                        <tr><td class="verb">die Sucht · die Süchte</td><td class="ro-text">dependența / dependențele (Umlaut!)</td><td><em>Soziale Medien können süchtig machen.</em></td></tr>
                        <tr><td class="verb">der Datenschutz (nur Sg.)</td><td class="ro-text">protecția datelor</td><td><em>In Deutschland ist Datenschutz sehr wichtig.</em></td></tr>
                        <tr><td class="verb">der Hate Speech / die Hassrede</td><td class="ro-text">discurs de ură (anglicism + termen german)</td><td><em>Hate Speech ist ein wachsendes Problem.</em></td></tr>
                        <tr><td class="verb">die Bildschirmzeit (nur Sg.)</td><td class="ro-text">timpul ecran (B2 cuvânt compus)</td><td><em>Meine Bildschirmzeit ist zu hoch.</em></td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <!-- 6: Trends 2025-2026 -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(5)">
            <span>🌱 6. Trends 2025-2026 — KI-Journalismus, Paywall, Substack, Mediendiät</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-5">
            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea îți spune:</div>
                    <div class="text">Trend-uri 2026: <strong>KI-Journalismus</strong> (jurnalism cu AI — ChatGPT scrie deja știri!), <strong>die Paywall</strong> (zid de plată — citești 5 articole gratuit, apoi plătești), <strong>Substack/Patreon</strong> (jurnaliști independenți + abonament direct, fără editor) și <strong>die Mediendiät</strong> (dietă media — limitezi conștient consumul de știri pentru sănătate mentală). Citează: „Laut ARD-Studie 2025 abonează 12% dintre germani la newsletters plătite." 🦋</div>
                </div>
            </div>

            <div class="theory-box">
                <h4>📚 Vocabular — Trends 2025-2026</h4>
                <table class="theory-table">
                    <thead><tr><th>Germană (Sg + Pl)</th><th>Traducere RO</th><th>Exemplu în context</th></tr></thead>
                    <tbody>
                        <tr><td class="verb">der KI-Journalismus (nur Sg.)</td><td class="ro-text">jurnalismul cu AI (Künstliche Intelligenz)</td><td><em>KI-Journalismus wirft viele ethische Fragen auf.</em></td></tr>
                        <tr><td class="verb">die Paywall · die Paywalls</td><td class="ro-text">zid de plată (anglicism)</td><td><em>Nach 5 Artikeln blockiert die Paywall den Zugang.</em></td></tr>
                        <tr><td class="verb">die kostenpflichtigen Inhalte (Pl.)</td><td class="ro-text">conținuturi cu plată</td><td><em>Immer mehr Zeitungen bieten kostenpflichtige Inhalte an.</em></td></tr>
                        <tr><td class="verb">der unabhängige Journalist · -en</td><td class="ro-text">jurnalist independent</td><td><em>Substack-Autoren sind unabhängige Journalisten.</em></td></tr>
                        <tr><td class="verb">das Abonnement · die Abonnements</td><td class="ro-text">abonamentul / abonamentele (lecă-)</td><td><em>Mein Spotify-Abonnement kostet 10 Euro im Monat.</em></td></tr>
                        <tr><td class="verb">die Mediendiät (nur Sg.)</td><td class="ro-text">dieta media (consum conștient)</td><td><em>Eine Mediendiät reduziert Stress.</em></td></tr>
                        <tr><td class="verb">die Medienkompetenz (nur Sg.)</td><td class="ro-text">competența media (cuvânt cheie B2!)</td><td><em>Medienkompetenz sollte in der Schule unterrichtet werden.</em></td></tr>
                        <tr><td class="verb">der Algorithmus · die Algorithmen</td><td class="ro-text">algoritmul / algoritmii</td><td><em>Der Algorithmus entscheidet, was du siehst.</em></td></tr>
                    </tbody>
                </table>
            </div>

            <div class="theory-box" style="background:#dbeafe; border-color:#3b82f6;">
                <h4>💡 Strukturen für die Argumentation (für Teil 2)</h4>
                <ul>
                    <li><strong>Im Vergleich zu früher</strong>: <em>Im Vergleich zu früher konsumieren wir mehr Medien.</em></li>
                    <li><strong>Heutzutage</strong>: <em>Heutzutage informieren sich viele über soziale Medien.</em></li>
                    <li><strong>Laut ARD-Studie / Laut Bitkom</strong>: <em>Laut ARD-Studie verbringen Jugendliche 9 Stunden pro Tag mit Medien.</em></li>
                    <li><strong>Es kommt darauf an, dass</strong>: <em>Es kommt darauf an, dass man Quellen kritisch hinterfragt.</em></li>
                    <li><strong>Auf der einen Seite ... auf der anderen Seite ...</strong> (pe de o parte ... pe de alta ...)</li>
                </ul>
            </div>
        </div>
    </div>
`;

document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('theory-container');
    if (container) container.innerHTML = theoryHTML;
});
