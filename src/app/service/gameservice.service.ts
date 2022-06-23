import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Hand } from '../model/Hand';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Response } from '../model/Response';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) { }

  getGameResponse(playerHand: Hand): Observable<Response> {
    let params = new HttpParams().set("playerHand",playerHand);
    return this.http.get<Response>(environment.API_URL, {params: params});
  }
}
