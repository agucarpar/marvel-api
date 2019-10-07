import CryptoJS from 'crypto-js';
import {dotKeys} from './dotenv'



console.log(dotKeys)
let ts = new Date().getTime()
let hash= CryptoJS.MD5(ts + dotKeys.private_key + dotKeys.public_key).toString()

console.log(hash)




export const endPoint = {
  apiUrl: `https://gateway.marvel.com/v1/public/characters?limit=12&nameStartsWith=`,
  hash:   `&apikey=`+dotKeys.public_key+`&ts=`+ts+`&hash=`+hash,
}
