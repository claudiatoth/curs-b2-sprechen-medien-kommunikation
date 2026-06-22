// ============================================
// TEORIE — Sprechen B2: Medien & Kommunikation
// Vocabular bilingv pentru proba orală B2 (Sprechen Teil 1 + Teil 2)
// Claudia Toth · Annettes Deutschkurs · Nivel B2
// Aliniat cu Testul 8 oficial Examen B2 (Medien & Kommunikation)
// ============================================

const theoryHTML = `

    <div class="theory-box" style="background:#FBF7EF; border-color:#D4A574;">
        <p style="margin:0; font-size:0.95rem;">👁 <strong>Auto-verificare:</strong> lângă fiecare propoziție-exemplu ai un buton <strong>👁</strong>. Încearcă întâi să traduci tu propoziția, apoi dă click ca să vezi traducerea în română și să te verifici.</p>
    </div>
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
                        <tr><td class="verb">die Zeitung · die Zeitungen</td><td class="ro-text">ziarul (cotidian) / ziarele</td><td><em>Meine Großeltern lesen jeden Tag die Zeitung.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Bunicii mei citesc ziarul în fiecare zi.</span></td></tr>
                        <tr><td class="verb">die Tageszeitung · -en</td><td class="ro-text">cotidianul (Süddeutsche, FAZ, Bild)</td><td><em>Die Süddeutsche ist eine seriöse Tageszeitung.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Süddeutsche e un cotidian serios.</span></td></tr>
                        <tr><td class="verb">die Zeitschrift · die Zeitschriften</td><td class="ro-text">revista tematică / revistele</td><td><em>Der Spiegel ist eine wöchentliche Zeitschrift.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Der Spiegel e o revistă săptămânală.</span></td></tr>
                        <tr><td class="verb">das Fernsehen (nur Sg.)</td><td class="ro-text">televiziunea (instituție, abstract)</td><td><em>Das Fernsehen ist immer noch wichtig in Deutschland.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Televiziunea e încă importantă în Germania.</span></td></tr>
                        <tr><td class="verb">der Fernseher · die Fernseher</td><td class="ro-text">televizorul / televizoarele (aparat)</td><td><em>Ich habe einen neuen Fernseher gekauft.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Mi-am cumpărat un televizor nou.</span></td></tr>
                        <tr><td class="verb">das Radio · die Radios</td><td class="ro-text">radioul / radiourile</td><td><em>Im Auto höre ich immer Radio.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">În mașină ascult mereu radio.</span></td></tr>
                        <tr><td class="verb">die Nachrichten (Pl.) / die Nachricht (Sg.)</td><td class="ro-text">știrile / știrea</td><td><em>Ich schaue jeden Abend die Nachrichten.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Mă uit la știri în fiecare seară.</span></td></tr>
                        <tr><td class="verb">der Sender · die Sender</td><td class="ro-text">postul (TV/radio) / posturile</td><td><em>ARD und ZDF sind öffentliche Sender.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">ARD și ZDF sunt posturi publice.</span></td></tr>
                        <tr><td class="verb">die Sendung · die Sendungen</td><td class="ro-text">emisiunea / emisiunile</td><td><em>Diese Sendung läuft jeden Sonntag.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Această emisiune rulează în fiecare duminică.</span></td></tr>
                    </tbody>
                </table>
            </div>

            <div class="theory-box" style="background:#dbeafe; border-color:#D4A574;">
                <h4>💡 Strukturen für die mündliche Prüfung</h4>
                <ul>
                    <li><strong>Ich lese gerne</strong> + Akk: <em>Ich lese gerne die Zeitung am Morgen.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Îmi place să citesc ziarul dimineața.</span></li>
                    <li><strong>Ich schaue Fernsehen</strong> (fără articol!) vs. <strong>Ich schaue den Fernseher</strong> (NU corect — folosește „Fernsehen" abstract): <em>Ich schaue jeden Abend Fernsehen.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Mă uit la televizor în fiecare seară.</span></li>
                    <li><strong>Im Radio / im Fernsehen</strong> (prepoziție „im" — în mass-media): <em>Im Radio habe ich gehört, dass…</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">La radio am auzit că…</span></li>
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
                        <tr><td class="verb">die Online-Zeitung · -en</td><td class="ro-text">ziarul online / ziarele online</td><td><em>Online-Zeitungen sind oft aktueller als Print.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Ziarele online sunt adesea mai actuale decât cele tipărite.</span></td></tr>
                        <tr><td class="verb">der Streaming-Dienst · -e</td><td class="ro-text">serviciu de streaming (Netflix, Prime)</td><td><em>Netflix ist ein beliebter Streaming-Dienst.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Netflix e un serviciu de streaming popular.</span></td></tr>
                        <tr><td class="verb">der Podcast · die Podcasts</td><td class="ro-text">podcastul / podcasturile (m, anglicism)</td><td><em>Ich höre täglich einen Podcast.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Ascult zilnic un podcast.</span></td></tr>
                        <tr><td class="verb">der Newsletter · die Newsletter</td><td class="ro-text">newsletter / newslettere (m, plural identic)</td><td><em>Jeden Montag bekomme ich einen Newsletter.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">În fiecare luni primesc un newsletter.</span></td></tr>
                        <tr><td class="verb">die App · die Apps</td><td class="ro-text">aplicația / aplicațiile (f!)</td><td><em>Diese App ist sehr nützlich.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Această aplicație e foarte utilă.</span></td></tr>
                        <tr><td class="verb">das Tablet · die Tablets</td><td class="ro-text">tableta / tabletele</td><td><em>Auf dem Tablet lese ich elektronische Bücher.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Pe tabletă citesc cărți electronice.</span></td></tr>
                        <tr><td class="verb">der Bildschirm · die Bildschirme</td><td class="ro-text">ecranul / ecranele</td><td><em>Den ganzen Tag vor dem Bildschirm sitzen ist ungesund.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">A sta toată ziua în fața ecranului e nesănătos.</span></td></tr>
                        <tr><td class="verb">scrollen / klicken / streamen</td><td class="ro-text">a scroll-a / a face click / a face streaming</td><td><em>Ich scrolle stundenlang auf Instagram.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Dau scroll ore în șir pe Instagram.</span></td></tr>
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
                        <tr><td class="verb">die sozialen Medien (Pl.)</td><td class="ro-text">rețelele sociale (NUR Plural în context)</td><td><em>Die sozialen Medien dominieren unseren Alltag.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Rețelele sociale ne domină cotidianul.</span></td></tr>
                        <tr><td class="verb">Instagram / TikTok / X (Twitter)</td><td class="ro-text">numele platformelor (genul: das)</td><td><em>Auf TikTok sind viele Jugendliche aktiv.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Pe TikTok sunt mulți tineri activi.</span></td></tr>
                        <tr><td class="verb">der/die Influencer/in · -in/-innen</td><td class="ro-text">influencer / influenceriță</td><td><em>Influencer verdienen oft mehr als klassische Models.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Influencerii câștigă adesea mai mult decât modelele clasice.</span></td></tr>
                        <tr><td class="verb">die Reichweite · die Reichweiten</td><td class="ro-text">anvergura (audiență) / anvergurile</td><td><em>Ihre Reichweite beträgt 5 Millionen Follower.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Anvergura ei e de 5 milioane de urmăritori.</span></td></tr>
                        <tr><td class="verb">der Follower · die Follower</td><td class="ro-text">urmăritor / urmăritori (m, plural identic)</td><td><em>Sie hat 200.000 Follower auf Instagram.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Are 200.000 de urmăritori pe Instagram.</span></td></tr>
                        <tr><td class="verb">die Werbung (nur Sg.)</td><td class="ro-text">publicitatea, reclama (abstract)</td><td><em>Influencer verdienen Geld durch Werbung.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Influencerii câștigă bani din publicitate.</span></td></tr>
                        <tr><td class="verb">der Hashtag · die Hashtags</td><td class="ro-text">hashtag-ul / hashtag-urile</td><td><em>Der Hashtag #Berlin ist sehr populär.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Hashtag-ul #Berlin e foarte popular.</span></td></tr>
                        <tr><td class="verb">posten / liken / teilen / kommentieren</td><td class="ro-text">a posta / a da like / a distribui / a comenta</td><td><em>Sie postet jeden Tag ein Foto.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Postează o poză în fiecare zi.</span></td></tr>
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
                        <tr><td class="verb">die seriöse Quelle · -n</td><td class="ro-text">sursa serioasă (verificată)</td><td><em>Wikipedia ist nicht immer eine seriöse Quelle.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Wikipedia nu e mereu o sursă serioasă.</span></td></tr>
                        <tr><td class="verb">die Fake News (Pl./Sg. abstract)</td><td class="ro-text">știrile false (anglicism)</td><td><em>Fake News verbreiten sich schnell im Internet.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Știrile false se răspândesc repede pe internet.</span></td></tr>
                        <tr><td class="verb">die Tatsache · die Tatsachen</td><td class="ro-text">faptul / faptele (verificabil!)</td><td><em>Tatsachen kann man überprüfen, Meinungen nicht.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Faptele pot fi verificate, opiniile nu.</span></td></tr>
                        <tr><td class="verb">die Meinung · die Meinungen</td><td class="ro-text">opinia / opiniile</td><td><em>Jede Meinung ist subjektiv.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Orice opinie e subiectivă.</span></td></tr>
                        <tr><td class="verb">die Quellenkritik (nur Sg.)</td><td class="ro-text">verificarea sursei (abstract, B2 cheie!)</td><td><em>Quellenkritik ist heute wichtiger denn je.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Verificarea surselor e azi mai importantă ca niciodată.</span></td></tr>
                        <tr><td class="verb">die Recherche · die Recherchen</td><td class="ro-text">cercetarea / cercetările (jurnalistic)</td><td><em>Gute Journalisten machen gründliche Recherche.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Jurnaliștii buni fac o cercetare temeinică.</span></td></tr>
                        <tr><td class="verb">der Journalist · die Journalisten</td><td class="ro-text">jurnalistul / jurnaliștii</td><td><em>Journalisten sollten objektiv berichten.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Jurnaliștii ar trebui să relateze obiectiv.</span></td></tr>
                        <tr><td class="verb">überprüfen · sich informieren</td><td class="ro-text">a verifica · a se informa</td><td><em>Vor dem Teilen sollte man jede Information überprüfen.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Înainte de a distribui, ar trebui să verifici fiecare informație.</span></td></tr>
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
                        <tr><td class="verb">die Filterblase · -n</td><td class="ro-text">filter bubble (algoritm îți filtrează lumea)</td><td><em>In einer Filterblase sieht man nur ähnliche Meinungen.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Într-o bulă de filtrare vezi doar opinii asemănătoare.</span></td></tr>
                        <tr><td class="verb">die Echokammer · -n</td><td class="ro-text">camera de ecou (auzi doar ce-ți place)</td><td><em>Soziale Medien sind oft Echokammern.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Rețelele sociale sunt adesea camere de ecou.</span></td></tr>
                        <tr><td class="verb">die Informationsüberflutung (nur Sg.)</td><td class="ro-text">potopul de informații</td><td><em>Die Informationsüberflutung macht müde.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Potopul de informații obosește.</span></td></tr>
                        <tr><td class="verb">die Manipulation · die Manipulationen</td><td class="ro-text">manipularea / manipulările</td><td><em>Werbung ist eine Form von Manipulation.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Publicitatea e o formă de manipulare.</span></td></tr>
                        <tr><td class="verb">die Sucht · die Süchte</td><td class="ro-text">dependența / dependențele (Umlaut!)</td><td><em>Soziale Medien können süchtig machen.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Rețelele sociale pot crea dependență.</span></td></tr>
                        <tr><td class="verb">der Datenschutz (nur Sg.)</td><td class="ro-text">protecția datelor</td><td><em>In Deutschland ist Datenschutz sehr wichtig.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">În Germania protecția datelor e foarte importantă.</span></td></tr>
                        <tr><td class="verb">der Hate Speech / die Hassrede</td><td class="ro-text">discurs de ură (anglicism + termen german)</td><td><em>Hate Speech ist ein wachsendes Problem.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Discursul de ură e o problemă tot mai mare.</span></td></tr>
                        <tr><td class="verb">die Bildschirmzeit (nur Sg.)</td><td class="ro-text">timpul ecran (B2 cuvânt compus)</td><td><em>Meine Bildschirmzeit ist zu hoch.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Timpul meu de ecran e prea mare.</span></td></tr>
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
                        <tr><td class="verb">der KI-Journalismus (nur Sg.)</td><td class="ro-text">jurnalismul cu AI (Künstliche Intelligenz)</td><td><em>KI-Journalismus wirft viele ethische Fragen auf.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Jurnalismul cu AI ridică multe întrebări etice.</span></td></tr>
                        <tr><td class="verb">die Paywall · die Paywalls</td><td class="ro-text">zid de plată (anglicism)</td><td><em>Nach 5 Artikeln blockiert die Paywall den Zugang.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">După 5 articole, zidul de plată blochează accesul.</span></td></tr>
                        <tr><td class="verb">die kostenpflichtigen Inhalte (Pl.)</td><td class="ro-text">conținuturi cu plată</td><td><em>Immer mehr Zeitungen bieten kostenpflichtige Inhalte an.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Tot mai multe ziare oferă conținut cu plată.</span></td></tr>
                        <tr><td class="verb">der unabhängige Journalist · -en</td><td class="ro-text">jurnalist independent</td><td><em>Substack-Autoren sind unabhängige Journalisten.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Autorii de pe Substack sunt jurnaliști independenți.</span></td></tr>
                        <tr><td class="verb">das Abonnement · die Abonnements</td><td class="ro-text">abonamentul / abonamentele (lecă-)</td><td><em>Mein Spotify-Abonnement kostet 10 Euro im Monat.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Abonamentul meu Spotify costă 10 euro pe lună.</span></td></tr>
                        <tr><td class="verb">die Mediendiät (nur Sg.)</td><td class="ro-text">dieta media (consum conștient)</td><td><em>Eine Mediendiät reduziert Stress.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">O dietă media reduce stresul.</span></td></tr>
                        <tr><td class="verb">die Medienkompetenz (nur Sg.)</td><td class="ro-text">competența media (cuvânt cheie B2!)</td><td><em>Medienkompetenz sollte in der Schule unterrichtet werden.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Competența media ar trebui predată în școală.</span></td></tr>
                        <tr><td class="verb">der Algorithmus · die Algorithmen</td><td class="ro-text">algoritmul / algoritmii</td><td><em>Der Algorithmus entscheidet, was du siehst.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Algoritmul decide ce vezi.</span></td></tr>
                    </tbody>
                </table>
            </div>

            <div class="theory-box" style="background:#dbeafe; border-color:#D4A574;">
                <h4>💡 Strukturen für die Argumentation (für Teil 2)</h4>
                <ul>
                    <li><strong>Im Vergleich zu früher</strong>: <em>Im Vergleich zu früher konsumieren wir mehr Medien.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Comparativ cu altădată, consumăm mai multă media.</span></li>
                    <li><strong>Heutzutage</strong>: <em>Heutzutage informieren sich viele über soziale Medien.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">În zilele noastre, mulți se informează prin rețelele sociale.</span></li>
                    <li><strong>Laut ARD-Studie / Laut Bitkom</strong>: <em>Laut ARD-Studie verbringen Jugendliche 9 Stunden pro Tag mit Medien.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Conform unui studiu ARD, tinerii petrec 9 ore pe zi cu media.</span></li>
                    <li><strong>Es kommt darauf an, dass</strong>: <em>Es kommt darauf an, dass man Quellen kritisch hinterfragt.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Important e să pui sub semnul întrebării sursele, în mod critic.</span></li>
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


// 👁 Toggle traducere RO ascunsă (auto-verificare)
function toggleRo(btn) {
    const ro = btn.nextElementSibling;
    if (!ro || !ro.classList.contains('ro-reveal')) return;
    const open = ro.classList.toggle('show');
    btn.classList.toggle('active', open);
    btn.title = open ? 'Ascunde traducerea' : 'Vezi traducerea';
    btn.setAttribute('aria-label', btn.title);
}
