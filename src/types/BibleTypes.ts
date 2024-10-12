export interface Abbrev {
  pt: ptAbbrev
  en?: enAbbrev
}

export type ptAbbrev = 'Gn' | 'Ex' | 'Lv' | 'Nm' | 'Dt' | 'Js' | 'Jz' | 'Rt' | '1Sm' | '2Sm' | '1Rs' | '2Rs' | '1Cr' | '2Cr' | 'Ed' | 'Ne' | 'Et' | 'Jó' | 'Sl' | 'Pv' | 'Ec' | 'Ct' | 'Is' | 'Jr' | 'Lm' | 'Ez' | 'Dn' | 'Os' | 'Jl' | 'Am' | 'Ob' | 'Jn' | 'Mq' | 'Na' | 'Hc' | 'Sf' | 'Ag' | 'Zc' | 'Ml' | 'Mt' | 'Mc' | 'Lc' | 'Jo' | 'At' | 'Rm' | '1Co' | '2Co' | 'Gl' | 'Ef' | 'Fp' | 'Cl' | '1Ts' | '2Ts' | '1Tm' | '2Tm' | 'Tt' | 'Fm' | 'Hb' | 'Tg' | '1Pe' | '2Pe' | '1Jo' | '2Jo' | '3Jo' | 'Jd' | 'Ap'
export type enAbbrev = 'Gn' | 'Ex' | 'Lv' | 'Nm' | 'Dt' | 'Js' | 'Jg' | 'Rt' | '1Sm' | '2Sm' | '1Kg' | '2Kg' | '1Ch' | '2Ch' | 'Ezr' | 'Ne' | 'Est' | 'Job' | 'Ps' | 'Pr' | 'Ec' | 'So' | 'Is' | 'Je' | 'La' | 'Eze' | 'Da' | 'Ho' | 'Joe' | 'Am' | 'Ob' | 'Jon' | 'Mic' | 'Na' | 'Hab' | 'Zep' | 'Hag' | 'Zec' | 'Mal' | 'Mt' | 'Mk' | 'Lk' | 'Jn' | 'Ac' | 'Ro' | '1Co' | '2Co' | 'Ga' | 'Eph' | 'Php' | 'Col' | '1Th' | '2Th' | ''

export type Testament = "velho" | "novo"
export type BooksNames = 'Genesis' | 'Exodo' | 'Levítico'| 'Númeeros' | 'Deuteronômio' | 'Josué' | 'Juízes' | 'Rute' | '1 Samuel' | '2 Samuel' | '1 Reis' | '2 Reis' | '1 Crônicas' | '2 Crônicas' | 'Esdras' | 'Neemias' | 'Ester' | 'Jó' | 'Salmos' | 'Provérbios' | 'Eclesiastes' | 'Cantares' | 'Isaías' | 'Jeremias' | 'Lamentações' | 'Ezequiel' | 'Daniel' | 'Oséias' | 'Joel' | 'Amós' | 'Obadias' | 'Jonas' | 'Miquéias' | 'Naum' | 'Habacuque' | 'Sofonias' | 'Ageu' | 'Zacarias' | 'Malaquias' | 'Mateus' | 'Marcos' | 'Lucas' | 'João' | 'Atos' | 'Romanos' | '1 Coríntios' | '2 Coríntios' | 'Gálatas' | 'Efésios' | 'Filipenses' | 'Colossenses' | '1 Tessalonicenses' | '2 Tessalonicenses' | '1 Timóteo' | '2 Timóteo' | 'Tito' | 'Filemom' | 'Hebreus' | 'Tiago' | '1 Pedro' | '2 Pedro' | '1 João' | '2 João' | '3 João' | 'Judas' | 'Apocalipse'

export interface Book {
  abbrev: Abbrev
  author: string
  chapters: number
  group: string
  name: string
  testament: string
}