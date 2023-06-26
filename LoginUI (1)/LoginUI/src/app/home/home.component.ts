
import { Application } from '../Model/application';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AppService } from '../app.service';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit {
  
  allApplicationData:any;
  

  constructor(private http:AppService){
   
  }

  

  ngOnInit(): void {

      this.http.getApplications().subscribe(res=>{
        this.allApplicationData=res;
      })
   
  }


}

