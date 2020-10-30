/* 读取缓存 */
function get_cache(key){
    let value = localStorage.getItem(key);
    if (value) return (JSON.parse(value));
    return value;
}
/* 设置缓存 */
function set_cache(key,value){
    if(key=='') return false;
    value = JSON.stringify(value);
    localStorage.setItem(key, value);
}
/* 删除缓存 */
function remove_cache(key){
    localStorage.removeItem(key);
}