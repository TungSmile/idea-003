import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('UICard')
export class UICard extends Component {

    @property({ type: Node })
    backGround: Node = null;
    @property({ type: Node })
    frame: Node = null;
    @property({ type: Node })
    avatar: Node = null;
    @property({ type: Node })
    nameCard: Node = null;
    @property({ type: Node })
    barTag: Node = null;

    data: any = null;


    start() {

    }


    setData(data: any) {
        this.data = data;
    }


    setBackground(active: boolean) {
        let t = this;
        
    }





    update(deltaTime: number) {

    }
}

