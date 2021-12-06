// JavaScript Document
var DB;
//创建数据库方法
function initDatabase() {
    if (!window.openDatabase) {
        alert('浏览器不支持Web SQL数据库.');
    } else {
        var dbName = 'mydb'; //定义数据库名称
        var dbVersion = '1.0'; //定义数据库版本
        var dbDec = 'DEMO Database'; //定义数据库说明信息
        var dbSize = 100000; //定义数据库大小
        DB = openDatabase(dbName, dbVersion,dbDec,dbSize); //创建数据库
    }
}

