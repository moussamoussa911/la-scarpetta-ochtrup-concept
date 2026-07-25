(() => {
  "use strict";

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const store = {
    get(key, fallback) {
      try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
      catch { return fallback; }
    },
    set(key, value) { localStorage.setItem(key, JSON.stringify(value)); }
  };

  const copy = {
    de: {
      "nav.home": "Start", "nav.menu": "Speisekarte", "nav.booking": "Reservieren", "nav.restaurant": "Restaurant", "nav.legal": "Rechtliches",
      "nav.open": "Menü öffnen", "nav.close": "Menü schließen", "nav.order": "Online bestellen", "nav.instagram": "Instagram",
      "footer.tagline": "Echte italienische Küche, moderne Gastfreundschaft und ein Platz für lange Abende.",
      "footer.explore": "Entdecken", "footer.visit": "Besuchen", "footer.contact": "Kontakt", "footer.closed": "Montag Ruhetag",
      "footer.concept": "Unverbindliches Website-Konzept · 2026",
      "hero.eyebrow": "Ristorante · Pizzeria · Ochtrup", "hero.line1": "Ein Tisch.", "hero.line2": "Ganz Italien.",
      "hero.text": "Ehrliche Cucina, offene Türen und Abende, die nach einem letzten Stück Brot verlangen.",
      "welcome.eyebrow": "Benvenuti a tavola", "welcome.title": "Hier ist Genuss keine Eile. Sondern eine Einladung, noch zu bleiben.",
      "welcome.text": "Francesco und sein Team verbinden echte italienische Küche mit einem modernen, familiären Ort. Frische Zutaten, hausgemachte Ideen und Gastfreundschaft, die man spürt.",
      "signature.eyebrow": "Dalla cucina", "signature.title1": "Drei Gerichte.", "signature.title2": "Eine Handschrift.",
      "signature.text": "Originale Teller aus der Küche von La Scarpetta – gemacht zum Teilen, Entdecken und Wiederkommen.",
      "table.eyebrow": "Ihre persönliche Tavolata", "table.title1": "Zusammen wählen.", "table.title2": "Gemeinsam genießen.",
      "table.text": "Stellen Sie Ihren Tisch schon vor dem Besuch zusammen: Lieblingsgerichte hinzufügen, Personen wählen und den Preis pro Gast sofort sehen.",
      "experience.eyebrow": "Mehr als ein Restaurant", "experience.quote": "„Der schönste Platz Italiens ist immer dort, wo alle am Tisch sitzen.“",
      "experience.rating": "Gästebewertung", "experience.gallery": "Originalgerichte", "experience.family": "Familie. Eine Leidenschaft.",
      "social.eyebrow": "Direkt aus der Küche", "social.follow": "Auf Instagram folgen",
      "cta.eyebrow": "Il tavolo è pronto", "cta.title1": "Ihr Abend.", "cta.title2": "Ihr Tisch.",
      "action.reserve": "Tisch reservieren", "action.menu": "Speisekarte entdecken", "action.story": "Unsere Geschichte",
      "action.fullmenu": "Ganze Karte entdecken", "action.buildtable": "Tavolata zusammenstellen", "action.continue": "Weiter",
      "action.back": "Zurück", "action.request": "Anfrage vorbereiten",
      "menu.eyebrow": "La nostra carta", "menu.title1": "Italien lesen.", "menu.title2": "Geschmack verstehen.",
      "menu.intro": "Originale Rezepte, ehrliche Zutaten und die Freiheit, den ganzen Tisch probieren zu lassen.",
      "menu.searchLabel": "Speisekarte durchsuchen", "menu.search": "Gericht oder Zutat suchen …", "menu.results": "Gerichte",
      "menu.addHint": "Mit + direkt zu Ihrer Tavolata hinzufügen.", "menu.note": "Alle Preise inklusive Mehrwertsteuer. Allergene und Zusatzstoffe erhalten Sie auf Anfrage beim Restaurant.",
      "menu.noResults": "Nichts gefunden", "menu.noResultsText": "Versuchen Sie einen anderen Suchbegriff.", "menu.added": "Zur Tavolata hinzugefügt",
      "table.your": "Ihre Tavolata", "table.plannerEyebrow": "Der Tavolata-Planer", "table.plannerTitle": "Was kommt in die Mitte?",
      "table.plannerText": "Wählen Sie Gerichte und Personen. Wir zeigen Ihnen sofort, was auf den Tisch kommt und was es pro Gast kostet.",
      "table.guests": "Personen", "table.empty": "Noch ist der Tisch frei. Fügen Sie oben Ihre Lieblingsgerichte hinzu.",
      "table.total": "Gesamt", "table.perPerson": "Pro Person", "table.clear": "Tisch leeren", "table.close": "Schließen",
      "table.toBooking": "Mit dieser Tavolata reservieren", "table.onTable": "Auf Ihrem Tisch", "table.remove": "Ein Gericht entfernen",
      "table.more": "weitere", "table.visualEmpty": "Ihr Menü erscheint hier",
      "booking.eyebrow": "Prenota il tuo tavolo", "booking.title1": "Ihr Abend.", "booking.title2": "Perfekt geplant.",
      "booking.text": "Vier kurze Schritte. Ein Tisch, der zu Ihrem Abend passt.", "booking.today": "Heute",
      "booking.hours": "Di–Mi 16:30–22:00 · Do–So 11:30–22:00", "booking.step1": "Datum", "booking.step2": "Gäste & Platz",
      "booking.step3": "Uhrzeit", "booking.step4": "Kontakt", "booking.chooseDate": "Datum wählen", "booking.chooseGuests": "Runde wählen",
      "booking.chooseTime": "Zeit wählen", "booking.yourDetails": "Ihre Angaben", "booking.stepOne": "Schritt 1 von 4",
      "booking.whenTitle": "Wann beginnt Ihr Italien-Abend?", "booking.whenText": "Montags ist Ruhetag. Die passenden Zeiten erscheinen später automatisch.",
      "booking.available": "Verfügbar", "booking.selected": "Ausgewählt", "booking.closedLegend": "Ruhetag",
      "booking.stepTwo": "Schritt 2 von 4", "booking.partyTitle": "Wer sitzt mit am Tisch?",
      "booking.partyText": "Wählen Sie Ihre Runde und den Bereich, der zu Ihrem Abend passt.", "booking.people": "Anzahl Personen",
      "booking.area": "Wunschbereich", "booking.areaRestaurant": "Restaurant", "booking.areaRestaurantText": "Modern & lebendig",
      "booking.areaTerrace": "Terrasse", "booking.areaTerraceText": "Draußen genießen", "booking.areaAny": "Überraschen Sie mich",
      "booking.areaAnyText": "Der schönste freie Tisch", "booking.largeTitle": "Eine große Tavolata?",
      "booking.largeText": "Ab 9 Personen stimmen wir den perfekten Tisch gern persönlich mit Ihnen ab.",
      "booking.stepThree": "Schritt 3 von 4", "booking.timeTitle": "Wann dürfen wir für Sie eindecken?",
      "booking.timeText": "Wir zeigen nur Zeiten, die zum gewählten Tag passen.", "booking.availabilityNote": "Die Auslastung ist eine intelligente Konzeptvorschau. Eine finale Reservierung wird vom Restaurant bestätigt.",
      "booking.lunch": "Pranzo · Mittag", "booking.dinner": "Cena · Abend", "booking.good": "Gute Auswahl", "booking.few": "Nur wenige Tische",
      "booking.stepFour": "Schritt 4 von 4", "booking.contactTitle": "Wie dürfen wir Sie begrüßen?",
      "booking.contactText": "Nur noch Ihre Kontaktdaten und alles ist vorbereitet.", "booking.yourEvening": "Ihr Abend bei La Scarpetta",
      "booking.notChosen": "Noch nicht gewählt", "booking.promiseTitle": "Persönlich bestätigt",
      "booking.promiseText": "Das Restaurant prüft Ihre Anfrage und meldet sich bei Ihnen.", "booking.help": "Lieber persönlich?",
      "booking.needDate": "Bitte wählen Sie zuerst ein Datum.", "booking.needArea": "Bitte wählen Sie Ihren Wunschbereich.",
      "booking.needTime": "Bitte wählen Sie eine Uhrzeit.", "booking.closed": "Heute Ruhetag", "booking.open": "Heute geöffnet",
      "booking.opens": "Heute ab {time} Uhr", "booking.openUntil": "Geöffnet bis {time} Uhr",
      "form.name": "Name", "form.phone": "Telefon", "form.email": "E-Mail", "form.occasion": "Anlass",
      "form.none": "Einfach genießen", "form.birthday": "Geburtstag", "form.anniversary": "Jahrestag",
      "form.business": "Geschäftsessen", "form.celebration": "Familienfeier", "form.preferences": "Dürfen wir etwas beachten?",
      "form.vegetarian": "Vegetarisch", "form.vegan": "Vegan", "form.gluten": "Gluten beachten", "form.quiet": "Ruhiger Tisch",
      "form.note": "Wünsche (optional)", "form.notePlaceholder": "Kinderstuhl, Allergien, besondere Wünsche …",
      "form.privacy": "Ich stimme der Verarbeitung meiner Angaben zur Bearbeitung der Reservierungsanfrage zu.",
      "form.disclaimer": "Dies ist eine unverbindliche Reservierungsanfrage. Ihr Tisch ist erst nach Bestätigung durch das Restaurant fest reserviert.",
      "dialog.eyebrow": "Grazie!", "dialog.title": "Ihr Italien-Abend ist vorbereitet.",
      "dialog.text": "In der finalen Website wird diese Anfrage direkt an La Scarpetta übermittelt. In dieser Konzeptvorschau können Sie das Restaurant direkt anrufen.",
      "dialog.call": "Jetzt anrufen",
      "story.eyebrow": "La nostra famiglia", "story.title1": "Italien im Herzen.", "story.title2": "Ochtrup zuhause.",
      "story.welcome": "Benvenuti in famiglia", "story.headline": "Gastfreundschaft beginnt nicht beim Servieren. Sondern beim Ankommen.",
      "story.copy1": "La Scarpetta ist ein familiär geführtes Restaurant. Francesco bringt seine langjährige Erfahrung in der italienischen Küche in jedes Gericht und jeden Abend ein.",
      "story.copy2": "Das Team empfängt Sie herzlich im Saal, während in der Küche echte italienische Klassiker, moderne Ideen und frische Zutaten zusammenfinden.",
      "story.quote": "Genuss wird größer, wenn man ihn teilt.", "gallery.eyebrow": "Momenti di gusto", "gallery.title": "Ein Blick in unsere Küche.",
      "services.eyebrow": "Für jeden Anlass", "services.title": "Alles, was Ihren Abend leichter macht.",
      "services.terrace": "Terrasse", "services.terraceText": "Italienische Abende unter freiem Himmel.",
      "services.events": "Private Feiern", "services.eventsText": "Geburtstage, Hochzeiten und Ihre besonderen Momente.",
      "services.takeaway": "Außer Haus", "services.takeawayText": "Lieblingsgerichte frisch zum Mitnehmen.",
      "services.accessible": "Barrierefrei", "services.accessibleText": "Ein unkomplizierter Besuch für alle Gäste.",
      "visit.eyebrow": "Kommen Sie vorbei", "visit.title": "Ein kleines Stück Italien. Gleich hier in Ochtrup.",
      "visit.address": "Adresse", "visit.route": "Route öffnen", "visit.hours": "Öffnungszeiten",
      "visit.hoursValue": "Di–Mi 16:30–22:00<br>Do–So 11:30–22:00<br>Montag Ruhetag", "visit.contact": "Kontakt",
      "legal.eyebrow": "Informationen", "legal.title": "Rechtliches & Datenschutz", "legal.intro": "Transparent, verständlich und vollständig.",
      "legal.imprint": "Impressum", "legal.privacy": "Datenschutz", "legal.notes": "Hinweise", "legal.provider": "Angaben gemäß § 5 DDG",
      "legal.contact": "Kontakt", "legal.taxNote": "Weitere Pflichtangaben, insbesondere eine vorhandene Umsatzsteuer-ID, sind vor der Veröffentlichung vom Betreiber zu ergänzen und zu prüfen.",
      "legal.controller": "Verantwortlicher", "legal.access": "Server-Zugriffsdaten",
      "legal.accessText": "Beim Aufruf der Website verarbeitet der Hostinganbieter technisch notwendige Daten wie IP-Adresse, Zeitpunkt, aufgerufene Seite und Browserinformationen. Grundlage ist das berechtigte Interesse an einem sicheren und stabilen Betrieb.",
      "legal.bookingData": "Reservierungsanfragen", "legal.bookingText": "Angaben aus dem Reservierungsformular werden ausschließlich zur Bearbeitung der Anfrage und zur Kontaktaufnahme verwendet. Die Daten werden gelöscht, sobald sie hierfür nicht mehr benötigt werden und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.",
      "legal.rights": "Ihre Rechte", "legal.rightsText": "Sie haben im gesetzlichen Rahmen Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit und Widerspruch sowie ein Beschwerderecht bei einer Datenschutzaufsichtsbehörde.",
      "legal.concept": "Diese Website ist ein unverbindliches Design- und Funktionskonzept. Das Reservierungsformular versendet in dieser Vorschau keine automatische Buchung. Preise, Speisekarte und Öffnungszeiten sollten vom Restaurant vor einer Veröffentlichung abschließend bestätigt werden.",
      "legal.allergens": "Allergen- und Zusatzstoffinformationen erhalten Gäste direkt beim Restaurant. Trotz sorgfältiger Pflege können sich Angebote und Preise ändern.",
      "category.all": "Alle", "category.salads": "Salate", "category.antipasti": "Antipasti", "category.pasta": "Pasta", "category.pizza": "Pizza",
      "diet.vegan": "Vegan", "diet.vegetarian": "Vegetarisch", "diet.spicy": "Pikant"
    },
    nl: {
      "nav.home": "Home", "nav.menu": "Menukaart", "nav.booking": "Reserveren", "nav.restaurant": "Restaurant", "nav.legal": "Juridisch",
      "nav.open": "Menu openen", "nav.close": "Menu sluiten", "nav.order": "Online bestellen", "nav.instagram": "Instagram",
      "footer.tagline": "Echte Italiaanse keuken, moderne gastvrijheid en een plek voor lange avonden.",
      "footer.explore": "Ontdekken", "footer.visit": "Bezoeken", "footer.contact": "Contact", "footer.closed": "Maandag gesloten",
      "footer.concept": "Vrijblijvend websiteconcept · 2026",
      "hero.eyebrow": "Ristorante · Pizzeria · Ochtrup", "hero.line1": "Eén tafel.", "hero.line2": "Heel Italië.",
      "hero.text": "Eerlijke cucina, open deuren en avonden die vragen om nog één stukje brood.",
      "welcome.eyebrow": "Benvenuti a tavola", "welcome.title": "Genieten kent hier geen haast. Het is een uitnodiging om nog even te blijven.",
      "welcome.text": "Francesco en zijn team combineren de echte Italiaanse keuken met een moderne, huiselijke plek. Verse ingrediënten, eigen ideeën en voelbare gastvrijheid.",
      "signature.eyebrow": "Dalla cucina", "signature.title1": "Drie gerechten.", "signature.title2": "Eén signatuur.",
      "signature.text": "Originele borden uit de keuken van La Scarpetta – om te delen, ontdekken en voor terug te komen.",
      "table.eyebrow": "Uw persoonlijke tavolata", "table.title1": "Samen kiezen.", "table.title2": "Samen genieten.",
      "table.text": "Stel voor uw bezoek al uw tafel samen: voeg favorieten toe, kies het aantal personen en zie direct de prijs per gast.",
      "experience.eyebrow": "Meer dan een restaurant", "experience.quote": "„De mooiste plek van Italië is altijd waar iedereen samen aan tafel zit.“",
      "experience.rating": "Gastenwaardering", "experience.gallery": "Originele gerechten", "experience.family": "Familie. Eén passie.",
      "social.eyebrow": "Rechtstreeks uit de keuken", "social.follow": "Volg op Instagram",
      "cta.eyebrow": "Il tavolo è pronto", "cta.title1": "Uw avond.", "cta.title2": "Uw tafel.",
      "action.reserve": "Tafel reserveren", "action.menu": "Ontdek de menukaart", "action.story": "Ons verhaal",
      "action.fullmenu": "Bekijk de hele kaart", "action.buildtable": "Tavolata samenstellen", "action.continue": "Verder",
      "action.back": "Terug", "action.request": "Aanvraag voorbereiden",
      "menu.eyebrow": "La nostra carta", "menu.title1": "Lees Italië.", "menu.title2": "Proef het verhaal.",
      "menu.intro": "Originele recepten, eerlijke ingrediënten en de vrijheid om de hele tafel te laten proeven.",
      "menu.searchLabel": "Menukaart doorzoeken", "menu.search": "Zoek gerecht of ingrediënt …", "menu.results": "gerechten",
      "menu.addHint": "Voeg met + direct toe aan uw tavolata.", "menu.note": "Alle prijzen zijn inclusief btw. Informatie over allergenen en toevoegingen is verkrijgbaar bij het restaurant.",
      "menu.noResults": "Niets gevonden", "menu.noResultsText": "Probeer een andere zoekterm.", "menu.added": "Aan tavolata toegevoegd",
      "table.your": "Uw tavolata", "table.plannerEyebrow": "De tavolata-planner", "table.plannerTitle": "Wat komt er in het midden?",
      "table.plannerText": "Kies gerechten en personen. U ziet meteen wat er op tafel komt en wat het per gast kost.",
      "table.guests": "Personen", "table.empty": "De tafel is nog vrij. Voeg hierboven uw favoriete gerechten toe.",
      "table.total": "Totaal", "table.perPerson": "Per persoon", "table.clear": "Tafel leegmaken", "table.close": "Sluiten",
      "table.toBooking": "Reserveer met deze tavolata", "table.onTable": "Op uw tafel", "table.remove": "Eén gerecht verwijderen",
      "table.more": "meer", "table.visualEmpty": "Uw menu verschijnt hier",
      "booking.eyebrow": "Prenota il tuo tavolo", "booking.title1": "Uw avond.", "booking.title2": "Perfect gepland.",
      "booking.text": "Vier korte stappen. Een tafel die bij uw avond past.", "booking.today": "Vandaag",
      "booking.hours": "Di–wo 16:30–22:00 · do–zo 11:30–22:00", "booking.step1": "Datum", "booking.step2": "Gasten & plek",
      "booking.step3": "Tijd", "booking.step4": "Contact", "booking.chooseDate": "Kies een datum", "booking.chooseGuests": "Kies uw gezelschap",
      "booking.chooseTime": "Kies een tijd", "booking.yourDetails": "Uw gegevens", "booking.stepOne": "Stap 1 van 4",
      "booking.whenTitle": "Wanneer begint uw Italiaanse avond?", "booking.whenText": "Maandag is rustdag. Passende tijden verschijnen later automatisch.",
      "booking.available": "Beschikbaar", "booking.selected": "Geselecteerd", "booking.closedLegend": "Rustdag",
      "booking.stepTwo": "Stap 2 van 4", "booking.partyTitle": "Wie schuift er aan?",
      "booking.partyText": "Kies uw gezelschap en de ruimte die bij uw avond past.", "booking.people": "Aantal personen",
      "booking.area": "Gewenste plek", "booking.areaRestaurant": "Restaurant", "booking.areaRestaurantText": "Modern & levendig",
      "booking.areaTerrace": "Terras", "booking.areaTerraceText": "Buiten genieten", "booking.areaAny": "Verras mij",
      "booking.areaAnyText": "De mooiste vrije tafel", "booking.largeTitle": "Een grote tavolata?",
      "booking.largeText": "Vanaf 9 personen stemmen we de perfecte tafel graag persoonlijk met u af.",
      "booking.stepThree": "Stap 3 van 4", "booking.timeTitle": "Hoe laat mogen we voor u dekken?",
      "booking.timeText": "We tonen alleen tijden die bij de gekozen dag passen.", "booking.availabilityNote": "De bezetting is een slimme conceptpreview. Het restaurant bevestigt de definitieve reservering.",
      "booking.lunch": "Pranzo · Lunch", "booking.dinner": "Cena · Avond", "booking.good": "Ruime keuze", "booking.few": "Nog enkele tafels",
      "booking.stepFour": "Stap 4 van 4", "booking.contactTitle": "Hoe mogen we u verwelkomen?",
      "booking.contactText": "Alleen nog uw contactgegevens, dan is alles voorbereid.", "booking.yourEvening": "Uw avond bij La Scarpetta",
      "booking.notChosen": "Nog niet gekozen", "booking.promiseTitle": "Persoonlijk bevestigd",
      "booking.promiseText": "Het restaurant controleert uw aanvraag en neemt contact met u op.", "booking.help": "Liever persoonlijk?",
      "booking.needDate": "Kies eerst een datum.", "booking.needArea": "Kies uw gewenste plek.", "booking.needTime": "Kies een tijd.",
      "booking.closed": "Vandaag gesloten", "booking.open": "Vandaag geopend", "booking.opens": "Vandaag vanaf {time} uur", "booking.openUntil": "Geopend tot {time} uur",
      "form.name": "Naam", "form.phone": "Telefoon", "form.email": "E-mail", "form.occasion": "Gelegenheid",
      "form.none": "Gewoon genieten", "form.birthday": "Verjaardag", "form.anniversary": "Jubileum",
      "form.business": "Zakelijk diner", "form.celebration": "Familiefeest", "form.preferences": "Mogen we ergens rekening mee houden?",
      "form.vegetarian": "Vegetarisch", "form.vegan": "Vegan", "form.gluten": "Let op gluten", "form.quiet": "Rustige tafel",
      "form.note": "Wensen (optioneel)", "form.notePlaceholder": "Kinderstoel, allergieën, bijzondere wensen …",
      "form.privacy": "Ik ga akkoord met de verwerking van mijn gegevens voor deze reserveringsaanvraag.",
      "form.disclaimer": "Dit is een vrijblijvende reserveringsaanvraag. Uw tafel is pas definitief na bevestiging door het restaurant.",
      "dialog.eyebrow": "Grazie!", "dialog.title": "Uw Italiaanse avond is voorbereid.",
      "dialog.text": "Op de definitieve website wordt deze aanvraag rechtstreeks naar La Scarpetta verzonden. In deze conceptpreview kunt u het restaurant direct bellen.",
      "dialog.call": "Nu bellen",
      "story.eyebrow": "La nostra famiglia", "story.title1": "Italië in het hart.", "story.title2": "Thuis in Ochtrup.",
      "story.welcome": "Benvenuti in famiglia", "story.headline": "Gastvrijheid begint niet bij het serveren. Maar bij het binnenkomen.",
      "story.copy1": "La Scarpetta is een familierestaurant. Francesco brengt zijn jarenlange ervaring met de Italiaanse keuken mee in ieder gerecht en iedere avond.",
      "story.copy2": "Het team ontvangt u hartelijk in het restaurant, terwijl in de keuken echte Italiaanse klassiekers, moderne ideeën en verse ingrediënten samenkomen.",
      "story.quote": "Genieten wordt groter wanneer je het deelt.", "gallery.eyebrow": "Momenti di gusto", "gallery.title": "Een blik in onze keuken.",
      "services.eyebrow": "Voor elke gelegenheid", "services.title": "Alles wat uw avond makkelijker maakt.",
      "services.terrace": "Terras", "services.terraceText": "Italiaanse avonden in de open lucht.",
      "services.events": "Besloten feesten", "services.eventsText": "Verjaardagen, bruiloften en uw bijzondere momenten.",
      "services.takeaway": "Afhalen", "services.takeawayText": "Favoriete gerechten vers om mee te nemen.",
      "services.accessible": "Toegankelijk", "services.accessibleText": "Een zorgeloos bezoek voor alle gasten.",
      "visit.eyebrow": "Kom langs", "visit.title": "Een stukje Italië. Gewoon hier in Ochtrup.",
      "visit.address": "Adres", "visit.route": "Route openen", "visit.hours": "Openingstijden",
      "visit.hoursValue": "Di–wo 16:30–22:00<br>Do–zo 11:30–22:00<br>Maandag gesloten", "visit.contact": "Contact",
      "legal.eyebrow": "Informatie", "legal.title": "Juridisch & privacy", "legal.intro": "Transparant, begrijpelijk en volledig.",
      "legal.imprint": "Bedrijfsinformatie", "legal.privacy": "Privacy", "legal.notes": "Opmerkingen", "legal.provider": "Gegevens volgens § 5 DDG",
      "legal.contact": "Contact", "legal.taxNote": "Verdere verplichte gegevens, waaronder een eventueel btw-nummer, moeten voor publicatie door de eigenaar worden aangevuld en gecontroleerd.",
      "legal.controller": "Verantwoordelijke", "legal.access": "Servertoegangsgegevens",
      "legal.accessText": "Bij het openen van de website verwerkt de hostingprovider technisch noodzakelijke gegevens, zoals IP-adres, tijdstip, opgevraagde pagina en browserinformatie, voor een veilige en stabiele werking.",
      "legal.bookingData": "Reserveringsaanvragen", "legal.bookingText": "Gegevens uit het reserveringsformulier worden uitsluitend gebruikt om de aanvraag te behandelen en contact op te nemen. Ze worden verwijderd zodra ze niet meer nodig zijn en geen wettelijke bewaarplicht geldt.",
      "legal.rights": "Uw rechten", "legal.rightsText": "Binnen de wettelijke kaders hebt u recht op inzage, correctie, verwijdering, beperking, overdraagbaarheid en bezwaar, en kunt u een klacht indienen bij een toezichthouder.",
      "legal.concept": "Deze website is een vrijblijvend ontwerp- en functieconcept. Het reserveringsformulier verstuurt in deze preview geen automatische boeking. Prijzen, kaart en openingstijden moeten voor publicatie door het restaurant worden bevestigd.",
      "legal.allergens": "Informatie over allergenen en toevoegingen is rechtstreeks bij het restaurant verkrijgbaar. Aanbod en prijzen kunnen ondanks zorgvuldige controle veranderen.",
      "category.all": "Alles", "category.salads": "Salades", "category.antipasti": "Antipasti", "category.pasta": "Pasta", "category.pizza": "Pizza",
      "diet.vegan": "Vegan", "diet.vegetarian": "Vegetarisch", "diet.spicy": "Pikant"
    },
    en: {
      "nav.home": "Home", "nav.menu": "Menu", "nav.booking": "Book a table", "nav.restaurant": "Restaurant", "nav.legal": "Legal",
      "nav.open": "Open menu", "nav.close": "Close menu", "nav.order": "Order online", "nav.instagram": "Instagram",
      "footer.tagline": "Authentic Italian cooking, modern hospitality and a place for lingering evenings.",
      "footer.explore": "Explore", "footer.visit": "Visit", "footer.contact": "Contact", "footer.closed": "Closed Mondays",
      "footer.concept": "Non-binding website concept · 2026",
      "hero.eyebrow": "Ristorante · Pizzeria · Ochtrup", "hero.line1": "One table.", "hero.line2": "All of Italy.",
      "hero.text": "Honest cucina, open doors and evenings that call for one last piece of bread.",
      "welcome.eyebrow": "Benvenuti a tavola", "welcome.title": "There is no rush to enjoy. Only an invitation to stay a little longer.",
      "welcome.text": "Francesco and his team unite authentic Italian cooking with a modern, welcoming place. Fresh ingredients, house ideas and hospitality you can feel.",
      "signature.eyebrow": "Dalla cucina", "signature.title1": "Three dishes.", "signature.title2": "One signature.",
      "signature.text": "Original plates from La Scarpetta’s kitchen – made for sharing, discovering and returning.",
      "table.eyebrow": "Your personal tavolata", "table.title1": "Choose together.", "table.title2": "Enjoy together.",
      "table.text": "Build your table before you visit: add favourites, choose your party size and instantly see the price per guest.",
      "experience.eyebrow": "More than a restaurant", "experience.quote": "“The best place in Italy is wherever everyone sits together at one table.”",
      "experience.rating": "Guest rating", "experience.gallery": "Original dishes", "experience.family": "Family. One passion.",
      "social.eyebrow": "Straight from the kitchen", "social.follow": "Follow on Instagram",
      "cta.eyebrow": "Il tavolo è pronto", "cta.title1": "Your evening.", "cta.title2": "Your table.",
      "action.reserve": "Book a table", "action.menu": "Explore the menu", "action.story": "Our story",
      "action.fullmenu": "Explore the full menu", "action.buildtable": "Build your tavolata", "action.continue": "Continue",
      "action.back": "Back", "action.request": "Prepare request",
      "menu.eyebrow": "La nostra carta", "menu.title1": "Read Italy.", "menu.title2": "Understand flavour.",
      "menu.intro": "Original recipes, honest ingredients and the freedom to let the whole table taste.",
      "menu.searchLabel": "Search the menu", "menu.search": "Search a dish or ingredient …", "menu.results": "dishes",
      "menu.addHint": "Use + to add directly to your tavolata.", "menu.note": "All prices include VAT. Allergen and additive information is available from the restaurant.",
      "menu.noResults": "Nothing found", "menu.noResultsText": "Try another search term.", "menu.added": "Added to your tavolata",
      "table.your": "Your tavolata", "table.plannerEyebrow": "The tavolata planner", "table.plannerTitle": "What belongs in the middle?",
      "table.plannerText": "Choose dishes and people. See at once what comes to the table and the cost per guest.",
      "table.guests": "People", "table.empty": "Your table is still clear. Add your favourite dishes above.",
      "table.total": "Total", "table.perPerson": "Per person", "table.clear": "Clear table", "table.close": "Close",
      "table.toBooking": "Book with this tavolata", "table.onTable": "On your table", "table.remove": "Remove one dish",
      "table.more": "more", "table.visualEmpty": "Your menu appears here",
      "booking.eyebrow": "Prenota il tuo tavolo", "booking.title1": "Your evening.", "booking.title2": "Perfectly planned.",
      "booking.text": "Four short steps. A table made for your evening.", "booking.today": "Today",
      "booking.hours": "Tue–Wed 16:30–22:00 · Thu–Sun 11:30–22:00", "booking.step1": "Date", "booking.step2": "Guests & area",
      "booking.step3": "Time", "booking.step4": "Contact", "booking.chooseDate": "Choose date", "booking.chooseGuests": "Choose party",
      "booking.chooseTime": "Choose time", "booking.yourDetails": "Your details", "booking.stepOne": "Step 1 of 4",
      "booking.whenTitle": "When does your Italian evening begin?", "booking.whenText": "Mondays are closed. Matching times will appear automatically later.",
      "booking.available": "Available", "booking.selected": "Selected", "booking.closedLegend": "Closed",
      "booking.stepTwo": "Step 2 of 4", "booking.partyTitle": "Who is joining the table?",
      "booking.partyText": "Choose your party size and the area that suits your evening.", "booking.people": "Number of people",
      "booking.area": "Preferred area", "booking.areaRestaurant": "Restaurant", "booking.areaRestaurantText": "Modern & lively",
      "booking.areaTerrace": "Terrace", "booking.areaTerraceText": "Enjoy outdoors", "booking.areaAny": "Surprise me",
      "booking.areaAnyText": "The loveliest free table", "booking.largeTitle": "A large tavolata?",
      "booking.largeText": "For 9 or more guests, we are happy to arrange the perfect table personally.",
      "booking.stepThree": "Step 3 of 4", "booking.timeTitle": "When may we set the table?",
      "booking.timeText": "We only show times that suit the selected day.", "booking.availabilityNote": "Availability is a smart concept preview. The restaurant confirms the final reservation.",
      "booking.lunch": "Pranzo · Lunch", "booking.dinner": "Cena · Dinner", "booking.good": "Good availability", "booking.few": "Few tables left",
      "booking.stepFour": "Step 4 of 4", "booking.contactTitle": "How may we welcome you?",
      "booking.contactText": "Just your contact details and everything is prepared.", "booking.yourEvening": "Your evening at La Scarpetta",
      "booking.notChosen": "Not chosen yet", "booking.promiseTitle": "Personally confirmed",
      "booking.promiseText": "The restaurant reviews your request and contacts you.", "booking.help": "Prefer to talk?",
      "booking.needDate": "Please choose a date first.", "booking.needArea": "Please choose your preferred area.", "booking.needTime": "Please choose a time.",
      "booking.closed": "Closed today", "booking.open": "Open today", "booking.opens": "Open today from {time}", "booking.openUntil": "Open until {time}",
      "form.name": "Name", "form.phone": "Phone", "form.email": "Email", "form.occasion": "Occasion",
      "form.none": "Simply enjoying", "form.birthday": "Birthday", "form.anniversary": "Anniversary",
      "form.business": "Business dinner", "form.celebration": "Family celebration", "form.preferences": "Anything we should know?",
      "form.vegetarian": "Vegetarian", "form.vegan": "Vegan", "form.gluten": "Gluten-aware", "form.quiet": "Quiet table",
      "form.note": "Requests (optional)", "form.notePlaceholder": "High chair, allergies, special requests …",
      "form.privacy": "I consent to the processing of my details for this reservation request.",
      "form.disclaimer": "This is a non-binding reservation request. Your table is confirmed only after the restaurant responds.",
      "dialog.eyebrow": "Grazie!", "dialog.title": "Your Italian evening is prepared.",
      "dialog.text": "On the final website this request will be sent straight to La Scarpetta. In this concept preview, you can call the restaurant directly.",
      "dialog.call": "Call now",
      "story.eyebrow": "La nostra famiglia", "story.title1": "Italy in the heart.", "story.title2": "At home in Ochtrup.",
      "story.welcome": "Benvenuti in famiglia", "story.headline": "Hospitality does not begin with serving. It begins when you arrive.",
      "story.copy1": "La Scarpetta is a family-run restaurant. Francesco brings years of Italian gastronomy experience to every dish and every evening.",
      "story.copy2": "The team warmly welcomes you, while authentic Italian classics, modern ideas and fresh ingredients meet in the kitchen.",
      "story.quote": "Pleasure grows when you share it.", "gallery.eyebrow": "Momenti di gusto", "gallery.title": "A glimpse into our kitchen.",
      "services.eyebrow": "For every occasion", "services.title": "Everything that makes your evening easier.",
      "services.terrace": "Terrace", "services.terraceText": "Italian evenings under the open sky.",
      "services.events": "Private events", "services.eventsText": "Birthdays, weddings and your special moments.",
      "services.takeaway": "Takeaway", "services.takeawayText": "Favourite dishes freshly prepared to take home.",
      "services.accessible": "Accessible", "services.accessibleText": "An easy visit for every guest.",
      "visit.eyebrow": "Come by", "visit.title": "A little piece of Italy. Right here in Ochtrup.",
      "visit.address": "Address", "visit.route": "Open directions", "visit.hours": "Opening hours",
      "visit.hoursValue": "Tue–Wed 16:30–22:00<br>Thu–Sun 11:30–22:00<br>Closed Monday", "visit.contact": "Contact",
      "legal.eyebrow": "Information", "legal.title": "Legal & privacy", "legal.intro": "Transparent, understandable and complete.",
      "legal.imprint": "Legal notice", "legal.privacy": "Privacy", "legal.notes": "Notes", "legal.provider": "Information pursuant to § 5 DDG",
      "legal.contact": "Contact", "legal.taxNote": "Further mandatory details, especially any VAT ID, must be completed and verified by the operator before publication.",
      "legal.controller": "Controller", "legal.access": "Server access data",
      "legal.accessText": "When this website is accessed, the hosting provider processes technically necessary information such as IP address, access time, page and browser data for secure and stable operation.",
      "legal.bookingData": "Reservation requests", "legal.bookingText": "Information from the reservation form is used solely to process the request and make contact. It is deleted when no longer needed and where no statutory retention duty applies.",
      "legal.rights": "Your rights", "legal.rightsText": "Within the legal framework you have rights of access, rectification, deletion, restriction, portability and objection, as well as the right to complain to a supervisory authority.",
      "legal.concept": "This website is a non-binding design and function concept. The reservation form does not send an automatic booking in this preview. Prices, menu and hours should be confirmed by the restaurant before publication.",
      "legal.allergens": "Allergen and additive information is available directly from the restaurant. Offers and prices may change despite careful maintenance.",
      "category.all": "All", "category.salads": "Salads", "category.antipasti": "Antipasti", "category.pasta": "Pasta", "category.pizza": "Pizza",
      "diet.vegan": "Vegan", "diet.vegetarian": "Vegetarian", "diet.spicy": "Spicy"
    }
  };

  let lang = store.get("scarpetta-language", "de");
  if (!copy[lang]) lang = "de";
  const t = (key) => copy[lang][key] ?? copy.de[key] ?? key;
  const money = (number) => new Intl.NumberFormat(lang === "de" ? "de-DE" : lang === "nl" ? "nl-NL" : "en-GB", { style: "currency", currency: "EUR" }).format(number);
  const localized = (value) => typeof value === "string" ? value : value?.[lang] || value?.de || "";

  const iconPaths = {
    home: '<path d="m3 10 9-7 9 7v10h-6v-6H9v6H3Z"/>',
    menu: '<path d="M4 4h16v16H4z"/><path d="M8 4v16M16 4v16M4 9h16M4 15h16"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/>',
    restaurant: '<path d="M7 3v8M4 3v5a3 3 0 0 0 6 0V3M7 11v10M16 3c3 2 3 7 0 9v9M16 3v9h3"/>',
    legal: '<path d="M5 3h11l3 3v15H5z"/><path d="M16 3v4h4M8 11h8M8 15h8"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
    plate: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><path d="M12 3v2"/>',
    salad: '<path d="M4 10c0 6 3 10 8 10s8-4 8-10Z"/><path d="M7 10c1-4 4-6 6-6M11 10c1-3 4-4 7-3"/>',
    tomato: '<circle cx="12" cy="13" r="8"/><path d="M12 5c-2 0-3-2-3-3M12 5c2 0 3-2 3-3M12 5l-3 2M12 5l3 2"/>',
    pasta: '<path d="M4 8h16M6 8c0 8 2 12 6 12s6-4 6-12M8 4c1 1 2 2 1 4M12 4c1 1 2 2 1 4M16 4c1 1 2 2 1 4"/>',
    pizza: '<path d="M4 19 11 4c5 1 8 4 9 9Z"/><circle cx="12" cy="10" r="1"/><circle cx="9" cy="15" r="1"/>',
    leaf: '<path d="M20 4C10 4 4 9 4 18c9 0 14-5 16-14Z"/><path d="M5 19c4-5 8-8 13-12"/>',
    people: '<circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 20c0-5 2-8 6-8s6 3 6 8M14 13c4 0 6 2 7 6"/>',
    spark: '<path d="M12 2c1 6 4 9 10 10-6 1-9 4-10 10-1-6-4-9-10-10 6-1 9-4 10-10Z"/>',
    phone: '<path d="M6 3h4l2 5-3 2c1 3 3 5 6 6l2-3 4 2v4c0 2-2 3-4 2C9 19 4 14 3 6c0-2 1-3 3-3Z"/>',
    party: '<path d="m5 21 4-14 8 8Z"/><path d="M13 4h.01M19 6h.01M18 12h.01M8 3h.01"/><path d="M14 8c2-3 4-4 7-4"/>',
    bag: '<path d="M5 8h14l-1 13H6Z"/><path d="M9 9V6a3 3 0 0 1 6 0v3"/>',
    accessibility: '<circle cx="12" cy="4" r="2"/><path d="M5 8h14M12 7v6l-3 8M12 13l5 8"/>',
    wheat: '<path d="M12 22V5M12 9C8 9 6 7 6 4c4 0 6 2 6 5ZM12 14c4 0 6-2 6-5-4 0-6 2-6 5ZM12 19c-4 0-6-2-6-5 4 0 6 2 6 5Z"/>',
    check: '<path d="m4 12 5 5L20 6"/>'
  };
  const svg = (name) => `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${iconPaths[name] || iconPaths.spark}</svg>`;

  const categories = [
    { id: "all", icon: "plate" }, { id: "salads", icon: "salad" }, { id: "antipasti", icon: "tomato" },
    { id: "pasta", icon: "pasta" }, { id: "pizza", icon: "pizza" }
  ];

  const menuItems = [
    { id:"mista", cat:"salads", name:"Mista", price:8.9, diet:["vegan"], d:{de:"Gemischter Blattsalat, Gurke, Tomaten, Mais, Möhren und Rucola",nl:"Gemengde sla, komkommer, tomaat, maïs, wortel en rucola",en:"Mixed leaves, cucumber, tomato, corn, carrots and rocket"} },
    { id:"tacchino", cat:"salads", name:"Tacchino", price:14.2, d:{de:"Gemischter Salat mit Putenstreifen und frischen Champignons",nl:"Gemengde salade met kalkoenreepjes en verse champignons",en:"Mixed salad with turkey strips and fresh mushrooms"} },
    { id:"pomodoro", cat:"salads", name:"Pomodoro", price:11.6, diet:["vegan"], d:{de:"Tomaten, Zwiebeln, Basilikum und Balsamico-Creme",nl:"Tomaat, ui, basilicum en balsamicocrème",en:"Tomatoes, onion, basil and balsamic cream"} },
    { id:"capricciosa", cat:"salads", name:"Capricciosa", price:13.9, diet:["vegetarian"], d:{de:"Gemischter Salat mit Oliven, Feta, Zwiebeln und Ei",nl:"Gemengde salade met olijven, feta, ui en ei",en:"Mixed salad with olives, feta, onion and egg"} },
    { id:"salad-scarpetta", cat:"salads", name:"La Scarpetta", price:16.5, d:{de:"Gemischter Salat, Rinderstreifen, Walnüsse, Gorgonzola und Birne",nl:"Gemengde salade, rundreepjes, walnoot, gorgonzola en peer",en:"Mixed salad, beef strips, walnuts, gorgonzola and pear"} },
    { id:"bruschetta", cat:"antipasti", name:"Bruschetta Classica", price:11.6, diet:["vegan"], d:{de:"Tomaten, Zwiebeln, Basilikum und Olivenöl",nl:"Tomaat, ui, basilicum en olijfolie",en:"Tomatoes, onion, basil and olive oil"} },
    { id:"carpaccio", cat:"antipasti", name:"Carpaccio di Manzo", price:15.6, d:{de:"Hauchdünnes Rindfleisch, Rucola und Parmesan",nl:"Flinterdun rundvlees, rucola en Parmezaan",en:"Thinly sliced beef, rocket and parmesan"} },
    { id:"caprese", cat:"antipasti", name:"Caprese Classica", price:11.6, diet:["vegetarian"], d:{de:"Tomaten, frischer Mozzarella und Basilikum",nl:"Tomaat, verse mozzarella en basilicum",en:"Tomatoes, fresh mozzarella and basil"} },
    { id:"antipasto-one", cat:"antipasti", name:"Antipasto Misto · 1 persona", price:13.9, d:{de:"Gemischte italienische Vorspeisen für eine Person",nl:"Gemengde Italiaanse voorgerechten voor één persoon",en:"Mixed Italian starters for one"} },
    { id:"antipasto-two", cat:"antipasti", name:"Antipasto Misto · 2 persone", price:24.9, d:{de:"Gemischte italienische Vorspeisen zum Teilen",nl:"Gemengde Italiaanse voorgerechten om te delen",en:"Mixed Italian starters to share"} },
    { id:"lasagne", cat:"pasta", name:"Lasagne al Forno", price:14.9, group:"Pasta al forno", d:{de:"Klassisch geschichtet und im Ofen überbacken",nl:"Klassiek gelaagd en uit de oven",en:"Classic layered pasta baked in the oven"} },
    { id:"vegetaria-forno", cat:"pasta", name:"Vegetaria al Forno", price:13.9, group:"Pasta al forno", diet:["vegetarian"], d:{de:"Vegetarische Pasta, aromatisch im Ofen überbacken",nl:"Vegetarische pasta, aromatisch uit de oven",en:"Vegetarian pasta, fragrantly oven-baked"} },
    { id:"tort-boscaiola", cat:"pasta", name:"Tortellini Boscaiola", price:14.6, group:"Tortellini", d:{de:"Ricotta-Spinat-Füllung, Schinken, Erbsen, Pilze und Tomaten-Sahnesauce",nl:"Ricotta-spinazievulling, ham, erwten, paddenstoelen en tomatenroom",en:"Ricotta-spinach filling, ham, peas, mushrooms and tomato cream"} },
    { id:"tort-spinaci", cat:"pasta", name:"Tortellini Spinaci e Funghi", price:13.5, group:"Tortellini", diet:["vegetarian"], d:{de:"Spinat und Pilze in feiner Sahnesauce",nl:"Spinazie en paddenstoelen in fijne roomsaus",en:"Spinach and mushrooms in a delicate cream sauce"} },
    { id:"tort-panna", cat:"pasta", name:"Tortellini alla Panna", price:12.9, group:"Tortellini", d:{de:"Schinken in cremiger Sahnesauce",nl:"Ham in romige saus",en:"Ham in a creamy sauce"} },
    { id:"spag-bolo", cat:"pasta", name:"Spaghetti Bolognese", price:12.6, group:"Spaghetti", d:{de:"Der italienische Klassiker mit würziger Fleischsauce",nl:"De Italiaanse klassieker met kruidige vleessaus",en:"The Italian classic with a rich meat sauce"} },
    { id:"spag-napoli", cat:"pasta", name:"Spaghetti Napoli", price:11.9, group:"Spaghetti", diet:["vegetarian"], d:{de:"Fruchtige Tomatensauce und italienische Kräuter",nl:"Fruitige tomatensaus en Italiaanse kruiden",en:"Fresh tomato sauce and Italian herbs"} },
    { id:"carbonara", cat:"pasta", name:"Spaghetti Carbonara", price:12.9, group:"Spaghetti", d:{de:"Cremig, herzhaft und klassisch italienisch",nl:"Romig, hartig en klassiek Italiaans",en:"Creamy, savoury and classically Italian"} },
    { id:"aglio", cat:"pasta", name:"Spaghetti Aglio e Olio", price:11.6, group:"Spaghetti", diet:["vegetarian"], d:{de:"Knoblauch, Olivenöl und ein Hauch Schärfe",nl:"Knoflook, olijfolie en een vleugje pit",en:"Garlic, olive oil and a touch of heat"} },
    { id:"gamberetti", cat:"pasta", name:"Spaghetti Gamberetti", price:14.9, group:"Spaghetti", d:{de:"Mit Garnelen und mediterranen Aromen",nl:"Met garnalen en mediterrane aroma’s",en:"With prawns and Mediterranean aromas"} },
    { id:"arrabbiata", cat:"pasta", name:"Penne Arrabbiata", price:12.6, group:"Penne", diet:["vegan","spicy"], d:{de:"Tomate, Knoblauch und feurige Peperoncini",nl:"Tomaat, knoflook en vurige peperoncini",en:"Tomato, garlic and fiery peperoncini"} },
    { id:"penne-scarpetta", cat:"pasta", name:"Penne La Scarpetta", price:15.9, group:"Penne", d:{de:"Rinderstreifen, gemischtes Gemüse und Tomatensauce",nl:"Rundreepjes, gemengde groenten en tomatensaus",en:"Beef strips, mixed vegetables and tomato sauce"} },
    { id:"quattro-formaggi", cat:"pasta", name:"Penne Quattro Formaggi", price:14.2, group:"Penne", diet:["vegetarian"], d:{de:"Vier italienische Käsesorten, cremig vereint",nl:"Vier Italiaanse kazen, romig gecombineerd",en:"Four Italian cheeses, creamily combined"} },
    { id:"penne-salmone", cat:"pasta", name:"Penne Salmone", price:15.9, group:"Penne", d:{de:"Frischer Lachs, Garnelen und Senf-Sahnesauce",nl:"Verse zalm, garnalen en mosterdroomsaus",en:"Fresh salmon, prawns and mustard cream sauce"} },
    { id:"gnocchi-salvia", cat:"pasta", name:"Gnocchi Burro e Salvia", price:11.6, group:"Gnocchi", diet:["vegetarian"], d:{de:"Butter, Salbei und feines Kartoffelaroma",nl:"Boter, salie en fijne aardappelsmaak",en:"Butter, sage and delicate potato flavour"} },
    { id:"gnocchi-sorrentina", cat:"pasta", name:"Gnocchi Sorrentina", price:13.2, group:"Gnocchi", diet:["vegetarian"], d:{de:"Tomate, Mozzarella und Basilikum",nl:"Tomaat, mozzarella en basilicum",en:"Tomato, mozzarella and basil"} },
    { id:"gnocchi-rustico", cat:"pasta", name:"Gnocchi Rustico", price:14.5, group:"Gnocchi", d:{de:"Speck, Gorgonzola-Sahnesauce und Rucola",nl:"Spek, gorgonzolaroomsaus en rucola",en:"Bacon, gorgonzola cream and rocket"} },
    { id:"tag-salmone", cat:"pasta", name:"Tagliatelle Salmone", price:15.9, group:"Tagliatelle", d:{de:"Bandnudeln mit frischem Lachs",nl:"Lintpasta met verse zalm",en:"Ribbon pasta with fresh salmon"} },
    { id:"tag-norma", cat:"pasta", name:"Tagliatelle alla Norma", price:13.9, group:"Tagliatelle", diet:["vegetarian"], d:{de:"Aubergine, Tomate und italienischer Käse",nl:"Aubergine, tomaat en Italiaanse kaas",en:"Aubergine, tomato and Italian cheese"} },
    { id:"tag-silana", cat:"pasta", name:"Tagliatelle Silana", price:14.9, group:"Tagliatelle", diet:["vegetarian"], d:{de:"Kräftige Aromen aus Kalabrien, vegetarisch interpretiert",nl:"Krachtige Calabrische smaken, vegetarisch bereid",en:"Bold Calabrian flavours, prepared vegetarian"} },
    { id:"tag-scarpetta", cat:"pasta", name:"Tagliatelle La Scarpetta", price:15.9, group:"Tagliatelle", d:{de:"Putenstreifen, Garnelen und Senf-Sahnesauce",nl:"Kalkoenreepjes, garnalen en mosterdroomsaus",en:"Turkey strips, prawns and mustard cream sauce"} },
    { id:"ling-frutti", cat:"pasta", name:"Linguine Frutti di Mare", price:15.9, group:"Linguine", d:{de:"Meeresfrüchte und mediterrane Tomatensauce",nl:"Zeevruchten en mediterrane tomatensaus",en:"Seafood and Mediterranean tomato sauce"} },
    { id:"ling-marinara", cat:"pasta", name:"Linguine alla Marinara", price:13.9, group:"Linguine", d:{de:"Aromatisch, maritim und typisch italienisch",nl:"Aromatisch, maritiem en typisch Italiaans",en:"Aromatic, maritime and typically Italian"} },
    { id:"ling-isolane", cat:"pasta", name:"Linguine Isolane", price:14.9, group:"Linguine", diet:["spicy"], d:{de:"Inselküche mit lebendiger, pikanter Würze",nl:"Eilandkeuken met levendige, pikante kruiden",en:"Island cooking with lively, spicy seasoning"} },
    { id:"pizza-margherita", cat:"pizza", name:"Margherita", price:10.9, diet:["vegetarian"], d:{de:"Tomate, Mozzarella und Basilikum",nl:"Tomaat, mozzarella en basilicum",en:"Tomato, mozzarella and basil"} },
    { id:"pizza-napoletana", cat:"pizza", name:"Napoletana", price:13.9, d:{de:"Kräftig, mediterran und nach neapolitanischer Art",nl:"Krachtig, mediterraan en op Napolitaanse wijze",en:"Bold, Mediterranean and Neapolitan-inspired"} },
    { id:"pizza-prosciutto", cat:"pizza", name:"Prosciutto", price:12.6, d:{de:"Tomate, Mozzarella und italienischer Schinken",nl:"Tomaat, mozzarella en Italiaanse ham",en:"Tomato, mozzarella and Italian ham"} },
    { id:"pizza-spinaci", cat:"pizza", name:"Spinaci", price:11.9, diet:["vegetarian"], d:{de:"Tomate, Mozzarella und Spinat",nl:"Tomaat, mozzarella en spinazie",en:"Tomato, mozzarella and spinach"} },
    { id:"pizza-salami", cat:"pizza", name:"Salami", price:12.5, d:{de:"Tomate, Mozzarella und Salami",nl:"Tomaat, mozzarella en salami",en:"Tomato, mozzarella and salami"} },
    { id:"pizza-tonno", cat:"pizza", name:"Tonno e Cipolla", price:13.6, d:{de:"Thunfisch und Zwiebeln",nl:"Tonijn en ui",en:"Tuna and onion"} },
    { id:"pizza-hawaii", cat:"pizza", name:"Hawaii", price:12.9, d:{de:"Schinken und Ananas",nl:"Ham en ananas",en:"Ham and pineapple"} },
    { id:"pizza-funghi", cat:"pizza", name:"Funghi", price:11.9, diet:["vegetarian"], d:{de:"Frische Champignons",nl:"Verse champignons",en:"Fresh mushrooms"} },
    { id:"pizza-ortolana", cat:"pizza", name:"Ortolana", price:13.9, diet:["vegetarian"], d:{de:"Mediterranes Gemüse",nl:"Mediterrane groenten",en:"Mediterranean vegetables"} },
    { id:"pizza-stagioni", cat:"pizza", name:"Quattro Stagioni", price:14.9, d:{de:"Vier klassische Beläge, harmonisch vereint",nl:"Vier klassieke toppings, harmonieus gecombineerd",en:"Four classic toppings in harmony"} },
    { id:"pizza-contadino", cat:"pizza", name:"Del Contadino", price:15.6, d:{de:"Herzhaft belegt nach Art des Hauses",nl:"Rijk belegd volgens huisrecept",en:"Generously topped in the house style"} },
    { id:"pizza-frutti", cat:"pizza", name:"Frutti di Mare", price:15.9, d:{de:"Meeresfrüchte und Knoblauch",nl:"Zeevruchten en knoflook",en:"Seafood and garlic"} },
    { id:"pizza-caprese", cat:"pizza", name:"Caprese", price:13.9, diet:["vegetarian"], d:{de:"Frischer Mozzarella, Tomate und Basilikum",nl:"Verse mozzarella, tomaat en basilicum",en:"Fresh mozzarella, tomato and basil"} },
    { id:"pizza-parma", cat:"pizza", name:"Parma", price:15.9, d:{de:"Parmaschinken, Rucola und Parmesan",nl:"Parmaham, rucola en Parmezaan",en:"Parma ham, rocket and parmesan"} },
    { id:"pizza-scarpetta", cat:"pizza", name:"La Scarpetta", price:15.9, d:{de:"Die besondere Hauskreation",nl:"De bijzondere creatie van het huis",en:"The house signature creation"} },
    { id:"pizza-imperiale", cat:"pizza", name:"Imperiale", price:15.9, d:{de:"Reich belegt und herrlich italienisch",nl:"Rijk belegd en heerlijk Italiaans",en:"Generously topped and unmistakably Italian"} },
    { id:"pizza-bandiera", cat:"pizza", name:"Bandiera", price:14.6, diet:["vegetarian"], d:{de:"Eine vegetarische Hommage an die italienische Flagge",nl:"Een vegetarisch eerbetoon aan de Italiaanse vlag",en:"A vegetarian tribute to the Italian flag"} },
    { id:"pizza-calabrese", cat:"pizza", name:"Calabrese Piccante", price:14.3, diet:["spicy"], d:{de:"Kalabrisch, würzig und angenehm scharf",nl:"Calabrisch, kruidig en aangenaam pittig",en:"Calabrian, savoury and pleasantly hot"} }
  ];

  const tableState = store.get("scarpetta-table", { guests: 2, items: [] });
  if (!Array.isArray(tableState.items)) tableState.items = [];
  tableState.guests = Math.min(12, Math.max(1, Number(tableState.guests) || 2));
  let selectedCategory = "all";
  let searchTerm = "";

  function brandMarkup() {
    return '<span class="brand-layer"></span><span class="brand-layer brand-fill"></span><span class="brand-glint"></span>';
  }

  function navItems() {
    return [
      ["home", "/", "home"], ["menu", "/speisekarte", "menu"], ["booking", "/reservieren", "calendar"],
      ["restaurant", "/restaurant", "restaurant"], ["legal", "/rechtliches", "legal"]
    ];
  }

  function mountChrome() {
    const page = document.body.dataset.page;
    const nav = navItems();
    const header = `
      <header class="site-header">
        <a class="brand" href="/" aria-label="La Scarpetta – Start">${brandMarkup()}</a>
        <div class="header-actions">
          <nav class="desktop-nav" aria-label="Hauptnavigation">
            ${nav.slice(0,4).map(([id,href]) => `<a href="${href}" class="${page === id ? "active" : ""}" data-i18n="nav.${id}">${t(`nav.${id}`)}</a>`).join("")}
          </nav>
          <div class="language-switch" aria-label="Sprache">
            ${["de","nl","en"].map(code => `<button type="button" data-lang="${code}" class="${lang === code ? "active" : ""}" aria-pressed="${lang === code}">${code.toUpperCase()}</button>`).join("")}
          </div>
          <button class="menu-toggle" type="button" aria-expanded="false" aria-label="${t("nav.open")}"><span></span><span></span></button>
        </div>
      </header>
      <div class="menu-overlay" aria-hidden="true">
        <button class="menu-overlay-scrim" type="button" tabindex="-1" aria-label="${t("nav.close")}"></button>
        <div class="menu-panel">
          <nav class="overlay-nav" aria-label="Seitennavigation">
            ${nav.map(([id,href,icon],i) => `<a href="${href}" class="${page === id ? "active" : ""}"><small>0${i+1}</small><span class="nav-icon">${svg(icon)}</span><b data-i18n="nav.${id}">${t(`nav.${id}`)}</b><span>↗</span></a>`).join("")}
          </nav>
          <div class="overlay-footer"><a href="https://la-scarpetta-ochtrup.order.app.hd.digital/menus" target="_blank" rel="noopener">${t("nav.order")} ↗</a><a href="https://www.instagram.com/ristorantelascarpettaochtrup/" target="_blank" rel="noopener">Instagram ↗</a></div>
        </div>
      </div>`;
    const target = $("[data-site-header]");
    if (target) target.outerHTML = header;

    const footerTarget = $("[data-site-footer]");
    if (footerTarget) footerTarget.outerHTML = `
      <footer class="site-footer">
        <div class="footer-main">
          <div class="footer-brand"><a class="brand" href="/" aria-label="La Scarpetta – Start">${brandMarkup()}</a><p data-i18n="footer.tagline">${t("footer.tagline")}</p></div>
          <div><h3 data-i18n="footer.explore">${t("footer.explore")}</h3><ul><li><a href="/speisekarte" data-i18n="nav.menu">${t("nav.menu")}</a></li><li><a href="/reservieren" data-i18n="nav.booking">${t("nav.booking")}</a></li><li><a href="/restaurant" data-i18n="nav.restaurant">${t("nav.restaurant")}</a></li><li><a href="/rechtliches" data-i18n="nav.legal">${t("nav.legal")}</a></li></ul></div>
          <div><h3 data-i18n="footer.visit">${t("footer.visit")}</h3><ul><li>Witthagen 2b</li><li>48607 Ochtrup</li><li data-i18n="booking.hours">${t("booking.hours")}</li><li data-i18n="footer.closed">${t("footer.closed")}</li></ul></div>
          <div><h3 data-i18n="footer.contact">${t("footer.contact")}</h3><ul><li><a href="tel:+4925539176930">02553 9176930</a></li><li><a href="mailto:lascarpettaochtrup@gmail.com">E-Mail</a></li><li><a href="https://www.instagram.com/ristorantelascarpettaochtrup/" target="_blank" rel="noopener">Instagram ↗</a></li><li><a href="https://la-scarpetta-ochtrup.order.app.hd.digital/menus" target="_blank" rel="noopener" data-i18n="nav.order">${t("nav.order")}</a></li></ul></div>
        </div>
        <div class="footer-bottom"><span>© La Scarpetta Ochtrup</span><span data-i18n="footer.concept">${t("footer.concept")}</span></div>
      </footer>`;

    $(".menu-toggle")?.addEventListener("click", toggleMenu);
    $(".menu-overlay-scrim")?.addEventListener("click", () => toggleMenu(false));
    $$("[data-lang]").forEach(button => button.addEventListener("click", () => setLanguage(button.dataset.lang)));
    window.addEventListener("scroll", () => $(".site-header")?.classList.toggle("scrolled", scrollY > 22), { passive: true });
    document.addEventListener("keydown", event => { if (event.key === "Escape") { toggleMenu(false); closeTable(); } });
  }

  function toggleMenu(force) {
    const open = typeof force === "boolean" ? force : !document.body.classList.contains("menu-open");
    document.body.classList.toggle("menu-open", open);
    $(".menu-toggle")?.setAttribute("aria-expanded", String(open));
    $(".menu-toggle")?.setAttribute("aria-label", t(open ? "nav.close" : "nav.open"));
    $(".menu-overlay")?.setAttribute("aria-hidden", String(!open));
  }

  function applyTranslations() {
    document.documentElement.lang = lang;
    $$("[data-i18n]").forEach(node => {
      const value = t(node.dataset.i18n);
      if (value.includes("<br>")) node.innerHTML = value;
      else node.textContent = value;
    });
    $$("[data-i18n-placeholder]").forEach(node => node.placeholder = t(node.dataset.i18nPlaceholder));
    $$("[data-i18n-aria]").forEach(node => node.setAttribute("aria-label", t(node.dataset.i18nAria)));
    $$("[data-lang]").forEach(button => {
      const active = button.dataset.lang === lang;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    updateOpenStatus();
  }

  function setLanguage(next) {
    if (!copy[next] || next === lang) return;
    lang = next;
    store.set("scarpetta-language", lang);
    applyTranslations();
    renderCategories();
    renderMenu();
    renderTable();
    renderBooking();
  }

  function updateOpenStatus() {
    const now = new Date();
    const day = now.getDay();
    const minutes = now.getHours() * 60 + now.getMinutes();
    let text = t("booking.closed");
    if (day !== 1) {
      const start = day === 2 || day === 3 ? 990 : 690;
      const end = 1320;
      if (minutes < start) text = t("booking.opens").replace("{time}", day === 2 || day === 3 ? "16:30" : "11:30");
      else if (minutes < end) text = t("booking.openUntil").replace("{time}", "22:00");
    }
    $$("[data-open-status]").forEach(node => node.textContent = text);
  }

  function mountIcons() {
    $$("[data-icon]").forEach(node => { node.innerHTML = svg(node.dataset.icon); });
  }

  function setupReveal() {
    if (!("IntersectionObserver" in window)) return $$(".reveal").forEach(node => node.classList.add("visible"));
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); }
    }), { threshold: .12 });
    $$(".reveal").forEach(node => observer.observe(node));
  }

  function showToast(message) {
    let toast = $(".site-toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.className = "site-toast";
      toast.setAttribute("role", "status");
      document.body.append(toast);
    }
    toast.textContent = message;
    toast.classList.remove("show");
    requestAnimationFrame(() => toast.classList.add("show"));
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => toast.classList.remove("show"), 2300);
  }

  function renderCategories() {
    const root = $("[data-menu-categories]");
    if (!root) return;
    root.innerHTML = categories.map(category => `
      <button type="button" class="${selectedCategory === category.id ? "active" : ""}" data-category="${category.id}">
        ${svg(category.icon)}<span>${t(`category.${category.id}`)}</span>
      </button>`).join("");
    $$("[data-category]", root).forEach(button => button.addEventListener("click", () => {
      selectedCategory = button.dataset.category;
      renderCategories();
      renderMenu();
      const target = $(".menu-meta");
      const sticky = $(".menu-categories-sticky");
      if (target && sticky) {
        const top = target.getBoundingClientRect().top + scrollY - sticky.offsetHeight - 112;
        window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
      }
    }));
  }

  function renderMenu() {
    const grid = $("[data-menu-grid]");
    if (!grid) return;
    const needle = searchTerm.trim().toLocaleLowerCase(lang);
    const visible = menuItems.filter(item => {
      const categoryMatch = selectedCategory === "all" || item.cat === selectedCategory;
      const haystack = `${item.name} ${item.group || ""} ${localized(item.d)}`.toLocaleLowerCase(lang);
      return categoryMatch && (!needle || haystack.includes(needle));
    });
    $("[data-menu-results]").textContent = visible.length;
    if (!visible.length) {
      grid.innerHTML = `<div class="menu-empty">${svg("search")}<h3>${t("menu.noResults")}</h3><p>${t("menu.noResultsText")}</p></div>`;
      return;
    }
    grid.innerHTML = visible.map(item => `
      <article class="menu-item">
        <div>
          <span class="menu-item-tag">${item.group || t(`category.${item.cat}`)}</span>
          <h3>${item.name}</h3>
          <p>${localized(item.d)}</p>
          ${item.diet?.length ? `<span class="diet-tags">${item.diet.map(tag => `<i>${t(`diet.${tag}`)}</i>`).join("")}</span>` : ""}
        </div>
        <strong class="menu-price">${money(item.price)}</strong>
        <button class="menu-add" type="button" data-add-item="${item.id}" aria-label="${t("menu.added")}: ${item.name}">+</button>
      </article>`).join("");
    $$("[data-add-item]", grid).forEach(button => button.addEventListener("click", () => {
      tableState.items.push(button.dataset.addItem);
      saveTable();
      button.classList.add("added");
      button.textContent = "✓";
      setTimeout(() => { button.classList.remove("added"); button.textContent = "+"; }, 900);
      showToast(t("menu.added"));
    }));
  }

  function aggregateTable() {
    const map = new Map();
    tableState.items.forEach(id => {
      const item = menuItems.find(entry => entry.id === id);
      if (!item) return;
      if (!map.has(id)) map.set(id, { item, quantity: 0 });
      map.get(id).quantity += 1;
    });
    return [...map.values()];
  }

  function tableTotal() {
    return aggregateTable().reduce((sum, row) => sum + row.item.price * row.quantity, 0);
  }

  function saveTable() {
    store.set("scarpetta-table", tableState);
    renderTable();
  }

  function removeOne(id) {
    const index = tableState.items.lastIndexOf(id);
    if (index >= 0) tableState.items.splice(index, 1);
    saveTable();
  }

  function tableListMarkup(compact = false) {
    const rows = aggregateTable();
    if (!rows.length) return `<p class="table-preview-empty">${t("table.empty")}</p>`;
    const items = rows.map(({ item, quantity }) => `
      <li class="table-preview-item">
        <span class="table-preview-qty">${quantity}×</span>
        <div><b>${item.name}</b><small>${item.group || t(`category.${item.cat}`)}</small></div>
        <strong>${money(item.price * quantity)}</strong>
        <button type="button" data-remove-item="${item.id}" aria-label="${t("table.remove")}">−</button>
      </li>`).join("");
    const total = tableTotal();
    return `<div class="table-preview-head"><div><span>${t("table.onTable")}</span><strong>${tableState.items.length}</strong></div>${compact ? "" : `<button type="button" data-clear-table>${t("table.clear")}</button>`}</div>
      <ul class="table-preview-items">${items}</ul>
      <div class="table-preview-total"><span>${t("table.total")} · ${t("table.perPerson")}</span><strong>${money(total)} · ${money(total / tableState.guests)}</strong></div>`;
  }

  function panelMarkup() {
    const rows = aggregateTable();
    const total = tableTotal();
    return `
      <div class="table-panel-head"><h2>${t("table.your")}</h2><button type="button" data-close-table aria-label="${t("table.close")}">×</button></div>
      <div class="table-panel-body">
        <div class="table-persons"><span>${t("table.guests")}</span><div class="guest-stepper"><button type="button" data-guests-minus>−</button><strong data-guests>${tableState.guests}</strong><button type="button" data-guests-plus>+</button></div></div>
        ${rows.length ? `<ul class="table-items">${rows.map(({item,quantity}) => `<li class="table-item"><div><h3>${item.name}</h3><small>${quantity} × ${money(item.price)}</small></div><strong>${money(item.price * quantity)}</strong><button class="table-remove" type="button" data-remove-item="${item.id}" aria-label="${t("table.remove")}">−</button></li>`).join("")}</ul>
        <div class="table-totals"><div><span>${t("table.total")}</span><strong>${money(total)}</strong></div><div class="per-person"><span>${t("table.perPerson")} · ${tableState.guests}</span><strong>${money(total / tableState.guests)}</strong></div></div>
        <button class="text-button" type="button" data-clear-table>${t("table.clear")}</button>` : `<div class="table-empty">${svg("plate")}<p>${t("table.empty")}</p></div>`}
      </div>
      <div class="table-panel-action"><a class="button button-red" href="/reservieren"><span>${t("table.toBooking")}</span><span>→</span></a></div>`;
  }

  function bindTableActions(root = document) {
    $$("[data-remove-item]", root).forEach(button => button.addEventListener("click", () => removeOne(button.dataset.removeItem)));
    $$("[data-clear-table]", root).forEach(button => button.addEventListener("click", () => { tableState.items = []; saveTable(); }));
    $$("[data-guests-minus]", root).forEach(button => button.addEventListener("click", () => {
      tableState.guests = Math.max(1, tableState.guests - 1); saveTable();
    }));
    $$("[data-guests-plus]", root).forEach(button => button.addEventListener("click", () => {
      tableState.guests = Math.min(12, tableState.guests + 1); saveTable();
    }));
    $$("[data-close-table]", root).forEach(button => button.addEventListener("click", closeTable));
  }

  function renderTable() {
    $$("[data-table-count]").forEach(node => node.textContent = tableState.items.length);
    $$("[data-table-total]").forEach(node => node.textContent = money(tableTotal()));
    $$("[data-guests]").forEach(node => node.textContent = tableState.guests);
    const preview = $("[data-table-preview]");
    if (preview) { preview.innerHTML = tableListMarkup(); bindTableActions(preview); }
    const panel = $("[data-table-panel]");
    if (panel) { panel.innerHTML = panelMarkup(); bindTableActions(panel); }
    const surface = $("[data-table-surface-items]");
    if (surface) {
      const rows = aggregateTable();
      surface.innerHTML = rows.length
        ? rows.slice(0,4).map(({item,quantity}) => `<span class="table-plate">${svg(item.cat === "pizza" ? "pizza" : item.cat === "salads" ? "salad" : item.cat === "antipasti" ? "tomato" : "pasta")}<b>${item.name}</b><small>${quantity}×</small></span>`).join("") + (rows.length > 4 ? `<small class="table-more">+${rows.length - 4} ${t("table.more")}</small>` : "")
        : `<span class="table-surface-empty">${t("table.visualEmpty")}</span>`;
    }
    renderBookingTableSummary();
  }

  function openTable() {
    document.body.classList.add("table-open");
    $("[data-table-drawer]")?.setAttribute("aria-hidden", "false");
  }
  function closeTable() {
    document.body.classList.remove("table-open");
    $("[data-table-drawer]")?.setAttribute("aria-hidden", "true");
  }
  function setupTable() {
    $$("[data-open-table]").forEach(button => button.addEventListener("click", openTable));
    $("[data-table-scrim]")?.addEventListener("click", closeTable);
    const search = $("#menu-search");
    search?.addEventListener("input", () => { searchTerm = search.value; renderMenu(); });
    renderCategories();
    renderMenu();
    renderTable();
  }

  const booking = { date: null, guests: tableState.guests, area: null, time: null, daypart: "dinner" };
  let bookingStep = 1;
  let calendarMonth = new Date();
  calendarMonth = new Date(calendarMonth.getFullYear(), calendarMonth.getMonth(), 1);
  const areaKeys = { restaurant:"booking.areaRestaurant", terrace:"booking.areaTerrace", any:"booking.areaAny" };
  const isoDate = date => `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,"0")}-${String(date.getDate()).padStart(2,"0")}`;
  const parseIso = value => { const [y,m,d] = value.split("-").map(Number); return new Date(y,m-1,d); };

  function renderCalendar() {
    const root = $("[data-calendar]");
    if (!root) return;
    const locale = lang === "de" ? "de-DE" : lang === "nl" ? "nl-NL" : "en-GB";
    $("[data-calendar-title]").textContent = new Intl.DateTimeFormat(locale, { month:"long", year:"numeric" }).format(calendarMonth);
    const today = new Date(); today.setHours(0,0,0,0);
    const max = new Date(today); max.setDate(max.getDate()+90);
    const firstOffset = (calendarMonth.getDay()+6)%7;
    const count = new Date(calendarMonth.getFullYear(), calendarMonth.getMonth()+1, 0).getDate();
    const cells = Array.from({length:firstOffset}, () => '<span class="calendar-day empty"></span>');
    for (let day=1; day<=count; day++) {
      const date = new Date(calendarMonth.getFullYear(), calendarMonth.getMonth(), day);
      const iso = isoDate(date);
      const closed = date.getDay() === 1;
      const disabled = date < today || date > max || closed;
      cells.push(`<button class="calendar-day ${closed ? "closed" : ""} ${iso === booking.date ? "selected" : ""} ${date.getTime() === today.getTime() ? "today" : ""}" type="button" data-date="${iso}" ${disabled ? "disabled" : ""}>${day}</button>`);
    }
    root.innerHTML = cells.join("");
    $$("[data-date]", root).forEach(button => button.addEventListener("click", () => {
      booking.date = button.dataset.date;
      booking.time = null;
      const day = parseIso(booking.date).getDay();
      if (day === 2 || day === 3) booking.daypart = "dinner";
      renderCalendar();
      updateBookingSummary();
    }));
    const prev = $("[data-month-prev]");
    if (prev) prev.disabled = calendarMonth <= new Date(today.getFullYear(), today.getMonth(), 1);
  }

  function renderBookingGuests() {
    const root = $("[data-booking-guests]");
    if (!root) return;
    root.innerHTML = Array.from({length:12},(_,i) => `<button type="button" class="${booking.guests === i+1 ? "selected" : ""}" data-booking-guests-count="${i+1}">${i+1}</button>`).join("");
    $$("[data-booking-guests-count]", root).forEach(button => button.addEventListener("click", () => {
      booking.guests = Number(button.dataset.bookingGuestsCount);
      tableState.guests = booking.guests;
      saveTable();
      renderBookingGuests();
      renderGuestSeats();
      updateBookingSummary();
      const note = $("[data-large-party]");
      if (note) note.hidden = booking.guests < 9;
    }));
    $$("[data-area]").forEach(button => {
      button.classList.toggle("selected", booking.area === button.dataset.area);
      button.onclick = () => {
        booking.area = button.dataset.area;
        $$("[data-area]").forEach(item => item.classList.toggle("selected", item === button));
        updateBookingSummary();
      };
    });
  }

  function renderGuestSeats() {
    $$("[data-booking-guest-count]").forEach(node => node.textContent = booking.guests);
    const root = $("[data-guest-seats]");
    if (!root) return;
    root.innerHTML = Array.from({length:booking.guests},(_,i) => `<span class="guest-seat" style="--angle:${(360/booking.guests)*i}deg">${i+1}</span>`).join("");
  }

  function makeTimes(startHour, startMinutes, endHour, endMinutes) {
    const result = [];
    for (let time=startHour*60+startMinutes; time<=endHour*60+endMinutes; time+=30) result.push(`${String(Math.floor(time/60)).padStart(2,"0")}:${String(time%60).padStart(2,"0")}`);
    return result;
  }

  function timeAvailability(time) {
    const seed = [...`${booking.date}${time}${booking.guests}`].reduce((sum,char) => sum + char.charCodeAt(0), 0);
    return seed % 5 === 0 || (booking.guests >= 7 && seed % 3 === 0) ? "few" : "good";
  }

  function renderTimes() {
    const root = $("[data-time-grid]");
    if (!root || !booking.date) return;
    const day = parseIso(booking.date).getDay();
    const lunchAvailable = [0,4,5,6].includes(day);
    if (!lunchAvailable) booking.daypart = "dinner";
    const switcher = $("[data-daypart-switch]");
    switcher.innerHTML = lunchAvailable ? `
      <button type="button" data-daypart="lunch" class="${booking.daypart === "lunch" ? "active" : ""}">${t("booking.lunch")}</button>
      <button type="button" data-daypart="dinner" class="${booking.daypart === "dinner" ? "active" : ""}">${t("booking.dinner")}</button>` : `<button type="button" class="active">${t("booking.dinner")}</button>`;
    $$("[data-daypart]", switcher).forEach(button => button.addEventListener("click", () => {
      booking.daypart = button.dataset.daypart; booking.time = null; renderTimes(); updateBookingSummary();
    }));
    const times = booking.daypart === "lunch" ? makeTimes(11,30,14,0) : makeTimes(17,0,21,0);
    root.innerHTML = times.map(time => {
      const availability = timeAvailability(time);
      const recommended = ["18:30","19:00"].includes(time) && booking.daypart === "dinner";
      return `<button type="button" data-time="${time}" class="time-option ${availability === "few" ? "low" : ""} ${recommended ? "recommended" : ""} ${booking.time === time ? "selected" : ""}"><strong>${time}</strong><small>${t(availability === "few" ? "booking.few" : "booking.good")}</small></button>`;
    }).join("");
    $$("[data-time]", root).forEach(button => button.addEventListener("click", () => {
      booking.time = button.dataset.time; renderTimes(); updateBookingSummary();
    }));
  }

  function dateLabel(short = false) {
    if (!booking.date) return t("booking.notChosen");
    const locale = lang === "de" ? "de-DE" : lang === "nl" ? "nl-NL" : "en-GB";
    return new Intl.DateTimeFormat(locale, short ? { day:"2-digit", month:"2-digit", year:"numeric" } : { weekday:"long", day:"numeric", month:"long" }).format(parseIso(booking.date));
  }

  function updateBookingSummary() {
    const date = booking.date ? parseIso(booking.date) : null;
    $$("[data-summary-day]").forEach(node => node.textContent = date ? String(date.getDate()).padStart(2,"0") : "—");
    $$("[data-summary-date]").forEach(node => node.textContent = dateLabel());
    $$("[data-summary-time]").forEach(node => node.textContent = booking.time || "—");
    $$("[data-summary-guests]").forEach(node => node.textContent = booking.guests);
    $$("[data-summary-area]").forEach(node => node.textContent = booking.area ? t(areaKeys[booking.area]) : "—");
    const nav1 = $('[data-booking-summary="1"]'); if (nav1) nav1.textContent = booking.date ? dateLabel(true) : t("booking.chooseDate");
    const nav2 = $('[data-booking-summary="2"]'); if (nav2) nav2.textContent = booking.area ? `${booking.guests} · ${t(areaKeys[booking.area])}` : `${booking.guests} ${t("table.guests")}`;
    const nav3 = $('[data-booking-summary="3"]'); if (nav3) nav3.textContent = booking.time || t("booking.chooseTime");
    renderBookingTableSummary();
  }

  function renderBookingTableSummary() {
    const root = $("[data-booking-table-summary]");
    if (!root) return;
    const rows = aggregateTable();
    if (!rows.length) { root.innerHTML = ""; return; }
    root.innerHTML = `<small>${t("table.your")}</small>${rows.slice(0,3).map(({item,quantity}) => `<p><span>${quantity}× ${item.name}</span><b>${money(item.price*quantity)}</b></p>`).join("")}${rows.length > 3 ? `<em>+${rows.length-3} ${t("table.more")}</em>` : ""}<strong>${t("table.total")}: ${money(tableTotal())}</strong>`;
  }

  function validateBookingStep(step) {
    if (step === 1 && !booking.date) { showToast(t("booking.needDate")); return false; }
    if (step === 2 && !booking.area) { showToast(t("booking.needArea")); return false; }
    if (step === 3 && !booking.time) { showToast(t("booking.needTime")); return false; }
    return true;
  }

  function setBookingStep(step, scroll = true) {
    if (step > bookingStep && !validateBookingStep(bookingStep)) return;
    if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
    bookingStep = Math.max(1, Math.min(4, step));
    $$("[data-booking-step]").forEach(section => section.classList.toggle("active", Number(section.dataset.bookingStep) === bookingStep));
    $$("[data-booking-nav]").forEach(button => {
      const number = Number(button.dataset.bookingNav);
      button.classList.toggle("active", number === bookingStep);
      button.classList.toggle("done", number < bookingStep);
    });
    if (bookingStep === 3) renderTimes();
    if (scroll) {
      const wizard = $(".booking-shell");
      if (wizard) {
        const target = Math.max(0, wizard.getBoundingClientRect().top + window.scrollY - 88);
        const jumpToStep = () => {
          const root = document.documentElement;
          const previousBehavior = root.style.scrollBehavior;
          root.style.scrollBehavior = "auto";
          window.scrollTo(0, target);
          root.scrollTop = target;
          document.body.scrollTop = target;
          requestAnimationFrame(() => { root.style.scrollBehavior = previousBehavior; });
        };
        jumpToStep();
        window.setTimeout(jumpToStep, 60);
        window.setTimeout(jumpToStep, 320);
      }
    }
  }

  function renderBooking() {
    if (!$("[data-booking-form]")) return;
    renderCalendar();
    renderBookingGuests();
    renderGuestSeats();
    if (booking.date) renderTimes();
    updateBookingSummary();
  }

  function setupBooking() {
    if (!$("[data-booking-form]")) return;
    $("[data-month-prev]")?.addEventListener("click", () => { calendarMonth = new Date(calendarMonth.getFullYear(), calendarMonth.getMonth()-1, 1); renderCalendar(); });
    $("[data-month-next]")?.addEventListener("click", () => { calendarMonth = new Date(calendarMonth.getFullYear(), calendarMonth.getMonth()+1, 1); renderCalendar(); });
    $$("[data-booking-next]").forEach(button => button.addEventListener("click", () => setBookingStep(bookingStep+1)));
    $$("[data-booking-back]").forEach(button => button.addEventListener("click", () => setBookingStep(bookingStep-1)));
    $$("[data-booking-nav]").forEach(button => button.addEventListener("click", () => {
      const target = Number(button.dataset.bookingNav);
      if (target <= bookingStep) setBookingStep(target);
      else setBookingStep(bookingStep+1);
    }));
    $("[data-booking-form]").addEventListener("submit", event => {
      event.preventDefault();
      if (!booking.date || !booking.area || !booking.time) return showToast(t("booking.needTime"));
      if (!event.currentTarget.reportValidity()) return;
      const dialog = $("[data-booking-dialog]");
      const summary = $("[data-dialog-summary]");
      summary.innerHTML = `<strong>${dateLabel()}</strong><span>${booking.time} · ${booking.guests} ${t("table.guests")} · ${t(areaKeys[booking.area])}</span>${tableState.items.length ? `<small>${tableState.items.length} ${t("table.onTable").toLowerCase()} · ${money(tableTotal())}</small>` : ""}`;
      dialog.showModal();
    });
    $("[data-dialog-close]")?.addEventListener("click", () => $("[data-booking-dialog]")?.close());
    renderBooking();
  }

  mountChrome();
  applyTranslations();
  mountIcons();
  setupReveal();
  setupTable();
  setupBooking();
})();
