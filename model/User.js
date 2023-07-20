/* ./model/User.js */
const mysql = require("mysql");

const cnn = mysql.createConnection({
    host: '3306',
    user: 'root',
    password: 'choikc0901!',
    database: 'signup'
});

//sql 연결 실패시 보여주는 코드
cnn.connect( function (err) {
    if (err) {
        console.log("mysql 연결 에러");
        console.log(err);
        throw err;
    }
});

//회원가입 정보 입력
// 사용자가 입력한 data 값을 첫번째 파라밑터에서 가져올 것 이다.
exports.insert = ( data, cb ) => {      // exports는 모듈 밖으로 보내는데 사용된다.
    var sql = `INSERT INTO user VALUES ('${data.id}', '${data.name}', '${data.email}', '${data.phoneNumber}', '${data.password}')`;

    cnn.query(sql, (err, rows) => {
        if ( err ) throw err;
        cd( data.id );
    });
}

// 로그인 정보 읽기
exports.select = ( id, password, cb ) => {
    var sql = `SELECT * FROM user WHERE id='${id}' limit 1`; //여기서 limit은 최소값이 아닌? select limit이기 때문에  1개 보여달라는 의미로 쓴다.
    
    cnn.query(sql, (err, rows) => {
        if ( err ) throw err;
        cb( rows[0] );
    });
}

// 회원 정보
exports.get_user = (id, cb) => {
    let sql = `SELECT * FROM user WHERE id = '${id}' limit 1`;

    cnn.query( sql, function(err, rows){
        if ( err ) throw err;
        cb(rows);
    });
}

//회원 정보 수정
exports.update = ( data,  cb ) => {
    var sql = `UPDATE user SET name='${data.name}', email='${data.email}', phoneNumber='${data.phoneNumber}', password='${data.password}' WHERE id='${data.id}';`;

    cnn.query(sql, (err, rows) => {
        if ( err ) throw err;
        cb( rows );
    });
}

//회원 탈퇴
exports.delete = ( id,  cb ) => {
    var sql = `DELETE FROM user WHERE id='${id}';`;
  
    cnn.query(sql, (err, rows) => {
        if ( err ) throw err;
        cb( rows );
    });
}