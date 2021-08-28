const help = (prefix, pushname, getLevelingLevel, getLevelingXp, sender, time, patt, uangku, horario, ucapanWaktu, battre) => { 
return `
━━━━━━━❮◆❯━━━━━━━
◆◇  
◆◇ Olá ${pushname}
◆◇ ${ucapanWaktu} 
◆◇ seja bem vindo(a) 
◆◇ ao menu de comandos
◆◇  
━━━━━━━❮◆❯━━━━━━━
◆◇  
◆◇ Prefixo:『 ${prefix} 』
◆◇ Bateria:『 ${battre} 』
◆◇ Data/Hora : ${time}
◆◇ Level : ${getLevelingLevel(sender)}
◆◇ Patente : ${patt}
◆◇  
━━━━━━━❮◆❯━━━━━━━
◆◇   
◆◇ 『•MENU DE CMD•』
◆◇ 
◆◇ ${prefix}menuadms  
◆◇ ${prefix}menudono  
◆◇ ${prefix}menumusic 
◆◇ ${prefix}menuprem  
◆◇ ${prefix}menulogos
◆◇                         
━━━━━━━❮◆❯━━━━━━━
◆◇ 
◆◇ 『•CMDS BÁSICOS•』
◆◇ 
◆◇ ${prefix}calunia numero|bla|bla
◆◇ ${prefix}placaloli (txt)
◆◇ ${prefix}semoji exemplo: 😉
◆◇ ${prefix}simi (fale algo) 
◆◇ ${prefix}gerarnick (nome)
◆◇ ${prefix}tabela (tabela-letras)
◆◇ ${prefix}ranklevel
◆◇ ${prefix}gitdobot
◆◇ ${prefix}sticker 
◆◇ ${prefix}fsticker 
◆◇ ${prefix}stcirculo
◆◇ ${prefix}toimg 
◆◇ ${prefix}togif 
◆◇ ${prefix}imgpralink
◆◇ ${prefix}videopralink
◆◇ ${prefix}bateria
◆◇ ${prefix}listonline
◆◇ ${prefix}listagp
◆◇ ${prefix}print (url)
◆◇ ${prefix}bot
◆◇ ${prefix}gtts pt (txt)
◆◇ ${prefix}tomp3
◆◇ ${prefix}ping 
◆◇ ${prefix}play  (oq qr)
◆◇ ${prefix}gimage 
◆◇ ${prefix}rename 
◆◇ ${prefix}meme 
◆◇ ${prefix}frases
◆◇  
━━━━━━━❮◆❯━━━━━━━
◆◇  
◆◇ 『•EFT IMG (MRCR)•』
◆◇   
◆◇ ${prefix}triggered 
◆◇ ${prefix}paisagem 
◆◇ ${prefix}qbcabeça 
◆◇ ${prefix}legenda 
◆◇ ${prefix}vidroqb 
◆◇ ${prefix}deletef 
◆◇ ${prefix}petmak 
◆◇ ${prefix}zombie 
◆◇ ${prefix}arteft 
◆◇ ${prefix}effect 
◆◇ ${prefix}wanted 
◆◇ ${prefix}hitler 
◆◇ ${prefix}firef 
◆◇ ${prefix}preso 
◆◇ ${prefix}trash 
◆◇ ${prefix}cubof 
◆◇ ${prefix}arma 
◆◇ ${prefix}gtav 
◆◇ ${prefix}rip 
◆◇  
━━━━━━━❮◆❯━━━━━━━
◆◇  
◆◇  『•PLAQUINHAS•』
◆◇
◆◇ ${prefix}plaq (nome)
◆◇ ${prefix}plaq2 (nome)
◆◇ ${prefix}plaq3 (nome)
◆◇ ${prefix}plaq4 (nome)
◆◇ ${prefix}plaq5 (nome)
◆◇ ${prefix}plaq6 (nome)
◆◇ ${prefix}plaq7 (nome)
◆◇
━━━━━━━❮◆❯━━━━━━━
◆◇  
◆◇ 『•JOGOS•』
◆◇
◆◇ ${prefix}ppt (papel-tesoura) 
◆◇ ${prefix}ttt (jogo da velha)
◆◇ ${prefix}jogodavelha @marca
◆◇ ${prefix}anagrama  1 / 0 
◆◇
━━━━━━━❮◆❯━━━━━━━
◆◇
◆◇ 『•EFTS GIF (TXT)•』
◆◇ 
◆◇ ${prefix}colorful (txt)
◆◇ ${prefix}glowing (txt)
◆◇ ${prefix}cold (txt)
◆◇ ${prefix}bold (txt)
◆◇ ${prefix}army (txt)
◆◇ 
━━━━━━━❮◆❯━━━━━━━
◆◇
◆◇   『•ALEATÓRIOS•』
◆◇  
◆◇ ${prefix}sticknime
◆◇ ${prefix}dogzin 
◆◇ ${prefix}qrcode
◆◇ ${prefix}wame 
◆◇ 
━━━━━━━❮◆❯━━━━━━━
◆◇
◆◇ 『•BRINCADEIRAS•』
◆◇
◆◇ ${prefix}gostoso
◆◇ ${prefix}gostosa
◆◇ ${prefix}gay
◆◇ ${prefix}casal
◆◇ ${prefix}corno
◆◇ ${prefix}gado
◆◇ ${prefix}nazista
◆◇ ${prefix}amgolpe
◆◇ ${prefix}tapa 
◆◇ ${prefix}chute
◆◇ ${prefix}rankgay
◆◇ ${prefix}rankpau
◆◇ ${prefix}rankotakus
◆◇ ${prefix}rankgays
◆◇ ${prefix}rankgostosas
◆◇ ${prefix}rankcornos
◆◇ ${prefix}ranknazista
◆◇ 
━━━━━━━❮◆❯━━━━━━━
◆◇
◆◇ 『•ALTR DE AUDIO•』
◆◇
◆◇ ${prefix}grave 
◆◇ ${prefix}grave2 
◆◇ ${prefix}fast 
◆◇ ${prefix}adolesc 
◆◇ ${prefix}esquilo 
◆◇ ${prefix}estourar 
◆◇ ${prefix}bass 
◆◇ ${prefix}bass2 
◆◇
━━━━━━━❮◆❯━━━━━━━
◆◇
◆◇ 『•FOTO DE ANIMAIS•』
◆◇ 
◆◇ ${prefix}pandared
◆◇ ${prefix}cachorro
◆◇ ${prefix}passaro
◆◇ ${prefix}lagarto
◆◇ ${prefix}raposa
◆◇ ${prefix}koala
◆◇ ${prefix}ganso
◆◇ 
━━━━━━━❮◆❯━━━━━━━
◆◇
◆◇ 『•ANIMES FOTOS/GIF•』
◆◇
◆◇ ${prefix}wallpaperanime
◆◇ ${prefix}gokublack
◆◇ ${prefix}vegeta
◆◇ ${prefix}nekonime
◆◇ ${prefix}beijo
◆◇ ${prefix}shinobu
◆◇ ${prefix}waifu
◆◇ ${prefix}megumin
◆◇ ${prefix}uwu
◆◇ ${prefix}beijo
◆◇ ${prefix}loli
◆◇ ${prefix}naruto 
◆◇ ${prefix}kakashi
◆◇ ${prefix}sasuke
◆◇ ${prefix}shikamaru
◆◇ ${prefix}minato
◆◇ ${prefix}luffy
◆◇ ${prefix}zoro
◆◇ ${prefix}nami
◆◇ ${prefix}nanami
◆◇ ${prefix}sukuna
◆◇ ${prefix}sakura 
◆◇ ${prefix}enel
◆◇ 
━━━━━━━❮◆❯━━━━━━━
◆◇
◆◇ 『•INFO/PESQUISA•』
◆◇
◆◇ ${prefix}playstore (nome)
◆◇ ${prefix}covidglobal
◆◇ ${prefix}covid19
◆◇ ${prefix}gimage (nome)
◆◇ ${prefix}wikipedia  (nome)
◆◇ ${prefix}yandex (nm-da-img)
◆◇ ${prefix}pinterest (nm-da-img)
◆◇
━━━━━━━❮◆❯━━━━━━━
◆◇
◆◇ 『•ATTPS/TTPS/TTMS•』
◆◇
◆◇ ${prefix}attp  (txt)
◆◇ ${prefix}ttp (txt)
◆◇ ${prefix}attp2 (txt)
◆◇ ${prefix}attp3 (txt)
◆◇ ${prefix}attp4 (txt)
◆◇ ${prefix}attp5 (txt)
◆◇ ${prefix}attp6 (txt)
◆◇ ${prefix}ttm   (txt)
◆◇ ${prefix}ttm2  (txt)
◆◇ ${prefix}ttm3  (txt)
◆◇ ${prefix}ttm4  (txt)
◆◇
━━━━━━━❮◆❯━━━━━━━
◆◇
◆◇ 『•PESQUISAS/BAIXAR•』
◆◇
◆◇ ${prefix}facemp4 (link)
◆◇ ${prefix}ytsearch (nome da msc)
◆◇ ${prefix}ytmp4 (url do search) 
◆◇ ${prefix}ytmp3 (url do search) 
◆◇ ${prefix}jooxplay (nome da msc)
◆◇ ${prefix}play (Música q c qr)
◆◇ ${prefix}playmp4 (nome)
◆◇ ${prefix}play2 (Música q c qr)
◆◇ ${prefix}play3 (Música q c qr)
◆◇
━━━━━━━❮◆❯━━━━━━━
◆◇
◆◇『•INFO DONO•』
◆◇
◆◇ NOME : ${NamaOwner}
◆◇ INSTA : ${instagram}
◆◇ NÚMERO : ${ownerNumber} 
◆◇ YOUTUBE :〘 ${ytb} 〙
◆◇
━━━❮ ${NamaBot} ❯━━━`
}

exports.help = help





