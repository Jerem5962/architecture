function list() {
    return [
        "Jérémy",
        "Chris",
        "Clémentine"
    ]
}

function all(req, res) {
    console.log(req.query);
    res.send("ok")
}

module.exports = { list, all }