<!-- =================================================================== -->
<!-- PROCTOR - RESEARCH FUNDING  (CKEditor-hardened build)              -->
<!--                                                                     -->
<!-- Same hardening as the trial finder: every "<" in the script is      -->
<!-- written \x3C and every entity as a \u escape, so CKEditor has no    -->
<!-- tag-like text to rewrite. Do NOT tidy these back into < and &.      -->
<!--                                                                     -->
<!-- INSTALL (Drupal):                                                   -->
<!--   1. Set text format to Full HTML FIRST.                            -->
<!--   2. Source view. Select all, delete, paste this file.              -->
<!--   3. Save WITHOUT switching to the visual editor.                   -->
<!--                                                                     -->
<!-- ADDING A GRANT: copy one record between DATA-START and DATA-END     -->
<!-- and overwrite the values. Fields:                                   -->
<!--   ttl  project title                                                -->
<!--   pi   [{"n":name,"u":profile URL or "","r":role}]                  -->
<!--   ag   funder shown as a filter chip: NIH, CDC, VA, Gates, Other    -->
<!--   awd  award number, e.g. "U01 EY038042"                            -->
<!--   st   ACTIVE or COMPLETED                                          -->
<!--   sd / cd   start and end year                                      -->
<!--   note optional one-line clarification                              -->
<!--                                                                     -->
<!-- THE REPORTER LINK IS AUTOMATIC. Any grant with ag = NIH links to    -->
<!-- reporter.nih.gov using its award number. Do not paste URLs.         -->
<!-- Non-NIH awards (VA, CDC direct) render as plain text, since         -->
<!-- RePORTER does not hold them.                                        -->
<!-- =================================================================== -->

<div id="proctor-grants-app">Loading research funding...</div>

<script>
/* ============ DATA-START ============ */
var PROCTOR_GRANTS = [

{"ttl":"AMR Monitoring to Improve Child's Health and Mortality","pi":[{"n":"Thomas M. Lietman, MD","u":"https://proctor.ucsf.edu/director","r":"Co-Principal Investigator"},{"n":"Thuy Doan, MD, PhD","u":"https://proctor.ucsf.edu/thuy-doan-md-phd","r":"Investigator"}],"ag":"NIH","awd":"R01 AI197222","area":"Child health","st":"ACTIVE","sd":"2026","cd":"2031","note":""},

{"ttl":"Adalimumab Dose Adjustment for Pediatric Uveitis Treatment (ADAPT) Trial","pi":[{"n":"Nisha Acharya, MD, MS","u":"https://proctor.ucsf.edu/associate-director","r":"Principal Investigator"}],"ag":"NIH","awd":"UG1 EY038172","area":"Uveitis","st":"ACTIVE","sd":"2026","cd":"2031","note":""},

{"ttl":"Early antiviral treatment to prevent viral persistence and inflammation as drivers of Long COVID: a proof-of-concept mechanistic trial","pi":[{"n":"Dan Kelly, MD, MPH","u":"","r":"Principal Investigator"}],"ag":"NIH","awd":"U01 AI192043","area":"Emerging infection","st":"ACTIVE","sd":"2026","cd":"2031","note":"Proof-of-concept mechanistic trial"},

{"ttl":"Phage Immunoprecipitation Sequencing (PhIP-Seq) to Identify Autoantibodies from Participants from the Sjogren's International Collaborative Clinical Alliance (SICCA)","pi":[{"n":"John A. Gonzales, MD","u":"https://proctor.ucsf.edu/john-gonzales-md-0","r":"Principal Investigator"}],"ag":"NIH","awd":"R21 EY037337","area":"Uveitis","st":"ACTIVE","sd":"2026","cd":"2028","note":""},

{"ttl":"Systemic and Topical Antiviral Control of Cytomegalovirus Anterior Uveitis: Treatment Outcomes (STACCATO)","pi":[{"n":"John A. Gonzales, MD","u":"https://proctor.ucsf.edu/john-gonzales-md-0","r":"Principal Investigator"}],"ag":"NIH","awd":"UG1 EY036344","area":"Uveitis","st":"ACTIVE","sd":"2026","cd":"2031","note":""},

{"ttl":"Decentralized Dry Eye Study, Planning and Feasibility","pi":[{"n":"Gerami Seitzman, MD","u":"https://proctor.ucsf.edu/gerami-seitzman-md","r":"Principal Investigator"}],"ag":"NIH","awd":"R34 EY037743","area":"Ocular surface","st":"ACTIVE","sd":"2025","cd":"2027","note":""},

{"ttl":"Global Ophthalmology Summit","pi":[{"n":"Jessica Shantha, MD","u":"https://proctor.ucsf.edu/jessica-shantha-md","r":"Investigator"}],"ag":"NIH","awd":"R13 EY038087","area":"Training and career","st":"ACTIVE","sd":"2025","cd":"2026","note":""},

{"ttl":"Long-term ocular sequelae and biological determinants of post-acute Ebola virus disease","pi":[{"n":"Dan Kelly, MD, MPH","u":"","r":"Principal Investigator"}],"ag":"NIH","awd":"U01 EY038042","area":"Emerging infection","st":"ACTIVE","sd":"2025","cd":"2030","note":""},

{"ttl":"Serum components to support corneal health","pi":[{"n":"Matilda Chan, MD, PhD","u":"https://profiles.ucsf.edu/matilda.chan","r":"Investigator"}],"ag":"NIH","awd":"R21 EY035829","area":"Corneal infection","st":"ACTIVE","sd":"2025","cd":"2026","note":""},

{"ttl":"UCSF Program in Resident Opportunities for Mentored Ophthalmic Training in Experimentation (PROMOTE)","pi":[{"n":"Yvonne Ou, MD","u":"","r":"Investigator"}],"ag":"NIH","awd":"R38 EY037091","area":"Training and career","st":"ACTIVE","sd":"2025","cd":"2030","note":""},

{"ttl":"Understanding the role of caregiver mental health in outcomes following childhood severe acute malnutrition","pi":[{"n":"Catherine Oldenburg, ScD, MPH","u":"","r":"Investigator"}],"ag":"NIH","awd":"R21 MH139015","area":"Child health","st":"ACTIVE","sd":"2025","cd":"2027","note":""},

{"ttl":"Vision Bioinformatics and Computation","pi":[{"n":"Yvonne Ou, MD","u":"","r":"Investigator"}],"ag":"NIH","awd":"P30 EY037668","area":"Other vision research","st":"ACTIVE","sd":"2025","cd":"2029","note":""},

{"ttl":"DP24-081 Novel telehealth technologies to detect and manage glaucoma and vision-threatening eye diseases in high-risk populations","pi":[{"n":"Jeremy Keenan, MD, MPH","u":"https://proctor.ucsf.edu/jeremy-keenan-md-mph","r":"Principal Investigator"},{"n":"Yvonne Ou, MD","u":"","r":"Investigator"}],"ag":"CDC","awd":"U01 DP006820","area":"Glaucoma","st":"ACTIVE","sd":"2024","cd":"2029","note":"Funds the G-SEARCH trial"},

{"ttl":"Designing a Pragmatic Registry-based Randomized Controlled Trial for Open-Angle Glaucoma Treatment in the US","pi":[{"n":"Cathy Sun, MD","u":"","r":"Principal Investigator"}],"ag":"NIH","awd":"R34 EY036161","area":"Glaucoma","st":"ACTIVE","sd":"2024","cd":"2026","note":""},

{"ttl":"Developing methods for the use of conjunctival photographs for trachoma monitoring","pi":[{"n":"Jeremy Keenan, MD, MPH","u":"https://proctor.ucsf.edu/jeremy-keenan-md-mph","r":"Principal Investigator"}],"ag":"NIH","awd":"R21 EY036022","area":"Trachoma","st":"ACTIVE","sd":"2024","cd":"2027","note":""},

{"ttl":"Effect of WASH interventions on population resilience to seasonally-driven enteric pathogen transmission along a gradient of socio-economic position","pi":[{"n":"Benjamin Arnold, PhD","u":"https://proctor.ucsf.edu/benjamin-arnold-phd","r":"Principal Investigator"}],"ag":"NIH","awd":"R03 AI188012","area":"Serology and modeling","st":"ACTIVE","sd":"2024","cd":"2026","note":""},

{"ttl":"Exploring the role of metagenomic deep sequencing for trachoma","pi":[{"n":"Jeremy Keenan, MD, MPH","u":"https://proctor.ucsf.edu/jeremy-keenan-md-mph","r":"Principal Investigator"}],"ag":"NIH","awd":"R21 EY036443","area":"Trachoma","st":"ACTIVE","sd":"2024","cd":"2026","note":""},

{"ttl":"Leveraging the seasonal malaria chemoprevention platform to address malaria and malnutrition","pi":[{"n":"Catherine Oldenburg, ScD, MPH","u":"","r":"Investigator"}],"ag":"NIH","awd":"R21 AI182714","area":"Child health","st":"ACTIVE","sd":"2024","cd":"2026","note":""},

{"ttl":"Multi-omics Strategies to Improve Clinical Outcomes in Uveitis","pi":[{"n":"Jessica Shantha, MD","u":"https://proctor.ucsf.edu/jessica-shantha-md","r":"Investigator"},{"n":"Thuy Doan, MD, PhD","u":"https://proctor.ucsf.edu/thuy-doan-md-phd","r":"Investigator"}],"ag":"NIH","awd":"R01 EY036058","area":"Uveitis","st":"ACTIVE","sd":"2024","cd":"2029","note":""},

{"ttl":"Programmable Phage Display Peptidomes to Characterize Uveitis","pi":[{"n":"Nisha Acharya, MD, MS","u":"https://proctor.ucsf.edu/associate-director","r":"Co-Principal Investigator"},{"n":"Thuy Doan, MD, PhD","u":"https://proctor.ucsf.edu/thuy-doan-md-phd","r":"Investigator"}],"ag":"NIH","awd":"R21 EY036683","area":"Uveitis","st":"ACTIVE","sd":"2024","cd":"2027","note":""},

{"ttl":"Village-Integrated Eye Worker Trial II (VIEW II) Extension","pi":[{"n":"Jeremy Keenan, MD, MPH","u":"https://proctor.ucsf.edu/jeremy-keenan-md-mph","r":"Principal Investigator"}],"ag":"NIH","awd":"UG1 EY036346","area":"Other vision research","st":"ACTIVE","sd":"2024","cd":"2029","note":"Funds the VIEW II Linkage-to-Care trial"},

{"ttl":"Vitality in Infants Via Azithromycin for Neonates Trial (VIVANT)","pi":[{"n":"Catherine Oldenburg, ScD, MPH","u":"","r":"Investigator"}],"ag":"NIH","awd":"R01 HD114864","area":"Child health","st":"ACTIVE","sd":"2024","cd":"2030","note":""},

{"ttl":"Azithromycin as adjunctive treatment for uncomplicated severe acute malnutrition: the AMOUR trial","pi":[{"n":"Catherine Oldenburg, ScD, MPH","u":"","r":"Investigator"}],"ag":"NIH","awd":"R01 HD111532","area":"Child health","st":"ACTIVE","sd":"2023","cd":"2028","note":""},

{"ttl":"Glaucoma Drainage Device and Endothelial Cell Density Loss Compare (DECLARE) Trial","pi":[{"n":"Jennifer Rose-Nussbaumer, MD","u":"","r":"Investigator"},{"n":"Ying Han, MD, PhD","u":"","r":"Investigator"}],"ag":"NIH","awd":"UG1 EY033703","area":"Glaucoma","st":"ACTIVE","sd":"2023","cd":"2028","note":""},

{"ttl":"Integrating smartphone photography for trachoma, smartphone visual acuity assessment, and mobile autorefraction to enhance community-based public health monitoring","pi":[{"n":"Jeremy Keenan, MD, MPH","u":"https://proctor.ucsf.edu/jeremy-keenan-md-mph","r":"Principal Investigator"}],"ag":"NIH","awd":"R33 EY033690","area":"Trachoma","st":"ACTIVE","sd":"2023","cd":"2027","note":"R33 phase; R21 phase ran 2021 to 2023"},

{"ttl":"Parasitic Ulcer Treatment Trial","pi":[{"n":"Jeremy Keenan, MD, MPH","u":"https://proctor.ucsf.edu/jeremy-keenan-md-mph","r":"Principal Investigator"},{"n":"Gerami Seitzman, MD","u":"https://proctor.ucsf.edu/gerami-seitzman-md","r":"Co-Principal Investigator"}],"ag":"NIH","awd":"UG1 EY033284","area":"Corneal infection","st":"ACTIVE","sd":"2023","cd":"2028","note":"Funds the PUTT trial"},

{"ttl":"Resistance Evaluee contre la Vie des Enfants au Niger-Implementation et Recherche (REVENIR). Community antimicrobial resistance after azithromycin distribution: selection, spillover, co-selection","pi":[{"n":"Thomas M. Lietman, MD","u":"https://proctor.ucsf.edu/director","r":"Co-Principal Investigator"},{"n":"Kieran O'Brien, PhD, MPH","u":"","r":"Investigator"}],"ag":"NIH","awd":"R01 AI175250","area":"Serology and modeling","st":"ACTIVE","sd":"2023","cd":"2028","note":""},

{"ttl":"Retinal circuit disassembly in primate glaucoma","pi":[{"n":"Yvonne Ou, MD","u":"","r":"Investigator"}],"ag":"NIH","awd":"R01 EY034973","area":"Glaucoma","st":"ACTIVE","sd":"2023","cd":"2028","note":""},

{"ttl":"Improving Corneal Ulcer Outcomes with Unbiased Pathogen and Antimicrobial Resistance Detection","pi":[{"n":"Thuy Doan, MD, PhD","u":"https://proctor.ucsf.edu/thuy-doan-md-phd","r":"Investigator"}],"ag":"NIH","awd":"R01 EY032861","area":"Corneal infection","st":"ACTIVE","sd":"2022","cd":"2026","note":""},

{"ttl":"RECOVER: Researching COVID to Enhance Recovery at UCSF as Hub Site","pi":[{"n":"Dan Kelly, MD, MPH","u":"","r":"Principal Investigator"}],"ag":"NIH","awd":"OTA-21-015B","area":"Emerging infection","st":"ACTIVE","sd":"2022","cd":"2030","note":"Other transaction award; no RePORTER record"},

{"ttl":"Serologic measures of enteric pathogen transmission for intervention studies and population monitoring in low-resource settings","pi":[{"n":"Benjamin Arnold, PhD","u":"https://proctor.ucsf.edu/benjamin-arnold-phd","r":"Principal Investigator"}],"ag":"NIH","awd":"R01 AI166671","area":"Serology and modeling","st":"ACTIVE","sd":"2022","cd":"2028","note":""},

{"ttl":"Vaccine failure: natural history and determinants of post-vaccination COVID-19","pi":[{"n":"Dan Kelly, MD, MPH","u":"","r":"Principal Investigator"}],"ag":"VA","awd":"I01 CX002417","area":"Emerging infection","st":"ACTIVE","sd":"2022","cd":"2027","note":"VA Clinical Science R and D"},

{"ttl":"Analysis of chemical modulators for corneal endothelial dystrophies","pi":[{"n":"Matilda Chan, MD, PhD","u":"https://profiles.ucsf.edu/matilda.chan","r":"Investigator"}],"ag":"NIH","awd":"R01 EY032161","area":"Corneal infection","st":"ACTIVE","sd":"2021","cd":"2027","note":""},

{"ttl":"Enteric Pathogen Force of Infection among Children using Serology","pi":[{"n":"Benjamin Arnold, PhD","u":"https://proctor.ucsf.edu/benjamin-arnold-phd","r":"Principal Investigator"}],"ag":"NIH","awd":"R01 AI162867","area":"Child health","st":"ACTIVE","sd":"2021","cd":"2027","note":""},

{"ttl":"Real-world outcomes of proliferative diabetic retinopathy","pi":[{"n":"Cathy Sun, MD","u":"","r":"Principal Investigator"}],"ag":"NIH","awd":"K23 EY032637","area":"Training and career","st":"ACTIVE","sd":"2021","cd":"2026","note":""},

{"ttl":"Seasonal Conjunctivitis Outbreak Reporting for Prevention and Improved Outcomes (SCORPIO)","pi":[{"n":"Thuy Doan, MD, PhD","u":"https://proctor.ucsf.edu/thuy-doan-md-phd","r":"Investigator"}],"ag":"NIH","awd":"R01 EY032041","area":"Ocular surface","st":"ACTIVE","sd":"2021","cd":"2027","note":""},

{"ttl":"Seroepidemiology of trachoma for the elimination endgame","pi":[{"n":"Benjamin Arnold, PhD","u":"https://proctor.ucsf.edu/benjamin-arnold-phd","r":"Principal Investigator"}],"ag":"NIH","awd":"R01 AI158884","area":"Trachoma","st":"ACTIVE","sd":"2021","cd":"2027","note":""},

{"ttl":"Azithromycin Reduction to Reach Elimination of Trachoma","pi":[{"n":"Thomas M. Lietman, MD","u":"https://proctor.ucsf.edu/director","r":"Co-Principal Investigator"},{"n":"Catherine Oldenburg, ScD, MPH","u":"","r":"Investigator"}],"ag":"NIH","awd":"UG1 EY030833","area":"Trachoma","st":"ACTIVE","sd":"2020","cd":"2027","note":""},

{"ttl":"Azithromycin in the Outpatient Management of Severe Acute Malnutrition","pi":[{"n":"Catherine Oldenburg, ScD, MPH","u":"","r":"Investigator"}],"ag":"NIH","awd":"R21 HD100932","area":"Child health","st":"COMPLETED","sd":"2020","cd":"2022","note":""},

{"ttl":"COVID-19 modeling: behavior, asymptomatic infection, and contacts","pi":[{"n":"Dan Kelly, MD, MPH","u":"","r":"Co-Investigator"}],"ag":"NIH","awd":"R01 GM130900-01A1S1","area":"Serology and modeling","st":"COMPLETED","sd":"2020","cd":"2022","note":"Supplement to R01 GM130900"},

{"ttl":"Natural history of acute SARS-CoV-2 infection among exposed individuals","pi":[{"n":"Dan Kelly, MD, MPH","u":"","r":"Principal Investigator"}],"ag":"CDC","awd":"75D301-20-R-67897","area":"Emerging infection","st":"COMPLETED","sd":"2020","cd":"2024","note":"No RePORTER record"},

{"ttl":"RFA-CK20-003: Modeling of infectious network dynamics for surveillance, control and prevention enhancement (MINDSCAPE)","pi":[{"n":"Travis Porco, PhD, MPH","u":"","r":"Principal Investigator"}],"ag":"NIH","awd":"U01 CK000590","area":"Serology and modeling","st":"COMPLETED","sd":"2020","cd":"2025","note":""},

{"ttl":"UCSF-Proctor Clinician Vision Scholars K12 Program","pi":[{"n":"Thomas M. Lietman, MD","u":"https://proctor.ucsf.edu/director","r":"Co-Principal Investigator"},{"n":"Yvonne Ou, MD","u":"","r":"Investigator"},{"n":"Cathy Sun, MD","u":"","r":"Scholar (2020-2021)"}],"ag":"NIH","awd":"K12 EY031372","area":"Training and career","st":"ACTIVE","sd":"2020","cd":"2030","note":""},

{"ttl":"Adalimumab in Juvenile Idiopathic Arthritis-associated Uveitis Stopping Trial","pi":[{"n":"Nisha Acharya, MD, MS","u":"https://proctor.ucsf.edu/associate-director","r":"Principal Investigator"}],"ag":"NIH","awd":"UG1 EY029658","area":"Uveitis","st":"COMPLETED","sd":"2019","cd":"2025","note":""},

{"ttl":"Ebola modeling: behavior, asymptomatic infection, and contacts","pi":[{"n":"Travis Porco, PhD, MPH","u":"","r":"Principal Investigator"},{"n":"Dan Kelly, MD, MPH","u":"","r":"Co-Investigator"}],"ag":"NIH","awd":"R01 GM130900","area":"Serology and modeling","st":"COMPLETED","sd":"2019","cd":"2023","note":""},

{"ttl":"Ophthalmic Disease and Laboratory Surveillance in a Viral Hemorrhagic Fever Zone","pi":[{"n":"Jessica Shantha, MD","u":"https://proctor.ucsf.edu/jessica-shantha-md","r":"Investigator"}],"ag":"NIH","awd":"K23 EY030158","area":"Training and career","st":"COMPLETED","sd":"2019","cd":"2025","note":""},

{"ttl":"Seroepidemiologic methods to identify hotspots of trachoma and predict future infection","pi":[{"n":"Benjamin Arnold, PhD","u":"https://proctor.ucsf.edu/benjamin-arnold-phd","r":"Principal Investigator"}],"ag":"NIH","awd":"R03 AI147128","area":"Trachoma","st":"COMPLETED","sd":"2019","cd":"2021","note":""},

{"ttl":"Steroids and Cross-linking for Ulcer Treatment (SCUT II)","pi":[{"n":"Thomas M. Lietman, MD","u":"https://proctor.ucsf.edu/director","r":"Principal Investigator"}],"ag":"NIH","awd":"UG1 EY028518","area":"Corneal infection","st":"COMPLETED","sd":"2019","cd":"2024","note":""},

{"ttl":"Training in Clinical and Epidemiological Research for Liberia (TRACER)","pi":[{"n":"Dan Kelly, MD, MPH","u":"","r":"Co-Investigator"}],"ag":"NIH","awd":"U2R TW011281","area":"Training and career","st":"COMPLETED","sd":"2019","cd":"2024","note":""},

{"ttl":"Understanding the epidemiology and natural history of unrecognized Ebola virus infection","pi":[{"n":"Dan Kelly, MD, MPH","u":"","r":"Principal Investigator"}],"ag":"NIH","awd":"K23 AI146268","area":"Emerging infection","st":"COMPLETED","sd":"2019","cd":"2023","note":"Career development award"},

{"ttl":"The Impact of the Herpes Zoster Vaccine on Herpes Zoster Ophthalmicus","pi":[{"n":"Nisha Acharya, MD, MS","u":"https://proctor.ucsf.edu/associate-director","r":"Principal Investigator"}],"ag":"NIH","awd":"R01 EY028739","area":"Uveitis","st":"ACTIVE","sd":"2018","cd":"2028","note":""},

{"ttl":"Village-Integrated Eye Worker Trial II (VIEW II)","pi":[{"n":"Jeremy Keenan, MD, MPH","u":"https://proctor.ucsf.edu/jeremy-keenan-md-mph","r":"Principal Investigator"}],"ag":"NIH","awd":"UG1 EY028097","area":"Other vision research","st":"COMPLETED","sd":"2018","cd":"2024","note":""},

{"ttl":"Kebele Elimination of Trachoma for Ocular Health","pi":[{"n":"Thomas M. Lietman, MD","u":"https://proctor.ucsf.edu/director","r":"Co-Principal Investigator"},{"n":"Catherine Oldenburg, ScD, MPH","u":"","r":"Investigator"}],"ag":"NIH","awd":"UG1 EY028088","area":"Trachoma","st":"COMPLETED","sd":"2017","cd":"2025","note":""},

{"ttl":"Digital Detection of Infectious Eye Epidemics","pi":[{"n":"Thomas M. Lietman, MD","u":"https://proctor.ucsf.edu/director","r":"Principal Investigator"}],"ag":"NIH","awd":"R01 EY024608","area":"Other vision research","st":"COMPLETED","sd":"2016","cd":"2021","note":""},

{"ttl":"Forecasting Trachoma Control","pi":[{"n":"Thomas M. Lietman, MD","u":"https://proctor.ucsf.edu/director","r":"Principal Investigator"},{"n":"Travis Porco, PhD, MPH","u":"","r":"Co-Principal Investigator"}],"ag":"NIH","awd":"R01 EY025350","area":"Trachoma","st":"ACTIVE","sd":"2016","cd":"2028","note":""},

{"ttl":"Non-Sjogren's Syndrome- and Sjogren's Syndrome-related Keratoconjunctivitis Sicca: A Spectrum of Inflammatory Dry Eye","pi":[{"n":"John A. Gonzales, MD","u":"https://proctor.ucsf.edu/john-gonzales-md-0","r":"Principal Investigator"}],"ag":"NIH","awd":"K23 EY026998","area":"Ocular surface","st":"COMPLETED","sd":"2016","cd":"2021","note":""},

{"ttl":"Ocular Surface Microbiome Virome and Pathogens in Ophthalmic Disease and Health","pi":[{"n":"Thuy Doan, MD, PhD","u":"https://proctor.ucsf.edu/thuy-doan-md-phd","r":"Investigator"}],"ag":"NIH","awd":"K08 EY026986","area":"Ocular surface","st":"COMPLETED","sd":"2016","cd":"2021","note":""},

{"ttl":"New Serological Measures of Infectious Disease Transmission Intensity","pi":[{"n":"Benjamin Arnold, PhD","u":"https://proctor.ucsf.edu/benjamin-arnold-phd","r":"Principal Investigator"}],"ag":"NIH","awd":"K01 AI119180","area":"Serology and modeling","st":"COMPLETED","sd":"2015","cd":"2020","note":""},

{"ttl":"Sanitation, Water, and Instruction in Face-washing for Trachoma (SWIFT)","pi":[{"n":"Jeremy Keenan, MD, MPH","u":"https://proctor.ucsf.edu/jeremy-keenan-md-mph","r":"Principal Investigator"}],"ag":"NIH","awd":"U10 EY023939","area":"Trachoma","st":"COMPLETED","sd":"2014","cd":"2019","note":""},

{"ttl":"Sanitation, Water, and Instruction in Face-washing for Trachoma II (SWIFT II)","pi":[{"n":"Jeremy Keenan, MD, MPH","u":"https://proctor.ucsf.edu/jeremy-keenan-md-mph","r":"Principal Investigator"}],"ag":"NIH","awd":"UG1 EY023939","area":"Trachoma","st":"ACTIVE","sd":"2014","cd":"2026","note":""},

{"ttl":"Village Integrated Eye Workers Trial","pi":[{"n":"Thomas M. Lietman, MD","u":"https://proctor.ucsf.edu/director","r":"Principal Investigator"}],"ag":"NIH","awd":"U10 EY022880","area":"Other vision research","st":"COMPLETED","sd":"2013","cd":"2019","note":""},

{"ttl":"First-line Antimetabolites as Steroid-sparing Treatment (FAST) Uveitis Trial","pi":[{"n":"Nisha Acharya, MD, MS","u":"https://proctor.ucsf.edu/associate-director","r":"Principal Investigator"}],"ag":"NIH","awd":"U10 EY021125","area":"Uveitis","st":"COMPLETED","sd":"2012","cd":"2019","note":""},

{"ttl":"Planning Grant for Parasitic Ulcer Treatment Trial","pi":[{"n":"Jeremy Keenan, MD, MPH","u":"https://proctor.ucsf.edu/jeremy-keenan-md-mph","r":"Principal Investigator"}],"ag":"NIH","awd":"R34 EY022368","area":"Corneal infection","st":"COMPLETED","sd":"2012","cd":"2014","note":"Design work that led to the PUTT trial"},

{"ttl":"Modeling contact investigation and rapid response","pi":[{"n":"Travis Porco, PhD, MPH","u":"","r":"Principal Investigator"}],"ag":"NIH","awd":"U01 GM087728","area":"Serology and modeling","st":"COMPLETED","sd":"2011","cd":"2018","note":""},

{"ttl":"Mycotic Ulcer Treatment Trial","pi":[{"n":"Thomas M. Lietman, MD","u":"https://proctor.ucsf.edu/director","r":"Principal Investigator"}],"ag":"NIH","awd":"U10 EY018573","area":"Corneal infection","st":"COMPLETED","sd":"2009","cd":"2016","note":""},

{"ttl":"Optimal trachoma control after mass antibiotic distributions","pi":[{"n":"Jeremy Keenan, MD, MPH","u":"https://proctor.ucsf.edu/jeremy-keenan-md-mph","r":"Principal Investigator"}],"ag":"NIH","awd":"K23 EY019071","area":"Trachoma","st":"COMPLETED","sd":"2008","cd":"2013","note":"Career development award"},

{"ttl":"Predicting and Improving Clinical Outcomes for Bacterial Keratitis","pi":[{"n":"Nisha Acharya, MD, MS","u":"https://proctor.ucsf.edu/associate-director","r":"Principal Investigator"}],"ag":"NIH","awd":"K23 EY017897","area":"Corneal infection","st":"COMPLETED","sd":"2007","cd":"2012","note":""},

{"ttl":"The Steroids for Cornea Ulcers Trial","pi":[{"n":"Thomas M. Lietman, MD","u":"https://proctor.ucsf.edu/director","r":"Principal Investigator"}],"ag":"NIH","awd":"U10 EY015114","area":"Corneal infection","st":"COMPLETED","sd":"2005","cd":"2011","note":""},

{"ttl":"TANA II","pi":[{"n":"Thomas M. Lietman, MD","u":"https://proctor.ucsf.edu/director","r":"Principal Investigator"}],"ag":"NIH","awd":"U10 EY016214","area":"Trachoma","st":"COMPLETED","sd":"2004","cd":"2015","note":""},

{"ttl":"Predicting Resistance: Validating Mathematical Models","pi":[{"n":"Thomas M. Lietman, MD","u":"https://proctor.ucsf.edu/director","r":"Principal Investigator"}],"ag":"NIH","awd":"R21 AI055752","area":"Serology and modeling","st":"COMPLETED","sd":"2003","cd":"2006","note":""},

{"ttl":"Forecasting HIV Evolution in IVDUs and Other Populations","pi":[{"n":"Travis Porco, PhD, MPH","u":"","r":"Co-Principal Investigator"}],"ag":"NIH","awd":"R01 DA013510","area":"Serology and modeling","st":"COMPLETED","sd":"2000","cd":"2007","note":""},

{"ttl":"Transmission Dynamics of Trachoma","pi":[{"n":"Thomas M. Lietman, MD","u":"https://proctor.ucsf.edu/director","r":"Principal Investigator"}],"ag":"NIH","awd":"K08 AI001441","area":"Trachoma","st":"COMPLETED","sd":"1997","cd":"2002","note":""}

];
/* ============ DATA-END ============ */

(function () {
  "use strict";
  var MOUNT_ID = "proctor-grants-app";

  /* ---- type controls: same knobs as the trial finder ---- */
  /* PALETTE: this page runs teal to distinguish it from the navy trial
     finder. To retune, edit --accent, --accent-soft and --deep in the CSS
     string below, plus the header gradient. All values checked for WCAG AA. */
  var PT_FONT = "inherit";
  var PT_SIZE = "19px";
  var PT_LABEL_WEIGHT = "600";

  /* Award numbers on RePORTER resolve as reporter.nih.gov/quickSearch/ plus the award
     with spaces removed. Only NIH awards are held there. */
  var REPORTER = "https://reporter.nih.gov/quickSearch/";

  var CSS = "#proctor-grants-app {\n  --pt-font: FONT_SLOT;\n  --pt-base: SIZE_SLOT;\n  --pt-ui: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif;\n  --ink:#0f1d2c; --ink-soft:#3d4e5e; --muted:#7a8896;\n  --line:#dde4eb; --bg:#fafbfc; --paper:#ffffff;\n  --accent:#0e6b75; --accent-soft:#e4f1f2; --deep:#06333a;\n  --shadow-1:0 1px 3px rgba(15,29,44,.05);\n  --shadow-2:0 10px 28px rgba(15,29,44,.10);\n  --radius:14px;\n  font-family:var(--pt-font); color:var(--ink);\n  max-width:1200px; margin:0 auto; line-height:1.7; font-size:var(--pt-base);\n}\n#proctor-grants-app *{box-sizing:border-box}\n#proctor-grants-app a{color:var(--accent);text-decoration:none}\n#proctor-grants-app a:hover{text-decoration:underline}\n.pg-head{background:linear-gradient(160deg,var(--deep) 0%,#0d4f59 100%);border-radius:18px;padding:54px 48px;margin-bottom:26px}\n.pg-eyebrow{display:inline-block;font-family:var(--pt-ui);font-size:.78rem;font-weight:700;text-transform:uppercase;letter-spacing:2px;color:#cfe8ea;background:rgba(255,255,255,.12);padding:6px 14px;border-radius:20px;margin:0 0 18px}\n#proctor-grants-app .pg-head h1{font-size:2.9rem;font-weight:700;color:#fff;margin:0 0 16px;line-height:1.12;letter-spacing:-.02em}\n.pg-head p{font-size:1.16rem;color:rgba(255,255,255,.8);margin:0;max-width:78ch;line-height:1.7}\n.pg-controls{background:var(--paper);border:1px solid var(--line);border-radius:var(--radius);box-shadow:var(--shadow-1);padding:26px 28px;margin-bottom:22px}\n.pg-searchrow{position:relative;margin-bottom:22px}\n#proctor-grants-app input.pg-search{width:100%;font-family:var(--pt-font);font-size:1.12rem;color:var(--ink);background:var(--bg);border:2px solid var(--line);border-radius:10px;padding:15px 46px 15px 18px;line-height:1.4}\n#proctor-grants-app input.pg-search:focus{outline:none;border-color:var(--accent);background:var(--paper)}\n.pg-clear{position:absolute;right:12px;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;padding:6px 10px;font-size:1.3rem;color:var(--muted);line-height:1;display:none}\n.pg-clear:hover{color:var(--ink)}\n.pg-filters{display:grid;grid-template-columns:repeat(2,1fr);gap:22px}\n.pg-fgroup > .pg-flabel{display:block;font-family:var(--pt-ui);font-size:.76rem;font-weight:700;text-transform:uppercase;letter-spacing:1.6px;color:var(--muted);margin:0 0 10px}\n#proctor-grants-app ul.pg-chips{display:flex;flex-wrap:wrap;gap:7px;margin:0;padding:0;list-style:none}\n#proctor-grants-app button.pg-chip{font-family:var(--pt-ui);font-size:.9rem;font-weight:600;cursor:pointer;color:var(--ink-soft);background:var(--bg);border:1.5px solid var(--line);border-radius:20px;padding:6px 13px;line-height:1.4;transition:background .16s,border-color .16s,color .16s}\n#proctor-grants-app button.pg-chip:hover{border-color:#b6c4d1;color:var(--ink)}\n#proctor-grants-app button.pg-chip[aria-pressed=\"true\"]{background:var(--accent);border-color:var(--accent);color:#fff}\n#proctor-grants-app button.pg-chip:focus-visible{outline:3px solid #f0b429;outline-offset:2px}\n.pg-statusbar{display:flex;flex-wrap:wrap;align-items:center;gap:14px;justify-content:space-between;margin-bottom:18px;padding:0 4px}\n.pg-count{font-family:var(--pt-ui);font-size:1.02rem;color:var(--ink-soft);margin:0}\n.pg-count strong{color:var(--ink);font-weight:700}\n#proctor-grants-app button.pg-reset{font-family:var(--pt-ui);font-size:.93rem;font-weight:600;cursor:pointer;background:none;border:none;color:var(--accent);padding:4px 2px;text-decoration:underline}\n#proctor-grants-app ul.pg-results{display:flex;flex-direction:column;gap:16px;margin:0 0 40px;padding:0;list-style:none}\n#proctor-grants-app ul.pg-results > li::before,#proctor-grants-app ul.pg-chips > li::before{content:none}\n.pg-card{position:relative;background:var(--paper);border:1px solid var(--line);border-left:5px solid var(--sc,var(--muted));border-radius:var(--radius);box-shadow:var(--shadow-1);padding:26px 30px;transition:box-shadow .2s,transform .2s}\n.pg-card:hover{box-shadow:var(--shadow-2);transform:translateY(-2px)}\n.pg-card-top{display:flex;flex-wrap:wrap;align-items:center;gap:10px;margin-bottom:12px}\n.pg-status{font-family:var(--pt-ui);font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:1.4px;color:#fff;background:var(--sc,var(--muted));padding:4px 11px;border-radius:20px}\n.pg-ag{font-family:var(--pt-ui);font-size:.85rem;font-weight:700;letter-spacing:1.2px;color:var(--accent);background:var(--accent-soft);padding:4px 11px;border-radius:20px}\n.pg-years{font-family:var(--pt-ui);font-size:.89rem;color:var(--muted);margin-left:auto}\n#proctor-grants-app .pg-card h3{font-family:var(--pt-font);font-size:1.3rem;font-weight:700;line-height:1.35;margin:0 0 12px;color:var(--ink)}\n.pg-meta{font-family:var(--pt-ui);font-size:1rem;color:var(--ink-soft);margin:0 0 7px;line-height:1.55;display:flex;align-items:baseline;flex-wrap:wrap}\n.pg-lbl{font-family:var(--pt-ui);font-size:.74rem;font-weight:WEIGHT_SLOT;text-transform:uppercase;letter-spacing:1.1px;color:var(--muted);display:inline-block;min-width:9.5em;margin-right:.5em;flex:0 0 auto}\n.pg-award{font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:.95rem}\n.pg-note{font-family:var(--pt-ui);font-size:.92rem;color:var(--muted);font-style:italic;margin:10px 0 0}\n.pg-empty{text-align:center;padding:64px 30px;color:var(--ink-soft);background:var(--bg);border:1px dashed var(--line);border-radius:var(--radius)}\n.pg-foot{font-size:.97rem;color:var(--muted);font-style:italic;border-top:1px solid var(--line);padding-top:20px;margin:0}\n@media (max-width:880px){.pg-head{padding:36px 24px}#proctor-grants-app .pg-head h1{font-size:2rem}.pg-controls{padding:20px 18px}.pg-filters{grid-template-columns:1fr;gap:18px}.pg-card{padding:20px}.pg-years{margin-left:0;width:100%}}\n@media (max-width:620px){.pg-lbl{min-width:0;display:block;margin:0 0 2px}.pg-meta{display:block}}\n@media (prefers-reduced-motion:reduce){#proctor-grants-app *{transition:none!important}.pg-card:hover{transform:none}}\n"
    .split("FONT_SLOT").join(PT_FONT)
    .split("SIZE_SLOT").join(PT_SIZE)
    .split("WEIGHT_SLOT").join(PT_LABEL_WEIGHT);

  var STATUS = {
    "ACTIVE":    { label: "Active",    color: "#116b52" },
    "COMPLETED": { label: "Completed", color: "#5a6b7a" },
    "UNKNOWN":   { label: "Status unknown", color: "#8a939d" }
  };
  var STATUS_ORDER = ["ACTIVE", "COMPLETED", "UNKNOWN"];

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&":"\u0026amp;", "<":"\u0026lt;", ">":"\u0026gt;", '"':"\u0026quot;", "'":"\u0026#39;" }[c];
    });
  }

  function boot() {
    var mount = document.getElementById(MOUNT_ID);
    if (!mount) return;
    var DATA = (typeof PROCTOR_GRANTS !== "undefined") ? PROCTOR_GRANTS : [];
    if (!DATA.length) {
      mount.innerHTML = '\x3Cp style="padding:30px;color:#3d4e5e">No funding data loaded. Check that the DATA block is present and complete.\x3C/p>';
      return;
    }
    if (!document.getElementById("proctor-grants-css")) {
      var st = document.createElement("style");
      st.id = "proctor-grants-css";
      st.appendChild(document.createTextNode(CSS));
      document.head.appendChild(st);
    }

    DATA.forEach(function (g) {
      g._k = STATUS[String(g.st || "").toUpperCase()] ? String(g.st).toUpperCase() : "UNKNOWN";
      g._people = (g.pi || []).map(function (p) { return p.n; });
      g._blob = [g.ttl, g.awd, g.ag, g.note, g.area].concat(g._people).join(" ").toLowerCase();
    });

    function tally(getter) {
      var m = new Map();
      DATA.forEach(function (g) {
        var v = getter(g);
        (Array.isArray(v) ? v : [v]).forEach(function (x) { if (x) m.set(x, (m.get(x) || 0) + 1); });
      });
      return m;
    }
    var sm = tally(function (g) { return g._k; });
    var am = tally(function (g) { return g.ag; });
    var pm = tally(function (g) { return g._people; });
    var am2 = tally(function (g) { return g.area; });

    var statusOpts = STATUS_ORDER.filter(function (k) { return sm.has(k); })
      .map(function (k) { return { v: k, l: STATUS[k].label, n: sm.get(k) }; });
    var agOpts = Array.from(am.entries()).sort(function (a, b) { return b[1] - a[1]; })
      .map(function (e) { return { v: e[0], l: e[0], n: e[1] }; });
    var piOpts = Array.from(pm.entries()).sort(function (a, b) { return b[1] - a[1]; })
      .map(function (e) { return { v: e[0], l: e[0].split(",")[0], n: e[1] }; });
    var areaOpts = Array.from(am2.entries()).sort(function (a, b) { return b[1] - a[1]; })
      .map(function (e) { return { v: e[0], l: e[0], n: e[1] }; });

    function group(id, label, opts) {
      if (!opts.length) return "";
      var h = '\x3Cdiv class="pg-fgroup">\x3Cspan class="pg-flabel" id="glbl-' + id + '">' + esc(label) + '\x3C/span>';
      h += '\x3Cul class="pg-chips" data-group="' + id + '" role="group" aria-labelledby="glbl-' + id + '">';
      opts.forEach(function (o) {
        h += '\x3Cli>\x3Cbutton type="button" class="pg-chip" aria-pressed="false" data-value="' +
             esc(o.v) + '">' + esc(o.l) + " (" + o.n + ")\x3C/button>\x3C/li>";
      });
      return h + "\x3C/ul>\x3C/div>";
    }

    var years = DATA.map(function (g) { return g.sd; }).filter(Boolean).sort();
    var span = years.length ? years[0] + " to " + years[years.length - 1] : "";

    mount.innerHTML =
      '\x3Cdiv class="pg-head">' +
        '\x3Cp class="pg-eyebrow">Research Funding\x3C/p>' +
        '\x3Ch1>Grants supporting Proctor research\x3C/h1>' +
        '\x3Cp>Federal and foundation awards held by investigators at the F.I. Proctor Foundation. ' +
        'Search by project, investigator, or award number, or filter by funder and status. ' +
        'NIH awards link to their record on NIH RePORTER. These are research awards, not studies ' +
        'open to enrollment; for those, see the clinical trial finder.\x3C/p>' +
      '\x3C/div>' +
      '\x3Cdiv class="pg-controls">' +
        '\x3Cdiv class="pg-searchrow">' +
          '\x3Clabel class="pg-flabel" for="pg-search">Search\x3C/label>' +
          '\x3Cinput type="search" id="pg-search" class="pg-search" autocomplete="off" ' +
          'placeholder="Project, investigator, or award number \u2014 e.g. trachoma, Keenan, EY023939">' +
          '\x3Cbutton type="button" class="pg-clear" aria-label="Clear search">\u00D7\x3C/button>' +
        '\x3C/div>' +
        '\x3Cdiv class="pg-filters">' +
          group("status", "Status", statusOpts) +
          group("agency", "Funder", agOpts) +
          group("person", "Investigator", piOpts) +
          group("area", "Research area", areaOpts) +
        '\x3C/div>' +
      '\x3C/div>' +
      '\x3Cdiv class="pg-statusbar">' +
        '\x3Cp class="pg-count" role="status" aria-live="polite">\x3C/p>' +
        '\x3Cbutton type="button" class="pg-reset">Reset all filters\x3C/button>' +
      '\x3C/div>' +
      '\x3Cul class="pg-results">\x3C/ul>' +
      '\x3Cp class="pg-foot">' + DATA.length + " awards" + (span ? ", " + esc(span) : "") +
      ". Award periods are as recorded by the funding agency. NIH awards link to NIH RePORTER; " +
      "awards from other agencies are not held there.\x3C/p>";

    var $ = function (s) { return mount.querySelector(s); };
    var elSearch = $("#pg-search"), elClear = $(".pg-clear"),
        elCount = $(".pg-count"), elResults = $(".pg-results");
    var state = { q: "", status: new Set(), agency: new Set(), person: new Set(), area: new Set() };

    function matches(g) {
      if (state.status.size && !state.status.has(g._k)) return false;
      if (state.agency.size && !state.agency.has(g.ag)) return false;
      if (state.person.size && !g._people.some(function (n) { return state.person.has(n); })) return false;
      if (state.area.size && !state.area.has(g.area)) return false;
      if (state.q) {
        var terms = state.q.toLowerCase().split(/\s+/).filter(Boolean);
        for (var i = 0; terms.length > i; i++) {
          if (g._blob.indexOf(terms[i]) === -1) return false;
        }
      }
      return true;
    }

    function card(g) {
      var si = STATUS[g._k];
      var h = '\x3Cli class="pg-card" style="--sc:' + si.color + '">';
      h += '\x3Cdiv class="pg-card-top">\x3Cspan class="pg-status">' + esc(si.label) + "\x3C/span>";
      if (g.ag) h += '\x3Cspan class="pg-ag">' + esc(g.ag) + "\x3C/span>";
      if (g.sd) h += '\x3Cspan class="pg-years">' + esc(g.sd) +
                     (g.cd && g.cd !== g.sd ? "\u2013" + esc(g.cd) : "") + "\x3C/span>";
      h += "\x3C/div>";
      h += "\x3Ch3>" + esc(g.ttl) + "\x3C/h3>";

      if (g.awd) {
        var val;
        if (String(g.ag).toUpperCase() === "NIH") {
          var slug = String(g.awd).replace(/\s+/g, "");
          val = '\x3Ca class="pg-award" href="' + REPORTER + encodeURIComponent(slug) +
                '" target="_blank" rel="noopener">' + esc(g.awd) + "\x3C/a>";
        } else {
          val = '\x3Cspan class="pg-award">' + esc(g.awd) + "\x3C/span>";
        }
        h += '\x3Cp class="pg-meta">\x3Cspan class="pg-lbl">Award\x3C/span>' + val + "\x3C/p>";
      }

      if (g.pi && g.pi.length) {
        var names = g.pi.map(function (p) {
          var nm = p.u ? '\x3Ca href="' + esc(p.u) + '">' + esc(p.n) + "\x3C/a>" : esc(p.n);
          return p.r ? nm + " (" + esc(p.r) + ")" : nm;
        }).join(", ");
        h += '\x3Cp class="pg-meta">\x3Cspan class="pg-lbl">' +
             (g.pi.length > 1 ? "Investigators" : "Investigator") + "\x3C/span>" + names + "\x3C/p>";
      }

      if (g.area) h += '\x3Cp class="pg-meta">\x3Cspan class="pg-lbl">Research area\x3C/span>' + esc(g.area) + "\x3C/p>";
      if (g.note) h += '\x3Cp class="pg-note">' + esc(g.note) + "\x3C/p>";
      h += "\x3C/li>";
      return h;
    }

    function render() {
      var hits = DATA.filter(matches);
      elCount.innerHTML = hits.length === DATA.length
        ? "Showing all \x3Cstrong>" + DATA.length + "\x3C/strong> awards"
        : "Showing \x3Cstrong>" + hits.length + "\x3C/strong> of " + DATA.length + " awards";
      elClear.style.display = state.q ? "block" : "none";
      elResults.innerHTML = hits.length ? hits.map(card).join("")
        : '\x3Cli class="pg-empty">\x3Cp>No awards match those filters.\x3C/p>' +
          "\x3Cp>Try removing a filter, or searching a broader term.\x3C/p>\x3C/li>";
    }

    mount.addEventListener("click", function (ev) {
      var chip = ev.target.closest(".pg-chip");
      if (chip) {
        var gr = chip.parentNode.parentNode.getAttribute("data-group");
        var v = chip.getAttribute("data-value");
        if (state[gr].has(v)) state[gr]["delete"](v); else state[gr].add(v);
        chip.setAttribute("aria-pressed", state[gr].has(v) ? "true" : "false");
        render(); return;
      }
      if (ev.target.closest(".pg-clear")) { elSearch.value = ""; state.q = ""; render(); elSearch.focus(); return; }
      if (ev.target.closest(".pg-reset")) {
        state.q = ""; state.status.clear(); state.agency.clear(); state.person.clear(); state.area.clear();
        elSearch.value = "";
        Array.prototype.forEach.call(mount.querySelectorAll(".pg-chip"), function (b) {
          b.setAttribute("aria-pressed", "false");
        });
        render();
      }
    });

    var timer = null;
    elSearch.addEventListener("input", function () {
      clearTimeout(timer);
      timer = setTimeout(function () { state.q = elSearch.value.trim(); render(); }, 140);
    });

    render();
  }

  function start() {
    try { boot(); }
    catch (err) {
      var m = document.getElementById(MOUNT_ID);
      if (m) {
        m.innerHTML = '\x3Cp style="padding:24px;color:#a04a2a;border:1px solid #e6c9bd;' +
          'border-radius:10px;background:#fdf6f3">The funding list could not start: ' +
          esc(err.message) + "\x3C/p>";
      }
      if (window.console) console.error("Proctor grants:", err);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else { start(); }
})();
</script>
