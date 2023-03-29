import mqtt from 'mqtt'

function publicar (){
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
  })