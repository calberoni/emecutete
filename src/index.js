import express, { json } from 'express'
import {dirname, join} from 'path'
import { fileURLToPath } from 'url'
import mqtt from 'mqtt'
import indexRoute from './routes/index.js'
import { Console } from 'console'


const cliente = mqtt.connect('mqtt://test.mosquitto.org')

const app = express()

const __dirname = dirname(fileURLToPath(import.meta.url))

app.set('views', join(__dirname,'views'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:false}))
app.use(express(json))
app.use(indexRoute)

//app.use(bodyParser.json());
app.use(express.static(join(__dirname,'public')))


app.listen(3000)
console.log('server is listensing on port', 3000)


/*
form request
*/

/* function publicar (){
  cliente.on('connect', function () {
    cliente.subscribe('presence', function (err) {
      if (!err) {
        for(let i=0;i<10; i++){
          cliente.publish('presence', 'Hello mqtt')
        }
        
      }
    })
  })
}



cliente.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
  cliente.end()
}) */

