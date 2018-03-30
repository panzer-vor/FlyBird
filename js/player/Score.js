
import {DataStore} from "../base/DataStore.js";
const { screenWidth, screenHeight } = wx.getSystemInfoSync()
export class Score{ //记分器类
	constructor(){
		this.ctx = DataStore.getInstance().ctx;
		this.scoreNumber = 0;
		this.isOverPencli = true;
	}
	draw(){
		this.ctx.font = '25px Arial';
		this.ctx.fillStyle = '#ff60d7';
		this.ctx.fillText(
			this.scoreNumber,
      screenWidth/2,
      screenHeight/18,
			1000,
		)
	}
}