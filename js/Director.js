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
		this.moveSpeed = 2;
	}
	createPencli(){
		const minTop = window.innerHeight / 8;
		const maxTop = window.innerHeight / 2;
		const top = minTop + Math.random() * (maxTop - minTop);
		this.dataStore.get('penclis').push(new UpPencli(top));
		this.dataStore.get('penclis').push(new DownPencli(top));
	}
	run(){
		if(!this.isGameOver){
			this.dataStore.get('background').draw();

			const penclis = this. dataStore.get('penclis');
			if(penclis[0].x + penclis[0].width <= 0 &&
				penclis.length === 4
			){
				penclis.shift();
				penclis.shift();
			}

			if(penclis[0].x <= (window.innerWidth + penclis[0].width) / 2 &&
				penclis.length === 2
			){
				this.createPencli();
			}

			this.dataStore.get('penclis').forEach(value=>{
				value.draw();
			});

			this.dataStore.get('land').draw();
			this.dataStore.get('birds').draw();

			let timer = requestAnimationFrame(()=>{
				this.run()
			});
			this.dataStore.put('timer',timer);

		}else {
			cancelAnimationFrame(this.dataStore.get('timer'));
			this.dataStore.destory();
		}


	}
}