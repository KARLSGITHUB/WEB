// JavaScript Documentvar DB;
//创建数据表
function createUserTable()
{	
	initDatabase();
	DB.transaction(function(tx){
		tx.executeSql("create table if not exists TEACHER (TUSERNAME,TPASSWORD,TOCCUPATION)",
		[],
		function(tx,result){ 
		//alert('创建模板表成功'); 
		},
		function(tx, error){
			alert('创建模板表失败:' + error.message);
		})
	});
	
}



function createStudentTable()
{	
	initDatabase();
	DB.transaction(function(tx){
		tx.executeSql("create table if not exists STUDENT (SUSERNAME,SPASSWORD,SOCCUPATION)",
		[],
		function(tx,result){ 
		//alert('创建模板表成功'); 
		},
		function(tx, error){
			alert('创建模板表失败:' + error.message);
		})
	});
}



function createGradeTable()
{	
	initDatabase();
	DB.transaction(function(tx){
		tx.executeSql("create table if not exists GRADE (SNAME,CHINESE,MATH)",
		[],
		function(tx,result){ 
		//alert('创建模板表成功'); 
		},
		function(tx, error){
			alert('创建模板表失败:' + error.message);
		})
	});
}





function drop()   //删除表
{	
	initDatabase();
	DB.transaction(function(tx){
		tx.executeSql("drop table STUDENT",
		[],
		function(tx,result){ 
		alert('删除表成功'); 
		},
		function(tx, error){
			alert('删除失败:' + error.message);
		})
	});
}

