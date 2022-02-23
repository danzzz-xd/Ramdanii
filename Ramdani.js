//UDAH DI KASIH NO ENC MASIH AJA GAK DI KASIH SUBSCRIBE:)
//KALIAN TUH CUMA MAKE DOANG KAGA CODING:V
//NIH LUH DENGER, BIKIN BOT ITU SUSAH BROH MASAH CREATOR NYA GAK DI KASIH CREDITS?
//DIMANA HATI KALIAN?
const {
  WAConnection: _WAConnection,
  MessageType,
  Presence,
  MessageOptions,
  Mimetype,
  WALocationMessage,
  WAMessageProto,
  ReconnectMode,
  ProxyAgent,
  ChatModification,
  GroupSettingChange,
  WA_MESSAGE_STUB_TYPES,
  WA_DEAFULT_EPHEMERAL,
  waChatKey,
  mentionedJid,
  processTime,
  prepareMessageFromContent,
  relayWAMessage,
  Browsers
} = require("@adiwajshing/baileys")
const moment = require("moment-timezone")
const speed = require('performance-now')
const { EmojiAPI } = require("emoji-api")
const phoneNum = require('awesome-phonenumber')
const emoji = new EmojiAPI()
const { spawn, exec, execSync } = require("child_process")
const ffmpeg = require('fluent-ffmpeg')
const twitterGetUrl = require("twitter-url-direct")
const googleImage = require('g-i-s')
const brainly = require('brainly-scraper')
const fetch = require('node-fetch');
const ggs = require('google-it')
const { Tiktokdl } = require('./lib/tiktok.js')
const request = require('request');
const hour_now = moment().format('HH:mm:ss')
const { Toxic } = require('./lib/Toxic.js')
const emojidl = new EmojiAPI()
const Math_js = require('mathjs')
const crypto = require('crypto')
const yts = require('yt-search')
const premium = require("./lib/premium");
const ms = require('parse-ms')
const toMs = require('ms')
const axios = require("axios")
const fs = require("fs-extra")
const util = require('util')
const got = require("got");
const qrcodes = require('qrcode');
const imgbb = require('imgbb-uploader');
const os = require('os');
const fbdl = require('fb-video-downloader');
const bisnis = fs.readFileSync("./lib/motivbisnis.json")

const Exif = require('./lib/exif');
const exif = new Exif();
var kuis = false
hit_today = []
ky_ttt = []
tttawal = ["0️⃣", "1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"]
let control = JSON.parse(fs.readFileSync('./control.json'))
banChats = false;
owner = control.NomorOwner
global.healawal = "10",
  global.potionawal = "10",
  za_api = "ApRamdaniBot"
LolApi = "${control.lolkey}" //Ganti sama Api lu
zenzapi = "LordRamdani"
xteamkey = "7415bc4287ad5ca8"
target = `${control.NomorOwner}@s.whatsapp.net` //Ganti jadi nomor lu
watermark = `${control.NamaBot}`
thumbnail = fs.readFileSync(`./foto/Ramdani.jpg`)

const { getBuffer, getGroupAdmins, getRandom, runtime, sleep } = require('./lib/myfunc')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetch')
const { color, bgcolor } = require('./lib/color')
const { mess } = require('./message/mess')
const hx = require('hxz-api')
const { SearchKartun, Movie, Drama, Action, Adventure } = require("./lib/kartun.js")
const { cmdadd } = require('./lib/totalcmd.js')
const { uptotele, uploadFile, RESTfulAPI, uploadImages } = require('./lib/uploadimage')
const { isGame, gameAdd, givegame, cekGLimit } = require("./lib/limit");
const { onGoing, dadu, } = require("./lib/otakudesu.js")
const { mediafireDl } = require('./lib/mediafire.js')
const { webp2gifFile, igDownloader, TiktokDownloader } = require("./lib/gif.js")
const { y2mateA, y2mateV } = require('./lib/y2mate')
const { ythd } = require('./lib/ytdl')
let {
  isLimit,
  limitAdd,
  getLimit,
  giveLimit,
  addBalance,
  kurangBalance,
  getBalance
} = require('./lib/limit');
const Tag = `${control.NomorOwner}`

//game
let tebakgambar =
  [];
let family100 =
  [];
let mtk =
  [];
let tebaklirik =
  [];
let siapaaku =
  [];
let tebakkata =
  [];
let tebakkimia =
  [];
let tebakbendera =
  [];
let tebakanime =
  [];

//game func


//database 
let antidel = JSON.parse(fs.readFileSync("./database/antidelete.json"));
let antivo = JSON.parse(fs.readFileSync('./database/antiviewonce.json'));
const _sewa = require("./lib/sewa");
const _registered = JSON.parse(fs.readFileSync('./database/registered.json'))
const level = require("./lib/level");
const atm = require("./lib/atm");
const fake = fs.readFileSync('./foto/menu.jpg', 'base64')
const afk = require("./lib/afk");
const audionye = JSON.parse(fs.readFileSync('./database/audio.json'))
const quote = fs.readFileSync("./database/result/quote.json");
const darkjoke = fs.readFileSync("./database/result/darkjokes.json");
const walpapermuslim = fs.readFileSync("./database/result/muslim.json");;
const antivirtex = JSON.parse(fs.readFileSync("./database/antivirtex.json"));
const stick = fs.readFileSync("./database/result/randomstic.json");
let _afk = JSON.parse(fs.readFileSync('./database/afk.json'));
let register = JSON.parse(fs.readFileSync('./database/registered.json'))
let _uang = JSON.parse(fs.readFileSync('./database/uang.json'))
const balance = JSON.parse(fs.readFileSync('./database/balance.json'));
let _scommand = JSON.parse(fs.readFileSync('./database/bot/scommand.json'))
const samih = JSON.parse(fs.readFileSync('./lib/simi.json'))
let welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const bad = JSON.parse(fs.readFileSync('./database/bad.json'))
let glimit = JSON.parse(fs.readFileSync('./database/glimit.json'));
const autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'))
let antilink = JSON.parse(fs.readFileSync('./database/antilink.json'));
let _premium = JSON.parse(fs.readFileSync('./database/premium.json'));
const _heal = JSON.parse(fs.readFileSync('./database/adventure/heal.json'))
const _potion = JSON.parse(fs.readFileSync('./database/adventure/potion.json'))
const setGelud = require('./lib/gameGelud.js')

let _leveling = JSON.parse(fs.readFileSync('./database/leveling.json'))
let _level = JSON.parse(fs.readFileSync('./database/level.json'))
const ban = JSON.parse(fs.readFileSync('./database/banned.json'))
const banc = JSON.parse(fs.readFileSync('./database/banchat.json'))

///listmenu//
const { apkmenu, downloadmenu, funmenu, stalkmenu, rules, kartunmenu, textrandom, randomimage, mememaker, hewanmenu, randomvideo, searchmenu, koreamenu, soundmenu, rpgmenu, editormenu, anonymous, randomtag, tembakmenu, animanga, nulismenu, gamemenu, othermenu, infomenu, filmmenu, ephotooxy, ephoto360, grupmenu, sertimenu, islammenu, kerangmenu, animemenu, makermenu, ownermenu, coganmenu, cecanmenu, convertmenu, } = require('./message/help.js')
const { format } = require("path")
// Sticker Cmd
const addCmd = (id, command) => {
  const obj = { id: id, chats: command }
  _scommand.push(obj)
  fs.writeFileSync('./database/bot/scommand.json', JSON.stringify(_scommand))
}

const getCommandPosition = (id) => {
  let position = null
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      position = i
    }
  })
  if (position !== null) {
    return position
  }
}
const isFiltered = (from) => !!usedCommandRecently.has(from)

const addFilter = (from) => {
  usedCommandRecently.add(from)
  setTimeout(() => usedCommandRecently.delete(from), 5000) //5 detik bang
}

const getCmd = (id) => {
  let position = null
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      position = i
    }
  })
  if (position !== null) {
    return _scommand[position].chats
  }
}


const checkSCommand = (id) => {
  let status = false
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      status = true
    }
  })
  return status
}

module.exports = Ramdani = async (Ramdani, Ramdanif) => {
  try {
    if (!Ramdanif.hasNewMessage) return
    Ramdanif = Ramdanif.messages.all()[0]
    if (!Ramdanif.message) return
    if (Ramdanif.key && Ramdanif.key.remoteJid == 'status@broadcast') return
    if (Ramdanif.key.id.startsWith('3EB0') && Ramdanif.key.id.length === 12) return
    global.ky_ttt
    global.blocked
    Ramdanif.message = (Object.keys(Ramdanif.message)[0] === 'ephemeralMessage') ? Ramdanif.message.ephemeralMessage.message : Ramdanif.message
    const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
    const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
    const content = JSON.stringify(Ramdanif.message)
    const from = Ramdanif.key.remoteJid
    const Ramdani1 = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
    const Ramdani2 = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
    const Ramdani3 = Ramdani1[Math.floor(Math.random() * (Ramdani1.length))]
    const Ramdani4 = Ramdani2[Math.floor(Math.random() * (Ramdani2.length))]
    const type = Object.keys(Ramdanif.message)[0]
    const cmd = (type === 'conversation' && Ramdanif.message.conversation) ? Ramdanif.message.conversation : (type == 'imageMessage') && Ramdanif.message.imageMessage.caption ? Ramdanif.message.imageMessage.caption : (type == 'videoMessage') && Ramdanif.message.videoMessage.caption ? Ramdanif.message.videoMessage.caption : (type == 'extendedTextMessage') && Ramdanif.message.extendedTextMessage.text ? Ramdanif.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
    const prefix = /^[°!•π÷×¶∆£¢€¥®™=|~#%^&.?/\\©^z+,;]/.test(cmd) ? cmd.match(/^[°!•π÷×¶∆£¢€¥®™=|~#%^&.?/\\©^z+,;]/gi) : '.'
    var pes = (type === 'conversation' && Ramdanif.message.conversation) ? Ramdanif.message.conversation : (type == 'imageMessage') && Ramdanif.message.imageMessage.caption ? Ramdanif.message.imageMessage.caption : (type == 'videoMessage') && Ramdanif.message.videoMessage.caption ? Ramdanif.message.videoMessage.caption : (type == 'extendedTextMessage') && Ramdanif.message.extendedTextMessage.text ? Ramdanif.message.extendedTextMessage.text : ''
    body = (type === 'conversation' && Ramdanif.message.conversation.startsWith(prefix)) ? Ramdanif.message.conversation : (type == 'imageMessage') && Ramdanif.message[type].caption.startsWith(prefix) ? Ramdanif.message[type].caption : (type == 'videoMessage') && Ramdanif.message[type].caption.startsWith(prefix) ? Ramdanif.message[type].caption : (type == 'extendedTextMessage') && Ramdanif.message[type].text.startsWith(prefix) ? Ramdanif.message[type].text : (type == 'listResponseMessage') && Ramdanif.message[type].singleSelectReply.selectedRowId ? Ramdanif.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && Ramdanif.message[type].selectedButtonId ? Ramdanif.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(Ramdanif.message[type].fileSha256.toString('base64')) !== null && getCmd(Ramdanif.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(Ramdanif.message[type].fileSha256.toString('base64')) : ""
    budy = (type === 'conversation') ? Ramdanif.message.conversation : (type === 'extendedTextMessage') ? Ramdanif.message.extendedTextMessage.text : ''
    const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
    budy = (type === 'conversation') ? Ramdanif.message.conversation : (type === 'extendedTextMessage') ? Ramdanif.message.extendedTextMessage.text : ''
    const args = body.trim().split(/ +/).slice(1)
    hit_today.push(command)
    const arg = body.substring(body.indexOf(' ') + 1)
    const messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
    const ar = args.map((v) => v.toLowerCase())
    const argz = body.trim().split(/ +/).slice(1)
    const isCmd = body.startsWith(prefix)
    if (isCmd) cmdadd()
    const totalhit = JSON.parse(fs.readFileSync('./database/totalcmd.json'))[0].totalcmd
    const c = args.join(' ')
    const q = args.join(' ')
    const Rfake = fs.readFileSync('./foto/Ramdani.jpg', 'base64')

    const botNumber = Ramdani.user.jid
    const ownerNumber = control.NomorOwner
    const ownerName = control.NamaOwner
    const botName = control.NamaBot
    const isGroup = from.endsWith('@g.us')
    let sender = isGroup ? Ramdanif.participant : Ramdanif.key.remoteJid
    let senderr = Ramdanif.key.fromMe ? Ramdani.user.jid : Ramdanif.key.remoteJid.endsWith('@g.us') ? Ramdanif.participant : Ramdanif.key.remoteJid
    const totalchat = await Ramdani.chats.all()
    const groupMetadata = isGroup ? await Ramdani.groupMetadata(from) : 'query'.toString
    const groupName = isGroup ? groupMetadata.subject : ''
    const groupId = isGroup ? groupMetadata.jid : ''
    const groupMembers = isGroup ? groupMetadata.participants : ''
    const groupDesc = isGroup ? groupMetadata.desc : ''
    const groupOwner = isGroup ? groupMetadata.owner : ''
    const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
    const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
    const isGroupAdmins = groupAdmins.includes(sender) || false
    const conts = Ramdanif.key.fromMe ? Ramdani.user.jid : Ramdani.contacts[sender] || { notify: jid.replace(/@.+/, '') }
    const pushname = Ramdanif.key.fromMe ? Ramdani.user.name : conts.notify || conts.vname || conts.name || '-'
    const mentionByTag = type == "extendedTextMessage" && Ramdanif.message.extendedTextMessage.contextInfo != null ? Ramdanif.message.extendedTextMessage.contextInfo.mentionedJid : []
    const mentionByreply = type == "extendedTextMessage" && Ramdanif.message.extendedTextMessage.contextInfo != null ? Ramdanif.message.extendedTextMessage.contextInfo.participant || "" : ""
    const mention = typeof (mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
    mention != undefined ? mention.push(mentionByreply) : []
    const mentionUser = mention != undefined ? mention.filter(n => n) : []
    idttt = []
    players1 = []
    players2 = []
    gilir = []
    for (let t of ky_ttt) {
      idttt.push(t.id)
      players1.push(t.player1)
      players2.push(t.player2)
      gilir.push(t.gilir)
    }
    const isTTT = isGroup ? idttt.includes(from) : false
    isPlayer1 = isGroup ? players1.includes(sender) : false
    isPlayer2 = isGroup ? players2.includes(sender) : false
    const isOwner = ownerNumber.includes(senderr)
    const isSimi = samih.includes(from)
    const isAfkOn = afk.checkAfkUser(sender, _afk)
    const isWelkom = isGroup ? welkom.includes(from) : false
    const isAntiLink = isGroup ? antilink.includes(from) : false
    const isPremium = premium.checkPremiumUser(sender, _premium)
    const isAntidel = isGroup ? antidel.includes(from) : false;
    const isAntiviewonce = isGroup ? antivo.includes(from) : false;
    const isAuto = isGroup ? autosticker.includes(from) : false
    const isLevelingOn = isGroup ? _leveling.includes(from) : false
    const isAntivirtex = isGroup ? antivirtex.includes(from) : false;
    const isBanned = ban.includes(sender)
    const isBanchat = banc.includes(from)
    let {

      gamewaktu,
      limitCount
    } = require('./database/settings')
    let game = require(
      './lib/game'

    );
    game.cekWaktuFam(Ramdani, family100)
    game.cekWaktuTG(Ramdani, tebakgambar)
    game.cekWaktuMtk(Ramdani, mtk)
    game.cekWaktuTL(Ramdani, tebaklirik)
    game.cekWaktuSA(Ramdani, siapaaku)
    game.cekWaktuTK(Ramdani, tebakkata)
    game.cekWaktuTU(Ramdani, tebakkimia)
    game.cekWaktuTB(Ramdani, tebakbendera)
    game.cekWaktuTA(Ramdani, tebakanime)



    timestampe = speed();
    latensie = speed() - timestampe
    const ftroli = { key: { fromMe: false, "participant": "0@s.whatsapp.net", "remoteJid": "6289523258649-1604595598@g.us" }, "message": { orderMessage: { itemCount: 99999999999, status: 200, thumbnail: fs.readFileSync(`./foto/Ramdani.jpg`), surface: 200, message: `Runtime:${runtime(process.uptime())}   `, orderTitle: `${control.NamaBot}`, sellerJid: '0@s.whatsapp.net' } }, contextInfo: { "forwardingScore": 999, "isForwarded": true }, senRamdanifhemeral: true }
    const fdoc = { key: { participant: '0@s.whatsapp.net' }, message: { documentMessage: { title: `${control.NamaBot}`, jpegThumbnail: fs.readFileSync(`./foto/Ramdani.jpg`) } } }
    const fvn = { key: { participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) }, message: { "audioMessage": { "mimetype": "audio/ogg; codecs=opus", "seconds": 99999, "ptt": "true" } } }
    const fgif = { key: { participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) }, message: { "videoMessage": { "title": `${control.NamaBot}`, "h": `Hmm`, 'seconds': '99999', 'gifPlayback': 'true', 'caption': `${control.NamaBot}`, 'jpegThumbnail': fs.readFileSync(`./foto/Ramdani.jpg`) } } }
    const fgclink = { key: { participant: "0@s.whatsapp.net", "remoteJid": "0@s.whatsapp.net" }, "message": { "groupInviteMessage": { "groupJid": "6288213840883-1616169743@g.us", "inviteCode": "m", "groupName": "P", "caption": `${control.NamaBot}`, 'jpegThumbnail': fs.readFileSync(`./foto/Ramdani.jpg`) } } }
    const fvideo = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) }, message: { "videoMessage": { "title": `${control.NamaBot}`, "h": `Hmm`, 'seconds': '99999', 'caption': `${control.NamaBot}`, 'jpegThumbnail': fs.readFileSync(`./foto/Ramdani.jpg`) } } }
    const floc = { key: { participant: '0@s.whatsapp.net' }, message: { locationMessage: { name: `Runtime :${runtime(process.uptime())}\n   Speed :${latensie.toFixed(4)} detik `, jpegThumbnail: fs.readFileSync(`./foto/Ramdani.jpg`) } } }
    const fkontak = { key: { participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `@Ramdanigns`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;@Ramdanigns,;;;\nFN:@Ramdanigns,\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync(`./foto/Ramdani.jpg`), thumbnail: fs.readFileSync(`./foto/Ramdani.jpg`), senRamdanifhemeral: true } } }
    var fakeReplyList = ['ftroli', 'fdoc', 'fvn', 'fgif', 'fgclink', 'fvideo', 'floc', 'fkontak']
    const replylinkig = (teks) => {
      Ramdani.sendMessage(from, teks, text, { sendEphemeral: true, quoted: ftroli, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: `Hiii ${pushname}`, body: "", mediaType: "2", thumbnail: thumbnail, mediaUrl: `https://www.instagram.com/muhammadramdani196453` } } })
    }
    const fakeitem = (teks) => {
      Ramdani.sendMessage(from, teks, text, {
        quoted: {
          key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`, ...(from ? {
              remoteJid: "6289523258649-1604595598@g.us"
            } : {})
          }, message: { "orderMessage": { "orderId": "174238614569481", "thumbnail": fs.readFileSync(`./foto/Ramdani.jpg`), "itemCount": 10, "status": "INQUIRY", "surface": "CATALOG", "message": `${control.NamaBot}`, "token": "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA==" } }
        }, contextInfo: { "forwardingScore": 999, "isForwarded": true }, senRamdanifhemeral: true
      })
    }


    const msg = 'tes'
    // here button function
    selectedButton = (type == 'buttonsResponseMessage') ? Ramdanif.message.buttonsResponseMessage.selectedButtonId : ''

    responseButton = (type == 'listResponseMessage') ? Ramdanif.message.listResponseMessage.title : ''

    const gcount = control.gcount

    const listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
      let po = Ramdani.prepareMessageFromContent(from, { "listMessage": { "title": title, "description": desc, "buttonText": "☰          ⌂           ⏎", "listType": "SINGLE_SELECT", "sections": list } }, {})
      return Ramdani.relayWAMessage(po, { waitForAck: true })
    }

    const isUrl = (url) => {
      return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
    }
    function monospace(string) {
      return '```' + string + '```'
    }
    function jsonformat(string) {
      return JSON.stringify(string, null, 2)
    }
    function randomNomor(angka) {
      return Math.floor(Math.random() * angka) + 1
    }
    const reply2 = (teks) => {
      Ramdani.sendMessage(from, teks, text, { quoted: floc })
    }
    const reply1 = (teks) => {
      Ramdani.sendMessage(from, teks, text, { thumbnail: Rfake, senRamdanifhemeral: true, quoted: Ramdanif, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: `${jmn} - ${week} ${weton} - ${calender}`, body: "DON'T CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: `https://wa.me/p/6289512545999` } } })
    }
    const reply = (teks) => {
      Ramdani.sendMessage(from, teks, text, { thumbnail: Rfake, senRamdanifhemeral: true, quoted: Ramdanif, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: `${jmn} - ${week} ${weton} - ${calender}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: `https://wa.me/${control.NomorOwner}?text=Halo Tuan` } } })
    }
    const fakestatus = (teks) => {
      Ramdani.sendMessage(from, teks, text, {
        quoted: {
          key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
          },
          message: {
            "imageMessage": {
              "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
              "mimetype": "image/jpeg",
              "caption": `[Ramdani botz ]`,
              "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
              "fileLength": "28777",
              "height": 1080,
              "width": 1079,
              "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
              "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
              "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
              "mediaKeyTimestamp": "1610993486",
              "jpegThumbnail": fs.readFileSync(`foto/Ramdani.jpg`),
              "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
            }
          }
        }, contextInfo: { "forwardingScore": 999, "isForwarded": true }, senRamdanifhemeral: true
      })
    }
    const sendMess = (hehe, teks) => {
      Ramdani.sendMessage(hehe, teks, text)
    }
    const mentions = (teks, memberr, id) => {
      (id == null || id == undefined || id == false) ? Ramdani.sendMessage(from, { text: teks.trim(), jpegThumbnail: fs.readFileSync('./foto/Ramdani.jpg') }, extendedText, { senRamdanifhemeral: true, contextInfo: { "mentionedJid": memberr } }) : Ramdani.sendMessage(from, { text: teks.trim(), jpegThumbnail: fs.readFileSync('./foto/Ramdani.jpg') }, extendedText, { senRamdanifhemeral: true, quoted: Ramdanif, contextInfo: { "mentionedJid": memberr } })
    }
    const sendText = (from, text) => {
      Ramdani.sendMessage(from, text, MessageType.text)
    }
    const textImg = (teks) => {
      return Ramdani.sendMessage(from, teks, text, { quoted: Ramdanif, thumbnail: fs.readFileSync('./foto/Ramdani.jpg') })
    }
    const freply = {
      key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: {
        "contactMessage": {
          "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${senderr.split('@')[0]}:${senderr.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail": fs.readFileSync('./foto/Ramdani.jpg')
        }
      }
    }
    const math = (teks) => {
      return Math.floor(teks)
    }
    const kick = function (from, orangnya) {
      for (let i of orangnya) {
        Ramdani.groupRemove(from, [i])
      }
    }
    const kickMember = async (id, target = []) => {
      let group = await Ramdani.groupMetadata(id)
      let owner = group.owner.replace("c.us", "s.whatsapp.net")
      let me = Ramdani.user.jid
      for (i of target) {
        if (!i.includes(me) && !i.includes(owner)) {
          await Ramdani.groupRemove(to, [i])
        } else {
          await Ramdani.sendMessage(id, "Not Premited!", "conversation")
          break
        }
      }
    }
    const add = function (from, orangnya) {
      Ramdani.groupAdd(from, orangnya)
    }
    const sendKontak = (from, nomor, nama, org = "") => {
      const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:' + org + '\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
      Ramdani.sendMessage(from, { displayname: nama, vcard: vcard }, MessageType.contact, { quoted: ftroli })
    }
    const hideTag = async function (from, text) {
      let anu = await Ramdani.groupMetadata(from)
      let members = anu.participants
      let ane = []
      for (let i of members) {
        ane.push(i.jid)
      }
      Ramdani.sendMessage(from, { text: text, jpegThumbnail: fs.readFileSync('foto/Ramdani.jpg') }, 'extendedTextMessage', { contextInfo: { "mentionedJid": ane } })
    }
    ///Button Document
    const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
      kma = gam1
      mhan = await Ramdani.prepareMessage(from, kma, location)
      const buttonMessages = {
        locationMessage: mhan.message.locationMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 6
      }
      Ramdani.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
    }

    const sendButDocument = async (id, text1, desc1, media, doc1, but = [], options = {}) => {
      kma = doc1
      mhan = await Ramdani.prepareMessage(from, media, document, kma)
      const buttonMessages = {
        documentMessage: mhan.message.documentMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: "DOCUMENT"
      }
      Ramdani.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
    }
    const sendWebp = async (to, url) => {
      var names = Date.now() / 10000;
      var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
          request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
        });
      };
      download(url, './sticker' + names + '.png', async function () {
        console.log('selesai');
        let filess = './sticker' + names + '.png'
        let asw = './sticker' + names + '.webp'
        exec(`ffmpeg -i ${filess} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=40, crop=512:512" ${asw}`, (err) => {
          fs.unlinkSync(filess)
          if (err) return reply(`${err}`)
          exec(`webpmux -set exif ./sticker/data.exif ${asw} -o ${asw}`, async (error) => {
            if (error) return reply(`${error}`)
            Ramdani.sendMessage(from, fs.readFileSync(asw), sticker, { senRamdanifhemeral: true, quoted: Ramdanif })
            fs.unlinkSync(asw)
          });
        });
      });
    }
    const jmn = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    let d = new Date
    let locale = 'id'
    let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
    const weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
    const week = d.toLocaleDateString(locale, { weekday: 'long' })
    const calender = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    try {
      pporang = await Ramdani.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
    } catch {
      pporang = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
    }
    const ofrply = await getBuffer(pporang)
    const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
    if (time2 < "23:59:00") {
      var ucapanWaktu = 'sᴇʟᴀᴍᴀᴛ ᴍᴀʟᴀᴍ🌃'
    }
    if (time2 < "19:00:00") {
      var ucapanWaktu = 'sᴇʟᴀᴍᴀᴛ sᴏʀᴇ🌃'
    }
    if (time2 < "18:00:00") {
      var ucapanWaktu = 'sᴇʟᴀᴍᴀᴛ sᴏʀᴇ🌇'
    }
    if (time2 < "15:00:00") {
      var ucapanWaktu = 'sᴇʟᴀᴍᴀᴛ sɪᴀɴɢ🌁'
    }
    if (time2 < "11:00:00") {
      var ucapanWaktu = 'sᴇʟᴀᴍᴀᴛ ᴘᴀɢɪ🌄'
    }
    if (time2 < "05:00:00") {
      var ucapanWaktu = 'sᴇʟᴀᴍᴀᴛ ᴍᴀʟᴀᴍ🌆'
    }
    const getRegisteredRandomId = () => {
      return _registered[Math.floor(Math.random() * _registered.length)].id
    }
    const addRegisteredUser = (userid, sender, age, time, serials) => {
      const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
      _registered.push(obj)
      fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
    }

    const checkRegisteredUser = (sender) => {
      let status = false
      Object.keys(_registered).forEach((i) => {
        if (_registered[i].id === sender) {
          status = true
        }
      })
      return status
    }
    const isRegistered = checkRegisteredUser(sender)

    ///////berburu function
    const sotoy = ['🍊 : 🍒 : 🍐', '🍒 : 🔔 : 🍊', '🍇 : 🍇 : 🍇', '🍊 : 🍋 : 🔔', '🔔 : 🍒 : 🍐', '🔔 : 🍒 : 🍊', '🍊 : 🍋 : 🔔', '🍐 : 🍒 : 🍋', '🍐 : 🍐 : 🍐', '🍊 : 🍒 : 🍒', '🔔 : 🔔 : 🍇', '🍌 : 🍒 : 🔔', '🍐 : 🔔 : 🔔', '🍊 : 🍋 : 🍒', '🍋 : 🍋 : 🍌', '🔔 : 🔔 : 🍇', '🔔 : 🍐 : 🍇', '🔔 : 🔔 : 🔔', '🍒 : 🍒 : 🍒', '🍌 : 🍌 : 🍌']
    const sotoy2 = ['🍊 : 🍒 : 🍐', '🍒 : 🔔 : 🍊', '🍊 : 🍋 : 🔔', '🔔 : 🍒 : 🍐', '🔔 : 🍒 : 🍊', '🍊 : 🍋 : 🔔', '🍐 : 🍒 : 🍋', '🍊 : 🍒 : 🍒', '🔔 : 🔔 : 🍇', '🍌 : 🍒 : 🔔', '🍐 : 🔔 : 🔔', '🍊 : 🍋 : 🍒', '🍋 : 🍋 : 🍌', '🔔 : 🔔 : 🍇', '🔔 : 🍐 : 🍇']
    const sotoy1 = ['🍊 : 🍒 : 🍐', '🍒 : 🔔 : 🍊', '🍊 : 🍋 : 🔔', '🔔 : 🍒 : 🍐', '🔔 : 🍒 : 🍊', '🍊 : 🍋 : 🔔', '🍐 : 🍒 : 🍋', '🍊 : 🍒 : 🍒', '?? : 🔔 : 🍇', '🍌 : 🍒 : 🔔', '🍐 : 🔔 : 🔔', '🍊 : 🍋 : 🍒', '🍋 : 🍋 : 🍌', '🔔 : 🔔 : 🍇', '🔔 : 🍐 : 🍇']
    const sotoy3 = ['🔔 : 🔔 : 🔔', '🍒 : 🍒 : 🍒', '🍌 : 🍌 : 🍌']
    const buruh1 = ['🐳', '🦈', '🐬', '🐋', '🐟', '🐠', '🦐', '🦑', '🦀', '🐚']
    const buruh2 = ['🐔', '🦃', '🐿', '🐐', '🐏', '🐖', '🐑', '🐎', '🐺', '🦩']
    const buruh3 = ['🦋', '🕷', '🐝', '🐉', '🦆', '🦅', '🕊', '🐧', '🐦', '🦇']
    const buruh4 = ['🪁', '🛵', '🖥️', '📱', '💰']
    const buruh5 = ['💎', '📚', '📻', '📠', '🚛', '💸']
    const buruh11 = buruh1[Math.floor(Math.random() * (buruh1.length))]
    const buruh22 = buruh2[Math.floor(Math.random() * (buruh2.length))]
    const buruh33 = buruh3[Math.floor(Math.random() * (buruh3.length))]
    const buruh44 = buruh4[Math.floor(Math.random() * (buruh4.length))]
    const buruh55 = buruh5[Math.floor(Math.random() * (buruh5.length))]

    let chats =
      type === 'conversation' && Ramdanif.message.conversation
        ? Ramdanif.message.conversation
        : type == 'imageMessage' && Ramdanif.message.imageMessage.caption
          ? Ramdanif.message.imageMessage.caption
          : type == 'videoMessage' && Ramdanif.message.videoMessage.caption
            ? Ramdanif.message.videoMessage.caption
            : type == 'extendedTextMessage' && Ramdanif.message.extendedTextMessage.text
              ? Ramdanif.message.extendedTextMessage.text
              : type == 'buttonsResponseMessage' && Ramdanif.message[
                type].selectedButtonId
                ? Ramdanif.message[type].selectedButtonId
                : type == 'stickerMessage' &&
                  getCmd(Ramdanif.message[
                    type].fileSha256.toString(
                      'base64')) !== null &&
                  getCmd(Ramdanif.message[
                    type].fileSha256.toString(
                      'base64')) !== undefined
                  ? getCmd(Ramdanif.message[
                    type].fileSha256.toString(
                      'base64'))
                  : '';

    if (game.isMtk(from, mtk)) {
      if (chats.toLowerCase().includes(game.getJawabanMtk(from, mtk))) {
        var htgm3 = randomNomor(1000)
        addBalance(sender, htgm3, balance)
        await reply(`*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanMtk(from, mtk)}\n*Hadiah :* $${htgm3}\n\nIngin bermain lagi? kirim *${prefix}math*`)
        mtk.splice(game.getMtkPosi(from, mtk), 1)
      }
    }
    if (game.isTebakLirik(from, tebaklirik)) {
      if (chats.toLowerCase().includes(game.getJawabanTL(from, tebaklirik))) {
        var htgml = randomNomor(100)
        addBalance(sender, htgml, balance)
        await fakestatus(`GAME TEBAK LIRIK\n*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanTL(from, tebaklirik)}\n*Hadiah :* $${htgml}\nIngin bermain lagi? kirim *${prefix}tebaklirik*`)
        tebaklirik.splice(game.getTLPosi(from, tebaklirik), 1)
      }
    }
    if (game.isSiapaAku(from, siapaaku)) {
      if (chats.toLowerCase().includes(game.getJawabanSA(from, siapaaku))) {
        var htgmu = randomNomor(100)
        addBalance(sender, htgmu, balance)
        await fakestatus(`𝐆𝐀𝐌𝐄 𝐒𝐈𝐀𝐏𝐀𝐊𝐀𝐇 𝐀𝐊𝐔\n*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanSA(from, siapaaku)}\n*Hadiah :* $${htgmu}\n Ingin bermain lagi? kirim *${prefix}siapakahaku*`)
        siapaaku.splice(game.getSAPosi(from, siapaaku), 1)
      }
    }
    if (game.isTebakKata(from, tebakkata)) {
      if (chats.toLowerCase().includes(game.getJawabanTK(from, tebakkata))) {
        var htgtk = randomNomor(100)
        addBalance(sender, htgtk, balance)
        await fakestatus(`𝐆𝐀𝐌𝐄 𝐓𝐄𝐁𝐀𝐊 𝐊𝐀𝐓𝐀\n*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanTK(from, tebakkata)}\n*Hadiah :* $${htgtk}\nIngin bermain lagi? kirim *${prefix}tebakkata*`)
        tebakkata.splice(game.getTKPosi(from, tebakkata), 1)
      }
    }
    if (game.isTebakKimia(from, tebakkimia)) {
      if (chats.toLowerCase().includes(game.getJawabanTU(from, tebakkimia))) {
        var reva = randomNomor(100)
        addBalance(sender, reva, balance)
        await fakestatus(`𝐆𝐀𝐌𝐄 𝐓𝐄𝐁𝐀𝐊 𝐔𝐍𝐒𝐔𝐑 𝐊𝐈𝐌𝐈𝐀\n*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanTU(from, tebakkimia)}\n*Hadiah :* $${reva}\nIngin bermain lagi? kirim *${prefix}tebakkimia*`)
        tebakkimia.splice(game.getTUPosi(from, tebakkimia), 1)
      }
    }
    if (game.isTebakBendera(from, tebakbendera)) {
      if (chats.toLowerCase().includes(game.getJawabanTB(from, tebakbendera))) {
        var syahira = randomNomor(100)
        addBalance(sender, syahira, balance)
        await fakestatus(`𝐆𝐀𝐌𝐄 𝐓𝐄𝐁𝐀𝐊 𝐁𝐄𝐍𝐃𝐄𝐑𝐀\n *Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanTB(from, tebakbendera)}\n*Hadiah :* $${syahira}\nIngin bermain lagi? kirim *${prefix}tebakbendera*`)
        tebakbendera.splice(game.getTBPosi(from, tebakbendera), 1)
      }
    }
    if (game.isTebakAnime(from, tebakanime)) {
      if (chats.toLowerCase().includes(game.getJawabanTA(from, tebakanime))) {
        var vinna = randomNomor(100)
        addBalance(sender, vinna, balance)
        await fakestatus(`𝐆𝐀𝐌𝐄 𝐓𝐄𝐁𝐀𝐊 𝐀𝐍𝐈𝐌𝐄\n*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanTA(from, tebakanime)}\n*Hadiah :* $${vinna}\nIngin bermain lagi? kirim *${prefix}tebakanime*`)
        tebakanime.splice(game.getTAPosi(from, tebakanime), 1)
      }
    }
    if (game.isTebakGambar(from, tebakgambar) && isRegistered) {
      if (chats.toLowerCase().includes(game.getJawabanTG(from, tebakgambar))) {
        var htgm = randomNomor(100)
        addBalance(sender, htgm, balance)
        await reply(`*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanTG(from, tebakgambar)}\n*Hadiah :* $${htgm}\n\nIngin bermain lagi? kirim *${prefix}tebakgambar*`)
        tebakgambar.splice(game.getTGPosi(from, tebakgambar), 1)
      }
    }

    if (game.isfam(from, family100)) {
      var anjuy = game.getjawaban100(from, family100)
      for (let i of anjuy) {
        if (budy.toLowerCase().includes(i)) {
          var htgmp = Math.floor(Math.random() * 20) + 1
          atm.addKoinUser(sender, htgmp, _uang)
          await reply(`*Jawaban benar*\n*Jawaban :* ${i}\n*Hadiah :* $${htgmp}\n*Jawaban yang blum tertebak :* ${anjuy.length - 1}`)
          var anug = anjuy.indexOf(i)
          anjuy.splice(anug, 1)
        }
      }
      if (anjuy.length < 1) {
        Ramdani.sendMessage(from, `Semua jawaban sudah tertebak\nKirim *${prefix}family100* untuk bermain lagi`, text)
        family100.splice(game.getfamposi(from, family100), 1)
      }
    }
    ///Button Text
    const sendButVideo = async (id, text1, desc1, vid1, but = [], options = {}) => {
      kma = vid1
      mhan = await Ramdani.prepareMessage(from, kma, video)
      const buttonMessages = {
        videoMessage: mhan.message.videoMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 5
      }
      Ramdani.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)

    }
    const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
      const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
      };
      Ramdani.sendMessage(
        id,
        buttonMessage,
        MessageType.buttonsMessage,
        options
      );
    };
    const sendMediaURL = async (to, url, text = "", mids = []) => {
      if (mids.length > 0) {
        text = normalizeMention(to, text, mids)
      }
      const fn = Date.now() / 10000;
      const filename = fn.toString()
      let mime = ""
      var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
          mime = res.headers['content-type']
          request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
        });
      };
      download(url, filename, async function () {
        console.log('done');
        let media = fs.readFileSync(filename)
        let type = mime.split("/")[0] + "Message"
        if (mime === "image/gif") {
          type = MessageType.video
          mime = Mimetype.gif
        }
        if (mime.split("/")[0] === "audio") {
          mime = Mimetype.mp4Audio
        }
        Ramdani.sendMessage(to, media, type, { quoted: Ramdanif, mimetype: mime, caption: text, thumbnail: Buffer.alloc(0), contextInfo: { "mentionedJid": mids } })

        fs.unlinkSync(filename)
      });
    }
    const sendFile = async (link, type, options) => {
      hasil = await getBuffer(link)
      Ramdani.sendMessage(from, hasil, type, options).catch(e => {
        fetchh(link).then((hasil) => {
          Ramdani.sendMessage(from, hasil, type, options).catch(e => {
            Ramdani.sendMessage(from, { url: link }, type, options).catch(e => {
              reply('Error!')
              console.log(e)
            })
          })
        })
      })
    }
    const sendFileFromUrl = async (link, type, options) => {
      hasil = await getBuffer(link)
      Ramdani.sendMessage(from, hasil, type, options).catch(e => {
        fetch(link).then((hasil) => {
          Ramdani.sendMessage(from, hasil, type, options).catch(e => {
            Ramdani.sendMessage(from, { url: link }, type, options).catch(e => {
              reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
              console.log(e)
            })
          })
        })
      })
    }
    const promoteAdmin = async function (to, target = []) {
      if (!target.length > 0) { return reply("No target..") }
      let g = await Ramdani.groupMetadata(to)
      let owner = g.owner.replace("c.us", "s.whatsapp.net")
      let me = Ramdani.user.jid
      for (i of target) {
        if (!i.includes(me) && !i.includes(owner)) {
          const res = await Ramdani.groupMakeAdmin(to, [i])
        } else {
          reply("NOT PREMITED")
        }
      }
      var hayuk0 = '[NOT VERIFIED]'
      if (isRegistered) {
        hayuk0 = '[√ VERIFIED]'
      }
    }
    const demoteAdmin = async function (to, target = []) {
      if (!target.length > 0) { return reply("No target..") }
      let g = await Ramdani.groupMetadata(to)
      let owner = g.owner.replace("c.us", "s.whatsapp.net")
      let me = Ramdani.user.jid
      for (i of target) {
        if (!i.includes(me) && !i.includes(owner)) {
          const res = await Ramdani.groupDemoteAdmin(to, [i])
        } else {
          reply("NOT PREMITED")
        }
      }
    }
    let authorname = Ramdani.contacts[from] != undefined ? Ramdani.contacts[from].vname || Ramdani.contacts[from].notify : undefined
    if (authorname != undefined) { } else { authorname = groupName }
    function addMetadata(packname, author) {
      if (!packname) packname = 'WABot'; if (!author) author = 'Bot'; author = author.replace(/[^a-zA-Z0-9]/g, '');
      let name = `${author}_${packname}`
      if (fs.existsSync(`./sticker/${name}.exif`)) return `./sticker/${name}.exif`
      const json = {
        "sticker-pack-name": packname,
        "sticker-pack-publisher": author,
      }
      const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])
      const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]
      let len = JSON.stringify(json).length
      let last
      if (len > 256) {
        len = len - 256
        bytes.unshift(0x01)
      } else {
        bytes.unshift(0x00)
      }
      if (len < 16) {
        last = len.toString(16)
        last = "0" + len
      } else {
        last = len.toString(16)
      }
      const buf2 = Buffer.from(last, "hex")
      const buf3 = Buffer.from(bytes)
      const buf4 = Buffer.from(JSON.stringify(json))
      const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])
      fs.writeFile(`./sticker/${name}.exif`, buffer, (err) => {
        return `./sticker/${name}.exif`
      })
    }
    //FUNCTION ADVENTURE
    const bayarHeal = (sender, amount) => {
      let position = false
      Object.keys(_heal).forEach((i) => {
        if (_heal[i].id === sender) {
          position = i
        }
      })
      if (position !== false) {
        _heal[position].heal -= amount
        fs.writeFileSync('./database/adventure/heal.json', JSON.stringify(_heal))
      }
    }
    const addHealUser = (sender, amount) => {
      let position = false
      Object.keys(_heal).forEach((i) => {
        if (_heal[i].id === sender) {
          position = i
        }
      })
      if (position !== false) {
        _heal[position].heal -= 25
        fs.writeFileSync('./database/adventure/heal.json', JSON.stringify(_heal))
      }
    }
    const healAdd = (sender) => {
      let position = false
      Object.keys(_heal).forEach((i) => {
        if (_heal[i].id == sender) {
          position = i
        }
      })
      if (position !== false) {
        _heal[position].heal += 25
        fs.writeFileSync('./database/adventure/heal.json', JSON.stringify(_heal))
      }
    }
    const bayarPotion = (sender, amount) => {
      let position = false
      Object.keys(_heal).forEach((i) => {
        if (_potion[i].id === sender) {
          position = i
        }
      })
      if (position !== false) {
        _potion[position].potion -= amount
        fs.writeFileSync('./database/adventure/potion.json', JSON.stringify(_potion))
      }
    }
    const addPotioUser = (sender, amount) => {
      let position = false
      Object.keys(_potion).forEach((i) => {
        if (_potion[i].id === sender) {
          position = i
        }
      })
      if (position !== false) {
        _potion[position].potion -= amount
        fs.writeFileSync('./database/adventure/potion.json', JSON.stringify(_potion))
      }
    }
    const potionAdd = (sender) => {
      let position = false
      Object.keys(_potion).forEach((i) => {
        if (_potion[i].id == sender) {
          position = i
        }
      })
      if (position !== false) {
        _potion[position].potion += 1
        fs.writeFileSync('./database/adventure/potion.json', JSON.stringify(_potion))
      }
    }
    //function check heal
    const checkHeal = (sender) => {
      let foundh = false
      for (let heallmt of _heal) {
        if (heallmt.id === sender) {
          let healCounts = healawal - heallmt.heal
          if (healCounts <= 0) return Ramdani.sendMessage(from, `ya udah habis Heal kamu\n\n_Note : tenang Heal bisa didapatkan dengan cara ${prefix}usepotion_`, text, { quoted: Ramdanif })
          Ramdani.sendMessage(from, `HEAL : ${healCounts}`, text, { quoted: Ramdanif })
          foundh = true
        }
      }
      if (foundh === false) {
        let obj = { id: sender, heal: 0 }
        _heal.push(obj)
        fs.writeFileSync('./database/adventure/heal.json', JSON.stringify(_heal))
        Ramdani.sendMessage(from, `HEAL : ${healCounts}`, text, { quoted: Ramdanif })
      }
    }
    //funtion potion
    const isPotion = (sender) => {
      let position = false
      for (let i of _potion) {
        if (i.id === sender) {
          let potions = i.potion
          if (potions >= potionawal) {
            position = true
            Ramdani.sendMessage(from, `Beli Potion ngab di /buypotion`, text, { quoted: Ramdanif })
            return true
          } else {
            _potion
            position = true
            return false
          }
        }
      }
      if (position === false) {
        const obj = { id: sender, potion: 0 }
        _potion.push(obj)
        fs.writeFileSync('./database/adventure/potion.json', JSON.stringify(_potion))
        return false
      }
    }
    const checkPotion = (sender) => {
      let foundh = false
      for (let potionlmt of _potion) {
        if (potionlmt.id === sender) {
          potionCounts = potionawal - potionlmt.potion
          if (potionCounts <= 0) return Ramdani.sendMessage(from, `ya udah habis potion kamu\n\n_Note : tenang limit bisa dibeli dengan cara ${prefix}buypotion_`, text, { quoted: Ramdanif })
          Ramdani.sendMessage(from, `POTION : ${potionCounts}`, text, { quoted: Ramdanif })
          foundh = true
        }
      }
      if (foundh === false) {
        let obj = { id: sender, potion: 0 }
        _potion.push(obj)
        fs.writeFileSync('./database/adventure/potion.json', JSON.stringify(_potion))
        Ramdani.sendMessage(from, `POTION : ${potionCounts}`, text, { quoted: Ramdanif })
      }
    }

    //FUNCTION LEVELING
    const getLevelingXp = (userId) => {
      let position = false
      Object.keys(_level).forEach((i) => {
        if (_level[i].jid === userId) {
          position = i
        }
      })
      if (position !== false) {
        return _level[position].xp
      }
    }
    const getLevelingLevel = (userId) => {
      let position = false
      Object.keys(_level).forEach((i) => {
        if (_level[i].jid === userId) {
          position = i
        }
      })
      if (position !== false) {
        return _level[position].level
      }
    }
    const getLevelingId = (userId) => {
      let position = false
      Object.keys(_level).forEach((i) => {
        if (_level[i].jid === userId) {
          position = i
        }
      })
      if (position !== false) {
        return _level[position].jid
      }
    }
    const addLevelingXp = (userId, amount) => {
      let position = false
      Object.keys(_level).forEach((i) => {
        if (_level[i].jid === userId) {
          position = i
        }
      })
      if (position !== false) {
        _level[position].xp += amount
        fs.writeFileSync('./database/level.json', JSON.stringify(_level))
      }
    }
    const addLevelingLevel = (userId, amount) => {
      let position = false
      Object.keys(_level).forEach((i) => {
        if (_level[i].jid === userId) {
          position = i
        }
      })
      if (position !== false) {
        _level[position].level += amount
        fs.writeFileSync('./database/level.json', JSON.stringify(_level))
      }
    }
    const addLevelingId = (userId) => {
      const obj = { jid: userId, xp: 1, level: 1 }
      _level.push(obj)
      fs.writeFileSync('./database/level.json', JSON.stringify(_level))
    }
    const xpGain = new Set()
    const isGained = (userId) => {
      return !!xpGain.has(userId)
    }
    const addCooldown = (userId) => {
      xpGain.add(userId)
      setTimeout(() => {
        return xpGain.delete(userId)
      }, 60000)
    }

    const addATM = (sender) => {
      const obj = { id: sender, balance: 0 }
      balance.push(obj)
      fs.writeFileSync('./database/balance.json', JSON.stringify(balance))
    }

    const addKoinUser = (sender, amount) => {
      let position = false
      Object.keys(balance).forEach((i) => {
        if (balance[i].id === sender) {
          position = i
        }
      })
      if (position !== false) {
        balance[position].balance += amount
        fs.writeFileSync('./database/balance.json', JSON.stringify(balance))
      }
    }



    const levelRole = level.getLevelingLevel(sender, _level)
    var role = 'Warrior III'
    if (levelRole <= 5) {
      role = 'Warrior II'
    } else if (levelRole <= 10) {
      role = 'Warrior I'
    } else if (levelRole <= 15) {
      role = 'Elite III'
    } else if (levelRole <= 20) {
      role = 'Elite II'
    } else if (levelRole <= 25) {
      role = 'Elite I'
    } else if (levelRole <= 30) {
      role = 'Master III'
    } else if (levelRole <= 35) {
      role = 'Master II'
    } else if (levelRole <= 40) {
      role = 'Master I'
    } else if (levelRole <= 45) {
      role = 'GrandMaster III'
    } else if (levelRole <= 50) {
      role = 'GrandMaster II'
    } else if (levelRole <= 55) {
      role = 'GrandMaster I'
    } else if (levelRole <= 60) {
      role = 'Epic III'
    } else if (levelRole <= 65) {
      role = 'Epic II'
    } else if (levelRole <= 70) {
      role = 'Epic I'
    } else if (levelRole <= 75) {
      role = 'Legend III'
    } else if (levelRole <= 80) {
      role = 'Legend II'
    } else if (levelRole <= 85) {
      role = 'Legend I'
    } else if (levelRole <= 90) {
      role = 'Mythic'
    } else if (levelRole <= 95) {
      role = 'Mythical Glory'
    } else if (levelRole >= 100) {
      role = 'Immortal'
    }

    colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
    const isMedia = (type === 'imageMessage' || type === 'videoMessage')
    const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
    const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
    const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
    const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

    //--------------------[ANTI TOXIC]--------------------\\
    if (bad.includes(messagesD)) {
      kntl = `${args.join(' ')}`
      nama = ("MULUT JAGA!!")
      impostor = ("NIH PERGI KE ARAB, TOBAT SONO\nSUPAYA GAK TOXIC")
      Ramdani.sendMessage(from, {
        degreesLatitude: 21.422487, degreesLongitude: 39.826206,
        name: nama,
        address: impostor,
        jpegThumbnail: fs.readFileSync('./foto/Ramdani.jpg')
      }, MessageType.liveLocation, { quoted: ftroli })
    }
    const sendStickerUrl = async (to, url) => {
      console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
      var names = getRandom('.webp')
      var namea = getRandom('.png')
      var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
          request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
        });
      };
      download(url, namea, async function () {
        let filess = namea
        let asw = names
        require('./lib/exif.js')
        exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
          exec(`webpmux -set exif ./src/sticker/data.exif ${asw} -o ${asw}`, async (error) => {
            let media = fs.readFileSync(asw)
            Ramdani.sendMessage(to, media, sticker, { quoted: fkontak })
            console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
          });
        });
      });
    }
    if (isGroup && !Ramdanif.key.fromMe && !level.isGained(sender) && isLevelingOn) {
      try {
        level.addCooldown(sender)
        const checkATM = atm.checkATMuser(sender, _uang)
        if (checkATM === undefined) atm.addATM(sender, _uang)
        const uangsaku = Math.floor(Math.random() * (15 - 25 + 1) + 20)
        atm.addKoinUser(sender, uangsaku, _uang)
        const currentLevel = level.getLevelingLevel(sender, _level)
        const amountXp = Math.floor(Math.random() * (15 - 25 + 1) + 20)
        const requiredXp = 10 * Math.pow(currentLevel, 2) + 50 * currentLevel + 100
        level.addLevelingXp(sender, amountXp, _level)
        if (requiredXp <= level.getLevelingXp(sender, _level)) {
          level.addLevelingLevel(sender, 1, _level)
          const userLevel = level.getLevelingLevel(sender, _level)
          const fetchXp = 10 * Math.pow(userLevel, 2) + 50 * userLevel + 100
          reply(`*「 LEVEL UP 」*\n\n➸ *Nama :* ${pushname}\n➸ *Xp :* ${level.getLevelingXp(sender, _level)} / ${fetchXp}\n➸ *Level :* ${currentLevel} -> ${level.getLevelingLevel(sender, _level)} 🆙 \n➸ *Role*: *${role}*\n\nCongrats!! 🎉🎉`)
        }
      } catch (err) {
        console.error(err)
      }
    }
    //--------------------[LEVELING]--------------------\\

    //--------------------[AFK]--------------------\\
    // AFK
if (isGroup) {
  if (!Ramdanif.key.fromMe && banChats === true) return
  for (let x of mentionUser) {
  if (afk.checkAfkUser(x, _afk)) {
  const getId = afk.getAfkId(x, _afk)
  const getReason = afk.getAfkReason(getId, _afk)
  const getTime = afk.getAfkTime(getId, _afk)
  const cptl = `*「 AFK MODE 」*\n
  *Sssttt! Orangnya lagi AFK, jangan diganggu!*
  ➸ *Alasan*  : ${getReason}
  ➸ *Sejak* : ${getTime}`
  mentions(cptl, x, true)
  }}
  //================================================================================================
  if (afk.checkAfkUser(sender, _afk) && !isCmd) {
  const getTime = afk.getAfkTime(sender, _afk)
  const getReason = afk.getAfkReason(sender, _afk)
  const ittung = ms(await Date.now() - getTime)
  const pep = `*${pushname}* telah kembali dari AFK! Selamat datang kembali~`
  reply(pep)
  _afk.splice(afk.getAfkPosition(sender, _afk), 1)
  fs.writeFileSync('./database/user/afk.json', JSON.stringify(_afk))
  }
  }
    const isImage = type === 'imageMessage'
    const isSticker = type === 'stickerMessage'
    const isVideo = type === 'videoMessage'
    const isAudio = type === 'audioMessage'
    const isContact = type === 'contactMessage'
    const isOrder = type === 'orderMessage'
    const isProduct = type === 'productMessage'
    const isMentioned = type === 'mentionedJid'
    const isDocument = type === 'documentMessage'
    const isLink = type === 'matchedText'
    const isLiveLocation = type === 'liveLocationMessage'
    const isExtendedText = type === 'extendedTextMessage'
    const isText = type === 'textMessage'

    //--------------------[AFK]--------------------\\
    //////auto sticker /////
    if (isGroup && isAuto) {
      if (isImage || isVideo) {
        let media = await Ramdani.downloadAndSaveMediaMessage(msg, `./sticker/${sender}`)
        Ramdani.sendSticker(from, media, msg).then((res) => fs.unlinkSync(media))
      }
    }
    //--------------------[ANTILINK]--------------------\\ 
    const createSerial = (size) => {
      return crypto.randomBytes(size).toString('hex').slice(0, size)
    }
    if (isGroup && isAntiLink && !isOwner && isBotGroupAdmins) {
      if (budy.match(/(https:\/\/chat.whatsapp.com)/gi)) {
        if (isGroupAdmins) return reply("ADMIN BEBAS");
        setTimeout(() => {
          Ramdani.groupRemove(from, [sender]).catch((e) => { Ramdani.reply(from, global.db.mess.BotAdmin, freply) })
        }, 2000)
        setTimeout(() => {
          Ramdani.sendMessage(from, `*「 GROUP LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link grup, maaf kamu akan di kick❗`, MessageType.text)
        }, 0)

      }
    }

    if (isGroup && isAntivirtex && !Ramdanif.key.fromMe) {
      if (budy.length > 1200) {
        if (isGroupAdmins) return reply("walaupun admin tetep gaboleh gitu");
        Ramdani.updatePresence(from, Presence.composing)
        let ayhd = "\n".repeat(420)
        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
        setTimeout(() => {
          Ramdani.groupRemove(from, [kic]).catch((e) => { Ramdani.reply(from, global.db.mess.BotAdmin, Ramdanif) })
          Ramdani.sendMessage(`6289512545999@s.whatsapp.net`, `wa.me/${sender.split("@")[0]}\n telah mengirim Virtex ❗`, MessageType.text, { contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: "Ramdani botz", body: "", previewType: "PHOTO", thumbnail: fs.readFileSync('./foto/Ramdani.jpg'), sourceUrl: "https://wa.me/6289512545999" } } })
        }, 7000)
        setTimeout(() => {
          Ramdani.sendMessage(from, '_1 Detik lagi..._', text, { quoted: fkontak })
        }, 6000)
        setTimeout(() => {
          Ramdani.sendMessage(from, '_2 Detik lagi..._', text, { quoted: fkontak })
        }, 5000)
        setTimeout(() => {
          Ramdani.sendMessage(from, '_3 Detik lagi..._', text, { quoted: fkontak })
        }, 2500)
        setTimeout(() => {
          Ramdani.reply(from, `${ayhd}\nAnti Virtex Terdeteksi, pengguna ${kic} Telah Mengirimkan Virtex\n\nMaaf ${pushname} Anda akan di kick 3 detik lagi❗`, Ramdanif)
        }, 0)

      }
    }
    /*if (isSimi) {
      simi = await fetchJson(`https://api.simsimi.net/v2/?text=${cmd}&lc=ID`)
      sami = simi.success
      Ramdani.sendMessage(from, `${sami}`, text, { thumbnail: ofrply, senRamdanifhemeral: true, quoted: Ramdanif, contextInfo: { forwardingScore: 508, isForwarded: true } })
    }
    Ramdani.updatePresence(from, Presence.composing)*/

    Ramdani.chatRead(from, "read")
  
    if (!isGroup && !isCmd) console.log(color(time, "yellow"), color("[ PRIVATE ]", "green"), color(budy, "yellow"), "from", color(sender.split('@')[0], "white"))
    if (isGroup && !isCmd) console.log(color(time, "yellow"), color("[  GROUP  ]", "green"), color(budy, "yellow"), "from", color(sender.split('@')[0], "white"), "in", color(groupName, "yellow"))
    if (!isGroup && isCmd) console.log(color(time, "yellow"), color("[ COMMAND ]", "green"), color(budy, "yellow"), "from", color(sender.split('@')[0], "white"))
    if (isGroup && isCmd) console.log(color(time, "yellow"), color("[ COMMAND ]", "green"), color(budy, "yellow"), "from", color(sender.split('@')[0], "white"), "in", color(groupName, "blue"))
    if (budy.toLowerCase() === `5173`) {
      if (isRegister) return
      register.push(sender)
      fs.writeFileSync('./database/registered.json', JSON.stringify(register))
      teks = `Verification success\n\nPlease send *!menu* to view menu`
      atm.addKoinUser(sender, randomNomor(100), _uang)
      Ramdani.sendMessage(from, teks, text, { quoted: ftroli })
    }
    if (!Ramdanif.key.fromMe && banChats === true) return
    if (!isCmd && from.endsWith('@s.whatsapp.net')) {
      Ramdani.anonymous = Ramdani.anonymous ? Ramdani.anonymous : {}
      let room = Object.values(Ramdani.anonymous).find(room => [room.a, room.b].includes(sender) && room.state === 'CHATTING')
      if (room) {
        if (/^.*(next|leave|start)/.test(body)) return
        if ([`${prefix}next`, `${prefix}leave`, `${prefix}start`, 'Cari Partner', 'Keluar', 'Next'].includes(body)) return
        let other = [room.a,
        room.b].find(user => user !== sender)
        if (type === "conversation") {
          Ramdani.sendMessage(other, Ramdanif.message.conversation, text);
        } else {
        }
      }
    }
    switch (command) {

      case 'owner':
      case 'creator':
        if (isBanned) return reply(mess.ban)
        if (isBanchat) return
        sendKontak(from, `${owner}`, `${ownerName}`, 'Sibukk!!')
        await sleep(1000)
        txtt = `Hai Kak ${pushname}\nItu Ownerku, Mau tau soal apa ya?`

        buttons = [{ buttonId: '!donat', buttonText: { displayText: 'DONASI' }, type: 1 }, { buttonId: '!igowner', buttonText: { displayText: 'INSTAGRAM' }, type: 1 }]

        buttonsMessage = {
          contentText: `${txtt}`,
          footerText: 'Jangan Sungkan Chat Ya Kak',
          buttons: buttons,
          headerType: 1
        }

        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, {})
        Ramdani.relayWAMessage(prep)
        break

        
      case 'set':
      case 'mode':
        if (isBanned) return reply(mess.ban)
        if (isBanchat) return
        if (isOwner && Ramdanif.key.fromMe) return reply(mess.only.owner)
        sendButMessage(from, `SELF OR PUBLIC`, `Silahkan pilih salah satu`, [
          {
            buttonId: `${prefix}self`,
            buttonText: {
              displayText: `👤 SELF `,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}public`,
            buttonText: {
              displayText: `👥 PUBLIC`,
            },
            type: 1,
          },
        ]);
        break;
      case 'simi':
        if (isBanned) return reply(mess.ban)
        if (isBanchat) return
        if (args[0] === 'enable') {
          if (isSimi) return reply(`Udah aktif`)
          samih.push(from)
          fs.writeFileSync('./database/simi.json', JSON.stringify(samih))
          reply('SIMI DI AKTIFKAN')
        } else if (args[0] === 'disable') {
          let anu = samih.indexOf(from)
          samih.splice(anu, 1)
          fs.writeFileSync('./database/simi.json', JSON.stringify(samih))
          reply('SIMI DI NONAKTIFKAN')
        } else if (!q) {
          var ini_gopayy = `Halo @${senderr.split('@')[0]} klik button atau Gunakan ${prefix + command} enable / disable jika button tidak merespon`
          var buttonss = [
            { buttonId: `!simi enable`, buttonText: { displayText: 'ENABLE' }, type: 1 },
            { buttonId: `!simi disable`, buttonText: { displayText: 'DISABLE' }, type: 1 }
          ]

          buttonMessagee = {
            contentText: ini_gopayy,
            footerText: `©${control.watermark2}`,
            buttons: buttonss,
            headerType: 1
          }
          Ramdani.sendMessage(from, buttonMessagee, MessageType.buttonsMessage, {
            caption: `${control.NamaBot}`,
            "contextInfo": {
              text: 'hi',
              "forwardingScore": 1000000000,
              isForwarded: true,
              senRamdanifhemeral: true,
              "mentionedJid": [sender]
            },
            quoted: ftroli, senRamdanifhemeral: true
          })
        }
        break
      case 'welcome':
        if (isBanned) return reply(mess.ban)
        if (isBanchat) return
        if (!isGroup) return reply(mess.only.group)
        if (args.length < 1) return reply('!welcome enable/disable')
        if ((args[0]) === 'enable') {
          if (isWelkom) return reply('Udah aktif')
          welkom.push(from)
          fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
          reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
        } else if ((args[0]) === 'disable') {
          welkom.splice(from, 1)
          fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
          reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
        } else {
          reply('Enable untuk mengaktifkan, disable untuk menonaktifkan')
        }
        break

      case 'self':
        if (isBanned) return reply(mess.ban)
        if (isBanchat) return
        if (isOwner && Ramdanif.key.fromMe) return reply(mess.only.owner)
        if (banChats === true) return
        uptime = process.uptime()
        banChats = true
        reply(' ```「 SELF MODE 」``` ')
        break
      case 'kick':
        if (isBanned) return reply(mess.ban)
        if (isBanchat) return
        if (!isGroup) return reply("Khusus di grup");
        if (!isGroupAdmins && !Ramdanif.key.fromMe) return reply("Khusus admin");
        kick(from, mentionUser)
        break
      case 'add':
        if (isBanned) return reply(mess.ban)
        if (isBanchat) return
        if (!isGroup) return reply("Khusus di grup");
        if (!isGroupAdmins && !Ramdanif.key.fromMe) return reply("Khusus admin");
        if (Ramdanif.message.extendedTextMessage === null || Ramdanif.message.extendedTextMessage === undefined) {
          entah = arg.split("|")[0]
          entah = entah.replace(new RegExp("[()+-/ +/]", "gi"), "")
          entah = `${entah}@s.whatsapp.net`
          Ramdani.groupAdd(from, [entah])
        } else {
          entah = Ramdanif.message.extendedTextMessage.contextInfo.participant
          Ramdani.groupAdd(from, [entah])
        }
        break

      case "demote":
        if (isBanned) return reply(mess.ban)
        if (isBanchat) return
        if (!Ramdanif.key.fromMe && !isGroupAdmins) return reply("Admin Group Only");
        if (!isGroup) return;
        if (!isBotGroupAdmins) return reply("Bot not admin");
        Ramdani.groupDemoteAdmin(from, mentionUser)
        break;
      case "promote":
        if (isBanned) return reply(mess.ban)
        if (isBanchat) return
        if (!Ramdanif.key.fromMe && !isGroupAdmins) return reply("Admin Group Only");
        if (!isGroup) return;
        if (!isBotGroupAdmins) return reply("Bot not admin");
        Ramdani.groupMakeAdmin(from, mentionUser)
        break;
      case 'tqtq':
        if (isBanned) return reply(mess.ban)
        if (isBanchat) return
        stod = `${sender}`
        listMsg = {
          buttonText: 'CLICK HERE',
          footerText: 'ALL DEVELOPER',
          description: `MEREKA ADALAH ORANG YANG IKUT SERTA DALAM\nDALAM MEMBUAT SCRIPT INI\nBIG THX TO`,
          sections: [
            {
              "title": `|---------<${jmn} - ${week} ${weton} - ${calender}>---------|`,
              rows: [

                {
                  "title": "RAMDANI OFFICIAL",
                  "description": `DEVELOPER/OWNER`,
                  "rowId": "rff"
                },
                {
                  "title": "DENIS",
                  "description": ``,
                  "rowId": "dse"
                },
                {
                  "title": "IKY",
                  "description": `MASTAH`,
                  "rowId": "HHHHH"
                },
                {
                  "title": "OTSUKA ALAN",
                  "description": ``,
                  "rowId": "ju"
                },
                {
                  "title": "DONY",
                  "description": ``,
                  "rowId": "jju"
                },
                {
                  "title": "DAPID",
                  "description": ``,
                  "rowId": "enu"
                },
                {
                  "title": "RIFZA XMOODS",
                  "description": `  `,
                  "rowId": ""
                }


              ]
            }],
          listType: 1
        }
        Ramdani.sendMessage(from, listMsg, MessageType.listMessage, { contextInfo: { mentionedJid: [stod] }, quoted: ftroli })
        break
      ///Batas list menu cas
      case 'tesig':
        replylinkig('Ramdaniganteng wo')
      case 'public':
        if (isBanned) return reply(mess.ban)
        if (isBanchat) return
        if (!Ramdanif.key.fromMe) return
        if (banChats === false) return
        banChats = false
        reply(' ```「 PUBLIC MODE 」``` ')
        break
      case 'tes':
        timestampe = speed();
        latensie = speed() - timestampe
        const jumlahUser = _registered.push(sender)
        const hit = hit_today.push(command)
        wibu = `*BOT AKTIF*`
        sendButMessage(from, wibu, `\nRuntime : *${runtime(process.uptime())}*\nSpeed : *${latensie.toFixed(4)} _Second_*\nTotal User : ${jumlahUser}\nHit Bot : ${hit}\nKlik Menu Untuk Menampilkan Menu Bot`, [
          {
            buttonId: `${prefix}menu`,
            buttonText: {
              displayText: `MENU`,
            },
            type: 1,
          },]);
        break;

      case 'menu':
      case 'help':
      case 'm':
      case 'h':
      case 'danz':
        const boy = "6289512545999@s.whatsapp.net"
        const filename = `@${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
        const nomoruser = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
        parseMention = (text = '') => {
          return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
        }
        totalChat = await Ramdani.chats.all()
        groups = Ramdani.chats.array.filter(v => v.jid.endsWith('g.us'))
        privat = Ramdani.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
        total = math(`${groups.length}*${privat.length}`)
        timestampe = speed();
        latensie = speed() - timestampe
        menu = `halo kak saya ${control.NamaBot}`
        buttons = [{ buttonId: `${prefix}command`, buttonText: { displayText: 'sɪᴍᴘʟᴇ ᴍᴇɴᴜ' }, type: 1 }, { buttonId: `${prefix}donate`, buttonText: { displayText: 'ᴅᴏɴᴀsɪ' }, type: 1 }]

        imageMsg = (await Ramdani.prepareMessageMedia(fs.readFileSync(`./foto/Ramdani.jpg`), 'imageMessage', { thumbnail: fs.readFileSync(`./foto/Ramdani.jpg`) })).imageMessage

        buttonsMessage = {
          contentText: `${menu}`,
          footerText:
            `Hallo Kak👋 ${pushname} ${ucapanWaktu}

Call / VC Bot = Self/Block
Spam Bot = Ban + Block

*Group Support*💬
• *https://chat.whatsapp.com/Loc6xVYLGnwHm9vuz6hZe7*
• *https://chat.whatsapp.com/I4qx9yNFPXP6cGP7Q1zBhq*
• *https://chat.whatsapp.com/IbGdZllhP0Q92BJrOwvOLK*

*Support Me*❤️
• *https://youtube.com/channel/UCB157jomCne961WzYHpG4gg*


*Rest Api*
• *https://ramdaniofficial-api.herokuapp.com*
• *https://kahfz-api.herokuapp.com*
• *https://dapuhy.xyz/*
• *https://api.zacros.my.id/*
• *https://bx-hunter.herokuapp.com/*
• *https://api-alphabot.herokuapp.com/*
• *http://hardianto.xyz/*
• *https://api.zeks.me/*
• *https://nathan-web.xyz*
• *https://killuaapi89.herokuapp.com/*
• *https://api-alya.herokuapp.com/*
• *https://apidhani.herokuapp.com/*


*Web*
• *Xnxx.com*
• *4evorproxy.com*

*Sosial Media Creator* 
• *Website : https://ramdaniofficial.blogspot.com/?m=1*
• *Github : https://github.com/Ramdanistore*
• *Heroku : https://heroku.com/Ramdaniofficial*
• *WhatsApp  : http://wa.me/6289512545999*
• *Youtube : https://youtube.com/channel/UCB157jomCne961WzYHpG4gg*
• *Facebook : https://www.facebook.com/profile.php?id=100055274594084*
• *Instagram : https://www.instagram.com/muhammadramdani196453*
• *Twitter : https://mobile.twitter.com/Muhamma56633691*


*Thanks to*
• *Allah swt.*
• *Nabi Muhammad saw.*
• *Creator bot*
• *Developer WhatsApp*
• *Ramdani Official (cupuuuuuu)*
• *KahfzXzy (mastah)*
• *Siegrin (mastah)*
• *Kurr XD (mastah)*
• *Mhankbarbar (big mastah)*
• *Lexxy official*
• *Herman chanel*
• *Yanz bot*
• *All creator bot*`, imageMessage: imageMsg,
          buttons: buttons,
          headerType: 4
        }

        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, {
          quoted: ftroli, contextInfo: {
            mentionedJid: parseMention(menu), externalAdReply: {
              title: `halo kak👋 ${pushname} `,
              body: `${ucapanWaktu} Semoga harimu menyenangkan`,
              mediaType: 2,
              mediaUrl: "https://www.instagram.com/muhammadramdani196453",
              thumbnail: fs.readFileSync('./foto/menu.jpg'),
            }, forwardingScore: 508, isForwarded: true, mentionedJid: [Tag + '@s.whatsapp.net', senderr]                        
          }
        })
        Ramdani.relayWAMessage(prep)
        break
      case 'command':
      case 'c':
        stod = `${sender}`
        listMsg = {
          buttonText: 'Click Here',
          footerText: `© Creator By Ramdani Official`,
          description: `hallo kak silahkan pilih disini kak, jangan spam ya kak`,
          sections: [
            {
              "title": `Jangan Lupa Donasi Ya Jing`,
              rows: [

                {
                  "title": "DONASI",
                  "description": `Menampilkan Donasi`,
                  "rowId": "/donate"
                },
                {
                  "title": "OWNER",
                  "description": `Menampilkan No Owner Bot`,
                  "rowId": "/owner"
                },
                {
                  "title": "STORE MENU",
                  "description": `Menampilkan Store Menu`,
                  "rowId": "/storemenu"
                },
                {
                  "title": "ALLMENU",
                  "description": `Menampilkan Semua Menu`,
                  "rowId": "/allmenu"
                },
                {
                  "title": "GROUP MENU",
                  "description": `Menampilkan Group Menu`,
                  "rowId": "/grupmenu"
                },
                {
                  "title": "DOWNLOAD MENU",
                  "description": `Menampilkan Download Menu`,
                  "rowId": "/downloadmenu"
                },
                {
                  "title": "OWNER MENU",
                  "description": `Menampilkan Owner Menu`,
                  "rowId": "/ownermenu"
                },
                {
                  "title": "APK MENU",
                  "description": `Menampilkan Apk Menu`,
                  "rowId": "/apkmenu"
                },
                {
                  "title": "RPG MENU",
                  "description": `Perang perangan`,
                  "rowId": "/rpgmenu"
                },
                {
                  "title": "GAME MENU",
                  "description": `Menampilkan Game Menu`,
                  "rowId": "/gamemenu"
                },
                {
                  "title": "ANONYMOUS",
                  "description": `Menampilkan Anonymous Menu`,
                  "rowId": "/anon"
                },
                {
                  "title": "KERANG MENU",
                  "description": `Menampilkan Kerang Menu`,
                  "rowId": "/kerangmenu"
                },
                {
                  "title": "MAKER MENU",
                  "description": `Menampilkan Maker Menu`,
                  "rowId": "/makermenu"
                },
                {
                  "title": "FUN MENU",
                  "description": `Menampilkan Fun Menu`,
                  "rowId": "/funmenu"
                },
                {
                  "title": "ISLAM MENU",
                  "description": `Menampilkan Islam Menu`,
                  "rowId": "/islammenu"
                },
                {
                  "title": "ANIME MENU",
                  "description": `Menampikan Anime menu`,
                  "rowId": "/animemenu"
                },
                {
                  "title": "EPHOTO 360",
                  "description": `Menampilkan Ephoto 360 Menu`,
                  "rowId": "/ephoto360"
                },
                {
                  "title": "EPHOTO OXY",
                  "description": `Menampikan Ephoto Oxy Menu`,
                  "rowId": "/ephotooxy"
                },
                {

                  "title": "INFO MENU",
                  "description": `Menampikan Info Menu`,
                  "rowId": "/infomenu"
                },
                {
                  "title": "FILM MENU",
                  "description": `Menampikan Film Menu`,
                  "rowId": "/filmmenu"
                },
                {
                  "title": "OTHER MENU",
                  "description": `Menampikan Other Menu`,
                  "rowId": "/othermenu"
                },
                {
                  "title": "BERBURU & MALING",
                  "description": `Menampikan Berburu & Maling Menu`,
                  "rowId": "/tembakmenu"
                },
                {
                  "title": "HEWAN MENU",
                  "description": `Menampikan Hewan Menu`,
                  "rowId": "/hewanmenu"
                },
                {
                  "title": "KARTUN MENU",
                  "description": `Menampikan Kartun Menu`,
                  "rowId": "/kartunmenu"
                },
                {
                  "title": "STALK MENU",
                  "description": `Menampikan Stalk Menu`,
                  "rowId": "/stalkmenu"
                },
                {
                  "title": "RANDOM TEXT",
                  "description": `Menampikan Random Text`,
                  "rowId": "/randomtext"
                },
                {
                  "title": "RANDOM IMAGE",
                  "description": `Menampikan Random Image`,
                  "rowId": "/randomimage"
                },
                {
                  "title": "RANDOM TAG",
                  "description": `Menampikan Random Tag`,
                  "rowId": "/randomtag"
                },
                {
                  "title": "SEARCH MENU",
                  "description": `Menampikan Search Menu`,
                  "rowId": "/searchmenu"
                },
                {
                  "title": "KOREA MENU",
                  "description": `Menampikan Korea Menu`,
                  "rowId": "/koreamenu"
                },
                {
                  "title": "CECAN MENU",
                  "description": `Menampikan Cecan Menu`,
                  "rowId": "/cecanmenu"
                },
                {
                  "title": "COGAN MENU",
                  "description": `Menampikan Cogan Menu`,
                  "rowId": "/coganmenu"
                },
                {
                  "title": "CONVERT MENU",
                  "description": `Menampikan Convert Menu`,
                  "rowId": "/convertmenu"
                },
                {
                  "title": "MEME MAKER",
                  "description": `Menampikan Meme Maker`,
                  "rowId": "/mememaker"
                },
                {
                  "title": "EDITOR MENU",
                  "description": `Menampikan Editor Menu`,
                  "rowId": "/editormenu"
                },
                {
                  "title": "NULIS MENU",
                  "description": `Menampikan Nulis Menu`,
                  "rowId": "/nulismenu"
                },
                {
                  "title": "ANIMANGA",
                  "description": `Menampikan Animanga`,
                  "rowId": "/animanga"
                },
                {
                  "title": "SOUND MENU",
                  "description": `Menampikan Sound Menu`,
                  "rowId": "/soundmenu"
                }
                









              ]
            }],
          listType: 1
        }
        Ramdani.sendMessage(from, listMsg, MessageType.listMessage, { contextInfo: { mentionedJid: [stod] }, quoted: ftroli })
        break
      //case 'allmenu':
      //case 'allfitur':
        uptime = process.uptime();
        timestampe = speed();
        latensie = speed() - timestampe
        yuu = `${runtime(process.uptime())}`
        buf = fs.readFileSync('./foto/menu.jpg'),
          imeu = await Ramdani.prepareMessage('0@s.whatsapp.net', buf, image)
        imeg = imeu.message.imageMessage
        res = await Ramdani.prepareMessageFromContent(from, {
          "productMessage": {
            "product": {
              "productImage": imeg,
              "productId": "150453297177375",
              "title": `*ALLMENU RAMDANI BOTZ*`,
              "description": `MENU NYA
`,
              "currencyCode": "SEWABOT =",
              "priceAmount1000": "20000 manen",
              "productImageCount": 3
            },
            "businessOwnerJid": "6289512545999@s.whatsapp.net",
            "contextInfo": {
              "forwardingScore": 500,
              "isForwarded": true
            }
          }
        }, { thumbnail: Buffer.alloc(0), quoted: freply, contextInfo: {} })

        Ramdani.relayWAMessage(res)
        break
        /////ALLL MENU BUATAN RAMDANI
        case 'allmenu':
allmenu = fs.readFileSync('./media/audio/desah.mp3')
reply(`╭──⬣「APK MENU 」⬣
│❏ヅ ${prefix}happymod text
│❏ヅ ${prefix}apkdone text
│❏ヅ ${prefix}apkgoogle text
│❏ヅ ${prefix}apkmody text 
│❏ヅ ${prefix}apkshub text
│❏ヅ ${prefix}apksolo text
│❏ヅ ${prefix}hostapk text
│❏ヅ ${prefix}revdl text 
│❏ヅ ${prefix}toraccino text 
│❏ヅ ${prefix}uapkpro text
└──⬣「 ${botname} 」⬣
  
╭──⬣「DOWNLOAD MENU」⬣
│❏ヅ ${prefix}joox query
│❏ヅ ${prefix}play query
│❏ヅ ${prefix}ytsearch query
│❏ヅ ${prefix}video url_video
│❏ヅ ${prefix}fb url_video
│❏ヅ ${prefix}ig url_video
│❏ヅ ${prefix}twitter url_video
│❏ヅ ${prefix}youtube url_video
│❏ヅ ${prefix}ythd url_video
│❏ヅ ${prefix}ytmp3 url_video
│❏ヅ ${prefix}ytmp4 url_video 
│❏ヅ ${prefix}tiktok url_video
│❏ヅ ${prefix}tiktoknowm url_video
│❏ヅ ${prefix}wattpadsearch query
│❏ヅ ${prefix}spotifysearch query
│❏ヅ ${prefix}spotify url_video
│❏ヅ ${prefix}mediafire url 
│❏ヅ ${prefix}zippyshare url 
└──⬣「 ${botname} 」⬣
   
╭──⬣「FUN MENU」⬣
│❏ヅ ${prefix}darkjoke
│❏ヅ ${prefix}meme
│❏ヅ ${prefix}citacita
│❏ヅ ${prefix}truthdare
│❏ヅ ${prefix}truth
│❏ヅ ${prefix}toxic
│❏ヅ ${prefix}dare
│❏ヅ ${prefix}waktu
└──⬣「 ${botname} 」⬣
  
╭──⬣「GROUP MENU」⬣
│❏ヅ ${prefix}antilink
│❏ヅ ${prefix}welcome enable/disable
│❏ヅ ${prefix}antivirtex
│❏ヅ ${prefix}leveling
│❏ヅ ${prefix}simi
│❏ヅ ${prefix}kick
│❏ヅ ${prefix}add
│❏ヅ ${prefix}promote
│❏ヅ ${prefix}demote
│❏ヅ ${prefix}grupsetting
│❏ヅ ${prefix}opengc
│❏ヅ ${prefix}closegc
│❏ヅ ${prefix}revoke
│❏ヅ ${prefix}setppgrup
│❏ヅ ${prefix}setdesc
│❏ヅ ${prefix}setnamegrup
│❏ヅ ${prefix}tagall
└──⬣「 ${botname} 」⬣
  
╭──⬣「MAKER MENU」⬣
│❏ヅ ${prefix}blackpink text
│❏ヅ ${prefix}neon text
│❏ヅ ${prefix}greenneon text
│❏ヅ ${prefix}advanceglow text
│❏ヅ ${prefix}futureneon text
│❏ヅ ${prefix}sandwriting text
│❏ヅ ${prefix}sandsummer text
│❏ヅ ${prefix}sandengraved text
│❏ヅ ${prefix}metaldark text
│❏ヅ ${prefix}neonlight text
│❏ヅ ${prefix}holographic text
│❏ヅ ${prefix}text1917 text
│❏ヅ ${prefix}minion text
│❏ヅ ${prefix}deluxesilver text
│❏ヅ ${prefix}newyearcard text
│❏ヅ ${prefix}bloodfrosted text
│❏ヅ ${prefix}halloween text
│❏ヅ ${prefix}jokerlogo text
│❏ヅ ${prefix}fireworksparkle text
│❏ヅ ${prefix}natureleaves text
│❏ヅ ${prefix}bokeh text
│❏ヅ ${prefix}toxic text
│❏ヅ ${prefix}box3d text
│❏ヅ ${prefix}roadwarning text
│❏ヅ ${prefix}breakwall text
│❏ヅ ${prefix}icecold text
│❏ヅ ${prefix}luxury text
│❏ヅ ${prefix}cloud text
│❏ヅ ${prefix}summersand text
│❏ヅ ${prefix}horrorblood text
│❏ヅ ${prefix}thunder text
│❏ヅ ${prefix}pornhub text1 text2
│❏ヅ ${prefix}glitch text1 text2
│❏ヅ ${prefix}avenger text1 text2
│❏ヅ ${prefix}space text1 text2
│❏ヅ ${prefix}ninjalogo text1 text2
│❏ヅ ${prefix}marvelstudio text1 text2
│❏ヅ ${prefix}lionlogo text1 text2
│❏ヅ ${prefix}wolflogo text1 text2
│❏ヅ ${prefix}steel3d text1 text2
│❏ヅ ${prefix}wallgravity text1 text2
└──⬣「 ${botname} 」⬣
  
╭──⬣「OWNER MENU」⬣
│❏ヅ ${prefix}broadcast
│❏ヅ ${prefix}reset
│❏ヅ ${prefix}exif
│❏ヅ ${prefix}join
│❏ヅ ${prefix}clearall
└──⬣「 ${botname} 」⬣
  
╭──⬣「KERANG MENU」⬣
│❏ヅ ${prefix}watak
│❏ヅ ${prefix}apakah
│❏ヅ ${prefix}bisakah
│❏ヅ ${prefix}kapankah
│❏ヅ ${prefix}rate
│❏ヅ ${prefix}jadian2
│❏ヅ ${prefix}beban
│❏ヅ ${prefix}babi
│❏ヅ ${prefix}wangy
│❏ヅ ${prefix}cekwatak
│❏ヅ ${prefix}cekganteng
│❏ヅ ${prefix}cekcantik
│❏ヅ ${prefix}cekmati *Nama*
└──⬣「 ${botname} 」⬣
  
╭──⬣「RPG MENU」⬣
│❏ヅ ${prefix}adventure *memulai*
│❏ヅ ${prefix}usepotion *memakai potion*
│❏ヅ ${prefix}heal  *cek heal*
│❏ヅ ${prefix}potion *cek potion*  
└──⬣「 ${botname} 」⬣ 
  
╭──⬣「ISLAM MENU」⬣
│❏ヅ ${prefix}alquranaudio
│❏ヅ ${prefix}asmaulhusna
│❏ヅ ${prefix}kisahnabi
│❏ヅ ${prefix}jadwalsholat
└──⬣「 ${botname} 」⬣
   
╭──⬣「ANIME MENU」⬣
│❏ヅ ${prefix}itsuki
│❏ヅ ${prefix}nino
│❏ヅ ${prefix}yotsuba
│❏ヅ ${prefix}naruto
│❏ヅ ${prefix}mikasa
│❏ヅ ${prefix}eren
│❏ヅ ${prefix}titan
│❏ヅ ${prefix}levi
│❏ヅ ${prefix}sakura
│❏ヅ ${prefix}hinata
│❏ヅ ${prefix}minato
│❏ヅ ${prefix}jiraya
│❏ヅ ${prefix}tsunade
│❏ヅ ${prefix}kiba
│❏ヅ ${prefix}armin
│❏ヅ ${prefix}bertholdt
│❏ヅ ${prefix}erwin
│❏ヅ ${prefix}reiner
│❏ヅ ${prefix}annie
│❏ヅ ${prefix}hanji
│❏ヅ ${prefix}jean
│❏ヅ ${prefix}connie
│❏ヅ ${prefix}historia
│❏ヅ ${prefix}sasha
│❏ヅ ${prefix}boruto
│❏ヅ ${prefix}sarada
│❏ヅ ${prefix}sasuke
│❏ヅ ${prefix}madara
│❏ヅ ${prefix}obito
│❏ヅ ${prefix}kanao
│❏ヅ ${prefix}sayu
│❏ヅ ${prefix}yoshida
│❏ヅ ${prefix}airi
│❏ヅ ${prefix}asami
│❏ヅ ${prefix}yuzuha
│❏ヅ ${prefix}hashimoto
│❏ヅ ${prefix}tanLarasCans
│❏ヅ ${prefix}nezuko
│❏ヅ ${prefix}ichika
│❏ヅ ${prefix}luffy
│❏ヅ ${prefix}zenitsu
│❏ヅ ${prefix}giyu
│❏ヅ ${prefix}sakonji
│❏ヅ ${prefix}inosuke
│❏ヅ ${prefix}zoro
│❏ヅ ${prefix}sanji
│❏ヅ ${prefix}sagiri
│❏ヅ ${prefix}killua
│❏ヅ ${prefix}taiko
│❏ヅ ${prefix}natsu
│❏ヅ ${prefix}genos
│❏ヅ ${prefix}saitama
│❏ヅ ${prefix}miku
└──⬣「 ${botname} 」⬣
  
╭──⬣「EPHOTO 360」⬣
│❏ヅ ${prefix}shadow text
│❏ヅ ${prefix}cup text
│❏ヅ ${prefix}cup1 text
│❏ヅ ${prefix}romance text 
│❏ヅ ${prefix}smoke text
│❏ヅ ${prefix}burnpaper text
│❏ヅ ${prefix}lovemessage text
│❏ヅ ${prefix}undergrass text 
│❏ヅ ${prefix}love text 
│❏ヅ ${prefix}coffe text
│❏ヅ ${prefix}woodheart text
│❏ヅ ${prefix}woodenboard text
│❏ヅ ${prefix}summer3d text
│❏ヅ ${prefix}wolfmetal text
│❏ヅ ${prefix}nature3d text
│❏ヅ ${prefix}underwater text
│❏ヅ ${prefix}golderrose text
│❏ヅ ${prefix}summernature text
│❏ヅ ${prefix}letterleaves text
│❏ヅ ${prefix}glowingneon text
│❏ヅ ${prefix}fallleaves text
│❏ヅ ${prefix}flamming text
│❏ヅ ${prefix}harrypotter text
│❏ヅ ${prefix}carvedwood text
│❏ヅ ${prefix}arcade8bit text
│❏ヅ ${prefix}battlefield4 text1 text2 
│❏ヅ ${prefix}pubg text1 text2
└──⬣「 ${botname} 」⬣
     
╭──⬣「HEWAN MENU」⬣
│❏ヅ ${prefix}fox
│❏ヅ ${prefix}panda
│❏ヅ ${prefix}panda2
│❏ヅ ${prefix}bird
│❏ヅ ${prefix}dog
│❏ヅ ${prefix}cat
│❏ヅ ${prefix}koala
└──⬣「 ${botname} 」⬣
  
╭──⬣「EPHOTO OXY」⬣
│❏ヅ ${prefix}wetglass text
│❏ヅ ${prefix}multicolor3d text
│❏ヅ ${prefix}watercolor text
│❏ヅ ${prefix}luxurygold text
│❏ヅ ${prefix}galaxywallpaper text
│❏ヅ ${prefix}lighttext text
│❏ヅ ${prefix}beautifulflower text
│❏ヅ ${prefix}puppycute text 
│❏ヅ ${prefix}royaltext text 
│❏ヅ ${prefix}heartshaped text
│❏ヅ ${prefix}birthdaycake text
│❏ヅ ${prefix}galaxystyle text
│❏ヅ ${prefix}hologram3d text
│❏ヅ ${prefix}greenneon text
│❏ヅ ${prefix}glossychrome text
│❏ヅ ${prefix}greenbush text
│❏ヅ ${prefix}metallogo text
│❏ヅ ${prefix}noeltext text
│❏ヅ ${prefix}glittergold text
│❏ヅ ${prefix}textcake text
│❏ヅ ${prefix}starsnight text
│❏ヅ ${prefix}wooden3d text
│❏ヅ ${prefix}textbyname text
│❏ヅ ${prefix}writegalacy text
│❏ヅ ${prefix}galaxybat text
│❏ヅ ${prefix}snow3d text
│❏ヅ ${prefix}birthdayday text
│❏ヅ ${prefix}goldplaybutton text
│❏ヅ ${prefix}silverplaybutton text
│❏ヅ ${prefix}freefire text 
└──⬣「 ${botname} 」⬣
  
╭──⬣「FILM & STORY」⬣
│❏ヅ ${prefix}wattpad
│❏ヅ ${prefix}wattpadsearch
│❏ヅ ${prefix}drakorongoing
│❏ヅ ${prefix}genshinsearch
└──⬣「 ${botname} 」⬣
      
╭──⬣「INFO MENU」⬣
│❏ヅ ${prefix}infogempa
│❏ヅ ${prefix}coronaglobal
│❏ヅ ${prefix}wikipedia
│❏ヅ ${prefix}newsinfo
│❏ヅ ${prefix}cuaca
│❏ヅ ${prefix}infobeasiswa
│❏ヅ ${prefix}hoax
│❏ヅ ${prefix}kbbi
│❏ヅ ${prefix}jadwaltvnow
│❏ヅ ${prefix}jadwalbola
└──⬣「 ${botname} 」⬣
      
  ┌───「OTHER MENU」⬣
│❏ヅ ${prefix}translate
│❏ヅ ${prefix}lirik
│❏ヅ ${prefix}jarak
│❏ヅ ${prefix}heroml
└──⬣「 ${botname} 」⬣         
         
╭──⬣「TEMBAK MENU」⬣
│❏ヅ ${prefix}tembak darat
│❏ヅ ${prefix}tembak laut
│❏ヅ ${prefix}tembak udara
│❏ヅ ${prefix}maling rumah
│❏ヅ ${prefix}maling gedung
└──⬣「 ${botname} 」⬣
  
╭──⬣「RANDOM TEXT」⬣
│❏ヅ ${prefix}quotes
│❏ヅ ${prefix}quotesanime
│❏ヅ ${prefix}quotesdilan
│❏ヅ ${prefix}quotesimage
│❏ヅ ${prefix}faktaunik
│❏ヅ ${prefix}katabijak
│❏ヅ ${prefix}bucin
│❏ヅ ${prefix}pantun
│❏ヅ ${prefix}randomnama
└──⬣「 ${botname} 」⬣
    
╭──⬣「RANDOM IMAGE」⬣
│❏ヅ ${prefix}art
│❏ヅ ${prefix}bts
│❏ヅ ${prefix}exo
│❏ヅ ${prefix}elf
│❏ヅ ${prefix}neko
│❏ヅ ${prefix}waifu
│❏ヅ ${prefix}shota
│❏ヅ ${prefix}husbu
│❏ヅ ${prefix}shinobu
│❏ヅ ${prefix}megumin
│❏ヅ ${prefix}wallnime
└──⬣「 ${botname} 」⬣
    
╭──⬣「KARTUN MENU」⬣
│❏ヅ ${prefix}kartundrama
│❏ヅ ${prefix}kartunadventure    
│❏ヅ ${prefix}kartunaction
│❏ヅ ${prefix}kartunmovie
└──⬣「 ${botname} 」⬣
   
╭──⬣「MEME MAKER」⬣
│❏ヅ ${prefix}meme1
│❏ヅ ${prefix}meme2
│❏ヅ ${prefix}meme3
│❏ヅ ${prefix}cmm
│❏ヅ ${prefix}ohno
└──⬣「 ${botname} 」⬣
    
╭──⬣「STALK MENU」⬣
│❏ヅ ${prefix}twiterstalk
│❏ヅ ${prefix}igstalk 
│❏ヅ ${prefix}mlstalk
└──⬣「 ${botname} 」⬣
  
╭──⬣「CONVERT MENU」⬣
│❏ヅ ${prefix}sticker
│❏ヅ ${prefix}toimg
│❏ヅ ${prefix}tourl
│❏ヅ ${prefix}slow
│❏ヅ ${prefix}gemuk
│❏ヅ ${prefix}gemuk2
│❏ヅ ${prefix}bass
│❏ヅ ${prefix}ghost
│❏ヅ ${prefix}hode
│❏ヅ ${prefix}nightcore
│❏ヅ ${prefix}fast
│❏ヅ ${prefix}tupai
│❏ヅ ${prefix}tupai2
│❏ヅ ${prefix}blub
└──⬣「 ${botname} 」⬣
  
╭──⬣「CECAN MENU」⬣
│❏ヅ ${prefix}cecanindo
│❏ヅ ${prefix}cecanmalysia
│❏ヅ ${prefix}cecanjapan
│❏ヅ ${prefix}cecanchina
│❏ヅ ${prefix}cecankorea
└──⬣「 ${botname} 」⬣
  
╭──⬣「COGAN MENU」⬣
│❏ヅ ${prefix}coganindo
│❏ヅ ${prefix}coganmalaysia
│❏ヅ ${prefix}coganjapan
│❏ヅ ${prefix}coganchina
│❏ヅ ${prefix}cogankorea
└──⬣「 ${botname} 」⬣
  
╭──⬣「SEARCH MENU」⬣
│❏ヅ ${prefix}image
│❏ヅ ${prefix}gimage2
│❏ヅ ${prefix}konachan
│❏ヅ ${prefix}wallpapersearch
│❏ヅ ${prefix}wallpapersearch2
│❏ヅ ${prefix}shopee
└──⬣「 ${botname} 」⬣
  
╭──⬣「KOREA MENU」⬣
│❏ヅ ${prefix}blackpinkk
│❏ヅ ${prefix}twice
│❏ヅ ${prefix}lovely
│❏ヅ ${prefix}lightsum
│❏ヅ ${prefix}bugaboo
│❏ヅ ${prefix}rainbow
│❏ヅ ${prefix}majors
│❏ヅ ${prefix}secret
│❏ヅ ${prefix}pixy
└──⬣「 ${botname} 」⬣
  
╭──⬣「ABOUT MENU」⬣
│❏ヅ ${prefix}speed
│❏ヅ ${prefix}runtime 
│❏ヅ ${prefix}owner
│❏ヅ ${prefix}botstatus
│❏ヅ ${prefix}rules
└──⬣「 ${botname} 」⬣
          
╭──⬣「EDITOR MENU」⬣
│❏ヅ ${prefix}affect
│❏ヅ ${prefix}blur
│❏ヅ ${prefix}rip
│❏ヅ ${prefix}trash
│❏ヅ ${prefix}wasted
│❏ヅ ${prefix}wasted2
│❏ヅ ${prefix}glass
│❏ヅ ${prefix}invert
│❏ヅ ${prefix}sepia
│❏ヅ ${prefix}circle
│❏ヅ ${prefix}wanted
│❏ヅ ${prefix}joker
└──⬣「 ${botname} 」⬣
`)
Ramdani.sendMessage(from, allmenu, audio, { mimetype: 'audio/mp4', ptt: true, quoted: ftroli })
break
      ///Batas list menu case
      case 'kerangmenu':
        sendButLocation(from, kerangmenu(prefix, botName), `BY Ramdani`, { jpegThumbnail: await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/lighttext?apikey=${control.lolkey}&text=${command}`) }, [{ buttonId: `${prefix}menu`, buttonText: { displayText: `${control.NamaBot}` }, type: 1 }], { contextInfo: { mentionedJid: [senderr,] } })
        break
      case 'rules':
        Ramdani.sendMessage(from, rules(prefix), MessageType.text, { quoted: ftroli })
        break
        case 'help':
          Ramdani.sendMessage(from, rules(prefix), MessageType.text, { quoted: ftroli })
          break
      case 'downloadmenu':
        sendButLocation(from, downloadmenu(prefix, botName), `BY Ramdani`, { jpegThumbnail: await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/lighttext?apikey=${control.lolkey}&text=${command}`) }, [{ buttonId: `${prefix}menu`, buttonText: { displayText: `${control.NamaBot}` }, type: 1 }], { contextInfo: { mentionedJid: [senderr,] } })
        break
      case 'animemenu':
        sendButLocation(from, animemenu(prefix, botName), `BY Ramdani`, { jpegThumbnail: await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/lighttext?apikey=${control.lolkey}&text=${command}`) }, [{ buttonId: `${prefix}menu`, buttonText: { displayText: `${control.NamaBot}` }, type: 1 }], { contextInfo: { mentionedJid: [senderr,] } })
        break
      case 'tembakmenu':
        sendButLocation(from, tembakmenu(prefix, botName), `BY Ramdani`, { jpegThumbnail: await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/lighttext?apikey=${control.lolkey}&text=${command}`) }, [{ buttonId: `${prefix}menu`, buttonText: { displayText: `${control.NamaBot}` }, type: 1 }], { contextInfo: { mentionedJid: [senderr,] } })
        break
      case 'othermenu':
        sendButLocation(from, othermenu(prefix, botName), `BY Ramdani`, { jpegThumbnail: await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/lighttext?apikey=${control.lolkey}&text=${command}`) }, [{ buttonId: `${prefix}menu`, buttonText: { displayText: `${control.NamaBot}` }, type: 1 }], { contextInfo: { mentionedJid: [senderr,] } })
        break
      case 'grupmenu':
        sendButLocation(from, grupmenu(prefix, botName), `BY Ramdani`, { jpegThumbnail: await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/lighttext?apikey=${control.lolkey}&text=${command}`) }, [{ buttonId: `${prefix}menu`, buttonText: { displayText: `${control.NamaBot}` }, type: 1 }], { contextInfo: { mentionedJid: [senderr,] } })
        break
        case 'randomtag':
        sendButLocation(from, randomtag(prefix, botName), `BY Ramdani`, { jpegThumbnail: await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/lighttext?apikey=${control.lolkey}&text=${command}`) }, [{ buttonId: `${prefix}menu`, buttonText: { displayText: `${control.NamaBot}` }, type: 1 }], { contextInfo: { mentionedJid: [senderr,] } })
        break
      case 'randomimage':
        sendButLocation(from, randomimage(prefix, botName), `BY Ramdani`, { jpegThumbnail: await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/lighttext?apikey=${control.lolkey}&text=${command}`) }, [{ buttonId: `${prefix}menu`, buttonText: { displayText: `${control.NamaBot}` }, type: 1 }], { contextInfo: { mentionedJid: [senderr,] } })
        break
      case 'gamemenu':
        sendButLocation(from, gamemenu(prefix, botName), `BY Ramdani`, { jpegThumbnail: await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/lighttext?apikey=${control.lolkey}&text=${command}`) }, [{ buttonId: `${prefix}menu`, buttonText: { displayText: `${control.NamaBot}` }, type: 1 }], { contextInfo: { mentionedJid: [senderr,] } })
        break
        case 'nulismenu':
        sendButLocation(from, nulismenu(prefix, botName), `BY Ramdani`, { jpegThumbnail: await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/lighttext?apikey=${control.lolkey}&text=${command}`) }, [{ buttonId: `${prefix}menu`, buttonText: { displayText: `${control.NamaBot}` }, type: 1 }], { contextInfo: { mentionedJid: [senderr,] } })
        break
        case 'animanga':
        sendButLocation(from, animanga(prefix, botName), `BY Ramdani`, { jpegThumbnail: await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/lighttext?apikey=${control.lolkey}&text=${command}`) }, [{ buttonId: `${prefix}menu`, buttonText: { displayText: `${control.NamaBot}` }, type: 1 }], { contextInfo: { mentionedJid: [senderr,] } })
        break
      case 'anon':
        sendButLocation(from, anonymous(prefix, botName), `BY Ramdani`, { jpegThumbnail: await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/lighttext?apikey=${control.lolkey}&text=${command}`) }, [{ buttonId: `${prefix}menu`, buttonText: { displayText: `${control.NamaBot}` }, type: 1 }], { contextInfo: { mentionedJid: [senderr,] } })
        break
      case 'rpgmenu':
        sendButLocation(from, rpgmenu(prefix, botName), `BY Ramdani`, { jpegThumbnail: await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/lighttext?apikey=${control.lolkey}&text=${command}`) }, [{ buttonId: `${prefix}menu`, buttonText: { displayText: `${control.NamaBot}` }, type: 1 }], { contextInfo: { mentionedJid: [senderr,] } })
        break
      case 'soundmenu':
        sendButLocation(from, soundmenu(prefix, botName), `BY Ramdani`, { jpegThumbnail: await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/lighttext?apikey=${control.lolkey}&text=${command}`) }, [{ buttonId: `${prefix}menu`, buttonText: { displayText: `${control.NamaBot}` }, type: 1 }], { contextInfo: { mentionedJid: [senderr,] } })
        break
      case 'editormenu':
        sendButLocation(from, editormenu(prefix, botName), `BY Ramdani`, { jpegThumbnail: await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/lighttext?apikey=${control.lolkey}&text=${command}`) }, [{ buttonId: `${prefix}menu`, buttonText: { displayText: `${control.NamaBot}` }, type: 1 }], { contextInfo: { mentionedJid: [senderr,] } })
        break
      case 'koreamenu':
        sendButLocation(from, koreamenu(prefix, botName), `BY Ramdani`, { jpegThumbnail: await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/lighttext?apikey=${control.lolkey}&text=${command}`) }, [{ buttonId: `${prefix}menu`, buttonText: { displayText: `${control.NamaBot}` }, type: 1 }], { contextInfo: { mentionedJid: [senderr,] } })
        break
      case 'coganmenu':
        sendButLocation(from, coganmenu(prefix, botName), `BY Ramdani`, { jpegThumbnail: await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/lighttext?apikey=${control.lolkey}&text=${command}`) }, [{ buttonId: `${prefix}menu`, buttonText: { displayText: `${control.NamaBot}` }, type: 1 }], { contextInfo: { mentionedJid: [senderr,] } })
        break
      case 'cecanmenu':
        sendButLocation(from, cecanmenu(prefix, botName), `BY Ramdani`, { jpegThumbnail: await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/lighttext?apikey=${control.lolkey}&text=${command}`) }, [{ buttonId: `${prefix}menu`, buttonText: { displayText: `${control.NamaBot}` }, type: 1 }], { contextInfo: { mentionedJid: [senderr,] } })
        break
      case 'convertmenu':
        sendButLocation(from, convertmenu(prefix, botName), `BY Ramdani`, { jpegThumbnail: await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/lighttext?apikey=${control.lolkey}&text=${command}`) }, [{ buttonId: `${prefix}menu`, buttonText: { displayText: `${control.NamaBot}` }, type: 1 }], { contextInfo: { mentionedJid: [senderr,] } })
        break
      case 'searchmenu':
        sendButLocation(from, searchmenu(prefix, botName), `BY Ramdani`, { jpegThumbnail: await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/lighttext?apikey=${control.lolkey}&text=${command}`) }, [{ buttonId: `${prefix}menu`, buttonText: { displayText: `${control.NamaBot}` }, type: 1 }], { contextInfo: { mentionedJid: [senderr,] } })
        break
      case 'randomvideo':
        sendButLocation(from, randomvideo(prefix, botName), `BY Ramdani`, { jpegThumbnail: await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/lighttext?apikey=${control.lolkey}&text=${command}`) }, [{ buttonId: `${prefix}menu`, buttonText: { displayText: `${control.NamaBot}` }, type: 1 }], { contextInfo: { mentionedJid: [senderr,] } })
        break
      case 'mememaker':
        sendButLocation(from, mememaker(prefix, botName), `BY Ramdani`, { jpegThumbnail: await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/lighttext?apikey=${control.lolkey}&text=${command}`) }, [{ buttonId: `${prefix}menu`, buttonText: { displayText: `${control.NamaBot}` }, type: 1 }], { contextInfo: { mentionedJid: [senderr,] } })
        break
      case 'kartunmenu':
        sendButLocation(from, kartunmenu(prefix, botName), `BY Ramdani`, { jpegThumbnail: await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/lighttext?apikey=${control.lolkey}&text=${command}`) }, [{ buttonId: `${prefix}menu`, buttonText: { displayText: `${control.NamaBot}` }, type: 1 }], { contextInfo: { mentionedJid: [senderr,] } })
        break
      case 'randomtext':
        sendButLocation(from, textrandom(prefix, botName), `BY Ramdani`, { jpegThumbnail: await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/lighttext?apikey=${control.lolkey}&text=${command}`) }, [{ buttonId: `${prefix}menu`, buttonText: { displayText: `${control.NamaBot}` }, type: 1 }], { contextInfo: { mentionedJid: [senderr,] } })
        break
      case 'stalkmenu':
        sendButLocation(from, stalkmenu(prefix, botName), `BY Ramdani`, { jpegThumbnail: await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/lighttext?apikey=${control.lolkey}&text=${command}`) }, [{ buttonId: `${prefix}menu`, buttonText: { displayText: `${control.NamaBot}` }, type: 1 }], { contextInfo: { mentionedJid: [senderr,] } })
        break
      case 'hewanmenu':
        sendButLocation(from, hewanmenu(prefix, botName), `BY Ramdani`, { jpegThumbnail: await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/lighttext?apikey=${control.lolkey}&text=${command}`) }, [{ buttonId: `${prefix}menu`, buttonText: { displayText: `${control.NamaBot}` }, type: 1 }], { contextInfo: { mentionedJid: [senderr,] } })
        break
      case 'sertimenu':
        Ramdani.sendMessage(from, sertimenu(prefix), MessageType.text, { quoted: ftroli })
        break
      case 'infomenu':
        sendButLocation(from, infomenu(prefix, botName), `BY Ramdani`, { jpegThumbnail: await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/lighttext?apikey=${control.lolkey}&text=${command}`) }, [{ buttonId: `${prefix}menu`, buttonText: { displayText: `${control.NamaBot}` }, type: 1 }], { contextInfo: { mentionedJid: [senderr,] } })
        break
      case 'filmmenu':
        Ramdani.sendMessage(from, filmmenu(prefix), MessageType.text, { quoted: ftroli })
        break
      case 'islammenu':
        sendButLocation(from, islammenu(prefix, botName), `BY Ramdani`, { jpegThumbnail: await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/lighttext?apikey=${control.lolkey}&text=${command}`) }, [{ buttonId: `${prefix}menu`, buttonText: { displayText: `${control.NamaBot}` }, type: 1 }], { contextInfo: { mentionedJid: [senderr,] } })
        break
      case 'ephotooxy':
        sendButLocation(from, ephotooxy(prefix, botName), `BY Ramdani`, { jpegThumbnail: await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/lighttext?apikey=${control.lolkey}&text=${command}`) }, [{ buttonId: `${prefix}menu`, buttonText: { displayText: `${control.NamaBot}` }, type: 1 }], { contextInfo: { mentionedJid: [senderr,] } })
        break
      case 'ephoto360':
        sendButLocation(from, ephoto360(prefix, botName), `BY Ramdani`, { jpegThumbnail: await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/lighttext?apikey=${control.lolkey}&text=${command}`) }, [{ buttonId: `${prefix}menu`, buttonText: { displayText: `${control.NamaBot}` }, type: 1 }], { contextInfo: { mentionedJid: [senderr,] } })
        break
      case 'funmenu':
        sendButLocation(from, funmenu(prefix, botName), `BY Ramdani`, { jpegThumbnail: await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/lighttext?apikey=${control.lolkey}&text=${command}`) }, [{ buttonId: `${prefix}menu`, buttonText: { displayText: `${control.NamaBot}` }, type: 1 }], { contextInfo: { mentionedJid: [senderr,] } })
        break
      case 'makermenu':
        sendButLocation(from, makermenu(prefix, botName), `BY Ramdani`, { jpegThumbnail: await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/lighttext?apikey=${control.lolkey}&text=${command}`) }, [{ buttonId: `${prefix}menu`, buttonText: { displayText: `${control.NamaBot}` }, type: 1 }], { contextInfo: { mentionedJid: [senderr,] } })
        break
      case 'apkmenu':
        sendButLocation(from, apkmenu(prefix, botName), `BY Ramdani`, { jpegThumbnail: await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/lighttext?apikey=${control.lolkey}&text=${command}`) }, [{ buttonId: `${prefix}menu`, buttonText: { displayText: `${control.NamaBot}` }, type: 1 }], { contextInfo: { mentionedJid: [senderr,] } })
        break
      case 'ownermenu':
        sendButLocation(from, ownermenu(prefix, botName), `BY Ramdani`, { jpegThumbnail: await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/lighttext?apikey=${control.lolkey}&text=${command}`) }, [{ buttonId: `${prefix}menu`, buttonText: { displayText: `${control.NamaBot}` }, type: 1 }], { contextInfo: { mentionedJid: [senderr,] } })
        break
        /////FITUR TAMBAHAN BY RAMDANI OFFICIAL
        case 'storemenu':
        case 'sm':
        stod = `${sender}`
        listMsg = {
          buttonText: 'Click Here',
          footerText: `© Creator By Ramdani Official`,
          description: `hallo kak silahkan pilih disini kak, jangan spam ya kak`,
          sections: [
            {
              "title": `Jangan Lupa Donasi Ya Jing`,
              rows: [

                {
                  "title": "TOP UP GAME",
                  "description": `Menampilkan Fitur Top Up Game`,
                  "rowId": "/topupgame"
                },
                {
                  "title": "TOP UP SALDO",
                  "description": `Menampilkan Fitur Top Up Saldo`,
                  "rowId": "/topupsaldo"
                },
                {
                  "title": "SEWA BOT",
                  "description": `Menampilkan Fitur Sewa Bot`,
                  "rowId": "/sewabot"
                },
                {
                  "title": "BUY PREMIUM",
                  "description": `Menampilkan Fitur Buy Premium`,
                  "rowId": "/buypremium"
                },
                {
                  "title": "BUY SCRIPT",
                  "description": `Menampilkan Fitur Buy Sc`,
                  "rowId": "/buysc"
                },
                {
                  "title": "DONASI",
                  "description": `Menampilkan Fitur Donasi`,
                  "rowId": "/donate"
                }                
                









              ]
            }],
          listType: 1
        }
        Ramdani.sendMessage(from, listMsg, MessageType.listMessage, { contextInfo: { mentionedJid: [stod] }, quoted: ftroli })
        break
        case 'topupgame':
        stod = `${sender}`
        listMsg = {
          buttonText: 'Click Here',
          footerText: `© Creator By Ramdani Official`,
          description: `hallo kak silahkan pilih disini kak, jangan spam ya kak`,
          sections: [
            {
              "title": `Jangan Lupa Donasi Ya Jing`,
              rows: [

                {
                  "title": "MOBILE LEGENDS",
                  "description": `Menampilkan Fitur Top Up Ml`,
                  "rowId": "/topupml"
                },
                {
                  "title": "FREE FIRE",
                  "description": `Menampilkan Fitur Top Up Ff`,
                  "rowId": "/topupff"
                },
                {
                  "title": "PUBG",
                  "description": `Menampilkan Fitur Top Up Pubg`,
                  "rowId": "/topuppubg"
                },
                {
                  "title": "POINT BLANK",
                  "description": `Menampilkan Fitur Top Up Pb`,
                  "rowId": "/topuppb"
                }                                
                









              ]
            }],
          listType: 1
        }
        Ramdani.sendMessage(from, listMsg, MessageType.listMessage, { contextInfo: { mentionedJid: [stod] }, quoted: ftroli })
        break
        case 'topupsaldo':
        stod = `${sender}`
        listMsg = {
          buttonText: 'Click Here',
          footerText: `© Creator By Ramdani Official`,
          description: `hallo kak silahkan pilih disini kak, jangan spam ya kak`,
          sections: [
            {
              "title": `Jangan Lupa Donasi Ya Jing`,
              rows: [

                {
                  "title": "GOPAY",
                  "description": `Menampilkan Fitur Top Up Gopay`,
                  "rowId": "/topupgopay"
                },
                {
                  "title": "DANA",
                  "description": `Menampilkan Fitur Top Up Dana`,
                  "rowId": "/topupdana"
                },
                {
                  "title": "OVO",
                  "description": `Menampilkan Fitur Top Up Ovo`,
                  "rowId": "/topupovo"
                },
                {
                  "title": "PULSA",
                  "description": `Menampilkan Fitur Top Up Pulsa`,
                  "rowId": "/topuppulsa"
                }                                
                









              ]
            }],
          listType: 1
        }
        Ramdani.sendMessage(from, listMsg, MessageType.listMessage, { contextInfo: { mentionedJid: [stod] }, quoted: ftroli })
        break
        /////CASEEEEE NYAAAH BWANG
        case 'igowner':
        tes = fs.readFileSync('./media/audio/tes.mp3')
        reply(`*https://www.instagram.com/muhammadramdani196453*`)
        Ramdani.sendMessage(from, tes, audio, { mimetype: 'audio/mp4', ptt: true, quoted: ftroli })
        break
        case 'totalfitur':
        case 'total fitur':
tes = fs.readFileSync('./media/audio/tes.mp3')
reply(`total fitur saat ini 500+ bwang`)
Ramdani.sendMessage(from, tes, audio, { mimetype: 'audio/mp4', ptt: true, quoted: ftroli })
break
case 'tess':
tes = fs.readFileSync('./media/audio/tes.mp3')
reply(`dah aktif bwang:v`)
Ramdani.sendMessage(from, tes, audio, { mimetype: 'audio/mp4', ptt: true, quoted: ftroli })
break
case 'donasi':
case 'donate':
tes = fs.readFileSync('./media/audio/arigato.mp3')
reply(`╔════════════════════
║ *DONASI UNTUK RAMDANI BOTZ*
╠════════════════════
║╭──❉ *DONASI KAK* ❉─────
║│➸ *GOPAY* : _tidak tersedia_
║│➸ *DANA* : 089512545999
║│➸ *OVO* : 089512545999
║│➸ *PULSA* : 088296339947
║╰──────────────────
╠════════════════════
║       
║  ▌│█║▌║▌║║▌║▌║█│▌
║  ▌│█║▌║▌║║▌║▌║█│▌
║        
╠════════════════════
║ _*© CREATOR BY RAMDANI OFFICIAL*_
╚════════════════════`)
Ramdani.sendMessage(from, tes, audio, { mimetype: 'audio/mp4', ptt: true, quoted: ftroli })
break
case 'sewabot':
tes = fs.readFileSync('./media/audio/arigato.mp3')
reply(`━━━━━『 *LIST SEWA BOT* 』━━━━━

❏ PERHARI : 1 HARI 2K, 5 HARI 10K 
❏ PERMINGGU : 1MIN. 14K, 2MIN. 28K, 3MIN. 60K,
❏ PERBULAN : 1B. 30K, 2B. 70K, 3B. 140K,
❏ PERTAHUN : 1THN. 350K, 2THN. 700K,
❏ PERMANEN : TIMDAK TERSEDIA!
*minat chat owner*`)
Ramdani.sendMessage(from, tes, audio, { mimetype: 'audio/mp4', ptt: true, quoted: ftroli })
break
case 'buypremium':
tes = fs.readFileSync('./media/audio/arigato.mp3')
reply(`━━━━━『 *LIST PREMIUM* 』━━━━━

❏ PERHARI : 2H. 1K, 5H. 4K, 7H 6K,
❏ PERMINGGU : 1MIN. 6K, 2MIN. 10K, 3MIN. 15K,
❏ PERBULAN : 1B. 18K, 2B. 28K, 3B. 38K,
❏ PERTAHUN : 1THN. 100K
❏ PERMANEN : 150K
*minat chat owner*`)
Ramdani.sendMessage(from, tes, audio, { mimetype: 'audio/mp4', ptt: true, quoted: ftroli })
break
//buysc
case 'buysc':
tes = fs.readFileSync('./media/audio/haha.mp3')
reply(`Jual script bot no enc
_____________________________________
• Fitur
Menu banyak
Fitur stiker
Bisa attp
Bisa foto jadi stiker atau sebaliknya
Bisa bc
Bisa fitur NSFW
Bisa fitur anonymous chat
Bisa fitur price list
Dll
• fitur grup
Fitur antilink
Fitur antidelete
Fitur welcome
Fitur leveling
Fitur bc grup
Bisa fitur hidetag
Bisa fitur tagall
Bisa fitur kick
Bisa fitur add
Bisa fitur tutup grup
Bisa fitur buka grup
Dll
_____________________________________
Buy cuma 20k
minat chat owner`)
Ramdani.sendMessage(from, tes, audio, { mimetype: 'audio/mp4', ptt: true, quoted: ftroli })
break
case 'topupml':
reply(`*💎DIAMOND ML💎*
➖➖➖➖➖➖➖➖➖➖➖

39    💎= Rp.9.000
65    💎= Rp.14.500
92    💎= Rp.20.000
133  💎= Rp.29.000
266  💎= Rp.58.000
400  💎= Rp.86.000
534  💎= Rp.115.000
670  💎= Rp.144.000
709  💎= Rp.153.000
735  💎= Rp.158.500
803  💎= Rp.170.000
936  💎= Rp.200.000
1070💎=Rp.229.000
1342💎=Rp.285.000
1434💎=Rp.305.000
1742💎=Rp.370.000
2700💎=Rp.570.000
 
➖➖➖➖➖➖➖➖➖➖➖
 *_© Creator By Ramdani Official_*    
➖➖➖➖➖➖➖➖➖➖➖`)
break
case 'topupff':
reply(`*💎DIAMOND FREE FIRE💎*
➖➖➖➖➖➖➖➖➖➖➖

20    💎 3.000
50    💎 7.000
70    💎 9.500
100  💎 13.500
140  💎 18.500
210  💎 27.500
280  💎 37.000
355  💎 46.000
425  💎 55.000
500  💎 65.000
720  💎 92.500
860  💎 111.000
1000💎 129.500
1075💎 138.000
1440💎 185.000
2000💎 250.000
2720💎 342.500
3000💎 380.000
4000💎 500.000
MM : 28.000
MB  : 140.000
 
➖➖➖➖➖➖➖➖➖➖➖
 *_©Creator by Ramdani Official_*    
➖➖➖➖➖➖➖➖➖➖➖`)
break
case 'topuppubg':
reply(`➖➖➖➖➖➖➖➖➖➖➖

- 🎟️60 = Rp14.000
- 🎟️120 = Rp28.000
- 🎟️240 = Rp56.000
 
➖➖➖➖➖➖➖➖➖➖➖
 *_©Creator By Ramdani Official_*    
➖➖➖➖➖➖➖➖➖➖➖`)
break
case 'topuppb':
reply(`*🎟️POINT BLANK🎟️*
➖➖➖➖➖➖➖➖➖➖➖

_tidak tersedia, ke Indomaret Sono_
 
➖➖➖➖➖➖➖➖➖➖➖
 *_© Creator By Ramdani Official_*    
➖➖➖➖➖➖➖➖➖➖➖`)
break
case 'topupgopay':
reply(`_chat owner_`)
break
case 'topupdana':
reply(`_chat owner_`)
break
case 'topupovo':
reply(`_chat owner_`)
break
case 'topuppulsa':
reply(`_beli di warung sono_`)
break

      case 'tictactoe':
      case 'ttt':
        if (!isGroup) return reply(mess.only.group)
        if (args.length < 1) return reply('Tag Lawan Anda! ')
        if (isTTT) return reply('Sedang Ada Permainan Di Grub Ini, Harap Tunggu')
        if (Ramdanif.message.extendedTextMessage === undefined || Ramdanif.message.extendedTextMessage === null) return reply('Tag target Lawan!')
        ment = Ramdanif.message.extendedTextMessage.contextInfo.mentionedJid
        player1 = sender
        player2 = ment[0]
        angka = ["0️⃣", "1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"]
        id = from
        gilir = player2
        ky_ttt.push({ player1, player2, id, angka, gilir })
        Ramdani.sendMessage(from, `*🎳 Memulai Game Tictactoe 🎲*

[@${player2.split('@')[0]}] Menantang anda untuk menjadi lawan Game🔥
Ketik Y/N untuk menerima atau menolak permainan

Ketik ${prefix}delttc , Untuk Mereset Permainan Yg Ada Di Grup!`, text, { contextInfo: { mentionedJid: [player2] } })
        break
      case 't':
        if (isBanned) return reply(mess.ban)
        if (isBanchat) return

        titid = `SILAHKAN PILIH DI BAWAH UNTUK MELANJUTKAN`

        sendButMessage(from, titid, `©${control.watermark2}`, [
          {
            buttonId: `Y`,
            buttonText: {
              displayText: `Y`,
            },
            type: 1,


          },
          {
            buttonId: `N`,
            buttonText: {
              displayText: `N`,
            },
            type: 1,
          },
        ]);
        break
      case 'delttt':
      case 'delttc':
        if (isBanned) return reply(mess.ban)
        if (isBanchat) return
        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol })
        if (!isGroup) return reply(mess.only.group)
        if (!isTTT) return reply('Tidak Ada Permainan Di Grub Ini')
        naa = ky_ttt.filter(toek => !toek.id.includes(from))
        ky_ttt = naa
        reply('Sukses')
        break
      case 't':
        if (isBanned) return reply(mess.ban)
        if (isBanchat) return

        titid = `SILAHKAN PILIH DI BAWAH UNTUK MELANJUTKAN`

        sendButMessage(from, titid, `©${control.watermark2}`, [
          {
            buttonId: `Y`,
            buttonText: {
              displayText: `Y`,
            },
            type: 1,


          },
          {
            buttonId: `N`,
            buttonText: {
              displayText: `N`,
            },
            type: 1,
          },
        ]);
        break
      case 'ttp':
        if (isBanned) return reply(mess.ban)
        if (isBanchat) return
        //////
        if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix} ${pushname}`)
        woy = args.join(" ")
        reply('wait....')
        anjay = `http://zekais-api.herokuapp.com/text2png?text=${woy}&color=white`
        sendStickerUrl(from, anjay)
        break
      case 'hidetag':
        if (!isGroupAdmins && !Ramdanif.key.fromMe) return reply("Khusus admin");
        try {
          quotedText = Ramdanif.message.extendedTextMessage.contextInfo.quotedMessage.conversation
          hideTag(from, `${quotedText}`)
        } catch {
          hideTag(from, `${q}`)
        }
        break
      case 'txtopng':
        if (isBanned) return reply(mess.ban)
        if (isBanchat) return
        reply('Wait.....')
        if (args.length == 0) return reply(`Teksnya mana?...`)
        ini_txt = args.join(" ")
        getBuffer(`https://leyscoders-api.herokuapp.com/api/textto-image?text=${ini_txt}`).then((gambar) => {
          Ramdani.sendMessage(from, gambar, image, { thumbnail: Buffer.alloc(0), caption: `Follow @Ramdanigns`, quoted: ftroli })
        })
        break



      case 'meme':
        if (isBanned) return reply(mess.ban)
        if (isBanchat) return
        buff = await getBuffer('https://leyscoders-api.herokuapp.com/api/memeindo?apikey=IkyOgiwara')
        buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `➡️LANJUT` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: '©Whatsapp bot', imageMessage: imageMsg,
          contentText: `klik LANJUT untuk ke gambar selanjut nya`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: ftroli })
        Ramdani.relayWAMessage(prep)
        break
      case 'balik':
        if (isBanned) return reply(mess.ban)
        if (isBanchat) return
        encmediau = JSON.parse(JSON.stringify(Ramdanif).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
        mediau = await Ramdani.downloadAndSaveMediaMessage(encmediau)
        ran = getRandom('.mp3')
        exec(`ffmpeg -i ${mediau} -filter_complex "areverse" ${ran}`, (err, stderr, stdout) => {
          fs.unlinkSync(mediau)
          if (err) return reply('Error!')
          hah = fs.readFileSync(ran)
          Ramdani.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: true, duration: 359996400, quoted: Ramdanif })
          fs.unlinkSync(ran)
        })
        break

      case 'antilink':
        if (isBanned) return reply(mess.ban)
        if (isBanchat) return
        if (!isGroup) return reply(mess.only.group)
        if (!isBotGroupAdmins && !isGroupAdmins) return reply(`Bot Harus jadi Admin`)
        if (args[0] === 'enable') {
          if (isAntiLink) return reply(`Udah aktif`)
          antilink.push(from)
          fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
          reply('ANTILINK DI AKTIFKAN')
        } else if (args[0] === 'disable') {
          let anu = antilink.indexOf(from)
          antilink.splice(anu, 1)
          fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
          reply('ANTILINK DI NONAKTIFKAN')
        } else if (!q) {
          var ini_gopayy = `Halo ${pushname} klik button atau Gunakan ${prefix + command}antilink enable / disable jika button tidak merespon`
          var buttonss = [
            { buttonId: `!antilink enable`, buttonText: { displayText: 'ENABLE' }, type: 1 },
            { buttonId: `!antilin disable`, buttonText: { displayText: 'DISABLE' }, type: 1 }
          ]

          buttonMessagee = {
            contentText: ini_gopayy,
            footerText: `©${control.watermark2}`,
            buttons: buttonss,
            headerType: 1
          }
          Ramdani.sendMessage(from, buttonMessagee, MessageType.buttonsMessage, {
            caption: `${control.NamaBot}`,
            "contextInfo": {
              text: 'hi',
              "forwardingScore": 1000000000,
              isForwarded: true,
              senRamdanifhemeral: true,
              "mentionedJid": [sender]
            },
            quoted: ftroli, senRamdanifhemeral: true
          })
        }
        break
      case "antivirtex":
        if (isBanned) return reply(mess.ban)
        if (isBanchat) return
        if (!isGroup) return reply("Khusus di grup");
        if (!isGroupAdmins && !Ramdanif.key.fromMe) return reply("Khusus admin");
        if (args[0] == "on") {
          if (isAntivirtex) return reply("Sudah aktif!!");
          antivirtex.push(from);
          fs.writeFileSync(
            "./database/antivirtex.json",
            JSON.stringify(antivirtex)
          );
          reply("Sukses mengaktifkan antivirtex!");
        } else if (args[0] == "off") {
          antivirtex.splice(from, 1);
          fs.writeFileSync("./database/antivirtex.json", JSON.stringify(ant));
          reply("Sukses mematikan antivirtex!");
        } else if (!q) {
          sendButMessage(from, `MODE ANTIVIRTEX`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}antivirtex on`,
              buttonText: {
                displayText: `on`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}antivirtex off`,
              buttonText: {
                displayText: `off`,
              },
              type: 1,
            },
          ]);
        }
        break;
      case "tes":
        if (isBanned) return reply(mess.ban)
        if (isBanchat) return
        sendButMessage(from, `Nyala Om`, [
          {
            buttonId: `${prefix}runtime`,
            buttonText: {
              displayText: `⬡ RUNTIME `,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}menu`,
            buttonText: {
              displayText: `⬡ MENU`,
            },
            type: 1,
          },
        ]);
        break
      case 'runtime':
        if (isBanned) return reply(mess.ban)
        if (isBanchat) return
        textImg(`${runtime(process.uptime())}`)
        break
      case 'ping':
      case 'speed':
        if (isBanned) return reply(mess.ban)
        if (isBanchat) return
        timestampe = speed();
        latensie = speed() - timestampe
        reply(`「 *[ •${control.NamaBot}• ]* 」\n //==[${latensie.toFixed(4)} detik 💬]==\\`)
        break
      case 'leveling':
        if (isBanned) return reply(mess.ban)
        if (isBanchat) return
        if (!isGroup) return reply(mess.only.group)
        if (ar[0] === 'enable') {
          if (isLevelingOn) return reply('Fitur leveling telah diaktifkan sebelumnya.')
          _leveling.push(from)
          fs.writeFileSync('./database/leveling.json', JSON.stringify(_leveling))
          reply('Fitur leveling berhasil diaktifkan.')
        } else if (ar[0] === 'disable') {
          var anup = _leveling.indexOf(from)
          _leveling.splice(anup, 1)
          fs.writeFileSync('./database/leveling.json', JSON.stringify(_leveling))
          reply('Fitur leveling berhasil dimatikan.')
        } else {
          var ini_Ramdani = `Halo @${senderr.split('@')[0]} klik button atau Gunakan ${prefix + command} enable / disable jika button tidak merespon`
          var buttonss = [
            { buttonId: `/leveling enable`, buttonText: { displayText: 'ENABLE' }, type: 1 },
            { buttonId: `/leveling disable`, buttonText: { displayText: 'DISABLE' }, type: 1 }
          ]

          buttonMessagee = {
            contentText: ini_Ramdani,
            footerText: `©${control.watermark2}`,
            buttons: buttonss,
            headerType: 1
          }
          Ramdani.sendMessage(from, buttonMessagee, MessageType.buttonsMessage, {
            caption: `${control.NamaBot}`,
            "contextInfo": {
              text: 'hi',
              "forwardingScore": 1000000000,
              isForwarded: true,
              senRamdanifhemeral: true,
              "mentionedJid": [sender]
            },
            quoted: ftroli, senRamdanifhemeral: true
          })
        }
        break
      case 'ban':
      case 'banned':
        if (!isOwner && !Ramdanif.key.fromMe) return reply(mess.own)
        bnnd = body.slice(5)
        ban.push(`${args[0].replace('@', '')}@s.whatsapp.net`)
        fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
        reply(`Berhasil membanned nomor : wa.me/${bnnd} `)
        break
      case 'unban':
      case 'unbanned':
        if (!isOwner && !Ramdanif.key.fromMe) return reply(mess.own)
        delp = body.slice(7)
        ban.splice(`${delp}@s.whatsapp.net`, 1)
        fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
        reply(`Berhasil Menghapus wa.me/${delp} dari banned`)
        break
      case 'listban':
      case 'banlist':
        teks = '*List Ban:*\n\n'
        for (let Ramdanigans of ban) {
          teks += `- ${Ramdanigans}\n`
        }
        teks += `\n*Total : ${ban.length}*`
        Ramdani.sendMessage(from, teks.trim(), extendedText, { quoted: Ramdanif, contextInfo: { "mentionedJid": ban } })
        break
      case 'level':
        if (isBanned) return reply(mess.ban)
        if (isBanchat) return
        if (!isGroup) return reply(mess.only.group)
        if (!isLevelingOn) return await reply('Fitur leveling belum diaktifkan!')
        let userLevel = level.getLevelingLevel(sender, _level)
        let userXp = level.getLevelingXp(sender, _level)
        let requiredXp = 10 * Math.pow(userLevel, 2) + 50 * userLevel + 100
        let userRank = level.getUserRank(sender, _level)
        try {
          profilePic = await Ramdani.getProfilePicture(sender)
        } catch {
          profilePic = errorImg
        }
        buffer = await getBuffer(`http://Api.lolhuman.xyz/api/rank?apikey=${control.lolkey}&img=${profilePic}&background=https://telegra.ph/file/443b6600636aed1d94acd.jpg&username=${encodeURI(pushname)}&level=${userLevel}&ranking=${Number(userRank)}&currxp=${userXp}&xpneed=${requiredXp}`)
        teks = `*「 LEVEL 」*\n\n➸ *Nama :* ${pushname}\n➸ *Xp :* ${userXp} / ${requiredXp}\n➸ *Level :* ${userLevel}\n➸ *Role*: *${role}*\n\n*Note : Kumpulin Xp Jika Ingin Menaikkan Level*`
        buttons = [{ buttonId: `${prefix}mining`, buttonText: { displayText: 'MINING' }, type: 1 }, { buttonId: `${prefix}leaderboard`, buttonText: { displayText: 'LEADEBOARD' }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buffer, "imageMessage", { thumbnail: buffer, })).imageMessage
        buttonsMessage = {
          footerText: '®Ramdani', imageMessage: imageMsg,
          contentText: `${teks}`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: ftroli })
        Ramdani.relayWAMessage(prep)
        break
      ////////case by Ramdani,otsuka,Ramdani
      //Download menu
      case 'ig':
        reply(mess.wait)
        if (args.length == 0) return reply(`Example: ${prefix + command} https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`)
        ini_url = args[0]
        ini_url = await fetchJson(`https://api.lolhuman.xyz/api/instagram?apikey=${control.lolkey}&url=${ini_url}`)
        ini_url = ini_url.result
        ini_type = image
        if (ini_url.includes(".mp4")) ini_type = video
        ini_buffer = await getBuffer(ini_url)
        Ramdani.sendMessage(from, ini_buffer, ini_type, { quoted: ftroli })
        break
      //=============================================================================                    
      case 'igdl':
      case 'instagram':
      case 'instagramdownload':
        if (!q) return reply('Link Yang Mana? ')
        if (!q.includes('instagram')) return reply(mess.error.Iv)
        reply(mess.wait)
        anu = await igDownloader(`${q}`)
          .then((data) => { sendMediaURL(from, data.result.link, data.result.desc, ftroli) })
          .catch((err) => { reply(String(err)) })
        break
      //===========================================================  
      case 'twitter':
        if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(mess.Iv)
        if (!q) return reply('Linknya?')
        ten = args[0]
        var res = await twitterGetUrl(`${ten}`)
          .then(g => {
            ren = `${g.download[2].url}`
            sendMediaURL(from, ren, 'Done')
          })
        break
      //==================================================================
      case 'scplay':
      case 'soundcloud':
        if (!q) return reply('Link Yang Mana? ')
        if (!q.includes('soundcloud')) return reply(mess.error.Iv)
        reply(mess.wait)
        anu = await fetchJson(`https://api.lolhuman.xyz/api/soundcloud?apikey=${control.lolkey}&url=${q}`)
          .then((data) => { sendMediaURL(from, data.result, ftroli) })
          .catch((err) => { reply(String(err)) })
        break
      //------------------< Download/Tools >------------------- 
      case 'playstore':
        try {
          if (args.length == 0) return reply(`Kirim perintah ${prefix}playstore [ apk ]\nContoh : ${prefix}playstore pubg`)
          query = args.join(" ")
          reply(mess.wait)
          get_result = await fetchJson(`https://api.zeks.xyz/api/sgplay?apikey=${control.zekskey}&q=${query}`)
          get_result = get_result.result
          teks = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ PLAYSTORE
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

Data Berhasil Didapatkan!\n`
          for (let i = 0; i < get_result.length; i++) {
            teks += `\`\`\`🐥 Title : ${get_result[i].title}\`\`\`
\`\`\`🐥 Harga : ${get_result[i].price}\`\`\`
\`\`\`🐥 Rate : ${get_result[i].rating}\`\`\`
\`\`\`🐥 Link : ${get_result[i].url}\`\`\`

`
          }
          ini_buffer = await getBuffer(get_result[0].thumb)
          Ramdani.sendMessage(from, ini_buffer, image, { quoted: ftroli, caption: teks })
        } catch {
          reply(`Maaf aplikasi ${query} tidak ditemukan`)
        }
        break
      //===================================================================
      case 'yts':
      case 'ytsearch':
        if (!q) return reply(mess.wrongFormat)
        reply(mess.wait)
        try {
          res = await yts(q)
          a = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ YOUTUBE SEARCH
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

Data Berhasil Didapatkan!\n`
          for (let i of res.all) {
            a += `\`\`\`🐣 Title : ${i.title}\`\`\`
\`\`\`🐤 Views : ${i.views}\`\`\`
\`\`\`🐣 Upload : ${i.ago}\`\`\`
\`\`\`🐥 Durasi : ${i.timestamp}\`\`\`
\`\`\`🐤 Channel : ${i.author.name}\`\`\`
\`\`\`🔗 Link : ${i.url}\`\`\``
          }
          b = a.trim()
          sendFileFromUrl(res.all[0].image, image, { quoted: ftroli, caption: b })
        } catch (e) {
          console.log(e)
          reply(`${e}`)
        }
        break
      //===================================================================
      case 'ytmp4hd':
      case 'ythd':
        //////

        if (args.length === 0) return reply(`Kirim perintah /ytmp4 linkYt`)
        let isLinkks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
        if (!isLinkks2) return reply(mess.error.Iv)
        try {
          reply(mess.wait)
          ythd(args[0])
            .then((res) => {
              const { dl_link, thumb, title, filesizeF, filesize } = res
              axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                .then((a) => {
                  if (Number(filesize) >= 40000) return sendMediaURL(from, thumb,
                    `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
   ┆ YOUTUBE MP4
   └┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶
   
   Data Berhasil Didapatkan!
   \`\`\`🐥 Title : ${title}\`\`\`
   \`\`\`🐥 Kualitas* : 720p\`\`\`
   \`\`\`🐥 Size* : ${filesizeF}\`\`\`
   \`\`\`🐥 Link* : ${a.data}\`\`\`
   
   Untuk durasi lebih dari batas disajikan dalam Bentuk link`)

                  const captionsYtmp4 =
                    `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
   ┆ YOUTUBE MP4
   └┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶
   
   Data Berhasil Didapatkan!
   \`\`\`🐥 Title : ${title}\`\`\`
   \`\`\`🐥 Kualitas : 720p\`\`\`
   \`\`\`🐥 Size : ${filesizeF}\`\`\`
   
   Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit`

                  sendMediaURL(from, thumb, captionsYtmp4)
                  sendMediaURL(from, dl_link, `nih kak`).catch(() => reply(mess.error.api))
                })
            })
        } catch (err) {
          reply(`eror`)
        }
        break
      //====================================================================
      case 'ytmp3':
        //////
        if (args.length < 1) return reply('Link Nya Mana?')
        if (!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
        teks = args.join(' ')
        reply(mess.wait)
        res = await y2mateA(teks).catch(e => {
          reply('[ ! ] Error Gagal Dalam Memasuki Web Y2mate')
        })
        result = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ YOUTUBE MP3
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

Data Berhasil Didapatkan!
\`\`\`🐥 Title : ${res[0].judul}\`\`\`
\`\`\`🐥 Ext : MP3\`\`\`
\`\`\`🐥 Size : ${res[0].size}\`\`\`

Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit`

        sendFileFromUrl(res[0].thumb, image, { caption: result, quoted: ftroli }).then((lalu) => {
          sendFileFromUrl(res[0].link, audio, { quoted: ftroli, mimetype: 'audio/mp3', filename: res[0].output })
        })
        break
      //====================================================================           
      case 'ytmp4':

        if (args.length < 1) return reply('Link Nya Mana?')
        if (!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
        teks = args.join(' ')
        reply(mess.wait)
        res = await y2mateV(teks).catch(e => {
          reply('[ ! ] Error Gagal Memasuki Web Y2mate')
        })
        result = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ YOUTUBE MP4
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

Data Berhasil Didapatkan!
\`\`\`🐥 Title : ${res[0].judul}\`\`\`
\`\`\`🐥 Ext : MP4\`\`\`
\`\`\`🐥 Size : ${res[0].size}\`\`\`

Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit`

        sendFileFromUrl(res[0].thumb, image, { caption: result, quoted: ftroli }).then((lalu) => {
          sendFileFromUrl(res[0].link, video, { quoted: ftroli, mimetype: 'video/mp4', filename: res[0].output })
        })
        break
      //====================================================================
      case 'tiktok':
      case 'ttdl':

        if (!q) return reply('Linknya?')
        if (!q.includes('tiktok.com')) return reply(mess.error.Iv)
        reply(mess.wait)
        anu = await Tiktokdl(`${q}`)
          .then((data) => { sendMediaURL(from, data.result.watermark) })
          .catch((err) => { reply(String(err)) })
        break
      case 'tiktoknowm':
      case 'ttnowm':

        if (!q) return reply('Linknya?')
        if (!q.includes('tiktok.com')) return reply(mess.error.Iv)
        reply(mess.wait)
        anu = await Tiktokdl(`${q}`)
          .then((data) => { sendMediaURL(from, data.result.nowatermark) })
          .catch((err) => { reply(String(err)) })
        break

      case 'wattpad':
        if (args.length == 0) return reply(`Example: ${prefix + command} https://www.wattpad.com/707367860-kumpuLan-quote-tere-liye-tere-liye-quote-quote`)
        ini_url = args[0]
        get_result = await fetchJson(`https://api.lolhuman.xyz/api/wattpad?apikey=${control.lolkey}&url=${ini_url}`)
        get_result = get_result.result
        ini_txt = `Title : ${get_result.title}\n`
        ini_txt += `Rating : ${get_result.rating}\n`
        ini_txt += `Motify date : ${get_result.modifyDate}\n`
        ini_txt += `Create date: ${get_result.createDate}\n`
        ini_txt += `Word : ${get_result.word}\n`
        ini_txt += `Comment : ${get_result.comment}\n`
        ini_txt += `Vote : ${get_result.vote}\n`
        ini_txt += `Reader : ${get_result.reader}\n`
        ini_txt += `Pages : ${get_result.pages}\n`
        ini_txt += `Description : ${get_result.desc}\n\n`
        ini_txt += `Story : \n${get_result.story}`
        thumbnail = await getBuffer(get_result.photo)
        await Ramdani.sendMessage(from, thumbnail, image, { quoted: ftroli, caption: ini_txt })
        break
      //===========================================================
      case 'wattpadsearch':
        if (args.length == 0) return reply(`Example: ${prefix + command} Tere Liye`)
        query = args.join(" ")
        get_result = await fetchJson(`https://api.lolhuman.xyz/api/wattpadsearch?apikey=${control.lolkey}&query=${query}`)
        get_result = get_result.result
        ini_txt = "Wattpad Seach : \n"
        for (var x of get_result) {
          ini_txt += `Title : ${x.title}\n`
          ini_txt += `Url : ${x.url}\n`
          ini_txt += `Part : ${x.parts}\n`
          ini_txt += `Motify date : ${x.modifyDate}\n`
          ini_txt += `Create date: ${x.createDate}\n`
          ini_txt += `Coment count: ${x.commentCount}\n\n`
        }
        reply(ini_txt)
        break
      //====================================================================
      case 'spotify':
        //////
        if (args.length == 0) return reply(`Example: ${prefix + command} https://open.spotify.com/track/0ZEYRVISCaqz5yamWZWzaA`)
        url = args[0]
        get_result = await fetchJson(`https://api.lolhuman.xyz/api/spotify?apikey=${control.lolkey}&url=${url}`)
        get_result = get_result.result
        ini_txt = `Title : ${get_result.title}\n`
        ini_txt += `Artists : ${get_result.artists}\n`
        ini_txt += `Duration : ${get_result.duration}\n`
        ini_txt += `Popularity : ${get_result.popularity}\n`
        ini_txt += `Preview : ${get_result.preview_url}\n`
        thumbnail = await getBuffer(get_result.thumbnail)
        await Ramdani.sendMessage(from, thumbnail, image, { quoted: ftroli, caption: ini_txt })
        get_audio = await getBuffer(get_result.link)
        await Ramdani.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: ftroli })
        break
      //====================================================================
      case 'spotifysearch':
        //////
        if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
        query = args.join(" ")
        get_result = await fetchJson(`https://api.lolhuman.xyz/api/spotifysearch?apikey=${control.lolkey}&query=${query}`)
        get_result = get_result.result
        ini_txt = ""
        for (var x of get_result) {
          ini_txt += `Title : ${x.title}\n`
          ini_txt += `Artists : ${x.artists}\n`
          ini_txt += `Duration : ${x.duration}\n`
          ini_txt += `Link : ${x.link}\n`
          ini_txt += `Preview : ${x.preview_url}\n\n\n`
        }
        reply(ini_txt)
        break
      //====================================================================
      case 'zippyshare':
        //////
        if (args.length == 0) return reply(`Example: ${prefix + command} https://www51.zippyshare.com/v/5W0TOBz1/file.html`)
        ini_url = args[0]
        ini_url = await fetchJson(`https://api.lolhuman.xyz/api/zippyshare?apikey=${control.lolkey}&url=${ini_url}`)
        ini_url = ini_url.result
        ini_txt = `File Name : ${ini_url.name_file}\n`
        ini_txt += `Size : ${ini_url.size}\n`
        ini_txt += `Date Upload : ${ini_url.date_upload}\n`
        ini_txt += `Download Url : ${ini_url.download_url}`
        reply(ini_txt)
        break
      //=================================================================
      case 'fire':
        if (args.length < 1) return reply('Link Nya Mana? ')
        if (!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
        teks = args.join(' ')
        res = await mediafireDl(teks)
        result = `Media Fire Downloader
  Tunggu Proses Mengirim Media......`
        reply(result)
        sendFileFromUrl(res[0].link, document, { mimetype: res[0].mime, filename: res[0].nama, quoted: ftroli })
        break
      //====================================================================
      case 'fire1':
        if (args.length < 1) return reply('Link Nya Mana? ')
        if (!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
        teks = args.join(' ')
        res = await mediafireDl(teks)
        result = `Media Fire Downloader
  Tunggu Proses Mengirim Media......`
        reply(result)
        sendFileFromUrl(res[0].link, video, { quoted: ftroli, mimetype: 'video/mp4', filename: res[0].output })
        break
      //sendFileFromUrl(res[0].link, video, {quoted: ftroli, mimetype: 'video/mp4', filename: res[0].output})
      //====================================================================
      case 'fire2':
        if (args.length < 1) return reply('Link Nya Mana? ')
        if (!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
        teks = args.join(' ')
        res = await mediafireDl(teks)
        result = `Media Fire Downloader
  Tunggu Proses Mengirim Media......`
        reply(result)
        sendFileFromUrl(res[0].link, audio, { quoted: ftroli, mimetype: 'video/mp3', filename: res[0].output })
        break
      //====================================================================
      case 'mediafire':
        //////
        if (args.length < 1) return reply('Link Nya Mana? ')
        if (!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
        reply(mess.wait)
        teks = args.join(' ')
        res = await mediafireDl(teks)
        result = `Media Fire Downloader

Nama : ${res[0].nama}
Ukuran : ${res[0].size}
Link : ${res[0].link}

Tunggu Proses Mengirim Media......`
        sendButMessage(from, result, `Silahkan Click Next Untuk Melanjutkan Nya`, [
          {
            buttonId: `${prefix}fire ${teks}`,
            buttonText: {
              displayText: `🖨️ Dokumen`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}fire1 ${teks}`,
            buttonText: {
              displayText: `🖨️ Video`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}fire2 ${teks}`,
            buttonText: {
              displayText: `🖨️ Audio`,
            },
            type: 1,
          },
        ]);
        break;
      //====================================================================
      case 'xhamster':
        //////
        if (args.length == 0) return reply(`Example: ${prefix + command} https://xhamster.com/videos/party-with-friends-end-in-awesome-fucking-5798407`)
        query = args.join(" ")
        get_result = await fetchJson(`https://api.lolhuman.xyz/api/xhamster?apikey=${control.lolkey}&url=${query}`)
        get_result = get_result.result
        ini_txt = `Title : ${get_result.title}\n`
        ini_txt += `Duration : ${get_result.duration}\n`
        ini_txt += `Uploader : ${get_result.author}\n`
        ini_txt += `Upload : ${get_result.upload}\n`
        ini_txt += `View : ${get_result.views}\n`
        ini_txt += `Rating : ${get_result.rating}\n`
        ini_txt += `Like : ${get_result.likes}\n`
        ini_txt += `Dislike : ${get_result.dislikes}\n`
        ini_txt += `Comment : ${get_result.comments}\n`
        ini_txt += "Link : \n"
        ini_link = get_result.link
        for (var x of ini_link) {
          ini_txt += `${x.type} - ${x.link}\n\n`
        }
        thumbnail = await getBuffer(get_result.thumbnail)
        await Ramdani.sendMessage(from, thumbnail, image, { quoted: ftroli, caption: ini_txt })
        break
      //====================================================================
      case 'xhamstersearch':
        //////
        if (args.length == 0) return reply(`Example: ${prefix + command} Japanese`)
        query = args.join(" ")
        get_result = await fetchJson(`https://api.lolhuman.xyz/api/xhamstersearch?apikey=${control.lolkey}&query=${query}`)
        get_result = get_result.result
        ini_txt = ""
        for (var x of get_result) {
          ini_txt += `Title : ${x.title}\n`
          ini_txt += `Views : ${x.views}\n`
          ini_txt += `Duration : ${x.duration}\n`
          ini_txt += `Link : ${x.link}\n\n`
        }
        reply(ini_txt)
        break
      //====================================================================
      case 'xnxx':
        //////
        if (args.length == 0) return reply(`Example: ${prefix + command} https://www.xnxx.com/video-uy5a73b/mom_is_horny_-_brooklyn`)
        query = args.join(" ")
        get_result = await fetchJson(`https://api.lolhuman.xyz/api/xnxx?apikey=${control.lolkey}&url=${query}`)
        get_result = get_result.result
        ini_txt = `Title : ${get_result.title}\n`
        ini_txt += `Duration : ${get_result.duration}\n`
        ini_txt += `View : ${get_result.view}\n`
        ini_txt += `Rating : ${get_result.rating}\n`
        ini_txt += `Like : ${get_result.like}\n`
        ini_txt += `Dislike : ${get_result.dislike}\n`
        ini_txt += `Comment : ${get_result.comment}\n`
        ini_txt += `Tag : ${get_result.tag.join(", ")}\n`
        ini_txt += `Description : ${get_result.description}\n`
        ini_txt += "Link : \n"
        ini_link = get_result.link
        for (var x of ini_link) {
          ini_txt += `${x.type} - ${x.link}\n\n`
        }
        thumbnail = await getBuffer(get_result.thumbnail)
        await Ramdani.sendMessage(from, thumbnail, image, { quoted: ftroli, caption: ini_txt })
        break
      //====================================================================
      case 'xnxxsearch':
        //////
        if (args.length == 0) return reply(`Example: ${prefix + command} Japanese`)
        query = args.join(" ")
        get_result = await fetchJson(`https://api.lolhuman.xyz/api/xnxxsearch?apikey=${control.lolkey}&query=${query}`)
        get_result = get_result.result
        ini_txt = ""
        for (var x of get_result) {
          ini_txt += `Title : ${x.title}\n`
          ini_txt += `Views : ${x.views}\n`
          ini_txt += `Duration : ${x.duration}\n`
          ini_txt += `Uploader : ${x.uploader}\n`
          ini_txt += `Link : ${x.link}\n`
          ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
        }
        reply(ini_txt)
        break
      //====================================================================                       
      case 'play':
       case 'joox':
        //////
        if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
        query = args.join(" ")
        get_result = await fetchJson(`https://api.lolhuman.xyz/api/jooxplay?apikey=${control.lolkey}&query=${query}`)
        get_result = get_result.result
        ini_txt = `Title : ${get_result.info.song}\n`
        ini_txt += `Artists : ${get_result.info.singer}\n`
        ini_txt += `Duration : ${get_result.info.duration}\n`
        ini_txt += `Album : ${get_result.info.album}\n`
        ini_txt += `Uploaded : ${get_result.info.date}\n`
        ini_txt += `Lirik :\n ${get_result.lirik}\n`
        thumbnail = await getBuffer(get_result.image)
        await Ramdani.sendMessage(from, thumbnail, image, { quoted: ftroli, caption: ini_txt })
        get_audio = await getBuffer(get_result.audio[0].link)
        await Ramdani.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.info.song}.mp3`, quoted: ftroli })
        break
      //====================================================================
     // case 'playy':
     // case 'play3':
     // case 'lagu':
        //////
        if (args.length < 1) return reply('Apa Yang Mau Dicari?')
        teks = args.join(' ')
        reply(mess.wait)
        if (!teks.endsWith("-doc")) {
          res = await yts(`${teks}`).catch(e => {
            reply('[ ! ] Error Query Yang Anda Masukan Tidak Ada')
          })
          reply(` Playing ${res.all[0].title}`)
          let thumbInfo = ` Youtube Search
          🐥 Judul : ${res.all[0].title}
          🐣 ID Video : ${res.all[0].videoId}
          🐤 Diupload Pada : ${res.all[0].ago}
          🐥 Views : ${res.all[0].views}
          🐣 Durasi : ${res.all[0].timestamp}
          🐤 Channel : ${res.all[0].author.name}
          🔗 Link Channel : ${res.all[0].author.url}
                         
          File Sedang Di Kirim........
                        `
          /////////////sendFileFromUrl(res.all[0].image, image, {quoted: ftroli, caption: thumbInfo})
          res = await y2mateA(res.all[0].url).catch(e => {
            reply('[ ! ] Error Saat Memasuki Web Y2mate')
          })
          sendFileFromUrl(res[0].link, audio, { quoted: ftroli, mimetype: 'audio/mp4', filename: res[0].output })
        }
        if (teks.endsWith("-doc")) {
          const tec = teks.split("-doc")
          res = await yts(`${tec}`).catch(e => {
            reply('[ ! ] Error Query Yang Anda Masukan Tidak Ada')
          })
          reply(`.Playing ${res.all[0].title}`)
          let thumbInfo = `${botName} 
          Judul : ${res.all[0].title}
          ID Video : ${res.all[0].videoId}
          Diupload Pada : ${res.all[0].ago}
          Views : ${res.all[0].views}
          Durasi : ${res.all[0].timestamp}
          Channel : ${res.all[0].author.name}
          Link Channel : ${res.all[0].author.url}
                        
          Tunggu Proses Upload.....
                        `
          sendFileFromUrl(res.all[0].image, image, { quoted: ftroli, caption: thumbInfo })
          res = await y2mateA(res.all[0].url).catch(e => {
            reply('[ ! ] Error Saat Memasuki Web Y2mate')
          })
          sendFileFromUrl(res[0].link, document, { quoted: ftroli, mimetype: 'audio/mp3', filename: res[0].output })
        }
        break
      //==================================================================== 
      case 'play2':
        //////
        if (args.length < 1) return reply('Masukan judul nya?')
        reply('Loading.... ')
        play = args.join(" ")
        anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp4?q=${play}&apikey=apivinz`)
        if (anu.error) return reply(anu.error)
        infomp3 = `「 PLAY VIDEO 」
                                                     
                         Judul : ${anu.result.title}
                         Source : ${anu.result.source}
                                                     
                         [Wait] Tunggu Sebentar..`
        ///////buffer = await getBuffer(anu.result.thumbnail)
        buffer1 = await getBuffer(anu.result.url_video)
        Ramdani.sendMessage(from, buffer1, video, { mimetype: 'video/mp4', filename: `${anu.result.video}.mp4`, quoted: ftroli, caption: 'Nih Gan' })
        break
      //==================================================================== 
     //// case 'play02':
        //////
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////if (!isRegister) return reply(`You are not verified\n\nReply this chat and send bot password\n\nHint : \nPassword contains 4 digit number\nCheck password at: https://Ramdani-chan02.github.io`)
        if (!q) return reply('Linknya?')
        res = await yts(q)
        let thumbInfo = ` 
                      Youtube Download
                      🐥 Judul : ${res.all[0].title}
                      🐣 ID Video : ${res.all[0].videoId}
                      🐤 Diupload Pada : ${res.all[0].ago}
                      🐥 Views : ${res.all[0].views}
                      🐣 Durasi : ${res.all[0].timestamp}
                      🐤 Channel : ${res.all[0].author.name}
                      🔗 Link Channel : ${res.all[0].author.url}
                      
                      Silahkan pilih media yang akan di download
                      `
        buttons = [{ buttonId: `${prefix}play2 ${q}`, buttonText: { displayText: '🎥VIDEO' }, type: 1 }, { buttonId: `${prefix}playy ${q}`, buttonText: { displayText: '🎵AUDIO' }, type: 1 }]

        imageMessage = (await Ramdani.prepareMessageMedia({ url: res.all[0].image }, 'imageMessage', { thumbnail: Buffer.alloc(0) })).imageMessage

        buttonsMessage = { contentText: thumbInfo, footerText: 'Silahkan Pilih Jenis File Dibawah Ini', imageMessage, buttons, headerType: 4 }

        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, {})

        Ramdani.relayWAMessage(prep)
        break
      //====================================================================
      case 'play':
if (isBanned) return reply(mess.banned)
if (args.length ==0)return reply('Judul Lagunya Apa?')
bo = args.join(" ")
reply(mess.wait)
ini = await fetchJson(`https://api.zeks.me/api/ytplaymp3?apikey=Ramdaniapizeks&q=${bo}`)
thmb = await getBuffer(ini.result.thumbnail)
ply1 =`Judul: ${ini.result.title}\nSize: ${ini.result.size}\nDurasi: ${ini.result.duration}`
ply2 =`Silahkan Pilih Media Di Bawah ini`
but = [
{ buttonId: `${prefix}mp3 ${args.join(" ")}`, buttonTet: { displayText: '️🎵AUDIO' }, type: 1 },
{ buttonId: `${prefix}mp4 ${args.join(" ")}`, buttonText: { displayText: 'VIDEO 📽️' }, type: 1 }
]
sendButLocation(from, ply1, ply2, thmb, but)
break
case 'ytplay':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytplay?apikey=${control.lolkey}&query=${query}`)
                    get_result = get_result.result
                    get_info = get_result.info
                    ini_txt = `Title : ${get_info.title}\n`
                    ini_txt += `Uploader : ${get_info.uploader}\n`
                    ini_txt += `Duration : ${get_info.duration}\n`
                    ini_txt += `View : ${get_info.view}\n`
                    ini_txt += `Like : ${get_info.like}\n`
                    ini_txt += `Dislike : ${get_info.dislike}\n`
                    ini_txt += `Description :\n ${get_info.description}\n`
                    ini_buffer = await getBuffer(get_info.thumbnail)
                    await Ramdani.sendMessage(from, ini_buffer, image, { quoted: ftroli, caption: ini_txt })
                    get_audio = await getBuffer(get_result.audio.link)
                    await Ramdani.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_info.title}.mp3`, quoted: ftroli })
                    get_video = await getBuffer(get_result.video.link)
                    await Ramdani.sendMessage(from, get_video, video, { mimetype: 'video/mp4', filename: `${get_info.title}.mp4`, quoted: ftroli })
                    break
                    case 'ytplay2':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytplay2?apikey=${control.lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    await Ramdani.sendMessage(from, ini_buffer, image, { quoted: Ramdanif, caption: get_result.title })
                    get_audio = await getBuffer(get_result.audio)
                    await Ramdani.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, filename: `${get_result.title}.mp3`, quoted: Ramdanif })
                    get_video = await getBuffer(get_result.video)
                    await Ramdani.sendMessage(from, get_video, video, { mimetype: Mimetype.mp4, filename: `${get_result.title}.mp4`, quoted: Ramdanif })
                    break
      //Apkmod MENu
      case 'happymod':

        if (args.length == 0) return reply(`Example: ${prefix + command} free fire`)
        query = args.join(' ')
        get_result = await fetchJson(`https://api.zeks.xyz/api/happymod?apikey=OtsukaBot&q=${query}`, { method: 'get' })
        kontol = get_result.result
        ini_txt = 'Result : \n'
        for (var x of kontol) {
          ini_txt += `${x.title}\n`
          ini_txt += `${x.url}\n\n`
        }
        reply(ini_txt)
        break
      //=================================================
      case 'apkdone':

        if (args.length == 0) return reply(`Example: ${prefix + command} free fire`)
        query = args.join(' ')
        get_result = await fetchJson(`https://dhn-api.herokuapp.com/api/apk/apkdone?apps=${query}&apikey=cabd55849002ea851ce8`, { method: 'get' })
        kontol = get_result.result
        ini_txt = '「 Mencari aplikasi diwebsite apkdone.com dan memberikan data hasil dari pencarian 」\n\n'
        for (var x of kontol) {
          ini_txt += `Name : ${x.apps_name}\n`
          ini_txt += `Link :${x.apps_linkdl}\n`
          ini_txt += `Version : ${x.apps_version}\n`
          ini_txt += `Rate : ${x.apps_rate}\n`
          ini_txt += `Tag : ${x.apps_tag}\n\n`
          ini_txt += `\n`
        }
        reply(ini_txt)
        break
      //=================================================
      case 'apkgoogle':

        if (args.length == 0) return reply(`Example: ${prefix + command} free fire`)
        query = args.join(' ')
        get_result = await fetchJson(`https://dhn-api.herokuapp.com/api/apk/apkgoogle?apps=${query}&page=1&apikey=cabd55849002ea851ce8`, { method: 'get' })
        kontol = get_result.result
        ini_txt = '「 Mencari aplikasi diplatform apkgoogle.org dan memberikan data hasilnya	 」\n\n'
        for (var x of kontol) {
          ini_txt += `Name : ${x.apps_name}\n`
          ini_txt += `Link :${x.apps_linkdl}\n`
          ini_txt += `Tag : ${x.apps_tag}\n`
          ini_txt += `\n`
        }
        reply(ini_txt)
        break
      //=================================================
      case 'apkmody':

        if (args.length == 0) return reply(`Example: ${prefix + command} free fire`)
        query = args.join(' ')
        get_result = await fetchJson(`https://dhn-api.herokuapp.com/api/apk/apkmody?apps=${query}&apikey=cabd55849002ea851ce8`, { method: 'get' })
        kontol = get_result.result
        ini_txt = '「 Mencari aplikasi diplatform apkmody.io dan memberikan data hasilnya 」\n\n'
        for (var x of kontol) {
          ini_txt += `Name : ${x.apps_name}\n`
          ini_txt += `Desc :${x.apps_desc}\n`
          ini_txt += `Link : ${x.apps_linkdl}\n`
          ini_txt += `\n`
        }
        reply(ini_txt)
        break
      //=================================================
      case 'apkshub':

        if (args.length == 0) return reply(`Example: ${prefix + command} free fire`)
        query = args.join(' ')
        get_result = await fetchJson(`https://dhn-api.herokuapp.com/api/apk/apkshub?apps=${query}&apikey=cabd55849002ea851ce8`, { method: 'get' })
        kontol = get_result.result
        ini_txt = '「 Mencari aplikasi diplatform apkshub.com dan memberikan data hasilnya 」\n\n'
        for (var x of kontol) {
          ini_txt += `Name : ${x.apps_name}\n`
          ini_txt += `Link :${x.apps_linkdl}\n`
          ini_txt += `Views :${x.apps_views}\n`
          ini_txt += `\n`
        }
        reply(ini_txt)
        break
      //=================================================
      case 'apksolo':

        if (args.length == 0) return reply(`Example: ${prefix + command} free fire`)
        query = args.join(' ')
        get_result = await fetchJson(`https://dhn-api.herokuapp.com/api/apk/apksolo?apps=${query}&apikey=cabd55849002ea851ce8`, { method: 'get' })
        kontol = get_result.result
        ini_txt = '「 Mencari Aplikasi melalui website dan mengirim sebuah data yang merupakan hasil pencarian! 」\n\n'
        for (var x of kontol) {
          ini_txt += `Name : ${x.apps_name}\n`
          ini_txt += `Link :${x.apps_linkdl}\n`
          ini_txt += `Version :${x.apps_version}\n`
          ini_txt += `\n`
        }
        reply(ini_txt)
        break
      //=================================================
      case 'hostapk':

        if (args.length == 0) return reply(`Example: ${prefix + command} free fire`)
        query = args.join(' ')
        get_result = await fetchJson(`https://dhn-api.herokuapp.com/api/apk/hostapk?apps=${query}&page=1&apikey=cabd55849002ea851ce8`, { method: 'get' })
        kontol = get_result.result
        ini_txt = '「 Mencari aplikasi diwebsite hostapk.com dan memberikan data hasil dari pencarian 」\n\n'
        for (var x of kontol) {
          ini_txt += `Name : ${x.apps_name}\n`
          ini_txt += `Link :${x.apps_linkdl}\n`
          ini_txt += `Released : ${x.apps_released}\n`
          ini_txt += `Author : ${x.apps_author}\n`
          ini_txt += `Desc : ${x.apps_desc}\n`
          ini_txt += `\n`
        }
        reply(ini_txt)
        break
      //=================================================
      case 'moddroid':

        if (args.length == 0) return reply(`Example: ${prefix + command} free fire`)
        query = args.join(' ')
        get_result = await fetchJson(`https://dhn-api.herokuapp.com/api/apk/moddroid?apps=${query}&page=1&apikey=cabd55849002ea851ce8`, { method: 'get' })
        kontol = get_result.result
        ini_txt = '「 Mencari aplikasi diwebsite moddroid.com dan memberikan data hasil dari pencarian 」\n\n'
        for (var x of kontol) {
          ini_txt += `Name : ${x.apps_name}\n`
          ini_txt += `Link :${x.apps_linkdl}\n`
          ini_txt += `Version : ${x.apps_version}\n`
          ini_txt += `Desc : ${x.apps_desc}\n`
          ini_txt += `\n`
        }
        reply(ini_txt)
        break
      //=================================================
      case 'revdl':

        if (args.length == 0) return reply(`Example: ${prefix + command} free fire`)
        query = args.join(' ')
        get_result = await fetchJson(`https://dhn-api.herokuapp.com/api/apk/revdl?apps=${query}&page=1&apikey=cabd55849002ea851ce8`, { method: 'get' })
        kontol = get_result.result
        ini_txt = '「 Mencari Aplikasi melalui website dan mengirim sebuah data yang merupakan hasil pencarian! 」\n\n'
        for (var x of kontol) {
          ini_txt += `Name : ${x.apps_name}\n`
          ini_txt += `Link :${x.apps_linkdl}\n`
          ini_txt += `\n`
        }
        reply(ini_txt)
        break
      //=================================================
      case 'toraccino':

        if (args.length == 0) return reply(`Example: ${prefix + command} free fire`)
        query = args.join(' ')
        get_result = await fetchJson(`https://dhn-api.herokuapp.com/api/apk/toraccino?apps=${query}&page=1&apikey=cabd55849002ea851ce8`, { method: 'get' })
        kontol = get_result.result
        ini_txt = '「 Mencari Aplikasi melalui website dan mengirim sebuah data yang merupakan hasil pencarian! 」\n\n'
        for (var x of kontol) {
          ini_txt += `Name : ${x.apps_name}\n`
          ini_txt += `Link :${x.apps_linkdl}\n`
          ini_txt += `Tag : ${x.apps_tag}\n`
          ini_txt += `Upload : ${x.apps_upload}\n`
          ini_txt += `Author : ${x.apps_author}\n`
          ini_txt += `Desc : ${x.apps_desc}\n`
          ini_txt += `\n`
        }
        reply(ini_txt)
        break
      //=================================================
      case 'uapkpro':

        if (args.length == 0) return reply(`Example: ${prefix + command} free fire`)
        query = args.join(' ')
        get_result = await fetchJson(`https://dhn-api.herokuapp.com/api/apk/uapkpro?apps=${query}&page=1&apikey=cabd55849002ea851ce8`, { method: 'get' })
        kontol = get_result.result
        ini_txt = '「 Mencari aplikasi diplatform uapkpro.org dan memberikan data hasilnya 」\n\n'
        for (var x of kontol) {
          ini_txt += `Name : ${x.apps_name}\n`
          ini_txt += `Link :${x.apps_linkdl}\n`
          ini_txt += `Tag : ${x.apps_tag}\n`
          ini_txt += `\n`
        }
        reply(ini_txt)
        break
      case 'darkjoke':
        buff = await getBuffer(`https://api.lolhuman.xyz/api/meme/darkjoke?apikey=${control.lolkey}`, { method: 'get' })
        buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `➡️Next` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'Bot Whatsapp', imageMessage: imageMsg,
          contentText: `klik Next untuk ke gambar selanjut nya`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: ftroli })
        Ramdani.relayWAMessage(prep)
        break
      ////fun MEnu
      //======================================================================
      case 'meme':
      case 'me':
        buff = await getBuffer(`https://api.lolhuman.xyz/api/random/meme?apikey=${control.lolkey}`)

        buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `NEXT` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'Bot Whatsapp', imageMessage: imageMsg,
          contentText: `klik Next untuk ke gambar selanjut nya`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: ftroli })
        Ramdani.relayWAMessage(prep)
        break
      //================================================================================================
      case 'toxic':
        Toxic().then(toxic => {
          reply(toxic)
        })
        break
      //================================================================================================                  
      case 'citacita':
        const cita = ['http://piyobot.000webhostapp.com/citacita1.mp3', 'http://piyobot.000webhostapp.com/citacita2.mp3', 'http://piyobot.000webhostapp.com/citacita3.mp3', 'http://piyobot.000webhostapp.com/citacita4.mp3', 'http://piyobot.000webhostapp.com/citacita5.mp3', 'http://piyobot.000webhostapp.com/citacita6.mp3', 'http://piyobot.000webhostapp.com/citacita7.mp3', 'http://piyobot.000webhostapp.com/citacita8.mp3', 'http://piyobot.000webhostapp.com/citacita9.mp3', 'http://piyobot.000webhostapp.com/citacita10.mp3', 'http://piyobot.000webhostapp.com/citacita11.mp3', 'http://piyobot.000webhostapp.com/citacita12.mp3', 'http://piyobot.000webhostapp.com/citacita13.mp3', 'http://piyobot.000webhostapp.com/citacita14.mp3', 'http://piyobot.000webhostapp.com/citacita15.mp3', 'http://piyobot.000webhostapp.com/citacita16.mp3', 'http://piyobot.000webhostapp.com/citacita17.mp3', 'http://piyobot.000webhostapp.com/citacita18.mp3', 'http://piyobot.000webhostapp.com/citacita19.mp3', 'http://piyobot.000webhostapp.com/citacita20.mp3', 'http://piyobot.000webhostapp.com/citacita21.mp3', 'http://piyobot.000webhostapp.com/citacita22.mp3', 'http://piyobot.000webhostapp.com/citacita23.mp3', 'http://piyobot.000webhostapp.com/citacita24.mp3', 'http://piyobot.000webhostapp.com/citacita25.mp3', 'http://piyobot.000webhostapp.com/citacita26.mp3', 'http://piyobot.000webhostapp.com/citacita27.mp3', 'http://piyobot.000webhostapp.com/citacita28.mp3', 'http://piyobot.000webhostapp.com/citacita29.mp3', 'http://piyobot.000webhostapp.com/citacita30.mp3', 'http://piyobot.000webhostapp.com/citacita31.mp3', 'http://piyobot.000webhostapp.com/citacita32.mp3', 'http://piyobot.000webhostapp.com/citacita33.mp3', 'http://piyobot.000webhostapp.com/citacita34.mp3', 'http://piyobot.000webhostapp.com/citacita35.mp3']
        const cita3 = cita[Math.floor(Math.random() * cita.length)]
        cita2 = await getBuffer(cita3)
        Ramdani.sendMessage(from, cita2, audio, { mimetype: 'audio/mp4', ptt: true, quoted: ftroli })
        break
      //================================================================================================
      //================================================================================================
      case 'waktu':
        reply(`Waktu Indonesia Barat: ${moment().utcOffset('+0700').format('HH:mm')} WIB \nWaktu Indonesia Tengah: ${moment().utcOffset('+0800').format('HH:mm')} WITA \nWaktu Indonesia Timur: ${moment().utcOffset('+0900').format('HH:mm')} WIT`)
        break
      /////makermenu
      case 'blackpink':
      case 'neon':
      case 'greenneon':
      case 'advanceglow':
      case 'futureneon':
      case 'sandwriting':
      case 'sandsummer':
      case 'sandengraved':
      case 'metaldark':
      case 'neonlight':
      case 'holographic':
      case 'text1917':
      case 'minion':
      case 'deluxesilver':
      case 'newyearcard':
      case 'bloodfrosted':
      case 'halloween':
      case 'jokerlogo':
      case 'fireworksparkle':
      case 'natureleaves':
      case 'bokeh':
      case 'toxic':
      case 'strawberry':
      case 'box3d':
      case 'roadwarning':
      case 'breakwall':
      case 'icecold':
      case 'luxury':
      case 'cloud':
      case 'summersand':
      case 'horrorblood':
      case 'thunder':
        reply(mess.wait)
        if (args.length == 0) return reply(`Example: ${prefix + command} Ramdani`)
        ini_txt = args.join(" ")
        buff = await getBuffer(`https://api.lolhuman.xyz/api/textprome/${command}?apikey=${control.lolkey}&text=${ini_txt}`)
        buttons = [{ buttonId: `!menu`, buttonText: { displayText: `BACK MENU` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: watermark, imageMessage: imageMsg,
          contentText: `${control.NamaBot}`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: ftroli })
        Ramdani.relayWAMessage(prep)

        break
      
      ////Kerang menu
      case 'watak': {
        var watak = body.slice(1)
        const wa = ['Penyayang', 'Pemurah', 'Pemarah', 'Pemaaf', 'Penurut', 'Baik', 'Baperan', 'Baik Hati', 'penyabar', 'UwU', 'top deh, pokoknya', 'Suka Membantu']
        const tak = wa[Math.floor(Math.random() * wa.length)]
        Ramdani.sendMessage(
          from,
          'Pertanyaan : ' + watak + '\n\nJawaban : ' + tak,
          MessageType.text, {
          quoted: ftroli,
          senRamdanifhemeral: true

        }
        )
      }
        break;
      //================================================================================================
      case 'wangy':
        if (!q) return
        qq = q.toUpperCase()
        awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
        reply(awikwok)
        break
      //================================================================================================ 
      case 'cekmati':
        if (!q) return reply(mess.wrongFormat)
        predea = await axios.get(`https://api.agify.io/?name=${q}`)
        reply(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)
        break
      //================================================================================================ 
      case 'apakah':
        apakah = body.slice(1)
        const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Coba Ulangi']
        const kah = apa[Math.floor(Math.random() * apa.length)]
        Ramdani.sendMessage(from, 'Pertanyaan : ' + apakah + '\n*Jawaban :* ' + kah, text, { quoted: ftroli })
        break
      //================================================================================================
      case 'rate':
      case 'nilai':
        rate = body.slice(1)
        const ra = ['0', '4', '9', '17', '28', '34', '48', '59', '62', '74', '83', '97', '100', '29', '94', '75', '82', '41', '39']
        const te = ra[Math.floor(Math.random() * ra.length)]
        Ramdani.sendMessage(from, 'Pertanyaan : ' + rate + '\n*Jawaban :* ' + te + '%', text, { quoted: ftroli })
        break
      //================================================================================================ 
      case 'cantikcek':
      case 'cekcantik':
        cantik = body.slice(1)
        const can = ['10', '30', '20', '40', '50', '60', '70', '62', '74', '83', '97', '100', '29', '94', '75', '82', '41', '39']
        const tik = can[Math.floor(Math.random() * can.length)]
        Ramdani.sendMessage(from, 'Pertanyaan : ' + cantik + '\n*Jawaban :* ' + tik + '%', text, { quoted: ftroli })
        break
      //================================================================================================ 
      case 'gantengcek':
      case 'cekganteng':
        ganteng = body.slice(1)
        const gan = ['10', '30', '20', '40', '50', '60', '70', '62', '74', '83', '97', '100', '29', '94', '75', '82', '41', '39']
        const teng = gan[Math.floor(Math.random() * gan.length)]
        Ramdani.sendMessage(from, 'Pertanyaan : ' + ganteng + '\n*Jawaban :* ' + teng + '%', text, { quoted: ftroli })
        break
      //================================================================================================ 
      case 'beban':
        membr = []
        const nge = groupMembers
        const tod = groupMembers
        const beb = nge[Math.floor(Math.random() * nge.length)]
        const an = pushname[Math.floor(Math.random() * tod.length)]
        teks = `Yang Paling Beban Disini Adalah : @${beb.jid.split('@')[0]}`
        membr.push(beb.jid)
        mentions(teks, membr, true)
        break
      //================================================================================================ 
      case 'babi':
        membr = []
        const meg = groupMembers
        const mge = groupMembers
        const ba = meg[Math.floor(Math.random() * meg.length)]
        const bi = pushname[Math.floor(Math.random() * mge.length)]
        teks = `Yang Paling Babi Disini Adalah : @${ba.jid.split('@')[0]}`
        membr.push(ba.jid)
        mentions(teks, membr, true)
        break
      //------------------< Owner Menu >-------------------
      case 'addupdate':
        if (!isOwner) return reply(mess.only.owner)
        if (!q) return reply(`Example: ${command} update fitur`)
        _update.push(q)
        fs.writeFileSync('./database/bot/update.json', JSON.stringify(_update))
        reply(`Update fitur berhasil ditambahkan ke database!`)
        break
      case 'update':
        let updateList = `── 「 UPDATE BOT 」 ──\n\n\n`
        for (let i of _update) {
          updateList += `࿃ ${i.replace(_update)}\n\n`
        }
        textImg(updateList)
        break
      case 'reset':
        if (!isOwner) return reply(mess.only.owner)
        var reset = []
        glimit = reset
        _update = reset
        console.log('Hang tight, it\'s time to reset')
        fs.writeFileSync('./database/bot/glimit.json', JSON.stringify(glimit))
        fs.readFileSync('./database/bot/update.json', JSON.stringify(_update))
        textImg('Oke Desu ~')
        break
      case 'exif':
        if (!isOwner) return reply(mess.only.owner)
        if (!q) return reply(mess.wrongFormat)
        if (!arg.split('|')) return reply(`Penggunaan ${prefix}exif nama|author`)
        exif.create(arg.split('|')[0], arg.split('|')[1])
        reply('sukses')
        break
      case 'join':
        if (!q) return reply('Linknya?')
        if (!isOwner) return reply(mess.only.owner)
        if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return reply('Linknya Invalid Tod')
        link = args[0].replace('https://chat.whatsapp.com/', '')
        fak = Ramdani.query({
          json: ['action', 'invite', link],
          expect200: true
        })
        reply('Berhasil Masuk Grup')
        break
      case 'eval':
        try {
          if (!isOwner) return
          sy = args.join(' ')
          return eval(sy)
        } catch (e) {
          reply(`${e}`)
        }
        break
      case 'getquoted':
        reply(JSON.stringify(ftroli.message.extendedTextMessage.contextInfo, null, 3))
        break
      case 'sebar':
      case 'sebar':
        if (args.length < 1) return reply('teks?')
        anu = await Ramdani.chats.all()
        if (isMedia && !ftroli.message.videoMessage || isQuotedImage) {
          const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(ftroli).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : ftroli
          bc = await Ramdani.downloadMediaMessage(encmedia)
          for (let _ of anu) {
            Ramdani.sendMessage(_.jid, bc, image, { quoted: ftroli, caption: `「 PESAN SIARAN BOT 」\n\n${body.slice(4)}` })
          }
          reply('Suksess broadcast')
        } else {
          for (let _ of anu) {
            sendMess(_.jid, `「 PESAN SIARAN BOT 」\n\n${body.slice(4)}`)
          }
          reply('Suksess broadcast')
        }
        break
      case 'clearall':
        if (!isOwner) return reply(mess.only.owner)
        anu = await Ramdani.chats.all()
        Ramdani.setMaxListeners(25)
        for (let _ of anu) {
          Ramdani.deleteChat(_.jid)
        }
        reply('Sukses delete all chat :)')
        break
      case 'term':
        if (!isOwner) return
        if (!q) return
        exec(q, (err, stdout) => {
          if (err) return reply(`${err}`)
          if (stdout) {
            reply(stdout)
          }
        })
        break
      case 'shutdown':
        if (!isOwner) return
        reply(`Bye...`)
        await sleep(3000)
        process.exit()
        break
      case 'restart':
        if (!isOwner) return
        reply(mess.wait)
        exec(`node main`)
        reply('Restarting Bot Success')
        break
      case 'leaveall':
        if (!isOwner) return reply(mess.only.owner)
        let totalgroup = Ramdani.chats.array.filter(u => u.jid.endsWith('@g.us')).map(u => u.jid)
        for (let id of totalgroup) {
          sendMess(id, 'Byee', null)
          await sleep(3000)
          Ramdani.groupLeave(id)
        }
        break
      //////ISLAM MENU
      case 'alquranaudio':
        if (args.length == 0) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10`)
        surah = args[0]
        ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=${control.lolkey}`)
        await Ramdani.sendMessage(from, ini_buffer, audio, { quoted: ftroli, mimetype: Mimetype.mp4Audio })
        break
      case 'asmaulhusna':
        get_result = await fetchJson(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${control.lolkey}`)
        get_result = get_result.result
        ini_txt = `No : ${get_result.index}\n`
        ini_txt += `Latin: ${get_result.latin}\n`
        ini_txt += `Arab : ${get_result.ar}\n`
        ini_txt += `Indonesia : ${get_result.id}\n`
        ini_txt += `English : ${get_result.en}`
        reply(ini_txt)
        break
      case 'kisahnabi':
        if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
        query = args.join(" ")
        get_result = await fetchJson(`https://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${control.lolkey}`)
        get_result = get_result.result
        ini_txt = `Name : ${get_result.name}\n`
        ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
        ini_txt += `Umur : ${get_result.age}\n`
        ini_txt += `Tempat : ${get_result.place}\n`
        ini_txt += `Story : \n${get_result.story}`
        reply(ini_txt)
        break
      case 'jadwalsholat':
        if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
        daerah = args.join(" ")
        get_result = await fetchJson(`https://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${control.lolkey}`)
        get_result = get_result.result
        ini_txt = `Wilayah : ${get_result.wilayah}\n`
        ini_txt += `Tanggal : ${get_result.tanggal}\n`
        ini_txt += `Sahur : ${get_result.sahur}\n`
        ini_txt += `Imsak : ${get_result.imsak}\n`
        ini_txt += `Subuh : ${get_result.subuh}\n`
        ini_txt += `Terbit : ${get_result.terbit}\n`
        ini_txt += `Dhuha : ${get_result.dhuha}\n`
        ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
        ini_txt += `Ashar : ${get_result.ashar}\n`
        ini_txt += `Maghrib : ${get_result.imsak}\n`
        ini_txt += `Isya : ${get_result.isya}`
        reply(ini_txt)
        break
      ////anime menu
      case 'fuutarou':
        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${control.lolkey}&query=fuutarou`)
        buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `NEXT` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'Fuutarou', imageMessage: imageMsg,
          contentText: `©WhatsApp bot`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: ftroli })
        Ramdani.relayWAMessage(prep)

        break
      //==============================================================================================
      case 'itsuki':
        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${control.lolkey}&query=itsuki`)
        buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `NEXT` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'Fuutarou', imageMessage: imageMsg,
          contentText: `©WhatsApp bot`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: ftroli })
        Ramdani.relayWAMessage(prep)

        break
      //==============================================================================================
      case 'itsuki':
        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${control.lolkey}&query=itsuki`)
        buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `NEXT` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'Itsuki', imageMessage: imageMsg,
          contentText: `©WhatsApp bot`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: ftroli })
        Ramdani.relayWAMessage(prep)

        break
      //==============================================================================================
      case 'nino':
        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${control.lolkey}&query=nino`)
        buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `NEXT` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'Nino', imageMessage: imageMsg,
          contentText: `©WhatsApp bot`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: ftroli })
        Ramdani.relayWAMessage(prep)

        break
      //================================================================================================ 
      case 'yotsuba':
        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${control.lolkey}&query=yotsuba`)
        buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `NEXT` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'Yotsuba', imageMessage: imageMsg,
          contentText: `©WhatsApp bot`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: ftroli })
        Ramdani.relayWAMessage(prep)

        break
      //================================================================================================ 
      case 'naruto':
        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${control.lolkey}&query=naruto`)
        buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `NEXT` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'Naruto', imageMessage: imageMsg,
          contentText: `©WhatsApp bot`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: ftroli })
        Ramdani.relayWAMessage(prep)

        break
      //================================================================================================ 
      case 'mikasa':
        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${control.lolkey}&query=mikasa`)
        buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `NEXT` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'Mikasa', imageMessage: imageMsg,
          contentText: `©WhatsApp bot`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: ftroli })
        Ramdani.relayWAMessage(prep)

        break
      //================================================================================================ 
      case 'eren':
        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${control.lolkey}&query=eren`)
        buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `NEXT` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'Eren', imageMessage: imageMsg,
          contentText: `©WhatsApp bot`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: ftroli })
        Ramdani.relayWAMessage(prep)

        break
      //================================================================================================ 
      case 'titan':
        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${control.lolkey}&query=titan`)
        buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `NEXT` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'Titan', imageMessage: imageMsg,
          contentText: `©WhatsApp bot`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: ftroli })
        Ramdani.relayWAMessage(prep)

        break
      //================================================================================================ 
      case 'levi':
        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${control.lolkey}&query=levi`)
        buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `NEXT` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'Levi', imageMessage: imageMsg,
          contentText: `©WhatsApp bot`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: ftroli })
        Ramdani.relayWAMessage(prep)

        break
      //================================================================================================ 
      case 'sakura':
        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${control.lolkey}&query=sakura`)
        buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `NEXT` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'Sakura', imageMessage: imageMsg,
          contentText: `©WhatsApp bot`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: ftroli })
        Ramdani.relayWAMessage(prep)

        break
      //================================================================================================ 
      case 'hinata':
        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${control.lolkey}&query=hinata`)
        buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `NEXT` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'Hinata', imageMessage: imageMsg,
          contentText: `©WhatsApp bot`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: ftroli })
        Ramdani.relayWAMessage(prep)

        break
      //================================================================================================ 
      case 'neji':
        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${control.lolkey}&query=neji`)
        buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `NEXT` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'Neji', imageMessage: imageMsg,
          contentText: `©WhatsApp bot`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: ftroli })
        Ramdani.relayWAMessage(prep)

        break
      //================================================================================================ 
      case 'minato':
        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${control.lolkey}&query=minato`)
        buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `NEXT` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'Minato', imageMessage: imageMsg,
          contentText: `©WhatsApp bot`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: ftroli })
        Ramdani.relayWAMessage(prep)

        break
      //================================================================================================
      case 'jiraya':
        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${control.lolkey}&query=jiraya`)
        buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `NEXT` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'Jiraya', imageMessage: imageMsg,
          contentText: `©WhatsApp bot`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: ftroli })
        Ramdani.relayWAMessage(prep)

        break
      //================================================================================================ 
      case 'tsunade':
        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${control.lolkey}&query=tsunade`)
        buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `NEXT` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'Tsunade', imageMessage: imageMsg,
          contentText: `©WhatsApp bot`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: ftroli })
        Ramdani.relayWAMessage(prep)

        break
      //================================================================================================ 
      case 'kiba':
        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${control.lolkey}&query=kiba`)
        buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `NEXT` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'Kiba', imageMessage: imageMsg,
          contentText: `©WhatsApp bot`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: ftroli })
        Ramdani.relayWAMessage(prep)

        break
      //================================================================================================ 
      case 'armin':
        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${control.lolkey}&query=armin`)
        buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `NEXT` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'Armin', imageMessage: imageMsg,
          contentText: `©WhatsApp bot`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: ftroli })
        Ramdani.relayWAMessage(prep)

        break
      //================================================================================================  
      case 'bertholdt':
        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${control.lolkey}&query=bertholdt`)
        buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `NEXT` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'Bertholdt', imageMessage: imageMsg,
          contentText: `©WhatsApp bot`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: ftroli })
        Ramdani.relayWAMessage(prep)

        break
      //================================================================================================  
      case 'erwin':
        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${control.lolkey}&query=erwin`)
        buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `NEXT` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'Erwin', imageMessage: imageMsg,
          contentText: `©WhatsApp bot`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: ftroli })
        Ramdani.relayWAMessage(prep)

        break
      //================================================================================================  
      case 'lolicans':
        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${control.lolkey}&query=lolicans`)
        buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `NEXT` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'Lolicans', imageMessage: imageMsg,
          contentText: `©WhatsApp bot`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: ftroli })
        Ramdani.relayWAMessage(prep)

        break
      //================================================================================================  
      case 'annie':
        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${control.lolkey}&query=annie`)
        buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `NEXT` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'annie', imageMessage: imageMsg,
          contentText: `©WhatsApp bot`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: ftroli })
        Ramdani.relayWAMessage(prep)

        break
      //================================================================================================  
      case 'jean':
        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${control.lolkey}&query=jean`)
        buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `NEXT` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'Jean', imageMessage: imageMsg,
          contentText: `©WhatsApp bot`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: ftroli })
        Ramdani.relayWAMessage(prep)

        break
      //================================================================================================  
      case 'connie':
        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${control.lolkey}&query=connie`)
        buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `NEXT` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'Connie', imageMessage: imageMsg,
          contentText: `©WhatsApp bot`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: ftroli })
        Ramdani.relayWAMessage(prep)

        break
      //================================================================================================  
      case 'historia':
        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${control.lolkey}&query=historia`)
        buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `NEXT` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'Historia', imageMessage: imageMsg,
          contentText: `©WhatsApp bot`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: ftroli })
        Ramdani.relayWAMessage(prep)

        break
      //================================================================================================ 
      case 'sasha':
        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${control.lolkey}&query=sasha`)
        buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `NEXT` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'Sasha', imageMessage: imageMsg,
          contentText: `©WhatsApp bot`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: ftroli })
        Ramdani.relayWAMessage(prep)

        break
      //================================================================================================  
      case 'boruto':
        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${control.lolkey}&query=boruto`)
        buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `NEXT` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'Boruto', imageMessage: imageMsg,
          contentText: `©WhatsApp bot`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: ftroli })
        Ramdani.relayWAMessage(prep)

        break
      //================================================================================================  
      case 'sarada':
        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${control.lolkey}&query=sarada`)
        buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `NEXT` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'Sarada', imageMessage: imageMsg,
          contentText: `©WhatsApp bot`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: ftroli })
        Ramdani.relayWAMessage(prep)

        break
      //================================================================================================  
      case 'sasuke':
        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${control.lolkey}&query=sasuke`)
        buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `NEXT` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'Sasuke', imageMessage: imageMsg,
          contentText: `©WhatsApp bot`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: ftroli })
        Ramdani.relayWAMessage(prep)

        break
      //================================================================================================      
      case 'sasuke':
        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${control.lolkey}&query=sasuke`)
        buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `NEXT` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'Sasuke', imageMessage: imageMsg,
          contentText: `©WhatsApp bot`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: ftroli })
        Ramdani.relayWAMessage(prep)

        break
      //================================================================================================ 
      case 'madara':
        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${control.lolkey}&query=madara`)
        buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `NEXT` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'Madara', imageMessage: imageMsg,
          contentText: `©WhatsApp bot`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: ftroli })
        Ramdani.relayWAMessage(prep)

        break
      //================================================================================================ 
      case 'obito':
        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${control.lolkey}&query=obito`)
        buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `NEXT` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'Obito', imageMessage: imageMsg,
          contentText: `©WhatsApp bot`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: ftroli })
        Ramdani.relayWAMessage(prep)

        break
      //================================================================================================ 
      case 'kanao':
        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${control.lolkey}&query=kanao`)
        buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `NEXT` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'Kanao', imageMessage: imageMsg,
          contentText: `©WhatsApp bot`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: ftroli })
        Ramdani.relayWAMessage(prep)

        break
      //================================================================================================ 
      case 'sayu':
        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${control.lolkey}&query=sayu`)
        buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `NEXT` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'sayu', imageMessage: imageMsg,
          contentText: `©WhatsApp bot`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: ftroli })
        Ramdani.relayWAMessage(prep)

        break
      //================================================================================================ 
      case 'yoshida':
        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${control.lolkey}&query=yoshida`)
        buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `NEXT` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'Yoshida', imageMessage: imageMsg,
          contentText: `©WhatsApp bot`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: ftroli })
        Ramdani.relayWAMessage(prep)

        break
      //================================================================================================ 
      case 'airi':
        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${control.lolkey}&query=airi`)
        buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `NEXT` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'Airi', imageMessage: imageMsg,
          contentText: `©WhatsApp bot`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: ftroli })
        Ramdani.relayWAMessage(prep)

        break
      //================================================================================================ 
      case 'asami':
        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${control.lolkey}&query=asami`)
        buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `NEXT` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'Asami', imageMessage: imageMsg,
          contentText: `©WhatsApp bot`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: ftroli })
        Ramdani.relayWAMessage(prep)

        break
      //================================================================================================ 
      case 'yuzuha':
        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${control.lolkey}&query=yuzuha`)
        buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `NEXT` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'Yuzuha', imageMessage: imageMsg,
          contentText: `©WhatsApp bot`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: ftroli })
        Ramdani.relayWAMessage(prep)

        break
      //================================================================================================ 
      case 'luffy':
        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${control.lolkey}&query=luffy`)
        buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `NEXT` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'Luffy', imageMessage: imageMsg,
          contentText: `©WhatsApp bot`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: ftroli })
        Ramdani.relayWAMessage(prep)

        break
      //================================================================================================ 
      case 'hashimoto':
        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${control.lolkey}&query=hashimoto`)
        buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `NEXT` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'Hashimoto', imageMessage: imageMsg,
          contentText: `©WhatsApp bot`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: ftroli })
        Ramdani.relayWAMessage(prep)

        break
      //================================================================================================ 
      case 'tanLarasCans':
        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${control.lolkey}&query=tanLarasCans`)
        buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `NEXT` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'TanLarasCans', imageMessage: imageMsg,
          contentText: `©WhatsApp bot`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: ftroli })
        Ramdani.relayWAMessage(prep)

        break
      //================================================================================================ 
      case 'nezuko':
        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${control.lolkey}&query=nezuko`)
        buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `NEXT` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'Nezuko', imageMessage: imageMsg,
          contentText: `©WhatsApp bot`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: ftroli })
        Ramdani.relayWAMessage(prep)

        break
      //================================================================================================ 
      case 'ichika':
        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${control.lolkey}&query=ichika`)
        buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `NEXT` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'Ichika', imageMessage: imageMsg,
          contentText: `©WhatsApp bot`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: ftroli })
        Ramdani.relayWAMessage(prep)

        break
      //================================================================================================ 
      case 'zenitsu':
        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${control.lolkey}&query=zenitsu`)
        buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `NEXT` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'Zenitsu', imageMessage: imageMsg,
          contentText: `©WhatsApp bot`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: ftroli })
        Ramdani.relayWAMessage(prep)

        break
      //================================================================================================ 
      case 'giyu':
        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${control.lolkey}&query=giyu`)
        buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `NEXT` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'Giyu', imageMessage: imageMsg,
          contentText: `©WhatsApp bot`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: ftroli })
        Ramdani.relayWAMessage(prep)

        break
      //================================================================================================ 
      case 'sakonji':
        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${control.lolkey}&query=sakonji`)
        buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `NEXT` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'Sakonji', imageMessage: imageMsg,
          contentText: `©WhatsApp bot`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: ftroli })
        Ramdani.relayWAMessage(prep)

        break
        //================================================================================================case 'inosuke': 
        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${control.lolkey}&query=inosuke`)
        buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `NEXT` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'Inosuke', imageMessage: imageMsg,
          contentText: `©WhatsApp bot`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: ftroli })
        Ramdani.relayWAMessage(prep)

        break
      //================================================================================================  
      case 'zoro':
        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${control.lolkey}&query=zoro`)
        buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `NEXT` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'Zoro', imageMessage: imageMsg,
          contentText: `©WhatsApp bot`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: ftroli })
        Ramdani.relayWAMessage(prep)

        break
      //================================================================================================  
      case 'sanji':
        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${control.lolkey}&query=sanji`)
        buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `NEXT` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'sanji', imageMessage: imageMsg,
          contentText: `©WhatsApp bot`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: ftroli })
        Ramdani.relayWAMessage(prep)

        break
      //================================================================================================  
      case 'gon':
        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${control.lolkey}&query=gon`)
        buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `NEXT` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'Gon', imageMessage: imageMsg,
          contentText: `©WhatsApp bot`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: ftroli })
        Ramdani.relayWAMessage(prep)

        break
      //================================================================================================  
      case 'killua':
        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${control.lolkey}&query=killua`)
        buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `NEXT` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'Killua', imageMessage: imageMsg,
          contentText: `©WhatsApp bot`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: ftroli })
        Ramdani.relayWAMessage(prep)

        break
      //================================================================================================  

      //================================================================================================ 
      case 'taiko': case 'natsu': case 'genos': case 'saitama': case 'miku':
        kontoll = args.join(' ')
        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${control.lolkey}&query=${kontoll}`)
        buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `NEXT` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'NEXT', imageMessage: imageMsg,
          contentText: `©WhatsApp bot`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: ftroli })
        Ramdani.relayWAMessage(prep)

        break
      //================================================================================================
      case 'animefanart':
        buff = await getBuffer(`https://api.lolhuman.xyz/api/random/animefanart?apikey=${control.lolkey}`)
        buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `NEXT` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'Animefanart', imageMessage: imageMsg,
          contentText: `©WhatsApp bot`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: ftroli })
        Ramdani.relayWAMessage(prep)

        break
      //================================================================================================  
      case 'megumin':
        buff = await getBuffer(`https://api.lolhuman.xyz/api/random/megumin?apikey=${control.lolkey}`)
        buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `NEXT` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'Megumin', imageMessage: imageMsg,
          contentText: `©WhatsApp bot`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: ftroli })
        Ramdani.relayWAMessage(prep)

        break
      case 'tod':
        const imagenya = (pepe) => {
          return { "url": "https://mmg.whatsapp.net/d/f/AvQZ55ZsZZyrhpWSfc6GFCrUg_TlTwso3wqpy1SjPJZH.enc", "mimetype": "image/jpeg", "caption": pepe, "fileSha256": "xdlK3ZjzXpwVfX1iXqUZEtb15jlgehEWlEV9EN5oYVY=", "fileLength": "999999999999999", "mediaKey": "ieif+9HzutyExM+9j0R0/V1rCDENo8gfyoNqNGzNyyg=", "fileEncSha256": "dzW87sgUZAVc30wa9TdJXBazTrpLRBzgeu2dU6fO82w=", "jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgALQMBIgACEQEDEQH/xAAvAAACAwEAAAAAAAAAAAAAAAADBAACBQEBAAMBAQAAAAAAAAAAAAAAAAABAgME/9oADAMBAAIQAxAAAADcoJaOhkuV0vY4uRZCScQNmQ6qjzE0AivlIwQKGrSCN/NVnLyOWlzLkWz2RGpjyE2HIKh5Cf/EACMQAAICAgIBBAMAAAAAAAAAAAECABEDEiExUQQjQWEQExT/2gAIAQEAAT8AOaocp+TU/r0NEEwepBgyk/EOUj4hBsGZjt0ZbxAS1kxTfRhPmOdUJiPZ7iITz2IRy1GYCRan8MNqE4TP9TEiKlL0Y+Ff2Uo+zGpMgHmbVwYzUa8x/TCuDzMAcKRcxuSzWJnR2pgOoW3i+7lHgRyAp8zAKUzTVzG6M0Y8pMQK0ZwzgGCkSKbY3MjUrxchW4jrUQHlpd0ZXuGeoYdCDEXUER8JQ7XEI1ingiOL67hwGvsxE1FT/8QAGBEAAgMAAAAAAAAAAAAAAAAAAREAECD/2gAIAQIBAT8AcZjOEaNnH//EABwRAAMAAwEBAQAAAAAAAAAAAAABAhEhMQMSEP/aAAgBAwEBPwCfOR+UHws8Fxk+lOh72VTVJIzukQ8jWW2SukYXRbn8+mf/2Q==", }
        }
        const buttonimg = (from, caption, button) => {
          let po = Ramdani.prepareMessageFromContent(from, { "templateMessage": { "hydratedTemplate": { "imageMessage": imagenya(caption), "hydratedContentText": caption, "hydratedFooterText": `${fake}`, "hydratedButtons": button }, "hydratedFourRowTemplate": { "imageMessage": imagenya(caption), "hydratedContentText": caption, "hydratedButtons": button } } }, { quoted: ftroli })
          return Ramdani.relayWAMessage(po, { waitForAck: true })
        }
        let yyoy = [
          {
            "urlButton": {
              "displayText": "Website",
              "url": "https://hardianto.xyz"
            },
            "index": 0
          },
          {
            "callButton": {
              "displayText": "Developer",
              "phoneNumber": "6285945151961@s.whatsapp.net"
            },
            "index": 1
          },
          {
            "quickReplyButton": {
              "displayText": "Owner",
              "id": ".owner"
            },
            "index": 2
          },
          {
            "quickReplyButton": {
              "displayText": "Docs",
              "id": ".docs"
            },
            "index": 3
          },
          {
            "quickReplyButton": {
              "displayText": "T  O  S",
              "id": ".tos"
            },
          }
        ]
        buttonimg(from, `Hi ${pushname}`, yyoy)
        break
      // Ephoto 360 //ephotomenu
      case 'wetglass':
      case 'multicolor3d':
      case 'watercolor':
      case 'luxurygold':
      case 'galaxywallpaper':
      case 'lighttext':
      case 'beautifulflower':
      case 'puppycute':
      case 'royaltext':
      case 'heartshaped':
      case 'birthdaycake':
      case 'galaxystyle':
      case 'hologram3d':
      case 'greenneon':
      case 'glossychrome':
      case 'greenbush':
      case 'metallogo':
      case 'noeltext':
      case 'glittergold':
      case 'textcake':
      case 'starsnight':
      case 'wooden3d':
      case 'textbyname':
      case 'writegalacy':
      case 'galaxybat':
      case 'snow3d':
      case 'birthdayday':
      case 'goldplaybutton':
      case 'silverplaybutton':
      case 'freefire':
        reply(mess.wait)
        if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
        ini_txt = args.join(" ")
        buff = await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${control.lolkey}&text=${ini_txt}`)
        buttons = [{ buttonId: `${prefix}menu`, buttonText: { displayText: `BACK MENU` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: watermark, imageMessage: imageMsg,
          contentText: `©WhatsApp bot`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: fgif })
        Ramdani.relayWAMessage(prep)
        break
      // Photo Oxy //
      case 'shadow':
      case 'cup':
      case 'cup1':
      case 'romance':
      case 'smoke':
      case 'burnpaper':
      case 'lovemessage':
      case 'undergrass':
      case 'love':
      case 'coffe':
      case 'woodheart':
      case 'woodenboard':
      case 'summer3d':
      case 'wolfmetal':
      case 'nature3d':
      case 'underwater':
      case 'golderrose':
      case 'summernature':
      case 'letterleaves':
      case 'glowingneon':
      case 'fallleaves':
      case 'flamming':
      case 'harrypotter':
      case 'carvedwood':
        reply(mess.wait)
        if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
        ini_txt = args.join(" ")
        buff = await getBuffer(`https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${control.lolkey}&text=${ini_txt}`)
        buttons = [{ buttonId: `${prefix}menu`, buttonText: { displayText: `BACK MENU` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: watermark, imageMessage: imageMsg,
          contentText: `©WhatsApp bot`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: fgif })
        Ramdani.relayWAMessage(prep)

        break
      //=================================================================
      case 'ttlogo':
      case 'arcade8bit':
      case 'battlefield4':
      case 'pubg':
        reply(mess.wait)
        if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
        txt1 = args[0]
        txt2 = args[1]
        buff = await getBuffer(`https://api.lolhuman.xyz/api/photooxy2/${command}?apikey=${control.lolkey}&text1=${txt1}&text2=${txt2}`)
        buttons = [{ buttonId: `${prefix}menu`, buttonText: { displayText: `BACK MENU` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: watermark, imageMessage: imageMsg,
          contentText: `©WhatsApp bot`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: fgif })
        Ramdani.relayWAMessage(prep)

        break
      case 'blackpink':
      case 'neon':
      case 'greenneon':
      case 'advanceglow':
      case 'futureneon':
      case 'sandwriting':
      case 'sandsummer':
      case 'sandengraved':
      case 'metaldark':
      case 'neonlight':
      case 'holographic':
      case 'text1917':
      case 'minion':
      case 'deluxesilver':
      case 'newyearcard':
      case 'bloodfrosted':
      case 'halloween':
      case 'jokerlogo':
      case 'fireworksparkle':
      case 'natureleaves':
      case 'bokeh':
      case 'toxic':
      case 'strawberry':
      case 'box3d':
      case 'roadwarning':
      case 'breakwall':
      case 'icecold':
      case 'luxury':
      case 'cloud':
      case 'summersand':
      case 'horrorblood':
      case 'thunder':
        reply(mess.wait)
        if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
        ini_txt = args.join(" ")
        buff = await getBuffer(`https://api.lolhuman.xyz/api/textprome/${command}?apikey${control.lolkey}&text=${ini_txt}`)
        buttons = [{ buttonId: `${prefix}menu`, buttonText: { displayText: `BACK MENU` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'follow @Ramdanigns', imageMessage: imageMsg,
          contentText: `©WhatsApp bot`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: fgif })
        Ramdani.relayWAMessage(prep)

        break
      case 'pornhub':
      case 'glitch':
      case 'avenger':
      case 'space':
      case 'ninjalogo':
      case 'marvelstudio':
      case 'lionlogo':
      case 'wolflogo':
      case 'steel3d':
      case 'wallgravity':
        reply(mess.wait)
        if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
        txt1 = args[0]
        txt2 = args[1]
        buff = await getBuffer(`https://api.lolhuman.xyz/api/textprome2/${command}?apikey=${control.lolkey}&text1=${txt1}&text2=${txt2}`)
        buttons = [{ buttonId: `${prefix}menu`, buttonText: { displayText: `BACK MENU` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'follow @Ramdanigns', imageMessage: imageMsg,
          contentText: `©WhatsApp bot`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: fgif })
        Ramdani.relayWAMessage(prep)

        break
      case 'toimg':
        if (!isQuotedSticker) return reply('reply stickernya')
        reply(mess.wait)
        encmedia = JSON.parse(JSON.stringify(Ramdanif).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
        media = await Ramdani.downloadAndSaveMediaMessage(encmedia)
        ran = getRandom('.png')
        exec(`ffmpeg -i ${media} ${ran}`, (err) => {
          fs.unlinkSync(media)
          if (err) return reply('Gagal, pada saat mengkonversi sticker ke gambar')
          buffer = fs.readFileSync(ran)
          Ramdani.sendMessage(from, buffer, image, { quoted: freply, caption: 'Nih' })
          fs.unlinkSync(ran)
        })
        break
      case 'gifstiker':
      case 's':
      case 'stickergif':
      case 'sticker':
      case 'stiker':

        if ((isMedia && !Ramdanif.message.videoMessage || isQuotedImage) && args.length == 0) {
          const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(Ramdanif).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Ramdanif
          const media = await Ramdani.downloadAndSaveMediaMessage(encmedia)
          ran = '666.webp'
          await ffmpeg(`./${media}`)
            .input(media)
            .on('start', function (cmd) {
              console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
              console.log(`Error : ${err}`)
              fs.unlinkSync(media)
              reply('error')
            })
            .on('end', function () {
              console.log('Finish')
              Ramdani.sendMessage(from, fs.readFileSync(ran), sticker, { quoted: ftroli })
              fs.unlinkSync(media)
              fs.unlinkSync(ran)
            })
            .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(ran)
        } else if ((isMedia && Ramdanif.message.videoMessage.seconds < 11 || isQuotedVideo && Ramdanif.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
          const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(Ramdanif).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Ramdanif
          const media = await Ramdani.downloadAndSaveMediaMessage(encmedia)
          ran = '999.webp'
          reply(mess.wait)

          await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
              console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
              console.log(`Error : ${err}`)
              fs.unlinkSync(media)
              tipe = media.endsWith('.mp4') ? 'video' : 'gif'
              reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
            })
            .on('end', function () {
              console.log('Finish')
              Ramdani.sendMessage(from, fs.readFileSync(ran), sticker, { quoted: freply })
              fs.unlinkSync(media)
              fs.unlinkSync(ran)
            })
            .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(ran)
        } else {
          reply(`reply gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
        }
        break
      ////sertimenu by adit & Ramdani
      case 'fuckboyserti':
        //[❗] Fix Eror By 𝐃𝐲𝐭𝐳𝐕𝐈𝐏LordDogee.

        if (args.length < 1) return reply(`text mana broh?\ncontoh ${prefix + command} ${pushname}`)

        addit = args.join(' ')
        aditty = await getBuffer(`https://api.lolhuman.xyz/api/fuckboy?apikey=Ramdani&name=${addit}`)
        Ramdani.sendMessage(from, aditty, image, { quoted: fgif })

        break
      case 'fuckgirlserti':
        //[❗] Fix Eror By 𝐃𝐲𝐭𝐳𝐕𝐈𝐏LordDogee.

        if (args.length < 1) return reply(`text mana broh?\ncontoh ${prefix + command} ${pushname}`)

        addit = args.join(' ')
        aditty = await getBuffer(`https://api.lolhuman.xyz/api/fuckgirl?apikey=Ramdani&name=${addit}`)
        Ramdani.sendMessage(from, aditty, image, { quoted: fgif })

        break
      case 'bucinserti':
        //[❗] Fix Eror By 𝐃𝐲𝐭𝐳𝐕𝐈𝐏LordDogee.

        if (args.length < 1) return reply(`text mana broh?\ncontoh ${prefix + command} ${pushname}`)

        addit = args.join(' ')
        aditty = await getBuffer(`https://api.lolhuman.xyz/api/bucinserti?apikey=Ramdani&name=${addit}`)
        Ramdani.sendMessage(from, aditty, image, { quoted: fgif })

        break
      case 'pacarserti':
        //[❗] Fix Eror By 𝐃𝐲𝐭𝐳𝐕𝐈𝐏LordDogee.

        if (args.length < 1) return reply(`text mana broh?\ncontoh ${prefix + command} ${pushname}|Aditya`)

        ct = args.join(' ')
        dap1 = ct.split('|')[0]
        dap2 = ct.split('|')[1]
        aditty = await getBuffer(`https://api.lolhuman.xyz/api/pacarserti?apikey=Ramdani&name1=${dap1}&name2=${dap2}`)
        Ramdani.sendMessage(from, aditty, image, { quoted: fgif })

        break
      case 'goodboyserti':
        //[❗] Fix Eror By 𝐃𝐲𝐭𝐳𝐕𝐈𝐏LordDogee.

        if (args.length < 1) return reply(`text mana broh?\ncontoh ${prefix + command} ${pushname}`)

        addit = args.join(' ')
        aditty = await getBuffer(`https://api.lolhuman.xyz/api/goodboy?apikey=Ramdani&name=${addit}`)
        Ramdani.sendMessage(from, aditty, image, { quoted: fgif })

        break
      case 'goodgirlserti':
        //[❗] Fix Eror By 𝐃𝐲𝐭𝐳𝐕𝐈𝐏LordDogee.

        if (args.length < 1) return reply(`text mana broh?\ncontoh ${prefix + command} ${pushname}`)

        addit = args.join(' ')
        aditty = await getBuffer(`https://api.lolhuman.xyz/api/goodgirl?apikey=Ramdani&name=${addit}`)
        Ramdani.sendMessage(from, aditty, image, { quoted: fgif })

        break
      case 'badboyserti':
        //[❗] Fix Eror By 𝐃𝐲𝐭𝐳𝐕𝐈𝐏LordDogee.

        if (args.length < 1) return reply(`text mana broh?\ncontoh ${prefix + command} ${pushname}`)

        addit = args.join(' ')
        aditty = await getBuffer(`https://api.lolhuman.xyz/api/badboy?apikey=Ramdani&name=${addit}`)
        Ramdani.sendMessage(from, aditty, image, { quoted: fgif })

        break
      case 'badgirlserti':
        //[❗] Fix Eror By 𝐃𝐲𝐭𝐳𝐕𝐈𝐏LordDogee.

        if (args.length < 1) return reply(`text mana broh?\ncontoh ${prefix + command} ${pushname}`)

        addit = args.join(' ')
        aditty = await getBuffer(`https://api.lolhuman.xyz/api/badgirl?apikey=Ramdani&name=${addit}`)
        Ramdani.sendMessage(from, aditty, image, { quoted: fgif })

        break
      // Movie & Story
      case 'lk21':
        if (args.length == 0) return reply(`Example: ${prefix + command} Transformer`)
        query = args.join(" ")
        get_result = await fetchJson(`https://api.lolhuman.xyz/api/lk21?apikey=${control.lolkey}&query=${query}`)
        get_result = get_result.result
        ini_txt = `Title : ${get_result.title}\n`
        ini_txt += `Link : ${get_result.link}\n`
        ini_txt += `Genre : ${get_result.genre}\n`
        ini_txt += `Views : ${get_result.views}\n`
        ini_txt += `Duration : ${get_result.duration}\n`
        ini_txt += `Tahun : ${get_result.tahun}\n`
        ini_txt += `Rating : ${get_result.rating}\n`
        ini_txt += `Desc : ${get_result.desc}\n`
        ini_txt += `Actors : ${get_result.actors.join(", ")}\n`
        ini_txt += `Location : ${get_result.location}\n`
        ini_txt += `Date Release : ${get_result.date_release}\n`
        ini_txt += `Language : ${get_result.Language}\n`
        ini_txt += `Link Download : ${get_result.link_dl}`
        thumbnail = await getBuffer(get_result.thumbnail)
        await Ramdani.sendMessage(from, thumbnail, image, { quoted: fgif, caption: ini_txt })
        break
      case 'drakorongoing':
        get_result = await fetchJson(`https://api.lolhuman.xyz/api/drakorongoing?apikey=${control.lolkey}`)
        get_result = get_result.result
        ini_txt = "Ongoing Drakor\n\n"
        for (var x of get_result) {
          ini_txt += `Title : ${x.title}\n`
          ini_txt += `Link : ${x.link}\n`
          ini_txt += `Thumbnail : ${x.thumbnail}\n`
          ini_txt += `Year : ${x.category}\n`
          ini_txt += `Total Episode : ${x.total_episode}\n`
          ini_txt += `Genre : ${x.genre.join(", ")}\n\n`
        }
        reply(ini_txt)
        break
      case 'wattpad':
        if (args.length == 0) return reply(`Example: ${prefix + command} https://www.wattpad.com/707367860-kumpuLan-quote-tere-liye-tere-liye-quote-quote`)
        ini_url = args[0]
        get_result = await fetchJson(`https://api.lolhuman.xyz/api/wattpad?apikey=${control.lolkey}&url=${ini_url}`)
        get_result = get_result.result
        ini_txt = `Title : ${get_result.title}\n`
        ini_txt += `Rating : ${get_result.rating}\n`
        ini_txt += `Motify date : ${get_result.modifyDate}\n`
        ini_txt += `Create date: ${get_result.createDate}\n`
        ini_txt += `Word : ${get_result.word}\n`
        ini_txt += `Comment : ${get_result.comment}\n`
        ini_txt += `Vote : ${get_result.vote}\n`
        ini_txt += `Reader : ${get_result.reader}\n`
        ini_txt += `Pages : ${get_result.pages}\n`
        ini_txt += `Description : ${get_result.desc}\n\n`
        ini_txt += `Story : \n${get_result.story}`
        thumbnail = await getBuffer(get_result.photo)
        await Ramdani.sendMessage(from, thumbnail, image, { quoted: fgif, caption: ini_txt })
        break
      case 'wattpadsearch':
        if (args.length == 0) return reply(`Example: ${prefix + command} Tere Liye`)
        query = args.join(" ")
        get_result = await fetchJson(`https://api.lolhuman.xyz/api/wattpadsearch?apikey=${control.lolkey}&query=${query}`)
        get_result = get_result.result
        ini_txt = "Wattpad Seach : \n"
        for (var x of get_result) {
          ini_txt += `Title : ${x.title}\n`
          ini_txt += `Url : ${x.url}\n`
          ini_txt += `Part : ${x.parts}\n`
          ini_txt += `Motify date : ${x.modifyDate}\n`
          ini_txt += `Create date: ${x.createDate}\n`
          ini_txt += `Coment count: ${x.commentCount}\n\n`
        }
        reply(ini_txt)
        break
      case 'cerpen':
        get_result = await fetchJson(`https://api.lolhuman.xyz/api/cerpen?apikey=${control.lolkey}`)
        get_result = get_result.result
        ini_txt = `Title : ${get_result.title}\n`
        ini_txt += `Creator : ${get_result.creator}\n`
        ini_txt += `Story :\n${get_result.cerpen}`
        titid = ini_txt
        sendButMessage(from, titid, `Klik Untuk Ke Quotes Selanjutnya`, [
          {
            buttonId: `${prefix + command}`,
            buttonText: {
              displayText: `⬡ NEXT `,
            },
            type: 1,
          },]);
        break;
        break
      case 'ceritahoror':
        get_result = await fetchJson(`https://api.lolhuman.xyz/api/ceritahoror?apikey=${control.lolkey}`)
        get_result = get_result.result
        ini_txt = `Title : ${get_result.title}\n`
        ini_txt += `Desc : ${get_result.desc}\n`
        ini_txt += `Story :\n${get_result.story}\n`
        buff = await getBuffer(get_result.thumbnail)
        buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `➡️Next` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'follow @Ramdani_ads', imageMessage: imageMsg,
          contentText: ini_txt, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: fgif })
        Ramdani.relayWAMessage(prep)
        break
      case 'infogempa':
        get_result = await fetchJson(`http://api.lolhuman.xyz/api/infogempa?apikey=${control.lolkey}`)
        get_result = get_result.result
        ini_txt = `Lokasi : ${get_result.lokasi}\n`
        ini_txt += `Waktu : ${get_result.waktu}\n`
        ini_txt += `Potensi : ${get_result.potensi}\n`
        ini_txt += `Magnitude : ${get_result.magnitude}\n`
        ini_txt += `Kedalaman : ${get_result.kedalaman}\n`
        ini_txt += `Koordinat : ${get_result.koordinat}`
        get_buffer = await getBuffer(get_result.map)
        Ramdani.sendMessage(from, get_buffer, image, { quoted: fgif, caption: ini_txt })
        reply(ini_txt)
        break
      case 'jadwaltv':
        if (args.length == 0) return reply(`Contoh: ${prefix + command} RCTI`)
        channel = args[0]
        get_result = await fetchJson(`http://api.lolhuman.xyz/api/jadwaltv/channel?apikey=Ramdani`)
        get_result = get_result.result
        ini_txt = `Jadwal TV ${channel.toUpperCase()}\n`
        for (var x in get_result) {
          ini_txt += `${x} - ${get_result[x]}\n`
        }
        reply(ini_txt)
        break
      case 'coronaglobal':



        ipnya = body.slice(18)

        inf = await fetchJson(`https://api.lolhuman.xyz/api/corona/global?apikey=${control.lolkey}`)

        buffer = await getBuffer(inf.result)

        pesannya = `🐣Info Corona Global🐣\n\n🐣Positif : ${inf.result.positif}\n\n🐥Meninggal : ${inf.result.meninggal}\n\n🐥Sembuh : ${inf.result.sembuh}\n\n🐥Dirawat : ${inf.result.dirawat}`

        sendButMessage(from, pesannya, `Created Ramdani`, [
          {
            buttonId: ".command",
            buttonText: {
              displayText: `⬡ BACK TO MENU `,
            },
            type: 1,
          },]);

        break
      case 'genshinsearch':
        ///Ramdani
        if (args.length == 0) return reply(`Example: ${prefix + command} jean`)
        hero = args.join(" ")
        get_result = await fetchJson(`https://api.lolhuman.xyz/api/genshin/${hero}?apikey=${control.lolkey}`)
        get_result = get_result.result
        ini_txt = `Name : ${get_result.title}\n`
        ini_txt += `Intro : ${get_result.intro}\n`
        ini_txt += `Icon : ${get_result.icon}\n`
        ini_icon = await getBuffer(get_result.cover1)
        await Ramdani.sendMessage(from, ini_icon, image, { quoted: fgif, caption: ini_txt })
        ini_voice = await getBuffer(get_result.cv[0].audio[0])
        await Ramdani.sendMessage(from, ini_voice, audio, { quoted: fgif, mimetype: Mimetype.mp4Audio })
        break
      //=========================================================
      case 'wikipedia':
        ///Ramdani
        if (args.length == 0) return reply(`Example: ${prefix + command} Tahu`)
        query = args.join(" ")
        get_result = await fetchJson(`https://api.lolhuman.xyz/api/wiki?apikey=${control.lolkey}&query=${query}`)
        get_result = get_result.result
        reply(get_result)
        break
      //=========================================================
      case 'translate':
        ///Ramdani
        if (args.length == 0) return reply(`Example: ${prefix + command} en Tahu Bacem`)
        kode_negara = args[0]
        args.shift()
        ini_txt = args.join(" ")
        get_result = await fetchJson(`https://api.lolhuman.xyz/api/translate/auto/${kode_negara}?apikey=${control.lolkey}&text=${ini_txt}`)
        get_result = get_result.result
        init_txt = `From : ${get_result.from}\n`
        init_txt += `To : ${get_result.to}\n`
        init_txt += `Original : ${get_result.original}\n`
        init_txt += `Translated : ${get_result.translated}\n`
        init_txt += `Pronunciation : ${get_result.pronunciation}\n`
        reply(init_txt)
        break
      //=========================================================
      case 'newsinfo':
        ///Ramdani
        get_result = await fetchJson(`https://api.lolhuman.xyz/api/newsinfo?apikey=${control.lolkey}`)
        get_result = get_result.result
        ini_txt = "Result :\n"
        for (var x of get_result) {
          ini_txt += `Title : ${x.title}\n`
          ini_txt += `Author : ${x.author}\n`
          ini_txt += `Source : ${x.source.name}\n`
          ini_txt += `Url : ${x.url}\n`
          ini_txt += `Published : ${x.publishedAt}\n`
          ini_txt += `Description : ${x.description}\n\n`
        }
        reply(ini_txt)
        break
      //=========================================================
      //=========================================================
      //=========================================================
      case 'lirik':
        ///Ramdani
        if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
        query = args.join(" ")
        get_result = await fetchJson(`https://api.lolhuman.xyz/api/lirik?apikey=${control.lolkey}&query=${query}`)
        reply(get_result.result)
        break
      //=========================================================
      case 'cuaca':
        ///Ramdani
        if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
        daerah = args[0]
        get_result = await fetchJson(`https://api.lolhuman.xyz/api/cuaca/${daerah}?apikey=${control.lolkey}`)
        get_result = get_result.result
        ini_txt = `Tempat : ${get_result.tempat}\n`
        ini_txt += `Cuaca : ${get_result.cuaca}\n`
        ini_txt += `Angin : ${get_result.angin}\n`
        ini_txt += `Description : ${get_result.description}\n`
        ini_txt += `Kelembapan : ${get_result.kelembapan}\n`
        ini_txt += `Suhu : ${get_result.suhu}\n`
        ini_txt += `Udara : ${get_result.udara}\n`
        ini_txt += `Permukaan laut : ${get_result.permukaan_laut}\n`
        await Ramdani.sendMessage(from, { degreesLatitude: get_result.latitude, degreesLongitude: get_result.longitude }, location, { quoted: fgif })
        reply(ini_txt)
        break
      //=========================================================
      case 'kodepos':
        ///Ramdani
        if (args.length == 0) return reply(`Example: ${prefix + command} Slemanan or ${prefix + command} 66154`)
        daerah = args.join(" ")
        get_result = await fetchJson(`https://api.lolhuman.xyz/api/koRamdanifos?apikey=${control.lolkey}&query=${daerah}`)
        get_result = get_result.result[0]
        ini_txt = `Provinsi : ${get_result.province}\n`
        ini_txt += `Kabupaten : ${get_result.city}\n`
        ini_txt += `Kecamatan : ${get_result.subdistrict}\n`
        ini_txt += `Kelurahan : ${get_result.urban}\n`
        ini_txt += `Kode Pos : ${get_result.postalcode}`
        reply(ini_txt)
        break
      //========================================================= 
      case 'infobeasiswa':
        ///Ramdani
        get_result = await fetchJson(`https://api.lolhuman.xyz/api/indbeasiswa?apikey=${control.lolkey}`)
        get_result = get_result.result
        ini_txt = 'Info Beasiswa :\n'
        for (var x of get_result) {
          ini_txt += `Title : ${x.title}\n`
          ini_txt += `Link : ${x.link}\n\n`
        }
        reply(ini_txt)
        break
      //=========================================================
      case 'hoax':
        ///Ramdani
        get_result = await fetchJson(`https://api.lolhuman.xyz/api/turnbackhoax?apikey=${control.lolkey}`)
        get_result = get_result.result
        ini_txt = 'Info Hoax :\n'
        for (var x of get_result) {
          ini_txt += `Title : ${x.title}\n`
          ini_txt += `Link : ${x.link}\n`
          ini_txt += `Posted : ${x.posted}\n`
          ini_txt += `Description : ${x.desc}\n\n`
        }
        reply(ini_txt)
        break
      //================================================================================================
      case 'tembak':
        if (args[0] == 'udara') {
          setTimeout(() => {
            reply(`[ PERINTAH DILAKSANAKAN ]`)
          }, 1000)
          setTimeout(() => {
            reply(`[ SEDANG BERBURU ]`)
          }, 5000)
          setTimeout(() => {
            reply(`[ SUKSES !! DAN ANDA MENDAPATKAN ]`)
          }, 8000)
          setTimeout(() => {
            reply(`[ WOW ANDA MENDAPATKAN ]\n[ ${buruh33} ]`)
          }, 12000)
        }
        if (args[0] == 'darat') {
          setTimeout(() => {
            reply(`[ PERINTAH DILAKSANAKAN ]`)
          }, 1000)
          setTimeout(() => {
            reply(`[ SEDANG BERBURU ]`)
          }, 5000)
          setTimeout(() => {
            reply(`[ SUKSES !! DAN ANDA MENDAPATKAN ]`)
          }, 8000)
          setTimeout(() => {
            reply(`[ WOW ANDA MENDAPATKAN ]\n[ ${buruh22} ]`)
          }, 12000)
        }
        if (args[0] == 'laut') {
          setTimeout(() => {
            reply(`[ PERINTAH DILAKSANAKAN ]`)
          }, 1000)
          setTimeout(() => {
            reply(`[ SEDANG BERBURU ]`)
          }, 5000)
          setTimeout(() => {
            reply(`[ SUKSES !! DAN ANDA MENDAPATKAN ]`)
          }, 8000)
          setTimeout(() => {
            reply(`[ WOW ANDA MENDAPATKAN ]\n[ ${buruh11} ]`)
          }, 12000)
        }
        break

      case 'maling':
        if (args[0] == 'rumah') {
          setTimeout(() => {
            reply(`[ SEDANG MASUK KERUMAH ]`)
          }, 1000)
          setTimeout(() => {
            reply(`[ SEDANG MENCARI BARANG ]`)
          }, 5000)
          setTimeout(() => {
            reply(`[ WEHH!!! ADA ORANG BURUAN AMBIL TRUS KABUR ]`)
          }, 8000)
          setTimeout(() => {
            reply(`[ HUHH AKHIR NYA DAPET ]\n[ ${buruh44} ]`)
          }, 12000)
        }
        if (args[0] == 'gedung') {
          setTimeout(() => {
            reply(`[ SEDANG MASUK GEDUNG ]`)
          }, 1000)
          setTimeout(() => {
            reply(`[ SEDANG MENCARI BARANG ]`)
          }, 5000)
          setTimeout(() => {
            reply(`[ WEHH!!! ADA SATPAM BURUAN AMBIL TRUS KABUR ]`)
          }, 8000)
          setTimeout(() => {
            reply(`[ DRamdanifAN ADA POLISI!!! BURUAN MASUK MOBIL ]`)
          }, 12000)
          setTimeout(() => {
            reply(`[ HUHH AKHIR NYA DAPET ]\n[ ${buruh55} ]`)
          }, 15000)
        }
        break
      case 'kbbi':

        if (args.length == 0) return reply(`Example: ${prefix + command} kursi`)
        get_result = await fetchJson(`https://api.lolhuman.xyz/api/kbbi?apikey=${control.lolkey}&query=${args.join(" ")}`)
        lila = get_result.result
        ini_txt = `\`\`\`Kata : ${lila[0].nama}\`\`\`\n`
        ini_txt += `\`\`\`Kata Dasar : ${lila[0].kata_dasar}\`\`\`\n`
        ini_txt += `\`\`\`Pelafalan : ${lila[0].pelafalan}\`\`\`\n`
        ini_txt += `\`\`\`Bentuk Tidak Baku : ${lila[0].bentuk_tidak_baku}\`\`\`\n\n`
        for (var x of lila) {
          ini_txt += `\`\`\`Kode : ${x.makna[0].kelas[0].kode}\`\`\`\n`
          ini_txt += `\`\`\`Kelas : ${x.makna[0].kelas[0].nama}\`\`\`\n`
          ini_txt += `\`\`\`Artinya : \n${x.makna[0].kelas[0].deskripsi}\`\`\`\n\n`
          ini_txt += `\`\`\`Makna Lain : \n${x.makna[0].submakna}\`\`\`\n `
          ini_txt += `\`\`\`Contoh Kalimat : \n${x.makna[0].contoh}\`\`\`\n`
        }
        reply(ini_txt)
        break
      //=========================================================
      case 'jarak':

        if (args.length == 0) return reply(`Example: ${prefix + command} jakarta - yogyakarta`)
        pauls = args.join(" ")
        teks1 = pauls.split("-")[0].trim()
        teks2 = pauls.split("-")[1].trim()
        get_result = await fetchJson(`https://api.lolhuman.xyz/api/jaraktempuh?apikey=${control.lolkey}&kota1=${teks1}&kota2=${teks2}`)
        x = get_result.result
        ini_txt = `Informasi Jarak dari ${teks1} ke ${teks2} :\n\n`
        ini_txt += `\`\`\`◪ Asal :\`\`\` ${x.from.name}\n`
        ini_txt += `\`\`\`◪ Garis Lintang :\`\`\` ${x.from.latitude}\n`
        ini_txt += `\`\`\`◪ Garis Bujur :\`\`\` ${x.from.longitude}\n\n`
        ini_txt += `\`\`\`◪ Tujuan :\`\`\` ${x.to.name}\n`
        ini_txt += `\`\`\`◪ Garis Lintang :\`\`\` ${x.to.latitude}\n`
        ini_txt += `\`\`\`◪ Garis Bujur :\`\`\` ${x.to.longitude}\n\n`
        ini_txt += `\`\`\`◪ Jarak Tempuh :\`\`\` ${x.jarak}\n`
        ini_txt += `\`\`\`◪ Waktu Tempuh :\`\`\`\n`
        ini_txt += `   ╭───────────────❏\n`
        ini_txt += `❍┤ Kereta Api : ${x.kereta_api}\n`
        ini_txt += `❍┤ Pesawat : ${x.pesawat}\n`
        ini_txt += `❍┤ Mobil : ${x.mobil}\n`
        ini_txt += `❍┤ Motor : ${x.motor}\n`
        ini_txt += `❍┤ Jalan Kaki : ${x.jalan_kaki}\n`
        ini_txt += `   ╰───────────────❏\n`
        reply(ini_txt)
        break
      //=========================================================

      //=========================================================

      //=========================================================
      case 'jadwaltvnow':

        get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadwaltv/now?apikey=${control.lolkey}`)
        get_result = get_result.result
        ini_txt = `Jadwal TV Now :\n`
        for (var x in get_result) {
          ini_txt += `${x.toUpperCase()}${get_result[x]}\n\n`
        }
        reply(ini_txt)
        break
      //=========================================================
      case 'jadwalbola':

        get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadwalbola?apikey=${control.lolkey}`)
        get_result = get_result.result
        ini_txt = "Jadwal Bola :\n"
        for (var x of get_result) {
          ini_txt += `Hari : ${x.hari}\n`
          ini_txt += `Jam : ${x.jam}\n`
          ini_txt += `Event : ${x.event}\n`
          ini_txt += `Match : ${x.match}\n`
          ini_txt += `TV : ${x.tv}\n\n`
        }
        reply(ini_txt)
        break
      //=========================================================
      case 'heroml':

        if (args.length == 0) return reply(`Example: ${prefix + command} Fanny`)
        hero = args.join(" ")
        get_result = await fetchJson(`https://api.lolhuman.xyz/api/heroml/${hero}?apikey=${control.lolkey}`)
        get_result = get_result.result
        ini_txt = `Name : ${get_result.hero_name}\n`
        ini_txt += `Entrance Quotes : ${get_result.ent_quotes}\n`
        ini_txt += `Role : ${get_result.detail.role}\n`
        ini_txt += `Specialty : ${get_result.detail.specialty}\n`
        ini_txt += `Laning : ${get_result.detail.laning_recommendation}\n`
        ini_txt += `Release : ${get_result.detail.release_date}\n`
        ini_txt += `Movement speed : ${get_result.attr.movement_speed}\n`
        ini_txt += `Physical attack : ${get_result.attr.physical_attack}\n`
        ini_txt += `Magic power : ${get_result.attr.magic_power}\n`
        ini_txt += `Physical defense : ${get_result.attr.physical_defense}\n`
        ini_txt += `Magic defense : ${get_result.attr.magic_defense}\n`
        ini_txt += `Critical rate : ${get_result.attr.basic_atk_crit_rate}\n`
        ini_txt += `Hp : ${get_result.attr.hp}\n`
        ini_txt += `Mana : ${get_result.attr.mana}\n`
        ini_txt += `Mana regen : ${get_result.attr.mana_regen}\n`
        ini_icon = await getBuffer(get_result.icon)
        await Ramdani.sendMessage(from, ini_icon, image, { quoted: fgif, caption: ini_txt })
        break
      //=========================================================
      case 'mlstalk':

        if (args.length == 0) return reply(`Example: ${prefix + command} 84830127/2169`)
        ml_id = args[0]
        get_result = await fetchJson(`https://api.lolhuman.xyz/api/mobilelegend/${ml_id}?apikey=${control.lolkey}`)
        reply(get_result.result)
        break

      case 'fox':


        reply('BENTAR')
        anu = await fetchJson(`https://some-random-api.ml/img/fox`)
        anu1 = await getBuffer(anu.link)
        Ramdani.sendMessage(from, anu1, image, { caption: `nih kak mirip kamu`, quoted: ftroli })
        break
      case 'dog':


        reply('BENTAR')
        anu = await fetchJson(`https://some-random-api.ml/img/dog`)
        anu1 = await getBuffer(anu.link)
        Ramdani.sendMessage(from, anu1, image, { caption: `nih kak mirip kamu`, quoted: ftroli })
        break
      case 'cat':


        reply('BENTAR')
        anu = await fetchJson(`https://some-random-api.ml/img/cat`)
        anu1 = await getBuffer(anu.link)
        Ramdani.sendMessage(from, anu1, image, { caption: `nih kak mirip kamu`, quoted: ftroli })
        break
      case 'panda':


        reply('BENTAR')
        anu = await fetchJson(`https://some-random-api.ml/img/panda`)
        anu1 = await getBuffer(anu.link)
        Ramdani.sendMessage(from, anu1, image, { caption: `nih kak mirip kamu`, quoted: ftroli })
        break
      case 'panda2':


        reply('BENTAR')
        anu = await fetchJson(`https://some-random-api.ml/img/red_panda`)
        anu1 = await getBuffer(anu.link)
        Ramdani.sendMessage(from, anu1, image, { caption: `nih kak mirip kamu`, quoted: ftroli })
        break
      case 'bird':


        reply('BENTAR')
        anu = await fetchJson(`https://some-random-api.ml/img/birb`)
        anu1 = await getBuffer(anu.link)
        Ramdani.sendMessage(from, anu1, image, { caption: `nih kak mirip kamu`, quoted: ftroli })
        break
      case 'koala':


        reply('BENTAR')
        anu = await fetchJson(`https://some-random-api.ml/img/koala`)
        anu1 = await getBuffer(anu.link)
        Ramdani.sendMessage(from, anu1, image, { caption: `nih kak mirip kamu`, quoted: ftroli })
        break
      case 'debug2':
        res = await Ramdani.prepareMessageFromContent(from, {
          "templateMessage": {
            "hydratedFourRowTemplate": {
              "hydratedContentText": "Hello,\nSelamat Datang Ramdani Razzaq",
              "hydratedFooterText": "Debug By Ramdani",
              "hydratedButtons": [
                {
                  "urlButton": {
                    "displayText": "Join Group Whatsapp Ramdani Razzaq",
                    "url": "https://chat.whatsapp.com/KdA0jvJmgQ49uIIg7NmGVJ"
                  },
                  "index": 0
                }
              ]
            },
            "hydratedTemplate": {
              "hydratedContentText": "Hello,\nSelamat Datang Ramdani Razzaq",
              "hydratedFooterText": "Debug By Ramdani",
              "hydratedButtons": [
                {
                  "urlButton": {
                    "displayText": "Join Group Whatsapp Ramdani Razzaq",
                    "url": "https://chat.whatsapp.com/KdA0jvJmgQ49uIIg7NmGVJ"
                  },
                  "index": 0
                }
              ]
            }
          }
        }, { quoted: Ramdanif })
        Ramdani.relayWAMessage(res)
        break
      case 'kartundrama':
        ress = await Drama()
        let megg = `Random Drama Kartun`
        for (let i = 0; i < ress.hasil.length; i++) {
          megg += `\n\n${ress.hasil[i].sinopsis}\nUrl : ${ress.hasil[i].url}`
        }
        thumb = await getBuffer(ress.hasil[0].img)
        Ramdani.sendMessage(from, thumb, MessageType.image, { caption: `${megg}` })
        break
      case 'kartunadventure':
        ress = await Adventure()
        let megggg = `Random Adventure Kartun`
        for (let i = 0; i < ress.hasil.length; i++) {
          megggg += `\n\n${ress.hasil[i].sinopsis}\nUrl : ${ress.hasil[i].link}`
        }
        thumb = await getBuffer(ress.hasil[0].img)
        Ramdani.sendMessage(from, thumb, MessageType.image, { caption: `${megggg}` })
        break
      case 'kartunaction':
        ress = await Action()
        let meggg = `Random Action Kartun`
        for (let i = 0; i < ress.hasil.length; i++) {
          meggg += `\n\n${ress.hasil[i].sinopsis}\nUrl : ${ress.hasil[i].link}`
        }
        thumb = await getBuffer(ress.hasil[0].img)
        Ramdani.sendMessage(from, thumb, MessageType.image, { caption: `${meggg}` })
        break
      case 'kartunmovie':
        try {
          result = await Movie()
          let meg = `Random Movie Kartun`
          for (let i = 0; i < result.hasil.length; i++) {
            meg += `\n\n${result.hasil[i].sinopsis}\nUrl : ${result.hasil[i].url}`
          }
          thumb = await getBuffer(result.hasil[0].img)
          Ramdani.sendMessage(from, thumb, MessageType.image, { caption: `${meg}` })
        } catch (e) {
          console.log(e)
          reply(e)
        }
        break
      case 'searchkartun':
        film = body.slice(14)
        try {
          result = await SearchKartun(film)
          let hehee = `Search kartun\nQuery : ${film}`
          for (let i = 0; i < result.hasil.length; i++) {
            hehee += `\n\n${result.hasil[i].sinopsis}\nLink : ${result.hasil[i].link}\nEpisode : ${result.hasil[i].episode}\nGenre : ${result.hasil[i].genre}`
          }
          thumb = await getBuffer(result.hasil[0].image)
          Ramdani.sendMessage(from, thumb, MessageType.image, { caption: `${hehee}` })
        } catch (e) {
          console.log(e)
          reply(`Error, Coba judul lain!\n\nExample: ${prefix}searchkartun Spongebob`)
        }
        break
      case 'tourl2':
        if ((isMedia && !Ramdanif.message.videoMessage || isQuotedImage || isQuotedVideo) && args.length == 0) {
          boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(Ramdanif).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Ramdanif
          owgi = await Ramdani.downloadMediaMessage(boij)
          res = await uploadImages(owgi)
          reply(res)
        } else {
          reply('kirim/reply gambar/video')
        }
        break
      //=====================================================================  

      //=====================================================================  
      case 'twiterstalk':
        username = args[0]
        get_result = await fetchJson(`http://lolhuman.xyz/api/twitter/${username}?apikey=${control.lolkey}`, { method: 'get' })
        get_result = get_result.result
        mn1k = `Nama : ${get_result.name}\n`
        txt += `Name Screen : ${get_result.screen_name}\n`
        txt += `Bio : ${get_result.description}\n`
        txt += `Followers : ${get_result.followers}\n`
        txt += `Following: ${get_result.following}\n`
        txt += `Like : ${get_result.like}\n`
        txt += `Tweet : ${get_result.tweet}\n`
        txt += `Join : ${get_result.joined}\n`
        profile = await getBuffer(get_result.profile_picture)
        banner = await getBuffer(get_result.banner)
        Ramdani.sendMessage(from, profile, image, { quoted: freply, caption: txt })
        Ramdani.sendMessage(from, banner, image, { quoted: freply, caption: 'BANNERNYA OM!' })
        break
      //================================================================================================
      //======================================================================================================= 
      case 'stalkig':
      case 'igstalk':

        if (args.length == 0) return reply(`Example: ${prefix + command} Ramdani`)
        reply(mess.wait)
        username = args[0]
        ini_result = await fetchJson(`https://api.lolhuman.xyz/api/stalkig/${username}?apikey=${control.lolkey}`)
        ini_result = ini_result.result
        ini_buffer = await getBuffer(ini_result.photo_profile)
        ini_txt = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
 ┆ INSTAGRAM PROFILE
 └┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶
 
 Data Berhasil Didapatkan!
 \`\`\`🐥 Username : ${ini_result.username}\`\`\`
 \`\`\`🐥 Nama : ${ini_result.fullname}\`\`\`
 \`\`\`🐥 Pengikut : ${ini_result.followers}\`\`\`
 \`\`\`🐥 Mengikuti : ${ini_result.following}\`\`\`
 \`\`\`🐥 Deskripsi : ${ini_result.bio}\`\`\`
 \`\`\`🐥 Link : https://instagram.com/${ini_result.username}\`\`\`
 `
        Ramdani.sendMessage(from, ini_buffer, image, { caption: ini_txt, thumbnail: Buffer.alloc(0) })
        break
      //=========================================================
      //=========================================================
      case 'imgtourl':
      case 'img2url':
      case 'tourl':

        reply(mess.wait)
        var imgbb = require('imgbb-uploader')
        var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(Ramdanif).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Ramdanif
        var media = await Ramdani.downloadAndSaveMediaMessage(encmedia)
        imgbb('39d895963468b814fad0514bd28787e2', media)
          .then(data => {
            var caps = `IMAGE TO URL\n\n*>  ID :* ${data.id}\n*>  MimeType :* ${data.image.mime}\n*>  Extension :* ${data.image.extension}\n*>  URL :* ${data.display_url}`
            ibb = fs.readFileSync(media)
            Ramdani.sendMessage(from, ibb, image, { quoted: freply, caption: caps })
          })
          .catch(err => {
            throw err
          })
        break
      //================================================================================================
      case 'pinterest':
        if (args.length == 0) return reply(`Example: ${prefix + command} loli`)
        query = args.join(" ")
        reply(mess.wait)
        ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${control.lolkey}&query=${query}`)
        ini_url = ini_url.result
        buff = await getBuffer(ini_url)
        buttons = [{ buttonId: `${prefix + command} ${query}`, buttonText: { displayText: `➡️Next` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: watermark, imageMessage: imageMsg,
          contentText: `klik Next untuk ke gambar selanjut nya`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: freply })
        Ramdani.relayWAMessage(prep)
        break
      
      
      case 'quotes':
        quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotes?apikey=${control.lolkey}`)
        quotes = quotes.result
        author = quotes.by
        quotes = quotes.quote
        reply(`${quotes}\n\n*â€• ${author}*`)
        break
      case 'quotesanime':
        quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotesnime?apikey=${control.lolkey}`)
        quotes = quotes.result
        quote = quotes.quote
        char = quotes.character
        anime = quotes.anime
        episode = quotes.episode
        reply(`${quote}\n\n*â€• ${char}\nâ€• ${anime} ${episode}*`)
        break
      case 'quotesdilan':
        quotedilan = await fetchJson(`https://api.lolhuman.xyz/api/quotes/dilan?apikey=${control.lolkey}`)
        reply(quotedilan.result)
        break
      case 'quotesimage':
        get_result = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${control.lolkey}`)
        await Ramdani.sendMessage(from, get_result, image, { quotes: fvn })
        break
      case 'faktaunik':
      case 'katabijak':
      case 'pantun':
      case 'bucin':
        get_result = await fetchJson(`https://api.lolhuman.xyz/api/random/${command}?apikey=${control.lolkey}`)
        reply(get_result.result)
        break
      case 'randomnama':
        anu = await fetchJson(`https://api.lolhuman.xyz/api/random/nama?apikey=${control.lolkey}`)
        reply(anu.result)
        break
      case 'google':
        if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
        query = args.join(" ")
        get_result = await fetchJson(`https://api.lolhuman.xyz/api/gsearch?apikey=${control.lolkey}&query=${query}`)
        get_result = get_result.result
        ini_txt = 'Google Search : \n'
        for (var x of get_result) {
          ini_txt += `Title : ${x.title}\n`
          ini_txt += `Link : ${x.link}\n`
          ini_txt += `Desc : ${x.desc}\n\n`
        }
        reply(ini_txt)
        break
      case 'art':
      case 'bts':
      case 'exo':
      case 'elf':
      case 'loli':
      case 'neko':
      case 'waifu':
      case 'shota':
      case 'husbu':
      case 'sagiri':
      case 'shinobu':
      case 'megumin':
      case 'wallnime':
        getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${control.lolkey}`).then((gambar) => {
          Ramdani.sendMessage(from, gambar, image, { quoted: fvn })
        })
        break
      ///meme maker

      //=======================================================================
      case 'meme1':
        if (!q) return reply(`Example : ${prefix + command} text|text|text`)
        reply(mess.wait)
        gl1 = q.split('|')[0]
        gl2 = q.split('|')[1]
        gl3 = q.split('|')[2]
        buffer = await getBuffer(`https://api.lolhuman.xyz/api/meme6?apikey=${control.lolkey}&text1=${gl1}&text2=${gl2}&text3=${gl3}`)
        Ramdani.sendMessage(from, buffer, image, { quoted: fgif })
        break
      //=======================================================================
      case 'meme2':
        if (!q) return reply(`Example : ${prefix + command} text|text`)
        reply(mess.wait)
        gl1 = q.split('|')[0]
        gl2 = q.split('|')[1]
        buffer = await getBuffer(`https://api.lolhuman.xyz/api/meme7?apikey=${control.lolkey}&text1=${gl1}&text2=${gl2}`)
        Ramdani.sendMessage(from, buffer, image, { quoted: fgif })
        break
      //=======================================================================
      case 'meme3':
        if (!q) return reply(`Example : ${prefix + command} text|text`)
        reply(mess.wait)
        gl1 = q.split('|')[0]
        gl2 = q.split('|')[1]
        buffer = await getBuffer(`https://api.lolhuman.xyz/api/meme8?apikey=${control.lolkey}&text1=${gl1}&text2=${gl2}`)
        Ramdani.sendMessage(from, buffer, image, { quoted: fgif })
        break
      //=======================================================================
      case 'changemymind':
      case 'cmm':
        if (!q) return reply(`Example : ${prefix + command} text`)
        reply(mess.wait)
        gl1 = q.split('|')[0]
        buffer = await getBuffer(`https://api.lolhuman.xyz/api/creator/changemymind?apikey=${control.lolkey}&text=${gl1}`)
        Ramdani.sendMessage(from, buffer, image, { quoted: fgif })
        break
      //=======================================================================
      case 'ohno':
        if (!q) return reply(`Example : ${prefix + command} text`)
        reply(mess.wait)
        gl1 = q.split('|')[0]
        buffer = await getBuffer(`https://api.lolhuman.xyz/api/creator/ohno?apikey=${control.lolkey}&text=${gl1}`)
        Ramdani.sendMessage(from, buffer, image, { quoted: fgif })
        break
      case 'randomasupan':
        reply(mess.wait)
        get_result = await fetchJson(`http://api.lolhuman.xyz/api/asupan?apikey=${control.lolkey}`)
        buffer = await getBuffer(get_result.result)
        Ramdani.sendMessage(from, buffer, video, { quoted: fvn, mimetype: Mimetype.mp4, filename: "asupan.mp4" })
        break
      case 'gimage':
        if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
        query = args.join(" ")
        ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/gimage?apikey=${control.lolkey}&query=${query}`)
        await Ramdani.sendMessage(from, ini_buffer, image, { quoted: ftroli })
        break
      case 'gimage2':
        if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
        query = args.join(" ")
        get_result = await fetchJson(`https://api.lolhuman.xyz/api/gimage2?apikey=${control.lolkey}&query=${query}`)
        get_result = get_result.result
        for (var x = 0; x <= 5; x++) {
          var ini_buffer = await getBuffer(get_result[x])
          await Ramdani.sendMessage(from, ini_buffer, image)
        }
        break
      case 'konachan':
        if (args.length == 0) return reply(`Example: ${prefix + command} azur_lane`)
        query = args.join(" ")
        ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/konachan?apikey=${control.lolkey}&query=${query}`)
        await Ramdani.sendMessage(from, ini_buffer, image, { quoted: ftroli })
        break
      case 'wallpapersearch':
        if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
        query = args.join(" ")
        get_result = await fetchJson(`https://api.lolhuman.xyz/api/wallpaper?apikey=${control.lolkey}&query=${query}`)
        ini_buffer = await getBuffer(get_result.result)
        await Ramdani.sendMessage(from, ini_buffer, image, { quoted: ftroli })
        break
      case 'wallpapersearch2':
        if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
        query = args.join(" ")
        get_result = await fetchJson(`https://api.lolhuman.xyz/api/wallpaper2?apikey=${control.lolkey}&query=${query}`)
        ini_buffer = await getBuffer(get_result.result)
        await Ramdani.sendMessage(from, ini_buffer, image, { quoted: ftroli })
        break
      case 'shopee':
        reply(mess.wait)
        if (args.length == 0) return reply(`Example: ${prefix + command} tas gendong`)
        query = args.join(" ")
        get_result = await fetchJson(`https://api.lolhuman.xyz/api/shopee?apikey=${control.lolkey}&query=${query}`)
        get_result = get_result.result
        ini_txt = 'Shopee Search : \n'
        for (var x of get_result) {
          ini_txt += `Name : ${x.name}\n`
          ini_txt += `Terjual : ${x.sold}\n`
          ini_txt += `Stock : ${x.stock}\n`
          ini_txt += `Lokasi : ${x.shop_loc}\n`
          ini_txt += `Link : ${x.link_produk}\n\n`
        }
        reply(ini_txt)
        break
      case "astetick":
      case "videoanime":
      case "storyanime2":
        reply(mess.wait)
        daffa = await getBuffer(`https://megayaa.herokuapp.com/api/randomaesthetic`)
        kodo = `*_CLICK NEXT UNTUK SELANJUTNYA_*`
        sendButVideo(from, kodo, watermark, daffa, [
          {
            buttonId: `${prefix + command}`,
            buttonText: {
              displayText: `NEXT`,
            },
            type: 1,
          },
        ]);
        //Ramdani.sendMessage(from, Iki, video, {quoted: freply, thumbnail: thumb })
        break
      /*case 'gore':
        reply(mess.wait)
        anu = await fetchJson(`https://caliphapi.com/api/randomgore?apikey=YYIFOPMO`)
        buffer = await getBuffer(anu.result)
        //Ramdani.sendMessage(from, buffer, video, { quoted: freply })
        kodo = `*_CLICK NEXT UNTUK SELANJUTNYA_*`
        sendButVideo(from, kodo, watermark, buffer, [
          {
            buttonId: `${prefix + command}`,
            buttonText: {
              displayText: `NEXT`,
            },
            type: 1,
          },
        ]);
        break*/
      case 'blackpinkk':
        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${control.lolkey}&query=blackpink`)
        buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `NEXT` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: `${control.NamaBot}`, imageMessage: imageMsg,
          contentText: `©WhatsApp bot`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: ftroli })
        Ramdani.relayWAMessage(prep)

        break
      case 'twice':
        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${control.lolkey}&query=${command} kpop`)
        buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `NEXT` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: `${control.NamaBot}`, imageMessage: imageMsg,
          contentText: `©WhatsApp bot`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: ftroli })
        Ramdani.relayWAMessage(prep)

        break

      case 'lightsum':
        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${control.lolkey}&query=${command}`)
        buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `NEXT` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: `${control.NamaBot}`, imageMessage: imageMsg,
          contentText: `©WhatsApp bot`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: ftroli })
        Ramdani.relayWAMessage(prep)

        break
      case 'bugaboo':
        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${control.lolkey}&query=${command} kpop`)
        buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `NEXT` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: `${control.NamaBot}`, imageMessage: imageMsg,
          contentText: `©WhatsApp bot`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: ftroli })
        Ramdani.relayWAMessage(prep)

        break
      case 'majors':
        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${control.lolkey}&query=${command} kpop`)
        buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `NEXT` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: `${control.NamaBot}`, imageMessage: imageMsg,
          contentText: `©WhatsApp bot`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: ftroli })
        Ramdani.relayWAMessage(prep)

        break
      case 'secret':
        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${control.lolkey}&query=${command} kpop`)
        buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `NEXT` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: `${control.NamaBot}`, imageMessage: imageMsg,
          contentText: `©WhatsApp bot`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: ftroli })
        Ramdani.relayWAMessage(prep)

        break
      case 'rainbow':
        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${control.lolkey}&query=${command} kpop`)
        buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `NEXT` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: `${control.NamaBot}`, imageMessage: imageMsg,
          contentText: `©WhatsApp bot`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: ftroli })
        Ramdani.relayWAMessage(prep)

        break
      case 'pixy':
        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${control.lolkey}&query=${command} kpop`)
        buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `NEXT` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: `${control.NamaBot}`, imageMessage: imageMsg,
          contentText: `©WhatsApp bot`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: ftroli })
        Ramdani.relayWAMessage(prep)

        break
      case 'lovely':
        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${control.lolkey}&query=${command} kpop`)
        buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `NEXT` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: `${control.NamaBot}`, imageMessage: imageMsg,
          contentText: `©WhatsApp bot`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: ftroli })
        Ramdani.relayWAMessage(prep)

        break
      case 'cecanindo':
        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${control.lolkey}&query=artis cantik indonesia`)
        buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `NEXT` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: `${control.NamaBot}`, imageMessage: imageMsg,
          contentText: `©WhatsApp bot`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: ftroli })
        Ramdani.relayWAMessage(prep)

        break
      case 'cecanmalaysia':
        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${control.lolkey}&query=Artis cantik malaysia `)
        buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `NEXT` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: `${control.NamaBot}`, imageMessage: imageMsg,
          contentText: `©WhatsApp bot`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: ftroli })
        Ramdani.relayWAMessage(prep)

        break
      case 'cecankorea':
        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${control.lolkey}&query=Artis cantik rusia`)
        buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `NEXT` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: `${control.NamaBot}`, imageMessage: imageMsg,
          contentText: `©WhatsApp bot`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: ftroli })
        Ramdani.relayWAMessage(prep)

        break
      case 'cecanchina':
        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${control.lolkey}&query=Artis cantik china`)
        buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `NEXT` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: `${control.NamaBot}`, imageMessage: imageMsg,
          contentText: `©WhatsApp bot`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: ftroli })
        Ramdani.relayWAMessage(prep)

        break
      case 'cecanjapan':
        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${control.lolkey}&query=Artis cantik jepang`)
        buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `NEXT` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: `${control.NamaBot}`, imageMessage: imageMsg,
          contentText: `©WhatsApp bot`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: ftroli })
        Ramdani.relayWAMessage(prep)

        break
      case 'coganindo':
        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${control.lolkey}&query=Aktor ganteng indonesia`)
        buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `NEXT` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: `${control.NamaBot}`, imageMessage: imageMsg,
          contentText: `©WhatsApp bot`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: ftroli })
        Ramdani.relayWAMessage(prep)

        break
      case 'coganmalaysia':
        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${control.lolkey}&query=aktor ganteng malaysia`)
        buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `NEXT` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: `${control.NamaBot}`, imageMessage: imageMsg,
          contentText: `©WhatsApp bot`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: ftroli })
        Ramdani.relayWAMessage(prep)

        break
      case 'cogankorea':
        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${control.lolkey}&query=aktor korea ganteng`)
        buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `NEXT` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: `${control.NamaBot}`, imageMessage: imageMsg,
          contentText: `©WhatsApp bot`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: ftroli })
        Ramdani.relayWAMessage(prep)

        break
      case 'coganchina':
        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${control.lolkey}&query=aktor china ganteng`)
        buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `NEXT` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: `${control.NamaBot}`, imageMessage: imageMsg,
          contentText: `©WhatsApp bot`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: ftroli })
        Ramdani.relayWAMessage(prep)

        break
      case 'coganjapan':
        buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${control.lolkey}&query=aktor ganteng jepang`)
        buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `NEXT` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: `${control.NamaBot}`, imageMessage: imageMsg,
          contentText: `©WhatsApp bot`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: ftroli })
        Ramdani.relayWAMessage(prep)

        break
      case 'gemes':
        encmedia = JSON.parse(JSON.stringify(Ramdanif).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
        media = await Ramdani.downloadAndSaveMediaMessage(encmedia)
        ran = getRandom('.mp3')
        exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=50000" ${ran}`, (err, stderr, stdout) => {
          fs.unlinkSync(media)
          if (err) return reply('Error!')
          riu = fs.readFileSync(ran)
          Ramdani.sendMessage(from, riu, audio, { mimetype: 'audio/mp4', ptt: true, quoted: Ramdanif })
          fs.unlinkSync(ran)
        })
        break
      //nightcore Mengubah Suara Jadi Nada Rendah
      case 'nightcore':
        encmedia = JSON.parse(JSON.stringify(Ramdanif).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
        media = await Ramdani.downloadAndSaveMediaMessage(encmedia)
        ran = getRandom('.mp3')
        exec(`ffmpeg -i ${media} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
          fs.unlinkSync(media)
          if (err) return reply('Error!')
          hah = fs.readFileSync(ran)
          Ramdani.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: true, quoted: Ramdanif, duration: 999999999999 })
          fs.unlinkSync(ran)
        })
        break
      //fast Mengubah Suara Bernada Sedeng
      case 'fast':
        encmedia = JSON.parse(JSON.stringify(Ramdanif).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
        media = await Ramdani.downloadAndSaveMediaMessage(encmedia)
        ran = getRandom('.mp3')
        exec(`ffmpeg -i ${media} -filter:a "atempo=1.63,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
          fs.unlinkSync(media)
          if (err) return reply('Error!')
          uhh = fs.readFileSync(ran)
          Ramdani.sendMessage(from, uhh, audio, { mimetype: 'audio/mp4', ptt: true, quoted: Ramdanif })
          fs.unlinkSync(ran)
        })
        break
      //tupai Mengubah Suara Jadi  Lucu Lucu Gimana 
      case 'tupai2':
        reply(mess.wait)
        encmedia = JSON.parse(JSON.stringify(Ramdanif).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
        media = await Ramdani.downloadAndSaveMediaMessage(encmedia)
        ran = getRandom('.mp3')
        exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
          fs.unlinkSync(media)
          if (err) return reply('Error!')
          hah = fs.readFileSync(ran)
          Ramdani.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: true, quoted: Ramdanif })
          fs.unlinkSync(ran)
        })
        break
      //Gemuk Bersuara Besar Dan Dengung
      case 'gemuk2':
        costum('SABAR BRO!!! ', text, tescuk, cr)
        encmedia = JSON.parse(JSON.stringify(Ramdanif).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
        media = await Ramdani.downloadAndSaveMediaMessage(encmedia)
        ran = getRandom('.mp3')
        exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
          fs.unlinkSync(media)
          if (err) return reply('Error!')
          hah = fs.readFileSync(ran)
          Ramdani.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: true, quoted: Ramdanif })
          fs.unlinkSync(ran)
        })
        break
      //bass Bernada Besar Dan Getar
      case 'bass':
        reply(mess.wait)
        encmedia = JSON.parse(JSON.stringify(Ramdanif).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
        media = await Ramdani.downloadAndSaveMediaMessage(encmedia)
        ran = getRandom('.mp3')
        exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
          fs.unlinkSync(media)
          if (err) return reply('Error!')
          hah = fs.readFileSync(ran)
          Ramdani.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: true, quoted: Ramdanif })
          fs.unlinkSync(ran)
        })
        break
      //ghost  Bernada Serem Dan Menakutkan
      case 'ghost':
        encmedia = JSON.parse(JSON.stringify(Ramdanif).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
        media = await Ramdani.downloadAndSaveMediaMessage(encmedia)
        ran = getRandom('.mp3')
        exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=3486" ${ran}`, (err, stderr, stdout) => {
          fs.unlinkSync(media)
          if (err) return reply('Error!')
          hah = fs.readFileSync(ran)
          Ramdani.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: true, quoted: Ramdanif })
          fs.unlinkSync(ran)
        })
        break
      case 'slow':
        if (!isQuotedAudio) return reply('Reply audio nya ')
        encmedia = JSON.parse(JSON.stringify(Ramdanif).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
        media = await Ramdani.downloadAndSaveMediaMessage(encmedia)

        ran = getRandom('.mp3')
        exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
          fs.unlinkSync(media)
          if (err) return reply('Error!')
          hah = fs.readFileSync(ran)
          Ramdani.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: true, quoted: Ramdanif })
          fs.unlinkSync(ran)
        })
        break
      //===========================================================

      //===========================================================
      case 'hode':
        encmedia = JSON.parse(JSON.stringify(Ramdanif).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
        media = await Ramdani.downloadAndSaveMediaMessage(encmedia)

        ran = getRandom('.mp3')
        exec(`ffmpeg -i ${media} -af atempo=4/3,asetrate=44500*3/4 ${ran}`, (err, stderr, stdout) => {
          fs.unlinkSync(media)
          if (err) return reply('Error!')
          hah = fs.readFileSync(ran)
          Ramdani.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: true, quoted: Ramdanif })
          fs.unlinkSync(ran)
        })
        break
      //=========================================================== 
      case 'gemuk':
        if (!isQuotedAudio) return reply('Reply audio nya ')
        encmedia = JSON.parse(JSON.stringify(Ramdanif).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
        media = await Ramdani.downloadAndSaveMediaMessage(encmedia)

        ran = getRandom('.mp3')
        exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
          fs.unlinkSync(media)
          if (err) return reply('Error!')
          hah = fs.readFileSync(ran)
          Ramdani.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: true, quoted: Ramdanif })
          fs.unlinkSync(ran)
        })
        break
      //===================================================================
      case 'tupai':

        encmedia = JSON.parse(JSON.stringify(Ramdanif).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
        media = await Ramdani.downloadAndSaveMediaMessage(encmedia)

        ran = getRandom('.mp3')
        exec(`ffmpeg -i ${media} -af atempo=1/2,asetrate=44500*2/1 ${ran}`, (err, stderr, stdout) => {
          fs.unlinkSync(media)
          if (err) return reply('Error!')
          hah = fs.readFileSync(ran)
          Ramdani.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: true, quoted: Ramdanif })
          fs.unlinkSync(ran)
        })
        break
      //============================================================= 
      case 'blub':
        if (!isQuotedAudio) return reply('Reply audio nya ')
        encmedia = JSON.parse(JSON.stringify(Ramdanif).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
        media = await Ramdani.downloadAndSaveMediaMessage(encmedia)
        ran = getRandom('.mp3')
        exec(`ffmpeg -i ${media} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
          fs.unlinkSync(media)
          if (err) return reply('Error!')
          hah = fs.readFileSync(ran)
          Ramdani.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: true, quoted: Ramdanif })
          fs.unlinkSync(ran)
        })
        break
      case 'grupsetting':
        sendButMessage(from, `GROUP SETTING`, `Silahkan pilih salah satu`, [
          {
            buttonId: `${prefix}opengc`,
            buttonText: {
              displayText: `OPEN`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}closegc`,
            buttonText: {
              displayText: `CLOSE`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}revoke`,
            buttonText: {
              displayText: `REVOKE INVITE`,
            },
            type: 1,
          },
        ]);
        break;
      //=========================================================
      case 'opengc':
        if (!isBotGroupAdmins && !isGroupAdmins) return reply(`Bot Harus jadi Admin`)
        if (!isGroup) return;
        reply(`*SUCCES OPEN GROUP*`);
        Ramdani.groupSettingChange(from, GroupSettingChange.messageSend, false);
        break;
      //=========================================================
      case 'closegc':
        //  if (!isPremium) return reply(mess.OnlyPrem)
        if (!isBotGroupAdmins && !isGroupAdmins) return reply(`Bot Harus jadi Admin`)
        if (!isGroup) return;
        reply(`*SUCCES CLOSE GROUP*`);
        Ramdani.groupSettingChange(from, GroupSettingChange.messageSend, true);
        break;
      //=========================================================
      case 'revoke':
        if (!isBotGroupAdmins && !isGroupAdmins) return reply(`Bot Harus jadi Admin`)
        if (!isGroup) return;
        Ramdani.revokeInvite(from);
        reply('```Succes revoke link group```');
        break;
      case 'tagall':
        if (!isBotGroupAdmins && !isGroupAdmins) return reply(`Bot Harus jadi Admin`)
        if (!isGroup) return reply(mess.only.group)
        let arr = [];
        let txti = `*[ TAG ALL ]*\n\n${q ? q : ''}\n\n`
        for (let i of groupMembers) {
          txti += `=> @${i.jid.split("@")[0]}\n`
          arr.push(i.jid)
        }
        mentions(txti, arr, true)
        break
      case 'setdesc':
        if (!isGroup) return reply(mess.only.group)
        if (!isBotGroupAdmins) return reply(mess.only.Badmin)
        if (args.length == 0) return reply(`Penggunaan ${prefix}setdesc desc`)
        Ramdani.groupUpdateDescription(from, q)
          .then((res) => reply(jsonformat(res)))
          .catch((err) => reply(jsonformat(err)))
        break
      //====================================================================    

      case 'setppgrup':
        if (!isBotGroupAdmins && !isGroupAdmins) return reply(`Bot Harus jadi Admin`)
        if (isQuotedImage) {
          let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(Ramdanif).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Ramdanif
          let media = await Ramdani.downloadMediaMessage(encmedia)
          Ramdani.updateProfilePicture(from, media)
            .then((res) => reply(jsonformat(res)))
            .catch((err) => reply(jsonformat(err)))
        } else {
          reply(`Kirim atau tag gambar dengan caption ${prefix}setppgrup`)
        }
        break
      //=====================================
      case 'setgrupname':
        if (!isGroup) return reply(mess.only.group)
        if (!isBotGroupAdmins) return
        if (args.length == 0) return reply(`Penggunaan ${prefix}setgrupname name`)
        Ramdani.groupUpdateSubject(from, q)
          .then((res) => reply(jsonformat(res)))
          .catch((err) => reply(jsonformat(err)))
        break
      case 'out':
        if (!isGroup) return reply(mess.only.group)
        setTimeout(() => {
          Ramdani.groupLeave(from)
        }, 2000)
        setTimeout(() => {
          reply('Byee...')
        }, 0)
        break
      case 'tovideo':
        if ((isMedia && !Ramdanif.message.videoMessage || isQuotedSticker) && args.length == 0) {
          reply(mess.wait)
          encmedia = JSON.parse(JSON.stringify(Ramdanif).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
          mediaaa = await Ramdani.downloadAndSaveMediaMessage(encmediaaa)
          a = await webp2gifFile(mediaaa)
          mp4 = await getBuffer(a.result)
          Ramdani.sendMessage(from, mp4, video, { mimetype: 'video/mp4', quoted: freply, caption: mess.success })
          fs.unlinkSync(mediaaa)
        } else {
          reply('salah tuh')
        }
        break
      case 'ppcp':
      case 'ppcouple':

        anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/ppcouple?apikey=IkyOgiwara`)
        buff1 = await getBuffer(anu.result.male)
        buttons = [{ buttonId: `${prefix}ppcp`, buttonText: { displayText: `➡️Next` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff1, "imageMessage", { thumbnail: buff1, })).imageMessage
        buttonsMessage = {
          footerText: '©WhatsApp bot', imageMessage: imageMsg,
          contentText: `Cowo`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: freply })
        Ramdani.relayWAMessage(prep)
        buff2 = await getBuffer(anu.result.female)
        buttons = [{ buttonId: `${prefix}ppcouple`, buttonText: { displayText: `➡️Next` }, type: 1 }]
        imageMsg = (await Ramdani.prepareMessageMedia(buff2, "imageMessage", { thumbnail: buff2, })).imageMessage
        buttonsMessage = {
          footerText: '©WhatsApp bot', imageMessage: imageMsg,
          contentText: `Cewe`, buttons, headerType: 4
        }
        prep = await Ramdani.prepareMessageFromContent(from, { buttonsMessage }, { quoted: freply })
        setTimeout(async () => {
          Ramdani.relayWAMessage(prep)
        }, 5000)
        break
      //================================================================================================             
      case 'rip':
        var imgbb = require('imgbb-uploader')
        if ((isMedia && !Ramdanif.message.videoMessage || isQuotedImage) && args.length == 0) {
          ted = isQuotedImage ? JSON.parse(JSON.stringify(Ramdanif).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Ramdanif
          reply(mess.wait)
          owgi = await Ramdani.downloadAndSaveMediaMessage(ted)
          tels = body.slice(5)
          anu = await imgbb('5a0d93e32913ddd1003690128d0a32d5', owgi)
          hehe = await getBuffer(`https://janbot-api.herokuapp.com/api/imgedit/petimati?url=${anu.display_url}`)
          Ramdani.sendMessage(from, hehe, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: 'status@broadcast' } : {}) }, message: { 'documentMessage': { 'url': 'https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc', 'mimetype': 'image/jpeg', 'title': '*TSUNDERE*', 'fileSha256': '+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=', 'fileLength': '28777', 'height': 1080, 'width': 1079, 'mediaKey': 'vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=', 'fileEncSha256': 'sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=', 'directPath': '/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69', 'mediaKeyTimestamp': '1610993486', 'jpegThumbnail': fs.readFileSync('stik/fake.jpg') } } }, caption: 'Nih Hasilnya Kak...' })
        } else {
          reply('Jangan tambah kan apapun pada command')
        }
        break
      //================================================================================================
      case 'wasted2':
        var imgbb = require('imgbb-uploader')
        if ((isMedia && !Ramdanif.message.videoMessage || isQuotedImage) && args.length == 0) {
          ted = isQuotedImage ? JSON.parse(JSON.stringify(Ramdanif).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Ramdanif
          reply(mess.wait)
          owgi = await Ramdani.downloadAndSaveMediaMessage(ted)
          tels = body.slice(8)
          anu = await imgbb('5a0d93e32913ddd1003690128d0a32d5', owgi)
          hehe = await getBuffer(`https://janbot-api.herokuapp.com/api/imgedit/wasted?url=${anu.display_url}`)
          Ramdani.sendMessage(from, hehe, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: 'status@broadcast' } : {}) }, message: { 'documentMessage': { 'url': 'https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc', 'mimetype': 'image/jpeg', 'title': '*TSUNDERE*', 'fileSha256': '+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=', 'fileLength': '28777', 'height': 1080, 'width': 1079, 'mediaKey': 'vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=', 'fileEncSha256': 'sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=', 'directPath': '/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69', 'mediaKeyTimestamp': '1610993486', 'jpegThumbnail': fs.readFileSync('stik/fake.jpg') } } }, caption: 'Nih Hasilnya Kak...' })
        } else {
          reply('Jangan tambah kan apapun pada command')
        }
        break
      //================================================================================================
      case 'glass':
        var imgbb = require('imgbb-uploader')
        if ((isMedia && !Ramdanif.message.videoMessage || isQuotedImage) && args.length == 0) {
          ted = isQuotedImage ? JSON.parse(JSON.stringify(Ramdanif).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Ramdanif
          reply(mess.wait)
          owgi = await Ramdani.downloadAndSaveMediaMessage(ted)
          tels = body.slice(7)
          anu = await imgbb('5a0d93e32913ddd1003690128d0a32d5', owgi)
          hehe = await getBuffer(`https://janbot-api.herokuapp.com/api/imgedit/glass?url=${anu.display_url}`)
          Ramdani.sendMessage(from, hehe, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: 'status@broadcast' } : {}) }, message: { 'documentMessage': { 'url': 'https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc', 'mimetype': 'image/jpeg', 'title': '*TSUNDERE*', 'fileSha256': '+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=', 'fileLength': '28777', 'height': 1080, 'width': 1079, 'mediaKey': 'vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=', 'fileEncSha256': 'sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=', 'directPath': '/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69', 'mediaKeyTimestamp': '1610993486', 'jpegThumbnail': fs.readFileSync('stik/fake.jpg') } } }, caption: 'Nih Hasilnya Kak...' })
        } else {
          reply('Jangan tambah kan apapun pada command')
        }
        break
      //================================================================================================oo
      //===========================================================================
      case 'affect':
        var imgbb = require('imgbb-uploader')
        if ((isMedia && !Ramdanif.message.videoMessage || isQuotedImage) && args.length == 0) {
          ger = isQuotedImage ? JSON.parse(JSON.stringify(Ramdanif).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Ramdanif
          owgi = await Ramdani.downloadAndSaveMediaMessage(ger)
          data = await imgbb("39d895963468b814fad0514bd28787e2", owgi)
          buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/affect?url=${data.display_url}&apikey=IkyOgiwara`)
          Ramdani.sendMessage(from, buff, image, { quoted: freply, caption: mess.success })
        } else {
          reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}affect`)
        }
        break
        break
      //=============================================
      case 'invert':
        var imgbb = require('imgbb-uploader')
        if ((isMedia && !Ramdanif.message.videoMessage || isQuotedImage) && args.length == 0) {
          ger = isQuotedImage ? JSON.parse(JSON.stringify(Ramdanif).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Ramdanif
          owgi = await Ramdani.downloadAndSaveMediaMessage(ger)
          data = await imgbb("39d895963468b814fad0514bd28787e2", owgi)
          buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/invert?url=${data.display_url}&apikey=IkyOgiwara`)
          Ramdani.sendMessage(from, buff, image, { quoted: freply, caption: mess.success })
        } else {
          reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}invert`)
        }
        break
      //============================
      //===================================================
      case 'blur':
        var imgbb = require('imgbb-uploader')
        if ((isMedia && !Ramdanif.message.videoMessage || isQuotedImage) && args.length == 0) {
          ger = isQuotedImage ? JSON.parse(JSON.stringify(Ramdanif).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Ramdanif
          owgi = await Ramdani.downloadAndSaveMediaMessage(ger)
          data = await imgbb("39d895963468b814fad0514bd28787e2", owgi)
          buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/blur?url=${data.display_url}&level=20&apikey=IkyOgiwara`)
          Ramdani.sendMessage(from, buff, image, { quoted: freply, caption: mess.success })
        } else {
          reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}blur`)
        }
        break
      //========================================================
      case 'sepia':
        var imgbb = require('imgbb-uploader')
        if ((isMedia && !Ramdanif.message.videoMessage || isQuotedImage) && args.length == 0) {
          ger = isQuotedImage ? JSON.parse(JSON.stringify(Ramdanif).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Ramdanif
          owgi = await Ramdani.downloadAndSaveMediaMessage(ger)
          data = await imgbb("39d895963468b814fad0514bd28787e2", owgi)
          buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/sepia?url=${data.display_url}&apikey=IkyOgiwara`)
          Ramdani.sendMessage(from, buff, image, { quoted: freply, caption: mess.success })
        } else {
          reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}sepia`)
        }
        break
      //========================================================
      case 'circle':
        var imgbb = require('imgbb-uploader')
        if ((isMedia && !Ramdanif.message.videoMessage || isQuotedImage) && args.length == 0) {
          ger = isQuotedImage ? JSON.parse(JSON.stringify(Ramdanif).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Ramdanif
          owgi = await Ramdani.downloadAndSaveMediaMessage(ger)
          data = await imgbb("39d895963468b814fad0514bd28787e2", owgi)
          buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/circle?url=${data.display_url}&apikey=IkyOgiwara`)
          Ramdani.sendMessage(from, buff, image, { quoted: freply, caption: mess.success })
        } else {
          reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}circle`)
        }
        break
      //========================================================
      case 'trash':
        var imgbb = require('imgbb-uploader')
        if ((isMedia && !Ramdanif.message.videoMessage || isQuotedImage) && args.length == 0) {
          ger = isQuotedImage ? JSON.parse(JSON.stringify(Ramdanif).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Ramdanif
          owgi = await Ramdani.downloadAndSaveMediaMessage(ger)
          data = await imgbb("39d895963468b814fad0514bd28787e2", owgi)
          buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/trash?url=${data.display_url}&apikey=IkyOgiwara`)
          Ramdani.sendMessage(from, buff, image, { quoted: freply, caption: mess.success })
        } else {
          reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}trash`)
        }
        break
      //========================================================
      case 'wanted':
        var imgbb = require('imgbb-uploader')
        if ((isMedia && !Ramdanif.message.videoMessage || isQuotedImage) && args.length == 0) {
          ger = isQuotedImage ? JSON.parse(JSON.stringify(Ramdanif).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Ramdanif
          owgi = await Ramdani.downloadAndSaveMediaMessage(ger)
          data = await imgbb("39d895963468b814fad0514bd28787e2", owgi)
          buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/wanted?url=${data.display_url}&apikey=IkyOgiwara`)
          Ramdani.sendMessage(from, buff, image, { quoted: freply, caption: mess.success })
        } else {
          reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}wanted`)
        }
        break
      //=======================================================================================================
      case 'picture':
        var imgbb = require('imgbb-uploader')
        if ((isMedia && !Ramdanif.message.videoMessage || isQuotedImage) && args.length == 0) {
          ger = isQuotedImage ? JSON.parse(JSON.stringify(Ramdanif).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Ramdanif
          owgi = await Ramdani.downloadAndSaveMediaMessage(ger)
          data = await imgbb("39d895963468b814fad0514bd28787e2", owgi)
          buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/picture?url=${data.display_url}&apikey=IkyOgiwara`)
          Ramdani.sendMessage(from, buff, image, { quoted: freply, caption: mess.success })
        } else {
          reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}picture`)
        }
        break
      //======================================================================================================= 
      //======================================================================================================= 
      //======================================================================================================= 
      case 'blur':
        var imgbb = require('imgbb-uploader')
        if ((isMedia && !Ramdanif.message.videoMessage || isQuotedImage) && args.length == 0) {
          ger = isQuotedImage ? JSON.parse(JSON.stringify(Ramdanif).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Ramdanif
          owgi = await Ramdani.downloadAndSaveMediaMessage(ger)
          data = await imgbb("39d895963468b814fad0514bd28787e2", owgi)
          buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/blur?url=${data.display_url}&level=20&apikey=IkyOgiwara`)
          Ramdani.sendMessage(from, buff, image, { quoted: freply, caption: mess.success })
        } else {
          reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}blur`)
        }
        break
      //===============================================================
      //===============================================================
      //================================================================================================
      case 'wasted':
        var imgbb = require('imgbb-uploader')
        if ((isMedia && !Ramdanif.message.videoMessage || isQuotedImage) && args.length == 0) {
          ger = isQuotedImage ? JSON.parse(JSON.stringify(Ramdanif).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Ramdanif
          owgi = await Ramdani.downloadAndSaveMediaMessage(ger)
          data = await imgbb("39d895963468b814fad0514bd28787e2", owgi)
          buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/wasted?url=${data.display_url}&apikey=`)
          Ramdani.sendMessage(from, buff, image, { quoted: freply, caption: mess.success })
        } else {
          reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}wasted`)
        }
        break
      //===============================================================
      case 'joker':
        var imgbb = require('imgbb-uploader')
        if ((isMedia && !Ramdanif.message.videoMessage || isQuotedImage) && args.length == 0) {
          ger = isQuotedImage ? JSON.parse(JSON.stringify(Ramdanif).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Ramdanif
          owgi = await Ramdani.downloadAndSaveMediaMessage(ger)
          data = await imgbb("39d895963468b814fad0514bd28787e2", owgi)
          buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/joke?url=${data.display_url}&apikey=IkyOgiwara`)
          Ramdani.sendMessage(from, buff, image, { quoted: freply, caption: mess.success })
        } else {
          reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}joke`)
        }
        break
      case 'audio1':
        reply('[⏳] Sabar Lagi Ngirim Audionya')
        satu = await getBuffer(`https://dappa-result.herokuapp.com/untukbot/sound1.mp3`)
        Ramdani.sendMessage(from, satu, audio, { mimetype: 'audio/mp4', filename: `${command}.mp3`, quoted: Ramdanif })
        break
      //=======================================================================================================
      case 'audio2':
        reply('[⏳] Sabar Lagi Ngirim Audionya')
        dua = await getBuffer(`https://dappa-result.herokuapp.com/untukbot/sound2.mp3`)
        Ramdani.sendMessage(from, dua, audio, { mimetype: 'audio/mp4', filename: `${command}.mp3`, quoted: Ramdanif })
        break
      //=======================================================================================================
      case 'audio3':
        reply('[⏳] Sabar Lagi Ngirim Audionya')
        tiga = await getBuffer(`https://dappa-result.herokuapp.com/untukbot/sound3.mp3`)
        Ramdani.sendMessage(from, tiga, audio, { mimetype: 'audio/mp4', filename: `${command}.mp3`, quoted: Ramdanif })
        break
      //=======================================================================================================
      case 'audio4':
        reply('[⏳] Sabar Lagi Ngirim Audionya')
        empat = await getBuffer(`https://dappa-result.herokuapp.com/untukbot/sound4.mp3`)
        Ramdani.sendMessage(from, empat, audio, { mimetype: 'audio/mp4', filename: `${command}.mp3`, quoted: Ramdanif })
        break
      //=======================================================================================================
      case 'audio5':
        reply('[⏳] Sabar Lagi Ngirim Audionya')
        lima = await getBuffer(`https://dappa-result.herokuapp.com/untukbot/sound5.mp3`)
        Ramdani.sendMessage(from, lima, audio, { mimetype: 'audio/mp4', filename: `${command}.mp3`, quoted: Ramdanif })
        break
      //=======================================================================================================
      case 'audio6':
        reply('[⏳] Sabar Lagi Ngirim Audionya')
        enam = await getBuffer(`https://dappa-result.herokuapp.com/untukbot/sound6.mp3`)
        Ramdani.sendMessage(from, enam, audio, { mimetype: 'audio/mp4', filename: `${command}.mp3`, quoted: Ramdanif })
        break
      //=======================================================================================================
      case 'audio7':
        reply('[⏳] Sabar Lagi Ngirim Audionya')
        tujuh = await getBuffer(`https://dappa-result.herokuapp.com/untukbot/sound7.mp3`)
        Ramdani.sendMessage(from, tujuh, audio, { mimetype: 'audio/mp4', filename: `${command}.mp3`, quoted: Ramdanif })
        break
      //=======================================================================================================
      case 'audio8':
        reply('[⏳] Sabar Lagi Ngirim Audionya')
        lapan = await getBuffer(`https://dappa-result.herokuapp.com/untukbot/sound8.mp3`)
        Ramdani.sendMessage(from, lapan, audio, { mimetype: 'audio/mp4', filename: `${command}.mp3`, quoted: Ramdanif })
        break
      //=======================================================================================================
      case 'audio9':
        reply('[⏳] Sabar Lagi Ngirim Audionya')
        bilan = await getBuffer(`https://dappa-result.herokuapp.com/untukbot/sound9.mp3`)
        Ramdani.sendMessage(from, bilan, audio, { mimetype: 'audio/mp4', filename: `${command}.mp3`, quoted: Ramdanif })
        break
      //=======================================================================================================
      case 'audio10':
        reply('[⏳] Sabar Lagi Ngirim Audionya')
        puluh = await getBuffer(`https://dappa-result.herokuapp.com/untukbot/sound10.mp3`)
        Ramdani.sendMessage(from, puluh, audio, { mimetype: 'audio/mp4', filename: `${command}.mp3`, quoted: Ramdanif })
        break

      case 'report':
        if (args.length < 1) return reply(`Ketik ${prefix}report [fiturnya] [Error Nya Gimana]`)
        teks = args.join(' ')
        reply('Terima Kasih Telah Melaporkan Bug Pada Owner, Jika Itu Sekedar Iseng Maka Akan Di Ban Oleh Bot!')
        Ramdani.sendMessage('6289512545999@s.whatsapp.net', `*Bug Report:* ${teks}`, text)
        break
      case 'req':
        if (args.length < 1) return reply(`Ketik ${prefix}req [fiturnya] sistemnya`)
        teks = args.join(' ')
        reply('Terima Kasih Telah Req Pada Owner')
        Ramdani.sendMessage('6289512545999@s.whatsapp.net', `*req:* ${teks}`, text)
        break
      case 'broadcast':
        if (sender.split("@")[0] != owner) return reply("Command only for owner bot")
        list_chat = await Ramdani.chats.all()
        ini_text = args.join(" ")
        for (let chat of list_chat) {
          sendMess(chat.jid, ini_text)
        }
        break
      case 'buypotion':
        if (isBanned) return reply(mess.baned)
        if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
        payout1 = body.slice(11)
        const koinpotionPerpotion = 1000
        const totalpotion = koinpotionPerpotion * payout1
        if (checkATMuser(sender) <= totalpotion) return reply(`Maaf uang kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
        if (checkATMuser(sender) >= totalpotion) {
          confirmATM(sender, totalpotion)
          addPotioUser(sender, payout1)
          var koti = `╔════════════════════\n║╭───────────────────\n║│➫ *PEMBAYARAN BERHASIL*\n║╰───────────────────\n╠════════════════════\n║╭─────────────────\n║│➫ *Wiz* : *Lylia*\n║│➫ *Name* : *@${senderr.split("@")[0]}*\n║│➫ *Traveler* : *${pushname}*\n║│➫ *Nominal* : *${payout1}*\n║│➫ *Harga* : *${koinpotionPerpotion}/potion*\n║│➫ *Sisa Uang* : *${checkATMuser(sender)}*\n║│➫ *Proses Berhasil*\n║│➫ *${createSerial(20)}*\n║╰───────────────────\n╚════════════════════\n`
          sendButImage(from, koti, `${watermark}`, foto, [
            {
              buttonId: 'y',
              buttonText: {
                displayText: `🧾DONE`,
              },
              type: 1,
            },
          ]);
        }
        break;


      case 'potion':
        if (isBanned) return reply(mess.baned)
        checkPotion(sender)
        break
      case 'heal':
        if (isBanned) return reply(mess.baned)
        checkHeal(sender)
        break
      //GAME NYA NGAB 
      case 'usepotion':
        if (isBanned) return reply(mess.baned)
        const healperpotion = 1
        const pot = healperpotion * 1
        if (isPotion(sender)) return reply(`maaf potion kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
        potionAdd(sender, pot)
        addHealUser(sender, 25)
        await reply(`*「 PEMBAYARAN BERHASIL 」*\n\n*Pengirim* : Lylia\n*penerima* : ${pushname}\n*nominal pembelian* : 1 \n*Harga* : ${healperpotion}/25heal\nProses berhasil dengan nomer pembayaran\n${createSerial(15)}`)
        break
      case 'adventure':
        if (isBanned) return reply(mess.baned)
        ngab = ['Longsor', 'Letusan Gunung', 'Tsunami', 'Gempa Bumi', 'Meteor', 'Demon']
        const sesuatu = ngab[Math.floor(Math.random() * ngab.length)]
        await setTimeout(() => {
          reply(`${pushname} Sedang Berpetualang Mencari harta karun`)
        }, 1000)
        await setTimeout(() => {
          reply(`Tiba Tiba Ada ${sesuatu}`)
        }, 1200)
        await setTimeout(() => {
          reply(`MENGHINDARR!!!`)
        }, 1600)
        const dungeon = ['Whetstone', 'Willow Field', 'Rodeo', 'Verdant Blufs', 'Bull Holland', 'Fallen Tree', 'Dellnort', 'Verona Lush', 'Leafy Hollow', 'Chilliad Dome', 'Garcia', 'Pine Valley', 'Santa Florals', 'Guvero East', 'Cranbarry', 'Junever', 'Aldea Malvada', 'Green Palms', 'Green Oasis', 'Fort Carson', 'Prickel Pine', 'Pilson Meadow', 'Boca Roca', 'Rocksore East', 'Camel Toe', 'Hanky Panky', 'Fern Ridge', 'Montgomerry', 'Flint Yankton', 'Vespucci', 'fortress city', 'ravines valley', 'horizon valley', 'cyber city', 'end city', 'templar city', 'pochinki', 'peak', 'Vertical Zone', 'Sentainel Country', 'Night City', 'Flush City', 'Royals Canyon', 'Blackburn', 'Peterborough', 'Tarnstead', 'Jarren’s', 'Outpost', 'Landow', 'Nearon', 'Kincardine', 'Aysgarth', 'Veritas', 'Openshaw', 'Bredwardine', 'Berkton', 'Wolford', 'Norwich', 'Kald', 'Solaris', 'Kilead', 'Pitmerden', 'Acomb', 'Eldham', 'Warcester', 'Lingmell', 'Kilead', 'Cromerth', 'Wingston', 'Garmsby', 'Kingcardine', 'Perthlochry', 'Frostford', 'Hillford', 'Hardersfield', 'Tarrin', 'Holmfirth', 'Caerleon', 'Elisyum', 'Ballaeter', 'Penshaw', 'Bradford', 'Wigston', 'Accreton', 'Kameeraska', 'Ferncombe', 'Kilerth', 'Erostey', 'Carran', 'Jongvale', 'Larnwick', 'Queenstown', 'Whaelrdrake', 'Baerney', 'Wingston', 'Arkney', 'Strongfair', 'Lowestoft', 'Beggar’s Hole', 'Shepshed', 'Perthlochry', 'Ironforge', 'Tywardreath', 'Pontheugh', 'Foolshope', 'Hull', 'Dalmerlington', 'Aucteraden', 'Woodpine', 'Millstone', 'Windermere', 'Lancaster', 'Kirkwall', 'Rotherhithe', 'Astrakhan', 'Watford', 'Ritherhithe', 'Krosstoen', 'Pella’s', 'Wish', 'Grimsby', 'Ayrith', 'Ampleforth', 'Skystead', 'Eanverness', 'Penshaw', 'Peatsland', 'Astrakane', 'Pontybridge', 'Caershire', 'Snowbush', 'Sutton', 'Northwich', 'Hogsfeet', 'Claethorpes', 'Sudbury', 'Cherrytown', 'Blue Field', 'Orrinshire', 'Aempleforth', 'Garrigill', 'Jedburgh', 'Eastbourne', 'Taedmorden', 'Venzor', 'Grasmere', 'Ubbin', 'Falls', 'Violl’s Garden', 'Glanchester', 'Bailymena', 'Arkkukari', 'Skargness', 'Cardend', 'Llanybydder', 'Faversham', 'Yellowseed', 'Carlisle', 'Cirencester', 'Aramoor', 'Furness', 'Kincardine', 'Rotherham', 'Emelle', 'Boroughton', 'Carran', 'Ffestiniog', 'Mansfield', 'Huthwaite', 'Marclesfield', 'Pavv', 'Squall’s End', 'Glenarm', 'Dragontail', 'Moressley', 'Hardersfield', 'Gilramore', 'Aria', 'Ecrin', 'Clare View Point', 'Blackburn', 'Oakheart', 'Doonatel', 'Broughton', 'Carlisle', 'Murlayfield', 'Nuxvar']
        const ad = dungeon[Math.floor(Math.random() * dungeon.length)]
        anu = fs.readFileSync('./database/adventure/dungeon.js');
        jsonAnu = JSON.parse(anu);
        randIndex = Math.floor(Math.random() * jsonAnu.length);
        randKey = jsonAnu[randIndex];
        hasil = await getBuffer(randKey.result)
        const adven = Math.ceil(Math.random() * 10000)
        addLevelingXp(sender, adven)
        const money = Math.ceil(Math.random() * 20000)
        addKoinUser(sender, money)
        const poti = Math.ceil(Math.random() * 5)
        addPotioUser(sender, poti)
        Ramdani.sendMessage(from, hasil, image, { quoted: Ramdanif, caption: `◪ *「 DEATH 」\n\n├─ ❏ *Tempat  ${ad}*\n├─ ❏ *MONEY : Rp.${money}*\n├─ ❏ *EXP : ${adven}Xp*\n└─ ❏ Potion : ${poti}` })
        await gameAdd(sender)
        await healAdd(sender)
        break
      case 'tebakkata': case 'tk': {
        if (!isGroup) return reply(mess.only.group)
        if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
        if (game.isTebakKata(from, tebakkata)) return reply(`Masih ada soal yang belum di selesaikan`)
        let anu = await axios.get(`https://api.lolhuman.xyz/api/tebak/susunkata?apikey=${control.lolkey}`)
        reply(`*JAWABLAH SOAL BERIKUT*\n\n*Soal :* ${anu.data.result.pertanyaan}\n\nWaktu : ${gamewaktu}s`)
        let ahhh = anu.data.result.jawaban.toLowerCase()
        game.addkata(from, ahhh, gamewaktu, tebakkata)
        gameAdd(sender, glimit)
      }
        break
      case 'tebakkimia': case 'tuk': {
        if (!isGroup) return reply(mess.only.group)
        if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
        if (game.isTebakKimia(from, tebakkimia)) return reply(`Masih ada soal yang belum di selesaikan`)
        let anu = await axios.get(`https://api.lolhuman.xyz/api/tebak/unsurkimia?apikey=${control.lolkey}`)
        reply(`*JAWABLAH SOAL BERIKUT*\n\n*Soal :* Lambang unsur ${anu.data.result.nama} adalah?\n\nWaktu : ${gamewaktu}s`)
        let revasayank = anu.data.result.lambang.toLowerCase()
        game.addkimia(from, revasayank, gamewaktu, tebakkimia)
        gameAdd(sender, glimit)
      }
        break
      case 'tebakbendera': case 'tb': {
        if (!isGroup) return reply(mess.only.group)
        if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
        if (game.isTebakBendera(from, tebakbendera)) return reply(`Masih ada soal yang belum di selesaikan`)
        let anu = await axios.get(`https://api.lolhuman.xyz/api/tebak/bendera?apikey=${control.lolkey}`)
        let petunjuk = anu.data.result.name.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
        reply(`*JAWABLAH SOAL BERIKUT*\n\n*Soal :* Bendera negara manakah itu ${anu.data.result.flag}\n\nPetunjuk : ${petunjuk}\n\nWaktu : ${gamewaktu}s`)
        let ikasayank = anu.data.result.name.toLowerCase()
        game.addbendera(from, ikasayank, gamewaktu, tebakbendera)
        gameAdd(sender, glimit)
      }
        break
      case 'tebakanime': case 'ta': {
        if (!isGroup) return reply(mess.only.group)
        if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
        if (game.isTebakAnime(from, tebakanime)) return reply(`Masih ada soal yang belum di selesaikan`)
        let anu = await axios.get(`https://api.lolhuman.xyz/api/tebakchara?apikey=${control.lolkey}`)
        let petunjuk = anu.data.result.name.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
        sendMediaURL(from, anu.data.result.image, monospace(`Silahkan tebak karakter anime berikut ini\n\nPetunjuk : ${petunjuk}\n\nWaktu : ${gamewaktu}s`), Ramdanif)
        let nurulsayank = anu.data.result.name.toLowerCase()
        game.addanime(from, nurulsayank, gamewaktu, tebakanime)
        gameAdd(sender, glimit)
      }
        break
      case 'siapaaku': case 'siapakahaku': case 'sa': {
        if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
        if (!isGroup) return reply(mess.only.group)
        if (game.isTebakGambar(from, tebakgambar)) return reply(`Masih ada soal yang belum di selesaikan`)
        let anu = await axios.get(`https://api.lolhuman.xyz/api/tebak/siapaaku?apikey=${control.lolkey}`)
        reply(`*JAWABLAH SOAL BERIKUT*\n\n*Soal :* ${anu.data.result.question}\n\nWaktu : ${gamewaktu}s`)
        let anau = anu.data.result.answer.toLowerCase()
        game.addsyiko(from, anau, gamewaktu, siapaaku)
        gameAdd(sender, glimit)
      }
        break
      case 'tebaklirik': case 'tl': {
        if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
        if (!isGroup) return reply(mess.only.group)
        if (game.isTebakLirik(from, tebaklirik)) return reply(`Masih ada soal yang belum di selesaikan`)
        let anu = await axios.get(`https://api.lolhuman.xyz/api/tebak/lirik?apikey=${control.lolkey}`)
        let petunjuk = anu.data.result.answer.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
        reply(`*JAWABLAH SOAL BERIKUT*\n\n*Soal :* ${anu.data.result.question}\n\nPetunjuk : ${petunjuk}\n\nWaktu : ${gamewaktu}s`)
        let anal = anu.data.result.answer.toLowerCase()
        game.addtebaklirik(from, anal, gamewaktu, tebaklirik)
        gameAdd(sender, glimit)
      }
        break
      case 'math': {
        if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
        if (!isGroup) return reply(mess.only.group)
        if (game.isMtk(from, mtk)) return reply(`Masih ada soal yang belum di selesaikan`)
        if (!q) return reply(`*Mode tersedia :*\n1. very_easy\n2. easy\n3. medium\n4. hard\n5. extreme\n6. impossible\n\n_Example : ${prefix + command} hard_`)
        let anu = await axios.get(`http://zekais-api.herokuapp.com/math?mode=${q}&apikey=GSdohIiH`)
        //	let petunjuk = anu.data.result.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
        reply(`*Soal :*\n_${anu.data.nilai_1} ${anu.data.tanda} ${anu.data.nilai_2} :_\nWaktu : ${gamewaktu}`)
        let anih = anu.data.jawaban.toLowerCase()
        game.addmtk(from, anih, gamewaktu, mtk)
        gameAdd(sender, glimit)
      }
        break
      case 'next': case 'leave': case "stop": {
        if (isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
        Ramdani.anonymous = Ramdani.anonymous ? Ramdani.anonymous : {}
        let room = Object.values(Ramdani.anonymous).find(room => room.check(sender))
        if (!room) {
          await Ramdani.sendButton(from, '_Kamu tidak sedang berada di anonymous chat_', `${Ramdani.user.name}`, 'Cari Partner', prefix + 'start')
          return false
        }
        reply('_You stopped matchmaking_')
        let other = room.other(sender)
        if (other) await Ramdani.sendButton(other, '_Partner meninggalkan chat_', `${Ramdani.user.name}`, 'Cari Partner', prefix + 'start')
        delete Ramdani.anonymous[room.id]
        if (command === 'leave' || command === "stop") break
      }

      case 'mulai': case 'start': case "anonymous": case "mutual": {
        if (isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
        Ramdani.anonymous = Ramdani.anonymous ? Ramdani.anonymous : {}
        if (Object.values(Ramdani.anonymous).find(room => room.check(sender))) {
          await Ramdani.sendButton(from, '_Kamu masih berada di dalam anonymous chat, menunggu partner_', `${Ramdani.user.name}`, 'Keluar', `${prefix}leave`)
          return false
        }
        let room = Object.values(Ramdani.anonymous).find(room => room.state === 'WAITING' && !room.check(sender))
        if (room) {
          await Ramdani.sendButton(room.a, '_Partner ditemukan!_', `${Ramdani.user.name}`, 'Next', prefix + 'next')
          room.b = sender
          room.state = 'CHATTING'
          await Ramdani.sendButton(room.b, '_Partner ditemukan!_', `${Ramdani.user.name}`, 'Next', prefix + 'next')
        } else {
          let id = + new Date
          Ramdani.anonymous[id] = {
            id,
            a: sender,
            b: '',
            state: 'WAITING',
            check: function (who = '') {
              return [this.a,
              this.b].includes(who)
            },
            other: function (who = '') {
              return who === this.a ? this.b : who === this.b ? this.a : ''
            },
          }
          await Ramdani.sendButton(from, '_Menunggu partner..._', `${Ramdani.user.name}`, 'Keluar', prefix + 'leave')
        }
        break
      }
      case 'autosticker':

        if (args.length < 1) return reply(`Penggunaan:\n\n${prefix}autosticker 1\natau\n${prefix}autosticker 0`)
        if (Number(args[0]) === 1) {
          if (isAuto) return reply('Udah aktif um')
          autosticker.push(from)
          fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
          reply('Sukses mengaktifkan fitur autosticker')
        } else if (Number(args[0]) === 0) {
          autosticker.splice(from)
          fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
          reply('Sukses menonaktifkan fitur autosticker')
        } else {
          reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
        }
        break
      case 'slot': //SLOT BY M4N1K
        const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
        const somtoy2 = sotoy1[Math.floor(Math.random() * sotoy1.length)]
        const somtoy3 = sotoy2[Math.floor(Math.random() * sotoy2.length)]
        const somtoy4 = sotoy3[Math.floor(Math.random() * sotoy3.length)]
        Ramdani.sendMessage(from, `
[ SLOTS ]\n-----------------
 ${somtoy2}
 ${somtoy}<=====
 ${somtoy3}
[ SLOTS ]
Keterangan : Jika anda Mendapatkan 3Buah Sama Berarti Kamu Win
Contoh : ${somtoy4}<=====`, text, { quoted: ftroli })
        break
        case 'suit': //COMOT DI BOT LUPA YG MANA:V
        try {
          if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
          const text = args.join(' ')
          if (!text) return reply(`Pilihan yang tersedia\n\ngunting, kertas, batu\n\n${prefix}suit gunting\n\nkasih spasi!`)
          var m4ni1kku = Math.random()
          if (m4ni1kku < 0.34) {
            m4ni1kku = 'batu'
          } else if (m4ni1kku > 0.34 && m4ni1kku < 0.67) {
            m4ni1kku = 'gunting'
          } else {
            m4ni1kku = 'kertas'
          }
          if (text == m4ni1kku) {
            reply(`❒「  *SUIT GAME*  」\n${gaya}Hasil Seri!\nkamu: ${text}\nBot: ${m4ni1kku}${gaya}\n*Gambare*`)
          } else if (text == 'batu') {
            if (m4ni1kku == 'gunting') {
              // uang.addDuit(sender)
              reply(`❒「  *SUIT GAME*  」\nKamu menang! Kamu Mendapat Balance Sebesar Rp.1000\nKamu: ${text}\nBot: ${m4ni1kku}`)
            } else {
              reply(`❒「  *SUIT GAME*  」\nKamu kalah!\nkamu: ${text}\nBot: ${m4ni1kku}`)
            }
          } else if (text == 'gunting') {
            if (m4ni1kku == 'kertas') {
              //uang.addDuit(sender)
              reply(`❒「  *SUIT GAME*  」\nKamu menang! Kamu Mendapat Balance Sebesar Rp.1000\nKamu: ${text}\nBot: ${m4ni1kku}`)
            } else {
              reply(`❒「  *SUIT GAME*  」\nKamu kalah!\nkamu: ${text}\nBot: ${m4ni1kku}`)
            }
          } else if (text == 'kertas') {
            if (m4ni1kku == 'batu') {
              //uang.addDuit(sender)
              reply(`❒「  *SUIT GAME*  」\nKamu menang! Kamu Mendapat Balance Sebesar Rp.1000\nKamu: ${text}\nBot: ${m4ni1kku}`)
            } else {
              reply(`❒「  *SUIT GAME*  」\nKamu kalah!\nkamu: ${text}\nBot: ${m4ni1kku}`)
            }
          } else {
            reply('*Kayak Anak Tk Aja Anak Tk Aja Tau Gunting Batu Kertas*')
          }
        } catch {
          reply('*Error*')
        }
        break
        case 'gelud':
if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
 if (!isGroup) return reply(mess.only.group)
   if (Ramdanif.message.extendedTextMessage.contextInfo.mentionedJid > 1) return reply('Hanya bisa dengan 1 orang')
     if (!Ramdanif.message.extendedTextMessage.contextInfo.mentionedJid[0]) return
       if (args.length === 0) return reply(`Tag Lawan Yang Ingin Diajak Bermain Game`)
         if (fs.existsSync(`./media/${from}.json`)) return reply(`Sedang Ada Sesi, tidak dapat dijalankan secara bersamaan\nKetik *${prefix}delsesigelud*, untuk menghapus sesi`)
 gelutSkuy = setGelud(`${from}`)
         gelutSkuy.status = false
         gelutSkuy.Z = sender.replace("@s.whatsapp.net", "")
         gelutSkuy.Y = args[0].replace("@", "");
         fs.writeFileSync(`./media/${from}.json`, JSON.stringify(gelutSkuy, null, 2))
         starGame = `👑 Memulai Game Baku Hantam ????

         • @${sender.replace("@s.whatsapp.net", "")} Menantang Bergelud
         [ ${args[0]} ] Ketik Y/N untuk menerima atau menolak permainan`

         Ramdani.sendMessage(from, starGame, text, {quoted: freply, contextInfo: { mentionedJid: [sender, args[0].replace("@", "") + "@s.whatsapp.net"],}})
         gameAdd(sender, glimit)
         break
         case 'delsesigelud':
         if (!isGroup) return reply(mess.only.group)
           if (fs.existsSync('./media/' + from + '.json')) {
             fs.unlinkSync('./media/' + from + '.json')
             reply('Berhasil Menghapus Sesi Gelud')
           } else {
             reply('Tidak ada sesi yang berlangsung')
           }
           break
           // MENU BERMAIN KALIAN
case 'ganteng': case 'cantik': case 'jelek': case 'goblok':  
                   case 'bego': case 'pinter': case 'jago': case 'nolep': case 'monyet':                 	 
                   case 'babi': case 'beban': case 'baik': case 'jahat': case 'anjing': 
                   case 'haram': case 'kontol': case 'pakboy': case 'pakgirl': 
               	   case 'wibu': case 'hebat': case 'sadboy': case 'sadgirl':  
				   if (!isGroup) return reply(`GROUP ONLY`)
 				   jds = []
				   const A1 = groupMembers
  		 		   const B1 = groupMembers
 				   const C1 = A1[Math.floor(Math.random() * A1.length)]
            const A2 = groupMembers
  		 		   const B2 = groupMembers
 				   const C2 = A2[Math.floor(Math.random() * A2.length)]
            const A3 = groupMembers
  		 		   const B3 = groupMembers
 				   const C3 = A3[Math.floor(Math.random() * A3.length)]
				   D1 = `yang ter${command} disini adalah @${C1.jid.split('@')[0]} dan si @${C2.jid.split('@')[0]} dan yang paling parah tuh si @${C3.jid.split('@')[0]}`                  
				   jds.push(C1.jid)
				   mentions(D1, jds, true)
				   break
           break
           case 'truth':
            if (!isRegistered) return reply(ind.noregis())
                        const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
            const ttrth = trut[Math.floor(Math.random() * trut.length)]
            truteh = await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/lighttext?apikey=${control.lolkey}&text=${command}`)
            Ramdani.sendMessage(from, truteh, image, { caption: 'TRUTH\n\n'+ ttrth, quoted: freply })
            break
            case 'dare':
            if (!isRegistered) return reply(ind.noregis())
            const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "🦄??" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
            const der = dare[Math.floor(Math.random() * dare.length)]
            reply(der)
            break
            case 'character':
		
                    if (args.length == 0) return reply(`Example: ${prefix + command} Miku Nakano`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/character?apikey=${control.lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Name : ${get_result.name.full}\n`
                    ini_txt += `Native : ${get_result.name.native}\n`
                    ini_txt += `Favorites : ${get_result.favourites}\n`
                    ini_txt += `Media : \n`
                    ini_media = get_result.media.nodes
                    for (var x of ini_media) {
                        ini_txt += `- ${x.title.romaji} (${x.title.native})\n`
                    }
                    ini_txt += `\nDescription : \n${get_result.description.replace(/_/g, "")}`
                    thumbnail = await getBuffer(get_result.image.large)
                    Ramdani.sendMessage(from, thumbnail, image, { quoted: ftroli, caption: ini_txt })
                    break
                case 'manga':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/manga?apikey=${control.lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Id MAL : ${get_result.idMal}\n`
                    ini_txt += `Title : ${get_result.title.romaji}\n`
                    ini_txt += `English : ${get_result.title.english}\n`
                    ini_txt += `Native : ${get_result.title.native}\n`
                    ini_txt += `Format : ${get_result.format}\n`
                    ini_txt += `Chapters : ${get_result.chapters}\n`
                    ini_txt += `Volume : ${get_result.volumes}\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Source : ${get_result.source}\n`
                    ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
                    ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
                    ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
                    ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
                    ini_txt += `Score : ${get_result.averageScore}%\n`
                    ini_txt += `Characters : \n`
                    ini_character = get_result.characters.nodes
                    for (var x of ini_character) {
                        ini_txt += `- ${x.name.full} (${x.name.native})\n`
                    }
                    ini_txt += `\nDescription : ${get_result.description}`
                    thumbnail = await getBuffer(get_result.coverImage.large)
                    Ramdani.sendMessage(from, thumbnail, image, { quoted: ftroli, caption: ini_txt })
                    break
                case 'anime':
		
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/anime?apikey=${control.lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Id MAL : ${get_result.idMal}\n`
                    ini_txt += `Title : ${get_result.title.romaji}\n`
                    ini_txt += `English : ${get_result.title.english}\n`
                    ini_txt += `Native : ${get_result.title.native}\n`
                    ini_txt += `Format : ${get_result.format}\n`
                    ini_txt += `Episodes : ${get_result.episodes}\n`
                    ini_txt += `Duration : ${get_result.duration} mins.\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Season : ${get_result.season}\n`
                    ini_txt += `Season Year : ${get_result.seasonYear}\n`
                    ini_txt += `Source : ${get_result.source}\n`
                    ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
                    ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
                    ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
                    ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
                    ini_txt += `Score : ${get_result.averageScore}%\n`
                    ini_txt += `Characters : \n`
                    ini_character = get_result.characters.nodes
                    for (var x of ini_character) {
                        ini_txt += `- ${x.name.full} (${x.name.native})\n`
                    }
                    ini_txt += `\nDescription : ${get_result.description}`
                    thumbnail = await getBuffer(get_result.coverImage.large)
                    Ramdani.sendMessage(from, thumbnail, image, { quoted: ftroli, caption: ini_txt })
                    break

                case 'kusonime':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://kusonime.com/nanatsu-no-taizai-bd-batch-subtitle-indonesia/`)
                    ini_url = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/kusonime?apikey=${control.lolkey}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Genre : ${get_result.genre}\n`
                    ini_txt += `Seasons : ${get_result.seasons}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Total Episode : ${get_result.total_episode}\n`
                    ini_txt += `Score : ${get_result.score}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Released On : ${get_result.released_on}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    link_dl = get_result.link_dl
                    for (var x in link_dl) {
                        ini_txt += `\n${x}\n`
                        for (var y in link_dl[x]) {
                            ini_txt += `${y} - ${link_dl[x][y]}\n`
                        }
                    }
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    Ramdani.sendMessage(from, ini_buffer, image, { quoted: ftroli, caption: ini_txt })
                    break
                case 'kusonimesearch':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/kusonimesearch?apikey=${control.lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Genre : ${get_result.genre}\n`
                    ini_txt += `Seasons : ${get_result.seasons}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Total Episode : ${get_result.total_episode}\n`
                    ini_txt += `Score : ${get_result.score}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Released On : ${get_result.released_on}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    link_dl = get_result.link_dl
                    for (var x in link_dl) {
                        ini_txt += `\n${x}\n`
                        for (var y in link_dl[x]) {
                            ini_txt += `${y} - ${link_dl[x][y]}\n`
                        }
                    }
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    Ramdani.sendMessage(from, ini_buffer, image, { quoted: ftroli, caption: ini_txt })
                    break
                case 'otakudesu':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://otakudesu.tv/lengkap/pslcns-sub-indo/`)
                    ini_url = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/otakudesu?apikey=${control.lolkey}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Judul : ${get_result.judul}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Episode : ${get_result.episodes}\n`
                    ini_txt += `Aired : ${get_result.aired}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Genre : ${get_result.genres}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Studios : ${get_result.status}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Credit : ${get_result.credit}\n`
                    get_link = get_result.link_dl
                    for (var x in get_link) {
                        ini_txt += `\n\n*${get_link[x].title}*\n`
                        for (var y in get_link[x].link_dl) {
                            ini_info = get_link[x].link_dl[y]
                            ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
                            ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
                            ini_txt += `\`\`\`Link : \`\`\`\n`
                            down_link = ini_info.link_dl
                            for (var z in down_link) {
                                ini_txt += `${z} - ${down_link[z]}\n`
                            }
                        }
                    }
                    reply(ini_txt)
                    break
                case 'otakudesusearch':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/otakudesusearch?apikey=${control.lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Judul : ${get_result.judul}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Episode : ${get_result.episodes}\n`
                    ini_txt += `Aired : ${get_result.aired}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Genre : ${get_result.genres}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Studios : ${get_result.status}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Credit : ${get_result.credit}\n`
                    get_link = get_result.link_dl
                    for (var x in get_link) {
                        ini_txt += `\n\n*${get_link[x].title}*\n`
                        for (var y in get_link[x].link_dl) {
                            ini_info = get_link[x].link_dl[y]
                            ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
                            ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
                            ini_txt += `\`\`\`Link : \`\`\`\n`
                            down_link = ini_info.link_dl
                            for (var z in down_link) {
                                ini_txt += `${z} - ${down_link[z]}\n`
                            }
                        }
                    }
                    reply(ini_txt)
                    break
                    case 'nulis':
                if (args.length < 1) return reply(`Teksnya mana ngab?\nContoh ${prefix}nulis Ramdani ganteng`)
                dapuhy = body.slice(6)
                reply(mess.wait)
                asu = await getBuffer(`http://zekais-api.herokuapp.com/foliokanan?text=${dapuhy}&apikey=TdwxjsgH`)
                Ramdani.sendMessage(from, asu, image, {caption: 'dasar pemalas ;v', quoted: Ramdanif})
                break
				    case 'nulis2':
                if (args.length < 1) return reply(`Teksnya mana ngab?\nContoh ${prefix}nulis Ramdani ganteng`)
                dapuhy = body.slice(7)
                reply(mess.wait)
                asu = await getBuffer(`http://zekais-api.herokuapp.com/foliokiri?text=${dapuhy}&apikey=TdwxjsgH`)
                Ramdani.sendMessage(from, asu, image, {caption: 'dasar pemalas ;v', quoted: Ramdanif})
                break
                case 'nulis3':
                  
               
                if (args.length < 1) return reply(`Teksnya mana ngab?\nContoh ${prefix}nulis Ramdani ganteng`)
                dapuhy = body.slice(7)
                reply(mess.wait)
                asu = await getBuffer(`http://zekais-api.herokuapp.com/foliokanan?text=${dapuhy}`)
                Ramdani.sendMessage(from, asu, image, {caption: 'dasar pemalas ;v', quoted: Ramdanif})
                break
                case 'nulis4':
                if (args.length < 1) return reply(`Teksnya mana ngab?\nContoh ${prefix}nulis Ramdani ganteng`)
                dapuhy = body.slice(7)
                reply(mess.wait)
                asu = await getBuffer(`http://zekais-api.herokuapp.com/foliokiri?text=${dapuhy}`)
                Ramdani.sendMessage(from, asu, image, {caption: 'dasar pemalas ;v', quoted: Ramdanif})
                break

      ////batas case  dengan akhir










































































      default:
        if (budy.includes(`assalamualaikum`)) {
          reply(`Waalaikumsalam`)
        }
        if (budy.includes(`assalamu'alaikum`)) {
          reply(`Waalaikumsalam`)
        }
        if (budy.includes(`Assalamu'alaikum`)) {
          reply(`Waalaikumsalam`)
        }
        if (budy.includes(`asalamualaikum`)) {
          reply(`Waalaikumsalam`)
        }
        if (budy.includes(`asalamu'alaikum`)) {
          reply(`Waalaikumsalam`)
        }
        if (budy.includes(`Asalamualaikum`)) {
          reply(`Waalaikumsalam`)
        }
        if (budy.includes(`Asalamu'alaikum`)) {
          reply(`Waalaikumsalam`)
        }
        if (budy.includes(`Assalamualaikum`)) {
          reply(`Waalaikumsalam`)
        }

        if (budy.includes("Ramdani")) { //random sticker by Ramdani, Hapus WM = yatim!
          data = stick
          jsonData = JSON.parse(data);
          xm1 = Math.floor(Math.random() * jsonData.length);
          xm2 = jsonData[xm1];
          xm3 = xm2.result
          sendStickerUrl(from, xm3)
        }
        if (budy.includes("Ramdani")) { //random sticker by Ramdani, Hapus WM = yatim!
          data = stick
          jsonData = JSON.parse(data);
          xm1 = Math.floor(Math.random() * jsonData.length);
          xm2 = jsonData[xm1];
          xm3 = xm2.result
          sendStickerUrl(from, xm3)
        }

        if (fs.existsSync(`./media/${from}.json`)) {
          gelutSkuy = setGelud(`${from}`)
          if (sender == `${gelutSkuy.Y}@s.whatsapp.net` && budy.toLowerCase() == 'y') {
            if (gelutSkuy.status) return reply(`Game telah dimulai sebelumnya!`)
              gelutSkuy.status = true
            rand0m = [ gelutSkuy.Z, gelutSkuy.Y ]
            winR = rand0m[Math.floor(Math.random() * rand0m.length)]
            fs.writeFileSync(`./media/${from}.json`, JSON.stringify(gelutSkuy, null, 2))
            starGame = `👑 Gelud Game 🤙🏻 
        
            Diantara @${gelutSkuy.Z} & @${gelutSkuy.Y}
            • Pemenangnya adalah [ @${winR} ] `
            Ramdani.sendMessage(from, starGame, text, {quoted: freply, contextInfo: { mentionedJid: [winR + "@s.whatsapp.net", gelutSkuy.Z + "@s.whatsapp.net", gelutSkuy.Y + "@s.whatsapp.net",]}})
            fs.unlinkSync("./media/" + from + ".json");
          } else if (sender == `${gelutSkuy.Y}@s.whatsapp.net` &&  budy.toLowerCase() == 'n') {
            Ramdani.sendMessage(from, `👑 Game Gelud Rejected 🤙🏻
              • @${gelutSkuy.Y} Menolak🤙🏻`, text, {quoted: freply, contextInfo: { mentionedJid: [gelutSkuy.Y + "@s.whatsapp.net"]}})
            fs.unlinkSync("./media/" + from + ".json");
          }
        }
        

        if (isTTT && isPlayer2) {
          if (budy.startsWith('Y')) {
            tto = ky_ttt.filter(ghg => ghg.id.includes(from))
            tty = tto[0]
            angka = tto[0].angka
            ucapan =
              `*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=❎
Player2 @${tty.player2.split('@')[0]}=⭕

Giliran = @${tty.player1.split('@')[0]}

   ${angka[1]}${angka[2]}${angka[3]}
   ${angka[4]}${angka[5]}${angka[6]}
   ${angka[7]}${angka[8]}${angka[9]}`
            Ramdani.sendMessage(from, ucapan, text, { quoted: Ramdanif, contextInfo: { mentionedJid: [tty.player1, tty.player2] } })
          }
          if (budy.startsWith('N')) {
            tto = ky_ttt.filter(ghg => ghg.id.includes(from))
            tty = tto[0]
            naa = ky_ttt.filter(toek => !toek.id.includes(from))
            ky_ttt = naa
            Ramdani.sendMessage(from, `Yahh @${tty.player2.split('@')[0]} Menolak:(`, text, { quoted: Ramdanif, contextInfo: { mentionedJid: [tty.player2] } })
          }
        }

        if (isTTT && isPlayer1) {
          nuber = parseInt(budy)
          if (isNaN(nuber)) return
          if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
          main = ky_ttt.filter(hjh => hjh.id.includes(from))
          if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
          if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
          s = '❎'
          main[0].angka[nuber] = s
          main[0].gilir = main[0].player1
          naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
          ky_ttt = naa
          pop = main[0]
          ky_ttt.push(pop)
          tto = ky_ttt.filter(hgh => hgh.id.includes(from))
          tty = tto[0]
          angka = tto[0].angka
          ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

          ucapmenang = () => {
            ucapan1 =
              `*🎳Result Game Tictactoe 🎲*

*Yeyyy Permainan Di Menangkan Oleh* @${tty.player1.split('@')[0]}\n
*Ingin bermain lagi? ${prefix}tictactoe*`
            ucapan2 = `*🎳Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
            Ramdani.sendMessage(from, ucapan1, text, { quoted: Ramdanif, contextInfo: { mentionedJid: [tty.player1] } })
            naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
            return ky_ttt = naa
          }

          if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()

          if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()

          if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()

          if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()

          if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()

          if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()

          if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()

          if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()

          if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && !ttt.includes('4️⃣') && !
            ttt.includes('5️⃣') && !
            ttt.includes('6️⃣') && !ttt.includes('7️⃣') && !ttt.includes('8️⃣') && !ttt.includes('9️⃣')) {
            ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*_Permainan Seri ??👌_*`
            ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
            reply(ucapan1)
            naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
            return ky_ttt = naa
          }
          ucapan = `*🎳 Game Tictactoe 🎲*

Player2 @${tty.player2.split('@')[0]}=⭕
Player1 @${tty.player1.split('@')[0]}=❎

Giliran = @${tty.player2.split('@')[0]}

${ttt}`
          Ramdani.sendMessage(from, ucapan, text, { quoted: Ramdanif, contextInfo: { mentionedJid: [tty.player1, tty.player2] } })
        }
        if (isTTT && isPlayer2) {
          nuber = parseInt(budy)
          if (isNaN(nuber)) return
          if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
          main = ky_ttt.filter(hjh => hjh.id.includes(from))
          if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
          if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
          s = '⭕'
          main[0].angka[nuber] = s
          main[0].gilir = main[0].player2
          naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
          ky_ttt = naa
          pop = main[0]
          ky_ttt.push(pop)
          tto = ky_ttt.filter(hgh => hgh.id.includes(from))
          tty = tto[0]
          angka = tto[0].angka
          ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

          ucapmenang = () => {
            ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*Yeyyy Permainan Di Menangkan Oleh* @${tty.player2.split('@')[0]}\n
*Ingin bermain lagi? ${prefix}tictactoe*`
            ucapan2 = `*🎳 Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
            Ramdani.sendMessage(from, ucapan1, text, { quoted: Ramdanif, contextInfo: { mentionedJid: [tty.player2] } })
            naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
            return ky_ttt = naa
          }

          if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()
          if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()
          if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()
          if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()
          if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()
          if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()
          if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()
          if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()
          if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && !ttt.includes('4️⃣') && !
            ttt.includes('5️⃣') && !
            ttt.includes('6️⃣') && !ttt.includes('7️⃣') && !ttt.includes('8️⃣') && !ttt.includes('9️⃣')) {
            ucapan1 = `*🎳Result Game Tictactoe 🎲*

*_Permainan Seri🎟️👌*`
            ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
            reply(ucapan1)
            naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
            return ky_ttt = naa
          }
          ucapan = `*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=⭕
Player2 @${tty.player2.split('@')[0]}=❎
   
Giliran = @${tty.player1.split('@')[0]}

${ttt}`
          Ramdani.sendMessage(from, ucapan, text, { quoted: Ramdanif, contextInfo: { mentionedJid: [tty.player1, tty.player2] } })
        } else {
        }
        if (/^=?>/.test(budy) && (isOwner || Ramdanif.key.fromMe)) {

          let parse = /^=>/.test(budy) ? budy.replace(/^=>/, 'return') : budy.replace(/^>/, '')

          try {

            let evaluate = await eval(`;(async () => {${parse} })()`).catch(e => { return e })

            return reply(require('util').format(evaluate))

          } catch (e) {

            return reply(require('util').format(e))

          }
        }
        if (isCmd) {
          return sendButMessage(from, `Maaf kak @${senderr.split('@')[0]} command ${command}tidak terdaftar dalam menu`, 'BACA MENUNYA\n© Creator By Ramdani Official', [
            {
              "buttonId": ".menu",
              "buttonText": {
                "displayText": "MENU"
              },
              "type": "RESPONSE"
            }
          ], { quoted: ftroli })
        }
    }
    if (isGroup && budy != undefined) {
    } else {
    }

  } catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
      if (!e.includes("Cannot read property 'conversation' of null")) {
        if (!e.includes("Cannot read property 'contextInfo' of undefined")) {
          if (!e.includes("Cannot set property 'mtype' of undefined")) {
            if (!e.includes("jid is not defined")) {
              console.log(color('|ERR|', 'red'), color(e, 'cyan'))
            }
          }
        }
      }
    }
  }

}