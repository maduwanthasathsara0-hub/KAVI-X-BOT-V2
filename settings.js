const fs = require('fs')
const chalk = require('chalk')

global.sessionID = process.env.SESSIONID || "KAVI-X-SESSION-ID~Opg0SJpK#8S0oqRDBJxz9hXhjSduFdNhJnymTQTrBWiQ440V0WZU"
global.mongodburi = process.env.MONGODB_URI || "mongodb+srv://ketkshqAqjXygEF5:ketkshqAqjXygEF5@freeuri.dmkyoml.mongodb.net/v2-sathsara-0768437929?retryWrites=true&w=majority&appName=freeuri"
global.botname = process.env.BOTNAME || "S.M-X MD"
global.ownernumber = process.env.OWNERNUMBER || "94701160257"
global.ownername = process.env.OWNERNAME || "Sathsara Maduwantha"
global.packname = process.env.PACKNAME || "S.M-X MD"
global.author = process.env.AUTHOR || "Sathsara Maduwantha"

global.creator = process.env.CREATOR || "94702128378@s.whatsapp.net"
global.botprefix = process.env.BOTPREFIX || "."
global.restart = process.env.RESTART || true
global.websitex = process.env.WEBSITEX || "https://kavi-x-bot-login.up.railway.app/"
global.wagc = process.env.WAGC || "https://chat.whatsapp.com/CG9f0paHJzwDImXiydfuht"
global.botscript = process.env.BOTSCRIPT || "https://github.com/KaviDeveloperSe/KAVI-X-BOT"
global.botlogo = process.env.BOTLOGO || "https://raw.githubusercontent.com/KaviDeveloperSe/KAVI-X-BOT-DB/refs/heads/main/kavix03.png"

global.port = process.env.PORT || 3000

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
