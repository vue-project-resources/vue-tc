/**
 * Created by xiaoconghu on 2019/10/26.
 * 工具类
 */
export class CommonUntil {
  /**
   * 获取uuid
   * param {number} len
   * returns {string}
   */
  static getUUid(len = 36) {
    const uuid = [];
    const str = '0123456789abcdef';
    for (let i = 0; i < len; i++) {
      uuid[i] = str.substr(Math.floor(Math.random() * 0x10), 1);
    }
    if (len === 36) {
      uuid[14] = '4';
      uuid[19] = str.substr((uuid[19] & 0x3 | 0x8), 1);
      uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
    }
    return uuid.join('').replace(/-/g, '');
  }

  /**
   * 时间格式化
   * param fmt
   * param date
   * returns {any}
   */
  static dateFmt(fmt, date) {
    const o = {
      'M+': date.getMonth() + 1,                 // 月份
      'd+': date.getDate(),                    // 日
      'h+': date.getHours(),                   // 小时
      'm+': date.getMinutes(),                 // 分
      's+': date.getSeconds(),                 // 秒
      'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
      'S': date.getMilliseconds()             // 毫秒
    };
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (const k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) {

        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
      }
    }
    return fmt;
  }
}
