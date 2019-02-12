/*
*桌台相关的路由器
*/
const express = require('express');
const pool = require('../../pool');
var router = express.Router();
module.exports = router;

/*
*GET  /admin/table
*获取所有的桌台信息
*返回数据：
*   [
*     {tid:xxx, tname:'xxx', status:''},
*     ...
*   ]
*/
router.get('/', (req, res)=>{
  pool.query('SELECT * FROM xfn_table ORDER BY tid', (err, result)=>{
    if(err)throw err;
    res.send(result);
  })
})

/*
*根据tid获取预定信息
*GET /admin/table/reservation
*/
router.get('/reservation/:tid', (req, res) => {
  var tid = req.params.tid
  //console.log(tid)
      pool.query('SELECT * FROM xfn_reservation WHERE tableId=?', [tid], (err, result) => {
    if (err) throw err
    res.send(result) 
  })
})

/*
*根据tid获取占用信息
*get /admin/table/order
*/


/*
添加桌台 post /admin/table/add
*/ 
router.post('/add', (req, res) => {
  var data = req.body
  pool.query('INSERT INTO xfn_table set ?', data, (err, result) => {
    if (err) throw err
    res.send({code: 200, msg: 'insert success'})
  })
})

/*
删除指定编号的桌台
delete /admin/table
*/
router.delete('/', (req, res) => {
  var tid = req.body.tid
  pool.query('DELETE FROM xfn_table WHERE tid=?', [tid], (err, result) => {
    if (err) throw err
    res.send({code: 200, msg: 'delete sucess'})
  })
})