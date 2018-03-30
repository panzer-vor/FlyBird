
import { DataStore } from "../base/DataStore.js";
const { screenWidth, screenHeight } = wx.getSystemInfoSync()
export class Creater { //作者
  constructor() {
    this.ctx = DataStore.getInstance().ctx;
    this.createName = 'maker by 力士';
    this.isOverPencli = true;
  }
  draw() {
    this.ctx.font = '40px Arial';
    this.ctx.fillStyle = '#000';
    this.ctx.fillText(
      this.createName,
      10,
      screenHeight - 50,
      1000,
    )
  }
}