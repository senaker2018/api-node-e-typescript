import { server } from "./server/Server";

server.listen(3333, () => {
    console.log('server rodando na porta http://localhost:3333')
})