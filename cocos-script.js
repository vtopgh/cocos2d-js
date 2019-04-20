window.onload = function(){
    cc.game.onStart = function(){
        //load resources
        cc.LoaderScene.preload(["HelloWorld.png"], function () {
            var MyScene = cc.Scene.extend({
                onEnter:function () {
                    this._super();
                    var size = cc.director.getWinSize();

                    var background = cc.Sprite.create("squaretimes.png");
                    background.setPosition(size.width / 2, size.height / 2);
                    this.addChild(background, 0);

                    //var action2 = cc.skewBy(0, -1, -35);
                    //var action = cc.setSkewX(-45);

                    //var action = cc.skewTo(0, 0, -45);
                    //var action = cc.skewTo(0, 0, -45);

                    var videoNode = new cc.DrawNode();
                    var video = videoNode.playVideo('GOT.mp4', cc.p(100, 300), cc.size(640, 352));
                    videoNode.setScale(0.4);
                    videoNode.setPosition(400,  327);
                    //videoNode.runAction(action);
                    background.addChild(videoNode, 0);
                    setTimeout(function () {
                        video.play();
                    }, 3000);

                    /*
                    var videoNode2 = new cc.DrawNode();
                    var video2 = videoNode2.playVideo('GOT.mp4', cc.p(100, 300), cc.size(375, 380));
                    videoNode2.setScale(0.4);

                    videoNode2.setPosition(330,  700);
                    videoNode2.runAction(action2);
                    background.addChild(videoNode2, 0);
                    setTimeout(function () {
                        video2.play();
                    }, 3000);
                    */



                    /*
                    var sprite = cc.Sprite.create("image.png");
                    sprite.setPosition(975, 285);
                    sprite.setAnchorPoint(0, 0);
                    sprite.setScale(0.8);
                    background.addChild(sprite, 0);

                    var sprite2 = cc.Sprite.create("person.png");
                    sprite2.setPosition(400, 300);
                    sprite2.setAnchorPoint(0, 0);
                    sprite2.setScale(0.8);
                    background.addChild(sprite2, 0);
                    */


                    /*
                    sprite.runAction(action);
                    var repeat = cc.Repeat.create(cc.Sequence.create(action, action), 10);
                    setTimeout(function () {
                        videoNode.runAction(repeat);
                        video.play();
                    }, 5000);
                    videoNode.runAction(repeat);
                    */
                }
            });
            cc.director.runScene(new MyScene());
        }, this);
    };
    cc.game.run("gameCanvas");
};

