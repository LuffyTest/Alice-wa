const axios = require('axios')




let handler = async (m, { conn, args  , usedPrefix, command })=>{


if(!args[0]) throw " please provide place or location name"
  
    try{

        const response = axios.get(`https://v2.jokeapi.dev/joke/dark`)
        const res = await response
        
        const category = res.data.category
        const delivery = res.data.delivery
        const lang= res.data.lang
        

        conn.reply(m.chat,`
        🌸 Category: ${category}\n💮 Delivery: ${delivery}\n💦 Language: ${lang}
        `.trim(),m)
    }catch(e){
throw 'not found' 
console.log(e)

    }
