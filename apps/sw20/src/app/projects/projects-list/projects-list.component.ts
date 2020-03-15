import { Component, OnInit } from '@angular/core';
import { Project } from '@bb/core-data';

@Component({
  selector: 'bb-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {
  projects: Project[] = [{
    id: '1',
    title: 'title1',
    details: 'details1',
    importanceLevel: 100
  },
  {
    id: '2',
    title: 'title2',
    details: 'details2',
    importanceLevel: 200
  }]
  constructor() { }

  ngOnInit(): void {
  }

}
