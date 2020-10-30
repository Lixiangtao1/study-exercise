/* 创建点位 */
function initPoint (layer, list) {
    /* 点位数组 */
    let GeomList = [];
    /* 循环创建点位 */
    for (let i = 0; i < list.length; i++) {
        let item = list[i];
        let location = [item.lng, item.lat];
        let pointFeature = new Feature({
            type: 'point',
            newData: {...item, tooltip: true},
            geometry: new Point(location)
        })
        pointFeature.setId((i + '--'));
        let styleList = setStyleFn(item);
        pointFeature.setStyle(styleList);
        GeomList.push(pointFeature);
    };
    /* 初始化矢量数据源 */
    sourceObj[layer] = new VectorSource({features: GeomList, wrapX: false});
    /* 聚合设置 */
    let clusterSource = new Cluster({
        //标注元素之间的间距
        distance: 20,
        //数据源
        source: sourceObj[layer]
    });
    /* 样式缓存 */
    let styleCache = {};
    /* 初始化矢量图层 */
    layerObj[(layer)] = new VectorLayer({
        zIndex: 2,
        //数据源
        source: clusterSource,
        style: (feature) => {
            let size = feature.get("features").length;
            let style = styleCache[size];
            if (!style) {
                try {
                    style = feature.get("features")[0].getStyle()
                } catch (error) {}
            }
            return style;
        }
    });
    /* 将聚合标注图层添加到map中 */
    mapDom.addLayer(layerObj[layer]);
}
/* 设置点位样式 */
function setStyleFn (item) {
    let imgWidth = 20;
    let imgHeight = 20;
    let mysvg = setSvgColor(imgWidth, imgHeight, item);
    let styleObj = {
        /* 背景图片 */
        image: new Icon({
            img: mysvg,
            imgSize: [imgWidth, imgHeight]
        })
    };
    styleObj['text'] = new Text({
        font: '12px SourceHanSansCN-Normal',
        textAlign: 'left',
        padding: [2, 4, 2, 4],
        offsetX: 10,
        offsetY: -15,
        radius: 4,
        text: (String(item.buildingName)),
        fill: new Fill({color: ('#fff')}),
        backgroundFill: new Fill({color: ('rgba(93, 129, 174, 0.89)')})
    });
    return [new Style(styleObj)]
}
/* 设置svg */
function setSvgColor (imgWidth, imgHeight, item) {
    if (item) {
        let color = "#1296db";
        let svg = '<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="' + imgWidth + '" height="' + imgHeight + '">' +
            '<path d="M849.46488889 388.20977778c0-203.43466667-147.68355555-351.00444445-351.00444444-351.00444445-193.536 0-351.00444445 157.46844445-351.00444445 351.00444445 0 142.90488889 194.10488889 384.91022222 298.43911111 514.95822222l7.73688889 9.55733333c10.92266667 13.65333333 27.30666667 21.504 44.94222222 21.504 17.52177778 0 33.90577778-7.85066667 44.94222223-21.504l7.73688888-9.55733333c104.10666667-130.048 298.21155555-372.05333333 298.21155556-514.95822222z m-352.82488889 101.71733333c-71.56622222 0-129.70666667-58.14044445-129.70666667-129.70666666s58.14044445-129.70666667 129.70666667-129.70666667 129.70666667 58.14044445 129.70666667 129.70666667-58.14044445 129.70666667-129.70666667 129.70666666z" fill="' + color + '" />' +
            '<path d="M498.46044445 6.59911111c-210.37511111 0-381.61066667 171.12177778-381.61066667 381.61066667 0 153.6 198.54222222 401.06666667 305.152 534.07288889l7.62311111 9.55733333c16.83911111 20.93511111 41.87022222 32.99555555 68.72177778 32.99555555s51.88266667-12.06044445 68.72177778-32.99555555l7.73688888-9.55733333C681.52888889 789.27644445 879.95733333 541.80977778 879.95733333 388.20977778c0-221.07022222-160.42666667-381.61066667-381.49688888-381.61066667z m0 927.63022222c-17.52177778 0-33.90577778-7.85066667-44.94222223-21.504l-7.73688889-9.55733333c-104.33422222-130.048-298.43911111-372.05333333-298.43911111-514.95822222 0-193.536 157.46844445-351.00444445 351.00444445-351.00444445 203.43466667 0 351.00444445 147.68355555 351.00444444 351.00444445 0 142.90488889-194.10488889 384.91022222-298.43911111 514.95822222l-7.73688889 9.55733333c-10.80888889 13.65333333-27.19288889 21.504-44.71466666 21.504z" fill="#ffffff" />' +
            '<path d="M496.64 360.22044445m-99.21422222 0a99.21422222 99.21422222 0 1 0 198.42844444 0 99.21422222 99.21422222 0 1 0-198.42844444 0Z" fill="#FFFFFF" />' +
            '<path d="M626.34666667 360.22044445c0-71.56622222-58.14044445-129.70666667-129.70666667-129.70666667s-129.70666667 58.14044445-129.70666667 129.70666667 58.14044445 129.70666667 129.70666667 129.70666666 129.70666667-58.14044445 129.70666667-129.70666666z m-228.92088889 0c0-54.72711111 44.48711111-99.21422222 99.21422222-99.21422223s99.21422222 44.48711111 99.21422222 99.21422223-44.48711111 99.21422222-99.21422222 99.21422222-99.21422222-44.48711111-99.21422222-99.21422222z" fill="#ffffff" /></svg>'
        const mysvg = new Image();
        mysvg.src = 'data:image/svg+xml,' + escape(svg);
        return mysvg;
    }
    return "";
}
/* 添加点位 */
function userAddPoint (location) {
    console.log('设置的点位：', location);
    mini.confirm("请选择要添加的设备", "信息",
        function (action) {
            if (action == "ok") {
                _OpenWindow({
                    targetWindow: window,
                    url: __rootPath + "/map/addPoint.do",        //页面地址
                    title: "信息",
                    width: 600,
                    height: 400,
                    allowResize: false, //允许尺寸调节
                    onload: function (){ // 弹出页面加载完成
                        let iframe = this.getIFrameEl();
                        let data = {
                            location
                        };
                        //调用弹出页面方法进行初始化
                        iframe.contentWindow.initData(data);
                    },
                    ondestroy: function (action) {
                        debugger
                        if (action.type == "ok") {       //如果点击“确定”
                            //获取选中、编辑的结果
                            // debugger
                            let data = action.data;
                            debugger
                            // data = mini.clone(data);    //必须。克隆数据。
                        }
                    }
                })
            }
        }
    );
}
/* 获取点位数据 */
function getDefaultData () {
    _SubmitJson({
        url: '/cnooc/equipment/getDeviceList.do',
        postJson:false,
        method:'GET',
        data: "",
        showMsg: false,
        success:function(res){
            let list = res.data;
            console.log('列表数据：', list);
        }
    })
}
/* 加载完成后执行 */
$(function (){
    getDefaultData()
})