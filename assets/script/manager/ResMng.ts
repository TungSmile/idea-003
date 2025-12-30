import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ResMng')
export default  class ResMng {
    private static _ins: ResMng = null;
    public static get ins() {
        if (!this._ins) {
            this._ins = new ResMng();
        }

        return this._ins;
    }
}

