/**
 * @description [封装常用方法] 
 * @author Hilary
 * @date 2019/11/12
 */

/**
 * 存储 localStorage 数据
 * @param name 属性名
 * @param content 存储内容
 */ 
export function setStore(name: string, content: any): void {
    if(!name) return
    if(typeof content !== 'string') {
        content = JSON.stringify(content)
    }
    window.localStorage.setItem(name, content)
}

/**
 * 获取 localStorage 数据
 * @param name 属性名
 */
export function getStore(name: string): any {
    if(!name) return
    let value = window.localStorage.getItem(name)
    if(value !== null) {
        try {
            value = JSON.parse(value)
        } catch (error) {
            value = value
        }
    }
    return value
}

/**
 * 删除 localStorage 数据
 * @param name 属性名
 */
export function removeStore(name: string): void {
    if(!name) return
    window.localStorage.removeItem(name)
}