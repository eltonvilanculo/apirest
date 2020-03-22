const express = require('express')


const app =  express()
const Routes =  require('./routes/personRoutes')

app.use('/person', Routes);







app.listen(3000, () => {
    console.log('App listening on port 3000!');
});
