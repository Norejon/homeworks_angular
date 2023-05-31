import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IAuth, ITokens} from "../interfacces";
import {BehaviorSubject, Observable, tap} from "rxjs";
import {urls} from "../constants/urls/urls";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly _accessTokenKey = 'access'
  private readonly _refreshTokenKey = 'refresh'
  private authUserSubject = new BehaviorSubject<IAuth|null>(null)
  constructor(private httpClient: HttpClient) {
  }
  getAuthUser():Observable<IAuth|null>{
    return this.authUserSubject.asObservable();
  }
  setAuthUser(user:IAuth|null):void{
    this.authUserSubject.next(user)
  }

  login(user:IAuth):Observable<ITokens>{
    return this.httpClient.post<ITokens>(urls.auth.login,user).pipe(
      tap((tokens)=>{
        this._settokens(tokens)
        this.me().subscribe(user =>this.setAuthUser(user))
      })
    )
  }

  refresh(refresh:string):Observable<ITokens>{
    return this.httpClient.post<ITokens>(urls.auth.refresh,{refresh}).pipe(
      tap((tokens)=>{
        this._settokens(tokens)
      })
    )
  }

  private _settokens({access, refresh}: ITokens): void {
    localStorage.setItem(this._accessTokenKey, access)
    localStorage.setItem(this._refreshTokenKey, refresh)
  }

  getAccessToken(): string {
    return localStorage.getItem(this._accessTokenKey) || '';
  }

  getRefreshToken(): string {
    return localStorage.getItem(this._refreshTokenKey) || '';
  }
  deleteTokens():void{
    localStorage.removeItem(this._accessTokenKey)
    localStorage.removeItem(this._refreshTokenKey)
  }
  //2
  me():Observable<IAuth>{
    return this.httpClient.get<IAuth>(urls.auth.me)
  }
}
