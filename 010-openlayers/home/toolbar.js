let isCancelModify = true; // 是否取消监听Modify
/* 点击图形 */
function onClickBtn (type) {
    console.log('点击图形：', type)
    if (isCancelModify) setMaskingLayer(false);
    mapDom.removeInteraction(clickDraw);
    addInteraction(type);
}
/* 存储绘制的图形 */
let modifyList = [];
/* 存储到新创建的数组 */
let clickLayerList = [];
/* 创建图形 */
function addInteraction(value) {
    if (value) {
        let geometryFunction;
        let typeValue = '';
        if (value == 'point') { /* 点 */
            typeValue = 'Point'
            userClickPoint();
            return  false;
        } else if (value == 'dimetric') { /* 矩形 */
            typeValue = 'Circle';
            geometryFunction = drawCreateBox();
        } else if (value == 'draw') { /* 多边形 */
            typeValue = "Polygon";
        } else if (value == 'circle') { /* 圆 */
            typeValue = 'Circle';
        } else if (value == 'line') { /* 路线 */
            typeValue = 'LineString'
        } else {
            return false;
        }
        /* 如果点击过设置点位则恢复初始化 */
        if (isUserAddPoint) {
            isUserAddPoint = false;
            $("#user-map").css('cursor', 'auto');
        }
        let source = new VectorSource({wrapX: false});
        let fillColor = [71, 137, 227, 0.5]; // 填充颜色
        let borderColor = '#c5ffe7'; // 边框颜色
        let seriousLayerVector = new VectorLayer({ source: source, style: [new Style({ fill: new Fill({ color: fillColor }), stroke: new Stroke({color: borderColor, width: 2 }) })], zIndex: 4 });
        /* 创建layer */
        let modify = new ModifyFeature({ source: seriousLayerVector.getSource() });
        modifyList.push(modify);
        mapDom.addInteraction(modify);

        /* 存储到新创建的数组 */
        clickLayerList.push({layer: seriousLayerVector,level: value});
        /* 添加到地图 */
        mapDom.addLayer(seriousLayerVector);
        /* 创建Draw */
        clickDraw = new Draw({
            stopClick: true,
            type: typeValue,
            source: seriousLayerVector.getSource(),
            geometryFunction: geometryFunction
        });
        mapDom.addInteraction(clickDraw);
        /* 绘制完成 */
        clickDraw.on("drawend", function(e) {
            let feat = e.feature;
            let geometry = feat.getGeometry();
            let coords = [];
            let radius = 0; // 绘制圆形时的半径
            if (value == 'circle') {
                let PointObj = setPointList(value, geometry);
                coords = PointObj.center;
                radius = PointObj.radius;
            } else {
                coords = setPointList(value, geometry);
            }
            console.log('绘制完成', coords, (value == 'circle' ? ('半径是：' + radius) : ''))
        });
        /* 修改结束后 */
        modify.on("modifyend", function(evt) {
            const geometry = evt.features.item(0).getGeometry();
            let coords = [];
            let radius = 0; // 绘制圆形时的半径
            if (value == 'circle') {
                let PointObj = setPointList(value, geometry);
                coords = PointObj.center;
                radius = PointObj.radius;
            } else {
                coords = setPointList(value, geometry);
            }
            console.log('修改完成', coords, (value == 'circle' ? ('半径是：' + radius) : ''))
        })
    }
}
/* 处理图形绘制、调整后的点位 */
function setPointList (value, geometry) {
    let coords = []; // 点位数据
    if (value == 'draw' || value == 'dimetric') { // 多边形点位或者矩形点位
        coords = geometry.getCoordinates()[0];
        console.log((value == 'draw' ? '多边形' : '矩形'));
    } else if (value == 'line') { // 线点位
        coords = geometry.getCoordinates();
        console.log('线条：');
    } else if (value == 'circle') { // 圆圈
        coords = geometry.getCenter(); // 中心点
        let radius = geometry.getRadius(); // 绘制圆形时的半径
        console.log('圈圈：');
        return {
            center: coords,
            radius: radius
        }
    } else { // 点
        coords = geometry.getCoordinates();
    }
    return coords;
}
/* 删除图形 */
function clickRemoveDraw () {
    /* 如果点击过设置点位则恢复初始化 */
    if (isUserAddPoint) {
        isUserAddPoint = false;
        $("#user-map").css('cursor', 'auto');
    }
    /* 删除编辑状态 */
    mapDom.removeInteraction(clickDraw);
    if (!isCancelModify) setMaskingLayer(true);
}
/* 取消样式调整事件 */
function setMaskingLayer (falg) {
    console.log(modifyList)
    debugger
    isCancelModify = falg;
    if (falg) {
        /* 取消modify监听事件 */
        try {
            for (let i in modifyList) {
                modifyList[i].setActive(false);
            }
            console.log('删除')
        } catch (error) {}
    } else {
        /* 添加modify监听事件 */
        try {
            for (let i in modifyList) {
                modifyList[i].setActive(true);
            }
            console.log('添加')
        } catch (error) {}
    }
}
/* 工具栏点击创建点位 */
function userClickPoint () {
    isUserAddPoint = true;
    $("#user-map").css('cursor', 'crosshair');
}
/* 加载完成后执行 */
$(function () {

})