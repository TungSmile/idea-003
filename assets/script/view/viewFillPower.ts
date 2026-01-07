import { _decorator, Component, EventTouch, log, Node, Sprite, tween, UITransform, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('viewFillPower')
export class viewFillPower extends Component {

    @property({ type: Node })
    card: Node = null;

    @property({ type: Node })
    fill: Node = null;



    // for event fill
    readyFill: boolean = true;
    numFill: number = 0;
    hasPower: number = 450;


    // info card
    powerCard: number = 0;


    start() {
        let t = this;
        t.setEventFill();
    }

    setEventFill() {
        let t = this;
        // t.fill.getChildByName("btnFill").on(Node.EventType.TOUCH_START, t.startFillByDrag, t);
        // t.fill.getChildByName("btnFill").on(Node.EventType.TOUCH_MOVE, t.fillingByDrag, t);
        // t.fill.getChildByName("btnFill").on(Node.EventType.TOUCH_END, t.endFillByDrag, t);
        // t.fill.getChildByName("btnFill").on(Node.EventType.TOUCH_CANCEL, t.endFillByDrag, t);
        // t.fill.on(Node.EventType.TOUCH_START, t.startFillByClick, t);
        t.fill.getChildByName("btnFillByClick").children.forEach((child) => {
            child.on(Node.EventType.TOUCH_START, t.startFillByClick, t);
        });

    }


    startFillByDrag(event: EventTouch) {
        let t = this;
        t.readyFill = true;
        // let mousePosition = new Vec3(event.getUILocation().x, event.getUILocation().y, 0);
        // let localPosition = new Vec3();
        // let btn = t.fill.getChildByName("btnFill");
        // btn.getComponent(UITransform).convertToNodeSpaceAR(mousePosition, localPosition);
        // btn.position = new Vec3(localPosition.x, -70, 0);
        log("start fill");
    }

    fillingByDrag(event: EventTouch) {
        let t = this;
        if (!t.readyFill) return;
        let mousePosition = new Vec3(event.getUILocation().x, event.getUILocation().y, 0);
        let localPosition = new Vec3();
        let btn = t.fill.getChildByName("btnFill");
        t.fill.getComponent(UITransform).convertToNodeSpaceAR(mousePosition, localPosition);



        let newPosX = localPosition.x;
        if (newPosX < -450) newPosX = -450;

        // get power to refence
        if (newPosX > t.hasPower) newPosX = t.hasPower * 1;


        // change -70 to enum
        btn.position = new Vec3(newPosX, -70, 0);
        // log("filling" + localPosition.x);

    }

    endFillByDrag(event: EventTouch) {
        let t = this;
        t.readyFill = false;
        // log("end fill");

    }





    startFillByClick(event: EventTouch) {
        let t = this;
        if (!t.readyFill) return;
        t.readyFill = false
        let num = Number(event.target.name);
        t.eventFillPower(num);
    }










    showPower(numFill: number) {
        let t = this;

    }





    setCard() {
        let t = this;

    }




    eventFillPower(numFill: number) {
        let t = this;
        let bar = t.fill.getChildByName("showBar");
        tween(bar.getComponent(Sprite))
            .to(0.5, { fillRange: numFill * 0.1 }, { easing: "sineOut" })
            .call(() => {
                t.readyFill = true
            })
            .start();
    }





    update(deltaTime: number) {

    }
}

