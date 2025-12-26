import { _decorator, Component, Node, sys } from 'cc';

const STORAGE_KEY = 'TungMonkey'
export default class DataManager {
    private static _instance: any = null

    static getInstance<T>(): T {
        if (this._instance === null) {
            this._instance = new this()
        }
        return this._instance
    }

    static get instance() {
        return this.getInstance<DataManager>()
    }


    save() {
        sys.localStorage.setItem(STORAGE_KEY, JSON.stringify({}))
    }

    restore() {
        const _data = sys.localStorage.getItem(STORAGE_KEY) as any
        try {
            const data = JSON.parse(_data);
        } catch { }
    }
}