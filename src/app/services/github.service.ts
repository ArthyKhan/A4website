import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable ()

export class GithubService {
  private username: string;
  private client_id = 'd9308aacf8b204d361fd';
  private client_secret = '62551cc02cee983fff0bac41baf170eb5a312clc';

  constructor (private _http: Http) {
    this.username = 'bradtraversy';
  }
  getUser() {
    return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
      .map(res => res.json());
  }
}


