var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    stamps:[],
    stampTimer:0,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();
        this.stampTimer = 0;

        //var video = new ccui.VideoPlayer("res/IMG_2201.MOV");
        this.video = new ccui.VideoPlayer("http://localhost/playlist.m3u8");
        this.video.setContentSize(480, 320);
        this.video.setPosition(cc.winSize.width/2, cc.winSize.height/2);
        this.video.setScale(1);
        this.addChild(this.video);
        this.video.play();

        this.stampSprite = cc.Sprite.create(res.Stamp_001_png);
        this.addChild(this.stampSprite);
        this.stampSprite.setPosition(150,100);
        this.stampSprite.setScale(0.3);

        this.scheduleUpdate();

        return true;
    },


    update : function (dt)
    {
        this.stampTimer++;
        if(this.stampTimer>=60*1){
            this.stampTimer = 0;
            this.stampSprite = cc.Sprite.create(res.Stamp_001_png);
            this.stamps.push(this.stampSprite);
            this.addChild(this.stampSprite);
            this.stampSprite.setPosition(getRandNumberFromRange(0,600),getRandNumberFromRange(0,400));
            this.stampSprite.setScale(0.3);
        }
    }
});

var getRandNumberFromRange = function (min, max) 
{
    var rand = min + Math.floor( Math.random() * (max - min));
    return rand;
};

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

