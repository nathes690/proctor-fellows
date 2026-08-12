/* =====================================================================
   PROCTOR FELLOWS - DIRECTORY DATA
   =====================================================================
   HOW TO ADD OR EDIT A FELLOW
   ---------------------------------------------------------------------
   - Each fellow is ONE block between {  and  },  ending with a comma.
   - To ADD someone: copy a whole block (from { to },), paste it, and
     change the values. Keep the quotes "" and commas exactly as shown.
   - Leave a field as ""  (or [] for lists) if you don't have it.

   FIELD GUIDE
     name         "Firstname Lastname, MD"
     years        "2011-12"   (the fellowship year/s)
     origScript   native-script name (Chinese/Japanese/Thai/Hebrew) or ""
     country      country of origin, or ""
     decade       "2010s"  (controls the decade filter; match the year)
     inMemoriam   "2018"  ONLY if the person has passed away and you know
                  the year.  Use "yes" if deceased but year unknown.  Leave
                  "" for living fellows (this hides the memorial line).
     position     current position / career summary, or ""
     photo        image filename, e.g. "gonzales-john.webp".  The picture
                  appears automatically once a file with this exact name is
                  in the img/ folder.  Until then the card shows a red
                  "NEEDS PHOTO" badge with the filename to use.
     education    list of training lines:  [ "School one", "School two" ]
     publications list of papers:  [ { title:"...", url:"..." } ]
   ===================================================================== */

window.FELLOWS = [

  // ===== #1  Robert Y. Barishak, MD  (1957–1959) =====
  {
    name:        "Robert Y. Barishak, MD",
    years:       "1957–1959",
    origScript:  "Hebrew name: פרופ' יום טוב ברישק · Turkish spelling: Barişak",
    country:     "Turkey (Istanbul)",
    decade:      "1950s",
    inMemoriam:  "2018",
    position:    "Ophthalmologist, ocular pathologist, researcher and professor. Former Head of Ophthalmology, Assaf Harofeh Hospital; former Head of Ophthalmology, Sackler Faculty of Medicine, Tel Aviv University; Head of Animal Ophthalmology, Beit Dagan Veterinary School (1990–1994)",
    photo:       "barishak-robert.jpg",
    education:   [
      "St. Benoit French High School, Istanbul",
      "medical degree, Istanbul University",
      "ophthalmology residency, Ankara University & Istanbul University Dept. of Ophthalmology",
      "visiting researcher in ocular pathology at UCSF, 1957",
      "later research at Royal Danish Hospital, Copenhagen and Hadassah University Hospital, Jerusalem"
    ],
    publications: [
      { title:"Congenital, Bilateral, Epithelial Ingrowth Into the Anterior Chamber", url:"https://journals.healio.com/doi/10.3928/0191-3913-19770501-12" }
    ]
  },

  // ===== #2  Victor M. Diaz-Bonnet, MD  (1960–62) =====
  {
    name:        "Victor M. Diaz-Bonnet, MD",
    years:       "1960–62",
    origScript:  "",
    country:     "Puerto Rico",
    decade:      "1960s",
    inMemoriam:  "2014",
    position:    "Ophthalmologist; Professor, School of Medicine, and private practice, Puerto Rico",
    photo:       "diaz-bonnet-victor.jpg",
    education:   [
      "University of Puerto Rico",
      "medical degree, Madrid, Spain",
      "ophthalmology training in Puerto Rico and San Francisco (Proctor Foundation, UCSF)"
    ],
    publications: [
      { title:"The Effect of Corticosteroid Hormones on Experimental Herpes Simplex Keratitis…", url:"https://www.sciencedirect.com/science/article/pii/0002939461917809" }
    ]
  },

  // ===== #3  Carl H. Mordhorst, MD  (1960–62) =====
  {
    name:        "Carl H. Mordhorst, MD",
    years:       "1960–62",
    origScript:  "",
    country:     "Denmark",
    decade:      "1960s",
    inMemoriam:  "2003",
    position:    "Danish physician, virologist, and epidemiologist; contributions to infectious disease, ophthalmology, and vaccine research (mid-to-late 20th century)",
    photo:       "mordhorst-carl.webp",
    education:   [
      "University of Copenhagen"
    ],
    publications: [
      { title:"Quantitation of the Infectivity for Cynomolgus Monkeys of Egg-Grown Inclusion Conjunctivitis Virus…", url:"https://www.sciencedirect.com/science/article/pii/0002939462933986" }
    ]
  },

  // ===== #4  Martin E. Corwin, MD  (1961–63) =====
  {
    name:        "Martin E. Corwin, MD",
    years:       "1961–63",
    origScript:  "",
    country:     "USA",
    decade:      "1960s",
    inMemoriam:  "2017",
    position:    "Ophthalmologist; Research Fellow, Proctor Foundation, UCSF; Private Practice, New Jersey",
    photo:       "corwin-martin.jpg",
    education:   [
      "State University of New York (SUNY) Downstate Medical Center College of Medicine"
    ],
    publications: [
      { title:"A Double-Blind Study of the Effect of 5-IODO-2'-Deoxyuridine on Experimental Herpes Simplex Keratitis", url:"https://www.sciencedirect.com/science/article/pii/0002939463926722" }
    ]
  },

  // ===== #5  Yukifumi Nakaizumi, MD  (1962) =====
  {
    name:        "Yukifumi Nakaizumi, MD",
    years:       "1962",
    origScript:  "中泉行文",
    country:     "Japan",
    decade:      "1960s",
    inMemoriam:  "yes",
    position:    "Board Member of the Trustees of the Kenikai Institute (顕微会 日本眼科学史研究所)",
    photo:       "nakaizumi-yukifumi.png",
    education:   [
      "1950s: Graduated with a medical degree and later earned his Doctor of Philosophy (PhD) in Medical Sciences from the University of Tokyo. His doctoral research centered heavily on the electron microscopy study of the cornea.1961: Traveled to the United States as one of the earlier generations of international research fellows to train at the University of California, San Francisco (UCSF) Francis I. Proctor Foundation for Research in Ophthalmology, under the sponsorship and mentorship of Dr. Samuel J. Kimura."
    ],
    publications: [
      { title:"The Ultrastructure of Bruch's Membrane, III. The Macular Area of the Human Eye", url:"https://jamanetwork.com/journals/jamaophthalmology/article-abstract/627717" }
    ]
  },

  // ===== #6  Thomas H. Pettit, MD  (1962–63) =====
  {
    name:        "Thomas H. Pettit, MD",
    years:       "1962–63",
    origScript:  "",
    country:     "USA",
    decade:      "1960s",
    inMemoriam:  "2005",
    position:    "Historical Position Summary:Chief of the Cornea Division: Served as the inaugural Chief of the Cornea Division at UCLA, playing a monumental role in shaping the clinical care and surgical standards for corneal transplantation.Professor of Ophthalmology: Dedicated over three decades of academic service as a full professor and highly revered clinical teacher within the UCLA Department of Ophthalmology and the Jules Stein Eye Institute.Career Highlights:1963: Joined the founding clinical faculty of the University of California, Los Angeles (UCLA) right after completing his Proctor fellowship.Academic Legacy: Universally recognized for his mentorship, he nurtured generations of cornea fellows and residents. In honor of his contributions to ophthalmic science, UCLA holds the annual Thomas H. Pettit Lecture during its major academic seminars.Clinical Impact: He was a renowned expert on the transition to modern outpatient cataract extraction, corneal immunology, and corneal surgical refinements",
    photo:       "pettit-thomas.jpg",
    education:   [
      "1949: Graduated with his undergraduate degree from the University of California, Los Angeles (UCLA).1955: Earned his Medical Degree (MD) from the University of Pennsylvania Medical School, graduating with the prestigious Spencer Morris Prize for academic excellence.1956–1958: Served as a U.S. Navy Medical Officer, stationed directly with the Marine Corps at Camp Pendleton, California.Late 1950s: Completed his residency training in Ophthalmology at Barnes Hospital, Washington University in St. Louis, Missouri.1962: Completed a one-year specialized subspecialty fellowship in cornea and external ocular disease in San Francisco at the UCSF Francis I. Proctor Foundation for Research in Ophthalmology."
    ],
    publications: [
      { title:"The Fluorescent Antibody Technique in Diagnosis of Herpes Simplex Keratitis", url:"https://pubmed.ncbi.nlm.nih.gov/14149757/" }
    ]
  },

  // ===== #7  Olga Litricin, MD  (1962) =====
  {
    name:        "Olga Litricin, MD",
    years:       "1962",
    origScript:  "",
    country:     "Serbia (Yugoslavia)",
    decade:      "1960s",
    inMemoriam:  "yes",
    position:    "Textbook Editor: Co-edited and authored the primary, definitive academic textbook on Ophthalmology used by medical students across Yugoslavia (alongside Milan Blagojević).Global Public Health: Served on elite international expert committees, including the World Health Organization (WHO) Technical Report cohorts alongside Proctor Foundation director Phillips Thygeson to standardize global infectious eye disease management.Scientific Leadership: Organized major international ophthalmic pathology meetings in Belgrade and published extensive clinical case series in world-renowned journals like the American Journal of Ophthalmology and the British Journal of Ophthalmology.",
    photo:       "litricin-olga.jpg",
    education:   [
      "Graduated with her medical degree and completed her specialty residency training in ophthalmology at the University Eye Clinic in Belgrade (Yugoslavia / Serbia)."
    ],
    publications: [
      { title:"(blank)", url:"" }
    ]
  },

  // ===== #8  Anne-Catherine Martenet, MD  (1964–65) =====
  {
    name:        "Anne-Catherine Martenet, MD",
    years:       "1964–65",
    origScript:  "",
    country:     "Switzerland",
    decade:      "1960s",
    inMemoriam:  "yes",
    position:    "University Eye Clinic, Zurich, Switzerland",
    photo:       "martenet-anne-catherine.jpg",
    education:   [
      "(blank)"
    ],
    publications: [
      { title:"Herpes Simplex Uveitis: An Experimental Study", url:"https://jamanetwork.com/journals/jamaophthalmology/article-abstract/628640" }
    ]
  },

  // ===== #9  Mark S. Feldman, MD  (1965–66) =====
  {
    name:        "Mark S. Feldman, MD",
    years:       "1965–66",
    origScript:  "",
    country:     "USA",
    decade:      "1960s",
    inMemoriam:  "yes",
    position:    "Founding Director, Fort Lauderdale Eye Institute",
    photo:       "feldman-mark.jpg",
    education:   [
      "(blank)"
    ],
    publications: [
      { title:"(blank)", url:"" }
    ]
  },

  // ===== #10  Jerome J. Kazdan, MD  (1965–66) =====
  {
    name:        "Jerome J. Kazdan, MD",
    years:       "1965–66",
    origScript:  "",
    country:     "Canada",
    decade:      "1960s",
    inMemoriam:  "yes",
    position:    "",
    photo:       "kazdan-jerome.webp",
    education:   [],
    publications: []
  },

  // ===== #11  Thomas R. Wood, MD  (1965–66) =====
  {
    name:        "Thomas R. Wood, MD",
    years:       "1965–66",
    origScript:  "",
    country:     "",
    decade:      "1960s",
    inMemoriam:  "yes",
    position:    "",
    photo:       "wood-thomas.webp",
    education:   [],
    publications: [
      { title:"Ocular Coccidioidomycosis: Report of a Case Presenting as Parinaud's Oculoglandular Syndrome", url:"https://www.cabidigitallibrary.org/doi/abs/10.5555/19691301524" }
    ]
  },

  // ===== #12  Peter L. Davis, MD  (1965–66) =====
  {
    name:        "Peter L. Davis, MD",
    years:       "1965–66",
    origScript:  "",
    country:     "Canada",
    decade:      "1960s",
    inMemoriam:  "2022",
    position:    "",
    photo:       "davis-peter.webp",
    education:   [],
    publications: []
  },

  // ===== #13  Aleksandar Parunovic, MD  (1965–66) =====
  {
    name:        "Aleksandar Parunovic, MD",
    years:       "1965–66",
    origScript:  "",
    country:     "Serbia (Yugoslavia)",
    decade:      "1960s",
    inMemoriam:  "yes",
    position:    "",
    photo:       "parunovic-aleksandar.webp",
    education:   [],
    publications: [
      { title:"Pityrosporum Orbiculare: Its Possible Role in Seborrheic Blepharitis", url:"https://www.sciencedirect.com/science/article/pii/0002939467913098" }
    ]
  },

  // ===== #14  GIL SMOLIN, MD  (1966–67) =====
  {
    name:        "GIL SMOLIN, MD",
    years:       "1966–67",
    origScript:  "",
    country:     "",
    decade:      "1960s",
    inMemoriam:  "2007",
    position:    "",
    photo:       "smolin-gil.webp",
    education:   [],
    publications: []
  },

  // ===== #15  Clyde L. Olson, MD  (1967–68) =====
  {
    name:        "Clyde L. Olson, MD",
    years:       "1967–68",
    origScript:  "",
    country:     "",
    decade:      "1960s",
    inMemoriam:  "yes",
    position:    "",
    photo:       "olson-clyde.webp",
    education:   [],
    publications: []
  },

  // ===== #16  Moh Mansjoer, MD  (1967) =====
  {
    name:        "Moh Mansjoer, MD",
    years:       "1967",
    origScript:  "",
    country:     "Indonesia",
    decade:      "1960s",
    inMemoriam:  "yes",
    position:    "",
    photo:       "mansjoer-moh.webp",
    education:   [],
    publications: []
  },

  // ===== #17  Walter L. Burt, MD  (1968–69) =====
  {
    name:        "Walter L. Burt, MD",
    years:       "1968–69",
    origScript:  "",
    country:     "",
    decade:      "1960s",
    inMemoriam:  "yes",
    position:    "",
    photo:       "burt-walter.webp",
    education:   [],
    publications: []
  },

  // ===== #18  Richard Forster, MD  (1968–69) =====
  {
    name:        "Richard Forster, MD",
    years:       "1968–69",
    origScript:  "",
    country:     "",
    decade:      "1960s",
    inMemoriam:  "",
    position:    "Late follow-up of patients with neonatal inclusion conjunctivitis | https://pubmed.ncbi.nlm.nih.gov/4190799/",
    photo:       "forster-robert-k.webp",
    education:   [
      "VERIFY"
    ],
    publications: [
      { title:"", url:"https://www.aao.org/lifetime-engaged-ophthalmologist/…richard-k-forster-md…" }
    ]
  },

  // ===== #19  Endliam Chowchuvech, MD  (1968–69) =====
  {
    name:        "Endliam Chowchuvech, MD",
    years:       "1968–69",
    origScript:  "เอ็นเลียม เชาว์ชูเวช",
    country:     "Thailand",
    decade:      "1960s",
    inMemoriam:  "",
    position:    "",
    photo:       "chowchuvech-endliam-2.jpg",
    education:   [
      "VERIFY"
    ],
    publications: [
      { title:"", url:"http://rcopt.org/…id=1051" },
      { title:"", url:"https://www.sukumvithospital.com/doctorprofile.php?id=603&lang=en" },
      { title:"", url:"https://www.facebook.com/photo/…" }
    ]
  },

  // ===== #20  Abdallah M. Isa, MD  (1968–69) =====
  {
    name:        "Abdallah M. Isa, MD",
    years:       "1968–69",
    origScript:  "",
    country:     "",
    decade:      "1960s",
    inMemoriam:  "",
    position:    "Susceptibility of Anti-Chlamydial IgG Antibodies to Reduction and Alkylation | https://academic.oup.com/jimmunol/article-abstract/102/5/1332/8097024",
    photo:       "isa-abdallah.webp",
    education:   [
      "yes"
    ],
    publications: []
  },

  // ===== #21  Jack Plotkin, MD  (1968–69) =====
  {
    name:        "Jack Plotkin, MD",
    years:       "1968–69",
    origScript:  "",
    country:     "",
    decade:      "1960s",
    inMemoriam:  "",
    position:    "Cytologic Study of Herpetic Keratitis: Preparation of Corneal Scrapings | https://jamanetwork.com/…/630241",
    photo:       "plotkin-jack.webp",
    education:   [
      "yes"
    ],
    publications: [
      { title:"", url:"https://jackplotkin.dr-leonardo.com/" }
    ]
  },

  // ===== #22  Lung-Jui Yeh, MD  (1968) =====
  {
    name:        "Lung-Jui Yeh, MD",
    years:       "1968",
    origScript:  "葉銳龍醫師",
    country:     "",
    decade:      "1960s",
    inMemoriam:  "",
    position:    "American Lung-Jui Yeh Medical Foundation (Arcadia, California) established in his name",
    photo:       "yeh-lung-jui.webp",
    education:   [
      "yes"
    ],
    publications: [
      { title:"Importance of Reinfection in the Pathogenesis of Trachoma Get access Arrow", url:"" },
      { title:"J. Thomas Grayston , San-pin Wang , Lung-jui Yeh , Cho-chou Kuo", url:"https://academic.oup.com/cid/article-abstract/7/6/717/382176" }
    ]
  },

  // ===== #23  George Bohigian, MD  (1969–70) =====
  {
    name:        "George Bohigian, MD",
    years:       "1969–70",
    origScript:  "",
    country:     "",
    decade:      "1960s",
    inMemoriam:  "",
    position:    "",
    photo:       "bohigian-george.webp",
    education:   [
      "yes"
    ],
    publications: [
      { title:"", url:"https://www.rhsalumnistl.com/hall-of-fame/dr-george-bohigian/" },
      { title:"", url:"https://journals.sagepub.com/…/0967772017727478" }
    ]
  },

  // ===== #24  Carole E. West, MD  (1969) =====
  {
    name:        "Carole E. West, MD",
    years:       "1969",
    origScript:  "",
    country:     "",
    decade:      "1960s",
    inMemoriam:  "",
    position:    "Late Results of Keratoplasty for Fuchs' Dystrophy | https://www.sciencedirect.com/…/0002939471915972",
    photo:       "west-carole.webp",
    education:   [
      "yes"
    ],
    publications: []
  },

  // ===== #25  Robert A. Hyndiuk, MD  (1969–70) =====
  {
    name:        "Robert A. Hyndiuk, MD",
    years:       "1969–70",
    origScript:  "",
    country:     "",
    decade:      "1960s",
    inMemoriam:  "",
    position:    "",
    photo:       "hyndiuk-robert.webp",
    education:   [
      "yes"
    ],
    publications: [
      { title:"", url:"https://www.linkedin.com/in/robert-a-hyndiuk-md-73533043/" }
    ]
  },

  // ===== #26  Michael A. Naidoff, MD  (1970–71) =====
  {
    name:        "Michael A. Naidoff, MD",
    years:       "1970–71",
    origScript:  "",
    country:     "",
    decade:      "1970s",
    inMemoriam:  "",
    position:    "",
    photo:       "naidoff-michael.webp",
    education:   [
      "yes"
    ],
    publications: [
      { title:"", url:"https://remembermyjourney.com/memorials/michael-allen-naidoff…" }
    ]
  },

  // ===== #27  Franklin F. Cignetti, MD  (1970–72) =====
  {
    name:        "Franklin F. Cignetti, MD",
    years:       "1970–72",
    origScript:  "",
    country:     "",
    decade:      "1970s",
    inMemoriam:  "",
    position:    "Doxycycline Treatment of Chronic Trachoma | https://jamanetwork.com/…/347689",
    photo:       "cignetti-franklin.webp",
    education:   [
      "yes"
    ],
    publications: []
  },

  // ===== #28  Giovanni B. Moschini, MD  (1970–71) =====
  {
    name:        "Giovanni B. Moschini, MD",
    years:       "1970–71",
    origScript:  "",
    country:     "",
    decade:      "1970s",
    inMemoriam:  "",
    position:    "Experimental Vaccinial Keratoconjunctivitis: Effect of an Interferon Inducer (Poly I:C) | https://jamanetwork.com/…/630481",
    photo:       "moschini-giovanni.webp",
    education:   [
      "yes"
    ],
    publications: [
      { title:"", url:"https://www.alumniunipd.it/profilo/giovannibattistamoschini/" }
    ]
  },

  // ===== #29  Iour Federovich Maitchouk, MD  (1970) =====
  {
    name:        "Iour Federovich Maitchouk, MD",
    years:       "1970",
    origScript:  "",
    country:     "",
    decade:      "1970s",
    inMemoriam:  "",
    position:    "",
    photo:       "maitchouk-iour.webp",
    education:   [
      "yes"
    ],
    publications: [
      { title:"", url:"https://ruspanteon.ru/majchuk-yurij-fyodorovich/" },
      { title:"", url:"https://www.mediasphera.ru/…/10042465X2023011151" }
    ]
  },

  // ===== #30  John S. Wilkie, MD  (1971–72) =====
  {
    name:        "John S. Wilkie, MD",
    years:       "1971–72",
    origScript:  "",
    country:     "",
    decade:      "1970s",
    inMemoriam:  "",
    position:    "",
    photo:       "wilkie-john.webp",
    education:   [
      "yes"
    ],
    publications: [
      { title:"", url:"https://www.ebar.com/story/68625" }
    ]
  },

  // ===== #31  Ronald G. Jans, MD  (1971) =====
  {
    name:        "Ronald G. Jans, MD",
    years:       "1971",
    origScript:  "",
    country:     "Canada",
    decade:      "1970s",
    inMemoriam:  "yes",
    position:    "",
    photo:       "jans-ronald.webp",
    education:   [],
    publications: []
  },

  // ===== #32  Jeffrey Day Lanier, MD  (1972–73) =====
  {
    name:        "Jeffrey Day Lanier, MD",
    years:       "1972–73",
    origScript:  "",
    country:     "USA",
    decade:      "1970s",
    inMemoriam:  "yes",
    position:    "",
    photo:       "lanier-jeffrey.webp",
    education:   [],
    publications: []
  },

  // ===== #33  John P. Whitcher, MD  (1972–73) =====
  {
    name:        "John P. Whitcher, MD",
    years:       "1972–73",
    origScript:  "",
    country:     "",
    decade:      "1970s",
    inMemoriam:  "yes",
    position:    "",
    photo:       "whitcher-john-p.jpg",
    education:   [],
    publications: []
  },

  // ===== #34  Mardiono Marsetio, MD  (1972–73) =====
  {
    name:        "Mardiono Marsetio, MD",
    years:       "1972–73",
    origScript:  "",
    country:     "Indonesia",
    decade:      "1970s",
    inMemoriam:  "yes",
    position:    "",
    photo:       "marsetio-mardiono.webp",
    education:   [],
    publications: []
  },

  // ===== #35  Roger F. Meyer, MD  (1973–74) =====
  {
    name:        "Roger F. Meyer, MD",
    years:       "1973–74",
    origScript:  "",
    country:     "USA",
    decade:      "1970s",
    inMemoriam:  "2024",
    position:    "Professor, University of Michigan (Kellogg Eye Center); founded UM Cornea Service & cornea fellowship (1980); Medical Director, Michigan Eye Bank (Eversight); 4,000+ corneal transplants; 100+ publications; AOS (1986)",
    photo:       "meyer-roger.webp",
    education:   [
      "University of Michigan (undergrad)",
      "Ohio State (MD)",
      "USAF flight surgeon",
      "Ophthalmology residency, Michigan (1968)",
      "Heed Fellowship, Proctor Foundation UCSF (1974)",
      "Corneal fellowship, University of Florida (1975)"
    ],
    publications: []
  },

  // ===== #36  Bruce W. Jackson, MD  (1973–74) =====
  {
    name:        "Bruce W. Jackson, MD",
    years:       "1973–74",
    origScript:  "",
    country:     "Canada",
    decade:      "1970s",
    inMemoriam:  "yes",
    position:    "",
    photo:       "jackson-bruce.webp",
    education:   [],
    publications: []
  },

  // ===== #37  Douglas L. Perry, MD  (1973–74) =====
  {
    name:        "Douglas L. Perry, MD",
    years:       "1973–74",
    origScript:  "",
    country:     "",
    decade:      "1970s",
    inMemoriam:  "2000",
    position:    "",
    photo:       "perry-douglas.webp",
    education:   [],
    publications: []
  },

  // ===== #38  Rubens Belfort Jr., MD  (1974–75) =====
  {
    name:        "Rubens Belfort Jr., MD",
    years:       "1974–75",
    origScript:  "",
    country:     "Brazil",
    decade:      "1970s",
    inMemoriam:  "",
    position:    "",
    photo:       "-rubens.webp",
    education:   [],
    publications: []
  },

  // ===== #39  Hong Bok Kim, MD  (1974–75) =====
  {
    name:        "Hong Bok Kim, MD",
    years:       "1974–75",
    origScript:  "",
    country:     "Korea",
    decade:      "1970s",
    inMemoriam:  "yes",
    position:    "",
    photo:       "kim-hong.webp",
    education:   [],
    publications: []
  },

  // ===== #40  Robert G. Martin, MD  (1974–75) =====
  {
    name:        "Robert G. Martin, MD",
    years:       "1974–75",
    origScript:  "",
    country:     "USA",
    decade:      "1970s",
    inMemoriam:  "yes",
    position:    "",
    photo:       "martin-robert.webp",
    education:   [],
    publications: []
  },

  // ===== #41  Richard J. Weinberg, MD  (1974–75) =====
  {
    name:        "Richard J. Weinberg, MD",
    years:       "1974–75",
    origScript:  "",
    country:     "",
    decade:      "1970s",
    inMemoriam:  "yes",
    position:    "",
    photo:       "weinberg-richard.webp",
    education:   [],
    publications: []
  },

  // ===== #42  Ahmad Ahmad, MD  (1974–76) =====
  {
    name:        "Ahmad Ahmad, MD",
    years:       "1974–76",
    origScript:  "",
    country:     "",
    decade:      "1970s",
    inMemoriam:  "",
    position:    "",
    photo:       "ahmad-ahmad.webp",
    education:   [],
    publications: []
  },

  // ===== #43  Helen Jane Blackman, MD  (1974–75) =====
  {
    name:        "Helen Jane Blackman, MD",
    years:       "1974–75",
    origScript:  "",
    country:     "",
    decade:      "1970s",
    inMemoriam:  "",
    position:    "",
    photo:       "blackman-helen.webp",
    education:   [],
    publications: []
  },

  // ===== #44  Kathleen Ouchi Yamaguchi, MD  (1975–78) =====
  {
    name:        "Kathleen Ouchi Yamaguchi, MD",
    years:       "1975–78",
    origScript:  "",
    country:     "",
    decade:      "1970s",
    inMemoriam:  "",
    position:    "",
    photo:       "yamaguchi-kathleen.webp",
    education:   [],
    publications: []
  },

  // ===== #45  Jacinto U. Dy-Liacco, MD  (1975–77) =====
  {
    name:        "Jacinto U. Dy-Liacco, MD",
    years:       "1975–77",
    origScript:  "",
    country:     "Philippines",
    decade:      "1970s",
    inMemoriam:  "yes",
    position:    "",
    photo:       "dy-liacco-jacinto.webp",
    education:   [],
    publications: []
  },

  // ===== #46  Richard Dennis, MD  (1976–77) =====
  {
    name:        "Richard Dennis, MD",
    years:       "1976–77",
    origScript:  "",
    country:     "",
    decade:      "1970s",
    inMemoriam:  "yes",
    position:    "",
    photo:       "dennis-richard.webp",
    education:   [],
    publications: []
  },

  // ===== #47  George Mintsioulis, MD  (1976–77) =====
  {
    name:        "George Mintsioulis, MD",
    years:       "1976–77",
    origScript:  "",
    country:     "",
    decade:      "1970s",
    inMemoriam:  "",
    position:    "",
    photo:       "mintsioulis-george.webp",
    education:   [],
    publications: []
  },

  // ===== #48  Robert S. Weinberg, MD  (1976–77) =====
  {
    name:        "Robert S. Weinberg, MD",
    years:       "1976–77",
    origScript:  "",
    country:     "",
    decade:      "1970s",
    inMemoriam:  "2024",
    position:    "",
    photo:       "weinberg-robert.webp",
    education:   [],
    publications: []
  },

  // ===== #49  Ira G. Wong, MD  (1976–77) =====
  {
    name:        "Ira G. Wong, MD",
    years:       "1976–77",
    origScript:  "",
    country:     "",
    decade:      "1970s",
    inMemoriam:  "yes",
    position:    "Kaiser Permanente Medical Center",
    photo:       "wong-ira.webp",
    education:   [],
    publications: [
      { title:"Reduction of Cyclosporine Dosage With Ketoconazole in a Patient With Birdshot Retinochoroidopathy", url:"https://www.ajo.com/article/S0002-9394(99)80246-3/fulltext" }
    ]
  },

  // ===== #50  Robert J. Masi, MD  (1977–78) =====
  {
    name:        "Robert J. Masi, MD",
    years:       "1977–78",
    origScript:  "",
    country:     "",
    decade:      "1970s",
    inMemoriam:  "yes",
    position:    "",
    photo:       "masi-robert.webp",
    education:   [],
    publications: [
      { title:"Ocular Microbial Flora in Immunodeficient Patients", url:"https://jamanetwork.com/…/633450" }
    ]
  },

  // ===== #51  Dean C. Brick, MD  (1978–79) =====
  {
    name:        "Dean C. Brick, MD",
    years:       "1978–79",
    origScript:  "",
    country:     "—",
    decade:      "1970s",
    inMemoriam:  "",
    position:    "—",
    photo:       "brick-dean.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"Ocular lesions associated with dissemination of type 2 herpes simplex virus from skin infection in newborn rabbits", url:"https://iovs.arvojournals.org/article.aspx?articleid=2159075" }
    ]
  },

  // ===== #52  Ulla (Christine) C. West, MD  (1978–79) =====
  {
    name:        "Ulla (Christine) C. West, MD",
    years:       "1978–79",
    origScript:  "",
    country:     "—",
    decade:      "1970s",
    inMemoriam:  "yes",
    position:    "—",
    photo:       "west-ulla.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #53  David H. Fischer, MD  (1978) =====
  {
    name:        "David H. Fischer, MD",
    years:       "1978",
    origScript:  "",
    country:     "—",
    decade:      "1970s",
    inMemoriam:  "",
    position:    "—",
    photo:       "fischer-david.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #54  Joseph B. Michelson, MD  (1978) =====
  {
    name:        "Joseph B. Michelson, MD",
    years:       "1978",
    origScript:  "",
    country:     "—",
    decade:      "1970s",
    inMemoriam:  "",
    position:    "Scripps Clinic and Research Foundation, La Jolla, CA",
    photo:       "michelson-joseph.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"Experimental Endophthalmitis Treated With an Implantable Osmotic Minipump", url:"https://jamanetwork.com/…/633062" }
    ]
  },

  // ===== #55  Fook Lin Leong-Sit, MD  (1979) =====
  {
    name:        "Fook Lin Leong-Sit, MD",
    years:       "1979",
    origScript:  "",
    country:     "—",
    decade:      "1970s",
    inMemoriam:  "yes",
    position:    "—",
    photo:       "leong-sit-fook.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #56  Fethy El-Sahn, MD  (1979) =====
  {
    name:        "Fethy El-Sahn, MD",
    years:       "1979",
    origScript:  "",
    country:     "—",
    decade:      "1970s",
    inMemoriam:  "yes",
    position:    "—",
    photo:       "el-sahn-fethy.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #57  Scott L. Feiler, MD  (1979–80) =====
  {
    name:        "Scott L. Feiler, MD",
    years:       "1979–80",
    origScript:  "",
    country:     "—",
    decade:      "1970s",
    inMemoriam:  "yes",
    position:    "—",
    photo:       "feiler-scott.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #58  William Culbertson, MD  (1979–80) =====
  {
    name:        "William Culbertson, MD",
    years:       "1979–80",
    origScript:  "",
    country:     "—",
    decade:      "1970s",
    inMemoriam:  "",
    position:    "—",
    photo:       "culbertson-william.jpg",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #59  Ali Mourad, MD  (1979) =====
  {
    name:        "Ali Mourad, MD",
    years:       "1979",
    origScript:  "",
    country:     "Europe",
    decade:      "1970s",
    inMemoriam:  "yes",
    position:    "—",
    photo:       "mourad-ali.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #60  Ivan Roy Schwab, MD  (UNKNOWN — confirm) =====
  {
    name:        "Ivan Roy Schwab, MD",
    years:       "UNKNOWN — confirm",
    origScript:  "",
    country:     "—",
    decade:      "",
    inMemoriam:  "",
    position:    "—",
    photo:       "schwab-ivan.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #61  Jonathan Belmont, MD  (1980–82) =====
  {
    name:        "Jonathan Belmont, MD",
    years:       "1980–82",
    origScript:  "",
    country:     "—",
    decade:      "1980s",
    inMemoriam:  "yes",
    position:    "—",
    photo:       "belmont-jonathan.jpg",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #62  Robert M. Lang, MD  (1980–81) =====
  {
    name:        "Robert M. Lang, MD",
    years:       "1980–81",
    origScript:  "",
    country:     "—",
    decade:      "1980s",
    inMemoriam:  "yes",
    position:    "—",
    photo:       "lang-robert.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"Pattern Dystrophy of the Retinal Pigment Epithelium", url:"https://www.aaojournal.org/article/S0161-6420(82)34632-1/fulltext" }
    ]
  },

  // ===== #63  Shao-Chen Li, MD  (1980–81) =====
  {
    name:        "Shao-Chen Li, MD",
    years:       "1980–81",
    origScript:  "李绍珍",
    country:     "China",
    decade:      "1980s",
    inMemoriam:  "2001",
    position:    "Ophthalmologist; Academician, Chinese Academy of Engineering; Honorary Director, Zhongshan Ophthalmic Center, Sun Yat-sen University",
    photo:       "li-shao-chen.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #64  Bruce I. Kirschner, MD  (1981–82) =====
  {
    name:        "Bruce I. Kirschner, MD",
    years:       "1981–82",
    origScript:  "",
    country:     "—",
    decade:      "1980s",
    inMemoriam:  "",
    position:    "—",
    photo:       "kirschner-bruce-i.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #65  Vincent P. De Luise, MD  (1981–82) =====
  {
    name:        "Vincent P. De Luise, MD",
    years:       "1981–82",
    origScript:  "",
    country:     "—",
    decade:      "1980s",
    inMemoriam:  "",
    position:    "—",
    photo:       "deluise-vincent.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #66  David M. Meisler, MD  (1981–82) =====
  {
    name:        "David M. Meisler, MD",
    years:       "1981–82",
    origScript:  "",
    country:     "—",
    decade:      "1980s",
    inMemoriam:  "yes",
    position:    "Cleveland Clinic",
    photo:       "meisler-david.png",
    education:   [
      "—"
    ],
    publications: [
      { title:"Varicella-Zoster Virus Retinitis in Patients With AIDS", url:"(LINK NEEDED)" }
    ]
  },

  // ===== #67  Philip E. Newman, MD  (1981–82) =====
  {
    name:        "Philip E. Newman, MD",
    years:       "1981–82",
    origScript:  "",
    country:     "—",
    decade:      "1980s",
    inMemoriam:  "",
    position:    "—",
    photo:       "newman-philip.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #68  Carole Ann Casteen, MD  (1981) =====
  {
    name:        "Carole Ann Casteen, MD",
    years:       "1981",
    origScript:  "",
    country:     "—",
    decade:      "1980s",
    inMemoriam:  "",
    position:    "—",
    photo:       "casteen-carole.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #69  Yuichi Ohashi, MD  (1982–83) =====
  {
    name:        "Yuichi Ohashi, MD",
    years:       "1982–83",
    origScript:  "大橋裕一",
    country:     "Japan",
    decade:      "1980s",
    inMemoriam:  "",
    position:    "Professor Emeritus at Ehime University.Former President (学長) of Ehime University.Heavily involved in leadership for major academic societies, including serving as a Board Member for the Japanese Ophthalmological Society (日本眼科学会) and former President of the Japan Cornea Society (日本角膜学会).Career Summary:1985: Appointed Director of the Department of Ophthalmology at Kansai Rosai Hospital.Late 1980s: Served as a Lecturer in the Department of Ophthalmology at Osaka University.1992: Appointed Professor and Chair of the Department of Ophthalmology at the Ehime University School of Medicine.2003: Appointed Director (Hospital Director) of Ehime University Hospital.2006: Appointed Executive Director and Vice President of Ehime University.2015: Elected as the President (学長) of Ehime University.",
    photo:       "ohashi-yuichi.jpg",
    education:   [
      "1975: Graduated from the Osaka University Faculty of Medicine.1980: Appointed as an Assistant in the Department of Ophthalmology at Osaka University.1980s: Earned his Doctor of Philosophy (PhD) in Medical Sciences from Osaka University.1982–1984: Traveled to the United States to serve as a Senior Research Fellow at the UCSF Francis I. Proctor Foundation for Research in Ophthalmology, specializing in ocular infections and corneal immunology."
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #70  John C. Merriam, MD  (1982–83) =====
  {
    name:        "John C. Merriam, MD",
    years:       "1982–83",
    origScript:  "",
    country:     "—",
    decade:      "1980s",
    inMemoriam:  "",
    position:    "—",
    photo:       "merriam-john.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #71  Robert M. Webb, MD, FACS  (1982–83) =====
  {
    name:        "Robert M. Webb, MD, FACS",
    years:       "1982–83",
    origScript:  "",
    country:     "—",
    decade:      "1980s",
    inMemoriam:  "yes",
    position:    "—",
    photo:       "webb-robert-m.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"Indolent Bacterial Corneal Ulcers", url:"https://journals.lww.com/corneajrnl/abstract/1982/01040/indolent_bacterial_corneal_ulcers.11.aspx" }
    ]
  },

  // ===== #72  Gary P. Barth, MD  (1982–83) =====
  {
    name:        "Gary P. Barth, MD",
    years:       "1982–83",
    origScript:  "",
    country:     "—",
    decade:      "1980s",
    inMemoriam:  "",
    position:    "—",
    photo:       "barth-gary-p.jpg",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #73  Oliver Marc Korshin, MD  (1982) =====
  {
    name:        "Oliver Marc Korshin, MD",
    years:       "1982",
    origScript:  "",
    country:     "—",
    decade:      "1980s",
    inMemoriam:  "",
    position:    "—",
    photo:       "korshin-oliver.webp",
    education:   [
      "St. John's College, Maryland (A.B., 1963)"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #74  Eduardo P. Penna, MD  (1982–83) =====
  {
    name:        "Eduardo P. Penna, MD",
    years:       "1982–83",
    origScript:  "",
    country:     "Brazil",
    decade:      "1980s",
    inMemoriam:  "yes",
    position:    "—",
    photo:       "penna-eduardo.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #75  Shigeaki Ohno, MD  (1982) =====
  {
    name:        "Shigeaki Ohno, MD",
    years:       "1982",
    origScript:  "大野重昭",
    country:     "Japan",
    decade:      "1980s",
    inMemoriam:  "",
    position:    "Professor Emeritus at Hokkaido University Graduate School of Medicine.President / Chairman of the Board for the Japanese Society for Behçet's Disease.Director of Ophthalmology at Aishin Memorial Hospital (joined in April 2013).Career Summary:1989: Appointed as Professor and Chair of the Department of Ophthalmology at Yokohama City University School of Medicine.2000: Returned to his alma mater as the 5th Professor and Chair of the Department of Ophthalmology at Hokkaido University Graduate School of Medicine.2003: Served as the Vice Director of Hokkaido University Hospital.2008: Retired from the main chair position upon reaching mandatory retirement age and was appointed Specially Appointed Professor of the Department of Ocular Inflammatory Diseases at Hokkaido University.",
    photo:       "ohno-shigeaki.png",
    education:   [
      "1970: Graduated from Hokkaido University Faculty of Medicine.1970: Joined the Department of Ophthalmology at Hokkaido University Hospital as a resident.1970s: Earned his Doctor of Philosophy (PhD) in Medical Sciences.1980s: Traveled to the United States as an Overseas Research Fellow funded by the Ministry of Education to conduct advanced fellowship research at the UCSF Francis I. Proctor Foundation for Research in Ophthalmology."
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #76  Shiu Y. Kwok, MD, PhD, JD  (1983) =====
  {
    name:        "Shiu Y. Kwok, MD, PhD, JD",
    years:       "1983",
    origScript:  "郭兆源 (https://aiodoc.com/doctor/kwok-shiu-yuen)",
    country:     "USA",
    decade:      "1980s",
    inMemoriam:  "2024",
    position:    "Ophthalmologist in San Francisco for over four decades; began career as a molecular biologist; author of 50+ papers; Fellow of the American Academy of Ophthalmology; co-founder and medical advisor, Vision Care Services Foundation (SF Chinatown Lions Club); Chair, Prevent Blindness Northern California",
    photo:       "kwok-shiu.webp",
    education:   [
      "PhD, Molecular Biology, UCLA (1972)",
      "MD, Albert Einstein College of Medicine (1979)",
      "Internship, Mount Sinai–Bronx VA Medical Center",
      "Residency, UCSF",
      "Fellowships at Cornell Medical College, Proctor Foundation (UCSF), and Doheny Eye Institute (USC)",
      "JD, University of San Francisco"
    ],
    publications: [
      { title:"(blank)", url:"" }
    ]
  },

  // ===== #77  Wen Hua Zhang, MD  (1983–84) =====
  {
    name:        "Wen Hua Zhang, MD",
    years:       "1983–84",
    origScript:  "",
    country:     "Beijing Tongren Eye Center; active Chinese doctor page — VERIFY, likely LIVING; photo zhang-wen-hua.webp",
    decade:      "1980s",
    inMemoriam:  "",
    position:    "VERIFY",
    photo:       "zhang-wen-hua.jpg",
    education:   [
      "China"
    ],
    publications: [
      { title:"Chief Physician, Beijing Tongren Eye Center", url:"" }
    ]
  },

  // ===== #78  Martin Mayers, MD  (1983–84) =====
  {
    name:        "Martin Mayers, MD",
    years:       "1983–84",
    origScript:  "—",
    country:     "—",
    decade:      "1980s",
    inMemoriam:  "",
    position:    "—",
    photo:       "mayers-martin.jpg",
    education:   [
      "—"
    ],
    publications: [
      { title:"Recombinant human interferon alpha D in HSV-1 recurrence in the rabbit", url:"https://www.researchgate.net/publication/19242890_…" }
    ]
  },

  // ===== #79  Careen Yen Lowder, MD  (1983–84) =====
  {
    name:        "Careen Yen Lowder, MD",
    years:       "1983–84",
    origScript:  "—",
    country:     "—",
    decade:      "1980s",
    inMemoriam:  "",
    position:    "Cleveland Clinic",
    photo:       "lowder-careen.jpg",
    education:   [
      "—"
    ],
    publications: [
      { title:"Multifocal posterior necrotizing retinitis", url:"https://pubmed.ncbi.nlm.nih.gov/17434436/" }
    ]
  },

  // ===== #80  William R. Freeman, MD  (1983–84) =====
  {
    name:        "William R. Freeman, MD",
    years:       "1983–84",
    origScript:  "—",
    country:     "—",
    decade:      "1980s",
    inMemoriam:  "",
    position:    "UCSD Shiley Eye Institute",
    photo:       "freeman-william-r.jpg",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #81  James A. Parker, MD  (1984) =====
  {
    name:        "James A. Parker, MD",
    years:       "1984",
    origScript:  "—",
    country:     "—",
    decade:      "1980s",
    inMemoriam:  "",
    position:    "—",
    photo:       "parker-james.jpg",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #82  Richard L. Manka, MD  (1985–87) =====
  {
    name:        "Richard L. Manka, MD",
    years:       "1985–87",
    origScript:  "—",
    country:     "—",
    decade:      "1980s",
    inMemoriam:  "",
    position:    "—",
    photo:       "manka-richard.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #83  Jean Deschenes, MD  (1985–86) =====
  {
    name:        "Jean Deschenes, MD",
    years:       "1985–86",
    origScript:  "—",
    country:     "—",
    decade:      "1980s",
    inMemoriam:  "",
    position:    "—",
    photo:       "deschenes-jean.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #84  Paul F. Kinnear, MD  (1985) =====
  {
    name:        "Paul F. Kinnear, MD",
    years:       "1985",
    origScript:  "—",
    country:     "United Kingdom",
    decade:      "1980s",
    inMemoriam:  "yes",
    position:    "—",
    photo:       "kinnear-paul.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #85  Naushad Hussein, MD  (1986–87) =====
  {
    name:        "Naushad Hussein, MD",
    years:       "1986–87",
    origScript:  "—",
    country:     "—",
    decade:      "1980s",
    inMemoriam:  "",
    position:    "—",
    photo:       "hussein-naushad.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #86  Susan Lewallen, MD  (1987–88) =====
  {
    name:        "Susan Lewallen, MD",
    years:       "1987–88",
    origScript:  "—",
    country:     "—",
    decade:      "1980s",
    inMemoriam:  "",
    position:    "—",
    photo:       "lewallen-susan.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #87  Scott S. Weissman, MD  (1987–89) =====
  {
    name:        "Scott S. Weissman, MD",
    years:       "1987–89",
    origScript:  "—",
    country:     "—",
    decade:      "1980s",
    inMemoriam:  "",
    position:    "—",
    photo:       "weissman-scott.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #88  Rosemarie Breitbach, MD  (1987–88) =====
  {
    name:        "Rosemarie Breitbach, MD",
    years:       "1987–88",
    origScript:  "—",
    country:     "—",
    decade:      "1980s",
    inMemoriam:  "yes",
    position:    "—",
    photo:       "breitbach-rosemarie.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #89  Robert A. Copeland, MD  (1988–89) =====
  {
    name:        "Robert A. Copeland, MD",
    years:       "1988–89",
    origScript:  "—",
    country:     "—",
    decade:      "1980s",
    inMemoriam:  "",
    position:    "—",
    photo:       "copeland-robert.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #90  Todd P. Margolis, MD  (1988–89) =====
  {
    name:        "Todd P. Margolis, MD",
    years:       "1988–89",
    origScript:  "—",
    country:     "—",
    decade:      "1980s",
    inMemoriam:  "",
    position:    "—",
    photo:       "margolis-todd.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #91  Takeshi Naito, MD  (1988–89) =====
  {
    name:        "Takeshi Naito, MD",
    years:       "1988–89",
    origScript:  "内藤毅",
    country:     "Japan",
    decade:      "1980s",
    inMemoriam:  "",
    position:    "1981: Graduated from Tokushima University Faculty of Medicine and joined the Department of Ophthalmology.1982: Medical Staff, Department of Ophthalmology at Kochi Prefectural Agricultural Cooperative Comprehensive Hospital.1983: Assistant Professor, Department of Ophthalmology, Tokushima University Hospital.1984: Associate Professor, Faculty of Medicine, Tribhuvan University (Kingdom of Nepal), engaging in widespread medical camp operations.1988: Lecturer, Faculty of Medicine, Tokushima University.1988: Traveled abroad as a Ministry of Education Overseas Research Fellow to study at the University of California, San Francisco (UCSF) Proctor Foundation for Research in Ophthalmology.1997: Associate Professor, Faculty of Medicine, Tokushima University.2007: Initiated the long-term ophthalmic medical support mission in Mozambique.2015: Specially Appointed Professor, International Cooperation Division, International Center, Tokushima University.Current: Serving as a Full-time Ophthalmologist and Clinical Professor at JA Tokushima Kouseiren Anan Medical Center and Specially Appointed Professor at Tokushima University.Major Awards & Affiliations",
    photo:       "naito-takeshi.webp",
    education:   [
      "1981: Graduated from Tokushima University Faculty of Medicine and joined the Department of Ophthalmology.1982: Medical Staff, Department of Ophthalmology at Kochi Prefectural Agricultural Cooperative Comprehensive Hospital.1983: Assistant Professor, Department of Ophthalmology, Tokushima University Hospital.1984: Associate Professor, Faculty of Medicine, Tribhuvan University (Kingdom of Nepal), engaging in widespread medical camp operations.1988: Lecturer, Faculty of Medicine, Tokushima University.1988: Traveled abroad as a Ministry of Education Overseas Research Fellow to study at the University of California, San Francisco (UCSF) Proctor Foundation for Research in Ophthalmology.1997: Associate Professor, Faculty of Medicine, Tokushima University."
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #92  Marvin Patton, MD  (1988–89) =====
  {
    name:        "Marvin Patton, MD",
    years:       "1988–89",
    origScript:  "—",
    country:     "—",
    decade:      "1980s",
    inMemoriam:  "",
    position:    "—",
    photo:       "patton-marvin.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #93  Carlos Pavesio, MD  (1988) =====
  {
    name:        "Carlos Pavesio, MD",
    years:       "1988",
    origScript:  "—",
    country:     "Brazil",
    decade:      "1980s",
    inMemoriam:  "",
    position:    "Moorfields Eye Hospital, London",
    photo:       "pavesio-carlos.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #94  Eirene Wong, MD  (1989–90) =====
  {
    name:        "Eirene Wong, MD",
    years:       "1989–90",
    origScript:  "—",
    country:     "—",
    decade:      "1980s",
    inMemoriam:  "",
    position:    "—",
    photo:       "wong-eirene.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #95  Cesar R. Espiritu, MD  (1989–90) =====
  {
    name:        "Cesar R. Espiritu, MD",
    years:       "1989–90",
    origScript:  "—",
    country:     "Philippines",
    decade:      "1980s",
    inMemoriam:  "",
    position:    "—",
    photo:       "espiritu-cesar.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #96  James P. Dunn, MD  (1989–90) =====
  {
    name:        "James P. Dunn, MD",
    years:       "1989–90",
    origScript:  "—",
    country:     "—",
    decade:      "1980s",
    inMemoriam:  "",
    position:    "Mid Atlantic Retina / Wills Eye",
    photo:       "dunn-james.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #97  Frances M. Dossetor, MD  (1989–90) =====
  {
    name:        "Frances M. Dossetor, MD",
    years:       "1989–90",
    origScript:  "—",
    country:     "—",
    decade:      "1980s",
    inMemoriam:  "",
    position:    "—",
    photo:       "dossetor-frances.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #98  Alejandro O. Climent, MD  (1990–91) =====
  {
    name:        "Alejandro O. Climent, MD",
    years:       "1990–91",
    origScript:  "—",
    country:     "Mexico",
    decade:      "1990s",
    inMemoriam:  "",
    position:    "—",
    photo:       "climent-alejandro.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #99  Lincoln L. Freitas, MD  (1990–91) =====
  {
    name:        "Lincoln L. Freitas, MD",
    years:       "1990–91",
    origScript:  "—",
    country:     "Brazil",
    decade:      "1990s",
    inMemoriam:  "",
    position:    "—",
    photo:       "freitas-lincoln.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #100  John Bierly, MD  (1990–92) =====
  {
    name:        "John Bierly, MD",
    years:       "1990–92",
    origScript:  "—",
    country:     "—",
    decade:      "1990s",
    inMemoriam:  "",
    position:    "—",
    photo:       "bierly-john.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #101  Yoshitsugu Inoue, MD  (1990–91) =====
  {
    name:        "Yoshitsugu Inoue, MD",
    years:       "1990–91",
    origScript:  "名誉病院長 [眼科]\n井上 幸次",
    country:     "Japan",
    decade:      "1990s",
    inMemoriam:  "",
    position:    "平成5年1月\t大手前病院眼科部長\n平成8年5月\t大阪大学眼科講師\n平成10年4月\t大阪大学眼科助教授\n平成13年7月\t鳥取大学眼科（平成14年4月より視覚病態学と改名）教授\n令和4年4月\t日野病院名誉病院長",
    photo:       "inoue-yoshitsugu.webp",
    education:   [
      "昭和56年3月\t大阪大学医学部卒業",
      "昭和62年3月\t大阪大学医学部大学院修了",
      "昭和63年11月\t大阪大学眼科助手",
      "平成元年7月\tUCSF（University of California San Francisco）プロテクター研究所研究員"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #102  Michiharu Ishizaki, MD  (1990–91) =====
  {
    name:        "Michiharu Ishizaki, MD",
    years:       "1990–91",
    origScript:  "石崎道治 院長",
    country:     "Japan",
    decade:      "1990s",
    inMemoriam:  "",
    position:    "獨協医科大学臨床教授（地域医療2012～）\n\n　〈獨協医科大学の1年生・3年生が当院で地域医療の体験実習を行っています〉\n\n獨協医科大学非常勤講師（眼科2001～）\n\n日本眼科学会認定専門医（1989～）\n\n栃木県眼科医会監事（2022～2026.3）\n\n日本アレルギー学会認定専門医（2000～2021.３）\n\n栃木県眼科医会副会長（2018～2022.3）\n\n日本眼科医会代議員　（2018～2022.3）",
    photo:       "ishizaki-michiharu.webp",
    education:   [
      "979年",
      "獨協医科大学眼科入局",
      "1985年",
      "獨協医科大学臨床講師就任",
      "1987年",
      "医学博士授与",
      "博士論文：【スギ花粉によるアレルギー性結膜の実験的・組織学的研究】",
      "・石﨑道治",
      "・アレルギー35：1149‐1157、1986　本研究の一部は、文部科学省研究費No.60771421によります。",
      "1990年",
      "関連論文：【スギ花粉性結膜炎の疫学調査と重症度分類】",
      "・石﨑道治．他",
      "・日本の眼科67（6）：17-23、1996  　 本研究の一部は、昭和59年度社団法人日本眼科医会学術振興助成金によります。",
      "米国カルフォルニア州立大学プロクター研究所留学：",
      "クラミジア感染症のワクチン開発のため、分子生物学を用いてクラミジア蛋白の抗原基を研究",
      "研究論文：【Immune specificity of murine T cell lines to the major outer membrane protein of chlamydia trachomatis.】",
      "・Ishizaki M. Judith E. Allen P. Robert Beatty. Richard S. Stephans.",
      "・Infection and Immunity  60：3714-3718,1992（世界的に有名な医学雑誌）",
      "1991年",
      "獨協医科大学講師就任",
      "1999年",
      "獨協医科大学助教授就任",
      "2001年",
      "石﨑眼科開業"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #103  Zeng Junwen, MD  (1991–93) =====
  {
    name:        "Zeng Junwen, MD",
    years:       "1991–93",
    origScript:  "曾骏文",
    country:     "China",
    decade:      "1990s",
    inMemoriam:  "",
    position:    "Deputy Director, Dept. of Optometry, Zhongshan Ophthalmic Center, Sun Yat-sen University",
    photo:       "junwen-zeng.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #104  Andres Klaeger, MD  (1992–93) =====
  {
    name:        "Andres Klaeger, MD",
    years:       "1992–93",
    origScript:  "—",
    country:     "Switzerland",
    decade:      "1990s",
    inMemoriam:  "",
    position:    "—",
    photo:       "klaeger-andres.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #105  John H. Wilkins, MD  (1992–93) =====
  {
    name:        "John H. Wilkins, MD",
    years:       "1992–93",
    origScript:  "—",
    country:     "—",
    decade:      "1990s",
    inMemoriam:  "",
    position:    "—",
    photo:       "wilkins-john.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #106  Prabjot Channa, MD  (1993–94) =====
  {
    name:        "Prabjot Channa, MD",
    years:       "1993–94",
    origScript:  "—",
    country:     "India",
    decade:      "1990s",
    inMemoriam:  "",
    position:    "—",
    photo:       "channa-prabjot.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #107  Douglas Holsclaw, MD  (1993–95) =====
  {
    name:        "Douglas Holsclaw, MD",
    years:       "1993–95",
    origScript:  "—",
    country:     "—",
    decade:      "1990s",
    inMemoriam:  "",
    position:    "—",
    photo:       "holsclaw-douglas.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #108  Mark Milner, MD  (1993–95) =====
  {
    name:        "Mark Milner, MD",
    years:       "1993–95",
    origScript:  "—",
    country:     "—",
    decade:      "1990s",
    inMemoriam:  "",
    position:    "The Eye Center of Southern Connecticut (leadership)",
    photo:       "milner-mark.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #109  William Hodge, MD  (1993–95) =====
  {
    name:        "William Hodge, MD",
    years:       "1993–95",
    origScript:  "—",
    country:     "—",
    decade:      "1990s",
    inMemoriam:  "",
    position:    "—",
    photo:       "hodge-william.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"(title needed)", url:"https://www.ajo.com/article/S0002-9394(99)80133-0/fulltext" }
    ]
  },

  // ===== #110  David Heiden, MD  (1993) =====
  {
    name:        "David Heiden, MD",
    years:       "1993",
    origScript:  "",
    country:     "USA",
    decade:      "1990s",
    inMemoriam:  "",
    position:    "Emergency Medicine: Spent 12 years working as an emergency room doctor, including serving a tenure as the Emergency Room Director at CPMC.Refugee & Crisis Response: His dual background in emergency care and medicine led him to serve in global refugee disasters. His photo-documentary work in these crisis zones has been published in books and displayed at the San Francisco Museum of Modern Art (SFMOMA).HIV/AIDS Ocular Pioneering: Deeply impacted by the peak of the AIDS epidemic, he directed the Special Clinic for Ocular Complications of HIV/AIDS at Mt. Zion Hospital/UCSF (1996–1998).Global Blindness Prevention: He revolutionized global healthcare by training primary care doctors in resource-poor countries—including Ukraine, Russia, China, Myanmar, and India—to use indirect ophthalmoscopes to spot and treat CMV retinitis, successfully preventing irreversible blindness in thousands of HIV/AIDS patients.Major Humanitarian Recognition: Awarded the American Academy of Ophthalmology's (AAO) Outstanding Humanitarian Award in 2018 for his global impact.Current Positions & AffiliationsClinical Practice: Practices as a senior general and subspecialty ophthalmologist at Pacific Eye Associates in San Francisco, CA, focusing on uveitis and systemic-linked eye illnesses.Hospital Affiliations: Maintains staff privileges at California Pacific Medical Center (CPMC) Van Ness & Davies campuses and the UCSF Health St. Mary's Hospital network.Non-Profit Leadership: Serves as the Medical Director of the AIDS Eye Initiative at the Seva Foundation Center for Innovation in Eye Care, continuing his humanitarian collaborations with organizations like Doctors Without Borders (MSF).",
    photo:       "heiden-david.webp",
    education:   [
      "Undergraduate Degree: Bachelor of Arts (BA) in History, graduated cum laude from Cornell University.Medical School: Doctor of Medicine (MD) from New York Medical College.Residency Programs: Dual residency training in both Internal Medicine and Ophthalmology at California Pacific Medical Center (CPMC) (formerly Pacific Presbyterian Medical Center). He is uniquely double board-certified in both specialties.Research Fellowships: Completed scientific research fellowships focusing on cardiovascular disease and blood coagulation.Clinical Fellowship: Completed a subspecialty clinical fellowship in Uveitis and Ocular Inflammation at the UCSF F.I. Proctor Foundation."
    ],
    publications: [
      { title:"Title: Chronic low grade anterior uveitisPublished In: Mayo Clinic Proceedings (1993)Co-authors: David Heiden, N. Naushad Hussein, and H. Bruce OstlerClinical Focus: This research focused on the diagnostic nuances, long-term management, and systemic associations of persistent, low-grade inflammation in the anterior chamber of the eye.", url:"" }
    ]
  },

  // ===== #111  Naresh Joshi, MD  (1993) =====
  {
    name:        "Naresh Joshi, MD",
    years:       "1993",
    origScript:  "—",
    country:     "—",
    decade:      "1990s",
    inMemoriam:  "",
    position:    "—",
    photo:       "joshi-naresh.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"(title needed)", url:"https://www.nature.com/articles/eye1994177" }
    ]
  },

  // ===== #112  David Clark Gritz, MD  (1994–95) =====
  {
    name:        "David Clark Gritz, MD",
    years:       "1994–95",
    origScript:  "—",
    country:     "—",
    decade:      "1990s",
    inMemoriam:  "",
    position:    "Moorfields Eye Hospital, UAE",
    photo:       "gritz-david.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"Infectious corneal ulceration: a proposal for neglected tropical disease status", url:"https://pmc.ncbi.nlm.nih.gov/articles/PMC6883276/" }
    ]
  },

  // ===== #113  Thomas M. Lietman, MD  (1994–95) =====
  {
    name:        "Thomas M. Lietman, MD",
    years:       "1994–95",
    origScript:  "—",
    country:     "usa",
    decade:      "1990s",
    inMemoriam:  "",
    position:    "Director, F.I. Proctor Foundation, UCSF",
    photo:       "lietman-thomas.webp",
    education:   [
      "BA, Molecular Biophysics and Biochemistry — Yale College",
      "MD — Columbia University College of Physicians and Surgeons",
      "Fellow — National Eye Institute, HHMI-NIH, Bethesda, MD",
      "Residency, Ophthalmology — Wilmer Eye Institute, Johns Hopkins University",
      "Fellow, Cornea & External Diseases and Uveitis — F.I. Proctor Foundation, UCSF",
      "Fellow, Modeling of Infectious Diseases — Department of Epidemiology & Biostatistics, UCSF",
      "Complex Systems Summer School — Santa Fe Institute"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #114  Chihori Wada, MD  (1995–96) =====
  {
    name:        "Chihori Wada, MD",
    years:       "1995–96",
    origScript:  "和田 千穂里\n日本医科大学眼科学教室",
    country:     "Japan",
    decade:      "1990s",
    inMemoriam:  "",
    position:    "",
    photo:       "wada-chihori.webp",
    education:   [
      "日本医科大学眼科学教室  Department of Ophthalmology at Nippon Medical School"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #115  Emmett T. Cunningham, MD, PhD  (1995–96) =====
  {
    name:        "Emmett T. Cunningham, MD, PhD",
    years:       "1995–96",
    origScript:  "—",
    country:     "—",
    decade:      "1990s",
    inMemoriam:  "",
    position:    "—",
    photo:       "cunningham-emmett.webp",
    education:   [
      "MD from Johns Hopkins University",
      "MPH in Epidemiology and Statistics from Johns Hopkins University",
      "PhD in Neuroscience from the University of California, San Diego (UCSD) for research conducted at The Salk Institute",
      "Residency in Ophthalmology at UCSF and The Francis I. Proctor Foundation",
      "Fellowship in Corneal Disease and Uveitis at UCSF and The Francis I. Proctor Foundation",
      "Medical Retina and Uveitis Fellowship at Moorfields Eye Hospital, London",
      "Fellowship in Public Health Ophthalmology at the Wilmer Eye Institute, Baltimore​"
    ],
    publications: [
      { title:"Prevalence and causes of clinically detectable uveitic serous retinal detachment", url:"https://pubmed.ncbi.nlm.nih.gov/33530714/" }
    ]
  },

  // ===== #116  Diana Conrad, MD  (1995) =====
  {
    name:        "Diana Conrad, MD",
    years:       "1995",
    origScript:  "—",
    country:     "—",
    decade:      "1990s",
    inMemoriam:  "",
    position:    "—",
    photo:       "conrad-diana.webp",
    education:   [
      "Executive Leadership & Founder RolesExecutive Chairman & Co-Founder at Eyconis, an Ascendis Pharma spinout.Executive Chairman & Co-Founder at Visara, Inc., a subsidiary of NovaBridge Biosciences.Executive Chairman at Oryon Cell Therapies.Board MembershipsVice Chairman of the Board at NovaBridge Biosciences (appointed in February 2026).Board Director at Aviceda Therapeutics (joined April 2025).Board Director at multiple biotech companies including Nacuity Pharmaceuticals, RetiNova, and Salution Health.Academic & Clinical RolesFellow at the Stanford University Distinguished Career Institute (2024–Present).Adjunct Clinical Professor of Ophthalmology at Stanford University.Director of the Uveitis Service at the California Pacific Medical Center."
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #117  Kenneth Chern, MD  (1996–98) =====
  {
    name:        "Kenneth Chern, MD",
    years:       "1996–98",
    origScript:  "—",
    country:     "—",
    decade:      "1990s",
    inMemoriam:  "",
    position:    "—",
    photo:       "chern-kenneth.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #118  Anthony J. De Rosa, MD  (1996–97) =====
  {
    name:        "Anthony J. De Rosa, MD",
    years:       "1996–97",
    origScript:  "—",
    country:     "—",
    decade:      "1990s",
    inMemoriam:  "",
    position:    "—",
    photo:       "rosa-anthony.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #119  Michael E. Zegans, MD  (1996–98) =====
  {
    name:        "Michael E. Zegans, MD",
    years:       "1996–98",
    origScript:  "—",
    country:     "—",
    decade:      "1990s",
    inMemoriam:  "",
    position:    "—",
    photo:       "zegans-michael.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"Disappearance of trachoma from Western Nepal", url:"https://pubmed.ncbi.nlm.nih.gov/12203176/" }
    ]
  },

  // ===== #120  Michele Mabon, MD  (1997–99) =====
  {
    name:        "Michele Mabon, MD",
    years:       "1997–99",
    origScript:  "Dre. Michèle Mabon",
    country:     "Canada",
    decade:      "1990s",
    inMemoriam:  "",
    position:    "Clinique O, Quebec",
    photo:       "mabon-michele.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"Does clinical diagnosis indicate ocular chlamydial infection in areas with a low prevalence of trachoma?", url:"https://pubmed.ncbi.nlm.nih.gov/12187424/" }
    ]
  },

  // ===== #121  Jonathan I. Diamant, MD  (1997–99) =====
  {
    name:        "Jonathan I. Diamant, MD",
    years:       "1997–99",
    origScript:  "—",
    country:     "—",
    decade:      "1990s",
    inMemoriam:  "",
    position:    "—",
    photo:       "diamant-jonathan.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #122  Phagarnart Eiumtrakul, MD  (1997) =====
  {
    name:        "Phagarnart Eiumtrakul, MD",
    years:       "1997",
    origScript:  "ผกานาฏ เอี่ยมตระกูล",
    country:     "Thailand",
    decade:      "1990s",
    inMemoriam:  "",
    position:    "Bumrungrad International Hospital, Bangkok",
    photo:       "eiumtrakul-phagarnart.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #123  N. Kevin Wade, MDCM  (1998–99) =====
  {
    name:        "N. Kevin Wade, MDCM",
    years:       "1998–99",
    origScript:  "—",
    country:     "Canada",
    decade:      "1990s",
    inMemoriam:  "",
    position:    "Vancouver Eye Associates",
    photo:       "wade-n.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #124  Vineet Nicholas Batra, MD  (1999–00) =====
  {
    name:        "Vineet Nicholas Batra, MD",
    years:       "1999–00",
    origScript:  "—",
    country:     "—",
    decade:      "1990s",
    inMemoriam:  "",
    position:    "—",
    photo:       "batra-vineet.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"Phakic intraocular lenses", url:"https://pubmed.ncbi.nlm.nih.gov/11406428/" }
    ]
  },

  // ===== #125  Bruce D. Gaynor, MD  (1999–00) =====
  {
    name:        "Bruce D. Gaynor, MD",
    years:       "1999–00",
    origScript:  "—",
    country:     "—",
    decade:      "1990s",
    inMemoriam:  "",
    position:    "F.I. Proctor Foundation, UCSF",
    photo:       "gaynor-bruce.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"Herd protection against trachoma", url:"https://pubmed.ncbi.nlm.nih.gov/19329003/" },
      { title:"Mass azithromycin & childhood mortality (JAMA 2009)", url:"https://pubmed.ncbi.nlm.nih.gov/19724043/" },
      { title:"[60+ trachoma papers]", url:"" }
    ]
  },

  // ===== #126  Abha Kumar, MD  (1999–00) =====
  {
    name:        "Abha Kumar, MD",
    years:       "1999–00",
    origScript:  "—",
    country:     "—",
    decade:      "1990s",
    inMemoriam:  "",
    position:    "—",
    photo:       "kumar-abha.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"Novel mutations in CHST6… macular corneal dystrophy in southern India", url:"https://pubmed.ncbi.nlm.nih.gov/14609920/" }
    ]
  },

  // ===== #127  Irene C. Kuo, MD  (1999–00) =====
  {
    name:        "Irene C. Kuo, MD",
    years:       "1999–00",
    origScript:  "—",
    country:     "—",
    decade:      "1990s",
    inMemoriam:  "",
    position:    "Johns Hopkins Wilmer Eye Institute",
    photo:       "kuo-irene.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"Genotypic analysis of CMV retinitis… ganciclovir implant", url:"https://pubmed.ncbi.nlm.nih.gov/12504692/" }
    ]
  },

  // ===== #128  Ayman Naseri, MD  (2000–01) =====
  {
    name:        "Ayman Naseri, MD",
    years:       "2000–01",
    origScript:  "—",
    country:     "—",
    decade:      "2000s",
    inMemoriam:  "",
    position:    "—",
    photo:       "naseri-ayman.jpg",
    education:   [
      "—"
    ],
    publications: [
      { title:"Early resident-performed cataract surgery", url:"https://pubmed.ncbi.nlm.nih.gov/21640259/" }
    ]
  },

  // ===== #129  Anthony J. Aldave, MD  (2000–02) =====
  {
    name:        "Anthony J. Aldave, MD",
    years:       "2000–02",
    origScript:  "—",
    country:     "—",
    decade:      "2000s",
    inMemoriam:  "",
    position:    "UCLA Stein Eye Institute",
    photo:       "aldave-anthony.jpg",
    education:   [
      "—"
    ],
    publications: [
      { title:"Novel mutations in CHST6… southern India", url:"https://pubmed.ncbi.nlm.nih.gov/14609920/" }
    ]
  },

  // ===== #130  Martin McKibbin, MD  (2000–01) =====
  {
    name:        "Martin McKibbin, MD",
    years:       "2000–01",
    origScript:  "—",
    country:     "United Kingdom",
    decade:      "2000s",
    inMemoriam:  "",
    position:    "Leeds Teaching Hospitals NHS Trust",
    photo:       "mckibbin-martin.jpg",
    education:   [
      "—"
    ],
    publications: [
      { title:"De novo and inherited dominant variants in U4 and U6 snRNAs cause retinitis pigmentosa", url:"https://pubmed.ncbi.nlm.nih.gov/39830270/" }
    ]
  },

  // ===== #131  Anna Hovakimyan, MD  (2000–01) =====
  {
    name:        "Anna Hovakimyan, MD",
    years:       "2000–01",
    origScript:  "—",
    country:     "Armenia",
    decade:      "2000s",
    inMemoriam:  "",
    position:    "—",
    photo:       "hovakimyan-anna.jpg",
    education:   [
      "—"
    ],
    publications: [
      { title:"Ocular toxoplasmosis", url:"https://pubmed.ncbi.nlm.nih.gov/12434481/" }
    ]
  },

  // ===== #132  Carlos Siverio Llosa, MD  (2000–01) =====
  {
    name:        "Carlos Siverio Llosa, MD",
    years:       "2000–01",
    origScript:  "—",
    country:     "Peru",
    decade:      "2000s",
    inMemoriam:  "",
    position:    "President of the Board, Oftálmica Clínica de la Visión; cataract, uveitis, cornea & inflammatory disease",
    photo:       "llosa-carlos.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"(title needed)", url:"https://journals.sagepub.com/doi/10.5301/EJO.2011.6403" }
    ]
  },

  // ===== #133  John So-Min Chang, MD  (2000–01) =====
  {
    name:        "John So-Min Chang, MD",
    years:       "2000–01",
    origScript:  "張叔銘",
    country:     "Hong Kong",
    decade:      "2000s",
    inMemoriam:  "",
    position:    "—",
    photo:       "chang-john.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #134  Yumi Imai, MD  (2000–01) =====
  {
    name:        "Yumi Imai, MD",
    years:       "2000–01",
    origScript:  "—",
    country:     "—",
    decade:      "2000s",
    inMemoriam:  "",
    position:    "—",
    photo:       "imai-yumi.jpg",
    education:   [
      "—"
    ],
    publications: [
      { title:"Emergence of drug-resistant CMV retinitis… treated with ganciclovir", url:"https://pubmed.ncbi.nlm.nih.gov/14767813/" }
    ]
  },

  // ===== #135  Bruno Branco, MD  (2001–02) =====
  {
    name:        "Bruno Branco, MD",
    years:       "2001–02",
    origScript:  "—",
    country:     "Brazil",
    decade:      "2000s",
    inMemoriam:  "",
    position:    "—",
    photo:       "branco-bruno-castelo.jpg",
    education:   [
      "—"
    ],
    publications: [
      { title:"Hypotony maculopathy in HLA-B27-associated uveitis", url:"https://pubmed.ncbi.nlm.nih.gov/18569798/" }
    ]
  },

  // ===== #136  Bennie H. Jeng, MD  (2002–03) =====
  {
    name:        "Bennie H. Jeng, MD",
    years:       "2002–03",
    origScript:  "—",
    country:     "—",
    decade:      "2000s",
    inMemoriam:  "",
    position:    "Chair, Dept. of Ophthalmology, University of Pennsylvania",
    photo:       "jeng-bennie.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"Epidemiology of ulcerative keratitis in Northern California", url:"https://pubmed.ncbi.nlm.nih.gov/20697003/" },
      { title:"Bacterial vs fungal keratitis: a photographic survey", url:"https://pubmed.ncbi.nlm.nih.gov/22395880/" }
    ]
  },

  // ===== #137  Tisha Prabriputaloong, MD  (2002–04) =====
  {
    name:        "Tisha Prabriputaloong, MD",
    years:       "2002–04",
    origScript:  "ทิชา ประพฤติทะลุ",
    country:     "Thailand",
    decade:      "2000s",
    inMemoriam:  "",
    position:    "—",
    photo:       "prabriputaloong-tisha.jpg",
    education:   [
      "—"
    ],
    publications: [
      { title:"Epidemiology of HSV eye disease in Northern California", url:"https://pubmed.ncbi.nlm.nih.gov/25299934/" }
    ]
  },

  // ===== #138  Rookaya Mather, MD, FRCSC  (2002–03) =====
  {
    name:        "Rookaya Mather, MD, FRCSC",
    years:       "2002–03",
    origScript:  "—",
    country:     "Canada",
    decade:      "2000s",
    inMemoriam:  "",
    position:    "Western University (Schulich), Cornea/External Disease",
    photo:       "mather-rookaya.jpg",
    education:   [
      "—"
    ],
    publications: [
      { title:"Uveitis-associated flap edema after LASIK", url:"https://pubmed.ncbi.nlm.nih.gov/15953462/" }
    ]
  },

  // ===== #139  M. Teresa Magone, MD  (2003–04) =====
  {
    name:        "M. Teresa Magone, MD",
    years:       "2003–04",
    origScript:  "—",
    country:     "—",
    decade:      "2000s",
    inMemoriam:  "",
    position:    "—",
    photo:       "magone-m.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"Chronic recurrent VZV keratitis confirmed by PCR", url:"https://pubmed.ncbi.nlm.nih.gov/15953460/" }
    ]
  },

  // ===== #140  Sarah M. Nehls, MD  (2003–04) =====
  {
    name:        "Sarah M. Nehls, MD",
    years:       "2003–04",
    origScript:  "—",
    country:     "—",
    decade:      "2000s",
    inMemoriam:  "",
    position:    "University of Wisconsin Health",
    photo:       "nehls-sarah.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"Treatment of neurotrophic keratopathy with nasal dilator strips", url:"https://pubmed.ncbi.nlm.nih.gov/16234466/" }
    ]
  },

  // ===== #141  Gerami D. Seitzman, MD  (2003–04) =====
  {
    name:        "Gerami D. Seitzman, MD",
    years:       "2003–04",
    origScript:  "—",
    country:     "—",
    decade:      "2000s",
    inMemoriam:  "",
    position:    "F.I. Proctor Foundation, UCSF",
    photo:       "seitzman-gerami.webp",
    education:   [
      "MD, 1999 — University of Michigan, Ann Arbor",
      "Internship, Internal Medicine, 2000 — St. Joseph Mercy Hospital, Ann Arbor",
      "Residency, Ophthalmology, 2003 — Wilmer Eye Institute, Johns Hopkins University",
      "Fellowship, Cornea, External Disease & Uveitis, 2004 — Francis I. Proctor Foundation, UCSF"
    ],
    publications: [
      { title:"Rose bengal and lissamine green inhibit detection of HSV by PCR", url:"https://pubmed.ncbi.nlm.nih.gov/16564821/" }
    ]
  },

  // ===== #142  Anu Manadhar, MD  (2003–04) =====
  {
    name:        "Anu Manadhar, MD",
    years:       "2003–04",
    origScript:  "—",
    country:     "Nepal",
    decade:      "2000s",
    inMemoriam:  "",
    position:    "—",
    photo:       "manandhar-anu.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"High prevalence of anelloviruses in vitreous fluid of children with seasonal hyperacute panuveitis", url:"https://pubmed.ncbi.nlm.nih.gov/22492851/" }
    ]
  },

  // ===== #143  Nisha Acharya, MD  (2004–05) =====
  {
    name:        "Nisha Acharya, MD",
    years:       "2004–05",
    origScript:  "—",
    country:     "—",
    decade:      "2000s",
    inMemoriam:  "",
    position:    "F.I. Proctor Foundation, UCSF Associate Director",
    photo:       "acharya-nisha.jpg",
    education:   [
      "—"
    ],
    publications: [
      { title:"Correlation between clinical suspicion and PCR verification of infectious vitritis", url:"https://pubmed.ncbi.nlm.nih.gov/16490520/" }
    ]
  },

  // ===== #144  Michael Saidel, MD  (2004–05) =====
  {
    name:        "Michael Saidel, MD",
    years:       "2004–05",
    origScript:  "—",
    country:     "—",
    decade:      "2000s",
    inMemoriam:  "",
    position:    "—",
    photo:       "saidel-michael.jpg",
    education:   [
      "—"
    ],
    publications: [
      { title:"CMV retinitis after intravitreous triamcinolone in an immunocompetent patient", url:"https://pubmed.ncbi.nlm.nih.gov/16376669/" }
    ]
  },

  // ===== #145  Donald Stone, MD  (2004–05) =====
  {
    name:        "Donald Stone, MD",
    years:       "2004–05",
    origScript:  "—",
    country:     "—",
    decade:      "2000s",
    inMemoriam:  "",
    position:    "—",
    photo:       "stone-don.jpg",
    education:   [
      "—"
    ],
    publications: [
      { title:"Correlation between clinical suspicion and PCR verification of infectious vitritis", url:"https://pubmed.ncbi.nlm.nih.gov/16490520/" }
    ]
  },

  // ===== #146  Rocio M. Murphy, MD  (2004–05) =====
  {
    name:        "Rocio M. Murphy, MD",
    years:       "2004–05",
    origScript:  "—",
    country:     "Mexico",
    decade:      "2000s",
    inMemoriam:  "",
    position:    "Médica Sur, Mexico City",
    photo:       "murphy-rocio.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #147  Maria del Pilar Bernal, MD  (2005–06) =====
  {
    name:        "Maria del Pilar Bernal, MD",
    years:       "2005–06",
    origScript:  "—",
    country:     "—",
    decade:      "2000s",
    inMemoriam:  "",
    position:    "—",
    photo:       "bernal-maria-del-pilar.jpg",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #148  Eva Kim, MD  (2005–06) =====
  {
    name:        "Eva Kim, MD",
    years:       "2005–06",
    origScript:  "—",
    country:     "—",
    decade:      "2000s",
    inMemoriam:  "",
    position:    "—",
    photo:       "kim-eva.png",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #149  Deborah A. Gill, MD  (2005–06) =====
  {
    name:        "Deborah A. Gill, MD",
    years:       "2005–06",
    origScript:  "—",
    country:     "—",
    decade:      "2000s",
    inMemoriam:  "",
    position:    "—",
    photo:       "gill-deborah.png",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #150  Colleen Halfpenny, MD  (2005–06) =====
  {
    name:        "Colleen Halfpenny, MD",
    years:       "2005–06",
    origScript:  "—",
    country:     "—",
    decade:      "2000s",
    inMemoriam:  "",
    position:    "Wills Eye Hospital",
    photo:       "halfpenny-colleen.jpg",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #151  Matilda Chan, MD  (2006–07) =====
  {
    name:        "Matilda Chan, MD",
    years:       "2006–07",
    origScript:  "—",
    country:     "—",
    decade:      "2000s",
    inMemoriam:  "",
    position:    "F.I. Proctor Foundation / UCSF",
    photo:       "chan-matilda.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #152  Shane K. Kim, MD  (2006–07) =====
  {
    name:        "Shane K. Kim, MD",
    years:       "2006–07",
    origScript:  "—",
    country:     "—",
    decade:      "2000s",
    inMemoriam:  "",
    position:    "—",
    photo:       "kim-shane.jpg",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #153  Judy Ou, MD  (2006–07) =====
  {
    name:        "Judy Ou, MD",
    years:       "2006–07",
    origScript:  "—",
    country:     "—",
    decade:      "2000s",
    inMemoriam:  "",
    position:    "—",
    photo:       "ou-judy.jpg",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #154  Menen Ayalew Shibeshi, MD  (2006–07) =====
  {
    name:        "Menen Ayalew Shibeshi, MD",
    years:       "2006–07",
    origScript:  "—",
    country:     "Ethiopia",
    decade:      "2000s",
    inMemoriam:  "",
    position:    "—",
    photo:       "shibeshi-menen-ayalew.jpg",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #155  Wiwan Sansanayudh, MD  (2006–07) =====
  {
    name:        "Wiwan Sansanayudh, MD",
    years:       "2006–07",
    origScript:  "วิวรรณ ศันสนยุทธ",
    country:     "Thailand",
    decade:      "2000s",
    inMemoriam:  "",
    position:    "—",
    photo:       "sansanayudh-wiwan.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"Fusarium and Acanthamoeba keratitis: can a single centre detect outbreaks?", url:"https://pubmed.ncbi.nlm.nih.gov/18441185/" }
    ]
  },

  // ===== #156  Rapeeporn Yodprom, MD  (2006–07) =====
  {
    name:        "Rapeeporn Yodprom, MD",
    years:       "2006–07",
    origScript:  "รพีพร ยอดพรหม",
    country:     "Thailand",
    decade:      "2000s",
    inMemoriam:  "",
    position:    "—",
    photo:       "yodprom-rapeeporn.jpg",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #157  Julie Freidlin Leigh, MD  (2006–07) =====
  {
    name:        "Julie Freidlin Leigh, MD",
    years:       "2006–07",
    origScript:  "—",
    country:     "—",
    decade:      "2000s",
    inMemoriam:  "",
    position:    "—",
    photo:       "leigh-julie-freidlin.jpg",
    education:   [
      "—"
    ],
    publications: [
      { title:"Does asymptomatic shedding of HSV lead to false-positive diagnostic PCR results?", url:"https://www.researchgate.net/publication/5538690" }
    ]
  },

  // ===== #158  Nicole Fram, MD  (2007–08) =====
  {
    name:        "Nicole Fram, MD",
    years:       "2007–08",
    origScript:  "—",
    country:     "—",
    decade:      "2000s",
    inMemoriam:  "",
    position:    "Advanced Vision Care, Los Angeles",
    photo:       "fram-nicole.jpg",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #159  Jeremy Keenan, MD, MPH  (2007–08) =====
  {
    name:        "Jeremy Keenan, MD, MPH",
    years:       "2007–08",
    origScript:  "—",
    country:     "—",
    decade:      "2000s",
    inMemoriam:  "",
    position:    "F.I. Proctor Foundation, UCSF",
    photo:       "keenan-jeremy.jpg",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #160  Jason H. Skalet, MD  (2007–08) =====
  {
    name:        "Jason H. Skalet, MD",
    years:       "2007–08",
    origScript:  "—",
    country:     "—",
    decade:      "2000s",
    inMemoriam:  "",
    position:    "—",
    photo:       "skalet-jason.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #161  Agnieszka Nagpal, MD  (2007–08) =====
  {
    name:        "Agnieszka Nagpal, MD",
    years:       "2007–08",
    origScript:  "—",
    country:     "—",
    decade:      "2000s",
    inMemoriam:  "",
    position:    "—",
    photo:       "nagpal-agnes.jpg",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #162  Eliza Hoskins, MD  (2008–09) =====
  {
    name:        "Eliza Hoskins, MD",
    years:       "2008–09",
    origScript:  "—",
    country:     "—",
    decade:      "2000s",
    inMemoriam:  "",
    position:    "—",
    photo:       "hoskins-eliza.png",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #163  Yousuf Khalifa, MD, FACS  (2008–09) =====
  {
    name:        "Yousuf Khalifa, MD, FACS",
    years:       "2008–09",
    origScript:  "—",
    country:     "—",
    decade:      "2000s",
    inMemoriam:  "",
    position:    "Emory Eye Center",
    photo:       "khalifa-yousuf.jpg",
    education:   [
      "—"
    ],
    publications: [
      { title:"Exacerbation of Zoster Interstitial Keratitis After Zoster Vaccination in an Adult", url:"https://www.researchgate.net/publication/45583460" }
    ]
  },

  // ===== #164  Wantanee Sittivarakul, MD  (2008–09) =====
  {
    name:        "Wantanee Sittivarakul, MD",
    years:       "2008–09",
    origScript:  "วันทนีย์ สิทธิวรกุล",
    country:     "Thailand",
    decade:      "2000s",
    inMemoriam:  "",
    position:    "—",
    photo:       "sittivarakul-wantanee.jpg",
    education:   [
      "—"
    ],
    publications: [
      { title:"Bilateral effect of unilateral ranibizumab in patients with uveitis-related macular edema", url:"https://www.researchgate.net/publication/51454734" }
    ]
  },

  // ===== #165  Jamie Bhamra, MD  (2008–09) =====
  {
    name:        "Jamie Bhamra, MD",
    years:       "2008–09",
    origScript:  "—",
    country:     "Canada",
    decade:      "2000s",
    inMemoriam:  "",
    position:    "—",
    photo:       "bhamra-jamie.jpg",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #166  William L. Gilmer, MD  (2009–10) =====
  {
    name:        "William L. Gilmer, MD",
    years:       "2009–10",
    origScript:  "—",
    country:     "—",
    decade:      "2000s",
    inMemoriam:  "",
    position:    "—",
    photo:       "gilmer-william-l.png",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #167  Ying Qian, MD  (2009–10) =====
  {
    name:        "Ying Qian, MD",
    years:       "2009–10",
    origScript:  "—",
    country:     "—",
    decade:      "2000s",
    inMemoriam:  "",
    position:    "—",
    photo:       "qian-ying.jpg",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #168  Robert Fintelmann, MD  (2009–10) =====
  {
    name:        "Robert Fintelmann, MD",
    years:       "2009–10",
    origScript:  "—",
    country:     "—",
    decade:      "2000s",
    inMemoriam:  "",
    position:    "—",
    photo:       "fintelmann-robert.jpg",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #169  Choeng Jirawison, MD  (2009–10) =====
  {
    name:        "Choeng Jirawison, MD",
    years:       "2009–10",
    origScript:  "เชวงศ์ จิระวิศาล",
    country:     "Thailand",
    decade:      "2000s",
    inMemoriam:  "",
    position:    "—",
    photo:       "jirawison-choeng.jpg",
    education:   [
      "—"
    ],
    publications: [
      { title:"Clinical Features of Newly Diagnosed Cytomegalovirus Retinitis in Northern Thailand", url:"https://pmc.ncbi.nlm.nih.gov/articles/PMC3331920/" }
    ]
  },

  // ===== #170  Isabella Phan, MD  (2010–11) =====
  {
    name:        "Isabella Phan, MD",
    years:       "2010–11",
    origScript:  "—",
    country:     "—",
    decade:      "2010s",
    inMemoriam:  "",
    position:    "—",
    photo:       "phan-isabella.jpg",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #171  Mamta Agarwal, MD, FRCSEd, FRCOphth, FACS  (2010–11) =====
  {
    name:        "Mamta Agarwal, MD, FRCSEd, FRCOphth, FACS",
    years:       "2010–11",
    origScript:  "—",
    country:     "India",
    decade:      "2010s",
    inMemoriam:  "",
    position:    "—",
    photo:       "agarwal-mamta.jpg",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #172  Cyril Dalmon, MD  (2010–11) =====
  {
    name:        "Cyril Dalmon, MD",
    years:       "2010–11",
    origScript:  "—",
    country:     "—",
    decade:      "2010s",
    inMemoriam:  "",
    position:    "—",
    photo:       "dalmon-cyril.jpg",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #173  Akbar Shakoor, MD  (2010–11) =====
  {
    name:        "Akbar Shakoor, MD",
    years:       "2010–11",
    origScript:  "—",
    country:     "—",
    decade:      "2010s",
    inMemoriam:  "",
    position:    "—",
    photo:       "shakoor-akbar.jpg",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #174  Charles Lin, MD  (2011–12) =====
  {
    name:        "Charles Lin, MD",
    years:       "2011–12",
    origScript:  "—",
    country:     "—",
    decade:      "2010s",
    inMemoriam:  "",
    position:    "Stanford Health Care",
    photo:       "lin-charles.jpg",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #175  Ying Qian, MD  (2011–12) =====
  {
    name:        "Ying Qian, MD",
    years:       "2011–12",
    origScript:  "—",
    country:     "—",
    decade:      "2010s",
    inMemoriam:  "",
    position:    "—",
    photo:       "qian-ying.jpg",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #176  John A. Gonzales, MD  (2011–12) =====
  {
    name:        "John A. Gonzales, MD",
    years:       "2011–12",
    origScript:  "—",
    country:     "—",
    decade:      "2010s",
    inMemoriam:  "",
    position:    "Professor of Clinical Ophthalmology, F.I. Proctor Foundation, UCSF",
    photo:       "gonzales-john.jpg",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #177  Jennifer Rose-Nussbaumer, MD  (2012–13) =====
  {
    name:        "Jennifer Rose-Nussbaumer, MD",
    years:       "2012–13",
    origScript:  "—",
    country:     "—",
    decade:      "2010s",
    inMemoriam:  "",
    position:    "—",
    photo:       "rose-nussbaumer-jennifer.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #178  Elizabeth Grace, MD  (2012–13) =====
  {
    name:        "Elizabeth Grace, MD",
    years:       "2012–13",
    origScript:  "—",
    country:     "—",
    decade:      "2010s",
    inMemoriam:  "",
    position:    "—",
    photo:       "grace-elizabeth.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #179  Waroonchat Issariyapat, MD  (2012–13) =====
  {
    name:        "Waroonchat Issariyapat, MD",
    years:       "2012–13",
    origScript:  "วรฉัตร อิสริยาภัทร์",
    country:     "Thailand",
    decade:      "2010s",
    inMemoriam:  "",
    position:    "—",
    photo:       "issariyapat-waroonchat.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #180  Vincent Lam, MD  (2012–13) =====
  {
    name:        "Vincent Lam, MD",
    years:       "2012–13",
    origScript:  "—",
    country:     "—",
    decade:      "2010s",
    inMemoriam:  "",
    position:    "—",
    photo:       "lam-vincent.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #181  Joseph Sheehan, MD  (2013–14) =====
  {
    name:        "Joseph Sheehan, MD",
    years:       "2013–14",
    origScript:  "—",
    country:     "—",
    decade:      "2010s",
    inMemoriam:  "",
    position:    "—",
    photo:       "sheehan-joseph.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"Reliability of trachoma clinical grading", url:"https://journals.plos.org/plosntds/article?id=10.1371/journal.pntd.0002840" }
    ]
  },

  // ===== #182  Julie Schallhorn, MD  (2013–14) =====
  {
    name:        "Julie Schallhorn, MD",
    years:       "2013–14",
    origScript:  "—",
    country:     "—",
    decade:      "2010s",
    inMemoriam:  "",
    position:    "UCSF Ophthalmology",
    photo:       "schallhorn-julie.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #183  Thanapong Somkijrungroj, MD  (2013–14) =====
  {
    name:        "Thanapong Somkijrungroj, MD",
    years:       "2013–14",
    origScript:  "ธนาพงษ์ สมกิจรุ่งโรจน์",
    country:     "Thailand",
    decade:      "2010s",
    inMemoriam:  "",
    position:    "—",
    photo:       "somkijrungroj-thanapong.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"Multimodal imaging of white and dark without pressure fundus lesions", url:"https://pubmed.ncbi.nlm.nih.gov/25387048/" }
    ]
  },

  // ===== #184  Neil Chungfat, MD  (2013–14) =====
  {
    name:        "Neil Chungfat, MD",
    years:       "2013–14",
    origScript:  "—",
    country:     "—",
    decade:      "2010s",
    inMemoriam:  "",
    position:    "—",
    photo:       "chungfat-neil.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #185  Michael J. Geske, MD  (2014–15) =====
  {
    name:        "Michael J. Geske, MD",
    years:       "2014–15",
    origScript:  "—",
    country:     "—",
    decade:      "2010s",
    inMemoriam:  "",
    position:    "—",
    photo:       "geske-michael.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #186  Jeffrey R. Golen, MD  (2014–15) =====
  {
    name:        "Jeffrey R. Golen, MD",
    years:       "2014–15",
    origScript:  "—",
    country:     "—",
    decade:      "2010s",
    inMemoriam:  "",
    position:    "—",
    photo:       "golen-jeffrey.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #187  Weeraya Pimolrat, MD  (2014–15) =====
  {
    name:        "Weeraya Pimolrat, MD",
    years:       "2014–15",
    origScript:  "วีรยา พิมลรัฐ",
    country:     "Thailand",
    decade:      "2010s",
    inMemoriam:  "",
    position:    "—",
    photo:       "pimolrat-weeraya.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"Conjunctival Sensation in Scleritis", url:"https://pubmed.ncbi.nlm.nih.gov/26647348/" }
    ]
  },

  // ===== #188  Priya M. Janardhana, MD  (2014–15) =====
  {
    name:        "Priya M. Janardhana, MD",
    years:       "2014–15",
    origScript:  "—",
    country:     "—",
    decade:      "2010s",
    inMemoriam:  "",
    position:    "—",
    photo:       "janardhana-priya.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #189  Tova E. Mannis, MD  (2015–16) =====
  {
    name:        "Tova E. Mannis, MD",
    years:       "2015–16",
    origScript:  "—",
    country:     "—",
    decade:      "2010s",
    inMemoriam:  "",
    position:    "—",
    photo:       "mannis-tova.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #190  Nina Ni, MD  (2015–16) =====
  {
    name:        "Nina Ni, MD",
    years:       "2015–16",
    origScript:  "—",
    country:     "—",
    decade:      "2010s",
    inMemoriam:  "",
    position:    "—",
    photo:       "ni-nina.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #191  Wipada Laovirojjanakul, MD  (2015–16) =====
  {
    name:        "Wipada Laovirojjanakul, MD",
    years:       "2015–16",
    origScript:  "วิภาดา เหล่าวิโรจนกุล",
    country:     "Thailand",
    decade:      "2010s",
    inMemoriam:  "",
    position:    "—",
    photo:       "laovirojjanakul-wipada.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"Ultra-Widefield Fluorescein Angiography in Intermediate Uveitis", url:"https://pubmed.ncbi.nlm.nih.gov/29040047/" }
    ]
  },

  // ===== #192  Peter Ryg, MD  (2016–17) =====
  {
    name:        "Peter Ryg, MD",
    years:       "2016–17",
    origScript:  "—",
    country:     "—",
    decade:      "2010s",
    inMemoriam:  "",
    position:    "—",
    photo:       "ryg-peter.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #193  Dipal Shah, MD  (2016–17) =====
  {
    name:        "Dipal Shah, MD",
    years:       "2016–17",
    origScript:  "—",
    country:     "—",
    decade:      "2010s",
    inMemoriam:  "",
    position:    "—",
    photo:       "shah-dipal.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #194  Jessica Shantha, MD  (2016–17) =====
  {
    name:        "Jessica Shantha, MD",
    years:       "2016–17",
    origScript:  "—",
    country:     "—",
    decade:      "2010s",
    inMemoriam:  "",
    position:    "Emory Eye Center",
    photo:       "shantha-jessica.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #195  Yijie (Britany) Lin, MD  (2017–18) =====
  {
    name:        "Yijie (Britany) Lin, MD",
    years:       "2017–18",
    origScript:  "—",
    country:     "—",
    decade:      "2010s",
    inMemoriam:  "",
    position:    "—",
    photo:       "lin-yijie.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #196  Taniya Bhoopat, MD  (2017–18) =====
  {
    name:        "Taniya Bhoopat, MD",
    years:       "2017–18",
    origScript:  "ธนิยา ภู่พัฒน์",
    country:     "Thailand",
    decade:      "2010s",
    inMemoriam:  "",
    position:    "—",
    photo:       "bhoopat-taniya.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"Treatment of CMV Anterior Uveitis… Oral Valganciclovir", url:"https://pubmed.ncbi.nlm.nih.gov/32068609/" }
    ]
  },

  // ===== #197  Varun Pawar, MD  (2017–18) =====
  {
    name:        "Varun Pawar, MD",
    years:       "2017–18",
    origScript:  "—",
    country:     "—",
    decade:      "2010s",
    inMemoriam:  "",
    position:    "—",
    photo:       "pawar-varun.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #198  Kaidi Wang, MD  (2017–18) =====
  {
    name:        "Kaidi Wang, MD",
    years:       "2017–18",
    origScript:  "—",
    country:     "—",
    decade:      "2010s",
    inMemoriam:  "",
    position:    "—",
    photo:       "wang-kaidi.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #199  Todd Driver, MD  (2018–19) =====
  {
    name:        "Todd Driver, MD",
    years:       "2018–19",
    origScript:  "—",
    country:     "—",
    decade:      "2010s",
    inMemoriam:  "",
    position:    "—",
    photo:       "driver-todd.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #200  Michelle D. Lee, MD  (2018–19) =====
  {
    name:        "Michelle D. Lee, MD",
    years:       "2018–19",
    origScript:  "—",
    country:     "—",
    decade:      "2010s",
    inMemoriam:  "",
    position:    "—",
    photo:       "lee-michelle.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #201  Athanasios Marneris, DO  (2018–19) =====
  {
    name:        "Athanasios Marneris, DO",
    years:       "2018–19",
    origScript:  "—",
    country:     "—",
    decade:      "2010s",
    inMemoriam:  "",
    position:    "—",
    photo:       "marneris-athanasios.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #202  Edmund Tsui, MD  (2018–19) =====
  {
    name:        "Edmund Tsui, MD",
    years:       "2018–19",
    origScript:  "—",
    country:     "—",
    decade:      "2010s",
    inMemoriam:  "",
    position:    "UCLA Health",
    photo:       "tsui-edmund.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #203  Travis Redd, MD  (2019–20) =====
  {
    name:        "Travis Redd, MD",
    years:       "2019–20",
    origScript:  "—",
    country:     "—",
    decade:      "2010s",
    inMemoriam:  "",
    position:    "—",
    photo:       "redd-travis.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #204  Miel Sundararajan, MD  (2019–20) =====
  {
    name:        "Miel Sundararajan, MD",
    years:       "2019–20",
    origScript:  "—",
    country:     "—",
    decade:      "2010s",
    inMemoriam:  "",
    position:    "—",
    photo:       "sundararajan-miel.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #205  Plern Sutra, MD  (2019–20) =====
  {
    name:        "Plern Sutra, MD",
    years:       "2019–20",
    origScript:  "เพลิน สุตรา",
    country:     "Thailand",
    decade:      "2010s",
    inMemoriam:  "",
    position:    "—",
    photo:       "sutra-plern.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"Metagenomic Deep Sequencing… Iridocorneal Endothelial Syndrome", url:"https://pubmed.ncbi.nlm.nih.gov/?term=Plern+Sutra" }
    ]
  },

  // ===== #206  Kareem Moussa, MD  (2019–20) =====
  {
    name:        "Kareem Moussa, MD",
    years:       "2019–20",
    origScript:  "—",
    country:     "—",
    decade:      "2010s",
    inMemoriam:  "",
    position:    "UC Davis Health",
    photo:       "moussa-kareem.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #207  Brett Poulis, MD  (2019–20) =====
  {
    name:        "Brett Poulis, MD",
    years:       "2019–20",
    origScript:  "—",
    country:     "Canada",
    decade:      "2010s",
    inMemoriam:  "",
    position:    "—",
    photo:       "poulis-brett.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #208  Miel Sundararajan, MD  (2020–21) =====
  {
    name:        "Miel Sundararajan, MD",
    years:       "2020–21",
    origScript:  "—",
    country:     "—",
    decade:      "2020s",
    inMemoriam:  "",
    position:    "—",
    photo:       "sundararajan-miel.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #209  Amit Reddy, MD  (2020–21) =====
  {
    name:        "Amit Reddy, MD",
    years:       "2020–21",
    origScript:  "—",
    country:     "—",
    decade:      "2020s",
    inMemoriam:  "",
    position:    "—",
    photo:       "reddy-amit.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #210  Amol Sura, MD  (2020–21) =====
  {
    name:        "Amol Sura, MD",
    years:       "2020–21",
    origScript:  "—",
    country:     "—",
    decade:      "2020s",
    inMemoriam:  "",
    position:    "—",
    photo:       "sura-amol.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #211  Waraluck KT Supawatjariyakul, MD  (2021–22) =====
  {
    name:        "Waraluck KT Supawatjariyakul, MD",
    years:       "2021–22",
    origScript:  "วราลัคน์ สุพาวาตจริยากุล",
    country:     "Thailand",
    decade:      "2020s",
    inMemoriam:  "",
    position:    "—",
    photo:       "supawatjariyakul-waraluck.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #212  Hui Zhao, MD  (2021–22) =====
  {
    name:        "Hui Zhao, MD",
    years:       "2021–22",
    origScript:  "—",
    country:     "—",
    decade:      "2020s",
    inMemoriam:  "",
    position:    "—",
    photo:       "zhao-hui.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #213  Christine Benador-Shen, MD  (2021–22) =====
  {
    name:        "Christine Benador-Shen, MD",
    years:       "2021–22",
    origScript:  "—",
    country:     "—",
    decade:      "2020s",
    inMemoriam:  "",
    position:    "—",
    photo:       "benador-shen-christine.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #214  Adrian Tsang, MD  (2021–22) =====
  {
    name:        "Adrian Tsang, MD",
    years:       "2021–22",
    origScript:  "—",
    country:     "Canada",
    decade:      "2020s",
    inMemoriam:  "",
    position:    "—",
    photo:       "tsang-adrian.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #215  Minh Nguyen, MD  (2022–23) =====
  {
    name:        "Minh Nguyen, MD",
    years:       "2022–23",
    origScript:  "—",
    country:     "—",
    decade:      "2020s",
    inMemoriam:  "",
    position:    "—",
    photo:       "nguyen-minh.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #216  Punyanuch Pisitpayat, MD  (2022–23) =====
  {
    name:        "Punyanuch Pisitpayat, MD",
    years:       "2022–23",
    origScript:  "ปุณยนุช พิสิฐพยัต",
    country:     "Thailand",
    decade:      "2020s",
    inMemoriam:  "",
    position:    "—",
    photo:       "pisitpayat-punyanuch.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"Stromal Keratitis Associated With CMV Anterior Uveitis", url:"https://pubmed.ncbi.nlm.nih.gov/38294900/" }
    ]
  },

  // ===== #217  Akshay Mentreddy, MD  (2022–23) =====
  {
    name:        "Akshay Mentreddy, MD",
    years:       "2022–23",
    origScript:  "—",
    country:     "—",
    decade:      "2020s",
    inMemoriam:  "",
    position:    "—",
    photo:       "mentreddy-akshay.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #218  Katherine Niemeyer, MD  (2022–23) =====
  {
    name:        "Katherine Niemeyer, MD",
    years:       "2022–23",
    origScript:  "—",
    country:     "—",
    decade:      "2020s",
    inMemoriam:  "",
    position:    "—",
    photo:       "niemeyer-katherine.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #219  Alejandro Arboleda, MD  (2023–24) =====
  {
    name:        "Alejandro Arboleda, MD",
    years:       "2023–24",
    origScript:  "—",
    country:     "—",
    decade:      "2020s",
    inMemoriam:  "",
    position:    "—",
    photo:       "arboleda-alejandro.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #220  Ashlin Joye, MD  (2023–24) =====
  {
    name:        "Ashlin Joye, MD",
    years:       "2023–24",
    origScript:  "—",
    country:     "—",
    decade:      "2020s",
    inMemoriam:  "",
    position:    "—",
    photo:       "joye-ashlin.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #221  Martin Dionson, MD  (2023–24) =====
  {
    name:        "Martin Dionson, MD",
    years:       "2023–24",
    origScript:  "—",
    country:     "Philippines",
    decade:      "2020s",
    inMemoriam:  "",
    position:    "—",
    photo:       "dionson-martin.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #222  Itamar Livnat, MD  (2023–24) =====
  {
    name:        "Itamar Livnat, MD",
    years:       "2023–24",
    origScript:  "—",
    country:     "—",
    decade:      "2020s",
    inMemoriam:  "",
    position:    "—",
    photo:       "livnat-itamar.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #223  Myra Safo, MD  (2023–24) =====
  {
    name:        "Myra Safo, MD",
    years:       "2023–24",
    origScript:  "—",
    country:     "—",
    decade:      "2020s",
    inMemoriam:  "",
    position:    "—",
    photo:       "safo-myra.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #224  Aaron Dotson, MD  (2024–25) =====
  {
    name:        "Aaron Dotson, MD",
    years:       "2024–25",
    origScript:  "—",
    country:     "—",
    decade:      "2020s",
    inMemoriam:  "",
    position:    "—",
    photo:       "dotson-aaron.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #225  Alekya Rajanala, MD  (2024–25) =====
  {
    name:        "Alekya Rajanala, MD",
    years:       "2024–25",
    origScript:  "—",
    country:     "—",
    decade:      "2020s",
    inMemoriam:  "",
    position:    "—",
    photo:       "rajanala-alekya.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #226  Blake Snyder, MD  (2024–25) =====
  {
    name:        "Blake Snyder, MD",
    years:       "2024–25",
    origScript:  "—",
    country:     "—",
    decade:      "2020s",
    inMemoriam:  "",
    position:    "—",
    photo:       "snyder-blake.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #227  Ori Saban, MD  (2025–26) =====
  {
    name:        "Ori Saban, MD",
    years:       "2025–26",
    origScript:  "—",
    country:     "—",
    decade:      "2020s",
    inMemoriam:  "",
    position:    "—",
    photo:       "saban-ori.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #228  Khushali Shah, MD  (2025–26) =====
  {
    name:        "Khushali Shah, MD",
    years:       "2025–26",
    origScript:  "—",
    country:     "—",
    decade:      "2020s",
    inMemoriam:  "",
    position:    "—",
    photo:       "shah-khushali.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #229  Alyssa Coleman, MD  (2025–26) =====
  {
    name:        "Alyssa Coleman, MD",
    years:       "2025–26",
    origScript:  "—",
    country:     "—",
    decade:      "2020s",
    inMemoriam:  "",
    position:    "—",
    photo:       "coleman-alyssa.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #230  Christopher Rosenberg, MD  (2025–26) =====
  {
    name:        "Christopher Rosenberg, MD",
    years:       "2025–26",
    origScript:  "—",
    country:     "—",
    decade:      "2020s",
    inMemoriam:  "",
    position:    "—",
    photo:       "rosenberg-christopher.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #231  Morgan Harvey, MD  (2026–27) =====
  {
    name:        "Morgan Harvey, MD",
    years:       "2026–27",
    origScript:  "—",
    country:     "—",
    decade:      "2020s",
    inMemoriam:  "",
    position:    "Current Fellow",
    photo:       "harvey-morgan.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #232  John Nesemann, MD, MS  (2026–27) =====
  {
    name:        "John Nesemann, MD, MS",
    years:       "2026–27",
    origScript:  "—",
    country:     "—",
    decade:      "2020s",
    inMemoriam:  "",
    position:    "Current Fellow",
    photo:       "nesemann-john.webp",
    education:   [
      "—"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #233  Justin Ma, MD  (2026–27) =====
  {
    name:        "Justin Ma, MD",
    years:       "2026–27",
    origScript:  "",
    country:     "—",
    decade:      "2020s",
    inMemoriam:  "",
    position:    "Current Fellow",
    photo:       "ma-justin.webp",
    education:   [
      "Undergraduate: University of VirginiaGraduate School: London School of Hygiene and Tropical Medicine (Master of Science)Medical School: University of California, Los Angeles (UCLA) School of MedicineResidency: University of California San Diego (UCSD) Medical Center / Shiley Eye Institute"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  },

  // ===== #234  Zaynab Sajjadi, MD  (2026–27) =====
  {
    name:        "Zaynab Sajjadi, MD",
    years:       "2026–27",
    origScript:  "‎زینب سادات سجادی",
    country:     "USA",
    decade:      "2020s",
    inMemoriam:  "",
    position:    "Current Fellow",
    photo:       "sajjadi-zaynab.webp",
    education:   [
      "Thomas Jefferson University",
      "Doctor of Medicine - MD",
      "2017 – 2021",
      "University of California, Berkeley",
      "Bachelor of Arts (BA), Integrative Biology and Art, Practice of",
      "2014 – 2016"
    ],
    publications: [
      { title:"—", url:"" }
    ]
  }

  // ===== COPY THE BLOCK BELOW TO ADD A NEW FELLOW =====
  // ,{
  //   name:"",  years:"",  origScript:"",  country:"",  decade:"",
  //   inMemoriam:"",  position:"",  photo:"",
  //   education:[],
  //   publications:[ { title:"", url:"" } ]
  // }

];
