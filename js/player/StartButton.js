import {Sprite} from "../base/Sprite.js";
const { screenWidth, screenHeight } = wx.getSystemInfoSync()
export class StartButton extends Sprite{ //开始按钮
	constructor(){
		const image = Sprite.getImage('startButton');
		super(
			image,
			0,
			0,
			image.width,
			image.height,
      (screenWidth - image.width) / 2,
      (screenHeight - image.height) / 2.5,
			image.width,
			image.height,
		)
	}
}