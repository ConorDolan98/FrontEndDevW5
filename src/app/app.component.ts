import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './Services/data.service';
import { CommonModule } from '@angular/common';

//import CommonModule to allow use of angular directives i.e ngIf/ ngForf etc.
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  
  //local array to store data from api
  weather:any[] = [];
  temperature:any = "";

  constructor(private dataService:DataService){

  }

  //Asynchronous call of getWeatherData, Callback function in subscribe - handles api response
  ngOnInit():void{
    this.dataService.getWeatherData().subscribe(
      (data)=>{
        //console.log(data);handles result of call
          this.weather = data.weather;
          this.temperature = (data.main.temp - 273.15).toFixed(2);
      }
    );
  }

}

