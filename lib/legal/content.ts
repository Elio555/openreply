import { BRAND_NAME } from "@/lib/brand";

// Operator details shown on the legal pages. Change them here only.
export const LEGAL_ENTITY = {
  name: "Solis International LLC",
  address: "c/o Registered Agents Inc, 30 N Gould St Ste R, Sheridan, WY 82801, USA",
  // TODO: add the public privacy contact email (empty = postal address only).
  email: "",
};

export type LegalLang = "it" | "en";
export type LegalDocId = "privacy" | "terms" | "deletion";

export interface LegalSection {
  heading: string;
  paragraphs?: string[];
  list?: string[];
  /** Paragraphs rendered after the list. */
  after?: string[];
}

export interface LegalDoc {
  title: string;
  description: string;
  sections: LegalSection[];
}

export const LEGAL_UPDATED: Record<LegalLang, string> = {
  it: "13 ottobre 2026",
  en: "October 13, 2026",
};

export const LEGAL_LABELS: Record<
  LegalLang,
  { updated: string; signIn: string; other: string; otherLang: LegalLang }
> = {
  it: { updated: "Ultimo aggiornamento", signIn: "Accedi", other: "English version", otherLang: "en" },
  en: { updated: "Last updated", signIn: "Sign in", other: "Versione italiana", otherLang: "it" },
};

const B = BRAND_NAME;
const E = LEGAL_ENTITY;
// How to reach us: the privacy email once set, otherwise by post.
const TO_IT = E.email ? `a ${E.email}` : `per posta a ${E.name}, ${E.address}`;
const TO_EN = E.email ? `to ${E.email}` : `by post to ${E.name}, ${E.address}`;

export const LEGAL_DOCS: Record<LegalDocId, Record<LegalLang, LegalDoc>> = {
  privacy: {
    it: {
      title: "Informativa sulla privacy",
      description: `Come ${B} tratta i dati personali dei clienti che usano il servizio e delle persone che interagiscono con i loro account Instagram, ai sensi del Regolamento (UE) 2016/679 (GDPR).`,
      sections: [
        {
          heading: "1. Titolare del trattamento",
          paragraphs: [
            `Il servizio ${B} è gestito da ${E.name}, ${E.address}. Per qualsiasi richiesta sulla privacy puoi scrivere ${TO_IT}.`,
            `${E.name} è titolare del trattamento per i dati dei clienti che creano un account ${B}. Per i dati delle persone che commentano o scrivono agli account Instagram dei clienti, ${E.name} agisce come responsabile del trattamento per conto del cliente, che ne è il titolare (vedi punto 4).`,
          ],
        },
        {
          heading: "2. Dati che trattiamo",
          list: [
            "Dati dell'account: indirizzo email usato per l'accesso, nome del workspace, ruoli e inviti dei membri.",
            "Collegamento Instagram: identificativo e nome utente dell'account professionale collegato e token di accesso rilasciato da Meta, conservato cifrato (AES-256-GCM). Non chiediamo né conserviamo password di Instagram.",
            "Campagne: post o reel scelti, parole chiave, testi dei messaggi, link e impostazioni.",
            "Dati delle persone che interagiscono con l'account del cliente: identificativo Instagram, nome utente, testo del commento o del messaggio, esito dell'invio dei messaggi, eventuale verifica del follow.",
            "Clic sui link tracciati: data e ora, indirizzo IP in forma cifrata (hash, non reversibile), browser (user agent) e pagina di provenienza.",
            "Dati tecnici: log di funzionamento, errori, eventi dei webhook e numero di follower dell'account collegato registrato una volta al giorno.",
          ],
        },
        {
          heading: "3. Finalità e basi giuridiche",
          list: [
            "Fornire il servizio: accesso, collegamento a Instagram, ricezione dei commenti, invio delle risposte e dei messaggi configurati, statistiche. Base giuridica: esecuzione del contratto (art. 6.1.b GDPR).",
            "Sicurezza, prevenzione degli abusi, risoluzione dei problemi e protezione del servizio. Base giuridica: legittimo interesse (art. 6.1.f GDPR).",
            "Adempimenti di legge, fiscali e contabili quando previsti. Base giuridica: obbligo legale (art. 6.1.c GDPR).",
          ],
          after: [
            "Non vendiamo dati personali, non li usiamo per pubblicità e non effettuiamo profilazione o decisioni automatizzate con effetti giuridici.",
          ],
        },
        {
          heading: "4. Dati dei follower dei clienti",
          paragraphs: [
            `Quando una persona commenta un post o scrive in DM a un account collegato a ${B}, il trattamento avviene per conto del cliente titolare di quell'account. Il cliente decide parole chiave, messaggi e finalità ed è responsabile di informare il proprio pubblico e di avere una base giuridica adeguata. ${E.name} tratta questi dati solo per eseguire le istruzioni del cliente, secondo i Termini di servizio.`,
            "Chi ha interagito con l'account di un cliente può rivolgersi direttamente al cliente oppure scriverci: inoltreremo la richiesta al cliente interessato.",
          ],
        },
        {
          heading: "5. Fornitori e trasferimenti fuori dall'UE",
          paragraphs: [
            "Per far funzionare il servizio ci avvaliamo di fornitori che trattano i dati solo per nostro conto:",
          ],
          list: [
            "Vercel Inc. (USA): hosting dell'applicazione e statistiche di utilizzo anonime senza cookie.",
            "Railway Corp. (USA): database, coda dei messaggi e processo che invia i DM.",
            "Google LLC (USA): invio delle email di accesso tramite Gmail.",
            "Meta Platforms (Irlanda/USA): API ufficiali di Instagram per ricevere commenti e inviare messaggi.",
          ],
          after: [
            "Alcuni fornitori si trovano negli Stati Uniti. I trasferimenti avvengono sulla base del Data Privacy Framework UE-USA, quando il fornitore vi aderisce, o delle Clausole Contrattuali Standard approvate dalla Commissione europea.",
          ],
        },
        {
          heading: "6. Conservazione",
          list: [
            "I dati dell'account e delle campagne sono conservati finché l'account resta attivo.",
            "Il token di Instagram viene eliminato quando scolleghi l'account dalle Impostazioni.",
            "Su richiesta di cancellazione, eliminiamo i dati entro 30 giorni, salvo quelli che dobbiamo conservare per obblighi di legge.",
          ],
        },
        {
          heading: "7. I tuoi diritti",
          paragraphs: [
            `Puoi chiedere in qualsiasi momento accesso, rettifica, cancellazione, limitazione, portabilità dei dati e opporti al trattamento basato sul legittimo interesse (artt. 15-22 GDPR), scrivendo ${TO_IT}. Rispondiamo entro un mese.`,
            "Hai anche il diritto di proporre reclamo al Garante per la protezione dei dati personali (www.garanteprivacy.it) o all'autorità del tuo Paese UE.",
          ],
        },
        {
          heading: "8. Cookie",
          paragraphs: [
            `${B} usa solo cookie tecnici necessari: il cookie di sessione per mantenere l'accesso e quello che ricorda la lingua scelta. Non usiamo cookie pubblicitari né di profilazione, quindi non è richiesto un consenso.`,
          ],
        },
        {
          heading: "9. Sicurezza",
          paragraphs: [
            "Le connessioni sono cifrate (HTTPS), i token di Instagram sono cifrati nel database e l'accesso avviene con link monouso inviati via email. Nessun sistema è sicuro al 100%: in caso di violazione dei dati informeremo le autorità e le persone interessate quando previsto dalla legge.",
          ],
        },
        {
          heading: "10. Modifiche",
          paragraphs: [
            "Possiamo aggiornare questa informativa. In caso di modifiche importanti avviseremo i clienti via email o nell'app. La data in alto indica l'ultima versione.",
          ],
        },
      ],
    },
    en: {
      title: "Privacy Policy",
      description: `How ${B} processes the personal data of customers who use the service and of people who interact with their Instagram accounts, under Regulation (EU) 2016/679 (GDPR).`,
      sections: [
        {
          heading: "1. Controller",
          paragraphs: [
            `${B} is operated by ${E.name}, ${E.address}. For any privacy request, write ${TO_EN}.`,
            `${E.name} is the controller of the data of customers who create a ${B} account. For the data of people who comment on or message customers' Instagram accounts, ${E.name} acts as a processor on behalf of the customer, who is the controller (see section 4).`,
          ],
        },
        {
          heading: "2. Data we process",
          list: [
            "Account data: the email address used to sign in, workspace name, member roles and invitations.",
            "Instagram connection: the connected professional account's ID and username and the access token issued by Meta, stored encrypted (AES-256-GCM). We never ask for or store Instagram passwords.",
            "Campaigns: selected posts or reels, keywords, message texts, links and settings.",
            "Data of people who interact with a customer's account: Instagram ID, username, comment or message text, delivery status of messages, and follow verification where enabled.",
            "Tracked link clicks: date and time, IP address in hashed (non-reversible) form, browser (user agent) and referring page.",
            "Technical data: operational logs, errors, webhook events, and the connected account's follower count recorded once a day.",
          ],
        },
        {
          heading: "3. Purposes and legal bases",
          list: [
            "Providing the service: sign-in, Instagram connection, receiving comments, sending configured replies and messages, analytics. Legal basis: performance of a contract (Art. 6(1)(b) GDPR).",
            "Security, abuse prevention, troubleshooting and protecting the service. Legal basis: legitimate interests (Art. 6(1)(f) GDPR).",
            "Legal, tax and accounting obligations where applicable. Legal basis: legal obligation (Art. 6(1)(c) GDPR).",
          ],
          after: [
            "We do not sell personal data, use it for advertising, or carry out profiling or automated decisions with legal effects.",
          ],
        },
        {
          heading: "4. Data of customers' followers",
          paragraphs: [
            `When someone comments on a post or sends a DM to an account connected to ${B}, the processing is carried out on behalf of the customer who owns that account. The customer decides keywords, messages and purposes and is responsible for informing their audience and having an appropriate legal basis. ${E.name} processes this data only to carry out the customer's instructions, as set out in the Terms of Service.`,
            "Anyone who has interacted with a customer's account can contact that customer directly or write to us, and we will forward the request to the customer concerned.",
          ],
        },
        {
          heading: "5. Service providers and transfers outside the EU",
          paragraphs: [
            "To run the service we rely on providers that process data only on our behalf:",
          ],
          list: [
            "Vercel Inc. (USA): application hosting and anonymous, cookie-free usage statistics.",
            "Railway Corp. (USA): database, message queue and the process that sends DMs.",
            "Google LLC (USA): sending sign-in emails through Gmail.",
            "Meta Platforms (Ireland/USA): official Instagram APIs to receive comments and send messages.",
          ],
          after: [
            "Some providers are located in the United States. Transfers rely on the EU-U.S. Data Privacy Framework, where the provider is certified, or on the Standard Contractual Clauses approved by the European Commission.",
          ],
        },
        {
          heading: "6. Retention",
          list: [
            "Account and campaign data are kept while the account is active.",
            "The Instagram token is deleted when you disconnect the account in Settings.",
            "On a deletion request, we delete the data within 30 days, except data we must keep by law.",
          ],
        },
        {
          heading: "7. Your rights",
          paragraphs: [
            `You can request access, rectification, erasure, restriction and portability of your data, and object to processing based on legitimate interests (Arts. 15-22 GDPR), at any time by writing ${TO_EN}. We reply within one month.`,
            "You also have the right to lodge a complaint with the Italian Data Protection Authority (Garante per la protezione dei dati personali, www.garanteprivacy.it) or the authority of your EU country.",
          ],
        },
        {
          heading: "8. Cookies",
          paragraphs: [
            `${B} uses only strictly necessary technical cookies: the session cookie that keeps you signed in and one that remembers your language. We use no advertising or profiling cookies, so no consent is required.`,
          ],
        },
        {
          heading: "9. Security",
          paragraphs: [
            "Connections are encrypted (HTTPS), Instagram tokens are encrypted in the database, and sign-in uses one-time links sent by email. No system is 100% secure: in the event of a data breach we will notify the authorities and affected people where the law requires it.",
          ],
        },
        {
          heading: "10. Changes",
          paragraphs: [
            "We may update this policy. For material changes we will notify customers by email or in the app. The date at the top shows the latest version.",
          ],
        },
      ],
    },
  },

  terms: {
    it: {
      title: "Termini di servizio",
      description: `Le condizioni che regolano l'uso di ${B}, il servizio di risposte automatiche ai commenti e ai messaggi Instagram offerto da ${E.name}.`,
      sections: [
        {
          heading: "1. Il servizio",
          paragraphs: [
            `${B} permette a chi gestisce un account Instagram professionale di inviare automaticamente risposte pubbliche e messaggi privati alle persone che commentano un post o scrivono in DM una parola chiave, usando esclusivamente le API ufficiali di Meta. Il servizio è fornito da ${E.name}, ${E.address}.`,
          ],
        },
        {
          heading: "2. Chi può usarlo",
          paragraphs: [
            `${B} è destinato a professionisti e aziende maggiorenni che collegano un account Instagram Business o Creator di cui hanno il controllo. Usando il servizio dichiari di agire per scopi professionali e di avere il diritto di collegare l'account.`,
          ],
        },
        {
          heading: "3. Account e accesso",
          paragraphs: [
            "L'accesso avviene con un link inviato all'email indicata. Sei responsabile della sicurezza della tua casella email e di tutte le attività svolte dal tuo account e dai membri che inviti nel workspace.",
          ],
        },
        {
          heading: "4. Uso consentito",
          paragraphs: ["Ti impegni a:"],
          list: [
            "rispettare i Termini della piattaforma Meta, le Linee guida della community di Instagram e le norme sulla messaggistica di Instagram;",
            "inviare messaggi solo a persone che hanno interagito con il tuo account e solo con contenuti pertinenti alla loro richiesta;",
            "non inviare spam, contenuti illeciti, ingannevoli, offensivi o che violino diritti di terzi;",
            "non tentare di aggirare i limiti di invio di Meta o di questo servizio, né di accedere ai dati di altri clienti.",
          ],
        },
        {
          heading: "5. Dati del tuo pubblico",
          paragraphs: [
            `Per i dati delle persone che interagiscono con il tuo account sei tu il titolare del trattamento e ${E.name} agisce come responsabile del trattamento ai sensi dell'art. 28 GDPR. In questo ruolo ci impegniamo a: trattare i dati solo secondo le tue istruzioni (le impostazioni delle campagne); garantire la riservatezza del personale autorizzato; adottare misure di sicurezza adeguate; avvalerci solo dei sub-responsabili indicati nell'Informativa sulla privacy, avvisandoti di eventuali cambiamenti; aiutarti a rispondere alle richieste degli interessati; avvisarti senza ingiustificato ritardo in caso di violazione dei dati; cancellare i dati alla fine del servizio, salvo obblighi di legge.`,
          ],
        },
        {
          heading: "6. Dipendenza da Meta",
          paragraphs: [
            `${B} funziona tramite le API di Meta, che possono cambiare, limitare o sospendere funzioni, permessi e volumi di invio in qualsiasi momento. Non siamo responsabili di blocchi, limitazioni o sanzioni decisi da Meta sul tuo account né di messaggi non consegnati per cause dipendenti da Meta o da Instagram.`,
          ],
        },
        {
          heading: "7. Disponibilità",
          paragraphs: [
            "Facciamo il possibile per mantenere il servizio attivo e affidabile, ma non garantiamo che sia ininterrotto o privo di errori. Possono esserci interruzioni per manutenzione, aggiornamenti o problemi dei fornitori.",
          ],
        },
        {
          heading: "8. Prezzi",
          paragraphs: [
            "Durante la fase iniziale il servizio può essere offerto gratuitamente o a condizioni concordate direttamente con il cliente. Eventuali piani a pagamento, con prezzi, rinnovi, recesso e rimborsi, saranno indicati prima dell'acquisto e richiederanno la tua accettazione.",
          ],
        },
        {
          heading: "9. Proprietà intellettuale",
          paragraphs: [
            `I contenuti delle tue campagne restano tuoi: ci concedi solo il diritto di usarli per fornire il servizio. Il nome e il marchio ${B} appartengono a ${E.name}. Il software si basa anche sul progetto open source OpenReply, distribuito con licenza MIT.`,
          ],
        },
        {
          heading: "10. Responsabilità",
          paragraphs: [
            `Nei limiti consentiti dalla legge, ${E.name} non risponde di danni indiretti, perdita di profitti, di dati o di opportunità commerciali. La responsabilità complessiva è limitata agli importi pagati dal cliente nei 12 mesi precedenti l'evento o, se il servizio è gratuito, a 100 euro. Restano salve le responsabilità che per legge non possono essere limitate, come quelle per dolo o colpa grave.`,
          ],
        },
        {
          heading: "11. Sospensione e chiusura",
          paragraphs: [
            "Puoi smettere di usare il servizio in qualsiasi momento, scollegando Instagram e chiedendo la cancellazione dell'account. Possiamo sospendere o chiudere un account che viola questi Termini o le regole di Meta, o che mette a rischio il servizio, avvisando quando possibile.",
          ],
        },
        {
          heading: "12. Modifiche",
          paragraphs: [
            "Possiamo aggiornare questi Termini. Le modifiche importanti saranno comunicate con almeno 15 giorni di anticipo via email o nell'app. Continuare a usare il servizio dopo quella data significa accettarle.",
          ],
        },
        {
          heading: "13. Legge applicabile",
          paragraphs: [
            `Questi Termini sono regolati dalla legge dello Stato del Wyoming (USA). Restano comunque applicabili le norme inderogabili a tutela del cliente previste dalla legge del suo Paese di residenza, incluso il GDPR. Per qualsiasi domanda scrivi ${TO_IT}.`,
          ],
        },
      ],
    },
    en: {
      title: "Terms of Service",
      description: `The terms that govern the use of ${B}, the automated Instagram comment and message reply service offered by ${E.name}.`,
      sections: [
        {
          heading: "1. The service",
          paragraphs: [
            `${B} lets people who manage an Instagram professional account automatically send public replies and private messages to people who comment on a post or send a keyword by DM, using only Meta's official APIs. The service is provided by ${E.name}, ${E.address}.`,
          ],
        },
        {
          heading: "2. Who can use it",
          paragraphs: [
            `${B} is intended for professionals and businesses aged 18 or over who connect an Instagram Business or Creator account they control. By using the service you confirm that you act for professional purposes and have the right to connect the account.`,
          ],
        },
        {
          heading: "3. Account and access",
          paragraphs: [
            "You sign in through a link sent to your email address. You are responsible for the security of your mailbox and for all activity of your account and of the members you invite to your workspace.",
          ],
        },
        {
          heading: "4. Acceptable use",
          paragraphs: ["You agree to:"],
          list: [
            "comply with the Meta Platform Terms, the Instagram Community Guidelines and Instagram's messaging policies;",
            "message only people who have interacted with your account, and only with content relevant to their request;",
            "not send spam, or unlawful, misleading, offensive or infringing content;",
            "not try to bypass the sending limits of Meta or of this service, or to access other customers' data.",
          ],
        },
        {
          heading: "5. Your audience's data",
          paragraphs: [
            `For the data of people who interact with your account, you are the controller and ${E.name} acts as your processor under Art. 28 GDPR. In that role we commit to: process the data only on your instructions (your campaign settings); ensure that authorised personnel are bound by confidentiality; apply appropriate security measures; use only the sub-processors listed in the Privacy Policy and inform you of changes; help you respond to data subject requests; notify you without undue delay of a personal data breach; and delete the data when the service ends, unless the law requires otherwise.`,
          ],
        },
        {
          heading: "6. Dependence on Meta",
          paragraphs: [
            `${B} runs on Meta's APIs, which may change, limit or suspend features, permissions and sending volumes at any time. We are not responsible for blocks, limits or penalties that Meta applies to your account, or for messages not delivered for reasons attributable to Meta or Instagram.`,
          ],
        },
        {
          heading: "7. Availability",
          paragraphs: [
            "We do our best to keep the service available and reliable, but we do not guarantee that it will be uninterrupted or error-free. Interruptions may occur for maintenance, updates or provider issues.",
          ],
        },
        {
          heading: "8. Pricing",
          paragraphs: [
            "During the initial phase the service may be offered free of charge or on terms agreed directly with the customer. Any paid plans, including prices, renewals, cancellation and refunds, will be shown before purchase and will require your acceptance.",
          ],
        },
        {
          heading: "9. Intellectual property",
          paragraphs: [
            `The content of your campaigns remains yours; you grant us only the right to use it to provide the service. The ${B} name and brand belong to ${E.name}. The software is based in part on the open source project OpenReply, released under the MIT license.`,
          ],
        },
        {
          heading: "10. Liability",
          paragraphs: [
            `To the extent permitted by law, ${E.name} is not liable for indirect damages or loss of profits, data or business opportunities. Total liability is limited to the amounts paid by the customer in the 12 months before the event or, if the service is free, to 100 euros. This does not limit liability that cannot be limited by law, such as for wilful misconduct or gross negligence.`,
          ],
        },
        {
          heading: "11. Suspension and termination",
          paragraphs: [
            "You can stop using the service at any time by disconnecting Instagram and requesting deletion of your account. We may suspend or close an account that breaches these Terms or Meta's rules, or that puts the service at risk, with notice where possible.",
          ],
        },
        {
          heading: "12. Changes",
          paragraphs: [
            "We may update these Terms. Material changes will be announced at least 15 days in advance by email or in the app. Continuing to use the service after that date means you accept them.",
          ],
        },
        {
          heading: "13. Governing law",
          paragraphs: [
            `These Terms are governed by the laws of the State of Wyoming (USA). Mandatory protections that the law of the customer's country of residence grants to the customer, including the GDPR, continue to apply. For any question, write ${TO_EN}.`,
          ],
        },
      ],
    },
  },

  deletion: {
    it: {
      title: "Cancellazione dei dati",
      description: `Come scollegare Instagram da ${B} e chiedere la cancellazione dei tuoi dati.`,
      sections: [
        {
          heading: "1. Scollega Instagram",
          paragraphs: [
            `Accedi a ${B}, apri Impostazioni e scegli Scollega. Il collegamento e il token di accesso di Instagram vengono eliminati subito e le campagne di quell'account smettono di inviare messaggi.`,
          ],
        },
        {
          heading: "2. Rimuovi l'app da Instagram",
          paragraphs: [
            `Puoi anche revocare l'accesso direttamente da Instagram: Impostazioni e attività → App e siti web → Attive → seleziona ${B} → Rimuovi.`,
          ],
        },
        {
          heading: "3. Chiedi la cancellazione completa",
          paragraphs: [
            `Per cancellare account, workspace, campagne, log, statistiche e tutti gli altri dati, scrivi ${TO_IT} indicando l'indirizzo email con cui accedi e il nome utente Instagram collegato. Completiamo la cancellazione entro 30 giorni e te lo confermiamo via email.`,
          ],
        },
        {
          heading: "4. Se hai commentato o scritto a un nostro cliente",
          paragraphs: [
            `Se hai interagito con un account Instagram che usa ${B} e vuoi che i tuoi dati vengano cancellati, scrivi ${TO_IT} indicando il tuo nome utente Instagram e l'account con cui hai interagito. Gestiremo la richiesta insieme al cliente, che è titolare di quei dati.`,
          ],
        },
        {
          heading: "5. Verifica",
          paragraphs: [
            "Per proteggerti possiamo chiederti di dimostrare di avere il controllo dell'email o dell'account Instagram. Conserviamo solo i dati che la legge ci obbliga a tenere, per il tempo strettamente necessario.",
          ],
        },
      ],
    },
    en: {
      title: "Data Deletion",
      description: `How to disconnect Instagram from ${B} and request deletion of your data.`,
      sections: [
        {
          heading: "1. Disconnect Instagram",
          paragraphs: [
            `Sign in to ${B}, open Settings and choose Disconnect. The Instagram connection and access token are deleted immediately, and that account's campaigns stop sending messages.`,
          ],
        },
        {
          heading: "2. Remove the app from Instagram",
          paragraphs: [
            `You can also revoke access directly in Instagram: Settings and activity → Apps and websites → Active → select ${B} → Remove.`,
          ],
        },
        {
          heading: "3. Request full deletion",
          paragraphs: [
            `To delete your account, workspace, campaigns, logs, statistics and all other data, write ${TO_EN}, including the email address you sign in with and the connected Instagram username. We complete deletion within 30 days and confirm it by email.`,
          ],
        },
        {
          heading: "4. If you commented on or messaged one of our customers",
          paragraphs: [
            `If you interacted with an Instagram account that uses ${B} and want your data deleted, write ${TO_EN} with your Instagram username and the account you interacted with. We will handle the request together with the customer, who controls that data.`,
          ],
        },
        {
          heading: "5. Verification",
          paragraphs: [
            "To protect you, we may ask you to prove that you control the email address or the Instagram account. We keep only the data the law requires us to retain, for no longer than necessary.",
          ],
        },
      ],
    },
  },
};
