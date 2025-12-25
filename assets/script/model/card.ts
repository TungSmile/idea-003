import { _decorator, Component, Label, Node, Sprite, SpriteFrame } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('card')
export class card extends Component {

    @property({ type: Label })
    nameCard: Label = null;

    @property({ type: Label })
    typeAndTag: Label = null;

    @property({ type: Label })
    describe: Label = null;

    @property({ type: Node })
    Level: Node = null;

    @property({ type: Node })
    image: Node = null;


    Icon = -1;
    Frame = -1;
    coloerBG = -1;
    textEff = "???";
    lever = -1;

    start() {

    }

    saveInfo(data) {
        let t = this;
        t.Icon = data.icon;
        t.Frame = data.icon;
        t.coloerBG = data.icon;
        t.lever = -1;
    }


    getIconCard(img: SpriteFrame) {
        let t = this;
        t.image.getComponent(Sprite).spriteFrame=img;
    }



    



    update(deltaTime: number) {

    }
}

