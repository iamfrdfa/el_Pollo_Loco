class statusBarCoin extends DrawableObject {
    COIN_STATUSBAR = [
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/20.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/100.png'
    ];
    
    percentage = 0;
    
    constructor() {
        super();
        this.loadImages(this.COIN_STATUSBAR);
        this.x = 20;
        this.y = 85;
        this.width = 200;
        this.height = 40;
        this.setPercentageCoin(0);
    }
    
    setPercentageCoin(percentage) {
        this.percentage = percentage;
        let path = this.COIN_STATUSBAR[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }
    
    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 20) {
            return 1;
        } else {
            return 0;
        }
        console.log('TEST:',this.percentage);
    }
}