import {Sprite} from "../base/Sprite.js";
const { screenWidth, screenHeight, devicePixelRatio } = wx.getSystemInfoSync()
export class BackGround extends Sprite{ //背景
	constructor(){
		const image = Sprite.getImage('background');
		super(
			image,
			0,
			0,
			image.width,
			image.height,
			0,
			0,
      screenWidth,
      screenHeight
		);
	}
}