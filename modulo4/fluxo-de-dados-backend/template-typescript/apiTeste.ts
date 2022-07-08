mport axios from 'axios'

axios.get("http://localhost:3003/test")
    .then((res) => {
        console.log(res.data)
})

axios.get("http://localhost:3003/data/usuario3")
    .then((res) => {
        console.log(res.data)
})