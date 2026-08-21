<!-- =================================================================== --><!-- PROCTOR FELLOWS DIRECTORY - 234 fellows, 1957 to 2026               --><!-- Cards collapse; click one to open it. Search opens any card whose   --><!-- match is hidden inside. Every fellow has a marker comment.          --><!-- Blank template at the bottom of this file.                          --><!--                                                                     --><!-- INSTALL: text format = Full HTML FIRST, Source view, select all,    --><!-- delete, paste, save WITHOUT switching to the visual editor.         --><!-- =================================================================== --><style>
.proctor-fellows{--ink:#0f1d2c;--ink-soft:#3d4e5e;--muted:#7a8896;--line:#dde4eb;--bg:#f5f7fa;
 --paper:#fff;--accent:#0b5394;--accent-soft:#eaf1f8;--gold:#c2933a;--radius:14px;
 font-family:Georgia,"Times New Roman",serif;color:var(--ink);max-width:1100px;margin:0 auto;
 line-height:1.7;font-size:17px}
.proctor-fellows *{box-sizing:border-box}
/* ---- search ---- */
.pf-search{background:var(--paper);border:1px solid var(--line);border-radius:var(--radius);
 padding:20px 22px;margin:0 0 16px;box-shadow:0 1px 3px rgba(15,29,44,.05)}
.proctor-fellows input.pf-q{width:100%;font-family:Georgia,serif;font-size:1.05rem;color:var(--ink);
 background:var(--bg);border:2px solid var(--line);border-radius:10px;padding:12px 16px}
.proctor-fellows input.pf-q:focus{outline:none;border-color:var(--accent);background:var(--paper)}
.pf-bar{display:flex;align-items:center;gap:14px;flex-wrap:wrap;margin:0 0 18px;padding:0 4px}
.pf-count{font-family:-apple-system,BlinkMacSystemFont,Helvetica,sans-serif;font-size:.95rem;
 color:var(--ink-soft);margin:0}
.pf-count strong{color:var(--ink)}
.proctor-fellows button.pf-allbtn{margin-left:auto;font-family:-apple-system,BlinkMacSystemFont,Helvetica,sans-serif;
 font-size:.88rem;font-weight:600;cursor:pointer;background:none;border:none;color:var(--accent);
 text-decoration:underline;padding:4px 2px}
/* ---- card ---- */
.pf-fellows-grid{display:flex;flex-direction:column;gap:14px}
.pf-fellow-card{background:var(--paper);border:1px solid var(--line);border-left:5px solid var(--accent);
 border-radius:var(--radius);box-shadow:0 1px 3px rgba(15,29,44,.05);padding:20px 24px;
 display:grid;grid-template-columns:120px 1fr auto;gap:24px;align-items:start;
 transition:box-shadow .2s}
.pf-fellow-card:hover{box-shadow:0 8px 22px rgba(15,29,44,.09)}
.pf-fellow-card.is-open{border-left-color:var(--gold)}
.pf-fellow-photo{width:120px;height:120px;background:var(--bg);border-radius:10px;overflow:hidden;
 position:relative;line-height:0}
.pf-fellow-photo.is-empty{display:flex;align-items:center;justify-content:center;border:1px dashed #c5d0db;
 color:#aab7c4;font-family:sans-serif;font-size:.66rem;text-align:center;line-height:1.35}
.pf-fellow-photo img{width:100%;height:100%;object-fit:contain;display:block;position:absolute;
 top:0;left:0;background:var(--bg);border-radius:10px}
.pf-body{min-width:0}
.pf-span-top{font-family:-apple-system,BlinkMacSystemFont,Helvetica,sans-serif;font-size:1.1rem;
 font-weight:700;color:var(--accent);margin:0 0 2px;letter-spacing:.3px}
.pf-name{font-size:1.32rem;font-weight:400;margin:0;line-height:1.25}
.proctor-fellows a.pf-name-link{color:var(--ink);text-decoration:none;
 border-bottom:2px solid rgba(11,83,148,.22)}
.proctor-fellows a.pf-name-link:hover{color:var(--accent);border-bottom-color:var(--accent)}
.proctor-fellows .pf-name,
.proctor-fellows .pf-name a,
.proctor-fellows .pf-name a:link,
.proctor-fellows .pf-name a:visited{font-weight:400}
.pf-ext{font-size:.62em;vertical-align:.28em;margin-left:.35em;color:var(--muted);font-weight:400}
.pf-memoriam{display:inline-block;font-family:-apple-system,BlinkMacSystemFont,Helvetica,sans-serif;
 font-size:.7rem;font-weight:600;letter-spacing:.8px;text-transform:uppercase;color:#6b7580;
 border-left:3px solid #c5cdd6;padding:1px 0 1px 9px;margin:8px 0 0}
.pf-summary{font-size:.93rem;color:var(--ink-soft);line-height:1.6;margin:0 0 4px;display:none}
.pf-fellow-card.is-open .pf-summary{display:block}
/* ---- the toggle ---- */
.proctor-fellows button.pf-toggle{background:var(--bg);border:1px solid var(--line);border-radius:50%;
 width:38px;height:38px;cursor:pointer;color:var(--ink-soft);font-size:1rem;line-height:1;
 display:flex;align-items:center;justify-content:center;transition:background .15s,transform .2s,color .15s}
.proctor-fellows button.pf-toggle:hover{background:var(--accent-soft);color:var(--accent)}
.proctor-fellows button.pf-toggle:focus-visible{outline:3px solid var(--accent);outline-offset:2px}
.pf-fellow-card.is-open button.pf-toggle{transform:rotate(180deg);background:var(--accent-soft);color:var(--accent)}
.pf-toggle-spacer{width:38px}
/* ---- hidden detail ---- */
.pf-more{grid-column:2 / -1;display:none;padding-top:4px}
.pf-fellow-card.is-open .pf-more{display:block}
.pf-native{font-size:.9rem;color:var(--ink-soft);margin:0 0 2px}
.pf-script-lbl{font-family:-apple-system,BlinkMacSystemFont,Helvetica,sans-serif;font-size:.6rem;
 font-weight:700;text-transform:uppercase;letter-spacing:1.2px;color:var(--muted);
 display:inline-block;min-width:5.2em;margin-right:.5em}
[lang="he"]{font-size:1.05em}
.pf-country{font-size:.86rem;color:var(--ink-soft);margin:12px 0 0}
.pf-country strong{font-family:-apple-system,BlinkMacSystemFont,Helvetica,sans-serif;font-size:.66rem;
 font-weight:700;text-transform:uppercase;letter-spacing:1.3px;color:var(--muted);
 display:inline-block;margin-right:.5em}
.pf-sec-head{font-family:-apple-system,BlinkMacSystemFont,Helvetica,sans-serif;font-size:.66rem;
 font-weight:700;text-transform:uppercase;letter-spacing:1.4px;margin:16px 0 6px}
.pf-sec-edu{color:var(--muted)} .pf-sec-roles{color:#8a661f} .pf-sec-pubs{color:#2f6b52}
.pf-list{list-style:none;margin:0;padding:0}
.pf-list li{font-size:.86rem;color:var(--ink-soft);line-height:1.55;margin:0 0 5px;
 padding-left:15px;position:relative}
.pf-edu li::before{content:"\203a";color:var(--accent);position:absolute;left:0;top:0;font-weight:700}
.pf-roles li::before{content:"\25aa";color:var(--gold);position:absolute;left:0;top:0}
.pf-pubs li::before{content:"\25c6";color:#2f6b52;position:absolute;left:0;top:0;font-size:.8em}
.pf-pubs a{color:var(--accent);text-decoration:none;border-bottom:1px solid rgba(11,83,148,.25)}
mark{background:#fdf0c8;color:inherit;padding:0 1px}
.pf-hidden{display:none !important}
.pf-empty{text-align:center;padding:48px;color:var(--ink-soft);background:var(--bg);
 border:1px dashed var(--line);border-radius:var(--radius)}
.pf-note{font-family:-apple-system,BlinkMacSystemFont,Helvetica,sans-serif;font-size:.78rem;
 color:var(--muted);text-transform:uppercase;letter-spacing:1.4px;font-weight:700;margin:0 0 12px}
@media (max-width:640px){
 .pf-fellow-card{grid-template-columns:96px 1fr auto;gap:16px;padding:16px}
 .pf-fellow-photo{width:96px;height:96px}
 .pf-more{grid-column:1 / -1}
}
@media print{
 .pf-search,.pf-bar,button.pf-toggle{display:none !important}
 .pf-more{display:block !important}
 .pf-fellow-card{break-inside:avoid;box-shadow:none}
}
/* ---- label above the year ---- */
.pf-year-lbl{display:block;font-size:.6rem;font-weight:700;text-transform:uppercase;
 letter-spacing:1.3px;color:var(--muted);margin:0 0 1px}
/* ---- empty placeholders collapse away until filled in ---- */
.pf-summary:empty,.pf-country:empty,.pf-native:empty{display:none}
/* ---- decade and year headings ---- */
.pf-nav{position:sticky;top:0;z-index:30;background:rgba(255,255,255,.96);
 border-top:1px solid var(--line);border-bottom:1px solid var(--line);margin:0 0 30px}
.pf-nav-inner{display:flex;align-items:center;overflow-x:auto;padding:0 4px}
.pf-nav-link{flex-shrink:0;padding:13px 16px;font-family:-apple-system,BlinkMacSystemFont,Helvetica,sans-serif;
 font-size:.84rem;font-weight:600;color:var(--ink-soft)!important;text-decoration:none!important;
 border-bottom:3px solid transparent;white-space:nowrap}
.pf-nav-link:hover,.pf-nav-link.is-active{color:var(--accent)!important;background:var(--accent-soft);
 border-bottom-color:var(--accent)}
.pf-decade{margin:0 0 54px}
.pf-decade [id],.pf-decade{scroll-margin-top:80px}
.pf-dec-head{display:flex;align-items:baseline;gap:14px;margin:0 0 20px;padding-bottom:12px;
 border-bottom:2px solid var(--accent)}
.pf-dec-head h2{font-size:1.9rem;font-weight:700;margin:0;line-height:1.1}
.pf-dec-count{font-family:-apple-system,BlinkMacSystemFont,Helvetica,sans-serif;font-size:.72rem;
 font-weight:700;text-transform:uppercase;letter-spacing:1.5px;color:#8a661f;
 background:rgba(194,147,58,.12);padding:4px 12px;border-radius:20px;margin-left:auto}
.pf-year-head{font-family:-apple-system,BlinkMacSystemFont,Helvetica,sans-serif;font-size:.74rem;
 font-weight:700;text-transform:uppercase;letter-spacing:1.6px;color:var(--muted);
 margin:24px 0 10px;padding-left:2px}
.pf-decade .pf-fellows-grid{margin:0 0 4px}
@media print{.pf-nav{display:none!important}}
</style>
<div class="proctor-fellows" id="pf-root">
    <div style="padding:38px 0 18px;">
        <p style="background-color:#eaf1f8;border-radius:20px;color:#0b5394;display:inline-block;font-family:-apple-system,BlinkMacSystemFont,Helvetica,sans-serif;font-size:0.72rem;letter-spacing:2px;margin:0 0 18px;padding:6px 14px;text-transform:uppercase;">
            <strong>Alumni Directory · 1957–Present</strong>
        </p>
        <p style="color:#0f1d2c;font-size:2.6rem;letter-spacing:-0.015em;line-height:1.1;margin:0 0 18px;">
            <strong>Proctor Fellows</strong>
        </p>
        <p style="color:#3d4e5e;font-size:1.15rem;line-height:1.65;margin:0 0 8px;max-width:880px;">
            <em>Our fellowship alumni have become leaders in academia, industry, and ophthalmic practice around the world. Search by name, institution, or country, or browse by decade. Click any card to see more.</em>
        </p>
    </div>
    <nav class="pf-nav" aria-label="Jump to decade">
        <div class="pf-nav-inner">
            <a class="pf-nav-link" href="#d2020">2020s</a> <a class="pf-nav-link" href="#d2010">2010s</a> <a class="pf-nav-link" href="#d2000">2000s</a> <a class="pf-nav-link" href="#d1990">1990s</a> <a class="pf-nav-link" href="#d1980">1980s</a> <a class="pf-nav-link" href="#d1970">1970s</a> <a class="pf-nav-link" href="#d1960">1960s</a> <a class="pf-nav-link" href="#d1950">1950s</a> <a class="pf-nav-link" href="#dunk"></a>
        </div>
    </nav>
    <div class="pf-search">
        <input class="pf-q" type="search" id="pf-q" autocomplete="off" placeholder="Name, medical school, residency, country, or publication">
    </div>
    <div class="pf-bar">
        <p class="pf-count" role="status" aria-live="polite">
            &nbsp;
        </p>
        <p>
            
        </p>
    </div>
    <div class="pf-decade" id="d2020">
        <div class="pf-dec-head">
            <h2>
                2020s
            </h2>
            <p>
                <span class="pf-dec-count">27 fellows</span>
            </p>
        </div>
        <p class="pf-year-head">
            2026–27
        </p>
        <div class="pf-fellows-grid">
            <!-- ==== JOHN NESEMANN  |  2026-27 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/nesemann-john.webp" alt="John Nesemann, MD, MS">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2026–27
                    </p>
                    <p class="pf-name">
                        John Nesemann, MD, MS
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        Current Fellow
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- ==== JUSTIN MA  |  2026-27 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/ma-justin.webp" alt="Justin Ma, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2026–27
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://profiles.ucsd.edu/justin.ma" target="_blank" rel="noopener">Justin Ma, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        Current Fellow
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Justin Ma, MD">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                    <ul class="pf-list pf-edu">
                        <li data-list-item-id="ed4c57117a29f6898b561c27273ec6d21">
                            Undergraduate: University of VirginiaGraduate School: London School of Hygiene and Tropical Medicine (Master of Science)Medical School: University of California, Los Angeles (UCLA) School of MedicineResidency: University of California San Diego (UCSD) Medical Center / Shiley Eye Institute
                        </li>
                    </ul>
                    <!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- ==== MORGAN HARVEY  |  2026-27 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/harvey-morgan.webp" alt="Morgan Harvey, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2026–27
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.researchgate.net/profile/Morgan-Harvey-3" target="_blank" rel="noopener">Morgan Harvey, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        Current Fellow
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- ==== ZAYNAB SAJJADI  |  2026-27 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/sajjadi-zaynab.webp" alt="Zaynab Sajjadi, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2026–27
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://chicago.medicine.uic.edu/ophthalmology-visual-sciences/profiles/sajjadi-zaynab/" target="_blank" rel="noopener">Zaynab Sajjadi, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        Current Fellow
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Zaynab Sajjadi, MD">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-native">
                        <span class="pf-script-lbl">Arabic</span><span lang="ar" dir="rtl">‎زینب سادات سجادی</span>
                    </p>
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                    <ul class="pf-list pf-edu">
                        <li data-list-item-id="e2b1968cc09cad6755241288810d5f6a5">
                            Thomas Jefferson University
                        </li>
                        <li data-list-item-id="edea48f10a26c475e1fcee89740aee1f3">
                            Doctor of Medicine - MD
                        </li>
                        <li data-list-item-id="e13bf4ff4e929fd361495db67e7f73de1">
                            2017 – 2021
                        </li>
                        <li data-list-item-id="e68e455eaa4aa9461db639fbc4b19ea15">
                            University of California, Berkeley
                        </li>
                        <li data-list-item-id="edcbd5f0534e323e2acac20b2bbec5e39">
                            Bachelor of Arts (BA), Integrative Biology and Art, Practice of
                        </li>
                        <li data-list-item-id="e1c4f7b300e8736e307c64096d08dab51">
                            2014 – 2016
                        </li>
                    </ul>
                    <!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 2026–27 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
        </div>
        <p class="pf-year-head">
            2025–26
        </p>
        <div class="pf-fellows-grid">
            <!-- ==== ALYSSA COLEMAN  |  2025-26 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/coleman-alyssa.webp" alt="Alyssa Coleman, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2025–26
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.ucsfhealth.org/providers/alyssa-coleman" target="_blank" rel="noopener">Alyssa Coleman, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- ==== CHRISTOPHER ROSENBERG  |  2025-26 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/rosenberg-christopher.webp" alt="Christopher Rosenberg, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2025–26
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.ucsfhealth.org/providers/christopher-rosenberg" target="_blank" rel="noopener">Christopher Rosenberg, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- ==== KHUSHALI SHAH  |  2025-26 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/shah-khushali.webp" alt="Khushali Shah, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2025–26
                    </p>
                    <p class="pf-name">
                        Khushali Shah, MD
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        —Country of Origin: United States. (Raised and educated in the South Florida and New York areas).Current Practice: Clinical Fellow in Cornea, External Diseases, and Refractive Surgery at the UCSF Department of Ophthalmology / Francis I. Proctor Foundation.Education &amp; Training:Medical School: Earned an MD and an MPH (Master of Public Health) from the University of Miami Leonard M. Miller School of Medicine.Internship: Internal Medicine at the Icahn School of Medicine at Mount Sinai in New York.Residency: Ophthalmology residency at the New York Eye and Ear Infirmary of Mount Sinai, where she also served as Chief Resident.Specialties &amp; Achievements: Focuses on corneal transplants, complex cataract surgery, and Fuchs' endothelial corneal dystrophy. She is highly active in global health initiatives, having volunteered for eye care programs in Jamaica, Haiti, and El Salvador.
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- ==== ORI SABAN  |  2025-26 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/saban-ori.webp" alt="Ori Saban, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2025–26
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://il.linkedin.com/in/ori-saban-39283436" target="_blank" rel="noopener">Ori Saban, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        —Country of Origin: Israel. (Completed all of his medical school and initial residency training in Jerusalem before moving to the US for advanced training).Current Practice: Clinical Fellow in Cornea and Anterior Segment at the UCSF Department of Ophthalmology / Francis I. Proctor Foundation.Education &amp; Training:Medical School: Earned his Medical Degree from the Hebrew University of Jerusalem - Hadassah.Internship: Shaare Zedek Medical Center.Residency: Ophthalmology residency at Hadassah Hospital.Initial Fellowship: Completed a preliminary fellowship in Cornea and Anterior Segment at Hadassah Hospital prior to joining UCSF.Specialties &amp; Research: Focuses on corneal disorders, anterior segment surgery, and specialized research on infectious eye conditions like ligneous conjunctivitis and pink eye.
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 2025–26 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
        </div>
        <p class="pf-year-head">
            2024–25
        </p>
        <div class="pf-fellows-grid">
            <!-- ==== AARON DOTSON  |  2024-25 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/dotson-aaron.webp" alt="Aaron Dotson, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2024–25
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.luc.edu/stritch/ophthalmology/faculty/profiles/aaronddotsonmd.shtml" target="_blank" rel="noopener">Aaron Dotson, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- ==== ALEKYA RAJANALA  |  2024-25 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/rajanala-alekya.webp" alt="Alekya Rajanala, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2024–25
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://mydoctor.kaiserpermanente.org/ncal/doctor/alekyarajanala" target="_blank" rel="noopener">Alekya Rajanala, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- ==== BLAKE SNYDER  |  2024-25 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/snyder-blake.webp" alt="Blake Snyder, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2024–25
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://profiles.stanford.edu/blake-snyder" target="_blank" rel="noopener">Blake Snyder, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 2024–25 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
        </div>
        <p class="pf-year-head">
            2023–24
        </p>
        <div class="pf-fellows-grid">
            <!-- ==== ALEJANDRO ARBOLEDA  |  2023-24 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/arboleda-alejandro.webp" alt="Alejandro Arboleda, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2023–24
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.bcm.edu/people-search/alejandro-arboleda-175516" target="_blank" rel="noopener">Alejandro Arboleda, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- ==== ASHLIN JOYE  |  2023-24 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/joye-ashlin.webp" alt="Ashlin Joye, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2023–24
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.legacyhealth.org/providers/ashlin-joye" target="_blank" rel="noopener">Ashlin Joye, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- ==== ITAMAR LIVNAT  |  2023-24 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/livnat-itamar.webp" alt="Itamar Livnat, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2023–24
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.linkedin.com/in/itamar-livnat-565a91104" target="_blank" rel="noopener">Itamar Livnat, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- ==== MARTIN DIONSON  |  2023-24 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/dionson-martin.webp" alt="Martin Dionson, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2023–24
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://thefilipinodoctor.com/doctor/martin-dionson/hmo" target="_blank" rel="noopener">Martin Dionson, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Martin Dionson, MD">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-country">
                        <strong>Country of origin</strong>Philippines
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- ==== MYRA SAFO  |  2023-24 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/safo-myra.webp" alt="Myra Safo, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2023–24
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.linkedin.com/in/myra-beth-safo-005bb0170" target="_blank" rel="noopener">Myra Safo, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 2023–24 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
        </div>
        <p class="pf-year-head">
            2022–23
        </p>
        <div class="pf-fellows-grid">
            <!-- ==== AKSHAY MENTREDDY  |  2022-23 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/mentreddy-akshay.webp" alt="Akshay Mentreddy, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2022–23
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.wakehealth.edu/providers/m/akshay-r-mentreddy" target="_blank" rel="noopener">Akshay Mentreddy, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- ==== KATHERINE NIEMEYER  |  2022-23 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/niemeyer-katherine.webp" alt="Katherine Niemeyer, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2022–23
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://health.usnews.com/doctors/katherine-niemeyer-1191604" target="_blank" rel="noopener">Katherine Niemeyer, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- ==== MINH NGUYEN  |  2022-23 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/nguyen-minh.webp" alt="Minh Nguyen, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2022–23
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://ophthalmology.washington.edu/faculty/minh-nguyen-md/" target="_blank" rel="noopener">Minh Nguyen, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- ==== PUNYANUCH PISITPAYAT  |  2022-23 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/pisitpayat-punyanuch.webp" alt="Punyanuch Pisitpayat, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2022–23
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.sukumvithospital.com/doctorprofile.php?id=603&amp;lang=en" target="_blank" rel="noopener">Punyanuch Pisitpayat, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Punyanuch Pisitpayat, MD">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-native">
                        <span class="pf-script-lbl">Thai</span><span lang="th">ปุณยนุช พิสิฐพยัต</span>
                    </p>
                    <p class="pf-country">
                        <strong>Country of origin</strong>Thailand
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     -->
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                    <ul class="pf-list pf-pubs">
                        <li data-list-item-id="eecc608d15b96108be6107d766e501f66">
                            <a href="https://pubmed.ncbi.nlm.nih.gov/38294900/" target="_blank" rel="noopener">Stromal Keratitis Associated With CMV Anterior Uveitis</a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 2022–23 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
        </div>
        <p class="pf-year-head">
            2021–22
        </p>
        <div class="pf-fellows-grid">
            <!-- ==== ADRIAN TSANG  |  2021-22 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/tsang-adrian.webp" alt="Adrian Tsang, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2021–22
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://downtowneyecare.ca/staff/dr-adrian-tsang-md/" target="_blank" rel="noopener">Adrian Tsang, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Adrian Tsang, MD">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-country">
                        <strong>Country of origin</strong>Canada
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- ==== CHRISTINE BENADOR-SHEN  |  2021-22 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/benador-shen-christine.webp" alt="Christine Benador-Shen, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2021–22
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.linkedin.com/in/christine-benador-shen-76b64329/" target="_blank" rel="noopener">Christine Benador-Shen, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- ==== HUI ZHAO  |  2021-22 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/zhao-hui.webp" alt="Hui Zhao, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2021–22
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://ophthalmology.wustl.edu/people/hui-zhao-md-phd/" target="_blank" rel="noopener">Hui Zhao, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- ==== WARALUCK KT SUPAWATJARIYAKUL  |  2021-22 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/supawatjariyakul-waraluck-kt.jpg" alt="Waraluck KT Supawatjariyakul, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2021–22
                    </p>
                    <p class="pf-name">
                        Waraluck KT Supawatjariyakul, MD
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Waraluck KT Supawatjariyakul, MD">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-native">
                        <span class="pf-script-lbl">Thai</span><span lang="th">วราลัคน์ สุพาวาตจริยากุล</span>
                    </p>
                    <p class="pf-country">
                        <strong>Country of origin</strong>Thailand
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 2021–22 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
        </div>
        <p class="pf-year-head">
            2020–21
        </p>
        <div class="pf-fellows-grid">
            <!-- ==== AMIT REDDY  |  2020-21 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/reddy-amit.webp" alt="Amit Reddy, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2020–21
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.uchealth.org/provider/amit-reddy-md/" target="_blank" rel="noopener">Amit Reddy, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        —Country of Origin: United States.Current Practice: Cornea and Uveitis specialist at UCHealth Eye Center and Assistant Professor at the University of Colorado School of Medicine.Education &amp; Training:Undergraduate: Duke University.Medical School: University of Iowa Roy J. and Lucille A. Carver College of Medicine.Residency: University of Colorado.Proctor Fellowship: Uveitis and Ocular Inflammatory Diseases.Specialties: Ocular immunology, medical and surgical management of uveitis, and complex anterior segment disorders.
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- ==== AMOL SURA  |  2020-21 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/sura-amol.webp" alt="Amol Sura, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2020–21
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.dukehealth.org/find-doctors-physicians/amol-sura-md" target="_blank" rel="noopener">Amol Sura, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        —Country of Origin: United States.Current Practice: Assistant Professor of Ophthalmology specializing in Ocular Immunology at the Duke Eye Center in Durham, North Carolina.Education &amp; Training:Medical School: Louisiana State University in New Orleans.Research Fellowship: Ocular Immunology at the National Eye Institute (NEI).Proctor Fellowship: Uveitis, Ocular Immunology, and Medical Cornea.Specialties: Autoimmune, infectious, and inflammatory eye conditions (scleritis, pediatric uveitis, keratitis), severe dry eye disease, and complex cataract surgery.
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- ==== MIEL SUNDARARAJAN  |  2020-21 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/sundararajan-miel.webp" alt="Miel Sundararajan, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2020–21
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://ophthalmology.washington.edu/faculty/miel-sundararajan-md" target="_blank" rel="noopener">Miel Sundararajan, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 2020–21 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
        </div>
    </div>
    <div class="pf-decade" id="d2010">
        <div class="pf-dec-head">
            <h2>
                2010s
            </h2>
            <p>
                <span class="pf-dec-count">39 fellows</span>
            </p>
        </div>
        <p class="pf-year-head">
            2019–20
        </p>
        <div class="pf-fellows-grid">
            <!-- ==== BRETT POULIS  |  2019-20 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/poulis-brett.webp" alt="Brett Poulis, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2019–20
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://mitchelleyecentre.com/doctors/dr-brett-poulis/" target="_blank" rel="noopener">Brett Poulis, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        Country of Origin: Canada (Raised in Salmon Arm, British Columbia).Current Practice: Attending Ophthalmologist at the Vector Eye Centre and Mitchell Eye Centre in Calgary, Alberta, Canada.Education &amp; Training:Graduate Degrees: Earned both an MD and a PhD.Proctor Fellowship: Cornea, External Disease, and Refractive Surgery.Specialties: Adult ophthalmological diseases, uveitis, glaucoma management, and advanced refractive laser surgeries (such as SLT, YAG, and LPI).
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Brett Poulis, MD">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-country">
                        <strong>Country of origin</strong>Canada
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- ==== KAREEM MOUSSA  |  2019-20 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/moussa-kareem.webp" alt="Kareem Moussa, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2019–20
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://physicians.ucdavis.edu/medicalcenter/details/42987/kareem-moussa-ophthalmology-vitreoretinal_surgery-sacramento" target="_blank" rel="noopener">Kareem Moussa, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        Assistant Professor and Vitreoretinal Surgeon at the UC Davis Health Ernest E. Tschannen Eye Institute in Sacramento, California.
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Kareem Moussa, MD">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                    <ul class="pf-list pf-edu">
                        <li data-list-item-id="e00a56745d7688ad4722bc4a4efe8c0d7">
                            Education &amp; Training:Medical School: Duke University School of Medicine.Residency: University of California, San Francisco (UCSF).Retina Fellowship: Massachusetts Eye and Ear (Harvard Medical School).Proctor Fellowship: Uveitis.Specialties: Vitreoretinal surgery, age-related macular degeneration, diabetic retinopathy, retinal detachments, and complex ocular inflammatory diseases
                        </li>
                    </ul>
                    <!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- ==== MIEL SUNDARARAJAN  |  2019-20 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/sundararajan-miel.webp" alt="Miel Sundararajan, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2019–20
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://ophthalmology.washington.edu/faculty/miel-sundararajan-md" target="_blank" rel="noopener">Miel Sundararajan, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        — Assistant Professor of Ophthalmology at the University of Washington (UW) Medicine in Seattle, Washington.
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Miel Sundararajan, MD">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                    <ul class="pf-list pf-edu">
                        <li data-list-item-id="e9c33522ca62937527464ff4b732c7687">
                            —Undergraduate: BS in Bioengineering from Rice University.Medical School: Baylor College of Medicine.Residency: New York Eye and Ear Infirmary of Mount Sinai.Proctor Fellowship: Completed consecutive fellowships at Proctor, first in Uveitis (2019–20) and then in Cornea &amp; External Disease (2020–21).Specialties: Infectious and inflammatory eye diseases, uveitis, and corneal transplants
                        </li>
                    </ul>
                    <!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- ==== PLERN SUTRA  |  2019-20 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/sutra-plern.webp" alt="Plern Sutra, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2019–20
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.phyathai.com/en/pyt2/doctor/dr-plern-sutra" target="_blank" rel="noopener">Plern Sutra, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        Faculty ophthalmologist at Navamindradhiraj University and the Faculty of Medicine Vajira Hospital in Bangkok, Thailand.
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Plern Sutra, MD">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-native">
                        <span class="pf-script-lbl">Thai</span><span lang="th">เพลิน สุตรา</span>
                    </p>
                    <p class="pf-country">
                        <strong>Country of origin</strong>Thailand
                    </p>
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                    <ul class="pf-list pf-edu">
                        <li data-list-item-id="ebffceaaf5d8341b3af0f49d4f29b51a1">
                            — in Thailand.Residency: Khon Kaen University in Thailand.Proctor Fellowship: Clinical and research international fellowship focusing on Uveitis, Cornea, and Ocular Inflammatory Diseases.Specialties: Uveitis management, retinal vascular diseases, and advanced anterior segment imaging
                        </li>
                    </ul>
                    <!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     -->
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                    <ul class="pf-list pf-pubs">
                        <li data-list-item-id="ec12ed3db698ad290a4fa460d7796f364">
                            <a href="https://pubmed.ncbi.nlm.nih.gov/?term=Plern+Sutra" target="_blank" rel="noopener">Metagenomic Deep Sequencing… Iridocorneal Endothelial Syndrome</a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- ==== TRAVIS REDD  |  2019-20 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/redd-travis.webp" alt="Travis Redd, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2019–20
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://medschool.cuanschutz.edu/ophthalmology/about-us/our-team/Redd-Travis-UCD724292" target="_blank" rel="noopener">Travis Redd, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        —Country of Origin: United States (Raised in the Pacific Northwest region).Current Practice: Chief of Cornea Service and Associate Professor at the University of Colorado Anschutz Medical Campus.
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Travis Redd, MD">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                    <ul class="pf-list pf-edu">
                        <li data-list-item-id="e25a2d064c9863c4e1d9cdcc1ed08cbc5">
                            —Oregon Health &amp; Science University (OHSU), earning an MD and MPH.Residency: Casey Eye Institute at OHSU.Proctor Fellowship: Cornea, External Diseases, and Refractive Surgery.Specialties: Cornea surgery, external diseases, international global health screenings, and artificial intelligence diagnostic development in ophthalmology
                        </li>
                    </ul>
                    <!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 2019–20 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
        </div>
        <p class="pf-year-head">
            2018–19
        </p>
        <div class="pf-fellows-grid">
            <!-- ==== ATHANASIOS MARNERIS  |  2018-19 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/marneris-athanasios.webp" alt="Athanasios Marneris, DO">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2018–19
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://mecvision.com/doctors/athanasios-marneris-do/" target="_blank" rel="noopener">Athanasios Marneris, DO<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        —Current Practice: A board-certified ophthalmologist at Multack Eye Care in Illinois.Specialties: Focuses on cataract surgery, uveitis, medical retina, and corneal diseases.
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Athanasios Marneris, DO">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                    <ul class="pf-list pf-edu">
                        <li data-list-item-id="e623688049bf7b12df9cb5000e1d7c0a5">
                            Medical School: Midwestern University Chicago College of Osteopathic Medicine.Residency: Michigan State University.Fellowship (2018–2019): Cornea and Uveitis at UCSF Proctor
                        </li>
                    </ul>
                    <!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- ==== EDMUND TSUI  |  2018-19 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/tsui-edmund.webp" alt="Edmund Tsui, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2018–19
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.uclahealth.org/providers/edmund-tsui" target="_blank" rel="noopener">Edmund Tsui, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        Associate Professor-in-Residence of Ophthalmology at the UCLA Jules Stein Eye Institute in Los Angeles, California.
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Edmund Tsui, MD">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                    <ul class="pf-list pf-edu">
                        <li data-list-item-id="eba6bcb6254e21502907c1bc9059d6bbb">
                            Medical School: Geisel School of Medicine at Dartmouth.Residency: New York University (NYU) School of Medicine, serving as Chief Resident
                        </li>
                    </ul>
                    <!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- ==== HWANG DE-KUANG  |  2018-19 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/hwang-de-kuang.webp" alt="Hwang De-Kuang, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2018–19
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://vghtpehh.vghtpe.gov.tw/ProFile/748_1060.html" target="_blank" rel="noopener">Hwang De-Kuang, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        現任/教職 本院眼科部眼矯形重建科主任 本院眼科部主治醫師 台北市立關渡醫院眼科兼任主治醫師 國立陽明交通大學醫學系眼科學科部定副教授 國防大學國防醫學院醫學系眼科學科臨床副教授 中華民國視網膜醫學會監事 中華民國眼部炎症醫學會常務理事 亞太眼科醫學會領袖訓練計劃委員會委員 曾任 本院桃園分院眼科主治醫師 本院新竹分院眼科主治醫師 臺中榮總品質管理中心醫療照護團隊副主任 臺中榮總眼科部視網膜科主治醫師 衛生福利部金門醫院眼科兼任主治醫師 到任年月
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Hwang De-Kuang, MD">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-native">
                        <span class="pf-script-lbl">Chinese</span><span lang="zh">黃德光 (De-Kuang Huang)</span>
                    </p>
                    <p class="pf-country">
                        <strong>Country of origin</strong>Taiwan
                    </p>
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                    <ul class="pf-list pf-edu">
                        <li data-list-item-id="e239ac9e6314849c46de505680b49610c">
                            學歷
                        </li>
                        <li data-list-item-id="eb9bb00230bb148a6b999c58f02497da7">
                            國立陽明交通大學公共衛生研究所流行病學博士
                        </li>
                        <li data-list-item-id="eba920e98d17de10d28d87bf4e46a0567">
                            國防大學國防醫學院醫學士
                        </li>
                        <li data-list-item-id="ef6378e9401f0c9b6121b970c203f51c1">
                            日本東京大學醫學院眼科臨床觀察員
                        </li>
                        <li data-list-item-id="ed3fa5ccd21336180ab6107b50db3f81d">
                            日本東京杏林大學眼科部臨床觀察員
                        </li>
                        <li data-list-item-id="eb93cfed7d39f766af7d025ece320d41e">
                            美國加州大學舊金山分校Proctor研究基金會博士後研究訪問學者
                        </li>
                    </ul>
                    <!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     -->
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                    <ul class="pf-list pf-pubs">
                        <li data-list-item-id="ed6efe423b626f980bafad279fd6ab9f5">
                            Epidemiology of uveitis among the Chinese population in Taiwan: a Population-Based Study. Ophthalmology 2012 Nov; 119(11): 2371-6
                        </li>
                        <li data-list-item-id="e0bea72b0b1fbcfca6ac6091f78413334">
                            Step-wise Diagnostic Approach for Patients with Uveitis - Experts Consensus in Taiwan. the Journal of Microbiology, Immunology and Infection. 2022 Aug;55(4):573-580
                        </li>
                        <li data-list-item-id="efc9106dafbcf8fad53203d9d0d678097">
                            Diagnosis, Treatment, and Prevention of Noninfectious Acute Anterior Uveitis with or without Human Leukocyte Antigen B27 in Adults - Expert Consensus in Taiwan. Ocul Immunol Inflamm. 2024 Feb;32(2):226-233
                        </li>
                        <li data-list-item-id="e9da901e3271ac8819e4d2e24ba361679">
                            Elevation of serum oxidative stress in patients with retina vein occlusions. Acta Ophthalmology 2019 Mar; 97(2): e290-e295
                        </li>
                        <li data-list-item-id="e8263197aa57d804587f311a57801d50d">
                            Three-year outcomes of patients with neovascular age-related macular degeneration treated with aflibercept under the National Health Insurance program in Taiwan. Journal of Ophthalmology 2020 Feb.; 2020: 4538135.
                        </li>
                        <li data-list-item-id="e55159ded4f07dbdc61085169ae6036c4">
                            Genome-wide association study and identification of systemic comorbidities in development of age-related macular degeneration in a hospital-based cohort of Han Chinese. Front Genet. 2023; 14: 1064659.
                        </li>
                    </ul>
                </div>
            </div>
            <!-- ==== MICHELLE D. LEE  |  2018-19 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/lee-michelle.webp" alt="Michelle D. Lee, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2018–19
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.micheleleemd.com/" target="_blank" rel="noopener">Michelle D. Lee, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        —She is a board-certified cornea, cataract, and refractive surgeon practicing at Tozer Lee Eye Center in Scottsdale and Mesa, Arizona.
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Michelle D. Lee, MD">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                    <ul class="pf-list pf-edu">
                        <li data-list-item-id="e2320dc612e0a3fe8fac0f0d1d67d26fa">
                            —ndergraduate: Graduated cum laude from Harvard University.Medical School: Earned her Medical Degree from the Columbia University Vagelos College of Physicians and Surgeons.Internship: Completed her preliminary medicine internship at Mount Sinai St. Luke's–Roosevelt in New York City.Residency: Completed her Ophthalmology residency at Stanford University Medical Center.Notable Achievements: She was awarded the American Academy of Ophthalmology (AAO) Achievement Award and serves on the AAO ONE Cornea Committee. Prior to moving to Arizona, she was an Assistant Professor at the University of Washington
                        </li>
                    </ul>
                    <!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- ==== TODD DRIVER  |  2018-19 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/driver-todd.webp" alt="Todd Driver, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2018–19
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.oceyeassociates.com/dr-driver/" target="_blank" rel="noopener">Todd Driver, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        He is currently a board-certified ophthalmologist and advanced cataract surgeon at OC Eye Associates in Irvine, California.Specialties: Advanced cataract surgery, premium intraocular lenses (including the Light Adjustable Lens), LASIK, and PRK.
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Todd Driver, MD">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                    <ul class="pf-list pf-edu">
                        <li data-list-item-id="e2b923def4a511654dd3f8efbad4b1d38">
                            2014: Earned his Medical Degree from UCSF School of Medicine.2014–2015: Completed an Internal Medicine internship at Olive View-UCLA Medical Center.2015–2018: Completed his Ophthalmology residency at the UCLA Jules Stein Eye Institute, where he received teaching awards
                        </li>
                    </ul>
                    <!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 2018–19 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
        </div>
        <p class="pf-year-head">
            2017–18
        </p>
        <div class="pf-fellows-grid">
            <!-- ==== KAIDI WANG  |  2017-18 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/wang-kaidi.webp" alt="Kaidi Wang, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2017–18
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.vmfh.org/find-a-doctor/kaidi-wang-1326380577" target="_blank" rel="noopener">Kaidi Wang, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- ==== TANIYA BHOOPAT  |  2017-18 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/bhoopat-taniya.webp" alt="Taniya Bhoopat, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2017–18
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://iovs.arvojournals.org/article.aspx?articleid=2691850" target="_blank" rel="noopener">Taniya Bhoopat, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Taniya Bhoopat, MD">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-native">
                        <span class="pf-script-lbl">Thai</span><span lang="th">ธนิยา ภู่พัฒน์</span>
                    </p>
                    <p class="pf-country">
                        <strong>Country of origin</strong>Thailand
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     -->
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                    <ul class="pf-list pf-pubs">
                        <li data-list-item-id="e1bbd9cc7971ca6faa3e3b6f89a72ee63">
                            <a href="https://pubmed.ncbi.nlm.nih.gov/32068609/" target="_blank" rel="noopener">Treatment of CMV Anterior Uveitis… Oral Valganciclovir</a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- ==== VARUN PAWAR  |  2017-18 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/pawar-varun.webp" alt="Varun Pawar, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2017–18
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.zocdoc.com/doctor/varun-pawar-md-311287" target="_blank" rel="noopener">Varun Pawar, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- ==== YIJIE (BRITANY) LIN  |  2017-18 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/lin-yijie.webp" alt="Yijie (Britany) Lin, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2017–18
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://mydoctor.kaiserpermanente.org/ncal/doctor/yijielin" target="_blank" rel="noopener">Yijie (Britany) Lin, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 2017–18 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
        </div>
        <p class="pf-year-head">
            2016–17
        </p>
        <div class="pf-fellows-grid">
            <!-- ==== DIPAL SHAH  |  2016-17 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/shah-dipal.webp" alt="Dipal Shah, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2016–17
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.ucihealth.org/clinicians/dipal-shah-1093169047" target="_blank" rel="noopener">Dipal Shah, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- ==== JESSICA SHANTHA  |  2016-17 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/shantha-jessica.webp" alt="Jessica Shantha, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2016–17
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://med.emory.edu/directory/profile/?u=JSHANTH" target="_blank" rel="noopener">Jessica Shantha, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        Emory Eye Center
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- ==== PETER RYG  |  2016-17 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/ryg-peter.webp" alt="Peter Ryg, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2016–17
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.eyephysiciansofaustin.com/provider/peter-ryg-md.html" target="_blank" rel="noopener">Peter Ryg, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 2016–17 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
        </div>
        <p class="pf-year-head">
            2015–16
        </p>
        <div class="pf-fellows-grid">
            <!-- ==== NINA NI  |  2015-16 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/ni-nina.webp" alt="Nina Ni, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2015–16
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.sutterhealth.org/find-provider/dr-nina-ni-1-1046244376" target="_blank" rel="noopener">Nina Ni, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- ==== TOVA E. MANNIS  |  2015-16 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/mannis-tova.webp" alt="Tova E. Mannis, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2015–16
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://mydoctor.kaiserpermanente.org/ncal/doctor/tovamannis" target="_blank" rel="noopener">Tova E. Mannis, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- ==== WIPADA LAOVIROJJANAKUL  |  2015-16 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/laovirojjanakul-wipada.webp" alt="Wipada Laovirojjanakul, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2015–16
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://rph.co.th/en/doctor/wipada-laovirojjanakulmd/" target="_blank" rel="noopener">Wipada Laovirojjanakul, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Wipada Laovirojjanakul, MD">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-native">
                        <span class="pf-script-lbl">Thai</span><span lang="th">วิภาดา เหล่าวิโรจนกุล</span>
                    </p>
                    <p class="pf-country">
                        <strong>Country of origin</strong>Thailand
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     -->
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                    <ul class="pf-list pf-pubs">
                        <li data-list-item-id="e86f6f72c1bc9b8704a65f0c8b0958eee">
                            <a href="https://pubmed.ncbi.nlm.nih.gov/29040047/" target="_blank" rel="noopener">Ultra-Widefield Fluorescein Angiography in Intermediate Uveitis</a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 2015–16 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
        </div>
        <p class="pf-year-head">
            2014–15
        </p>
        <div class="pf-fellows-grid">
            <!-- ==== JEFFREY R. GOLEN  |  2014-15 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/golen-jeffrey.webp" alt="Jeffrey R. Golen, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2014–15
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.cfloph.com/ophthalmologist-orlando/jeffrey-r-golen-m-d/" target="_blank" rel="noopener">Jeffrey R. Golen, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- ==== MICHAEL J. GESKE  |  2014-15 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/geske-michael.webp" alt="Michael J. Geske, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2014–15
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://mydoctor.kaiserpermanente.org/ncal/doctor/michaelgeske" target="_blank" rel="noopener">Michael J. Geske, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- ==== PRIYA M. JANARDHANA  |  2014-15 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/janardhana-priya.webp" alt="Priya M. Janardhana, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2014–15
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.umassmed.edu/ophthalmology/our-doctors2/dr-priya-bio/" target="_blank" rel="noopener">Priya M. Janardhana, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- ==== WEERAYA PIMOLRAT  |  2014-15 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/pimolrat-weeraya.webp" alt="Weeraya Pimolrat, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2014–15
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.bangkokhospital.com/en/bangkok/doctor/dr-weeraya-pimolrat" target="_blank" rel="noopener">Weeraya Pimolrat, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Weeraya Pimolrat, MD">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-native">
                        <span class="pf-script-lbl">Thai</span><span lang="th">วีรยา พิมลรัฐ</span>
                    </p>
                    <p class="pf-country">
                        <strong>Country of origin</strong>Thailand
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     -->
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                    <ul class="pf-list pf-pubs">
                        <li data-list-item-id="eb81f81b955b48f0ad6b5523677450e89">
                            <a href="https://pubmed.ncbi.nlm.nih.gov/26647348/" target="_blank" rel="noopener">Conjunctival Sensation in Scleritis</a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 2014–15 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
        </div>
        <p class="pf-year-head">
            2013–14
        </p>
        <div class="pf-fellows-grid">
            <!-- ==== JOSEPH SHEEHAN  |  2013-14 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/sheehan-joseph.webp" alt="Joseph Sheehan, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2013–14
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://medeyemt.com/our-team/" target="_blank" rel="noopener">Joseph Sheehan, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Joseph Sheehan, MD">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     -->
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                    <ul class="pf-list pf-pubs">
                        <li data-list-item-id="e67af830d8128ce7d2bcddadf1153868b">
                            <a href="https://journals.plos.org/plosntds/article?id=10.1371/journal.pntd.0002840" target="_blank" rel="noopener">Reliability of trachoma clinical grading</a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- ==== JULIE SCHALLHORN  |  2013-14 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/schallhorn-julie.webp" alt="Julie Schallhorn, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2013–14
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.ucsfhealth.org/providers/julie-schallhorn" target="_blank" rel="noopener">Julie Schallhorn, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        UCSF Ophthalmology
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- ==== NEIL CHUNGFAT  |  2013-14 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/chungfat-neil.webp" alt="Neil Chungfat, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2013–14
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://healthy.kaiserpermanente.org/colorado/clinicians/neil-chungfat-9425047" target="_blank" rel="noopener">Neil Chungfat, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- ==== THANAPONG SOMKIJRUNGROJ  |  2013-14 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/somkijrongroj-thanapong.webp" alt="Thanapong Somkijrungroj, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2013–14
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.samitivejhospitals.com/doctor/detail/thanapong-somkijrungroj" target="_blank" rel="noopener">Thanapong Somkijrungroj, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Thanapong Somkijrungroj, MD">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-native">
                        <span class="pf-script-lbl">Thai</span><span lang="th">ธนาพงษ์ สมกิจรุ่งโรจน์</span>
                    </p>
                    <p class="pf-country">
                        <strong>Country of origin</strong>Thailand
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     -->
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                    <ul class="pf-list pf-pubs">
                        <li data-list-item-id="e3371b5ddc9afa5f2f44adb409a23aef0">
                            <a href="https://pubmed.ncbi.nlm.nih.gov/25387048/" target="_blank" rel="noopener">Multimodal imaging of white and dark without pressure fundus lesions</a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 2013–14 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
        </div>
        <p class="pf-year-head">
            2012–13
        </p>
        <div class="pf-fellows-grid">
            <!-- ==== ELIZABETH GRACE  |  2012-13 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/grace-elizabeth.webp" alt="Elizabeth Grace, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2012–13
                    </p>
                    <p class="pf-name">
                        Elizabeth Grace, MD
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- ==== JENNIFER ROSE-NUSSBAUMER  |  2012-13 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/rose-nussbaumer-jennifer.webp" alt="Jennifer Rose-Nussbaumer, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2012–13
                    </p>
                    <p class="pf-name">
                        Jennifer Rose-Nussbaumer, MD
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- ==== VINCENT LAM  |  2012-13 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/lam-vincent.webp" alt="Vincent Lam, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2012–13
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.sgu.edu/graduate-success/vincent-lam-md/" target="_blank" rel="noopener">Vincent Lam, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- ==== WAROONCHAT ISSARIYAPAT  |  2012-13 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/issariyapat-waroonchat.webp" alt="Waroonchat Issariyapat, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2012–13
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.nonthavej.co.th/team-doctor-29-en.php" target="_blank" rel="noopener">Waroonchat Issariyapat, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Waroonchat Issariyapat, MD">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-native">
                        <span class="pf-script-lbl">Thai</span><span lang="th">วรฉัตร อิสริยาภัทร์</span>
                    </p>
                    <p class="pf-country">
                        <strong>Country of origin</strong>Thailand
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 2012–13 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
        </div>
        <p class="pf-year-head">
            2011–12
        </p>
        <div class="pf-fellows-grid">
            <!-- ==== CHARLES LIN  |  2011-12 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/lin-charles.jpg" alt="Charles Lin, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2011–12
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://stanfordhealthcare.org/doctors/l/charles-lin.html" target="_blank" rel="noopener">Charles Lin, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        Stanford Health Care
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- ==== JOHN A. GONZALES  |  2011-12 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/gonzales-john.jpg" alt="John A. Gonzales, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2011–12
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://proctor.ucsf.edu/john-gonzales-md-0" target="_blank" rel="noopener">John A. Gonzales, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        Professor of Clinical Ophthalmology, F.I. Proctor Foundation, UCSF
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- ==== YING QIAN  |  2011-12 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/qian-ying.jpg" alt="Ying Qian, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2011–12
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.linkedin.com/in/ying-qian-5792386" target="_blank" rel="noopener">Ying Qian, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 2011–12 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
        </div>
        <p class="pf-year-head">
            2010–11
        </p>
        <div class="pf-fellows-grid">
            <!-- ==== AKBAR SHAKOOR  |  2010-11 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/shakoor-akbar.jpg" alt="Akbar Shakoor, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2010–11
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.richenseyecenter.com/about/professionals/dr-akbar-shakoor-md/" target="_blank" rel="noopener">Akbar Shakoor, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- ==== CYRIL DALMON  |  2010-11 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/dalmon-cyril.jpg" alt="Cyril Dalmon, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2010–11
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://healthy.kaiserpermanente.org/hawaii/provider/cyril-dalmon-0517573" target="_blank" rel="noopener">Cyril Dalmon, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- ==== ISABELLA PHAN  |  2010-11 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/phan-isabella.jpg" alt="Isabella Phan, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2010–11
                    </p>
                    <p class="pf-name">
                        Isabella Phan, MD
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- ==== MAMTA AGARWAL  |  2010-11 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/agarwal-mamta.jpg" alt="Mamta Agarwal, MD, FRCSEd, FRCOphth, FACS">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2010–11
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.linkedin.com/in/mamta-agarwal-md-frcsed-frcophth-facs-9322535b/" target="_blank" rel="noopener">Mamta Agarwal, MD, FRCSEd, FRCOphth, FACS<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Mamta Agarwal, MD, FRCSEd, FRCOphth, FACS">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-country">
                        <strong>Country of origin</strong>India
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 2010–11 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
        </div>
    </div>
    <div class="pf-decade" id="d2000">
        <div class="pf-dec-head">
            <h2>
                2000s
            </h2>
            <p>
                <span class="pf-dec-count">42 fellows</span>
            </p>
        </div>
        <p class="pf-year-head">
            2009–10
        </p>
        <div class="pf-fellows-grid">
            <!-- ==== CHOENG JIRAWISON  |  2009-10 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/jirawison-choeng.jpg" alt="Choeng Jirawison, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2009–10
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.bangkokhospital.com/en/chiangmai/doctor/choeng-jirawison-m-d" target="_blank" rel="noopener">Choeng Jirawison, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Choeng Jirawison, MD">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-native">
                        <span class="pf-script-lbl">Thai</span><span lang="th">เชวงศ์ จิระวิศาล</span>
                    </p>
                    <p class="pf-country">
                        <strong>Country of origin</strong>Thailand
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     -->
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                    <ul class="pf-list pf-pubs">
                        <li data-list-item-id="e519fb41bd4c5140a15761e24a8b6a740">
                            <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3331920/" target="_blank" rel="noopener">Clinical Features of Newly Diagnosed Cytomegalovirus Retinitis in Northern Thailand</a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- ==== ROBERT FINTELMANN  |  2009-10 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/fintelmann-robert.jpg" alt="Robert Fintelmann, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2009–10
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://clinics.midwestern.edu/about-us/our-care-providers/robert-fintelmann-md-facs" target="_blank" rel="noopener">Robert Fintelmann, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- ==== WILLIAM L. GILMER  |  2009-10 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/gilmer-william-l.png" alt="William L. Gilmer, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2009–10
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.riversideeyeclinic.com/williamgilmermd.php" target="_blank" rel="noopener">William L. Gilmer, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- ==== YING QIAN  |  2009-10 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/qian-ying.jpg" alt="Ying Qian, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2009–10
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.linkedin.com/in/ying-qian-5792386" target="_blank" rel="noopener">Ying Qian, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 2009–10 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
        </div>
        <p class="pf-year-head">
            2008–09
        </p>
        <div class="pf-fellows-grid">
            <!-- ==== ELIZA HOSKINS  |  2008-09 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/hoskins-eliza.png" alt="Eliza Hoskins, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2008–09
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5716884/" target="_blank" rel="noopener">Eliza Hoskins, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- ==== JAMIE BHAMRA  |  2008-09 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/bhamra-jamie.jpg" alt="Jamie Bhamra, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2008–09
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.linkedin.com/in/jamie-bhamra-737a4a29/details/education/" target="_blank" rel="noopener">Jamie Bhamra, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Jamie Bhamra, MD">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-country">
                        <strong>Country of origin</strong>Canada
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- ==== WANTANEE SITTIVARAKUL  |  2008-09 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/sittivarakul-wantanee.jpg" alt="Wantanee Sittivarakul, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2008–09
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.researchgate.net/profile/Wantanee-Sittivarakul" target="_blank" rel="noopener">Wantanee Sittivarakul, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Wantanee Sittivarakul, MD">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-native">
                        <span class="pf-script-lbl">Thai</span><span lang="th">วันทนีย์ สิทธิวรกุล</span>
                    </p>
                    <p class="pf-country">
                        <strong>Country of origin</strong>Thailand
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     -->
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                    <ul class="pf-list pf-pubs">
                        <li data-list-item-id="ebe1e68f7d5fb40bc4830d53f3d14f687">
                            <a href="https://www.researchgate.net/publication/51454734" target="_blank" rel="noopener">Bilateral effect of unilateral ranibizumab in patients with uveitis-related macular edema</a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- ==== YOUSUF KHALIFA  |  2008-09 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/khalifa-yousuf.jpg" alt="Yousuf Khalifa, MD, FACS">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2008–09
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://med.emory.edu/directory/profile/?u=YKHALIF" target="_blank" rel="noopener">Yousuf Khalifa, MD, FACS<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        Emory Eye Center
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Yousuf Khalifa, MD, FACS">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     -->
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                    <ul class="pf-list pf-pubs">
                        <li data-list-item-id="e4e285a2a6db1fe38e5abb3e641f4ecd0">
                            <a href="https://www.researchgate.net/publication/45583460" target="_blank" rel="noopener">Exacerbation of Zoster Interstitial Keratitis After Zoster Vaccination in an Adult</a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 2008–09 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
        </div>
        <p class="pf-year-head">
            2007–08
        </p>
        <div class="pf-fellows-grid">
            <!-- ==== AGNIESZKA NAGPAL  |  2007-08 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/nagpal-agnes.jpg" alt="Agnieszka Nagpal, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2007–08
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.endeavorhealth.org/providers/agnieszka-nagpal" target="_blank" rel="noopener">Agnieszka Nagpal, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- ==== JASON H. SKALET  |  2007-08 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/skalet-jason.webp" alt="Jason H. Skalet, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2007–08
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.ehnpc.com/eye-doctor-portland/jason-h-skalet-md/" target="_blank" rel="noopener">Jason H. Skalet, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- ==== JEREMY KEENAN  |  2007-08 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/keenan-jeremy.jpg" alt="Jeremy Keenan, MD, MPH">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2007–08
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://ophthalmology.ucsf.edu/jeremy-keenan-md-mph/" target="_blank" rel="noopener">Jeremy Keenan, MD, MPH<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        F.I. Proctor Foundation, UCSF
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- ==== NICOLE FRAM  |  2007-08 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/fram-nicole.jpg" alt="Nicole Fram, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2007–08
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://advancedvisioncare.com/about/physicians/" target="_blank" rel="noopener">Nicole Fram, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        Advanced Vision Care, Los Angeles
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 2007–08 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
        </div>
        <p class="pf-year-head">
            2006–07
        </p>
        <div class="pf-fellows-grid">
            <!-- ==== JUDY OU  |  2006-07 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/ou-judy.jpg" alt="Judy Ou, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2006–07
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.sutterhealth.org/find-provider/dr-judy-i-ou-1046237839" target="_blank" rel="noopener">Judy Ou, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- ==== JULIE FREIDLIN LEIGH  |  2006-07 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/leigh-julie-freidlin.jpg" alt="Julie Freidlin Leigh, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2006–07
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.imedix.com/doctors/dr-julie-freidlin-leigh-md/" target="_blank" rel="noopener">Julie Freidlin Leigh, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Julie Freidlin Leigh, MD">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     -->
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                    <ul class="pf-list pf-pubs">
                        <li data-list-item-id="e3cb0ef6187816ffd149ee97191976062">
                            <a href="https://www.researchgate.net/publication/5538690" target="_blank" rel="noopener">Does asymptomatic shedding of HSV lead to false-positive diagnostic PCR results?</a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- ==== MATILDA CHAN  |  2006-07 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/chan-matilda.webp" alt="Matilda Chan, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2006–07
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://profiles.ucsf.edu/matilda.chan" target="_blank" rel="noopener">Matilda Chan, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        F.I. Proctor Foundation / UCSF
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- ==== MENEN AYALEW SHIBESHI  |  2006-07 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/shibeshi-menen-ayalew.jpg" alt="Menen Ayalew Shibeshi, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2006–07
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://cureblindness.org/partners" target="_blank" rel="noopener">Menen Ayalew Shibeshi, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Menen Ayalew Shibeshi, MD">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-country">
                        <strong>Country of origin</strong>Ethiopia
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- ==== RAPEEPORN YODPROM  |  2006-07 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/yodprom-rapeeporn.jpg" alt="Rapeeporn Yodprom, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2006–07
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://appointment.ram-hosp.co.th/search/dr-rapeeporn-yodprom" target="_blank" rel="noopener">Rapeeporn Yodprom, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Rapeeporn Yodprom, MD">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-native">
                        <span class="pf-script-lbl">Thai</span><span lang="th">รพีพร ยอดพรหม</span>
                    </p>
                    <p class="pf-country">
                        <strong>Country of origin</strong>Thailand
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- ==== SHANE K. KIM  |  2006-07 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/kim-shane.jpg" alt="Shane K. Kim, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2006–07
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.legacyhealth.org/providers/shanek-kim" target="_blank" rel="noopener">Shane K. Kim, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- ==== WIWAN SANSANAYUDH  |  2006-07 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/sansanayudh-wiwan.jpg" alt="Wiwan Sansanayudh, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2006–07
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.vichaiyut.com/en/doctor/assoc-prof-dr-wiwan-sansanayudh" target="_blank" rel="noopener">Wiwan Sansanayudh, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Wiwan Sansanayudh, MD">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-native">
                        <span class="pf-script-lbl">Thai</span><span lang="th">วิวรรณ ศันสนยุทธ</span>
                    </p>
                    <p class="pf-country">
                        <strong>Country of origin</strong>Thailand
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     -->
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                    <ul class="pf-list pf-pubs">
                        <li data-list-item-id="e49f116c8553ab89883116235a5e3e318">
                            <a href="https://pubmed.ncbi.nlm.nih.gov/18441185/" target="_blank" rel="noopener">Fusarium and Acanthamoeba keratitis: can a single centre detect outbreaks?</a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 2006–07 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
        </div>
        <p class="pf-year-head">
            2005–06
        </p>
        <div class="pf-fellows-grid">
            <!-- ==== COLLEEN HALFPENNY  |  2005-06 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/halfpenny-colleen.jpg" alt="Colleen Halfpenny, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2005–06
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.willseye.org/doctor/colleen-p-halfpenny-md/" target="_blank" rel="noopener">Colleen Halfpenny, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        Wills Eye Hospital
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- ==== DEBORAH A. GILL  |  2005-06 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/gill-deborah.png" alt="Deborah A. Gill, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2005–06
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://mydoctor.kaiserpermanente.org/ncal/doctor/deborahgill" target="_blank" rel="noopener">Deborah A. Gill, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- ==== EVA KIM  |  2005-06 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/kim-eva.png" alt="Eva Kim, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2005–06
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://iconeyecare.com/eye-care-blog/meet-dr-eva-kim-at-icon-eyecare/" target="_blank" rel="noopener">Eva Kim, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- ==== MARIA DEL PILAR BERNAL  |  2005-06 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/bernal-maria-del-pilar.jpg" alt="Maria del Pilar Bernal, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2005–06
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.lsuhn.com/doctor/maria-bernal-md/" target="_blank" rel="noopener">Maria del Pilar Bernal, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 2005–06 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
        </div>
        <p class="pf-year-head">
            2004–05
        </p>
        <div class="pf-fellows-grid">
            <!-- ==== DONALD STONE  |  2004-05 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/stone-don.jpg" alt="Donald Stone, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2004–05
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.spokaneeye.com/doctors/donald-u-stone-md/" target="_blank" rel="noopener">Donald Stone, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Donald Stone, MD">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     -->
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                    <ul class="pf-list pf-pubs">
                        <li data-list-item-id="e7fa5056e31dd31b9134331d082b80864">
                            <a href="https://pubmed.ncbi.nlm.nih.gov/16490520/" target="_blank" rel="noopener">Correlation between clinical suspicion and PCR verification of infectious vitritis</a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- ==== MICHAEL SAIDEL  |  2004-05 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/saidel-michael.jpg" alt="Michael Saidel, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2004–05
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.northbayeye.com/michael-saidel-md" target="_blank" rel="noopener">Michael Saidel, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Michael Saidel, MD">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     -->
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                    <ul class="pf-list pf-pubs">
                        <li data-list-item-id="e7210cff7d0357a0883e16353aa37b386">
                            <a href="https://pubmed.ncbi.nlm.nih.gov/16376669/" target="_blank" rel="noopener">CMV retinitis after intravitreous triamcinolone in an immunocompetent patient</a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- ==== NISHA ACHARYA  |  2004-05 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/acharya-nisha.jpg" alt="Nisha Acharya, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2004–05
                    </p>
                    <p class="pf-name">
                        Nisha Acharya, MD
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        F.I. Proctor Foundation, UCSF Associate Director
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Nisha Acharya, MD">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     -->
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                    <ul class="pf-list pf-pubs">
                        <li data-list-item-id="e5c02cb990721be1d50a89d8defb21be1">
                            <a href="https://pubmed.ncbi.nlm.nih.gov/16490520/" target="_blank" rel="noopener">Correlation between clinical suspicion and PCR verification of infectious vitritis</a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- ==== ROCIO M. MURPHY  |  2004-05 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/murphy-rocio.webp" alt="Rocio M. Murphy, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2004–05
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.medicasurmexico.com/dra-maria-del-rocio-murphy-maciel.html" target="_blank" rel="noopener">Rocio M. Murphy, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        Médica Sur, Mexico City
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Rocio M. Murphy, MD">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-country">
                        <strong>Country of origin</strong>Mexico
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 2004–05 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
        </div>
        <p class="pf-year-head">
            2003–04
        </p>
        <div class="pf-fellows-grid">
            <!-- ==== ANU MANADHAR  |  2003-04 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/manandhar-anu.webp" alt="Anu Manadhar, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2003–04
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.instagram.com/p/DXjewCZiYD1/" target="_blank" rel="noopener">Anu Manadhar, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Anu Manadhar, MD">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-country">
                        <strong>Country of origin</strong>Nepal
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     -->
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                    <ul class="pf-list pf-pubs">
                        <li data-list-item-id="e70260135c29feec78d0c16e9c5ec6a9c">
                            <a href="https://pubmed.ncbi.nlm.nih.gov/22492851/" target="_blank" rel="noopener">High prevalence of anelloviruses in vitreous fluid of children with seasonal hyperacute panuveitis</a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- ==== GERAMI D. SEITZMAN  |  2003-04 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/seitzman-gerami.webp" alt="Gerami D. Seitzman, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2003–04
                    </p>
                    <p class="pf-name">
                        Gerami D. Seitzman, MD
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        F.I. Proctor Foundation, UCSF
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Gerami D. Seitzman, MD">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                    <ul class="pf-list pf-edu">
                        <li data-list-item-id="eca9ad8fed42e3a1e8543e388110bfd99">
                            MD, 1999 — University of Michigan, Ann Arbor
                        </li>
                        <li data-list-item-id="e749a202c2747b1d7cd06c5831c2d1b24">
                            Internship, Internal Medicine, 2000 — St. Joseph Mercy Hospital, Ann Arbor
                        </li>
                        <li data-list-item-id="ed9905cd720ad8d331e9ef50c9743039b">
                            Residency, Ophthalmology, 2003 — Wilmer Eye Institute, Johns Hopkins University
                        </li>
                        <li data-list-item-id="ee98d4b11aa6f4e5397a377402b7c2421">
                            Fellowship, Cornea, External Disease &amp; Uveitis, 2004 — Francis I. Proctor Foundation, UCSF
                        </li>
                    </ul>
                    <!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     -->
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                    <ul class="pf-list pf-pubs">
                        <li data-list-item-id="e05767ce70f0b0ace101323809e46309d">
                            <a href="https://pubmed.ncbi.nlm.nih.gov/16564821/" target="_blank" rel="noopener">Rose bengal and lissamine green inhibit detection of HSV by PCR</a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- ==== M. TERESA MAGONE  |  2003-04 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/magone-teresa.jpg" alt="M. Teresa Magone, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2003–04
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.linkedin.com/in/m-teresa-magone-53894226/" target="_blank" rel="noopener">M. Teresa Magone, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about M. Teresa Magone, MD">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     -->
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                    <ul class="pf-list pf-pubs">
                        <li data-list-item-id="ee9caccedc721762c7cfb51576e7b9cbe">
                            <a href="https://pubmed.ncbi.nlm.nih.gov/15953460/" target="_blank" rel="noopener">Chronic recurrent VZV keratitis confirmed by PCR</a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- ==== SARAH M. NEHLS  |  2003-04 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/nehls-sarah.webp" alt="Sarah M. Nehls, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2003–04
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.uwhealth.org/providers/sarah-m-nehls-md" target="_blank" rel="noopener">Sarah M. Nehls, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        University of Wisconsin Health
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Sarah M. Nehls, MD">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     -->
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                    <ul class="pf-list pf-pubs">
                        <li data-list-item-id="e5ed715d8ddbbae6c8a2bb0006b6b83b4">
                            <a href="https://pubmed.ncbi.nlm.nih.gov/16234466/" target="_blank" rel="noopener">Treatment of neurotrophic keratopathy with nasal dilator strips</a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 2003–04 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
        </div>
        <p class="pf-year-head">
            2002–04
        </p>
        <div class="pf-fellows-grid">
            <!-- ==== TISHA PRABRIPUTALOONG  |  2002-04 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/prabriputaloong-tisha.jpg" alt="Tisha Prabriputaloong, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2002–04
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://pubmed.ncbi.nlm.nih.gov/27565785/" target="_blank" rel="noopener">Tisha Prabriputaloong, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Tisha Prabriputaloong, MD">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-native">
                        <span class="pf-script-lbl">Thai</span><span lang="th">ทิชา ประพฤติทะลุ</span>
                    </p>
                    <p class="pf-country">
                        <strong>Country of origin</strong>Thailand
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     -->
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                    <ul class="pf-list pf-pubs">
                        <li data-list-item-id="e46402fb6924638d37567128ce15749cf">
                            <a href="https://pubmed.ncbi.nlm.nih.gov/25299934/" target="_blank" rel="noopener">Epidemiology of HSV eye disease in Northern California</a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 2002–04 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
        </div>
        <p class="pf-year-head">
            2002–03
        </p>
        <div class="pf-fellows-grid">
            <!-- ==== BENNIE H. JENG  |  2002-03 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/jeng-bennie.webp" alt="Bennie H. Jeng, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2002–03
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://millennialeye.com/articles/2013-jun/one-to-watch-bennie-jeng-md/" target="_blank" rel="noopener">Bennie H. Jeng, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        Chair, Dept. of Ophthalmology, University of Pennsylvania
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Bennie H. Jeng, MD">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     -->
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                    <ul class="pf-list pf-pubs">
                        <li data-list-item-id="e2171a401cc8f64c7a03bd8aa8335c922">
                            <a href="https://pubmed.ncbi.nlm.nih.gov/20697003/" target="_blank" rel="noopener">Epidemiology of ulcerative keratitis in Northern California</a>
                        </li>
                        <li data-list-item-id="e8f478e43cdca9046081f97f8263828cd">
                            <a href="https://pubmed.ncbi.nlm.nih.gov/22395880/" target="_blank" rel="noopener">Bacterial vs fungal keratitis: a photographic survey</a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- ==== ROOKAYA MATHER  |  2002-03 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/mather-rookaya.jpg" alt="Rookaya Mather, MD, FRCSC">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2002–03
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.schulich.uwo.ca/ophthalmology/people/faculty/rookaya_mather.html" target="_blank" rel="noopener">Rookaya Mather, MD, FRCSC<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        Western University (Schulich), Cornea/External Disease
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Rookaya Mather, MD, FRCSC">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-country">
                        <strong>Country of origin</strong>Canada
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     -->
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                    <ul class="pf-list pf-pubs">
                        <li data-list-item-id="e60c75c600fc80217d0f6b3c44a7d1b73">
                            <a href="https://pubmed.ncbi.nlm.nih.gov/15953462/" target="_blank" rel="noopener">Uveitis-associated flap edema after LASIK</a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 2002–03 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
        </div>
        <p class="pf-year-head">
            2001–02
        </p>
        <div class="pf-fellows-grid">
            <!-- ==== BRUNO BRANCO  |  2001-02 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/branco-bruno-castelo.jpg" alt="Bruno Branco, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2001–02
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.escavador.com/sobre/1685503/bruno-castelo-branco" target="_blank" rel="noopener">Bruno Branco, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Bruno Branco, MD">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-country">
                        <strong>Country of origin</strong>Brazil
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     -->
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                    <ul class="pf-list pf-pubs">
                        <li data-list-item-id="e4bdf5b17cebdf1655fa003e8a96d3020">
                            <a href="https://pubmed.ncbi.nlm.nih.gov/18569798/" target="_blank" rel="noopener">Hypotony maculopathy in HLA-B27-associated uveitis</a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 2001–02 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
        </div>
        <p class="pf-year-head">
            2000–01
        </p>
        <div class="pf-fellows-grid">
            <!-- ==== ANNA HOVAKIMYAN  |  2000-01 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/hovakimyan-anna.jpg" alt="Anna Hovakimyan, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2000–01
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://eyecareproject.com/wp-content/uploads/2017/10/Anna-Hovakimyan-CV.pdf" target="_blank" rel="noopener">Anna Hovakimyan, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Anna Hovakimyan, MD">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-country">
                        <strong>Country of origin</strong>Armenia
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     -->
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                    <ul class="pf-list pf-pubs">
                        <li data-list-item-id="e3e7e9b7faf41b9cfbf14f7fc790d39c5">
                            <a href="https://pubmed.ncbi.nlm.nih.gov/12434481/" target="_blank" rel="noopener">Ocular toxoplasmosis</a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- ==== AYMAN NASERI  |  2000-01 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/naseri-ayman.jpg" alt="Ayman Naseri, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2000–01
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.linkedin.com/in/ayman-naseri-485388136/" target="_blank" rel="noopener">Ayman Naseri, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Ayman Naseri, MD">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     -->
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                    <ul class="pf-list pf-pubs">
                        <li data-list-item-id="ea05822f44f29233876d36cf73b1e086e">
                            <a href="https://pubmed.ncbi.nlm.nih.gov/21640259/" target="_blank" rel="noopener">Early resident-performed cataract surgery</a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- ==== CARLOS SIVERIO LLOSA  |  2000-01 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/llosa-carlos.webp" alt="Carlos Siverio Llosa, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2000–01
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.linkedin.com/in/carlos-siverio-llosa-6724a93a/" target="_blank" rel="noopener">Carlos Siverio Llosa, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        President of the Board, Oftálmica Clínica de la Visión; cataract, uveitis, cornea &amp; inflammatory disease
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Carlos Siverio Llosa, MD">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-country">
                        <strong>Country of origin</strong>Peru
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     -->
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                    <ul class="pf-list pf-pubs">
                        <li data-list-item-id="ebc72bdbc926b088362a12dbe186859c5">
                            <a href="https://journals.sagepub.com/doi/10.5301/EJO.2011.6403" target="_blank" rel="noopener">(title needed)</a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- ==== JOHN SO-MIN CHANG  |  2000-01 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/chang-john-so-min.jpg" alt="John So-Min Chang, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2000–01
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.healio.com/news/ophthalmology/20120225/john-s-chang-jr" target="_blank" rel="noopener">John So-Min Chang, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about John So-Min Chang, MD">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-native">
                        <span class="pf-script-lbl">Chinese</span><span lang="zh">張叔銘</span>
                    </p>
                    <p class="pf-country">
                        <strong>Country of origin</strong>Hong Kong
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- ==== MARTIN MCKIBBIN  |  2000-01 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/mckibbin-martin.jpg" alt="Martin McKibbin, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2000–01
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.sciencedirect.com/author/7004041333/martin-andrew-mckibbin" target="_blank" rel="noopener">Martin McKibbin, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        Leeds Teaching Hospitals NHS Trust
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Martin McKibbin, MD">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-country">
                        <strong>Country of origin</strong>United Kingdom
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     -->
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                    <ul class="pf-list pf-pubs">
                        <li data-list-item-id="e86fec829d7925acf7c8de974841edd78">
                            <a href="https://pubmed.ncbi.nlm.nih.gov/39830270/" target="_blank" rel="noopener">De novo and inherited dominant variants in U4 and U6 snRNAs cause retinitis pigmentosa</a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- ==== YUMI IMAI  |  2000-01 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/imai-yumi.jpg" alt="Yumi Imai, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2000–01
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://pmc.ncbi.nlm.nih.gov/articles/PMC1797553/" target="_blank" rel="noopener">Yumi Imai, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Yumi Imai, MD">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     -->
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                    <ul class="pf-list pf-pubs">
                        <li data-list-item-id="e0cd9532a85b52ef2b35958cbc784a2ed">
                            <a href="https://pubmed.ncbi.nlm.nih.gov/14767813/" target="_blank" rel="noopener">Emergence of drug-resistant CMV retinitis… treated with ganciclovir</a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 2000–01 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
        </div>
        <p class="pf-year-head">
            2000–02
        </p>
        <div class="pf-fellows-grid">
            <!-- ==== ANTHONY J. ALDAVE  |  2000-02 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/aldave-anthony.jpg" alt="Anthony J. Aldave, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>2000–02
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://visionaries-international.org/board-of-directors/" target="_blank" rel="noopener">Anthony J. Aldave, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        UCLA Stein Eye Institute
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Anthony J. Aldave, MD">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     -->
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                    <ul class="pf-list pf-pubs">
                        <li data-list-item-id="ec093b4022b5d317ab332eb0fc0a38a67">
                            <a href="https://pubmed.ncbi.nlm.nih.gov/14609920/" target="_blank" rel="noopener">Novel mutations in CHST6… southern India</a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 2000–02 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
        </div>
    </div>
    <div class="pf-decade" id="d1990">
        <div class="pf-dec-head">
            <h2>
                1990s
            </h2>
            <p>
                <span class="pf-dec-count">29 fellows</span>
            </p>
        </div>
        <p class="pf-year-head">
            1999–00
        </p>
        <div class="pf-fellows-grid">
            <!-- ==== ABHA KUMAR  |  1999-00 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/kumar-abha.webp" alt="Abha Kumar, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>1999–00
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://scvmc.scvh.org/find-provider/Abha-B-Kumar" target="_blank" rel="noopener">Abha Kumar, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Abha Kumar, MD">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     -->
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                    <ul class="pf-list pf-pubs">
                        <li data-list-item-id="e65d528ec7cac43e6742a76181314a885">
                            <a href="https://pubmed.ncbi.nlm.nih.gov/14609920/" target="_blank" rel="noopener">Novel mutations in CHST6… macular corneal dystrophy in southern India</a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- ==== BRUCE D. GAYNOR  |  1999-00 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/gaynor-bruce.webp" alt="Bruce D. Gaynor, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>1999–00
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://allmaysee.org/wp-content/uploads/2021/10/Fall_2015_Visions.04.24.17.pdf" target="_blank" rel="noopener">Bruce D. Gaynor, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        F.I. Proctor Foundation, UCSF
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Bruce D. Gaynor, MD">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     -->
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                    <ul class="pf-list pf-pubs">
                        <li data-list-item-id="ecb5908aa40ae0ed8d994e7870391f512">
                            <a href="https://pubmed.ncbi.nlm.nih.gov/19329003/" target="_blank" rel="noopener">Herd protection against trachoma</a>
                        </li>
                        <li data-list-item-id="ef060a74e3183112efa397feb9e607ba4">
                            <a href="https://pubmed.ncbi.nlm.nih.gov/19724043/" target="_blank" rel="noopener">Mass azithromycin &amp; childhood mortality (JAMA 2009)</a>
                        </li>
                        <li data-list-item-id="edaf1a62aaab5f56cc10368f5419f6b2c">
                            [60+ trachoma papers]
                        </li>
                    </ul>
                </div>
            </div>
            <!-- ==== IRENE C. KUO  |  1999-00 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/kuo-irene.webp" alt="Irene C. Kuo, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>1999–00
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://profiles.hopkinsmedicine.org/provider/irene-c-kuo/2700517" target="_blank" rel="noopener">Irene C. Kuo, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        Johns Hopkins Wilmer Eye Institute
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Irene C. Kuo, MD">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     -->
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                    <ul class="pf-list pf-pubs">
                        <li data-list-item-id="e3c87e1324373de69e719084beff9edb6">
                            <a href="https://pubmed.ncbi.nlm.nih.gov/12504692/" target="_blank" rel="noopener">Genotypic analysis of CMV retinitis… ganciclovir implant</a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- ==== VINEET NICHOLAS BATRA  |  1999-00 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/batra-vineet.webp" alt="Vineet Nicholas Batra, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>1999–00
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.doximity.com/pub/vineet-batra-md" target="_blank" rel="noopener">Vineet Nicholas Batra, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Vineet Nicholas Batra, MD">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     -->
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                    <ul class="pf-list pf-pubs">
                        <li data-list-item-id="e75782a760184d28228aa8e01d2a0068c">
                            <a href="https://pubmed.ncbi.nlm.nih.gov/11406428/" target="_blank" rel="noopener">Phakic intraocular lenses</a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 1999–00 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
        </div>
        <p class="pf-year-head">
            1998–99
        </p>
        <div class="pf-fellows-grid">
            <!-- ==== N. KEVIN WADE  |  1998-99 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/wade-kevin.png" alt="N. Kevin Wade, MDCM">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>1998–99
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.vancouvereyeassociates.com/doctors" target="_blank" rel="noopener">N. Kevin Wade, MDCM<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        Vancouver Eye Associates
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about N. Kevin Wade, MDCM">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-country">
                        <strong>Country of origin</strong>Canada
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 1998–99 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
        </div>
        <p class="pf-year-head">
            1997–99
        </p>
        <div class="pf-fellows-grid">
            <!-- ==== JONATHAN I. DIAMANT  |  1997-99 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/diamant-jonathan.webp" alt="Jonathan I. Diamant, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>1997–99
                    </p>
                    <p class="pf-name">
                        Jonathan I. Diamant, MD
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- ==== MICHELE MABON  |  1997-99 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/mabon-michele.webp" alt="Michele Mabon, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>1997–99
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.cliniqueo.com/medecinsetchirurgiens/dre.mabon" target="_blank" rel="noopener">Michele Mabon, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        Clinique O, Quebec
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Michele Mabon, MD">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-country">
                        <strong>Country of origin</strong>Canada
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     -->
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                    <ul class="pf-list pf-pubs">
                        <li data-list-item-id="eade37071fc3513d6777abe14d7de65ca">
                            <a href="https://pubmed.ncbi.nlm.nih.gov/12187424/" target="_blank" rel="noopener">Does clinical diagnosis indicate ocular chlamydial infection in areas with a low prevalence of trachoma?</a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 1997–99 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
        </div>
        <p class="pf-year-head">
            1997
        </p>
        <div class="pf-fellows-grid">
            <!-- ==== PHAGARNART EIUMTRAKUL  |  1997 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/eiumtrakul-phagarnart.webp" alt="Phagarnart Eiumtrakul, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>1997
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.bumrungrad.com/en/doctors/phagarnart-eiumtrakul" target="_blank" rel="noopener">Phagarnart Eiumtrakul, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        Bumrungrad International Hospital, Bangkok
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Phagarnart Eiumtrakul, MD">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-native">
                        <span class="pf-script-lbl">Thai</span><span lang="th">ผกานาฏ เอี่ยมตระกูล</span>
                    </p>
                    <p class="pf-country">
                        <strong>Country of origin</strong>Thailand
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 1997 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
        </div>
        <p class="pf-year-head">
            1996–97
        </p>
        <div class="pf-fellows-grid">
            <!-- ==== ANTHONY J. DE ROSA  |  1996-97 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/rosa-anthony.webp" alt="Anthony J. De Rosa, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>1996–97
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.doximity.com/pub/anthony-derosa-md" target="_blank" rel="noopener">Anthony J. De Rosa, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 1996–97 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
        </div>
        <p class="pf-year-head">
            1996–98
        </p>
        <div class="pf-fellows-grid">
            <!-- ==== KENNETH CHERN  |  1996-98 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/chern-kenneth.webp" alt="Kenneth Chern, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>1996–98
                    </p>
                    <p class="pf-name">
                        Kenneth Chern, MD
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- ==== MICHAEL E. ZEGANS  |  1996-98 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/zegans-michael.webp" alt="Michael E. Zegans, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>1996–98
                    </p>
                    <p class="pf-name">
                        Michael E. Zegans, MD
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Michael E. Zegans, MD">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     -->
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                    <ul class="pf-list pf-pubs">
                        <li data-list-item-id="e4a8639f2a644c61308c4c607f3917930">
                            <a href="https://pubmed.ncbi.nlm.nih.gov/12203176/" target="_blank" rel="noopener">Disappearance of trachoma from Western Nepal</a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 1996–98 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
        </div>
        <p class="pf-year-head">
            1995–96
        </p>
        <div class="pf-fellows-grid">
            <!-- ==== CHIHORI WADA  |  1995-96 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/wada-chihori.webp" alt="Chihori Wada, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>1995–96
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://cir.nii.ac.jp/crid/1574231875198579840" target="_blank" rel="noopener">Chihori Wada, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Chihori Wada, MD">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-native">
                        <span class="pf-script-lbl">Chinese</span><span lang="zh">和田 千穂里</span>
                    </p>
                    <p class="pf-native">
                        <span class="pf-script-lbl">Chinese</span><span lang="zh">日本医科大学眼科学教室</span>
                    </p>
                    <p class="pf-country">
                        <strong>Country of origin</strong>Japan
                    </p>
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                    <ul class="pf-list pf-edu">
                        <li data-list-item-id="e80714046b757d2dc49a2f8301307169d">
                            日本医科大学眼科学教室 Department of Ophthalmology at Nippon Medical School
                        </li>
                    </ul>
                    <!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- ==== EMMETT T. CUNNINGHAM  |  1995-96 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/cunningham-emmett.webp" alt="Emmett T. Cunningham, MD, PhD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>1995–96
                    </p>
                    <p class="pf-name">
                        Emmett T. Cunningham, MD, PhD
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Emmett T. Cunningham, MD, PhD">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                    <ul class="pf-list pf-edu">
                        <li data-list-item-id="e105ce83e58db23155cebe2af4077bf36">
                            MD from Johns Hopkins University
                        </li>
                        <li data-list-item-id="e3cafc8a6a940a7c68f77f1c24c636efa">
                            MPH in Epidemiology and Statistics from Johns Hopkins University
                        </li>
                        <li data-list-item-id="e7fa6bdee753813114c44a964bb8c89c7">
                            PhD in Neuroscience from the University of California, San Diego (UCSD) for research conducted at The Salk Institute
                        </li>
                        <li data-list-item-id="eff96cbf64fcdcefa4b3ccc2c4ee1285f">
                            Residency in Ophthalmology at UCSF and The Francis I. Proctor Foundation
                        </li>
                        <li data-list-item-id="ead7c9aab3104f303574695233864c517">
                            Fellowship in Corneal Disease and Uveitis at UCSF and The Francis I. Proctor Foundation
                        </li>
                        <li data-list-item-id="ed283d2e70ff139870dc2e3a40b0d3253">
                            Medical Retina and Uveitis Fellowship at Moorfields Eye Hospital, London
                        </li>
                        <li data-list-item-id="ef5de3503c64009d2310dafa21e4ab9e5">
                            Fellowship in Public Health Ophthalmology at the Wilmer Eye Institute, Baltimore​
                        </li>
                    </ul>
                    <!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     -->
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                    <ul class="pf-list pf-pubs">
                        <li data-list-item-id="e9c955386fd7c9d581b2f983ba3a12a75">
                            <a href="https://pubmed.ncbi.nlm.nih.gov/33530714/" target="_blank" rel="noopener">Prevalence and causes of clinically detectable uveitic serous retinal detachment</a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 1995–96 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
        </div>
        <p class="pf-year-head">
            1995
        </p>
        <div class="pf-fellows-grid">
            <!-- ==== DIANA CONRAD  |  1995 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/conrad-diana.webp" alt="Diana Conrad, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>1995
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.conradeyecare.com.au/dr-diana-conrad/" target="_blank" rel="noopener">Diana Conrad, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Diana Conrad, MD">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                    <ul class="pf-list pf-edu">
                        <li data-list-item-id="e2c276689b03635b9dd7da4092ae24368">
                            Executive Leadership &amp; Founder RolesExecutive Chairman &amp; Co-Founder at Eyconis, an Ascendis Pharma spinout.Executive Chairman &amp; Co-Founder at Visara, Inc., a subsidiary of NovaBridge Biosciences.Executive Chairman at Oryon Cell Therapies.Board MembershipsVice Chairman of the Board at NovaBridge Biosciences (appointed in February 2026).Board Director at Aviceda Therapeutics (joined April 2025).Board Director at multiple biotech companies including Nacuity Pharmaceuticals, RetiNova, and Salution Health.Academic &amp; Clinical RolesFellow at the Stanford University Distinguished Career Institute (2024–Present).Adjunct Clinical Professor of Ophthalmology at Stanford University.Director of the Uveitis Service at the California Pacific Medical Center
                        </li>
                    </ul>
                    <!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 1995 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
        </div>
        <p class="pf-year-head">
            1994–95
        </p>
        <div class="pf-fellows-grid">
            <!-- ==== DAVID CLARK GRITZ  |  1994-95 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/gritz-david.webp" alt="David Clark Gritz, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>1994–95
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://moorfields.ae/medical-team/dr-david-clark-gritz/" target="_blank" rel="noopener">David Clark Gritz, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        Moorfields Eye Hospital, UAE
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about David Clark Gritz, MD">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     -->
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                    <ul class="pf-list pf-pubs">
                        <li data-list-item-id="e1d6c8be4bb76784a36836831ce94cc37">
                            <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6883276/" target="_blank" rel="noopener">Infectious corneal ulceration: a proposal for neglected tropical disease status</a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- ==== THOMAS M. LIETMAN  |  1994-95 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/lietman-thomas.webp" alt="Thomas M. Lietman, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>1994–95
                    </p>
                    <p class="pf-name">
                        Thomas M. Lietman, MD
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        Director, F.I. Proctor Foundation, UCSF
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Thomas M. Lietman, MD">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-country">
                        <strong>Country of origin</strong>usa
                    </p>
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                    <ul class="pf-list pf-edu">
                        <li data-list-item-id="e96e51e7799febda8e94ebdfae0045770">
                            BA, Molecular Biophysics and Biochemistry — Yale College
                        </li>
                        <li data-list-item-id="e55d0a6a60c96091efc24cbaa8ad48158">
                            MD — Columbia University College of Physicians and Surgeons
                        </li>
                        <li data-list-item-id="e21880479933d729b65765a7b4cb7605d">
                            Fellow — National Eye Institute, HHMI-NIH, Bethesda, MD
                        </li>
                        <li data-list-item-id="e5377e281eb802940304caf55ce6690a7">
                            Residency, Ophthalmology — Wilmer Eye Institute, Johns Hopkins University
                        </li>
                        <li data-list-item-id="ed37b7bcd9be634e99a8d0c4508d2c13d">
                            Fellow, Cornea &amp; External Diseases and Uveitis — F.I. Proctor Foundation, UCSF
                        </li>
                        <li data-list-item-id="eb85416ebe497bfc7e776022c8c33271c">
                            Fellow, Modeling of Infectious Diseases — Department of Epidemiology &amp; Biostatistics, UCSF
                        </li>
                        <li data-list-item-id="e0204e6dc448c55df8b6f54630aa17a4c">
                            Complex Systems Summer School — Santa Fe Institute
                        </li>
                    </ul>
                    <!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 1994–95 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
        </div>
        <p class="pf-year-head">
            1993
        </p>
        <div class="pf-fellows-grid">
            <!-- ==== DAVID HEIDEN  |  1993 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/heiden-david.webp" alt="David Heiden, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>1993
                    </p>
                    <p class="pf-name">
                        David Heiden, MD
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        Emergency Medicine: Spent 12 years working as an emergency room doctor, including serving a tenure as the Emergency Room Director at CPMC.Refugee &amp; Crisis Response: His dual background in emergency care and medicine led him to serve in global refugee disasters. His photo-documentary work in these crisis zones has been published in books and displayed at the San Francisco Museum of Modern Art (SFMOMA).HIV/AIDS Ocular Pioneering: Deeply impacted by the peak of the AIDS epidemic, he directed the Special Clinic for Ocular Complications of HIV/AIDS at Mt. Zion Hospital/UCSF (1996–1998).Global Blindness Prevention: He revolutionized global healthcare by training primary care doctors in resource-poor countries—including Ukraine, Russia, China, Myanmar, and India—to use indirect ophthalmoscopes to spot and treat CMV retinitis, successfully preventing irreversible blindness in thousands of HIV/AIDS patients.Major Humanitarian Recognition: Awarded the American Academy of Ophthalmology's (AAO) Outstanding Humanitarian Award in 2018 for his global impact.Current Positions &amp; AffiliationsClinical Practice: Practices as a senior general and subspecialty ophthalmologist at Pacific Eye Associates in San Francisco, CA, focusing on uveitis and systemic-linked eye illnesses.Hospital Affiliations: Maintains staff privileges at California Pacific Medical Center (CPMC) Van Ness &amp; Davies campuses and the UCSF Health St. Mary's Hospital network.Non-Profit Leadership: Serves as the Medical Director of the AIDS Eye Initiative at the Seva Foundation Center for Innovation in Eye Care, continuing his humanitarian collaborations with organizations like Doctors Without Borders (MSF).
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about David Heiden, MD">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-country">
                        <strong>Country of origin</strong>USA
                    </p>
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                    <ul class="pf-list pf-edu">
                        <li data-list-item-id="e69ecb8362773700fa11be30980124613">
                            Undergraduate Degree: Bachelor of Arts (BA) in History, graduated cum laude from Cornell University.Medical School: Doctor of Medicine (MD) from New York Medical College.Residency Programs: Dual residency training in both Internal Medicine and Ophthalmology at California Pacific Medical Center (CPMC) (formerly Pacific Presbyterian Medical Center). He is uniquely double board-certified in both specialties.Research Fellowships: Completed scientific research fellowships focusing on cardiovascular disease and blood coagulation.Clinical Fellowship: Completed a subspecialty clinical fellowship in Uveitis and Ocular Inflammation at the UCSF F.I. Proctor Foundation
                        </li>
                    </ul>
                    <!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     -->
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                    <ul class="pf-list pf-pubs">
                        <li data-list-item-id="e78a26141faf428737ff775edbc3f304b">
                            Title: Chronic low grade anterior uveitisPublished In: Mayo Clinic Proceedings (1993)Co-authors: David Heiden, N. Naushad Hussein, and H. Bruce OstlerClinical Focus: This research focused on the diagnostic nuances, long-term management, and systemic associations of persistent, low-grade inflammation in the anterior chamber of the eye.
                        </li>
                    </ul>
                </div>
            </div>
            <!-- ==== NARESH JOSHI  |  1993 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/joshi-naresh.webp" alt="Naresh Joshi, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>1993
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.nature.com/articles/eye1994177" target="_blank" rel="noopener">Naresh Joshi, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Naresh Joshi, MD">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     -->
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                    <ul class="pf-list pf-pubs">
                        <li data-list-item-id="edff1a2176aece3fc347d746c2c487ff3">
                            <a href="https://www.nature.com/articles/eye1994177" target="_blank" rel="noopener">(title needed)</a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 1993 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
        </div>
        <p class="pf-year-head">
            1993–94
        </p>
        <div class="pf-fellows-grid">
            <!-- ==== PRABJOT CHANNA  |  1993-94 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/channa-prabjot.webp" alt="Prabjot Channa, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>1993–94
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.brownhealth.org/providers/prabjot-channa-md" target="_blank" rel="noopener">Prabjot Channa, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Prabjot Channa, MD">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-country">
                        <strong>Country of origin</strong>India
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 1993–94 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
        </div>
        <p class="pf-year-head">
            1993–95
        </p>
        <div class="pf-fellows-grid">
            <!-- ==== DOUGLAS HOLSCLAW  |  1993-95 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/holsclaw-douglas.webp" alt="Douglas Holsclaw, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>1993–95
                    </p>
                    <p class="pf-name">
                        Douglas Holsclaw, MD
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- ==== MARK MILNER  |  1993-95 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/milner-mark.webp" alt="Mark Milner, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>1993–95
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.cedarsaspens.com/about-us/our-leadership/373-mark-milner-md" target="_blank" rel="noopener">Mark Milner, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        The Eye Center of Southern Connecticut (leadership)
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- ==== WILLIAM HODGE  |  1993-95 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/hodge-william.webp" alt="William Hodge, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>1993–95
                    </p>
                    <p class="pf-name">
                        William Hodge, MD
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about William Hodge, MD">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     -->
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                    <ul class="pf-list pf-pubs">
                        <li data-list-item-id="e6df4fd9ceecf7d9df0480e5cee75378b">
                            <a href="https://www.ajo.com/article/S0002-9394(99)80133-0/fulltext" target="_blank" rel="noopener">(title needed)</a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 1993–95 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
        </div>
        <p class="pf-year-head">
            1992–93
        </p>
        <div class="pf-fellows-grid">
            <!-- ==== ANDRES KLAEGER  |  1992-93 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/klaeger-andres.webp" alt="Andres Klaeger, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>1992–93
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.augenaerzte-gurtengasse.ch/arzt/andres" target="_blank" rel="noopener">Andres Klaeger, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Andres Klaeger, MD">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-country">
                        <strong>Country of origin</strong>Switzerland
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- ==== JOHN H. WILKINS  |  1992-93 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/wilkins-john.webp" alt="John H. Wilkins, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>1992–93
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.tandfonline.com/doi/abs/10.1080/09286580500477366" target="_blank" rel="noopener">John H. Wilkins, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 1992–93 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
        </div>
        <p class="pf-year-head">
            1990–92
        </p>
        <div class="pf-fellows-grid">
            <!-- ==== JOHN BIERLY  |  1990-92 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/bierly-john.webp" alt="John Bierly, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>1990–92
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.castleconnolly.com/top-doctors/john-r-bierly-ophthalmology-128cc296893" target="_blank" rel="noopener">John Bierly, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 1990–92 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
        </div>
        <p class="pf-year-head">
            1990–91
        </p>
        <div class="pf-fellows-grid">
            <!-- ==== ALEJANDRO O. CLIMENT  |  1990-91 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/climent-alejandro.webp" alt="Alejandro O. Climent, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>1990–91
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://corneaconsultores.com.mx/drcliment.html" target="_blank" rel="noopener">Alejandro O. Climent, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Alejandro O. Climent, MD">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-country">
                        <strong>Country of origin</strong>Mexico
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- ==== LINCOLN L. FREITAS  |  1990-91 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/freitas-lincoln.webp" alt="Lincoln L. Freitas, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>1990–91
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.institutodavisao.org.br/area-do-medico/lincoln-de-freitas/" target="_blank" rel="noopener">Lincoln L. Freitas, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Lincoln L. Freitas, MD">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-country">
                        <strong>Country of origin</strong>Brazil
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- ==== MICHIHARU ISHIZAKI  |  1990-91 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/ishizaki-michiharu.webp" alt="Michiharu Ishizaki, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>1990–91
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://ishizakieyeclinic.jimdofree.com/%E9%99%A2%E9%95%B7%E7%B5%8C%E6%AD%B4/" target="_blank" rel="noopener">Michiharu Ishizaki, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        獨協医科大学臨床教授（地域医療2012～） 　〈獨協医科大学の1年生・3年生が当院で地域医療の体験実習を行っています〉 獨協医科大学非常勤講師（眼科2001～） 日本眼科学会認定専門医（1989～） 栃木県眼科医会監事（2022～2026.3） 日本アレルギー学会認定専門医（2000～2021.３） 栃木県眼科医会副会長（2018～2022.3） 日本眼科医会代議員　（2018～2022.3）
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Michiharu Ishizaki, MD">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-native">
                        <span class="pf-script-lbl">Chinese</span><span lang="zh">石崎道治 院長</span>
                    </p>
                    <p class="pf-country">
                        <strong>Country of origin</strong>Japan
                    </p>
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                    <ul class="pf-list pf-edu">
                        <li data-list-item-id="e0bed78c503baddaa2be4d15bdd7c67ca">
                            979年
                        </li>
                        <li data-list-item-id="e4f2cd9c189b53c43a37dd4a61bf3a171">
                            獨協医科大学眼科入局
                        </li>
                        <li data-list-item-id="e70bcdbd9f4c4d9e170508c6494b60296">
                            1985年
                        </li>
                        <li data-list-item-id="e498f95df00ccf401e024c63d856a9fdc">
                            獨協医科大学臨床講師就任
                        </li>
                        <li data-list-item-id="ec313b4fa484405068b1431107ce042ca">
                            1987年
                        </li>
                        <li data-list-item-id="eb3588441fb7be702284624511c87ad65">
                            医学博士授与
                        </li>
                        <li data-list-item-id="ebf9f295a7a4631e560662f9578a41a76">
                            　　　　
                        </li>
                        <li data-list-item-id="e57463a6e28af86e08957dff727bff5b2">
                            博士論文：【スギ花粉によるアレルギー性結膜の実験的・組織学的研究】
                        </li>
                        <li data-list-item-id="e6a5c2dbbc0ab33019be1bad82dbb9ae5">
                            ・石﨑道治
                        </li>
                        <li data-list-item-id="e18648c27a2e7bce23004c484659cac52">
                            ・アレルギー35：1149‐1157、1986　本研究の一部は、文部科学省研究費No.60771421によります。
                        </li>
                        <li data-list-item-id="ec7ff4eb04452345d04c255af5359f696">
                            1990年
                        </li>
                        <li data-list-item-id="ec3add423dd052951af5c0b0ded1220f2">
                            関連論文：【スギ花粉性結膜炎の疫学調査と重症度分類】
                        </li>
                        <li data-list-item-id="e771a4fb1c1541fc3e3f9c7fa0ef19137">
                            ・石﨑道治．他
                        </li>
                        <li data-list-item-id="e0ede5a84cb5c95e842f2598a55d5f199">
                            ・日本の眼科67（6）：17-23、1996 　 本研究の一部は、昭和59年度社団法人日本眼科医会学術振興助成金によります。
                        </li>
                        <li data-list-item-id="e11d5e3d773c749227f03fbd37b2fd24c">
                            米国カルフォルニア州立大学プロクター研究所留学：
                        </li>
                        <li data-list-item-id="e91a04ccb29fd37e153027ae62052d17e">
                            　クラミジア感染症のワクチン開発のため、分子生物学を用いてクラミジア蛋白の抗原基を研究
                        </li>
                        <li data-list-item-id="e9624298984d276c1b9d1e1a5f0bf4a52">
                            &nbsp;
                        </li>
                        <li data-list-item-id="e75703a4edb0b599c2e21c17f182d6531">
                            研究論文：【Immune specificity of murine T cell lines to the major outer membrane protein of chlamydia trachomatis.】
                        </li>
                        <li data-list-item-id="e06d6a812d5a60c672dc274cfd90b9f70">
                            ・Ishizaki M. Judith E. Allen P. Robert Beatty. Richard S. Stephans
                        </li>
                        <li data-list-item-id="e0aa326490fba74c41a1553afa6d88c18">
                            ・Infection and Immunity 60：3714-3718,1992（世界的に有名な医学雑誌）
                        </li>
                        <li data-list-item-id="e4928516849b851e7c2272f2b4f5b5356">
                            1991年
                        </li>
                        <li data-list-item-id="ef8554b4b1026544c7ab8c08121db19fc">
                            獨協医科大学講師就任
                        </li>
                        <li data-list-item-id="e57efc774e191be43ba25dbbe83ead472">
                            1999年
                        </li>
                        <li data-list-item-id="e863c9df124df11b882b19d3e97f73cf6">
                            獨協医科大学助教授就任
                        </li>
                        <li data-list-item-id="e86c33c4ccc8efeecbf85eed74cb9cf33">
                            2001年
                        </li>
                        <li data-list-item-id="e949e1a62e26c9fd7748200fdf39b2766">
                            石﨑眼科開業
                        </li>
                    </ul>
                    <!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- ==== YOSHITSUGU INOUE  |  1990-91 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/inoue-yoshitsugu.webp" alt="Yoshitsugu Inoue, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>1990–91
                    </p>
                    <p class="pf-name">
                        Yoshitsugu Inoue, MD
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        平成5年1月 大手前病院眼科部長 平成8年5月 大阪大学眼科講師 平成10年4月 大阪大学眼科助教授 平成13年7月 鳥取大学眼科（平成14年4月より視覚病態学と改名）教授 令和4年4月 日野病院名誉病院長
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Yoshitsugu Inoue, MD">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-native">
                        <span class="pf-script-lbl">Chinese</span><span lang="zh">名誉病院長 [眼科]</span>
                    </p>
                    <p class="pf-native">
                        <span class="pf-script-lbl">Chinese</span><span lang="zh">井上 幸次</span>
                    </p>
                    <p class="pf-country">
                        <strong>Country of origin</strong>Japan
                    </p>
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                    <ul class="pf-list pf-edu">
                        <li data-list-item-id="ef8256194f4ca04f106e4db9b36ff38b7">
                            昭和56年3月 大阪大学医学部卒業
                        </li>
                        <li data-list-item-id="ecc0367ed1b9e6216c77d1612ae7c6dbc">
                            昭和62年3月 大阪大学医学部大学院修了
                        </li>
                        <li data-list-item-id="e02e68e2dbfd0179ee9da9e6514396929">
                            昭和63年11月 大阪大学眼科助手
                        </li>
                        <li data-list-item-id="ee21961d223e70b4bacb36f6893d29692">
                            平成元年7月 UCSF（University of California San Francisco）プロテクター研究所研究員
                        </li>
                    </ul>
                    <!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 1990–91 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
        </div>
    </div>
    <div class="pf-decade" id="d1980">
        <div class="pf-dec-head">
            <h2>
                1980s
            </h2>
            <p>
                <span class="pf-dec-count">37 fellows</span>
            </p>
        </div>
        <p class="pf-year-head">
            1989–90
        </p>
        <div class="pf-fellows-grid">
            <!-- ==== DR. CESAR RAMON G. ESPIRITU  |  1989-90 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/espiritu-cesar.webp" alt="Dr. Cesar Ramon G. Espiritu, Ophthalmologist">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>1989–90
                    </p>
                    <p class="pf-name">
                        Dr. Cesar Ramon G. Espiritu, Ophthalmologist
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Dr. Cesar Ramon G. Espiritu, Ophthalmologist">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-country">
                        <strong>Country of origin</strong>Philippines
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- ==== EIRENE WONG  |  1989-90 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/wong-eirene.webp" alt="Eirene Wong, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>1989–90
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.sutterhealth.org/find-provider/dr-eirene-wong-1046234335" target="_blank" rel="noopener">Eirene Wong, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- ==== FRANCES M. DOSSETOR  |  1989-90 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/dossetor-frances.webp" alt="Frances M. Dossetor, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>1989–90
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://mydoctor.kaiserpermanente.org/ncal/doctor/dossetor/about" target="_blank" rel="noopener">Frances M. Dossetor, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- ==== JAMES P. DUNN  |  1989-90 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/dunn-james.webp" alt="James P. Dunn, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>1989–90
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://midatlanticretina.com/doctor/james-p-dunn-m-d/" target="_blank" rel="noopener">James P. Dunn, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        Mid Atlantic Retina / Wills Eye
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 1989–90 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
        </div>
        <p class="pf-year-head">
            1988
        </p>
        <div class="pf-fellows-grid">
            <!-- ==== CARLOS PAVESIO  |  1988 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/pavesio-carlos.webp" alt="Carlos Pavesio, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>1988
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.moorfields.nhs.uk/private/consultants/carlos-pavesio" target="_blank" rel="noopener">Carlos Pavesio, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        Moorfields Eye Hospital, London
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Carlos Pavesio, MD">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-country">
                        <strong>Country of origin</strong>Brazil
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 1988 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
        </div>
        <p class="pf-year-head">
            1988–89
        </p>
        <div class="pf-fellows-grid">
            <!-- ==== MARVIN PATTON  |  1988-89 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo is-empty">
                    no photo<br>
                    on file
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>1988–89
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://journals.asm.org/doi/pdf/10.1128/iai.59.4.1579-1582.1991" target="_blank" rel="noopener">Marvin Patton, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- ==== ROBERT A. COPELAND  |  1988-89 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/copeland-robert.webp" alt="Robert A. Copeland, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>1988–89
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.instagram.com/p/C2_C4tZR30g/" target="_blank" rel="noopener">Robert A. Copeland, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- ==== TAKESHI NAITO  |  1988-89 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/naito-takeshi.webp" alt="Takeshi Naito, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>1988–89
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.kasugai-reha.com/staff/%E5%86%85%E8%97%A4-%E6%AF%85/" target="_blank" rel="noopener">Takeshi Naito, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        1981: Graduated from Tokushima University Faculty of Medicine and joined the Department of Ophthalmology.1982: Medical Staff, Department of Ophthalmology at Kochi Prefectural Agricultural Cooperative Comprehensive Hospital.1983: Assistant Professor, Department of Ophthalmology, Tokushima University Hospital.1984: Associate Professor, Faculty of Medicine, Tribhuvan University (Kingdom of Nepal), engaging in widespread medical camp operations.1988: Lecturer, Faculty of Medicine, Tokushima University.1988: Traveled abroad as a Ministry of Education Overseas Research Fellow to study at the University of California, San Francisco (UCSF) Proctor Foundation for Research in Ophthalmology.1997: Associate Professor, Faculty of Medicine, Tokushima University.2007: Initiated the long-term ophthalmic medical support mission in Mozambique.2015: Specially Appointed Professor, International Cooperation Division, International Center, Tokushima University.Current: Serving as a Full-time Ophthalmologist and Clinical Professor at JA Tokushima Kouseiren Anan Medical Center and Specially Appointed Professor at Tokushima University.Major Awards &amp; Affiliations
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Takeshi Naito, MD">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-native">
                        <span class="pf-script-lbl">Chinese</span><span lang="zh">内藤毅</span>
                    </p>
                    <p class="pf-country">
                        <strong>Country of origin</strong>Japan
                    </p>
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                    <ul class="pf-list pf-edu">
                        <li data-list-item-id="e78492b8fb8a2d18fb10b447f584ee511">
                            1981: Graduated from Tokushima University Faculty of Medicine and joined the Department of Ophthalmology.1982: Medical Staff, Department of Ophthalmology at Kochi Prefectural Agricultural Cooperative Comprehensive Hospital.1983: Assistant Professor, Department of Ophthalmology, Tokushima University Hospital.1984: Associate Professor, Faculty of Medicine, Tribhuvan University (Kingdom of Nepal), engaging in widespread medical camp operations.1988: Lecturer, Faculty of Medicine, Tokushima University.1988: Traveled abroad as a Ministry of Education Overseas Research Fellow to study at the University of California, San Francisco (UCSF) Proctor Foundation for Research in Ophthalmology.1997: Associate Professor, Faculty of Medicine, Tokushima University
                        </li>
                    </ul>
                    <!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- ==== TODD P. MARGOLIS  |  1988-89 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/margolis-todd.webp" alt="Todd P. Margolis, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>1988–89
                    </p>
                    <p class="pf-name">
                        Todd P. Margolis, MD
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 1988–89 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
        </div>
        <p class="pf-year-head">
            1987–88
        </p>
        <div class="pf-fellows-grid">
            <!-- ==== ROSEMARIE BREITBACH  |  1987-88 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo is-empty">
                    no photo<br>
                    on file
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>1987–88
                    </p>
                    <p class="pf-name">
                        Rosemarie Breitbach, MD
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- ==== SUSAN LEWALLEN  |  1987-88 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/lewallen-susan.webp" alt="Susan Lewallen, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>1987–88
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://knowtheglow.org/interview-with-dr-susan-lewallen/" target="_blank" rel="noopener">Susan Lewallen, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 1987–88 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
        </div>
        <p class="pf-year-head">
            1987–89
        </p>
        <div class="pf-fellows-grid">
            <!-- ==== SCOTT S. WEISSMAN  |  1987-89 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/weissman-scott.webp" alt="Scott S. Weissman, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>1987–89
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.practo.com/new-york/doctor/scott-s-weissman-ophthalmologist" target="_blank" rel="noopener">Scott S. Weissman, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 1987–89 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
        </div>
        <p class="pf-year-head">
            1986–87
        </p>
        <div class="pf-fellows-grid">
            <!-- ==== NAUSHAD HUSSEIN  |  1986-87 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo is-empty">
                    no photo<br>
                    on file
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>1986–87
                    </p>
                    <p class="pf-name">
                        Naushad Hussein, MD
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Naushad Hussein, MD">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     -->
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                    <ul class="pf-list pf-pubs">
                        <li data-list-item-id="e100898abc20a0d780447ba88c4d65fad">
                            Low Intraocular Pressure and Postural Changes in Intraocular Pressure in Patients With Hansen's Disease
                        </li>
                        <li data-list-item-id="e53314e57ce9c1be5ff6ad71d467c3913">
                            Naushad Hussein, M.D. ∙ Paul Courtright, Dr.P.H. ∙ H. Bruce Ostler, M.D. ∙ John Hetherington, M.D. ∙ Robert H. Gelber, M.D.
                        </li>
                    </ul>
                </div>
            </div>
            <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 1986–87 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
        </div>
        <p class="pf-year-head">
            1985
        </p>
        <div class="pf-fellows-grid">
            <!-- ==== PAUL F. KINNEAR  |  1985 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/kinnear-paul.webp" alt="Paul F. Kinnear, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>1985
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.queensgateedu.org/elibrary/uploads/ebook/caaab4dcea463b0c249d95439c0e0efbcafdb97f255c95bd5be373b5a051a86d3a63eee25c6ec7e5d1fb460a14d2773ee2afc3472db8b85ae2a4913f590a14e5.pdf" target="_blank" rel="noopener">Paul F. Kinnear, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Paul F. Kinnear, MD">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-country">
                        <strong>Country of origin</strong>United Kingdom
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 1985 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
        </div>
        <p class="pf-year-head">
            1985–86
        </p>
        <div class="pf-fellows-grid">
            <!-- ==== JEAN DESCHENES  |  1985-86 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/deschenes-jean.webp" alt="Jean Deschenes, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>1985–86
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://bjo.bmj.com/content/72/12/905" target="_blank" rel="noopener">Jean Deschenes, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 1985–86 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
        </div>
        <p class="pf-year-head">
            1985–87
        </p>
        <div class="pf-fellows-grid">
            <!-- ==== RICHARD L. MANKA  |  1985-87 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/manka-richard.webp" alt="Richard L. Manka, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>1985–87
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.linkedin.com/in/richard-manka-47535b89/" target="_blank" rel="noopener">Richard L. Manka, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 1985–87 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
        </div>
        <p class="pf-year-head">
            1984
        </p>
        <div class="pf-fellows-grid">
            <!-- ==== JAMES A. PARKER  |  1984 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/parker-james.jpg" alt="James A. Parker, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>1984
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.linkedin.com/in/james-parker-75068b2ab/details/education/" target="_blank" rel="noopener">James A. Parker, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 1984 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
        </div>
        <p class="pf-year-head">
            1983–84
        </p>
        <div class="pf-fellows-grid">
            <!-- ==== CAREEN YEN LOWDER  |  1983-84 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/lowder-careen.jpg" alt="Careen Yen Lowder, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>1983–84
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://providers.clevelandclinic.org/provider/careen-lowder/4339177" target="_blank" rel="noopener">Careen Yen Lowder, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        Cleveland Clinic
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Careen Yen Lowder, MD">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     -->
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                    <ul class="pf-list pf-pubs">
                        <li data-list-item-id="e0036ca4325ed110635e571edbd0032d4">
                            <a href="https://pubmed.ncbi.nlm.nih.gov/17434436/" target="_blank" rel="noopener">Multifocal posterior necrotizing retinitis</a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- ==== MARTIN MAYERS  |  1983-84 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/mayers-martin.jpg" alt="Martin Mayers, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>1983–84
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.linkedin.com/in/martin-mayers-b756438/" target="_blank" rel="noopener">Martin Mayers, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Martin Mayers, MD">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     -->
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                    <ul class="pf-list pf-pubs">
                        <li data-list-item-id="efc7362befa1cd1d46941458a306525e9">
                            <a href="https://www.researchgate.net/publication/19242890_…" target="_blank" rel="noopener">Recombinant human interferon alpha D in HSV-1 recurrence in the rabbit</a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- ==== WEN HUA ZHANG  |  1983-84 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/zhang-wen-hua.jpg" alt="Wen Hua Zhang, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>1983–84
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.fh21.com.cn/doctor/1404561/article/" target="_blank" rel="noopener">Wen Hua Zhang, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        VERIFY
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Wen Hua Zhang, MD">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-country">
                        <strong>Country of origin</strong>Beijing Tongren Eye Center; active Chinese doctor page — VERIFY, likely LIVING; photo zhang-wen-hua.webp
                    </p>
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                    <ul class="pf-list pf-edu">
                        <li data-list-item-id="e16b8c91799c17e2b74e3ceba0f9b9219">
                            China
                        </li>
                    </ul>
                    <!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     -->
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                    <ul class="pf-list pf-pubs">
                        <li data-list-item-id="e211ab7af1b49778925002121b84f9a30">
                            Chief Physician, Beijing Tongren Eye Center
                        </li>
                    </ul>
                </div>
            </div>
            <!-- ==== WILLIAM R. FREEMAN  |  1983-84 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/freeman-william-r.jpg" alt="William R. Freeman, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>1983–84
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://providers.ucsd.edu/details/11714/ophthalmology" target="_blank" rel="noopener">William R. Freeman, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        UCSD Shiley Eye Institute
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 1983–84 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
        </div>
        <p class="pf-year-head">
            1983
        </p>
        <div class="pf-fellows-grid">
            <!-- ==== SHIU Y. KWOK  |  1983 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/kwok-shiu.webp" alt="Shiu Y. Kwok, MD, PhD, JD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>1983
                    </p>
                    <p class="pf-name">
                        Shiu Y. Kwok, MD, PhD, JD
                    </p>
                    <p class="pf-memoriam">
                        In memoriam (2024)
                    </p>
                    <p class="pf-summary">
                        Ophthalmologist in San Francisco for over four decades; began career as a molecular biologist; author of 50+ papers; Fellow of the American Academy of Ophthalmology; co-founder and medical advisor, Vision Care Services Foundation (SF Chinatown Lions Club); Chair, Prevent Blindness Northern California
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Shiu Y. Kwok, MD, PhD, JD">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-native">
                        <span class="pf-script-lbl">郭兆源 (https</span><span>//aiodoc.com/doctor/kwok-shiu-yuen)</span>
                    </p>
                    <p class="pf-country">
                        <strong>Country of origin</strong>USA
                    </p>
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                    <ul class="pf-list pf-edu">
                        <li data-list-item-id="ed50c5da4a4f3a82c83872e6dfae75858">
                            PhD, Molecular Biology, UCLA (1972)
                        </li>
                        <li data-list-item-id="e433de8ebef88869753d02f62508920ce">
                            MD, Albert Einstein College of Medicine (1979)
                        </li>
                        <li data-list-item-id="e320139d9ef89fa930ef54d5401c58336">
                            Internship, Mount Sinai–Bronx VA Medical Center
                        </li>
                        <li data-list-item-id="eeee2cf89b02acebd1c1ab81b6bc11320">
                            Residency, UCSF
                        </li>
                        <li data-list-item-id="ec973bbc1f277fa8c56cc95c7014753a6">
                            Fellowships at Cornell Medical College, Proctor Foundation (UCSF), and Doheny Eye Institute (USC)
                        </li>
                        <li data-list-item-id="e3ebab95d5b87c556d1f6bd4f79ca465a">
                            JD, University of San Francisco
                        </li>
                    </ul>
                    <!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     -->
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                    <ul class="pf-list pf-pubs">
                        <li data-list-item-id="ec7769a7efe642d160c43acb73e19638c">
                            (blank)
                        </li>
                    </ul>
                </div>
            </div>
            <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 1983 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
        </div>
        <p class="pf-year-head">
            1982–83
        </p>
        <div class="pf-fellows-grid">
            <!-- ==== EDUARDO P. PENNA  |  1982-83 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo is-empty">
                    no photo<br>
                    on file
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>1982–83
                    </p>
                    <p class="pf-name">
                        Eduardo P. Penna, MD
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Eduardo P. Penna, MD">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-country">
                        <strong>Country of origin</strong>Brazil
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- ==== GARY P. BARTH  |  1982-83 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/barth-gary-p.jpg" alt="Gary P. Barth, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>1982–83
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.linkedin.com/in/gary-p-barth-b83961216/" target="_blank" rel="noopener">Gary P. Barth, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- ==== JOHN C. MERRIAM  |  1982-83 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/merriam-john.webp" alt="John C. Merriam, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>1982–83
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.castleconnolly.com/top-doctors/john-c-merriam-ophthalmology-81cc003246" target="_blank" rel="noopener">John C. Merriam, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- ==== ROBERT M. WEBB  |  1982-83 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/webb-robert-m.webp" alt="Robert M. Webb, MD, FACS">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>1982–83
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://catricalafuneralhome.com/tribute/details/681" target="_blank" rel="noopener">Robert M. Webb, MD, FACS<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Robert M. Webb, MD, FACS">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     -->
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                    <ul class="pf-list pf-pubs">
                        <li data-list-item-id="e507535552d9132aa335434fd9a91b3f5">
                            <a href="https://journals.lww.com/corneajrnl/abstract/1982/01040/indolent_bacterial_corneal_ulcers.11.aspx" target="_blank" rel="noopener">Indolent Bacterial Corneal Ulcers</a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- ==== YUICHI OHASHI  |  1982-83 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/ohashi-yuichi.jpg" alt="Yuichi Ohashi, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>1982–83
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://researchmap.jp/read0171128" target="_blank" rel="noopener">Yuichi Ohashi, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        Professor Emeritus at Ehime University.Former President (学長) of Ehime University.Heavily involved in leadership for major academic societies, including serving as a Board Member for the Japanese Ophthalmological Society (日本眼科学会) and former President of the Japan Cornea Society (日本角膜学会).Career Summary:1985: Appointed Director of the Department of Ophthalmology at Kansai Rosai Hospital.Late 1980s: Served as a Lecturer in the Department of Ophthalmology at Osaka University.1992: Appointed Professor and Chair of the Department of Ophthalmology at the Ehime University School of Medicine.2003: Appointed Director (Hospital Director) of Ehime University Hospital.2006: Appointed Executive Director and Vice President of Ehime University.2015: Elected as the President (学長) of Ehime University.
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Yuichi Ohashi, MD">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-native">
                        <span class="pf-script-lbl">Chinese</span><span lang="zh">大橋裕一</span>
                    </p>
                    <p class="pf-country">
                        <strong>Country of origin</strong>Japan
                    </p>
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                    <ul class="pf-list pf-edu">
                        <li data-list-item-id="ecdac775f4a1aa871be26f24985da4843">
                            1975: Graduated from the Osaka University Faculty of Medicine.1980: Appointed as an Assistant in the Department of Ophthalmology at Osaka University.1980s: Earned his Doctor of Philosophy (PhD) in Medical Sciences from Osaka University.1982–1984: Traveled to the United States to serve as a Senior Research Fellow at the UCSF Francis I. Proctor Foundation for Research in Ophthalmology, specializing in ocular infections and corneal immunology
                        </li>
                    </ul>
                    <!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 1982–83 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
        </div>
        <p class="pf-year-head">
            1982
        </p>
        <div class="pf-fellows-grid">
            <!-- ==== OLIVER MARC KORSHIN  |  1982 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/korshin-oliver.webp" alt="Oliver Marc Korshin, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>1982
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.healthgrades.com/physician/dr-oliver-korshin-y9m99" target="_blank" rel="noopener">Oliver Marc Korshin, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Oliver Marc Korshin, MD">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                    <ul class="pf-list pf-edu">
                        <li data-list-item-id="e1da9890b3bff9969a23be90c9eb4c44f">
                            St. John's College, Maryland (A.B., 1963)
                        </li>
                    </ul>
                    <!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- ==== SHIGEAKI OHNO  |  1982 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/ohno-shigeaki.png" alt="Shigeaki Ohno, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>1982
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www-user.yokohama-cu.ac.jp/~jbehcet/about/aisatsu.html" target="_blank" rel="noopener">Shigeaki Ohno, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        Professor Emeritus at Hokkaido University Graduate School of Medicine.President / Chairman of the Board for the Japanese Society for Behçet's Disease.Director of Ophthalmology at Aishin Memorial Hospital (joined in April 2013).Career Summary:1989: Appointed as Professor and Chair of the Department of Ophthalmology at Yokohama City University School of Medicine.2000: Returned to his alma mater as the 5th Professor and Chair of the Department of Ophthalmology at Hokkaido University Graduate School of Medicine.2003: Served as the Vice Director of Hokkaido University Hospital.2008: Retired from the main chair position upon reaching mandatory retirement age and was appointed Specially Appointed Professor of the Department of Ocular Inflammatory Diseases at Hokkaido University.
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Shigeaki Ohno, MD">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-native">
                        <span class="pf-script-lbl">Chinese</span><span lang="zh">大野重昭</span>
                    </p>
                    <p class="pf-country">
                        <strong>Country of origin</strong>Japan
                    </p>
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                    <ul class="pf-list pf-edu">
                        <li data-list-item-id="effeda3219293a8e0c9030d5a66063f1b">
                            1970: Graduated from Hokkaido University Faculty of Medicine.1970: Joined the Department of Ophthalmology at Hokkaido University Hospital as a resident.1970s: Earned his Doctor of Philosophy (PhD) in Medical Sciences.1980s: Traveled to the United States as an Overseas Research Fellow funded by the Ministry of Education to conduct advanced fellowship research at the UCSF Francis I. Proctor Foundation for Research in Ophthalmology
                        </li>
                    </ul>
                    <!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 1982 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
        </div>
        <p class="pf-year-head">
            1981
        </p>
        <div class="pf-fellows-grid">
            <!-- ==== CAROLE ANN CASTEEN  |  1981 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/casteen-carole.webp" alt="Carole Ann Casteen, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>1981
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://healthy.kaiserpermanente.org/southern-california/physicians/carole-casteen-2380935" target="_blank" rel="noopener">Carole Ann Casteen, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 1981 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
        </div>
        <p class="pf-year-head">
            1981–82
        </p>
        <div class="pf-fellows-grid">
            <!-- ==== BRUCE I. KIRSCHNER  |  1981-82 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/kirschner-bruce-i.webp" alt="Bruce I. Kirschner, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>1981–82
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.pogvision.com/bruce-i--kirschner--m-d-" target="_blank" rel="noopener">Bruce I. Kirschner, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- ==== DAVID M. MEISLER  |  1981-82 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/meisler-david.png" alt="David M. Meisler, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>1981–82
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.yumpu.com/en/document/read/18002299/ophthalmology-update-cleveland-clinic" target="_blank" rel="noopener">David M. Meisler, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        Cleveland Clinic
                    </p>
                </div>
                <p>
                    <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about David M. Meisler, MD">▾</button>
                </p>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     -->
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                    <ul class="pf-list pf-pubs">
                        <li data-list-item-id="e15d77e2d102ddc92b54dbb2533eaed91">
                            <a href="(LINK NEEDED)" target="_blank" rel="noopener">Varicella-Zoster Virus Retinitis in Patients With AIDS</a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- ==== PHILIP E. NEWMAN  |  1981-82 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/newman-philip.webp" alt="Philip E. Newman, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>1981–82
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.centerforsightconyers.com/our-team/dr-philip-newman/" target="_blank" rel="noopener">Philip E. Newman, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- ==== VINCENT P. DE LUISE  |  1981-82 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/deluise-vincent.jpg" alt="Vincent P. De Luise, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>1981–82
                    </p>
                    <p class="pf-name">
                        Vincent P. De Luise, MD
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 1981–82 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
        </div>
        <p class="pf-year-head">
            1980–82
        </p>
        <div class="pf-fellows-grid">
            <!-- ==== JONATHAN BELMONT  |  1980-82 ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/belmont-jonathan.jpg" alt="Jonathan Belmont, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>1980–82
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://obits.goldsteinsfuneral.com/dr-jonathan-belmont" target="_blank" rel="noopener">Jonathan Belmont, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->
                </div>
            </div>
            <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 1980–82 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
        </div>
        <p class="pf-year-head">
            1980–81
        </p>
        <div class="pf-fellows-grid">
            <!-- ==== IVAN ROY SCHWAB  |  UNKNOWN — confirm ==== -->
            <div class="pf-fellow-card">
                <div class="pf-fellow-photo">
                    <img src="https://nathes690.github.io/proctor-fellows/img/schwab-ivan.webp" alt="Ivan Roy Schwab, MD">
                </div>
                <div class="pf-body">
                    <p class="pf-span-top">
                        <span class="pf-year-lbl">Fellowship year</span>1980-82
                    </p>
                    <p class="pf-name">
                        <a class="pf-name-link" href="https://www.aosonline.org/assets/Uploads/TAOS-2025.pdf" target="_blank" rel="noopener">Ivan Roy Schwab, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                    </p>
                    <!-- 
                    <p class="pf-memoriam">
                        In memoriam (YEAR)
                    </p>
                     -->
                    <p class="pf-summary">
                        &nbsp;
                    </p>
                </div>
                <div class="pf-toggle-spacer">
                    &nbsp;
                </div>
                <div class="pf-more">
                    <p class="pf-country">
                        &nbsp;
                    </p>
                    <!-- ==== ROBERT M. LANG  |  1980-81 ==== -->
                    <div class="pf-fellow-card">
                        <div class="pf-fellow-photo is-empty">
                            no photo<br>
                            on file
                        </div>
                        <div class="pf-body">
                            <p class="pf-span-top">
                                <span class="pf-year-lbl">Fellowship year</span>1980–81
                            </p>
                            <p class="pf-name">
                                Robert M. Lang, MD
                            </p>
                            <!-- 
                            <p class="pf-memoriam">
                                In memoriam (YEAR)
                            </p>
                             -->
                            <p class="pf-summary">
                                &nbsp;
                            </p>
                        </div>
                        <p>
                            <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Robert M. Lang, MD">▾</button>
                        </p>
                        <div class="pf-more">
                            <p class="pf-country">
                                &nbsp;
                            </p>
                            <!-- 
                            <p class="pf-sec-head pf-sec-edu">
                                Education and training
                            </p>
                                                 
                            <ul class="pf-list pf-edu">
                                <li>
                                    ADD TRAINING HERE
                                </li>
                            </ul>
                             --><!-- 
                            <p class="pf-sec-head pf-sec-roles">
                                Selected roles
                            </p>
                                                 
                            <ul class="pf-list pf-roles">
                                <li>
                                    ADD ROLE HERE
                                </li>
                            </ul>
                             -->
                            <p class="pf-sec-head pf-sec-pubs">
                                Publications with Proctor
                            </p>
                            <ul class="pf-list pf-pubs">
                                <li data-list-item-id="e09592f506329496e378b774689926282">
                                    <a href="https://www.aaojournal.org/article/S0161-6420(82)34632-1/fulltext" target="_blank" rel="noopener">Pattern Dystrophy of the Retinal Pigment Epithelium</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- ==== SHAO-CHEN LI  |  1980-81 ==== -->
                    <div class="pf-fellow-card">
                        <div class="pf-fellow-photo">
                            <img src="https://nathes690.github.io/proctor-fellows/img/li-shao-chen.webp" alt="Shao-Chen Li, MD">
                        </div>
                        <div class="pf-body">
                            <p class="pf-span-top">
                                <span class="pf-year-lbl">Fellowship year</span>1980–81
                            </p>
                            <p class="pf-name">
                                Shao-Chen Li, MD
                            </p>
                            <p class="pf-memoriam">
                                In memoriam (2001)
                            </p>
                            <p class="pf-summary">
                                Ophthalmologist; Academician, Chinese Academy of Engineering; Honorary Director, Zhongshan Ophthalmic Center, Sun Yat-sen University
                            </p>
                        </div>
                        <p>
                            <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Shao-Chen Li, MD">▾</button>
                        </p>
                        <div class="pf-more">
                            <p class="pf-native">
                                <span class="pf-script-lbl">Chinese</span><span lang="zh">李绍珍</span>
                            </p>
                            <p class="pf-country">
                                <strong>Country of origin</strong>China
                            </p>
                            <!-- 
                            <p class="pf-sec-head pf-sec-edu">
                                Education and training
                            </p>
                                                 
                            <ul class="pf-list pf-edu">
                                <li>
                                    ADD TRAINING HERE
                                </li>
                            </ul>
                             --><!-- 
                            <p class="pf-sec-head pf-sec-roles">
                                Selected roles
                            </p>
                                                 
                            <ul class="pf-list pf-roles">
                                <li>
                                    ADD ROLE HERE
                                </li>
                            </ul>
                             --><!-- 
                            <p class="pf-sec-head pf-sec-pubs">
                                Publications with Proctor
                            </p>
                                                 
                            <ul class="pf-list pf-pubs">
                                <li>
                                    <a href="URL">TITLE</a>
                                </li>
                            </ul>
                             -->
                        </div>
                    </div>
                    <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 1980–81 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
                </div>
            </div>
            <div class="pf-decade" id="d1970">
                <div class="pf-dec-head">
                    <h2>
                        1970s
                    </h2>
                    <p>
                        <span class="pf-dec-count">34 fellows</span>
                    </p>
                </div>
                <p class="pf-year-head">
                    1979
                </p>
                <div class="pf-fellows-grid">
                    <!-- ==== ALI MOURAD  |  1979 ==== -->
                    <div class="pf-fellow-card">
                        <div class="pf-fellow-photo is-empty">
                            no photo<br>
                            on file
                        </div>
                        <div class="pf-body">
                            <p class="pf-span-top">
                                <span class="pf-year-lbl">Fellowship year</span>1979
                            </p>
                            <p class="pf-name">
                                Ali Mourad, MD
                            </p>
                            <!-- 
                            <p class="pf-memoriam">
                                In memoriam (YEAR)
                            </p>
                             -->
                            <p class="pf-summary">
                                &nbsp;
                            </p>
                        </div>
                        <p>
                            <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Ali Mourad, MD">▾</button>
                        </p>
                        <div class="pf-more">
                            <p class="pf-country">
                                <strong>Country of origin</strong>Europe
                            </p>
                            <!-- 
                            <p class="pf-sec-head pf-sec-edu">
                                Education and training
                            </p>
                                                 
                            <ul class="pf-list pf-edu">
                                <li>
                                    ADD TRAINING HERE
                                </li>
                            </ul>
                             --><!-- 
                            <p class="pf-sec-head pf-sec-roles">
                                Selected roles
                            </p>
                                                 
                            <ul class="pf-list pf-roles">
                                <li>
                                    ADD ROLE HERE
                                </li>
                            </ul>
                             --><!-- 
                            <p class="pf-sec-head pf-sec-pubs">
                                Publications with Proctor
                            </p>
                                                 
                            <ul class="pf-list pf-pubs">
                                <li>
                                    <a href="URL">TITLE</a>
                                </li>
                            </ul>
                             -->
                        </div>
                    </div>
                    <!-- ==== FETHY EL-SAHN  |  1979 ==== -->
                    <div class="pf-fellow-card">
                        <div class="pf-fellow-photo is-empty">
                            no photo<br>
                            on file
                        </div>
                        <div class="pf-body">
                            <p class="pf-span-top">
                                <span class="pf-year-lbl">Fellowship year</span>1979
                            </p>
                            <p class="pf-name">
                                Fethy El-Sahn, MD
                            </p>
                            <!-- 
                            <p class="pf-memoriam">
                                In memoriam (YEAR)
                            </p>
                             -->
                            <p class="pf-summary">
                                &nbsp;
                            </p>
                        </div>
                        <div class="pf-toggle-spacer">
                            &nbsp;
                        </div>
                        <div class="pf-more">
                            <p class="pf-country">
                                &nbsp;
                            </p>
                            <!-- 
                            <p class="pf-sec-head pf-sec-edu">
                                Education and training
                            </p>
                                                 
                            <ul class="pf-list pf-edu">
                                <li>
                                    ADD TRAINING HERE
                                </li>
                            </ul>
                             --><!-- 
                            <p class="pf-sec-head pf-sec-roles">
                                Selected roles
                            </p>
                                                 
                            <ul class="pf-list pf-roles">
                                <li>
                                    ADD ROLE HERE
                                </li>
                            </ul>
                             --><!-- 
                            <p class="pf-sec-head pf-sec-pubs">
                                Publications with Proctor
                            </p>
                                                 
                            <ul class="pf-list pf-pubs">
                                <li>
                                    <a href="URL">TITLE</a>
                                </li>
                            </ul>
                             -->
                        </div>
                    </div>
                    <!-- ==== FOOK LIN LEONG-SIT  |  1979 ==== -->
                    <div class="pf-fellow-card">
                        <div class="pf-fellow-photo is-empty">
                            no photo<br>
                            on file
                        </div>
                        <div class="pf-body">
                            <p class="pf-span-top">
                                <span class="pf-year-lbl">Fellowship year</span>1979
                            </p>
                            <p class="pf-name">
                                Fook Lin Leong-Sit, MD
                            </p>
                            <!-- 
                            <p class="pf-memoriam">
                                In memoriam (YEAR)
                            </p>
                             -->
                            <p class="pf-summary">
                                &nbsp;
                            </p>
                        </div>
                        <div class="pf-toggle-spacer">
                            &nbsp;
                        </div>
                        <div class="pf-more">
                            <p class="pf-country">
                                &nbsp;
                            </p>
                            <!-- 
                            <p class="pf-sec-head pf-sec-edu">
                                Education and training
                            </p>
                                                 
                            <ul class="pf-list pf-edu">
                                <li>
                                    ADD TRAINING HERE
                                </li>
                            </ul>
                             --><!-- 
                            <p class="pf-sec-head pf-sec-roles">
                                Selected roles
                            </p>
                                                 
                            <ul class="pf-list pf-roles">
                                <li>
                                    ADD ROLE HERE
                                </li>
                            </ul>
                             --><!-- 
                            <p class="pf-sec-head pf-sec-pubs">
                                Publications with Proctor
                            </p>
                                                 
                            <ul class="pf-list pf-pubs">
                                <li>
                                    <a href="URL">TITLE</a>
                                </li>
                            </ul>
                             -->
                        </div>
                    </div>
                    <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 1979 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
                </div>
                <p class="pf-year-head">
                    1979–80
                </p>
                <div class="pf-fellows-grid">
                    <!-- ==== SCOTT L. FEILER  |  1979-80 ==== -->
                    <div class="pf-fellow-card">
                        <div class="pf-fellow-photo">
                            <img src="https://nathes690.github.io/proctor-fellows/img/feiler-lewis-scott.jpg" alt="Scott L. Feiler, MD">
                        </div>
                        <div class="pf-body">
                            <p class="pf-span-top">
                                <span class="pf-year-lbl">Fellowship year</span>1979–80
                            </p>
                            <p class="pf-name">
                                <a class="pf-name-link" href="https://www.doximity.com/pub/lewis-feiler-md" target="_blank" rel="noopener">Scott L. Feiler, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                            </p>
                            <!-- 
                            <p class="pf-memoriam">
                                In memoriam (YEAR)
                            </p>
                             -->
                            <p class="pf-summary">
                                &nbsp;
                            </p>
                        </div>
                        <div class="pf-toggle-spacer">
                            &nbsp;
                        </div>
                        <div class="pf-more">
                            <p class="pf-country">
                                &nbsp;
                            </p>
                            <!-- 
                            <p class="pf-sec-head pf-sec-edu">
                                Education and training
                            </p>
                                                 
                            <ul class="pf-list pf-edu">
                                <li>
                                    ADD TRAINING HERE
                                </li>
                            </ul>
                             --><!-- 
                            <p class="pf-sec-head pf-sec-roles">
                                Selected roles
                            </p>
                                                 
                            <ul class="pf-list pf-roles">
                                <li>
                                    ADD ROLE HERE
                                </li>
                            </ul>
                             --><!-- 
                            <p class="pf-sec-head pf-sec-pubs">
                                Publications with Proctor
                            </p>
                                                 
                            <ul class="pf-list pf-pubs">
                                <li>
                                    <a href="URL">TITLE</a>
                                </li>
                            </ul>
                             -->
                        </div>
                    </div>
                    <!-- ==== WILLIAM CULBERTSON  |  1979-80 ==== -->
                    <div class="pf-fellow-card">
                        <div class="pf-fellow-photo">
                            <img src="https://nathes690.github.io/proctor-fellows/img/culbertson-william.jpg" alt="William Culbertson, MD">
                        </div>
                        <div class="pf-body">
                            <p class="pf-span-top">
                                <span class="pf-year-lbl">Fellowship year</span>1979–80
                            </p>
                            <p class="pf-name">
                                <a class="pf-name-link" href="https://bascompalmer-doctors.umiamihealth.org/provider/william-w-culbertson-iv/524962" target="_blank" rel="noopener">William Culbertson, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                            </p>
                            <!-- 
                            <p class="pf-memoriam">
                                In memoriam (YEAR)
                            </p>
                             -->
                            <p class="pf-summary">
                                &nbsp;
                            </p>
                        </div>
                        <div class="pf-toggle-spacer">
                            &nbsp;
                        </div>
                        <div class="pf-more">
                            <p class="pf-country">
                                &nbsp;
                            </p>
                            <!-- 
                            <p class="pf-sec-head pf-sec-edu">
                                Education and training
                            </p>
                                                 
                            <ul class="pf-list pf-edu">
                                <li>
                                    ADD TRAINING HERE
                                </li>
                            </ul>
                             --><!-- 
                            <p class="pf-sec-head pf-sec-roles">
                                Selected roles
                            </p>
                                                 
                            <ul class="pf-list pf-roles">
                                <li>
                                    ADD ROLE HERE
                                </li>
                            </ul>
                             --><!-- 
                            <p class="pf-sec-head pf-sec-pubs">
                                Publications with Proctor
                            </p>
                                                 
                            <ul class="pf-list pf-pubs">
                                <li>
                                    <a href="URL">TITLE</a>
                                </li>
                            </ul>
                             -->
                        </div>
                    </div>
                    <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 1979–80 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
                </div>
                <p class="pf-year-head">
                    1978–79
                </p>
                <div class="pf-fellows-grid">
                    <!-- ==== DEAN C. BRICK  |  1978-79 ==== -->
                    <div class="pf-fellow-card">
                        <div class="pf-fellow-photo">
                            <img src="https://nathes690.github.io/proctor-fellows/img/brick-dean.webp" alt="Dean C. Brick, MD">
                        </div>
                        <div class="pf-body">
                            <p class="pf-span-top">
                                <span class="pf-year-lbl">Fellowship year</span>1978–79
                            </p>
                            <p class="pf-name">
                                <a class="pf-name-link" href="https://www.corneatucson.com/dean-c-brick-md" target="_blank" rel="noopener">Dean C. Brick, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                            </p>
                            <!-- 
                            <p class="pf-memoriam">
                                In memoriam (YEAR)
                            </p>
                             -->
                            <p class="pf-summary">
                                &nbsp;
                            </p>
                        </div>
                        <p>
                            <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Dean C. Brick, MD">▾</button>
                        </p>
                        <div class="pf-more">
                            <p class="pf-country">
                                &nbsp;
                            </p>
                            <!-- 
                            <p class="pf-sec-head pf-sec-edu">
                                Education and training
                            </p>
                                                 
                            <ul class="pf-list pf-edu">
                                <li>
                                    ADD TRAINING HERE
                                </li>
                            </ul>
                             --><!-- 
                            <p class="pf-sec-head pf-sec-roles">
                                Selected roles
                            </p>
                                                 
                            <ul class="pf-list pf-roles">
                                <li>
                                    ADD ROLE HERE
                                </li>
                            </ul>
                             -->
                            <p class="pf-sec-head pf-sec-pubs">
                                Publications with Proctor
                            </p>
                            <ul class="pf-list pf-pubs">
                                <li data-list-item-id="e666147b3c724fafb9554e6ba57922182">
                                    <a href="https://iovs.arvojournals.org/article.aspx?articleid=2159075" target="_blank" rel="noopener">Ocular lesions associated with dissemination of type 2 herpes simplex virus from skin infection in newborn rabbits</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- ==== ULLA (CHRISTINE) C. WEST  |  1978-79 ==== -->
                    <div class="pf-fellow-card">
                        <div class="pf-fellow-photo is-empty">
                            no photo<br>
                            on file
                        </div>
                        <div class="pf-body">
                            <p class="pf-span-top">
                                <span class="pf-year-lbl">Fellowship year</span>1978–79
                            </p>
                            <p class="pf-name">
                                <a class="pf-name-link" href="https://omb.oregon.gov/Clients/ORMB/Public/VerificationMalpractice.aspx?EntityID=1455998" target="_blank" rel="noopener">Ulla (Christine) C. West, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                            </p>
                            <!-- 
                            <p class="pf-memoriam">
                                In memoriam (YEAR)
                            </p>
                             -->
                            <p class="pf-summary">
                                &nbsp;
                            </p>
                        </div>
                        <div class="pf-toggle-spacer">
                            &nbsp;
                        </div>
                        <div class="pf-more">
                            <p class="pf-country">
                                &nbsp;
                            </p>
                            <!-- 
                            <p class="pf-sec-head pf-sec-edu">
                                Education and training
                            </p>
                                                 
                            <ul class="pf-list pf-edu">
                                <li>
                                    ADD TRAINING HERE
                                </li>
                            </ul>
                             --><!-- 
                            <p class="pf-sec-head pf-sec-roles">
                                Selected roles
                            </p>
                                                 
                            <ul class="pf-list pf-roles">
                                <li>
                                    ADD ROLE HERE
                                </li>
                            </ul>
                             --><!-- 
                            <p class="pf-sec-head pf-sec-pubs">
                                Publications with Proctor
                            </p>
                                                 
                            <ul class="pf-list pf-pubs">
                                <li>
                                    <a href="URL">TITLE</a>
                                </li>
                            </ul>
                             -->
                        </div>
                    </div>
                    <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 1978–79 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
                </div>
                <p class="pf-year-head">
                    1978
                </p>
                <div class="pf-fellows-grid">
                    <!-- ==== DAVID H. FISCHER  |  1978 ==== -->
                    <div class="pf-fellow-card">
                        <div class="pf-fellow-photo">
                            <img src="https://nathes690.github.io/proctor-fellows/img/fischer-david.webp" alt="David H. Fischer, MD">
                        </div>
                        <div class="pf-body">
                            <p class="pf-span-top">
                                <span class="pf-year-lbl">Fellowship year</span>1978
                            </p>
                            <p class="pf-name">
                                <a class="pf-name-link" href="https://midatlanticretina.com/doctor/david-h-fischer-m-d/" target="_blank" rel="noopener">David H. Fischer, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                            </p>
                            <!-- 
                            <p class="pf-memoriam">
                                In memoriam (YEAR)
                            </p>
                             -->
                            <p class="pf-summary">
                                &nbsp;
                            </p>
                        </div>
                        <div class="pf-toggle-spacer">
                            &nbsp;
                        </div>
                        <div class="pf-more">
                            <p class="pf-country">
                                &nbsp;
                            </p>
                            <!-- 
                            <p class="pf-sec-head pf-sec-edu">
                                Education and training
                            </p>
                                                 
                            <ul class="pf-list pf-edu">
                                <li>
                                    ADD TRAINING HERE
                                </li>
                            </ul>
                             --><!-- 
                            <p class="pf-sec-head pf-sec-roles">
                                Selected roles
                            </p>
                                                 
                            <ul class="pf-list pf-roles">
                                <li>
                                    ADD ROLE HERE
                                </li>
                            </ul>
                             --><!-- 
                            <p class="pf-sec-head pf-sec-pubs">
                                Publications with Proctor
                            </p>
                                                 
                            <ul class="pf-list pf-pubs">
                                <li>
                                    <a href="URL">TITLE</a>
                                </li>
                            </ul>
                             -->
                        </div>
                    </div>
                    <!-- ==== JOSEPH B. MICHELSON  |  1978 ==== -->
                    <div class="pf-fellow-card">
                        <div class="pf-fellow-photo">
                            <img src="https://nathes690.github.io/proctor-fellows/img/michelson-joseph.webp" alt="Joseph B. Michelson, MD">
                        </div>
                        <div class="pf-body">
                            <p class="pf-span-top">
                                <span class="pf-year-lbl">Fellowship year</span>1978
                            </p>
                            <p class="pf-name">
                                Joseph B. Michelson, MD
                            </p>
                            <!-- 
                            <p class="pf-memoriam">
                                In memoriam (YEAR)
                            </p>
                             -->
                            <p class="pf-summary">
                                Scripps Clinic and Research Foundation, La Jolla, CA
                            </p>
                        </div>
                        <p>
                            <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Joseph B. Michelson, MD">▾</button>
                        </p>
                        <div class="pf-more">
                            <p class="pf-country">
                                &nbsp;
                            </p>
                            <!-- 
                            <p class="pf-sec-head pf-sec-edu">
                                Education and training
                            </p>
                                                 
                            <ul class="pf-list pf-edu">
                                <li>
                                    ADD TRAINING HERE
                                </li>
                            </ul>
                             --><!-- 
                            <p class="pf-sec-head pf-sec-roles">
                                Selected roles
                            </p>
                                                 
                            <ul class="pf-list pf-roles">
                                <li>
                                    ADD ROLE HERE
                                </li>
                            </ul>
                             -->
                            <p class="pf-sec-head pf-sec-pubs">
                                Publications with Proctor
                            </p>
                            <ul class="pf-list pf-pubs">
                                <li data-list-item-id="e75d29f458c6379b3ae8d311e99a0fbeb">
                                    <a href="https://jamanetwork.com/…/633062" target="_blank" rel="noopener">Experimental Endophthalmitis Treated With an Implantable Osmotic Minipump</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 1978 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
                </div>
                <p class="pf-year-head">
                    1977–78
                </p>
                <div class="pf-fellows-grid">
                    <!-- ==== ROBERT J. MASI  |  1977-78 ==== -->
                    <div class="pf-fellow-card">
                        <div class="pf-fellow-photo is-empty">
                            no photo<br>
                            on file
                        </div>
                        <div class="pf-body">
                            <p class="pf-span-top">
                                <span class="pf-year-lbl">Fellowship year</span>1977–78
                            </p>
                            <p class="pf-name">
                                <a class="pf-name-link" href="https://myvision.org/directory/robert-j-masi-md-facs-a8r66qoch8/" target="_blank" rel="noopener">Robert J. Masi, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                            </p>
                            <!-- 
                            <p class="pf-memoriam">
                                In memoriam (YEAR)
                            </p>
                             -->
                            <p class="pf-summary">
                                &nbsp;
                            </p>
                        </div>
                        <p>
                            <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Robert J. Masi, MD">▾</button>
                        </p>
                        <div class="pf-more">
                            <p class="pf-country">
                                &nbsp;
                            </p>
                            <!-- 
                            <p class="pf-sec-head pf-sec-edu">
                                Education and training
                            </p>
                                                 
                            <ul class="pf-list pf-edu">
                                <li>
                                    ADD TRAINING HERE
                                </li>
                            </ul>
                             --><!-- 
                            <p class="pf-sec-head pf-sec-roles">
                                Selected roles
                            </p>
                                                 
                            <ul class="pf-list pf-roles">
                                <li>
                                    ADD ROLE HERE
                                </li>
                            </ul>
                             -->
                            <p class="pf-sec-head pf-sec-pubs">
                                Publications with Proctor
                            </p>
                            <ul class="pf-list pf-pubs">
                                <li data-list-item-id="e285fb1f97898f4ebf2a7a687b61243db">
                                    <a href="https://jamanetwork.com/…/633450" target="_blank" rel="noopener">Ocular Microbial Flora in Immunodeficient Patients</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 1977–78 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
                </div>
                <p class="pf-year-head">
                    1976–77
                </p>
                <div class="pf-fellows-grid">
                    <!-- ==== GEORGE MINTSIOULIS  |  1976-77 ==== -->
                    <div class="pf-fellow-card">
                        <div class="pf-fellow-photo">
                            <img src="https://nathes690.github.io/proctor-fellows/img/mintsioulis-george.webp" alt="George Mintsioulis, MD">
                        </div>
                        <div class="pf-body">
                            <p class="pf-span-top">
                                <span class="pf-year-lbl">Fellowship year</span>1976–77
                            </p>
                            <p class="pf-name">
                                <a class="pf-name-link" href="https://www.researchgate.net/profile/George-Mintsioulis" target="_blank" rel="noopener">George Mintsioulis, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                            </p>
                            <!-- 
                            <p class="pf-memoriam">
                                In memoriam (YEAR)
                            </p>
                             -->
                            <p class="pf-summary">
                                &nbsp;
                            </p>
                        </div>
                        <div class="pf-toggle-spacer">
                            &nbsp;
                        </div>
                        <div class="pf-more">
                            <p class="pf-country">
                                &nbsp;
                            </p>
                            <!-- 
                            <p class="pf-sec-head pf-sec-edu">
                                Education and training
                            </p>
                                                 
                            <ul class="pf-list pf-edu">
                                <li>
                                    ADD TRAINING HERE
                                </li>
                            </ul>
                             --><!-- 
                            <p class="pf-sec-head pf-sec-roles">
                                Selected roles
                            </p>
                                                 
                            <ul class="pf-list pf-roles">
                                <li>
                                    ADD ROLE HERE
                                </li>
                            </ul>
                             --><!-- 
                            <p class="pf-sec-head pf-sec-pubs">
                                Publications with Proctor
                            </p>
                                                 
                            <ul class="pf-list pf-pubs">
                                <li>
                                    <a href="URL">TITLE</a>
                                </li>
                            </ul>
                             -->
                        </div>
                    </div>
                    <!-- ==== IRA G. WONG  |  1976-77 ==== -->
                    <div class="pf-fellow-card">
                        <div class="pf-fellow-photo">
                            <img src="https://nathes690.github.io/proctor-fellows/img/wong-ira.webp" alt="Ira G. Wong, MD">
                        </div>
                        <div class="pf-body">
                            <p class="pf-span-top">
                                <span class="pf-year-lbl">Fellowship year</span>1976–77
                            </p>
                            <p class="pf-name">
                                Ira G. Wong, MD
                            </p>
                            <!-- 
                            <p class="pf-memoriam">
                                In memoriam (YEAR)
                            </p>
                             -->
                            <p class="pf-summary">
                                Kaiser Permanente Medical Center
                            </p>
                        </div>
                        <p>
                            <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Ira G. Wong, MD">▾</button>
                        </p>
                        <div class="pf-more">
                            <p class="pf-country">
                                &nbsp;
                            </p>
                            <!-- 
                            <p class="pf-sec-head pf-sec-edu">
                                Education and training
                            </p>
                                                 
                            <ul class="pf-list pf-edu">
                                <li>
                                    ADD TRAINING HERE
                                </li>
                            </ul>
                             --><!-- 
                            <p class="pf-sec-head pf-sec-roles">
                                Selected roles
                            </p>
                                                 
                            <ul class="pf-list pf-roles">
                                <li>
                                    ADD ROLE HERE
                                </li>
                            </ul>
                             -->
                            <p class="pf-sec-head pf-sec-pubs">
                                Publications with Proctor
                            </p>
                            <ul class="pf-list pf-pubs">
                                <li data-list-item-id="ed73354bee801691a1def6e4353eda71b">
                                    <a href="https://www.ajo.com/article/S0002-9394(99)80246-3/fulltext" target="_blank" rel="noopener">Reduction of Cyclosporine Dosage With Ketoconazole in a Patient With Birdshot Retinochoroidopathy</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- ==== RICHARD DENNIS  |  1976-77 ==== -->
                    <div class="pf-fellow-card">
                        <div class="pf-fellow-photo">
                            <img src="https://nathes690.github.io/proctor-fellows/img/dennis-richard.webp" alt="Richard Dennis, MD">
                        </div>
                        <div class="pf-body">
                            <p class="pf-span-top">
                                <span class="pf-year-lbl">Fellowship year</span>1976–77
                            </p>
                            <p class="pf-name">
                                <a class="pf-name-link" href="https://doctor.webmd.com/doctor/richard-dennis-8c5f7698-d0e1-4975-bcdb-7bd83c833e36-overview" target="_blank" rel="noopener">Richard Dennis, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                            </p>
                            <!-- 
                            <p class="pf-memoriam">
                                In memoriam (YEAR)
                            </p>
                             -->
                            <p class="pf-summary">
                                &nbsp;
                            </p>
                        </div>
                        <div class="pf-toggle-spacer">
                            &nbsp;
                        </div>
                        <div class="pf-more">
                            <p class="pf-country">
                                &nbsp;
                            </p>
                            <!-- 
                            <p class="pf-sec-head pf-sec-edu">
                                Education and training
                            </p>
                                                 
                            <ul class="pf-list pf-edu">
                                <li>
                                    ADD TRAINING HERE
                                </li>
                            </ul>
                             --><!-- 
                            <p class="pf-sec-head pf-sec-roles">
                                Selected roles
                            </p>
                                                 
                            <ul class="pf-list pf-roles">
                                <li>
                                    ADD ROLE HERE
                                </li>
                            </ul>
                             --><!-- 
                            <p class="pf-sec-head pf-sec-pubs">
                                Publications with Proctor
                            </p>
                                                 
                            <ul class="pf-list pf-pubs">
                                <li>
                                    <a href="URL">TITLE</a>
                                </li>
                            </ul>
                             -->
                        </div>
                    </div>
                    <!-- ==== ROBERT S. WEINBERG  |  1976-77 ==== -->
                    <div class="pf-fellow-card">
                        <div class="pf-fellow-photo">
                            <img src="https://nathes690.github.io/proctor-fellows/img/weinberg-robert.webp" alt="Robert S. Weinberg, MD">
                        </div>
                        <div class="pf-body">
                            <p class="pf-span-top">
                                <span class="pf-year-lbl">Fellowship year</span>1976–77
                            </p>
                            <p class="pf-name">
                                <a class="pf-name-link" href="https://www.jewishtimes.com/robert-stephen-weinberg/" target="_blank" rel="noopener">Robert S. Weinberg, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                            </p>
                            <p class="pf-memoriam">
                                In memoriam (2024)
                            </p>
                            <p class="pf-summary">
                                &nbsp;
                            </p>
                        </div>
                        <div class="pf-toggle-spacer">
                            &nbsp;
                        </div>
                        <div class="pf-more">
                            <p class="pf-country">
                                &nbsp;
                            </p>
                            <!-- 
                            <p class="pf-sec-head pf-sec-edu">
                                Education and training
                            </p>
                                                 
                            <ul class="pf-list pf-edu">
                                <li>
                                    ADD TRAINING HERE
                                </li>
                            </ul>
                             --><!-- 
                            <p class="pf-sec-head pf-sec-roles">
                                Selected roles
                            </p>
                                                 
                            <ul class="pf-list pf-roles">
                                <li>
                                    ADD ROLE HERE
                                </li>
                            </ul>
                             --><!-- 
                            <p class="pf-sec-head pf-sec-pubs">
                                Publications with Proctor
                            </p>
                                                 
                            <ul class="pf-list pf-pubs">
                                <li>
                                    <a href="URL">TITLE</a>
                                </li>
                            </ul>
                             -->
                        </div>
                    </div>
                    <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 1976–77 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
                </div>
                <p class="pf-year-head">
                    1975–77
                </p>
                <div class="pf-fellows-grid">
                    <!-- ==== JACINTO U. DY-LIACCO  |  1975-77 ==== -->
                    <div class="pf-fellow-card">
                        <div class="pf-fellow-photo">
                            <img src="https://nathes690.github.io/proctor-fellows/img/dy-liacco-jacinto.webp" alt="Jacinto U. Dy-Liacco, MD">
                        </div>
                        <div class="pf-body">
                            <p class="pf-span-top">
                                <span class="pf-year-lbl">Fellowship year</span>1975–77
                            </p>
                            <p class="pf-name">
                                <a class="pf-name-link" href="https://cardinalsantos.com.ph/our-doctors/dy-liacco-jacinto-u/" target="_blank" rel="noopener">Jacinto U. Dy-Liacco, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                            </p>
                            <!-- 
                            <p class="pf-memoriam">
                                In memoriam (YEAR)
                            </p>
                             -->
                            <p class="pf-summary">
                                &nbsp;
                            </p>
                        </div>
                        <p>
                            <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Jacinto U. Dy-Liacco, MD">▾</button>
                        </p>
                        <div class="pf-more">
                            <p class="pf-country">
                                <strong>Country of origin</strong>Philippines
                            </p>
                            <!-- 
                            <p class="pf-sec-head pf-sec-edu">
                                Education and training
                            </p>
                                                 
                            <ul class="pf-list pf-edu">
                                <li>
                                    ADD TRAINING HERE
                                </li>
                            </ul>
                             --><!-- 
                            <p class="pf-sec-head pf-sec-roles">
                                Selected roles
                            </p>
                                                 
                            <ul class="pf-list pf-roles">
                                <li>
                                    ADD ROLE HERE
                                </li>
                            </ul>
                             --><!-- 
                            <p class="pf-sec-head pf-sec-pubs">
                                Publications with Proctor
                            </p>
                                                 
                            <ul class="pf-list pf-pubs">
                                <li>
                                    <a href="URL">TITLE</a>
                                </li>
                            </ul>
                             -->
                        </div>
                    </div>
                    <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 1975–77 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
                </div>
                <p class="pf-year-head">
                    1975–78
                </p>
                <div class="pf-fellows-grid">
                    <!-- ==== KATHLEEN OUCHI YAMAGUCHI  |  1975-78 ==== -->
                    <div class="pf-fellow-card">
                        <div class="pf-fellow-photo">
                            <img src="https://nathes690.github.io/proctor-fellows/img/yamaguchi-kathleen.webp" alt="Kathleen Ouchi Yamaguchi, MD">
                        </div>
                        <div class="pf-body">
                            <p class="pf-span-top">
                                <span class="pf-year-lbl">Fellowship year</span>1975–78
                            </p>
                            <p class="pf-name">
                                <a class="pf-name-link" href="https://www.vitals.com/doctors/kathleen-yamaguchi-6d0ozh" target="_blank" rel="noopener">Kathleen Ouchi Yamaguchi, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                            </p>
                            <!-- 
                            <p class="pf-memoriam">
                                In memoriam (YEAR)
                            </p>
                             -->
                            <p class="pf-summary">
                                &nbsp;
                            </p>
                        </div>
                        <div class="pf-toggle-spacer">
                            &nbsp;
                        </div>
                        <div class="pf-more">
                            <p class="pf-country">
                                &nbsp;
                            </p>
                            <!-- 
                            <p class="pf-sec-head pf-sec-edu">
                                Education and training
                            </p>
                                                 
                            <ul class="pf-list pf-edu">
                                <li>
                                    ADD TRAINING HERE
                                </li>
                            </ul>
                             --><!-- 
                            <p class="pf-sec-head pf-sec-roles">
                                Selected roles
                            </p>
                                                 
                            <ul class="pf-list pf-roles">
                                <li>
                                    ADD ROLE HERE
                                </li>
                            </ul>
                             --><!-- 
                            <p class="pf-sec-head pf-sec-pubs">
                                Publications with Proctor
                            </p>
                                                 
                            <ul class="pf-list pf-pubs">
                                <li>
                                    <a href="URL">TITLE</a>
                                </li>
                            </ul>
                             -->
                        </div>
                    </div>
                    <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 1975–78 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
                </div>
                <p class="pf-year-head">
                    1974–75
                </p>
                <div class="pf-fellows-grid">
                    <!-- ==== HELEN JANE BLACKMAN  |  1974-75 ==== -->
                    <div class="pf-fellow-card">
                        <div class="pf-fellow-photo is-empty">
                            no photo<br>
                            on file
                        </div>
                        <div class="pf-body">
                            <p class="pf-span-top">
                                <span class="pf-year-lbl">Fellowship year</span>1974–75
                            </p>
                            <p class="pf-name">
                                <a class="pf-name-link" href="https://www.vitals.com/doctors/helen-blackman-zjkk33" target="_blank" rel="noopener">Helen Jane Blackman, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                            </p>
                            <!-- 
                            <p class="pf-memoriam">
                                In memoriam (YEAR)
                            </p>
                             -->
                            <p class="pf-summary">
                                &nbsp;
                            </p>
                        </div>
                        <div class="pf-toggle-spacer">
                            &nbsp;
                        </div>
                        <div class="pf-more">
                            <p class="pf-country">
                                &nbsp;
                            </p>
                            <!-- 
                            <p class="pf-sec-head pf-sec-edu">
                                Education and training
                            </p>
                                                 
                            <ul class="pf-list pf-edu">
                                <li>
                                    ADD TRAINING HERE
                                </li>
                            </ul>
                             --><!-- 
                            <p class="pf-sec-head pf-sec-roles">
                                Selected roles
                            </p>
                                                 
                            <ul class="pf-list pf-roles">
                                <li>
                                    ADD ROLE HERE
                                </li>
                            </ul>
                             --><!-- 
                            <p class="pf-sec-head pf-sec-pubs">
                                Publications with Proctor
                            </p>
                                                 
                            <ul class="pf-list pf-pubs">
                                <li>
                                    <a href="URL">TITLE</a>
                                </li>
                            </ul>
                             -->
                        </div>
                    </div>
                    <!-- ==== HONG BOK KIM  |  1974-75 ==== -->
                    <div class="pf-fellow-card">
                        <div class="pf-fellow-photo">
                            <img src="https://nathes690.github.io/proctor-fellows/img/kim-hong.webp" alt="Hong Bok Kim, MD">
                        </div>
                        <div class="pf-body">
                            <p class="pf-span-top">
                                <span class="pf-year-lbl">Fellowship year</span>1974–75
                            </p>
                            <p class="pf-name">
                                <a class="pf-name-link" href="https://www.doctorsnews.co.kr/news/articleView.html?idxno=3745" target="_blank" rel="noopener">Hong Bok Kim, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                            </p>
                            <!-- 
                            <p class="pf-memoriam">
                                In memoriam (YEAR)
                            </p>
                             -->
                            <p class="pf-summary">
                                &nbsp;
                            </p>
                        </div>
                        <p>
                            <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Hong Bok Kim, MD">▾</button>
                        </p>
                        <div class="pf-more">
                            <p class="pf-country">
                                <strong>Country of origin</strong>Korea
                            </p>
                            <!-- 
                            <p class="pf-sec-head pf-sec-edu">
                                Education and training
                            </p>
                                                 
                            <ul class="pf-list pf-edu">
                                <li>
                                    ADD TRAINING HERE
                                </li>
                            </ul>
                             --><!-- 
                            <p class="pf-sec-head pf-sec-roles">
                                Selected roles
                            </p>
                                                 
                            <ul class="pf-list pf-roles">
                                <li>
                                    ADD ROLE HERE
                                </li>
                            </ul>
                             --><!-- 
                            <p class="pf-sec-head pf-sec-pubs">
                                Publications with Proctor
                            </p>
                                                 
                            <ul class="pf-list pf-pubs">
                                <li>
                                    <a href="URL">TITLE</a>
                                </li>
                            </ul>
                             -->
                        </div>
                    </div>
                    <!-- ==== RICHARD J. WEINBERG  |  1974-75 ==== -->
                    <div class="pf-fellow-card">
                        <div class="pf-fellow-photo is-empty">
                            no photo<br>
                            on file
                        </div>
                        <div class="pf-body">
                            <p class="pf-span-top">
                                <span class="pf-year-lbl">Fellowship year</span>1974–75
                            </p>
                            <p class="pf-name">
                                Richard J. Weinberg, MD
                            </p>
                            <!-- 
                            <p class="pf-memoriam">
                                In memoriam (YEAR)
                            </p>
                             -->
                            <p class="pf-summary">
                                &nbsp;
                            </p>
                        </div>
                        <div class="pf-toggle-spacer">
                            &nbsp;
                        </div>
                        <div class="pf-more">
                            <p class="pf-country">
                                &nbsp;
                            </p>
                            <!-- 
                            <p class="pf-sec-head pf-sec-edu">
                                Education and training
                            </p>
                                                 
                            <ul class="pf-list pf-edu">
                                <li>
                                    ADD TRAINING HERE
                                </li>
                            </ul>
                             --><!-- 
                            <p class="pf-sec-head pf-sec-roles">
                                Selected roles
                            </p>
                                                 
                            <ul class="pf-list pf-roles">
                                <li>
                                    ADD ROLE HERE
                                </li>
                            </ul>
                             --><!-- 
                            <p class="pf-sec-head pf-sec-pubs">
                                Publications with Proctor
                            </p>
                                                 
                            <ul class="pf-list pf-pubs">
                                <li>
                                    <a href="URL">TITLE</a>
                                </li>
                            </ul>
                             -->
                        </div>
                    </div>
                    <!-- ==== ROBERT G. MARTIN  |  1974-75 ==== -->
                    <div class="pf-fellow-card">
                        <div class="pf-fellow-photo">
                            <img src="https://nathes690.github.io/proctor-fellows/img/martin-robert.webp" alt="Robert G. Martin, MD">
                        </div>
                        <div class="pf-body">
                            <p class="pf-span-top">
                                <span class="pf-year-lbl">Fellowship year</span>1974–75
                            </p>
                            <p class="pf-name">
                                <a class="pf-name-link" href="https://www.carolinaeye.com/about-us/" target="_blank" rel="noopener">Robert G. Martin, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                            </p>
                            <!-- 
                            <p class="pf-memoriam">
                                In memoriam (YEAR)
                            </p>
                             -->
                            <p class="pf-summary">
                                &nbsp;
                            </p>
                        </div>
                        <p>
                            <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Robert G. Martin, MD">▾</button>
                        </p>
                        <div class="pf-more">
                            <p class="pf-country">
                                <strong>Country of origin</strong>USA
                            </p>
                            <!-- 
                            <p class="pf-sec-head pf-sec-edu">
                                Education and training
                            </p>
                                                 
                            <ul class="pf-list pf-edu">
                                <li>
                                    ADD TRAINING HERE
                                </li>
                            </ul>
                             --><!-- 
                            <p class="pf-sec-head pf-sec-roles">
                                Selected roles
                            </p>
                                                 
                            <ul class="pf-list pf-roles">
                                <li>
                                    ADD ROLE HERE
                                </li>
                            </ul>
                             --><!-- 
                            <p class="pf-sec-head pf-sec-pubs">
                                Publications with Proctor
                            </p>
                                                 
                            <ul class="pf-list pf-pubs">
                                <li>
                                    <a href="URL">TITLE</a>
                                </li>
                            </ul>
                             -->
                        </div>
                    </div>
                    <!-- ==== RUBENS BELFORT JR.  |  1974-75 ==== -->
                    <div class="pf-fellow-card">
                        <div class="pf-fellow-photo">
                            <img src="https://nathes690.github.io/proctor-fellows/img/belfort-mattos-rubens.webp" alt="Rubens Belfort Jr., MD">
                        </div>
                        <div class="pf-body">
                            <p class="pf-span-top">
                                <span class="pf-year-lbl">Fellowship year</span>1974–75
                            </p>
                            <p class="pf-name">
                                Rubens Belfort Jr., MD
                            </p>
                            <!-- 
                            <p class="pf-memoriam">
                                In memoriam (YEAR)
                            </p>
                             -->
                            <p class="pf-summary">
                                &nbsp;
                            </p>
                        </div>
                        <p>
                            <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Rubens Belfort Jr., MD">▾</button>
                        </p>
                        <div class="pf-more">
                            <p class="pf-country">
                                <strong>Country of origin</strong>Brazil
                            </p>
                            <!-- 
                            <p class="pf-sec-head pf-sec-edu">
                                Education and training
                            </p>
                                                 
                            <ul class="pf-list pf-edu">
                                <li>
                                    ADD TRAINING HERE
                                </li>
                            </ul>
                             --><!-- 
                            <p class="pf-sec-head pf-sec-roles">
                                Selected roles
                            </p>
                                                 
                            <ul class="pf-list pf-roles">
                                <li>
                                    ADD ROLE HERE
                                </li>
                            </ul>
                             --><!-- 
                            <p class="pf-sec-head pf-sec-pubs">
                                Publications with Proctor
                            </p>
                                                 
                            <ul class="pf-list pf-pubs">
                                <li>
                                    <a href="URL">TITLE</a>
                                </li>
                            </ul>
                             -->
                        </div>
                    </div>
                    <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 1974–75 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
                </div>
                <p class="pf-year-head">
                    1974–76
                </p>
                <div class="pf-fellows-grid">
                    <!-- ==== AHMAD AHMAD  |  1974-76 ==== -->
                    <div class="pf-fellow-card">
                        <div class="pf-fellow-photo is-empty">
                            no photo<br>
                            on file
                        </div>
                        <div class="pf-body">
                            <p class="pf-span-top">
                                <span class="pf-year-lbl">Fellowship year</span>1974–76
                            </p>
                            <p class="pf-name">
                                <a class="pf-name-link" href="https://www.uhhospitals.org/doctors/Ahmed-Ahmed-1003443680" target="_blank" rel="noopener">Ahmad Ahmad, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                            </p>
                            <!-- 
                            <p class="pf-memoriam">
                                In memoriam (YEAR)
                            </p>
                             -->
                            <p class="pf-summary">
                                &nbsp;
                            </p>
                        </div>
                        <div class="pf-toggle-spacer">
                            &nbsp;
                        </div>
                        <div class="pf-more">
                            <p class="pf-country">
                                &nbsp;
                            </p>
                            <!-- 
                            <p class="pf-sec-head pf-sec-edu">
                                Education and training
                            </p>
                                                 
                            <ul class="pf-list pf-edu">
                                <li>
                                    ADD TRAINING HERE
                                </li>
                            </ul>
                             --><!-- 
                            <p class="pf-sec-head pf-sec-roles">
                                Selected roles
                            </p>
                                                 
                            <ul class="pf-list pf-roles">
                                <li>
                                    ADD ROLE HERE
                                </li>
                            </ul>
                             --><!-- 
                            <p class="pf-sec-head pf-sec-pubs">
                                Publications with Proctor
                            </p>
                                                 
                            <ul class="pf-list pf-pubs">
                                <li>
                                    <a href="URL">TITLE</a>
                                </li>
                            </ul>
                             -->
                        </div>
                    </div>
                    <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 1974–76 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
                </div>
                <p class="pf-year-head">
                    1973–74
                </p>
                <div class="pf-fellows-grid">
                    <!-- ==== BRUCE W. JACKSON  |  1973-74 ==== -->
                    <div class="pf-fellow-card">
                        <div class="pf-fellow-photo">
                            <img src="https://nathes690.github.io/proctor-fellows/img/jackson-bruce.webp" alt="Bruce W. Jackson, MD">
                        </div>
                        <div class="pf-body">
                            <p class="pf-span-top">
                                <span class="pf-year-lbl">Fellowship year</span>1973–74
                            </p>
                            <p class="pf-name">
                                <a class="pf-name-link" href="https://www.epso.ca/about-epso/awards/lifetime-achievement/" target="_blank" rel="noopener">Bruce W. Jackson, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                            </p>
                            <!-- 
                            <p class="pf-memoriam">
                                In memoriam (YEAR)
                            </p>
                             -->
                            <p class="pf-summary">
                                &nbsp;
                            </p>
                        </div>
                        <p>
                            <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Bruce W. Jackson, MD">▾</button>
                        </p>
                        <div class="pf-more">
                            <p class="pf-country">
                                <strong>Country of origin</strong>Canada
                            </p>
                            <!-- 
                            <p class="pf-sec-head pf-sec-edu">
                                Education and training
                            </p>
                                                 
                            <ul class="pf-list pf-edu">
                                <li>
                                    ADD TRAINING HERE
                                </li>
                            </ul>
                             --><!-- 
                            <p class="pf-sec-head pf-sec-roles">
                                Selected roles
                            </p>
                                                 
                            <ul class="pf-list pf-roles">
                                <li>
                                    ADD ROLE HERE
                                </li>
                            </ul>
                             --><!-- 
                            <p class="pf-sec-head pf-sec-pubs">
                                Publications with Proctor
                            </p>
                                                 
                            <ul class="pf-list pf-pubs">
                                <li>
                                    <a href="URL">TITLE</a>
                                </li>
                            </ul>
                             -->
                        </div>
                    </div>
                    <!-- ==== DOUGLAS L. PERRY  |  1973-74 ==== -->
                    <div class="pf-fellow-card">
                        <div class="pf-fellow-photo">
                            <img src="https://nathes690.github.io/proctor-fellows/img/perry-douglas.webp" alt="Douglas L. Perry, MD">
                        </div>
                        <div class="pf-body">
                            <p class="pf-span-top">
                                <span class="pf-year-lbl">Fellowship year</span>1973–74
                            </p>
                            <p class="pf-name">
                                Douglas L. Perry, MD
                            </p>
                            <p class="pf-memoriam">
                                In memoriam (2000)
                            </p>
                            <p class="pf-summary">
                                &nbsp;
                            </p>
                        </div>
                        <div class="pf-toggle-spacer">
                            &nbsp;
                        </div>
                        <div class="pf-more">
                            <p class="pf-country">
                                &nbsp;
                            </p>
                            <!-- 
                            <p class="pf-sec-head pf-sec-edu">
                                Education and training
                            </p>
                                                 
                            <ul class="pf-list pf-edu">
                                <li>
                                    ADD TRAINING HERE
                                </li>
                            </ul>
                             --><!-- 
                            <p class="pf-sec-head pf-sec-roles">
                                Selected roles
                            </p>
                                                 
                            <ul class="pf-list pf-roles">
                                <li>
                                    ADD ROLE HERE
                                </li>
                            </ul>
                             --><!-- 
                            <p class="pf-sec-head pf-sec-pubs">
                                Publications with Proctor
                            </p>
                                                 
                            <ul class="pf-list pf-pubs">
                                <li>
                                    <a href="URL">TITLE</a>
                                </li>
                            </ul>
                             -->
                        </div>
                    </div>
                    <!-- ==== ROGER F. MEYER  |  1973-74 ==== -->
                    <div class="pf-fellow-card">
                        <div class="pf-fellow-photo">
                            <img src="https://nathes690.github.io/proctor-fellows/img/meyer-roger.webp" alt="Roger F. Meyer, MD">
                        </div>
                        <div class="pf-body">
                            <p class="pf-span-top">
                                <span class="pf-year-lbl">Fellowship year</span>1973–74
                            </p>
                            <p class="pf-name">
                                Roger F. Meyer, MD
                            </p>
                            <p class="pf-memoriam">
                                In memoriam (2024)
                            </p>
                            <p class="pf-summary">
                                Professor, University of Michigan (Kellogg Eye Center); founded UM Cornea Service &amp; cornea fellowship (1980); Medical Director, Michigan Eye Bank (Eversight); 4,000+ corneal transplants; 100+ publications; AOS (1986)
                            </p>
                        </div>
                        <p>
                            <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Roger F. Meyer, MD">▾</button>
                        </p>
                        <div class="pf-more">
                            <p class="pf-country">
                                <strong>Country of origin</strong>USA
                            </p>
                            <p class="pf-sec-head pf-sec-edu">
                                Education and training
                            </p>
                            <ul class="pf-list pf-edu">
                                <li data-list-item-id="e7dff7eb5d552c93513c85996e021fa33">
                                    University of Michigan (undergrad)
                                </li>
                                <li data-list-item-id="e1db567bf00d5eaf1481a20eb689b547f">
                                    Ohio State (MD)
                                </li>
                                <li data-list-item-id="ef6481bf579fee0173a80de8e1c597bdf">
                                    USAF flight surgeon
                                </li>
                                <li data-list-item-id="ece3b0c61edb56dc0dfb61d71e6f31cdc">
                                    Ophthalmology residency, Michigan (1968)
                                </li>
                                <li data-list-item-id="e22d2166ef33b3b3ed194c2e63d32becb">
                                    Heed Fellowship, Proctor Foundation UCSF (1974)
                                </li>
                                <li data-list-item-id="e955e7462e5cfae1870b5d82b37897d72">
                                    Corneal fellowship, University of Florida (1975)
                                </li>
                            </ul>
                            <!-- 
                            <p class="pf-sec-head pf-sec-roles">
                                Selected roles
                            </p>
                                                 
                            <ul class="pf-list pf-roles">
                                <li>
                                    ADD ROLE HERE
                                </li>
                            </ul>
                             --><!-- 
                            <p class="pf-sec-head pf-sec-pubs">
                                Publications with Proctor
                            </p>
                                                 
                            <ul class="pf-list pf-pubs">
                                <li>
                                    <a href="URL">TITLE</a>
                                </li>
                            </ul>
                             -->
                        </div>
                    </div>
                    <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 1973–74 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
                </div>
                <p class="pf-year-head">
                    1972–73
                </p>
                <div class="pf-fellows-grid">
                    <!-- ==== JEFFREY DAY LANIER  |  1972-73 ==== -->
                    <div class="pf-fellow-card">
                        <div class="pf-fellow-photo">
                            <img src="https://nathes690.github.io/proctor-fellows/img/lanier-jeffrey.webp" alt="Jeffrey Day Lanier, MD">
                        </div>
                        <div class="pf-body">
                            <p class="pf-span-top">
                                <span class="pf-year-lbl">Fellowship year</span>1972–73
                            </p>
                            <p class="pf-name">
                                Jeffrey Day Lanier, MD
                            </p>
                            <!-- 
                            <p class="pf-memoriam">
                                In memoriam (YEAR)
                            </p>
                             -->
                            <p class="pf-summary">
                                &nbsp;
                            </p>
                        </div>
                        <p>
                            <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Jeffrey Day Lanier, MD">▾</button>
                        </p>
                        <div class="pf-more">
                            <p class="pf-country">
                                <strong>Country of origin</strong>USA
                            </p>
                            <!-- 
                            <p class="pf-sec-head pf-sec-edu">
                                Education and training
                            </p>
                                                 
                            <ul class="pf-list pf-edu">
                                <li>
                                    ADD TRAINING HERE
                                </li>
                            </ul>
                             --><!-- 
                            <p class="pf-sec-head pf-sec-roles">
                                Selected roles
                            </p>
                                                 
                            <ul class="pf-list pf-roles">
                                <li>
                                    ADD ROLE HERE
                                </li>
                            </ul>
                             --><!-- 
                            <p class="pf-sec-head pf-sec-pubs">
                                Publications with Proctor
                            </p>
                                                 
                            <ul class="pf-list pf-pubs">
                                <li>
                                    <a href="URL">TITLE</a>
                                </li>
                            </ul>
                             -->
                        </div>
                    </div>
                    <!-- ==== JOHN P. WHITCHER  |  1972-73 ==== -->
                    <div class="pf-fellow-card">
                        <div class="pf-fellow-photo">
                            <img src="https://nathes690.github.io/proctor-fellows/img/whitcher-john-p.jpg" alt="John P. Whitcher, MD">
                        </div>
                        <div class="pf-body">
                            <p class="pf-span-top">
                                <span class="pf-year-lbl">Fellowship year</span>1972–73
                            </p>
                            <p class="pf-name">
                                John P. Whitcher, MD
                            </p>
                            <!-- 
                            <p class="pf-memoriam">
                                In memoriam (YEAR)
                            </p>
                             -->
                            <p class="pf-summary">
                                &nbsp;
                            </p>
                        </div>
                        <div class="pf-toggle-spacer">
                            &nbsp;
                        </div>
                        <div class="pf-more">
                            <p class="pf-country">
                                &nbsp;
                            </p>
                            <!-- 
                            <p class="pf-sec-head pf-sec-edu">
                                Education and training
                            </p>
                                                 
                            <ul class="pf-list pf-edu">
                                <li>
                                    ADD TRAINING HERE
                                </li>
                            </ul>
                             --><!-- 
                            <p class="pf-sec-head pf-sec-roles">
                                Selected roles
                            </p>
                                                 
                            <ul class="pf-list pf-roles">
                                <li>
                                    ADD ROLE HERE
                                </li>
                            </ul>
                             --><!-- 
                            <p class="pf-sec-head pf-sec-pubs">
                                Publications with Proctor
                            </p>
                                                 
                            <ul class="pf-list pf-pubs">
                                <li>
                                    <a href="URL">TITLE</a>
                                </li>
                            </ul>
                             -->
                        </div>
                    </div>
                    <!-- ==== MARDIONO MARSETIO  |  1972-73 ==== -->
                    <div class="pf-fellow-card">
                        <div class="pf-fellow-photo">
                            <img src="https://nathes690.github.io/proctor-fellows/img/marsetio-mardiono.webp" alt="Mardiono Marsetio, MD">
                        </div>
                        <div class="pf-body">
                            <p class="pf-span-top">
                                <span class="pf-year-lbl">Fellowship year</span>1972–73
                            </p>
                            <p class="pf-name">
                                <a class="pf-name-link" href="https://grokipedia.com/page/mardiono_marsetio" target="_blank" rel="noopener">Mardiono Marsetio, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                            </p>
                            <!-- 
                            <p class="pf-memoriam">
                                In memoriam (YEAR)
                            </p>
                             -->
                            <p class="pf-summary">
                                &nbsp;
                            </p>
                        </div>
                        <p>
                            <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Mardiono Marsetio, MD">▾</button>
                        </p>
                        <div class="pf-more">
                            <p class="pf-country">
                                <strong>Country of origin</strong>Indonesia
                            </p>
                            <!-- 
                            <p class="pf-sec-head pf-sec-edu">
                                Education and training
                            </p>
                                                 
                            <ul class="pf-list pf-edu">
                                <li>
                                    ADD TRAINING HERE
                                </li>
                            </ul>
                             --><!-- 
                            <p class="pf-sec-head pf-sec-roles">
                                Selected roles
                            </p>
                                                 
                            <ul class="pf-list pf-roles">
                                <li>
                                    ADD ROLE HERE
                                </li>
                            </ul>
                             --><!-- 
                            <p class="pf-sec-head pf-sec-pubs">
                                Publications with Proctor
                            </p>
                                                 
                            <ul class="pf-list pf-pubs">
                                <li>
                                    <a href="URL">TITLE</a>
                                </li>
                            </ul>
                             -->
                        </div>
                    </div>
                    <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 1972–73 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
                </div>
                <p class="pf-year-head">
                    1971–72
                </p>
                <div class="pf-fellows-grid">
                    <!-- ==== JOHN S. WILKIE  |  1971-72 ==== -->
                    <div class="pf-fellow-card">
                        <div class="pf-fellow-photo">
                            <img src="https://nathes690.github.io/proctor-fellows/img/wilkie-john.webp" alt="John S. Wilkie, MD">
                        </div>
                        <div class="pf-body">
                            <p class="pf-span-top">
                                <span class="pf-year-lbl">Fellowship year</span>1971–72
                            </p>
                            <p class="pf-name">
                                <a class="pf-name-link" href="https://www.ebar.com/story/68625" target="_blank" rel="noopener">John S. Wilkie, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                            </p>
                            <!-- 
                            <p class="pf-memoriam">
                                In memoriam (YEAR)
                            </p>
                             -->
                            <p class="pf-summary">
                                &nbsp;
                            </p>
                        </div>
                        <p>
                            <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about John S. Wilkie, MD">▾</button>
                        </p>
                        <div class="pf-more">
                            <p class="pf-country">
                                &nbsp;
                            </p>
                            <p class="pf-sec-head pf-sec-edu">
                                Education and training
                            </p>
                            <ul class="pf-list pf-edu">
                                <li data-list-item-id="ea1598eee81215c13605be96436972f01">
                                    yes
                                </li>
                            </ul>
                            <!-- 
                            <p class="pf-sec-head pf-sec-roles">
                                Selected roles
                            </p>
                                                 
                            <ul class="pf-list pf-roles">
                                <li>
                                    ADD ROLE HERE
                                </li>
                            </ul>
                             -->
                            <p class="pf-sec-head pf-sec-pubs">
                                Publications with Proctor
                            </p>
                            <ul class="pf-list pf-pubs">
                                <li data-list-item-id="ef7303bdfca24998046bd2091610b0f6e">
                                    <a href="https://www.ebar.com/story/68625" target="_blank" rel="noopener">ebar.com/story/68625</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 1971–72 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
                </div>
                <p class="pf-year-head">
                    1971
                </p>
                <div class="pf-fellows-grid">
                    <!-- ==== RONALD G. JANS  |  1971 ==== -->
                    <div class="pf-fellow-card">
                        <div class="pf-fellow-photo">
                            <img src="https://nathes690.github.io/proctor-fellows/img/jans-ronald.webp" alt="Ronald G. Jans, MD">
                        </div>
                        <div class="pf-body">
                            <p class="pf-span-top">
                                <span class="pf-year-lbl">Fellowship year</span>1971
                            </p>
                            <p class="pf-name">
                                Ronald G. Jans, MD
                            </p>
                            <!-- 
                            <p class="pf-memoriam">
                                In memoriam (YEAR)
                            </p>
                             -->
                            <p class="pf-summary">
                                &nbsp;
                            </p>
                        </div>
                        <p>
                            <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Ronald G. Jans, MD">▾</button>
                        </p>
                        <div class="pf-more">
                            <p class="pf-country">
                                <strong>Country of origin</strong>Canada
                            </p>
                            <!-- 
                            <p class="pf-sec-head pf-sec-edu">
                                Education and training
                            </p>
                                                 
                            <ul class="pf-list pf-edu">
                                <li>
                                    ADD TRAINING HERE
                                </li>
                            </ul>
                             --><!-- 
                            <p class="pf-sec-head pf-sec-roles">
                                Selected roles
                            </p>
                                                 
                            <ul class="pf-list pf-roles">
                                <li>
                                    ADD ROLE HERE
                                </li>
                            </ul>
                             --><!-- 
                            <p class="pf-sec-head pf-sec-pubs">
                                Publications with Proctor
                            </p>
                                                 
                            <ul class="pf-list pf-pubs">
                                <li>
                                    <a href="URL">TITLE</a>
                                </li>
                            </ul>
                             -->
                        </div>
                    </div>
                    <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 1971 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
                </div>
                <p class="pf-year-head">
                    1970
                </p>
                <div class="pf-fellows-grid">
                    <!-- ==== IOUR FEDEROVICH MAITCHOUK  |  1970 ==== -->
                    <div class="pf-fellow-card">
                        <div class="pf-fellow-photo">
                            <img src="https://nathes690.github.io/proctor-fellows/img/maitchouk-iour.webp" alt="Iour Federovich Maitchouk, MD">
                        </div>
                        <div class="pf-body">
                            <p class="pf-span-top">
                                <span class="pf-year-lbl">Fellowship year</span>1970
                            </p>
                            <p class="pf-name">
                                <a class="pf-name-link" href="https://www.mediasphera.ru/issues/vestnik-oftalmologii/2023/1/downloads/ru/10042465X2023011151" target="_blank" rel="noopener">Iour Federovich Maitchouk, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                            </p>
                            <!-- 
                            <p class="pf-memoriam">
                                In memoriam (YEAR)
                            </p>
                             -->
                            <p class="pf-summary">
                                &nbsp;
                            </p>
                        </div>
                        <p>
                            <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Iour Federovich Maitchouk, MD">▾</button>
                        </p>
                        <div class="pf-more">
                            <p class="pf-country">
                                &nbsp;
                            </p>
                            <p class="pf-sec-head pf-sec-edu">
                                Education and training
                            </p>
                            <ul class="pf-list pf-edu">
                                <li data-list-item-id="e85681096c1d863a22cf64486c71977c0">
                                    yes
                                </li>
                            </ul>
                            <!-- 
                            <p class="pf-sec-head pf-sec-roles">
                                Selected roles
                            </p>
                                                 
                            <ul class="pf-list pf-roles">
                                <li>
                                    ADD ROLE HERE
                                </li>
                            </ul>
                             -->
                            <p class="pf-sec-head pf-sec-pubs">
                                Publications with Proctor
                            </p>
                            <ul class="pf-list pf-pubs">
                                <li data-list-item-id="eca8d1e30be2274242143388bbc41c2d9">
                                    <a href="https://ruspanteon.ru/majchuk-yurij-fyodorovich/" target="_blank" rel="noopener">ruspanteon.ru/majchuk-yurij-fyodorovich/</a>
                                </li>
                                <li data-list-item-id="e7aec5ea9b6981316a2c75ddf72c22b92">
                                    <a href="https://www.mediasphera.ru/…/10042465X2023011151" target="_blank" rel="noopener">mediasphera.ru/…/10042465X2023011151</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 1970 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
                </div>
                <p class="pf-year-head">
                    1970–72
                </p>
                <div class="pf-fellows-grid">
                    <!-- ==== FRANKLIN F. CIGNETTI  |  1970-72 ==== -->
                    <div class="pf-fellow-card">
                        <div class="pf-fellow-photo">
                            <img src="https://nathes690.github.io/proctor-fellows/img/cignetti-franklin.webp" alt="Franklin F. Cignetti, MD">
                        </div>
                        <div class="pf-body">
                            <p class="pf-span-top">
                                <span class="pf-year-lbl">Fellowship year</span>1970–72
                            </p>
                            <p class="pf-name">
                                <a class="pf-name-link" href="https://jamanetwork.com/journals/jama/fullarticle/347689" target="_blank" rel="noopener">Franklin F. Cignetti, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                            </p>
                            <!-- 
                            <p class="pf-memoriam">
                                In memoriam (YEAR)
                            </p>
                             -->
                            <p class="pf-summary">
                                Doxycycline Treatment of Chronic Trachoma | https://jamanetwork.com/…/347689
                            </p>
                        </div>
                        <p>
                            <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Franklin F. Cignetti, MD">▾</button>
                        </p>
                        <div class="pf-more">
                            <p class="pf-country">
                                &nbsp;
                            </p>
                            <p class="pf-sec-head pf-sec-edu">
                                Education and training
                            </p>
                            <ul class="pf-list pf-edu">
                                <li data-list-item-id="efcc1df98f1e41eca6ff85c11f3cec304">
                                    yes
                                </li>
                            </ul>
                            <!-- 
                            <p class="pf-sec-head pf-sec-roles">
                                Selected roles
                            </p>
                                                 
                            <ul class="pf-list pf-roles">
                                <li>
                                    ADD ROLE HERE
                                </li>
                            </ul>
                             --><!-- 
                            <p class="pf-sec-head pf-sec-pubs">
                                Publications with Proctor
                            </p>
                                                 
                            <ul class="pf-list pf-pubs">
                                <li>
                                    <a href="URL">TITLE</a>
                                </li>
                            </ul>
                             -->
                        </div>
                    </div>
                    <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 1970–72 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
                </div>
                <p class="pf-year-head">
                    1970–71
                </p>
                <div class="pf-fellows-grid">
                    <!-- ==== GIOVANNI B. MOSCHINI  |  1970-71 ==== -->
                    <div class="pf-fellow-card">
                        <div class="pf-fellow-photo">
                            <img src="https://nathes690.github.io/proctor-fellows/img/moschini-giovanni.webp" alt="Giovanni B. Moschini, MD">
                        </div>
                        <div class="pf-body">
                            <p class="pf-span-top">
                                <span class="pf-year-lbl">Fellowship year</span>1970–71
                            </p>
                            <p class="pf-name">
                                <a class="pf-name-link" href="https://jamanetwork.com/journals/jamaophthalmology/article-abstract/630481" target="_blank" rel="noopener">Giovanni B. Moschini, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                            </p>
                            <!-- 
                            <p class="pf-memoriam">
                                In memoriam (YEAR)
                            </p>
                             -->
                            <p class="pf-summary">
                                Experimental Vaccinial Keratoconjunctivitis: Effect of an Interferon Inducer (Poly I:C) | https://jamanetwork.com/…/630481
                            </p>
                        </div>
                        <p>
                            <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Giovanni B. Moschini, MD">▾</button>
                        </p>
                        <div class="pf-more">
                            <p class="pf-country">
                                &nbsp;
                            </p>
                            <p class="pf-sec-head pf-sec-edu">
                                Education and training
                            </p>
                            <ul class="pf-list pf-edu">
                                <li data-list-item-id="ec0e83204f5653c5cbabc204a36c7bd06">
                                    yes
                                </li>
                            </ul>
                            <!-- 
                            <p class="pf-sec-head pf-sec-roles">
                                Selected roles
                            </p>
                                                 
                            <ul class="pf-list pf-roles">
                                <li>
                                    ADD ROLE HERE
                                </li>
                            </ul>
                             -->
                            <p class="pf-sec-head pf-sec-pubs">
                                Publications with Proctor
                            </p>
                            <ul class="pf-list pf-pubs">
                                <li data-list-item-id="e80d102e45fb6d2e69ad43e30cfeb4c7d">
                                    <a href="https://www.alumniunipd.it/profilo/giovannibattistamoschini/" target="_blank" rel="noopener">alumniunipd.it/profilo/giovannibattistamoschini/</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- ==== MICHAEL A. NAIDOFF  |  1970-71 ==== -->
                    <div class="pf-fellow-card">
                        <div class="pf-fellow-photo">
                            <img src="https://nathes690.github.io/proctor-fellows/img/naidoff-michael.webp" alt="Michael A. Naidoff, MD">
                        </div>
                        <div class="pf-body">
                            <p class="pf-span-top">
                                <span class="pf-year-lbl">Fellowship year</span>1970–71
                            </p>
                            <p class="pf-name">
                                Michael A. Naidoff, MD
                            </p>
                            <!-- 
                            <p class="pf-memoriam">
                                In memoriam (YEAR)
                            </p>
                             -->
                            <p class="pf-summary">
                                &nbsp;
                            </p>
                        </div>
                        <p>
                            <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Michael A. Naidoff, MD">▾</button>
                        </p>
                        <div class="pf-more">
                            <p class="pf-country">
                                &nbsp;
                            </p>
                            <p class="pf-sec-head pf-sec-edu">
                                Education and training
                            </p>
                            <ul class="pf-list pf-edu">
                                <li data-list-item-id="e4ee8add96c1b9a85a07749b6e1ebaa9f">
                                    yes
                                </li>
                            </ul>
                            <!-- 
                            <p class="pf-sec-head pf-sec-roles">
                                Selected roles
                            </p>
                                                 
                            <ul class="pf-list pf-roles">
                                <li>
                                    ADD ROLE HERE
                                </li>
                            </ul>
                             -->
                            <p class="pf-sec-head pf-sec-pubs">
                                Publications with Proctor
                            </p>
                            <ul class="pf-list pf-pubs">
                                <li data-list-item-id="e8e0bc01bd0b7911491e61cde55ae4334">
                                    <a href="https://remembermyjourney.com/memorials/michael-allen-naidoff…" target="_blank" rel="noopener">remembermyjourney.com/memorials/michael-allen-naidoff…</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 1970–71 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
                </div>
            </div>
            <div class="pf-decade" id="d1960">
                <div class="pf-dec-head">
                    <h2>
                        1960s
                    </h2>
                    <p>
                        <span class="pf-dec-count">24 fellows</span>
                    </p>
                </div>
                <p class="pf-year-head">
                    1969
                </p>
                <div class="pf-fellows-grid">
                    <!-- ==== CAROLE E. WEST  |  1969 ==== -->
                    <div class="pf-fellow-card">
                        <div class="pf-fellow-photo is-empty">
                            no photo<br>
                            on file
                        </div>
                        <div class="pf-body">
                            <p class="pf-span-top">
                                <span class="pf-year-lbl">Fellowship year</span>1969
                            </p>
                            <p class="pf-name">
                                Carole E. West, MD
                            </p>
                            <!-- 
                            <p class="pf-memoriam">
                                In memoriam (YEAR)
                            </p>
                             -->
                            <p class="pf-summary">
                                Late Results of Keratoplasty for Fuchs' Dystrophy | https://www.sciencedirect.com/…/0002939471915972
                            </p>
                        </div>
                        <p>
                            <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Carole E. West, MD">▾</button>
                        </p>
                        <div class="pf-more">
                            <p class="pf-country">
                                &nbsp;
                            </p>
                            <p class="pf-sec-head pf-sec-edu">
                                Education and training
                            </p>
                            <ul class="pf-list pf-edu">
                                <li data-list-item-id="ef9e4d1692d0d3603acb03b4495bad191">
                                    yes
                                </li>
                            </ul>
                            <!-- 
                            <p class="pf-sec-head pf-sec-roles">
                                Selected roles
                            </p>
                                                 
                            <ul class="pf-list pf-roles">
                                <li>
                                    ADD ROLE HERE
                                </li>
                            </ul>
                             --><!-- 
                            <p class="pf-sec-head pf-sec-pubs">
                                Publications with Proctor
                            </p>
                                                 
                            <ul class="pf-list pf-pubs">
                                <li>
                                    <a href="URL">TITLE</a>
                                </li>
                            </ul>
                             -->
                        </div>
                    </div>
                    <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 1969 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
                </div>
                <p class="pf-year-head">
                    1969–70
                </p>
                <div class="pf-fellows-grid">
                    <!-- ==== GEORGE BOHIGIAN  |  1969-70 ==== -->
                    <div class="pf-fellow-card">
                        <div class="pf-fellow-photo">
                            <img src="https://nathes690.github.io/proctor-fellows/img/bohigian-george.webp" alt="George Bohigian, MD">
                        </div>
                        <div class="pf-body">
                            <p class="pf-span-top">
                                <span class="pf-year-lbl">Fellowship year</span>1969–70
                            </p>
                            <p class="pf-name">
                                George Bohigian, MD
                            </p>
                            <!-- 
                            <p class="pf-memoriam">
                                In memoriam (YEAR)
                            </p>
                             -->
                            <p class="pf-summary">
                                &nbsp;
                            </p>
                        </div>
                        <p>
                            <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about George Bohigian, MD">▾</button>
                        </p>
                        <div class="pf-more">
                            <p class="pf-country">
                                &nbsp;
                            </p>
                            <p class="pf-sec-head pf-sec-edu">
                                Education and training
                            </p>
                            <ul class="pf-list pf-edu">
                                <li data-list-item-id="e9da50fbaa918f9bd8a857edd41d1c39e">
                                    yes
                                </li>
                            </ul>
                            <!-- 
                            <p class="pf-sec-head pf-sec-roles">
                                Selected roles
                            </p>
                                                 
                            <ul class="pf-list pf-roles">
                                <li>
                                    ADD ROLE HERE
                                </li>
                            </ul>
                             -->
                            <p class="pf-sec-head pf-sec-pubs">
                                Publications with Proctor
                            </p>
                            <ul class="pf-list pf-pubs">
                                <li data-list-item-id="e874e008d5c3ad5841d40747aa042d435">
                                    <a href="https://www.rhsalumnistl.com/hall-of-fame/dr-george-bohigian/" target="_blank" rel="noopener">rhsalumnistl.com/hall-of-fame/dr-george-bohigian/</a>
                                </li>
                                <li data-list-item-id="e89e69f3e688211d3cdc1746d3086e61d">
                                    <a href="https://journals.sagepub.com/…/0967772017727478" target="_blank" rel="noopener">journals.sagepub.com/…/0967772017727478</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- ==== ROBERT A. HYNDIUK  |  1969-70 ==== -->
                    <div class="pf-fellow-card">
                        <div class="pf-fellow-photo">
                            <img src="https://nathes690.github.io/proctor-fellows/img/hyndiuk-robert.webp" alt="Robert A. Hyndiuk, MD">
                        </div>
                        <div class="pf-body">
                            <p class="pf-span-top">
                                <span class="pf-year-lbl">Fellowship year</span>1969–70
                            </p>
                            <p class="pf-name">
                                <a class="pf-name-link" href="https://www.linkedin.com/in/robert-a-hyndiuk-md-73533043/" target="_blank" rel="noopener">Robert A. Hyndiuk, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                            </p>
                            <!-- 
                            <p class="pf-memoriam">
                                In memoriam (YEAR)
                            </p>
                             -->
                            <p class="pf-summary">
                                &nbsp;
                            </p>
                        </div>
                        <p>
                            <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Robert A. Hyndiuk, MD">▾</button>
                        </p>
                        <div class="pf-more">
                            <p class="pf-country">
                                &nbsp;
                            </p>
                            <p class="pf-sec-head pf-sec-edu">
                                Education and training
                            </p>
                            <ul class="pf-list pf-edu">
                                <li data-list-item-id="ed3c89c561d0a0e8d6ae2f8733d42b5b6">
                                    yes
                                </li>
                            </ul>
                            <!-- 
                            <p class="pf-sec-head pf-sec-roles">
                                Selected roles
                            </p>
                                                 
                            <ul class="pf-list pf-roles">
                                <li>
                                    ADD ROLE HERE
                                </li>
                            </ul>
                             -->
                            <p class="pf-sec-head pf-sec-pubs">
                                Publications with Proctor
                            </p>
                            <ul class="pf-list pf-pubs">
                                <li data-list-item-id="eaaa4e3a72b1f9628b87726f97e33f1a0">
                                    <a href="https://www.linkedin.com/in/robert-a-hyndiuk-md-73533043/" target="_blank" rel="noopener">linkedin.com/in/robert-a-hyndiuk-md-73533043/</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 1969–70 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
                </div>
                <p class="pf-year-head">
                    1968–69
                </p>
                <div class="pf-fellows-grid">
                    <!-- ==== ABDALLAH M. ISA  |  1968-69 ==== -->
                    <div class="pf-fellow-card">
                        <div class="pf-fellow-photo">
                            <img src="https://nathes690.github.io/proctor-fellows/img/isa-abdallah.webp" alt="ABDALLAH M. ISA">
                        </div>
                        <div class="pf-body">
                            <p class="pf-span-top">
                                <span class="pf-year-lbl">Fellowship year</span>1968–69
                            </p>
                            <p class="pf-name">
                                Abdallah M. Isa, MD
                            </p>
                            <!-- 
                            <p class="pf-memoriam">
                                In memoriam (YEAR)
                            </p>
                             -->
                            <p class="pf-summary">
                                Susceptibility of Anti-Chlamydial IgG Antibodies to Reduction and Alkylation | https://academic.oup.com/jimmunol/article-abstract/102/5/1332/8097024
                            </p>
                        </div>
                        <p>
                            <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Abdallah M. Isa, MD">▾</button>
                        </p>
                        <div class="pf-more">
                            <p class="pf-country">
                                &nbsp;
                            </p>
                            <p class="pf-sec-head pf-sec-edu">
                                Education and training
                            </p>
                            <ul class="pf-list pf-edu">
                                <li data-list-item-id="e4b5afa99662283c77b896c4635da4873">
                                    yes
                                </li>
                            </ul>
                            <!-- 
                            <p class="pf-sec-head pf-sec-roles">
                                Selected roles
                            </p>
                                                 
                            <ul class="pf-list pf-roles">
                                <li>
                                    ADD ROLE HERE
                                </li>
                            </ul>
                             --><!-- 
                            <p class="pf-sec-head pf-sec-pubs">
                                Publications with Proctor
                            </p>
                                                 
                            <ul class="pf-list pf-pubs">
                                <li>
                                    <a href="URL">TITLE</a>
                                </li>
                            </ul>
                             -->
                        </div>
                    </div>
                    <!-- ==== ENDLIAM CHOWCHUVECH  |  1968-69 ==== -->
                    <div class="pf-fellow-card">
                        <div class="pf-fellow-photo">
                            <img src="https://nathes690.github.io/proctor-fellows/img/chowchuvech-endliam-2.jpg" alt="Endliam Chowchuvech, MD">
                        </div>
                        <div class="pf-body">
                            <p class="pf-span-top">
                                <span class="pf-year-lbl">Fellowship year</span>1968–69
                            </p>
                            <p class="pf-name">
                                <a class="pf-name-link" href="http://rcopt.org/index.php?r=users/profile&amp;id=1051" target="_blank" rel="noopener">Endliam Chowchuvech, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                            </p>
                            <!-- 
                            <p class="pf-memoriam">
                                In memoriam (YEAR)
                            </p>
                             -->
                            <p class="pf-summary">
                                &nbsp;
                            </p>
                        </div>
                        <p>
                            <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Endliam Chowchuvech, MD">▾</button>
                        </p>
                        <div class="pf-more">
                            <p class="pf-native">
                                <span class="pf-script-lbl">Thai</span><span lang="th">เอ็นเลียม เชาว์ชูเวช</span>
                            </p>
                            <p class="pf-country">
                                <strong>Country of origin</strong>Thailand
                            </p>
                            <p class="pf-sec-head pf-sec-edu">
                                Education and training
                            </p>
                            <ul class="pf-list pf-edu">
                                <li data-list-item-id="ee41a050b87bf49aff585540fc0002483">
                                    VERIFY
                                </li>
                            </ul>
                            <!-- 
                            <p class="pf-sec-head pf-sec-roles">
                                Selected roles
                            </p>
                                                 
                            <ul class="pf-list pf-roles">
                                <li>
                                    ADD ROLE HERE
                                </li>
                            </ul>
                             -->
                            <p class="pf-sec-head pf-sec-pubs">
                                Publications with Proctor
                            </p>
                            <ul class="pf-list pf-pubs">
                                <li data-list-item-id="eb1af8770800805050181dee542c2e40e">
                                    <a href="http://rcopt.org/…id=1051" target="_blank" rel="noopener">rcopt.org/…id=1051</a>
                                </li>
                                <li data-list-item-id="e69a2bd037e7af95df759c1ba02ced78f">
                                    <a href="https://www.sukumvithospital.com/doctorprofile.php?id=603&amp;lang=en" target="_blank" rel="noopener">sukumvithospital.com/doctorprofile.php?id=603&amp;lang=en</a>
                                </li>
                                <li data-list-item-id="eec2834ebfeab41314fca551abf155624">
                                    <a href="https://www.facebook.com/photo/…" target="_blank" rel="noopener">facebook.com/photo/…</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- ==== JACK PLOTKIN  |  1968-69 ==== -->
                    <div class="pf-fellow-card">
                        <div class="pf-fellow-photo is-empty">
                            no photo<br>
                            on file
                        </div>
                        <div class="pf-body">
                            <p class="pf-span-top">
                                <span class="pf-year-lbl">Fellowship year</span>1968–69
                            </p>
                            <p class="pf-name">
                                Jack Plotkin, MD
                            </p>
                            <!-- 
                            <p class="pf-memoriam">
                                In memoriam (YEAR)
                            </p>
                             -->
                            <p class="pf-summary">
                                Cytologic Study of Herpetic Keratitis: Preparation of Corneal Scrapings | https://jamanetwork.com/…/630241
                            </p>
                        </div>
                        <p>
                            <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Jack Plotkin, MD">▾</button>
                        </p>
                        <div class="pf-more">
                            <p class="pf-country">
                                &nbsp;
                            </p>
                            <p class="pf-sec-head pf-sec-edu">
                                Education and training
                            </p>
                            <ul class="pf-list pf-edu">
                                <li data-list-item-id="e3ebdac10ea671529397262c93d806fc6">
                                    yes
                                </li>
                            </ul>
                            <!-- 
                            <p class="pf-sec-head pf-sec-roles">
                                Selected roles
                            </p>
                                                 
                            <ul class="pf-list pf-roles">
                                <li>
                                    ADD ROLE HERE
                                </li>
                            </ul>
                             -->
                            <p class="pf-sec-head pf-sec-pubs">
                                Publications with Proctor
                            </p>
                            <ul class="pf-list pf-pubs">
                                <li data-list-item-id="e0501b2043e2f3f10c1516ccacca78551">
                                    <a href="https://jackplotkin.dr-leonardo.com/" target="_blank" rel="noopener">jackplotkin.dr-leonardo.com/</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- ==== RICHARD FORSTER  |  1968-69 ==== -->
                    <div class="pf-fellow-card">
                        <div class="pf-fellow-photo is-empty">
                            no photo<br>
                            on file
                        </div>
                        <div class="pf-body">
                            <p class="pf-span-top">
                                <span class="pf-year-lbl">Fellowship year</span>1968–69
                            </p>
                            <p class="pf-name">
                                <a class="pf-name-link" href="https://www.aao.org/lifetime-engaged-ophthalmologist/perspective/article/richard-k-forster-md-life-through-lens-of-ophthalm" target="_blank" rel="noopener">Richard Forster, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                            </p>
                            <!-- 
                            <p class="pf-memoriam">
                                In memoriam (YEAR)
                            </p>
                             -->
                            <p class="pf-summary">
                                Professor Emeritus of Ophthalmology and holder of the prestigious Richard K. Forster Chair in Ophthalmology at the Bascom Palmer Eye Institute (University of Miami Miller School of Medicine). He has served on their faculty for over 50 years.Infectious Disease Pioneer: Dr. Forster revolutionized how the medical community treats severe, blinding eye infections. He published landmark, globally cited research on the prophylaxis and management of postoperative endophthalmitis (severe internal eye infections) and the bacteriology of corneal sutures.International Leadership: From 1987 to 1992, he was recruited internationally to serve as the Medical Director of the King Khaled Eye Specialist Hospital in Riyadh, Saudi Arabia, advancing advanced eye surgery infrastructure in the Middle East.Distinguished Honors: Widely regarded as a giant in corneal medicine, his career and academic contributions are honored directly through an endowed professorship named in his honor at Bascom Palmer, currently held by ocular oncology pioneer Dr. Carol L. Karp.
                            </p>
                        </div>
                        <p>
                            <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Richard Forster, MD">▾</button>
                        </p>
                        <div class="pf-more">
                            <p class="pf-country">
                                &nbsp;
                            </p>
                            <p class="pf-sec-head pf-sec-edu">
                                Education and training
                            </p>
                            <ul class="pf-list pf-edu">
                                <li data-list-item-id="e24cb86e4aba9238c6716659d517ae915">
                                    VERIFY
                                </li>
                            </ul>
                            <!-- 
                            <p class="pf-sec-head pf-sec-roles">
                                Selected roles
                            </p>
                                                 
                            <ul class="pf-list pf-roles">
                                <li>
                                    ADD ROLE HERE
                                </li>
                            </ul>
                             -->
                            <p class="pf-sec-head pf-sec-pubs">
                                Publications with Proctor
                            </p>
                            <ul class="pf-list pf-pubs">
                                <li data-list-item-id="e38bfeea13dc4a151934e7b6d9944599f">
                                    <a href="https://www.aao.org/lifetime-engaged-ophthalmologist/…richard-k-forster-md…" target="_blank" rel="noopener">aao.org/lifetime-engaged-ophthalmologist/…richard-k-forster-md…</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- ==== WALTER L. BURT  |  1968-69 ==== -->
                    <div class="pf-fellow-card">
                        <div class="pf-fellow-photo">
                            <img src="https://nathes690.github.io/proctor-fellows/img/burt-walter.webp" alt="Walter L. Burt, MD">
                        </div>
                        <div class="pf-body">
                            <p class="pf-span-top">
                                <span class="pf-year-lbl">Fellowship year</span>1968–69
                            </p>
                            <p class="pf-name">
                                Walter L. Burt, MD
                            </p>
                            <!-- 
                            <p class="pf-memoriam">
                                In memoriam (YEAR)
                            </p>
                             -->
                            <p class="pf-summary">
                                &nbsp;
                            </p>
                        </div>
                        <div class="pf-toggle-spacer">
                            &nbsp;
                        </div>
                        <div class="pf-more">
                            <p class="pf-country">
                                &nbsp;
                            </p>
                            <!-- 
                            <p class="pf-sec-head pf-sec-edu">
                                Education and training
                            </p>
                                                 
                            <ul class="pf-list pf-edu">
                                <li>
                                    ADD TRAINING HERE
                                </li>
                            </ul>
                             --><!-- 
                            <p class="pf-sec-head pf-sec-roles">
                                Selected roles
                            </p>
                                                 
                            <ul class="pf-list pf-roles">
                                <li>
                                    ADD ROLE HERE
                                </li>
                            </ul>
                             --><!-- 
                            <p class="pf-sec-head pf-sec-pubs">
                                Publications with Proctor
                            </p>
                                                 
                            <ul class="pf-list pf-pubs">
                                <li>
                                    <a href="URL">TITLE</a>
                                </li>
                            </ul>
                             -->
                        </div>
                    </div>
                    <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 1968–69 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
                </div>
                <p class="pf-year-head">
                    1968
                </p>
                <div class="pf-fellows-grid">
                    <!-- ==== LUNG-JUI YEH  |  1968 ==== -->
                    <div class="pf-fellow-card">
                        <div class="pf-fellow-photo is-empty">
                            no photo<br>
                            on file
                        </div>
                        <div class="pf-body">
                            <p class="pf-span-top">
                                <span class="pf-year-lbl">Fellowship year</span>1968
                            </p>
                            <p class="pf-name">
                                Lung-Jui Yeh, MD
                            </p>
                            <!-- 
                            <p class="pf-memoriam">
                                In memoriam (YEAR)
                            </p>
                             -->
                            <p class="pf-summary">
                                American Lung-Jui Yeh Medical Foundation (Arcadia, California) established in his name
                            </p>
                        </div>
                        <p>
                            <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Lung-Jui Yeh, MD">▾</button>
                        </p>
                        <div class="pf-more">
                            <p class="pf-native">
                                <span class="pf-script-lbl">Chinese</span><span lang="zh">葉銳龍醫師</span>
                            </p>
                            <p class="pf-country">
                                &nbsp;
                            </p>
                            <p class="pf-sec-head pf-sec-edu">
                                Education and training
                            </p>
                            <ul class="pf-list pf-edu">
                                <li data-list-item-id="e4f6f244c380aeab5a7cc6994ba49b4de">
                                    yes
                                </li>
                            </ul>
                            <!-- 
                            <p class="pf-sec-head pf-sec-roles">
                                Selected roles
                            </p>
                                                 
                            <ul class="pf-list pf-roles">
                                <li>
                                    ADD ROLE HERE
                                </li>
                            </ul>
                             -->
                            <p class="pf-sec-head pf-sec-pubs">
                                Publications with Proctor
                            </p>
                            <ul class="pf-list pf-pubs">
                                <li data-list-item-id="e543e9d960f626b9ba4d6264e93c7271d">
                                    Importance of Reinfection in the Pathogenesis of Trachoma Get access Arrow
                                </li>
                                <li data-list-item-id="e0bc4fa708459499f4f80dd08553b4e12">
                                    J. Thomas Grayston , San-pin Wang , Lung-jui Yeh , Cho-chou Kuohttps://academic.oup.com/cid/article-abstract/7/6/717/382176
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 1968 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
                </div>
                <p class="pf-year-head">
                    1967
                </p>
                <div class="pf-fellows-grid">
                    <!-- ==== MOH MANSJOER  |  1967 ==== -->
                    <div class="pf-fellow-card">
                        <div class="pf-fellow-photo">
                            <img src="https://nathes690.github.io/proctor-fellows/img/mansjoer-moh.webp" alt="Moh Mansjoer, MD">
                        </div>
                        <div class="pf-body">
                            <p class="pf-span-top">
                                <span class="pf-year-lbl">Fellowship year</span>1967
                            </p>
                            <p class="pf-name">
                                Moh Mansjoer, MD
                            </p>
                            <!-- 
                            <p class="pf-memoriam">
                                In memoriam (YEAR)
                            </p>
                             -->
                            <p class="pf-summary">
                                Historical Position: Served as an international public health official and clinical ophthalmologist in Indonesia.WHO Fellow: Unlike many traditional clinical residents, Dr. Mansjoer was explicitly appointed as a World Health Organization (WHO) Fellow. His placement at UCSF was part of a strategic mid-century global health initiative to train elite international physicians in advanced ocular microbiology and infectious diseases so they could return home to combat preventable blindness (such as trachoma and severe corneal infections) in developing nations.
                            </p>
                        </div>
                        <p>
                            <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Moh Mansjoer, MD">▾</button>
                        </p>
                        <div class="pf-more">
                            <p class="pf-country">
                                <strong>Country of origin</strong>Indonesia
                            </p>
                            <!-- 
                            <p class="pf-sec-head pf-sec-edu">
                                Education and training
                            </p>
                                                 
                            <ul class="pf-list pf-edu">
                                <li>
                                    ADD TRAINING HERE
                                </li>
                            </ul>
                             --><!-- 
                            <p class="pf-sec-head pf-sec-roles">
                                Selected roles
                            </p>
                                                 
                            <ul class="pf-list pf-roles">
                                <li>
                                    ADD ROLE HERE
                                </li>
                            </ul>
                             --><!-- 
                            <p class="pf-sec-head pf-sec-pubs">
                                Publications with Proctor
                            </p>
                                                 
                            <ul class="pf-list pf-pubs">
                                <li>
                                    <a href="URL">TITLE</a>
                                </li>
                            </ul>
                             -->
                        </div>
                    </div>
                    <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 1967 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
                </div>
                <p class="pf-year-head">
                    1967–68
                </p>
                <div class="pf-fellows-grid">
                    <!-- ==== CLYDE L. OLSON  |  1967-68 ==== -->
                    <div class="pf-fellow-card">
                        <div class="pf-fellow-photo">
                            <img src="https://nathes690.github.io/proctor-fellows/img/olson-clyde.webp" alt="Clyde L, Olson, MD">
                        </div>
                        <div class="pf-body">
                            <p class="pf-span-top">
                                <span class="pf-year-lbl">Fellowship year</span>1967–68
                            </p>
                            <p class="pf-name">
                                Clyde L. Olson, MD
                            </p>
                            <!-- 
                            <p class="pf-memoriam">
                                In memoriam (YEAR)
                            </p>
                             -->
                            <p class="pf-summary">
                                Practice Position: Longtime attending ophthalmologist and former partner at Ophthalmology Associates in Savannah, Georgia—noted as the oldest standing medical eye practice in Savannah, dating back to 1952. He is currently retired from active surgical practice.Histopathology &amp; Disease Discovery: Early in his career, Dr. Olson published foundational clinical research that bridged the gap between eye pathology and internal medicine.Landmark Research: He collaborated with legendary retinal specialist Dr. J. Donald M. Gass on a historic, widely cited clinicopathologic correlation study on Sarcoidosis With Optic Nerve and Retinal Involvement. His work provided the ophthalmic community with the precise histopathological maps of how systemic sarcoidosis causes "candle-wax dripping" retinal exudates and intravitreal nodules.Ocular Microbiology: During his tenure at UCSF, his research was pivotal in mapping external eye pathogens, including writing landmark clinical papers evaluating Fungal Contamination of the Conjunctiva and Lid Margin, which analyzed how the environment impacts transient fungal eye flora.
                            </p>
                        </div>
                        <p>
                            <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Clyde L. Olson, MD">▾</button>
                        </p>
                        <div class="pf-more">
                            <p class="pf-country">
                                &nbsp;
                            </p>
                            <p class="pf-sec-head pf-sec-edu">
                                Education and training
                            </p>
                            <ul class="pf-list pf-edu">
                                <li data-list-item-id="e699a6cc7ccbd4d7220f5ebe03b8e8d71">
                                    Medical Degree (MD): Completed his core medical training and medical degree at a major U.S. institution.Ophthalmology Residency: Completed his postgraduate residency training in general surgical and medical ophthalmology
                                </li>
                            </ul>
                            <!-- 
                            <p class="pf-sec-head pf-sec-roles">
                                Selected roles
                            </p>
                                                 
                            <ul class="pf-list pf-roles">
                                <li>
                                    ADD ROLE HERE
                                </li>
                            </ul>
                             --><!-- 
                            <p class="pf-sec-head pf-sec-pubs">
                                Publications with Proctor
                            </p>
                                                 
                            <ul class="pf-list pf-pubs">
                                <li>
                                    <a href="URL">TITLE</a>
                                </li>
                            </ul>
                             -->
                        </div>
                    </div>
                    <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 1967–68 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
                </div>
                <p class="pf-year-head">
                    1966–67
                </p>
                <div class="pf-fellows-grid">
                    <!-- ==== GIL SMOLIN  |  1966-67 ==== -->
                    <div class="pf-fellow-card">
                        <div class="pf-fellow-photo">
                            <img src="https://nathes690.github.io/proctor-fellows/img/smolin-gil.webp" alt="GIL SMOLIN, MD">
                        </div>
                        <div class="pf-body">
                            <p class="pf-span-top">
                                <span class="pf-year-lbl">Fellowship year</span>1966–67
                            </p>
                            <p class="pf-name">
                                GIL SMOLIN, MD
                            </p>
                            <!-- 
                            <p class="pf-memoriam">
                                In memoriam (YEAR)
                            </p>
                             -->
                            <p class="pf-summary">
                                Academic Professor: He served concurrently as a Clinical Professor of Ophthalmology at the University of California, San Francisco (UCSF) for over 30 years.Author of the "Cornea Bible": Dr. Smolin co-authored and edited the definitive, globally utilized medical textbook, Smolin and Thoft’s The Cornea. It is widely considered by the ophthalmic community to be the absolute "must-have" gold-standard reference for corneal specialists and residents worldwide.Global Trials: He was heavily involved in international collaborative eye trials, traveling to organizations like the Aravind Eye Care System to pioneer research such as the Steroids for Corneal Ulcer Trial.Dual Career: Alongside his intensive academic research and writing, he also maintained a thriving private community practice in San Bruno, California, and later in life even wrote a published medical thriller novel.
                            </p>
                        </div>
                        <p>
                            <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about GIL SMOLIN, MD">▾</button>
                        </p>
                        <div class="pf-more">
                            <p class="pf-country">
                                &nbsp;
                            </p>
                            <p class="pf-sec-head pf-sec-edu">
                                Education and training
                            </p>
                            <ul class="pf-list pf-edu">
                                <li data-list-item-id="e3440b0420930ee46042dbe33e7ec95d8">
                                    Completed his core medical training and surgical certifications in New York before relocating to California.Ophthalmology Residency: Completed his postgraduate residency training in advanced medical and surgical ophthalmology
                                </li>
                            </ul>
                            <!-- 
                            <p class="pf-sec-head pf-sec-roles">
                                Selected roles
                            </p>
                                                 
                            <ul class="pf-list pf-roles">
                                <li>
                                    ADD ROLE HERE
                                </li>
                            </ul>
                             --><!-- 
                            <p class="pf-sec-head pf-sec-pubs">
                                Publications with Proctor
                            </p>
                                                 
                            <ul class="pf-list pf-pubs">
                                <li>
                                    <a href="URL">TITLE</a>
                                </li>
                            </ul>
                             -->
                        </div>
                    </div>
                    <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 1966–67 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
                </div>
                <p class="pf-year-head">
                    1965–66
                </p>
                <div class="pf-fellows-grid">
                    <!-- ==== ALEKSANDAR PARUNOVIC  |  1965-66 ==== -->
                    <div class="pf-fellow-card">
                        <div class="pf-fellow-photo">
                            <img src="https://nathes690.github.io/proctor-fellows/img/parunovic-aleksandar.webp" alt="Aleksandar Parunovic, MD">
                        </div>
                        <div class="pf-body">
                            <p class="pf-span-top">
                                <span class="pf-year-lbl">Fellowship year</span>1965–66
                            </p>
                            <p class="pf-name">
                                <a class="pf-name-link" href="http://www.kcs.ac.rs/index.php/klinike/klinika-za-ocne-bolesti/istorijat" target="_blank" rel="noopener">Aleksandar Parunovic, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                            </p>
                            <!-- 
                            <p class="pf-memoriam">
                                In memoriam (YEAR)
                            </p>
                             -->
                            <p class="pf-summary">
                                Academic Leadership: Served as a leading Professor of Ophthalmology at the University of Belgrade Faculty of Medicine and the University Eye Clinic in Belgrade, Serbia (formerly Yugoslavia).Research &amp; Discoveries: While at UCSF, he specialized in external eye diseases and ocular microbiology. He co-authored a foundational, widely cited study identifying the role of the yeast organism Pityrosporum orbiculare in seborrheic blepharitis (eyelid inflammation) alongside legendary Proctor researcher Dr. Phillips Thygeson.Clinical Milestones: Over his multi-decade career in Belgrade, he published extensively on corneal disorders, rare eyelid conditions like Floppy Eyelid Syndrome, and complex corneal tumors.Educational Impact: He co-authored primary European medical textbooks and reference manuals, such as Korekcija refrakcionih anomalija oka (Correction of Refractive Errors of the Eye), which educated generations of Eastern European eye specialists.
                            </p>
                        </div>
                        <p>
                            <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Aleksandar Parunovic, MD">▾</button>
                        </p>
                        <div class="pf-more">
                            <p class="pf-country">
                                <strong>Country of origin</strong>Serbia (Yugoslavia)
                            </p>
                            <p class="pf-sec-head pf-sec-edu">
                                Education and training
                            </p>
                            <ul class="pf-list pf-edu">
                                <li data-list-item-id="edaf2f2faad13b4e96e9101cdca8d4551">
                                    Medical Degree (MD): Completed his core medical training and surgical qualifications at the University of Belgrade Faculty of Medicine.Ophthalmology Residency: Completed his postgraduate specialty training in surgical and medical ophthalmology at the University Eye Clinic in Belgrade
                                </li>
                            </ul>
                            <!-- 
                            <p class="pf-sec-head pf-sec-roles">
                                Selected roles
                            </p>
                                                 
                            <ul class="pf-list pf-roles">
                                <li>
                                    ADD ROLE HERE
                                </li>
                            </ul>
                             -->
                            <p class="pf-sec-head pf-sec-pubs">
                                Publications with Proctor
                            </p>
                            <ul class="pf-list pf-pubs">
                                <li data-list-item-id="ebab95f4321ebec4eb31b4362c0a818eb">
                                    <a href="https://www.sciencedirect.com/science/article/pii/0002939467913098" target="_blank" rel="noopener">Pityrosporum Orbiculare: Its Possible Role in Seborrheic Blepharitis</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- ==== JEROME J. KAZDAN  |  1965-66 ==== -->
                    <div class="pf-fellow-card">
                        <div class="pf-fellow-photo is-empty">
                            no photo<br>
                            on file
                        </div>
                        <div class="pf-body">
                            <p class="pf-span-top">
                                <span class="pf-year-lbl">Fellowship year</span>1965–66
                            </p>
                            <p class="pf-name">
                                Jerome J. Kazdan, MD
                            </p>
                            <!-- 
                            <p class="pf-memoriam">
                                In memoriam (YEAR)
                            </p>
                             -->
                            <p class="pf-summary">
                                Dr. Kazdan has actively contributed to ophthalmic literature. He has published research on complex conditions such as pediatric uveitis at The Hospital for Sick Children, Vogt-Koyanagi-Harada syndrome in children, and experimental treatments for severe fungal infections like Candida endophthalmitis. [1, 2, 3]
                            </p>
                        </div>
                        <p>
                            <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Jerome J. Kazdan, MD">▾</button>
                        </p>
                        <div class="pf-more">
                            <p class="pf-country">
                                <strong>Country of origin</strong>Canada
                            </p>
                            <p class="pf-sec-head pf-sec-edu">
                                Education and training
                            </p>
                            <ul class="pf-list pf-edu">
                                <li data-list-item-id="e30fe6117bcc159392c37fab25903cc5e">
                                    University of Toronto Faculty of Medicine,
                                </li>
                            </ul>
                            <!-- 
                            <p class="pf-sec-head pf-sec-roles">
                                Selected roles
                            </p>
                                                 
                            <ul class="pf-list pf-roles">
                                <li>
                                    ADD ROLE HERE
                                </li>
                            </ul>
                             --><!-- 
                            <p class="pf-sec-head pf-sec-pubs">
                                Publications with Proctor
                            </p>
                                                 
                            <ul class="pf-list pf-pubs">
                                <li>
                                    <a href="URL">TITLE</a>
                                </li>
                            </ul>
                             -->
                        </div>
                    </div>
                    <!-- ==== MARK S. FELDMAN  |  1965-66 ==== -->
                    <div class="pf-fellow-card">
                        <div class="pf-fellow-photo">
                            <img src="https://nathes690.github.io/proctor-fellows/img/feldman-mark.jpg" alt="Mark S. Feldman, MD">
                        </div>
                        <div class="pf-body">
                            <p class="pf-span-top">
                                <span class="pf-year-lbl">Fellowship year</span>1965–66
                            </p>
                            <p class="pf-name">
                                <a class="pf-name-link" href="https://mqa-internet.doh.state.fl.us/MQASearchServices/HealthCareProviders/PractitionerProfilePrintFriendly?LicInd=5867&amp;ProCde=1501" target="_blank" rel="noopener">Mark S. Feldman, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                            </p>
                            <!-- 
                            <p class="pf-memoriam">
                                In memoriam (YEAR)
                            </p>
                             -->
                            <p class="pf-summary">
                                Founding Director, Fort Lauderdale Eye Institute
                            </p>
                        </div>
                        <p>
                            <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Mark S. Feldman, MD">▾</button>
                        </p>
                        <div class="pf-more">
                            <p class="pf-country">
                                <strong>Country of origin</strong>USA
                            </p>
                            <p class="pf-sec-head pf-sec-edu">
                                Education and training
                            </p>
                            <ul class="pf-list pf-edu">
                                <li data-list-item-id="e893b17041c9af21347e5706be21960ff">
                                    University of Miami Leonard M. Miller School of Medicine
                                </li>
                            </ul>
                            <!-- 
                            <p class="pf-sec-head pf-sec-roles">
                                Selected roles
                            </p>
                                                 
                            <ul class="pf-list pf-roles">
                                <li>
                                    ADD ROLE HERE
                                </li>
                            </ul>
                             -->
                            <p class="pf-sec-head pf-sec-pubs">
                                Publications with Proctor
                            </p>
                            <ul class="pf-list pf-pubs">
                                <li data-list-item-id="e63868ffac87895edc38dd6a7cfeaf1a3">
                                    (blank)
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- ==== PETER L. DAVIS  |  1965-66 ==== -->
                    <div class="pf-fellow-card">
                        <div class="pf-fellow-photo">
                            <img src="https://nathes690.github.io/proctor-fellows/img/davis-peter.webp" alt="Peter L. Davis, MD">
                        </div>
                        <div class="pf-body">
                            <p class="pf-span-top">
                                <span class="pf-year-lbl">Fellowship year</span>1965–66
                            </p>
                            <p class="pf-name">
                                Peter L. Davis, MD
                            </p>
                            <p class="pf-memoriam">
                                In memoriam (2022)
                            </p>
                            <p class="pf-summary">
                                Dr. Davis is internationally recognized for revolutionizing the clinical understanding of cataract surgery. He was among the first to scientifically prove that cataracts are not mechanically "cut" or "jackhammered" away by ultrasonic needles during phacoemulsification.Acoustic Cavitation Discovery: Through his landmark research, he demonstrated that the extraction process actually relies on acoustic cavitation—the generation of microscopic bubbles that rapidly collapse, producing powerful microscopic shockwaves that emulsify the cataract.Author &amp; Industry Impact: He published foundational papers on Phaco Transducers and Corneal Thermal Dynamics and wrote universally cited literature, such as the comprehensive chapter Cavitating Microbubbles Create Shock Waves that Emulsify Cataract, which fundamentally changed how ophthalmic surgeons manage thermal energy and mechanical force inside the human eye.
                            </p>
                        </div>
                        <p>
                            <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Peter L. Davis, MD">▾</button>
                        </p>
                        <div class="pf-more">
                            <p class="pf-country">
                                <strong>Country of origin</strong>Canada
                            </p>
                            <p class="pf-sec-head pf-sec-edu">
                                Education and training
                            </p>
                            <ul class="pf-list pf-edu">
                                <li data-list-item-id="e175fd50c237bf959934b2465f411b114">
                                    Medical Degree (MD): Completed his medical education and core surgical qualifications in Canada.Ophthalmology Residency: Completed his postgraduate residency training in ophthalmology at a major Canadian medical institution, specializing in advanced microsurgical techniques
                                </li>
                            </ul>
                            <!-- 
                            <p class="pf-sec-head pf-sec-roles">
                                Selected roles
                            </p>
                                                 
                            <ul class="pf-list pf-roles">
                                <li>
                                    ADD ROLE HERE
                                </li>
                            </ul>
                             --><!-- 
                            <p class="pf-sec-head pf-sec-pubs">
                                Publications with Proctor
                            </p>
                                                 
                            <ul class="pf-list pf-pubs">
                                <li>
                                    <a href="URL">TITLE</a>
                                </li>
                            </ul>
                             -->
                        </div>
                    </div>
                    <!-- ==== THOMAS RODMAN WOOD  |  1965-66 ==== -->
                    <div class="pf-fellow-card">
                        <div class="pf-fellow-photo">
                            <img src="https://nathes690.github.io/proctor-fellows/img/wood-thomas.webp" alt="THOMAS RODMAN WOOD">
                        </div>
                        <div class="pf-body">
                            <p class="pf-span-top">
                                <span class="pf-year-lbl">Fellowship year</span>1965–66
                            </p>
                            <p class="pf-name">
                                Thomas Rodman Wood, MD
                            </p>
                            <p class="pf-memoriam">
                                In memoriam (2023)
                            </p>
                            <p class="pf-summary">
                                accomplished American ophthalmologist and retired military Colonel who practiced eye care for over six decades.
                            </p>
                        </div>
                        <p>
                            <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Thomas Rodman Wood, MD">▾</button>
                        </p>
                        <div class="pf-more">
                            <p class="pf-country">
                                &nbsp;
                            </p>
                            <p class="pf-sec-head pf-sec-edu">
                                Education and training
                            </p>
                            <ul class="pf-list pf-edu">
                                <li data-list-item-id="ee39cd1b01655760e9595cb24ba1dcf5a">
                                    Antioch College.Medical Degree (MD): Graduated from the Case Western Reserve University School of Medicine in Ohio
                                </li>
                            </ul>
                            <!-- 
                            <p class="pf-sec-head pf-sec-roles">
                                Selected roles
                            </p>
                                                 
                            <ul class="pf-list pf-roles">
                                <li>
                                    ADD ROLE HERE
                                </li>
                            </ul>
                             -->
                            <p class="pf-sec-head pf-sec-pubs">
                                Publications with Proctor
                            </p>
                            <ul class="pf-list pf-pubs">
                                <li data-list-item-id="e1d9fe2206e02dfa9c1ea3e2f22f46c08">
                                    Experimental Inclusion Conjunctivitis in Man III. Keratitis and Other Complications Chandler Dawson, MD; T. Rodman Wood, MD; Lawrence Rose, MD et al Author Affiliations San Francisco From the Francis I. Proctor Foundation for Research in Ophthalmology, and the Department of Microbiology, University of California San Francisco Medical Center, San Francisco.
                                </li>
                                <li data-list-item-id="e5ac7b839d3266204ce721bd6b814c8e5">
                                    <a href="https://jamanetwork.com/journals/jamaophthalmology/article-abstract/628914" target="_blank" rel="noopener">jamanetwork.com/journals/jamaophthalmology/article-abstract/628914</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 1965–66 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
                </div>
                <p class="pf-year-head">
                    1964–65
                </p>
                <div class="pf-fellows-grid">
                    <!-- ==== ANNE-CATHERINE MARTENET  |  1964-65 ==== -->
                    <div class="pf-fellow-card">
                        <div class="pf-fellow-photo">
                            <img src="https://nathes690.github.io/proctor-fellows/img/martenet-anne-catherine.jpg" alt="Anne-Catherine Martenet, MD">
                        </div>
                        <div class="pf-body">
                            <p class="pf-span-top">
                                <span class="pf-year-lbl">Fellowship year</span>1964–65
                            </p>
                            <p class="pf-name">
                                <a class="pf-name-link" href="https://jamanetwork.com/journals/jamaophthalmology/article-abstract/628640" target="_blank" rel="noopener">Anne-Catherine Martenet, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                            </p>
                            <!-- 
                            <p class="pf-memoriam">
                                In memoriam (YEAR)
                            </p>
                             -->
                            <p class="pf-summary">
                                University Eye Clinic, Zurich, Switzerland
                            </p>
                        </div>
                        <p>
                            <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Anne-Catherine Martenet, MD">▾</button>
                        </p>
                        <div class="pf-more">
                            <p class="pf-country">
                                <strong>Country of origin</strong>Switzerland
                            </p>
                            <p class="pf-sec-head pf-sec-edu">
                                Education and training
                            </p>
                            <ul class="pf-list pf-edu">
                                <li data-list-item-id="eff71f746e09c9cc2c59f186bd431c2af">
                                    She was one of the first female professors of medicine at the University of Zurich, breaking significant gender barriers in Swiss academia
                                </li>
                            </ul>
                            <!-- 
                            <p class="pf-sec-head pf-sec-roles">
                                Selected roles
                            </p>
                                                 
                            <ul class="pf-list pf-roles">
                                <li>
                                    ADD ROLE HERE
                                </li>
                            </ul>
                             -->
                            <p class="pf-sec-head pf-sec-pubs">
                                Publications with Proctor
                            </p>
                            <ul class="pf-list pf-pubs">
                                <li data-list-item-id="edb36073ebd8a1d36461c08d728a57026">
                                    <a href="https://jamanetwork.com/journals/jamaophthalmology/article-abstract/628640" target="_blank" rel="noopener">Herpes Simplex Uveitis: An Experimental Study</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 1964–65 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
                </div>
                <p class="pf-year-head">
                    1962
                </p>
                <div class="pf-fellows-grid">
                    <!-- ==== OLGA LITRICIN  |  1962 ==== -->
                    <div class="pf-fellow-card">
                        <div class="pf-fellow-photo">
                            <img src="https://nathes690.github.io/proctor-fellows/img/litricin-olga.jpg" alt="Olga Litricin, MD">
                        </div>
                        <div class="pf-body">
                            <p class="pf-span-top">
                                <span class="pf-year-lbl">Fellowship year</span>1962
                            </p>
                            <p class="pf-name">
                                <a class="pf-name-link" href="https://iris.who.int/server/api/core/bitstreams/68b91d93-2c36-499a-bc5e-5abf243a8639/content" target="_blank" rel="noopener">Olga Litricin, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                            </p>
                            <!-- 
                            <p class="pf-memoriam">
                                In memoriam (YEAR)
                            </p>
                             -->
                            <p class="pf-summary">
                                Textbook Editor: Co-edited and authored the primary, definitive academic textbook on Ophthalmology used by medical students across Yugoslavia (alongside Milan Blagojević).Global Public Health: Served on elite international expert committees, including the World Health Organization (WHO) Technical Report cohorts alongside Proctor Foundation director Phillips Thygeson to standardize global infectious eye disease management.Scientific Leadership: Organized major international ophthalmic pathology meetings in Belgrade and published extensive clinical case series in world-renowned journals like the American Journal of Ophthalmology and the British Journal of Ophthalmology.
                            </p>
                        </div>
                        <p>
                            <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Olga Litricin, MD">▾</button>
                        </p>
                        <div class="pf-more">
                            <p class="pf-country">
                                <strong>Country of origin</strong>Serbia (Yugoslavia)
                            </p>
                            <p class="pf-sec-head pf-sec-edu">
                                Education and training
                            </p>
                            <ul class="pf-list pf-edu">
                                <li data-list-item-id="eafaf55bceebc0467fcf6a81100cba7da">
                                    Graduated with her medical degree and completed her specialty residency training in ophthalmology at the University Eye Clinic in Belgrade (Yugoslavia / Serbia)
                                </li>
                            </ul>
                            <!-- 
                            <p class="pf-sec-head pf-sec-roles">
                                Selected roles
                            </p>
                                                 
                            <ul class="pf-list pf-roles">
                                <li>
                                    ADD ROLE HERE
                                </li>
                            </ul>
                             -->
                            <p class="pf-sec-head pf-sec-pubs">
                                Publications with Proctor
                            </p>
                            <ul class="pf-list pf-pubs">
                                <li data-list-item-id="eceb4ab9ce3a1d0376e5d717e19167469">
                                    (blank)
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- ==== YUKIFUMI NAKAIZUMI  |  1962 ==== -->
                    <div class="pf-fellow-card">
                        <div class="pf-fellow-photo">
                            <img src="https://nathes690.github.io/proctor-fellows/img/nakaizumi-yukifumi.png" alt="Yukifumi Nakaizumi, MD">
                        </div>
                        <div class="pf-body">
                            <p class="pf-span-top">
                                <span class="pf-year-lbl">Fellowship year</span>1962
                            </p>
                            <p class="pf-name">
                                <a class="pf-name-link" href="https://histoph.com/wp-content/uploads/2015/03/Maissiat-Nakaizumi-Y-70-145-1.pdf" target="_blank" rel="noopener">Yukifumi Nakaizumi, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                            </p>
                            <!-- 
                            <p class="pf-memoriam">
                                In memoriam (YEAR)
                            </p>
                             -->
                            <p class="pf-summary">
                                Board Member of the Trustees of the Kenikai Institute (顕微会 日本眼科学史研究所)
                            </p>
                        </div>
                        <p>
                            <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Yukifumi Nakaizumi, MD">▾</button>
                        </p>
                        <div class="pf-more">
                            <p class="pf-native">
                                <span class="pf-script-lbl">Chinese</span><span lang="zh">中泉行文</span>
                            </p>
                            <p class="pf-country">
                                <strong>Country of origin</strong>Japan
                            </p>
                            <p class="pf-sec-head pf-sec-edu">
                                Education and training
                            </p>
                            <ul class="pf-list pf-edu">
                                <li data-list-item-id="efd837aad6c51b5fd1e748415f0ea02a6">
                                    1950s: Graduated with a medical degree and later earned his Doctor of Philosophy (PhD) in Medical Sciences from the University of Tokyo. His doctoral research centered heavily on the electron microscopy study of the cornea.1961: Traveled to the United States as one of the earlier generations of international research fellows to train at the University of California, San Francisco (UCSF) Francis I. Proctor Foundation for Research in Ophthalmology, under the sponsorship and mentorship of Dr. Samuel J. Kimura
                                </li>
                            </ul>
                            <!-- 
                            <p class="pf-sec-head pf-sec-roles">
                                Selected roles
                            </p>
                                                 
                            <ul class="pf-list pf-roles">
                                <li>
                                    ADD ROLE HERE
                                </li>
                            </ul>
                             -->
                            <p class="pf-sec-head pf-sec-pubs">
                                Publications with Proctor
                            </p>
                            <ul class="pf-list pf-pubs">
                                <li data-list-item-id="ed4de2cafad2d12cc3db430c7567097a4">
                                    <a href="https://jamanetwork.com/journals/jamaophthalmology/article-abstract/627717" target="_blank" rel="noopener">The Ultrastructure of Bruch's Membrane, III. The Macular Area of the Human Eye</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 1962 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
                </div>
                <p class="pf-year-head">
                    1962–63
                </p>
                <div class="pf-fellows-grid">
                    <!-- ==== THOMAS H. PETTIT  |  1962-63 ==== -->
                    <div class="pf-fellow-card">
                        <div class="pf-fellow-photo">
                            <img src="https://nathes690.github.io/proctor-fellows/img/pettit-thomas.jpg" alt="Thomas H. Pettit, MD">
                        </div>
                        <div class="pf-body">
                            <p class="pf-span-top">
                                <span class="pf-year-lbl">Fellowship year</span>1962–63
                            </p>
                            <p class="pf-name">
                                <a class="pf-name-link" href="https://www.sphsaa.org/class_profile.cfm?member_id=1355202" target="_blank" rel="noopener">Thomas H. Pettit, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                            </p>
                            <p class="pf-memoriam">
                                In memoriam (2005)
                            </p>
                            <p class="pf-summary">
                                Historical Position Summary:Chief of the Cornea Division: Served as the inaugural Chief of the Cornea Division at UCLA, playing a monumental role in shaping the clinical care and surgical standards for corneal transplantation.Professor of Ophthalmology: Dedicated over three decades of academic service as a full professor and highly revered clinical teacher within the UCLA Department of Ophthalmology and the Jules Stein Eye Institute.Career Highlights:1963: Joined the founding clinical faculty of the University of California, Los Angeles (UCLA) right after completing his Proctor fellowship.Academic Legacy: Universally recognized for his mentorship, he nurtured generations of cornea fellows and residents. In honor of his contributions to ophthalmic science, UCLA holds the annual Thomas H. Pettit Lecture during its major academic seminars.Clinical Impact: He was a renowned expert on the transition to modern outpatient cataract extraction, corneal immunology, and corneal surgical refinements
                            </p>
                        </div>
                        <p>
                            <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Thomas H. Pettit, MD">▾</button>
                        </p>
                        <div class="pf-more">
                            <p class="pf-country">
                                <strong>Country of origin</strong>USA
                            </p>
                            <p class="pf-sec-head pf-sec-edu">
                                Education and training
                            </p>
                            <ul class="pf-list pf-edu">
                                <li data-list-item-id="ee0f4c7d2e00918e6bfa3175aeb7aa795">
                                    1949: Graduated with his undergraduate degree from the University of California, Los Angeles (UCLA).1955: Earned his Medical Degree (MD) from the University of Pennsylvania Medical School, graduating with the prestigious Spencer Morris Prize for academic excellence.1956–1958: Served as a U.S. Navy Medical Officer, stationed directly with the Marine Corps at Camp Pendleton, California.Late 1950s: Completed his residency training in Ophthalmology at Barnes Hospital, Washington University in St. Louis, Missouri.1962: Completed a one-year specialized subspecialty fellowship in cornea and external ocular disease in San Francisco at the UCSF Francis I. Proctor Foundation for Research in Ophthalmology
                                </li>
                            </ul>
                            <!-- 
                            <p class="pf-sec-head pf-sec-roles">
                                Selected roles
                            </p>
                                                 
                            <ul class="pf-list pf-roles">
                                <li>
                                    ADD ROLE HERE
                                </li>
                            </ul>
                             -->
                            <p class="pf-sec-head pf-sec-pubs">
                                Publications with Proctor
                            </p>
                            <ul class="pf-list pf-pubs">
                                <li data-list-item-id="efcb69f9efbc18fb7e3e7cec99032a165">
                                    <a href="https://pubmed.ncbi.nlm.nih.gov/14149757/" target="_blank" rel="noopener">The Fluorescent Antibody Technique in Diagnosis of Herpes Simplex Keratitis</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 1962–63 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
                </div>
                <p class="pf-year-head">
                    1961–63
                </p>
                <div class="pf-fellows-grid">
                    <!-- ==== MARTIN E. CORWIN  |  1961-63 ==== -->
                    <div class="pf-fellow-card">
                        <div class="pf-fellow-photo">
                            <img src="https://nathes690.github.io/proctor-fellows/img/corwin-martin.jpg" alt="Martin E. Corwin, MD">
                        </div>
                        <div class="pf-body">
                            <p class="pf-span-top">
                                <span class="pf-year-lbl">Fellowship year</span>1961–63
                            </p>
                            <p class="pf-name">
                                Martin E. Corwin, MD
                            </p>
                            <p class="pf-memoriam">
                                In memoriam (2017)
                            </p>
                            <p class="pf-summary">
                                Ophthalmologist; Research Fellow, Proctor Foundation, UCSF; Private Practice, New Jersey
                            </p>
                        </div>
                        <p>
                            <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Martin E. Corwin, MD">▾</button>
                        </p>
                        <div class="pf-more">
                            <p class="pf-country">
                                <strong>Country of origin</strong>USA
                            </p>
                            <p class="pf-sec-head pf-sec-edu">
                                Education and training
                            </p>
                            <ul class="pf-list pf-edu">
                                <li data-list-item-id="e30221301a74c0246f695d0ee4131a0ca">
                                    State University of New York (SUNY) Downstate Medical Center College of Medicine
                                </li>
                            </ul>
                            <!-- 
                            <p class="pf-sec-head pf-sec-roles">
                                Selected roles
                            </p>
                                                 
                            <ul class="pf-list pf-roles">
                                <li>
                                    ADD ROLE HERE
                                </li>
                            </ul>
                             -->
                            <p class="pf-sec-head pf-sec-pubs">
                                Publications with Proctor
                            </p>
                            <ul class="pf-list pf-pubs">
                                <li data-list-item-id="eaa7a49b506f776c8f42cbf008dd5954f">
                                    <a href="https://www.sciencedirect.com/science/article/pii/0002939463926722" target="_blank" rel="noopener">A Double-Blind Study of the Effect of 5-IODO-2'-Deoxyuridine on Experimental Herpes Simplex Keratitis</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 1961–63 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
                </div>
                <p class="pf-year-head">
                    1960–62
                </p>
                <div class="pf-fellows-grid">
                    <!-- ==== CARL H. MORDHORST  |  1960-62 ==== -->
                    <div class="pf-fellow-card">
                        <div class="pf-fellow-photo is-empty">
                            no photo<br>
                            on file
                        </div>
                        <div class="pf-body">
                            <p class="pf-span-top">
                                <span class="pf-year-lbl">Fellowship year</span>1960–62
                            </p>
                            <p class="pf-name">
                                <a class="pf-name-link" href="https://www.doximity.com/pub/martin-corwin-md" target="_blank" rel="noopener">Carl H. Mordhorst, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                            </p>
                            <p class="pf-memoriam">
                                In memoriam (2003)
                            </p>
                            <p class="pf-summary">
                                Danish physician, virologist, and epidemiologist; contributions to infectious disease, ophthalmology, and vaccine research (mid-to-late 20th century)
                            </p>
                        </div>
                        <p>
                            <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Carl H. Mordhorst, MD">▾</button>
                        </p>
                        <div class="pf-more">
                            <p class="pf-country">
                                <strong>Country of origin</strong>Denmark
                            </p>
                            <p class="pf-sec-head pf-sec-edu">
                                Education and training
                            </p>
                            <ul class="pf-list pf-edu">
                                <li data-list-item-id="e80d5e93aee850879240ffd92b93668c6">
                                    University of Copenhagen
                                </li>
                            </ul>
                            <!-- 
                            <p class="pf-sec-head pf-sec-roles">
                                Selected roles
                            </p>
                                                 
                            <ul class="pf-list pf-roles">
                                <li>
                                    ADD ROLE HERE
                                </li>
                            </ul>
                             -->
                            <p class="pf-sec-head pf-sec-pubs">
                                Publications with Proctor
                            </p>
                            <ul class="pf-list pf-pubs">
                                <li data-list-item-id="e1f31dd3e7a691574f9e8dde4ef9c4508">
                                    <a href="https://www.sciencedirect.com/science/article/pii/0002939462933986" target="_blank" rel="noopener">Quantitation of the Infectivity for Cynomolgus Monkeys of Egg-Grown Inclusion Conjunctivitis Virus…</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- ==== VICTOR M. DIAZ-BONNET  |  1960-62 ==== -->
                    <div class="pf-fellow-card">
                        <div class="pf-fellow-photo">
                            <img src="https://nathes690.github.io/proctor-fellows/img/diaz-bonnet-victor.jpg" alt="Victor M. Diaz-Bonnet, MD">
                        </div>
                        <div class="pf-body">
                            <p class="pf-span-top">
                                <span class="pf-year-lbl">Fellowship year</span>1960–62
                            </p>
                            <p class="pf-name">
                                <a class="pf-name-link" href="https://www.famadeportesrp.org/exaltados/perfiles/1995/victor.html" target="_blank" rel="noopener">Victor M. Diaz-Bonnet, MD<span class="pf-ext" aria-hidden="true">↗</span></a>
                            </p>
                            <p class="pf-memoriam">
                                In memoriam (2014)
                            </p>
                            <p class="pf-summary">
                                Ophthalmologist; Professor, School of Medicine, and private practice, Puerto Rico
                            </p>
                        </div>
                        <p>
                            <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Victor M. Diaz-Bonnet, MD">▾</button>
                        </p>
                        <div class="pf-more">
                            <p class="pf-country">
                                <strong>Country of origin</strong>Puerto Rico
                            </p>
                            <p class="pf-sec-head pf-sec-edu">
                                Education and training
                            </p>
                            <ul class="pf-list pf-edu">
                                <li data-list-item-id="edd3bb8e8685b10452d9b0c8d718cbc4d">
                                    University of Puerto Rico
                                </li>
                                <li data-list-item-id="ed3a8af67a623cdd6a0bdc707aff237ec">
                                    medical degree, Madrid, Spain
                                </li>
                                <li data-list-item-id="e0026ae468406898ee117507dd6d84e31">
                                    ophthalmology training in Puerto Rico and San Francisco (Proctor Foundation, UCSF)
                                </li>
                            </ul>
                            <!-- 
                            <p class="pf-sec-head pf-sec-roles">
                                Selected roles
                            </p>
                                                 
                            <ul class="pf-list pf-roles">
                                <li>
                                    ADD ROLE HERE
                                </li>
                            </ul>
                             -->
                            <p class="pf-sec-head pf-sec-pubs">
                                Publications with Proctor
                            </p>
                            <ul class="pf-list pf-pubs">
                                <li data-list-item-id="eec55668a7528d17fc5f8854f9d210ef1">
                                    <a href="https://www.sciencedirect.com/science/article/pii/0002939461917809" target="_blank" rel="noopener">The Effect of Corticosteroid Hormones on Experimental Herpes Simplex Keratitis…</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 1960–62 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
                </div>
            </div>
            <div class="pf-decade" id="d1950">
                <div class="pf-dec-head">
                    <h2>
                        1950s
                    </h2>
                    <p>
                        <span class="pf-dec-count">1 fellows</span>
                    </p>
                </div>
                <p class="pf-year-head">
                    1957–1959
                </p>
                <div class="pf-fellows-grid">
                    <!-- ==== ROBERT Y. BARISHAK  |  1957-1959 ==== -->
                    <div class="pf-fellow-card">
                        <div class="pf-fellow-photo">
                            <img src="https://nathes690.github.io/proctor-fellows/img/barishak-robert.jpg" alt="Robert Y. Barishak, MD">
                        </div>
                        <div class="pf-body">
                            <p class="pf-span-top">
                                <span class="pf-year-lbl">Fellowship year</span>1957–1959
                            </p>
                            <p class="pf-name">
                                Robert Y. Barishak, MD
                            </p>
                            <p class="pf-memoriam">
                                In memoriam (2018)
                            </p>
                            <p class="pf-summary">
                                Ophthalmologist, ocular pathologist, researcher and professor. Former Head of Ophthalmology, Assaf Harofeh Hospital; former Head of Ophthalmology, Sackler Faculty of Medicine, Tel Aviv University; Head of Animal Ophthalmology, Beit Dagan Veterinary School (1990–1994)
                            </p>
                        </div>
                        <p>
                            <button class="pf-toggle" type="button" aria-expanded="false" aria-label="Show more about Robert Y. Barishak, MD">▾</button>
                        </p>
                        <div class="pf-more">
                            <p class="pf-native">
                                <span class="pf-script-lbl">Hebrew</span><span lang="he" dir="rtl">פרופ' יום טוב ברישק</span>
                            </p>
                            <p class="pf-native">
                                <span class="pf-script-lbl">Turkish</span><span lang="tr">Barişak</span>
                            </p>
                            <p class="pf-country">
                                <strong>Country of origin</strong>Turkey (Istanbul)
                            </p>
                            <p class="pf-sec-head pf-sec-edu">
                                Education and training
                            </p>
                            <ul class="pf-list pf-edu">
                                <li data-list-item-id="e849acade2ef478be3ec36839f5dba18b">
                                    St. Benoit French High School, Istanbul
                                </li>
                                <li data-list-item-id="eedddac230f0b196256b9495036ed7a0a">
                                    medical degree, Istanbul University
                                </li>
                                <li data-list-item-id="ec510d51b78ba8b129bdf617cc779f137">
                                    ophthalmology residency, Ankara University &amp; Istanbul University Dept. of Ophthalmology
                                </li>
                                <li data-list-item-id="e9def4f1fa2420d798ff68be9de514a04">
                                    visiting researcher in ocular pathology at UCSF, 1957
                                </li>
                                <li data-list-item-id="e40c40658c9f233a044a52b2ba50376fb">
                                    later research at Royal Danish Hospital, Copenhagen and Hadassah University Hospital, Jerusalem
                                </li>
                            </ul>
                            <!-- 
                            <p class="pf-sec-head pf-sec-roles">
                                Selected roles
                            </p>
                                                 
                            <ul class="pf-list pf-roles">
                                <li>
                                    ADD ROLE HERE
                                </li>
                            </ul>
                             -->
                            <p class="pf-sec-head pf-sec-pubs">
                                Publications with Proctor
                            </p>
                            <ul class="pf-list pf-pubs">
                                <li data-list-item-id="e1a3ee8108fad384a2fd16f083f0cb279">
                                    <a href="https://journals.healio.com/doi/10.3928/0191-3913-19770501-12" target="_blank" rel="noopener">Congenital, Bilateral, Epithelial Ingrowth Into the Anterior Chamber</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- +++++++++++++++++++++++++++++++++++++++++++ --><!-- ADD NEW 1957–1959 CARDS BELOW THIS LINE --><!-- +++++++++++++++++++++++++++++++++++++++++++ -->
                </div>
            </div>
            <div class="pf-decade" id="dunk">
                <div class="pf-dec-head">
                    <h2>
                        Fellowship year to be confirmed
                    </h2>
                    <p>
                        <span class="pf-dec-count">1</span>
                    </p>
                </div>
                <div class="pf-fellows-grid">
                    <!-- 
                    <p class="pf-sec-head pf-sec-edu">
                        Education and training
                    </p>
                                         
                    <ul class="pf-list pf-edu">
                        <li>
                            ADD TRAINING HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-roles">
                        Selected roles
                    </p>
                                         
                    <ul class="pf-list pf-roles">
                        <li>
                            ADD ROLE HERE
                        </li>
                    </ul>
                     --><!-- 
                    <p class="pf-sec-head pf-sec-pubs">
                        Publications with Proctor
                    </p>
                                         
                    <ul class="pf-list pf-pubs">
                        <li>
                            <a href="URL">TITLE</a>
                        </li>
                    </ul>
                     -->&nbsp;
                </div>
            </div>
        </div>
    </div>
    <div class="pf-empty pf-hidden">
        <p>
            No fellows match that search.
        </p>
        <p>
            Try a shorter term.
        </p>
    </div>
</div>
<script>
(function(){
  var root=document.getElementById("pf-root"); if(!root) return;
  var cards=Array.prototype.slice.call(root.querySelectorAll(".pf-fellow-card"));
  var blocks=Array.prototype.slice.call(root.querySelectorAll(".pf-decade"));
  var yearHeads=Array.prototype.slice.call(root.querySelectorAll(".pf-year-head"));
  var elQ=root.querySelector("#pf-q"), elCount=root.querySelector(".pf-count"),
      elAll=root.querySelector(".pf-allbtn"), elNone=root.querySelector(".pf-empty");
  cards.forEach(function(c){
    c._blob=c.textContent.replace(/\s+/g," ").toLowerCase();
    var sum=c.querySelector(".pf-summary"), sp=c.querySelector(".pf-toggle-spacer");
    if(sum && sum.textContent.trim() && sp){
      var b=document.createElement("button");
      b.type="button"; b.className="pf-toggle"; b.setAttribute("aria-expanded","false");
      b.setAttribute("aria-label","Show more"); b.innerHTML="&#9662;";
      sp.parentNode.replaceChild(b,sp);
    }
    c._more=c.querySelector(".pf-more");
  });
  function open(c,on){
    c.classList.toggle("is-open",on);
    var b=c.querySelector(".pf-toggle");
    if(b) b.setAttribute("aria-expanded",on?"true":"false");
  }
  root.addEventListener("click",function(ev){
    var b=ev.target.closest(".pf-toggle");
    if(b){ var c=b.closest(".pf-fellow-card"); open(c,!c.classList.contains("is-open")); return; }
    if(ev.target.closest(".pf-allbtn")){
      var anyClosed=cards.some(function(c){ return c._more && !c.classList.contains("is-open"); });
      cards.forEach(function(c){ if(c._more) open(c,anyClosed); });
      elAll.textContent=anyClosed?"Collapse all":"Expand all";
      return;
    }
    // clicking the card body also opens it, but never steal a link click
    var card=ev.target.closest(".pf-fellow-card");
    if(card && card._more && !ev.target.closest("a")){
      open(card,!card.classList.contains("is-open"));
    }
  });
  function render(){
    var q=elQ.value.trim().toLowerCase();
    var terms=q?q.split(/\s+/).filter(Boolean):[];
    var shown=0;
    cards.forEach(function(c){
      var ok=terms.every(function(t){ return c._blob.indexOf(t)!==-1; });
      c.classList.toggle("pf-hidden",!ok);
      if(!ok){ open(c,false); return; }   // filtered-out cards close behind the scenes
      if(ok){
        shown++;
        // if the match is in hidden detail, open the card so it is visible
        if(terms.length && c._more){
          var head=c.querySelector(".pf-body").textContent.toLowerCase();
          var inDetail=terms.some(function(t){ return head.indexOf(t)===-1; });
          open(c,inDetail);
        } else if(!terms.length){ open(c,false); }
      }
    });
    elCount.innerHTML=terms.length
      ? "Showing \x3Cstrong>"+shown+"\x3C/strong> of "+cards.length+" fellows"
      : "Showing all \x3Cstrong>"+cards.length+"\x3C/strong> fellows";
    // hide a year or decade heading when nothing under it survives the filter
    yearHeads.forEach(function(h){
      var any=false,n=h.nextElementSibling;
      if(n) any=Array.prototype.some.call(n.querySelectorAll(".pf-fellow-card"),
        function(c){return !c.classList.contains("pf-hidden");});
      h.classList.toggle("pf-hidden",!any);
      if(n) n.classList.toggle("pf-hidden",!any);
    });
    blocks.forEach(function(b){
      var any=Array.prototype.some.call(b.querySelectorAll(".pf-fellow-card"),
        function(c){return !c.classList.contains("pf-hidden");});
      b.classList.toggle("pf-hidden",!any);
    });
    elNone.classList.toggle("pf-hidden",shown!==0);
    elAll.textContent="Expand all";
  }
  var t=null;
  elQ.addEventListener("input",function(){ clearTimeout(t); t=setTimeout(render,140); });
  render();
})();
</script><!-- =================================================================== --><!-- BLANK CARD TEMPLATE                                                 --><!-- Copy everything between TEMPLATE START and TEMPLATE END, paste it   --><!-- above an "ADD NEW ... CARDS BELOW THIS LINE" marker, then type over --><!-- the CAPITALS. Delete any line you do not need.                      --><!--                                                                     --><!-- Photo: put just the filename. No photo yet? delete the img line and --><!-- use  class="pf-fellow-photo is-empty"  with the text no photo.      --><!-- Add your own marker comment above the card AFTER pasting, never     --><!-- while it is still inside this comment.                              --><!-- =================================================================== --><!-- ==== TEMPLATE START ====
            
<div class="pf-fellow-card">
                  
    <div class="pf-fellow-photo">
        <img src="https://nathes690.github.io/proctor-fellows/img/LASTNAME-FIRSTNAME.webp" alt="FULL NAME, MD">
    </div>
                  
    <div class="pf-body">
                        
        <p class="pf-span-top">
            <span class="pf-year-lbl">Fellowship year</span>2026&ndash;27
        </p>
                        
        <p class="pf-name">
            <a class="pf-name-link" href="PROFILE URL" target="_blank" rel="noopener">FULL NAME, MD<span class="pf-ext" aria-hidden="true">&#8599;</span></a>
        </p>
                        
        <p class="pf-summary">
            ONE PARAGRAPH CAREER SUMMARY
        </p>
                      
    </div>
                  <button type="button" class="pf-toggle" aria-expanded="false" aria-label="Show more">&#9662;</button>
                  
    <div class="pf-more">
                        
        <p class="pf-country">
            <strong>Country of origin</strong>COUNTRY
        </p>
                        
        <p class="pf-sec-head pf-sec-edu">
            Education and training
        </p>
                        
        <ul class="pf-list pf-edu">
            <li>
                MEDICAL SCHOOL, MD
            </li>
            <li>
                HOSPITAL, Residency
            </li>
        </ul>
                        
        <p class="pf-sec-head pf-sec-pubs">
            Publications with Proctor
        </p>
                        
        <ul class="pf-list pf-pubs">
            <li>
                <a href="URL">TITLE</a>
            </li>
        </ul>
                      
    </div>
                
</div>
     ==== TEMPLATE END ==== -->
