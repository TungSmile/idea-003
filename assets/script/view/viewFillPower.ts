import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('viewFillPower')
export class viewFillPower extends Component {

    @property({ type: Node })
    card: Node = null;


    @property({ type: Node })
    fill: Node = null;



    start() {

    }



    setCard() {
        let t = this;

    }

    pickHandleBtn() {

    }


    eventFillPower() {
        let t = this;
    }





    update(deltaTime: number) {

    }
}

