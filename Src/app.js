import express from 'express'
const app = express()
import Selecaocontroller from './app/controllres/Selecaocontroller.js'


// indicar para o express ler o body com json
app.use(express.json())



   

//Rotas 

app.get('/selecoes' , Selecaocontroller.index)

app.get('/selecoes/:id', Selecaocontroller.show )

app.post('/selecoes', Selecaocontroller.store)

app.put('/selecoes/:id',Selecaocontroller.update )

app.delete('/selecoes/:id',Selecaocontroller.delete )


export default app

