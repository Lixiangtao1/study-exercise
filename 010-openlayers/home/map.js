let layerObj = {};
let sourceObj = {};
let mapDom = null;
let clickDraw = null;
let Draw = ol.interaction.Draw;
let drawCreateBox = ol.interaction.Draw.createBox;
let ModifyFeature = ol.interaction.Modify;
let VectorSource = ol.source.Vector;
let Cluster = ol.source.Cluster;
let VectorLayer = ol.layer.Vector;
let Feature = ol.Feature;
let Point = ol.geom.Point;
let Polygon = ol.geom.Polygon;
let transform = ol.proj.transform;
let Style = ol.style.Style;
let Icon = ol.style.Icon;
let Fill = ol.style.Fill;
let Stroke = ol.style.Stroke;
let Overlay = ol.Overlay;
let get = ol.proj.get;
let initialPointLocation = []; // 记录初始点经纬度
let LOCATION_KEY = "MAP_LOCATION"; // 缓存的key
let locationCenter = get_cache(LOCATION_KEY); // 获取缓存
/* 地图配置信息 */
let mapBase = {
    projection: get('EPSG:4326'),
    center: (locationCenter ? locationCenter : [118.79474016666667, 32.042204166666664]),
    zoom: 14,
    minZoom: 4,
    maxZoom: 18
}
let initialPointOverlay = null; // 设置初始地点的overlay弹窗变量
let isShowInitialPoint = false; // 是否显示初始地点弹窗
let isUserAddPoint = false; // 是否设置点位
/* 加载完成后执行 */
$(function(){
    let resolutions =[1.40625, 0.703125, 0.3515625, 0.17578125, 0.087890625, 0.0439453125, 0.02197265625, 0.010986328125, 0.0054931640625, 0.00274658203125, 0.001373291015625, 0.0006866455078125, 0.00034332275390625, 0.000171661376953125, 0.0000858306884765625, 0.00004291534423828125, 0.000021457672119140625, 0.000010728836059570312, 0.000005364418029785156, 0.000002682209014892578, 0.000001341104507446289];
    let matrixIds = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    let Map = ol.Map;
    let TileLayer = ol.layer.Tile;
    let View = ol.View;
    let WMTSSource = ol.source.WMTS;
    let WMTS = ol.tilegrid.WMTS;
    let defaultControls = ol.control.defaults;
    let ScaleLine = ol.control.ScaleLine; // 比例尺控件
    let ZoomSlider = ol.control.ZoomSlider; // 缩放刻度控件

    let fromLonLat = ol.proj.fromLonLat;
    let OverviewMap = ol.control.OverviewMap;


    /* 地图展示图层 */
    let layers = [];
    let projectionExtent = mapBase.projection.getExtent();
    /* 地图底层 */
    try {
        layerObj['baseLayer'] = new TileLayer({
            source: new WMTSSource({
                name: "basemap",
                url: 'http://t0.tianditu.gov.cn/vec_c/wmts?tk=66f44cac9369e1332bdd08895a4c9469',
                layer: "vec",
                style: "default",
                matrixSet: "c",
                format: "tiles",
                wrapX: true,
                tileGrid: new WMTS({
                    extent: projectionExtent,
                    resolutions: resolutions.slice(0, 21),
                    matrixIds: matrixIds.slice(0, 21)
                })
            }),
            zIndex: 0,
            maxResolution: resolutions[0],
            minResolution: resolutions[20]
        })
        layers.push(layerObj['baseLayer'])
    } catch (error) {}

    /* 天地图-图层标记 */
    try {
        layerObj['baseCvaLayer'] = new TileLayer({
            source: new WMTSSource({
                name: "basecvamap",
                url: "http://t0.tianditu.gov.cn/cva_c/wmts?tk=66f44cac9369e1332bdd08895a4c9469", // 在线地图
                layer: "cva",
                style: "default",
                matrixSet: "c",
                format: "tiles",
                wrapX: true,
                tileGrid: new WMTS({
                    extent: projectionExtent,
                    resolutions: resolutions.slice(0, 21),
                    matrixIds: matrixIds.slice(0, 21)
                })
            }),
            zIndex: 1,
            maxResolution: resolutions[0],
            minResolution: resolutions[20]
        })
        layers.push(layerObj['baseCvaLayer'])
    } catch (e) {}

    /* 创建地图 */
    mapDom = new Map({
        loadTilesWhileAnimating: true,
        controls: defaultControls({
            attribution: false,
            rotate: false,
            zoom: false
        }).extend([
            new ScaleLine({units: "metric"}),
            new ZoomSlider()
        ]),
        target: "user-map",
        layers: layers,
        view: new View(mapBase)
    })
    console.log('地图初始化完成：', mapDom);
    /* 调用初始overlay */
    initOverlay();
    /* 鼠标左键 */
    mapDom.on('singleclick', (e)=> {
        let x = e.coordinate[0];
        let y = e.coordinate[1];
        let coodinate = [x, y];
        console.log('鼠标左键点击：', coodinate);
        /* 如果显示右键设置初始地点弹窗 */
        if (isShowInitialPoint) {
            isShowInitialPoint = false;
            try {
                initialPointOverlay.setPosition(undefined);
            } catch (e) {}
        }
        /* 如果点击了工具栏中的创建点位 */
        if (isUserAddPoint) {
            userAddPoint(coodinate);
        }
    })
    /* 鼠标右键 */
    mapDom.on('contextmenu', (e)=> {
        e.preventDefault();
        let x = e.coordinate[0];
        let y = e.coordinate[1];
        let coodinate = [x, y];
        initialPointLocation = coodinate;
        console.log('鼠标右键点击：', e, coodinate);
        try {
            initialPointOverlay.setPosition(coodinate)
            //显示overlay
            mapDom.addOverlay(initialPointOverlay)
        } catch (e) {}
        isShowInitialPoint = true;
    })
});
/* 初始化overlay弹窗 */
function initOverlay () {
    let setInitialPoint = document.getElementById("setInitialPoint");
    initialPointOverlay = new Overlay({
        element: setInitialPoint, //设置弹出框的容器
        offset: [0, 0]
    })
    console.log('初始：', initialPointOverlay);
}
/* 地图放大 */
function mapZoomIn () {
    let zoom = mapDom.getView().getZoom();
    let max = mapBase.maxZoom;
    if (zoom < max) {
        zoom+=1;
        if (zoom > max) zoom = max;
    }
    mapDom.getView().setZoom(zoom);
    try {
        initialPointOverlay.setPosition(undefined);
        isShowInitialPoint = false;
    } catch (e) {}
}
/* 地图缩小 */
function mapZoomOut () {
    let zoom = mapDom.getView().getZoom();
    let min = mapBase.minZoom;
    if (zoom > min) {
        zoom-=1;
        if (zoom < min) zoom = min;
    }
    mapDom.getView().setZoom(zoom);
    try {
        initialPointOverlay.setPosition(undefined);
        isShowInitialPoint = false;
    } catch (e) {}
}
/* 设置初始地点 */
function initialPoint () {
    console.log('设置初始地点-------')
    // 赋值地图中心点
    mapBase.center = initialPointLocation;
    // 点位存储至缓存
    set_cache(LOCATION_KEY, initialPointLocation);
    try {
        initialPointOverlay.setPosition(undefined);
        isShowInitialPoint = false;
    } catch (e) {}
}
