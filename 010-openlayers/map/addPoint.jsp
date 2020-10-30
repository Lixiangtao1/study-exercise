<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2020.10.26
  Time: 11:38
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html; charset=utf-8"  pageEncoding="utf-8"%>
<html>
<head>
    <title>${appName}</title>
    <meta charset="UTF-8">
    <meta content="text/html; http-equiv="Content-Type" charset=utf-8"/>
    <%@include file="/commons/list.jsp"%>
    <style type="text/css">
        .userAddPoint .mini-textbox, .userAddPoint .mini-buttonedit {
            width: 100%;
        }
        .userAddPoint {
            padding: 20px;
            box-sizing: border-box;
        }
        .formLable {
            width: 120px;
            text-align: right;
            padding: 0 10px;
            box-sizing: border-box;
        }
        .formContent {
            width: 50%;
        }
        .bottom {
            height: 15px;
        }
        .userAddPoint .mini-button-default {
            background: #EBEDF2;
            border-color: #999;
            margin-left: 20px;
        }
        .userAddPoint a:hover.mini-button-default {
            background: #EBEDF2;
            border-color: #999;
        }
        .mini-button-default .mini-button-text {
            color: #333;
        }
    </style>
    <script type="text/javascript">
        let dataLocation = [];
        /* 初始化 */
        function initData (data) {
            console.log('初始化值：', data);
            dataLocation = data.location;
        }
        /* 提交 */
        function submitForm () {
            //提交表单数据
            let form = new mini.Form("#form1");
            form.validate();
            if (form.isValid() == false) return false;
            let data = form.getData();      //获取表单多个控件的数据
            data['lon'] = String(dataLocation[0]);
            data['lat'] = String(dataLocation[1]);
            data['typeName'] = mini.get("type").getText();
            if (data['validTime']) {
                data['validTime'] = mini.formatDate(data.validTime, "yyyy-MM-dd HH:mm:ss");
            } else {
                delete data.validTime;
            }
            data['location'] = dataLocation;
            _SubmitJson({
                url: '/cnooc/equipment/addEqu.do',
                postJson:true,
                data: data,
                method:'POST',
                success:function(text){
                    debugger
                    closewindow({
                        type: "ok",
                        data: data
                    });
                }
            })
        }
        /* 重置表单 */
        function resetForm () {
            let form = new mini.Form("#form1");
            form.reset();
        }
        $(function () {
            mini.parse();
            let type = mini.get("type");
            let data = [
                {value: '1', name: '采集仪'},
                {value: '2', name: '恒电位仪'},
                {value: '3', name: '储罐'},
                {value: '4', name: '管道'},
                {value: '5', name: '场站'}
            ]
            type.setData(data);
        })
    </script>
</head>
<body>
    <div class="userAddPoint" id="form1">
        <table border="0" cellpadding="3" cellspacing="1" style="width:100%;table-layout:fixed;">
            <tr class="item_tr">
                <td class="formLable"><label for="sim$text">SIM卡号</label></td>
                <td class="formContent"><input name="simNo" class="mini-textbox" required="true" emptyText="必选" /></td>

                <td class="formLable"><label for="elevation$text">海拔</label></td>
                <td class="formContent"><input name="altitude" class="mini-spinner" emptyText="可选" /></td>
            </tr>
            <tr class="bottom"></tr>
            <tr class="item_tr">
                <td class="formLable"><label for="simDate$text">SIM有效期：</label></td>
                <td class="formContent"><input name="validTime" class="mini-datepicker" format="yyyy-MM-dd" timeFormat="HH:mm:ss" emptyText="可选" /></td>

                <td class="formLable"><label for="mileage$text">里程</label></td>
                <td class="formContent"><input name="mileage" class="mini-spinner" emptyText="可选" /></td>
            </tr>
            <tr class="bottom"></tr>
            <tr class="item_tr">
                <td class="formLable"><label for="code$text">设备编号</label></td>
                <td class="formContent"><input name="equipmentNo" class="mini-textbox" required="true" emptyText="必选" /></td>

                <td class="formLable"><label for="type$text">设备类型</label></td>
                <td class="formContent"><input id="type" name="type" showNullItem="true" class="mini-combobox" textField="name" valueField="value" showNullItem="true" emptyText="必选" nullItemText="请选择" required="true" /></td>
            </tr>
            <tr class="bottom"></tr>
            <tr class="item_tr">
                <td class="formLable"><label for="level$text">设备等级3-100</label></td>
                <td class="formContent"><input name="equipmentLevel" class="mini-spinner" emptyText="可选" /></td>

                <td class="formLable"><label for="remark$text">备注</label></td>
                <td class="formContent"><input name="remark" class="mini-textarea" emptyText="请输入内容【可选】" /></td>
            </tr>
            <tr class="bottom"></tr>
            <tr class="item_tr">
                <td class="formLable"><label for="department$text">所属部门</label></td>
                <td class="formContent"><input name="depIdName" class="mini-textbox" emptyText="可选" /></td>
            </tr>
            <tr class="bottom"></tr>
            <tr class="item_tr">
                <td class="formLable"></td>
                <td nowrap style="width: 100%">
                    <a class="mini-button" onclick="submitForm()" >立即提交</a>
                    <a class="mini-button mini-button-default" onclick="resetForm()" >重置</a>
                </td>
            </tr>
        </table>
    </div>
</body>
<script src="${ctxPath}/scripts/share.js" type="text/javascript"></script>
</html>
