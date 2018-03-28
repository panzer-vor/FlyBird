import {Sprite} from "../base/Sprite.js";

export class Bird extends Sprite{ //小鸟类 循环渲染图片的三个部分
	constructor(){
		const image = Sprite.getImage('birds');
		super(
			image,
			0,
			0,
			image.width,
			image.height,
			0,
			0,
			image.width,
			image.height,
		);
		//小鸟的三种状态需要数组存储
		//宽34 高24 上下边距10 左右边距9
		this.clippingX = [
			9,
			9+34+18,
			9+34+18+34+18
		];
		this.clippingY = [
			10,10,10
		];
		this.clippingWidth = [
			34,34,34
		];
		this.clippingHeight = [
			24,24,24
		];
		this.birdX = window.innerWidth / 4;
		this.birdsX = [this.birdX,this.birdX,this.birdX];
		this.birdY = window.innerHeight / 2;
		this.birdsY = [this.birdY,this.birdY,this.birdY];
		this.birdWidth = 34;
		this.birdsWidth = [this.birdWidth,this.birdWidth,this.birdWidth];
		this.birdHeight = 24;
		this.birdsHeight = [this.birdHeight,this.birdHeight,this.birdHeight];
		this.y = [this.birdY,this.birdY,this.birdY];
		this.index = 0;
		this.count = 0;
		this.time = 0;
	}


}