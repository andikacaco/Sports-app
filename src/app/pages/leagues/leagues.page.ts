import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Routes } from '@angular/router';
import { ServicesService } from 'src/app/service/services.service';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.page.html',
  styleUrls: ['./leagues.page.scss'],
})
export class LeaguesPage implements OnInit {
  getLeagues = null;
  getCountry = null;
  strSport = this.router.snapshot.paramMap.get('strSport');
  constructor(
    private router: ActivatedRoute,
    private sportService: ServicesService
  ) {}

  ngOnInit() {
    const strSport = this.router.snapshot.paramMap.get('strSport');
    this.sportService.getLeagues(strSport).subscribe((data) => {
      this.getLeagues = data['leagues'].filter(
        (x: { strSport: string }) => x.strSport === strSport
      );
      var x = this.getLeagues;
      this.getLeagues = x;
      console.log(this.getLeagues);
    });
  }
}
