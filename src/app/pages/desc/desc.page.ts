import { ServicesService } from 'src/app/service/services.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desc',
  templateUrl: './desc.page.html',
  styleUrls: ['./desc.page.scss'],
})
export class DescPage implements OnInit {
  Team = null;
  constructor(
    private router: ActivatedRoute,
    private sportService: ServicesService
  ) {}

  ngOnInit() {
    const strTeam = this.router.snapshot.paramMap.get('strTeam');
    const strLeague = this.router.snapshot.paramMap.get('strLeague');
    console.log(strLeague);
    this.sportService.getDesc(strLeague).subscribe((data) => {
      this.Team = data['teams'].find((x) => x.strTeam === strTeam);
      console.log(this.Team);
    });
  }
}
