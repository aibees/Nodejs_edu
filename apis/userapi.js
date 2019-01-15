
//request 객체의 body에 대한 url encoding의 확장을 할 수 있도록
//extended:true option을 설정한다.
//body.json()을 use하여 오는 데이터를 json형식으로 변환

exports.userget = function(req, res) {
    console.log("user get");
    let param = req.params;
    let query = req.query;
    console.log(param, query);
    connect.query('select * from user where id=?',[query], (err, row, fields) => {
        res.send(row);
        console.log(row);
    });
};

exports.userpost = function(req, res) {
    console.log(req.body);
    res.send(req.body);
};