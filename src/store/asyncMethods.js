const host = 'http://localhost:8080'

let fns = {
    async TuList() {
        let page = 2
        let httpUrl = `${host}/api/rtimu/?page=${page}`
        let res = await axios.get(httpUrl)
        console.log(res.data)
    }
}