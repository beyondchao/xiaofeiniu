/*
*全局设置路由器
*/
const express = require('express');
const pool = require('../../pool');
var router = express.Router();
module.exports = router;

/*
*获取订单列表
*get /admin/order
*/ 
router.get('/', (req, res) => {
    pool.query('SELECT * FROM xfn_order', (err, result) => {
        if (err) throw err
        res.send({code: 200, data: result})
    })
})