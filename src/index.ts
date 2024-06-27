import express, { Request, Response } from "express"; 
import dotenv from "dotenv"; 

dotenv.config()  

const app = express() 
const port = process.env.PORT

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({message: "Welcome"}); 
})

app.get('/echo/:value', (req: Request, res: Response) => {
    const { value } = req.params; 
    console.log(`Echo: ${value}`) 
    res.status(200).json({echo: value}); 
})

app.listen(port, () => {
    const message = `Server is running at http://localhost:${port}` 
    console.log(message)
})