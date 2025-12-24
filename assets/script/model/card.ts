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
    

    Icon = -1;
    Frame = -1;
    coloerBG = -1;
    textEff = "???";

    start() {

    }

    createCard(data) {
        let t = this;


    }




    getIconCard(icon: SpriteFrame) {
        let t = this;

    }




    update(deltaTime: number) {

    }
}

