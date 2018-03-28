import {Pencli} from "./Pencli.js";
import {Sprite} from "../base/Sprite.js";

export class UpPencli extends Pencli{ //上半部分铅笔
	constructor(top){
		const image = Sprite.getImage('pencliUp');
		super(image,top);
	}
	draw(){
		this.y = this.top - this.height;
		super.draw();
	}
}