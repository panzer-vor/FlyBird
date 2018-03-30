import {DataStore} from "./base/DataStore.js";
import {UpPencli} from "./runtime/UpPencli.js";
import {DownPencli} from "./runtime/DownPencli.js";

export class Director{ //导演类，控制游戏逻辑
	static getInstance(){
		if(!Director.instance){
			Director.instance = new Director();
		}
		return Director.instance;
	}
	constructor(){
		this.dataStore = DataStore.getInstance();
		this.moveSpeed = 3;
	}
	createPencli(){
		const minTop = window.innerHeight / 8;
		const maxTop = window.innerHeight / 2;
		const top = minTop + Math.random() * (maxTop - minTop);
		this.dataStore.get('penclis').push(new UpPencli(top));
		this.dataStore.get('penclis').push(new DownPencli(top));
	}
	birdsEvent(){
		// if(this.dataStore.get('birds')){
			for(let i=0;i<=2;i++){
				this.dataStore.get('birds').y[i] =
					this.dataStore.get('birds').birdsY[i];
			}
			this.dataStore.get('birds').time = 0;
		// }
	}
	static isStrike(bird,pencli){ //小鸟是否和铅笔撞击
		let s = false;
		if(bird.top>pencli.bottom||
			bird.bottom<pencli.top||
				bird.right<pencli.left||
				bird.left>pencli.right
		){
			s = true;
		}
		return !s;
	}
	check(){    //判断小鸟是否撞击地板和铅笔
		const birds = this.dataStore.get('birds');
		const land = this.dataStore.get('land');
		const penclis = this.dataStore.get('penclis');
		const score = this.dataStore.get('score');
		//地板撞击判断

		if(birds.birdsY[0]+birds.birdsHeight[0]>=land.y){
			this.isGameOver = true;
			return;
		}
		const birdsBorder = {   //小鸟的边框模型
			top:birds.y[0],
			bottom:birds.birdsY[0] + birds.birdsHeight[0],
			left:birds.birdsX[0],
			right:birds.birdsX[0] + birds.birdsWidth[0],
		};
		const length = penclis.length;
		for(let i=0;i<length;i++){
			const pencli = penclis[i];
			const pencliBorder = {
				top:pencli.y,
				bottom:pencli.y + pencli.height,
				left:pencli.x,
				right:pencli.x + pencli.width,
			};
			if(Director.isStrike(birdsBorder,pencliBorder)){
				this.isGameOver = true;
				return;
			}
		}
		//加分逻辑
		if(birds.birdsX[0]>penclis[0].x+penclis[0].width && score.isOverPencli){
      wx.vibrateShort({
        success(){
          
        }
      })
      score.isOverPencli = false;
			score.scoreNumber++;
		}
	}
	run(){
		this.check();
		if(!this.isGameOver){
			this.dataStore.get('background').draw();
			const penclis = this.dataStore.get('penclis');
			if(penclis[0].x + penclis[0].width <= 0 &&
				penclis.length === 4
			){
				penclis.shift();
				penclis.shift();
				this.dataStore.get('score').isOverPencli = true;
			}

			if(penclis[0].x <= (window.innerWidth - penclis[0].width) / 2 &&
				penclis.length === 2
			){
				this.createPencli();
			}
			this.dataStore.get('penclis').forEach(value=>{
				value.draw();
			});
			this.dataStore.get('land').draw();
			this.dataStore.get('score').draw();
			this.dataStore.get('birds').draw();
			let timer = requestAnimationFrame(()=>{
				this.run()
			});
			this.dataStore.put('timer',timer);

		}else {
			this.dataStore.get('startButton').draw();
			cancelAnimationFrame(this.dataStore.get('timer'));
			this.dataStore.destory();
      wx.triggerGC();
		}
	}
}