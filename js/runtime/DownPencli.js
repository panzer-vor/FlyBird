import {Pencli} from "./Pencli.js";
import {Sprite} from "../base/Sprite.js";

export class DownPencli extends Pencli { //下半部分铅笔
	constructor(top){
		const image = Sprite.getImage('pencliDown')
		super(image, top);
	}
	draw(){
		let gap = window.innerHeight / 5;
		this.y = this.top + gap;
		super.draw();
	}
}
