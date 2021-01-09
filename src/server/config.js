const express = require('express')
const app = express()
const mongoose = require('mongoose')
app.set('port', process.env.PORT || 8000)
app.listen(app.get('port'), ()=> {
    console.log('servidor en puerto', app.get('port'))
})

module.exports=app