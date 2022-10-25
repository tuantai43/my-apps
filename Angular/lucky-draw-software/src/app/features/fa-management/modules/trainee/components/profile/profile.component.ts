import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-trainee-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  emplId!: string;
  selectedTabIndex!: number;
  currentTab = 'information';
  tabTrainee = [
    { tab: 'information' },
    { tab: 'result'}
  ];

  private destroy$ = new Subject();

  constructor(
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  this.emplId = this.activatedRoute.snapshot.params['id'];
    this.activatedRoute.queryParams.pipe(takeUntil(this.destroy$)).subscribe((params: Params) =>{
      this.currentTab = params['tab'];
      const index = this.tabTrainee.findIndex((t) => params['tab'] && t.tab === params['tab']);
      this.selectedTabIndex = index >= 0 ? index : 0;
      this.currentTab = this.tabTrainee[this.selectedTabIndex].tab;
    });
  }

  onTabChanged(e: MatTabChangeEvent) {
    this.route.navigate([`/fa-management/trainee-management/profile/${this.emplId}`], {
      queryParams: { tab: this.tabTrainee[e.index].tab}
    })
  }

}
