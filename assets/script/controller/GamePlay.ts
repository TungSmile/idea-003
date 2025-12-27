import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GamePlay')
export class GamePlay extends Component {



    start() {

    }


    // idea simulation heart stone + mini game (i foget name)

    // play

    // every player get 100 hp/game
    // 
    // 1 desk incluse 10 card
    // frisr turn darw 4 card
    // 1 turn darw 1 card

    // 1 phase player claim 20 crytal

    // turn base 
    //  1 turn has 2 phase (atk / def) 

    // market (work by coin )


    // map  5*5
    // 0 0 0 0 0 
    // 0 0 0 0 0 
    // 0 0 0 0 0 
    // 0 0 0 0 0 
    // 0 0 0 0 0 
    // map include :
    // - grave: contain card has been user every turn;
    // - market : player can buy effective or card  (reject) 
    // - field :where monter card can deploy


    // type 1 : metal, wood , water , fire , earth ;
    // type 2 : wind , electric , dard ,light ;
    // type 3 : god ,evil

    //



    getDataPlayer() {
        let t = this;

    }


    getDataEnemy() {
        let t = this;
    }

    setUpDesk() {
        let t = this;
    }


    setUpBroad() {
        let t = this;
    }

    setTypeGame() {
        let t = this;
    }



    update(deltaTime: number) {

    }
}

