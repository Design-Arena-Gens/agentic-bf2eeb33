import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { niche } = await request.json()

    const videoIdea = generateViralIdea(niche || 'generale')

    return NextResponse.json({ videoIdea })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json(
      { error: 'Errore nella generazione del contenuto' },
      { status: 500 }
    )
  }
}

function generateViralIdea(niche: string) {
  const ideas = {
    generale: {
      idea: "Prima/Dopo trasformazione con twist - mostra una trasformazione rapida e sorprendente in 10 secondi con un colpo di scena finale che ribalta le aspettative dello spettatore",
      script: {
        visualContent: "Inizia con inquadratura statica di te in versione 'prima' (disordinato/stanco). A metà video, transizione rapida con snap/clap. Appari trasformato in versione 'dopo' ma con un dettaglio comico/inaspettato",
        movements: "Movimento rapido a 3 sec: snap delle dita o battito di mani. Taglio netto con jump cut. Camera fissa per sottolineare il contrasto",
        onScreenText: "POV: quando hai 5 minuti per prepararti ⏰\n[Dopo snap] Ma ti ricordi che...\n[Fine] Era già domani 💀",
        audioType: "Audio trending con drop/beat sync al momento della transizione. Consigliato: sound virale attuale con 'oh no' o 'wait for it'"
      },
      post: {
        caption: "Non ci crederai fino alla fine 😭 Vi è mai capitato? (il mio cervello alle 3AM non funziona)",
        callToAction: "Tagga quella persona che si ritrova sempre in queste situazioni 👇",
        hashtags: ["#fyp", "#foryou", "#viral", "#relatable", "#comedy", "#pov", "#trending", "#funny", "#transformation", "#plottwist"]
      },
      publication: {
        format: "Verticale 9:16, 1080x1920px, massimo 10 secondi, MP4 o MOV, minimo 30fps",
        title: "Non guardare fino alla fine (99% fallisce) 😱",
        timing: "Orari peak: 11:00-13:00 o 19:00-21:00 nei giorni feriali. Venerdì sera per massimo engagement weekend"
      }
    },
    fitness: {
      idea: "Sfida fitness in 10 secondi con risultato impossibile - mostra un esercizio che sembra facile ma ha un twist che lo rende esilarante o sorprendentemente difficile",
      script: {
        visualContent: "Inizia con te che presenti con sicurezza un 'semplice' esercizio. Provi ad eseguirlo ma succede qualcosa di inaspettato (fallimento comico, difficoltà estrema, o successo impossibile)",
        movements: "Primi 3 sec: presentazione statica guardando in camera. Secondi 4-7: esecuzione dell'esercizio con movimento dinamico. Ultimi 3 sec: reazione/risultato con close-up del viso",
        onScreenText: "10 secondi di plank? Facilissimo 💪\n[Durante] Il mio core:\n[Fine] Erano 10 anni? 🥵",
        audioType: "Sound motivazionale che si interrompe o distorce al momento del fallimento. Alternativa: audio 'confident walk' che diventa comico"
      },
      post: {
        caption: "Chi ha detto che il fitness è facile? 😂 Dropped al secondo 6 💀 Il tuo record?",
        callToAction: "Duetta questo video e mostrami quanto resisti! 🔥",
        hashtags: ["#fitness", "#workout", "#gym", "#fitnessmotivation", "#fitnesstiktok", "#challenge", "#plank", "#fail", "#fitnessfail", "#fyp"]
      },
      publication: {
        format: "Verticale 9:16, 1080x1920px, 10 secondi, MP4, 60fps per slow-motion smooth",
        title: "PLANK CHALLENGE impossibile (non provarci) 🚫",
        timing: "Mattina 7:00-9:00 (quando la gente va in palestra) o sera 18:00-20:00 (post-workout scrolling)"
      }
    },
    cucina: {
      idea: "Recipe hack con twist - mostri una ricetta semplicissima che sembra gourmet ma ha un segreto/ingrediente inaspettato che la rende virale",
      script: {
        visualContent: "Top-down shot della preparazione veloce. Mani che lavorano ingredienti con movimenti precisi. Reveal finale del piatto con un dettaglio shock (ingrediente segreto, risultato inaspettato)",
        movements: "Camera fissa dall'alto. Mani che entrano ed escono dall'inquadratura rapidamente. Ogni passaggio dura 2 secondi max. Zoom rapido sul risultato finale",
        onScreenText: "Pasta gourmet in 10 secondi ✨\n[Ingredienti rapidi]\n[Reveal] L'ingrediente segreto? 😈\n[Fine] NUTELLA 🍫",
        audioType: "Satisfying ASMR cooking sounds o trend audio 'fancy/boujee' che contrasta con la semplicità"
      },
      post: {
        caption: "Chef italiani NON guardate 🙈 Ma è BUONISSIMO ve lo giuro! L'avete mai provato? Sì o no nei commenti 👇",
        callToAction: "Salva per quando hai 0 idee per cena! 💡",
        hashtags: ["#cooking", "#recipe", "#foodhack", "#foodtok", "#cookinghacks", "#easyrecipe", "#pasta", "#italianfood", "#foodie", "#viral"]
      },
      publication: {
        format: "Verticale 9:16, 1080x1920px, 10 secondi, buona illuminazione naturale, focus nitido",
        title: "RICETTA SEGRETA che gli chef NON vogliono farvi sapere 🤫",
        timing: "11:00-12:30 (pre-pranzo) o 17:00-19:00 (pre-cena) quando la gente cerca ispirazione"
      }
    },
    beauty: {
      idea: "Makeup transformation ma il 'prima' è già perfetto - sovverti le aspettative mostrando che la trasformazione aggiunge un elemento inaspettato/comico",
      script: {
        visualContent: "Close-up del viso. Parti con makeup già fatto bene. Aggiungi un elemento (trucco esagerato, effetto speciale, o remove per tornare naturale) che sovverte le aspettative",
        movements: "Camera fissata su treppiede, viso centrato. Transizione rapida con hand-swipe o blink al secondo 5. Second half mostra il risultato con espressione confidente",
        onScreenText: "Full glam transformation ✨\n[Durante] Adding the final touch...\n[Finale] POV: meno è più 💁‍♀️\n[O alternativamente] Too much? NAH 💅",
        audioType: "Transformation audio trending, preferibilmente con beat drop al momento del reveal. Alternative: audio 'confidence/slay'"
      },
      post: {
        caption: "Plot twist del secolo 💀 Team natural or team glam? La risposta nei commenti! ✨",
        callToAction: "STITCH questo video con la tua versione! 👀",
        hashtags: ["#makeup", "#makeuptransformation", "#beauty", "#beautytiktok", "#makeuptutorial", "#glam", "#plottwist", "#fyp", "#beautyhacks", "#grwm"]
      },
      publication: {
        format: "Verticale 9:16, 1080x1920px, luce anello per illuminazione uniforme, massima qualità video",
        title: "Non aspettatevi questo ending 😱✨",
        timing: "Sera 20:00-22:00 (prime time beauty content) o domenica mattina 9:00-11:00 (lazy Sunday scrolling)"
      }
    },
    tech: {
      idea: "Tech hack/feature nascosta che cambia tutto - rivela un trucco o funzione poco conosciuta che fa risparmiare tempo/soldi",
      script: {
        visualContent: "Screen recording dello smartphone/computer che mostra step-by-step il processo. Inquadratura pulita, nessuna distrazione. Cursore/dita che guidano l'attenzione",
        movements: "Movimenti precisi e deliberati sullo schermo. Ogni tap/click deve essere visibile. Rallentamento leggero sui passaggi chiave (3 sec totali per spiegazione, 7 sec per demo)",
        onScreenText: "Il tuo iPhone può fare QUESTO?? 🤯\n[Step 1] Vai in impostazioni...\n[Step 2] Cerca questa opzione\n[Reveal] MIND BLOWN 💥",
        audioType: "Audio 'mind blown' o 'game changer' trending. Alternative: tech sound effects sincronizzati con le azioni"
      },
      post: {
        caption: "Anni con iPhone e lo scopro OGGI 😭 Se lo sapevi sei un genio. Commenta 🧠 se lo conoscevi già!",
        callToAction: "CONDIVIDI per far diventare virali questi hack! Seguimi per altri trucchi tech 📲",
        hashtags: ["#techtok", "#techhacks", "#iphone", "#iphonehacks", "#apple", "#technology", "#lifehack", "#didyouknow", "#fyp", "#tutorial"]
      },
      publication: {
        format: "Verticale 9:16, screen recording nitido 1080x1920px, 60fps, crop per rimuovere notifiche",
        title: "Funzione NASCOSTA iPhone che DEVI conoscere! 🔥",
        timing: "Pomeriggio 15:00-17:00 (break lavorativo) o tardo sera 22:00-00:00 (tech enthusiasts time)"
      }
    },
    comedy: {
      idea: "Situazione relatable con timing comico perfetto - scenario quotidiano con cui tutti si identificano, con punchline negli ultimi 2 secondi",
      script: {
        visualContent: "POV shot o inquadratura frontale. Costruzione della situazione con espressioni facciali esagerate. Setup chiaro, punchline visiva al finale",
        movements: "Primi 5 sec: costruzione lenta della tensione con mimica. Secondo 6-8: accelerazione. Ultimi 2 sec: punchline con zoom rapido o freeze frame",
        onScreenText: "POV: finalmente vai a dormire presto 😴\n[3 sec] Il tuo cervello alle 23:00\n[5 sec] 'Ricordi quel momento imbarazzante del 2015?'\n[8 sec] 😐... 😳... 💀",
        audioType: "Silenzio drammatico o audio 'anxiety/overthinking' trending. Sound effect finale per enfatizzare il punchline"
      },
      post: {
        caption: "Perché il mio cervello mi odia così tanto? 😭 A tutti no? DIMMI DI SÌ 👇",
        callToAction: "GREEN SCREEN questo e aggiungi le tue ansie notturne 🧠",
        hashtags: ["#comedy", "#relatable", "#funny", "#pov", "#overthinking", "#anxiety", "#meme", "#viral", "#fyp", "#humor"]
      },
      publication: {
        format: "Verticale 9:16, 1080x1920px, qualità standard OK purché audio chiaro, editing minimale",
        title: "Se ti capita SEI NORMALE (io non dormo più) 😂",
        timing: "Tarda sera 22:00-01:00 quando la gente fa scrolling pre-sonno e si identifica"
      }
    }
  }

  const nicheKey = niche.toLowerCase()
  const matchedIdea = ideas[nicheKey as keyof typeof ideas] || ideas.generale

  // Aggiungi variazione per personalizzazione
  if (!ideas[nicheKey as keyof typeof ideas] && niche !== 'generale') {
    matchedIdea.idea = `[Nicchia: ${niche}] ${matchedIdea.idea} - adattato al tuo settore specifico`
    matchedIdea.post.hashtags = [
      `#${niche.toLowerCase().replace(/\s+/g, '')}`,
      ...matchedIdea.post.hashtags.slice(0, 9)
    ]
  }

  return matchedIdea
}
