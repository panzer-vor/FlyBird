import {Sprite} from "../base/Sprite.js";

export class Pencli extends Sprite{
	constructor(image,top){
		super(
			image,
			0,
			0,
			image.width,
			image.height,
			window.innerWidth,
			0,
			image.width,
			image.height,
		);
		this.top = top;
    this.moveSpeed = 3;
	}
	draw(){

		this.x = this.x - this.moveSpeed;
		super.draw(
			this.img,
			0,
			0,
			this.width,
			this.height,
			this.x,
			this.y,
			this.width,
			this.height,
		)
	}
}