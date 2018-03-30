import {ResourceLoader} from "./js/base/ResourceLoader.js";
import {Director} from "./js/Director.js";
import {BackGround} from "./js/runtime/BackGround.js";
import {Land} from "./js/runtime/Land.js";
import {DataStore} from "./js/base/DataStore.js";
import {Bird} from "./js/player/Bird.js";
import {StartButton} from "./js/player/StartButton.js";
import {Score} from "./js/player/Score.js";
import {Creater} from "./js/player/Creater.js";
export class Main{ //初始化整个游戏的精灵，作为游戏开始的入口
	constructor(){
		this.canvas = wx.createCanvas();
		this.ctx = this.canvas.getContext('2d');
		this.dataStore = DataStore.getInstance();
		this.director = Director.getInstance();
		const loader = ResourceLoader.create();
		loader.onLoaded(map => this.onResourceFirstLoader(map));
	}

  createBackgroundMusic(){ //bgm
    // const bgm = wx.createInnerAudioContext();
    // bgm.autoplay = true;
    // bgm.loop = true;
    // bgm.src = 'audios/Eri0ne.mp3';
  }
	onResourceFirstLoader(map){
		this.dataStore.ctx = this.ctx;
		this.dataStore.res = map;
    this.createBackgroundMusic();
		this.init();
	}
	init(){
		this.director.isGameOver = false;
		this.dataStore
			.put('penclis',[])
			.put('background',BackGround)
			.put('land',Land)
			.put('birds',Bird)
			.put('startButton',StartButton)
			.put('score',Score)
      .put('creater',Creater);
		this.registerEvent();
		this.director.createPencli();
		this.director.run();
	}

	registerEvent(){
    wx.onTouchStart(e => {
			if(this.director.isGameOver){
				this.init();
			}else{
				this.director.birdsEvent();
			}
		})
	}
}