/**
 * Created by wh1709040 on 2018/9/17.
 * 翻页实体
 */
export class PageBean {
  constructor(pageSize, pageIndex, Total) {
    this._pageSize = pageSize || 20;
    this._pageIndex = pageIndex || 1;
    this._Total = Total || 0;
  }

  _pageSize;

  get pageSize() {
    return this._pageSize;
  }

  set pageSize(value) {
    this._pageSize = value;
  }

  _pageIndex;

  get pageIndex() {
    return this._pageIndex;
  }

  set pageIndex(value) {
    if (value > this.lastIndex) {
      this._pageIndex = this.lastIndex || 1;
    } else if (value < 1) {
      this._pageIndex = 1;
    } else {
      this._pageIndex = value;
    }
  }

  _Total;

  get Total() {
    return this._Total;
  }

  set Total(value) {
    this._Total = value;
    if (this._pageIndex > this.lastIndex) {
      this.pageIndex = this.lastIndex;
    }
  }

  get lastIndex() {
    return Math.ceil(this._Total / this._pageSize);
  }
}
