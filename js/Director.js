import {DataStore} from "./base/DataStore.js";

export class Director{ //导演类，控制游戏逻辑
	static getInstance(){
		if(!Director.instance){
			Director.instance = new Director();
		}
		return Director.instance;
	}
	constructor(){
		this.dataStore = DataStore.getInstance();
	}

	run(){
		this.dataStore.get('background').draw();
		this.dataStore.get('land').draw();
		let timer = requestAnimationFrame(()=>{
			this.run()
		});
		this.dataStore.put('timer',timer);
		cancelAnimationFrame(this.dataStore.get('timer'))
	}
}