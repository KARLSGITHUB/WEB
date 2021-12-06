// JavaScript Document
function queryTeacher()
{	
	createUserTable();
	DB.transaction(function(tx){
		tx.executeSql(
			'select * from TEACHER',
			[],
			function(tx,rs){
				var msg ='';
				for(var i=0;i<rs.rows.length;i++)
				{
					msg += 'username : '+rs.rows.item(i).TUSERNAME+ ' , password : ' 
+rs.rows.item(i).TPASSWORD+ ' ,occupation : '+ rs.rows.item(i).TOCCUPATION+ "<br>";
				}
				showTeacherResult(msg);
			}
		);
	});
}


function queryStudent()
{	
	createUserTable();
	DB.transaction(function(tx){
		tx.executeSql(
			'select * from STUDENT',
			[],
			function(tx,rs){
				var msg ='';
				for(var i=0;i<rs.rows.length;i++)
				{
					msg += 'username : '+rs.rows.item(i).SUSERNAME+ ' , password : ' 
+rs.rows.item(i).SPASSWORD+ ' ,occupation : '+ rs.rows.item(i).SOCCUPATION+ "<br>";
				}
				showStudentResult(msg);
			}
		);
	});
}


function queryTotalgrade()
{	
	createGradeTable();
	DB.transaction(function(tx){
		tx.executeSql(
			'select * from GRADE',
			[],
			function(tx,rs){
				var msg ='';
				for(var i=0;i<rs.rows.length;i++)
				{
					msg += '学生姓名 : '+rs.rows.item(i).SNAME+ ' , 语文 : ' 
+rs.rows.item(i).CHINESE+ ' ,数学 : '+ rs.rows.item(i).MATH+ "<br>";
				}
				showGradeResult(msg);
			}
		);
	});
}


function queryonegrade()
{	
	createGradeTable();
	var sname = document.getElementById("sname").value;
	var msg='';
	DB.transaction(function(tx){
		tx.executeSql(
			'select * from GRADE where SNAME=sname',
			[],
			function(tx,rs){
			if(rs.rows.length>0)
				{
					
					
						msg += '学生姓名 : '+rs.rows.item.SNAME+ ' , 语文 : ' 
						+rs.rows.item.CHINESE+ ' ,数学 : '+ rs.rows.item.MATH;

					alert(msg);
				}
			else
				{
					alert("没货儿")
				}
			
			
			}
		);
	});
}






function showTeacherResult(msg)
{
	var teacherResult = document.getElementById("teacherResult");
	teacherResult.innerHTML =msg;
}

function showStudentResult(msg)
{
	var studentResult = document.getElementById("studentResult");
	studentResult.innerHTML =msg;
}

function showGradeResult(msg)
{
	var gradeResult = document.getElementById("gradeResult");
	gradeResult.innerHTML =msg;
}