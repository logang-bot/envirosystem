const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.set('port', process.env.PORT || 8000)

app.listen(app.get('port'), ()=>{
    console.log('servidor en puerto', app.get('port'))
})
