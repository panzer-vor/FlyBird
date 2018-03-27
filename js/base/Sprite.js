import {DataStore} from "./DataStore.js";

export class Sprite{ //精灵的基类，负责初始化精灵加载的资源和大小以及位置
	constructor(
		img = null, //绘制图片
		srcX = 0,   //剪裁X坐标
		srcY = 0,   //剪裁Y坐标
		srcW = 0,   //剪裁宽度
		srcH = 0,   //剪裁高度
		x = 0,      //图像摆放位置X
		y = 0,      //图像摆放位置Y
		width = 0,  //图像使用宽度
		height = 0, //高度
	){
		this.dataStore = DataStore.getInstance();
		this.ctx = this.dataStore.ctx;
		this.img = img;
		this.srcX = srcX;
		this.srcY = srcY;
		this.srcW = srcW;
		this.srcH = srcH;
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}
	draw(
		 img = this.img,
	     srcX = this.srcX,
	     srcY = this.srcY,
	     srcW = this.srcW,
	     srcH = this.srcH,
	     x = this.x,
	     y = this.y,
	     width = this.width,
	     height = this.height
	){
		this.ctx.drawImage(
			img,
			srcX,
			srcY,
			srcW,
			srcH,
			x,
			y,
			width,
			height,
		);
	}
	static getImage(key){
		return DataStore.getInstance().res.get(key);
	}
}