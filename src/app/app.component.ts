import { Component } from '@angular/core';
import { GameResult } from './model/GameResult';
import { Hand } from './model/Hand';
import { GameService } from './service/gameservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userScore = 0;
  compScore = 0;
  userSelected!: Hand | null;
  compSelected!: Hand | null;
  action!: string;
  status!: string;
  gameResult!: GameResult;

  constructor(private service: GameService) {}

  userPick(userWeapon: string): void {
    this.userSelected = Hand[userWeapon as keyof typeof Hand];
    this.service.getGameResponse(this.userSelected)
    .subscribe(
        response => {
          this.compSelected = response.computerHand;
          this.gameResult = response.gameResult;
        }
    )
    setTimeout( () => {
      this.checkResult();
    }, 1000);
  }

  clearField() {
    setTimeout(() => {
      this.status = '';
      this.userSelected = null;
      this.compSelected = null;
    }, 1500);
  }

  win() {
    this.userScore ++;
    this.action = 'beats';
    this.status = '. You win!';
    this.clearField();
  }


  lose() {
    this.compScore ++;
    this.action = 'loses to';
    this.status = '. You lose!';
    this.clearField();
  }

  draw() {
    this.action = 'and';
    this.status = '. You draw!';
    this.clearField();
  }

  checkResult() {
    switch (this.gameResult) {
      case GameResult.WIN:
        this.win();
        break;
      case GameResult.LOSS:
        this.lose();
        break;
      default:
        this.draw();
        break;       
    }
  }
}
