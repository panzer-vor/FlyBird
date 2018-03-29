
import {DataStore} from "../base/DataStore.js";

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
			window.innerWidth/2,
			window.innerHeight/18,
			1000,
		)
	}
}