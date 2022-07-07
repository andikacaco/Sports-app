import { ServicesService } from 'src/app/service/services.service';
import { SPORTS } from './../../../assets/sports';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.page.html',
  styleUrls: ['./sports.page.scss'],
})
export class SportsPage implements OnInit {
  sports = [];
  constructor(private sportService: ServicesService) {}

  ngOnInit() {
    this.sportService.getSports().subscribe((data) => {
      this.sports = data.sports;
      console.log(this.sports);
    });
  }
}
