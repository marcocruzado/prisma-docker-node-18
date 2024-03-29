import Express  from 'express';
import cors from 'cors'
import morgan from 'morgan';
//rutas
import Pages from '../routes/index.routes.js';
import Users from '../routes/Users.routes.js'

const app = Express();

//configuración de la app
app.set('port', 3000 || process.env.PORT)
app.set('engine','ejs')
app.set('views', './src/views')

//middleware
app.use(cors())
app.use(Express.json())
app.use(Express.urlencoded({extended:false}))
app.use(morgan('dev'))

//rutas
app.use('/', Pages)
app.use('/API/v1/users',Users)

//archivos estaticos
app.use(Express.static('./src/public'))

export default app;