const fs = require('fs')

let _msgContage = JSON.parse(fs.readFileSync('./database/json/msgContage.json'));

///////////SISTEMA DE CONTAGEM DE MENSAGENS/////////
const getMsgId = (sender) => {
let position = false
Object.keys(_msgContage).forEach((i) => {
if (_msgContage[i].user === sender) {
position = i
}
})
if (position !== false) {
return _msgContage[position].user
}
}

const getMsgMessage = (sender) => {
let position = false
Object.keys(_msgContage).forEach((i) => {
if (_msgContage[i].user === sender) {
position = i
}
})
if (position !== false) {
return _msgContage[position].message
}
}
const messageContage = (sender, amount) => {
let position = false
Object.keys(_msgContage).forEach((i) => {
if (_msgContage[i].user === sender) {
position = i
}
})
if (position !== false) {
_msgContage[position].message += amount
fs.writeFileSync('./database/json/msgContage.json', JSON.stringify(_msgContage))
}
}
const addMsgId = (sender) => {
const obj = {user: sender, message: 0}
_msgContage.push(obj)
fs.writeFileSync('./database/user/msgContage.json', JSON.stringify(_msgContage))
}

module.exports = {
getMsgId,
getMsgMessage,
messageContage,
addMsgId
}