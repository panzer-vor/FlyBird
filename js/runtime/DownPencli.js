import {Pencli} from "./Pencli.js";
import {Sprite} from "../base/Sprite.js";
const { screenWidth, screenHeight } = wx.getSystemInfoSync()
export class DownPencli extends Pencli { //下半部分铅笔
	constructor(top){
		const image = Sprite.getImage('pencliDown')
		super(image, top);
	}
	draw(){
    let gap = screenHeight / 8;
		this.y = this.top + gap;
		super.draw();
	}
}
