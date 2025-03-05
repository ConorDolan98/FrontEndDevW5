import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';//import Httpclient
import { Observable } from 'rxjs'; //rxjs librarym observable allows to invoke method asynchronously

@Injectable({
  providedIn: 'root'
})

//create an instance of httpcleint with angular dependancy injection
//done by creating an argument in the constructor
export class DataService {

  constructor(private httpClient:HttpClient) { }

  //Observable must be called along with the method
  getWeatherData():Observable<any>{
    return this.httpClient.get('https://api.openweathermap.org/data/2.5/weather?q=Galway&appid=6a66416403ed8e5e6e762cb8c261f303');//generates the http request
  }

}
