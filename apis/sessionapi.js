exports.sessionget = (req, res) => {
    console.log(req.session);
    res.send(req.session);
}