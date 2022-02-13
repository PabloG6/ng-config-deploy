import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private _config: any;
  initConfig() {
    return this._httpClient.get('/assets/config/config.json').pipe(tap((config: any) => this._config = config))
  }

  constructor(private _httpClient: HttpClient) { }

  get config() {
    return this._config;
  }
}


