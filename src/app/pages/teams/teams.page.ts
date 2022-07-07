import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Routes } from '@angular/router';
import { ServicesService } from 'src/app/service/services.service';
@Component({
  selector: 'app-teams',
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss'],
})
export class TeamsPage implements OnInit {
  getTeams = null;
  League = null;
  constructor(
    private router: ActivatedRoute,
    private sportService: ServicesService
  ) {}

  ngOnInit() {
    const strLeague = this.router.snapshot.paramMap.get('strLeague');
    console.log(strLeague);
    this.sportService.getTeams(strLeague).subscribe((data) => {
      this.getTeams = data['teams'];
      console.log(this.getTeams);
    });
  }
}
