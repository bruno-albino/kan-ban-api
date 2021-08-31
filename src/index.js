import express from 'express'
import routes from './routes'
import { PORT } from './config'

const app = express()
app.use(routes)

app.listen(PORT, () => console.log(`Server listening on PORT ${PORT}`))
