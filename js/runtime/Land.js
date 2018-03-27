import {Sprite} from "../base/Sprite.js";

export class Land extends Sprite{ //陆地
	constructor(){
		const image = Sprite.getImage('land');
		super(
			image,
			0,
			0,
			image.width,
			image.height,
			0,
			window.innerHeight - image.height,
			window.innerWidth + image.width,
			image.height
		);
		this.landX = 0; //水平变化坐标
		this.landSpeed = 2; //移动速度
	}
	draw(){
		console.log(this.landX)
		if(this.landX>this.img.width){
			this.landX = 0;
		}
		this.landX = this.landX + this.landSpeed;
		super.draw(
			this.img,
			this.srcX,
			this.srcY,
			this.srcW,
			this.srcH,
			-this.landX,
			this.y,
			this.width,
			this.height
		)
	}
}