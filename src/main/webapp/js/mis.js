/*
 * $.ajax()函数
 * 
*/

var u1 = "/ssm/stu/select";
var u2 = "/ssm/stu/get/";
var u3 = "/ssm/stu/save";
var u4 = "/ssm/stu/delete/";

//查询全部
function select() {
    $.ajax({
        type: 'get',
        dataType: 'json',
        url: u1,
        data: null,
        success: function (r,s,x) {
            var s = "";
            $.each(r.list,function (i,v) {
                s+='<tr><td>';
                s+=v.id+'</td><td>'+v.name+'</td><td>'+v.age+'</td><td>'+v.score+'</td>';
                s+='<td><a href="input.html?id='+v.id+'">修改</a>&nbsp&nbsp&nbsp<a onclick="del('+v.id+')">删除</a></td>';
                s+='</tr>';
            })
            $("#stu").first("tr").append(s);
        },
        error: function () {
             
        }
    })

}

//保存
function save() {
    $.ajax({
        contentType: 'application/json;charset=UTF-8',   //定义编码
        type: 'post',     //post
        dataType: 'json',
        url: u3,
        data:JSON.stringify({                              //用 js将参数序列化成json
            "id":$("#id").val(),        //更新id有值，添加id为null
            "name":$("#name").val(),
            "age":$("#age").val(),
            "score":$("#score").val()
        }),      
        
        success: function (r,s,x) {
           alert("保存成功！")
        },
        error: function () {
           alert("保存失败！");
        }
    })
}



//更新
function update(id) {
    $.ajax({
        type: 'get',
        dataType: 'json',
        url: u2+id,      //  /ssm/stu/get/2
        data:null,
        success: function (r,s,x) {
           $("#id").val(r.stu.id);
           $("#name").val(r.stu.name);
           $("#age").val(r.stu.age);
           $("#score").val(r.stu.score);
        },
        error: function () {

        }
    })

}

//删除
function del(id) {
   $.ajax({
       type: 'get',
       dataType: 'json',
       url: u4+id,     // /ssm/stu/delete/2
       data:null,
       success: function (r,s,x) {
          alert("删除成功！");
           location.reload();
       },
       error: function () {

       }
   })
}
