import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { GamePage } from '../game/game';
import { StorePage } from '../store/store';
import { FriendsPage } from '../friends/friends';
import { ProfilePage } from '../profile/profile';
import { InfoPage } from '../info/info';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  openGame() {
  	this.navCtrl.setRoot(GamePage);
  }
  openProfile() {
  	this.navCtrl.setRoot(ProfilePage);
  }
  openFriends() {
  	this.navCtrl.setRoot(FriendsPage);
  }
  openStore() {
  	this.navCtrl.setRoot(StorePage);
  }
  showInfo() {
  	this.navCtrl.push(InfoPage);
  }
}
