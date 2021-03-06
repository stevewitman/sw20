import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Project, ProjectsService } from '@bb/core-data';
import { ProjectsFacade } from '@bb/core-state';

import { Observable } from 'rxjs';

@Component({
  selector: 'bb-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects$: Observable<Project[]> = this.projectsFacade.allProjects$;
  project: Project;
  formGroup: FormGroup;

  constructor(
    private projectsService: ProjectsService,
    private formBuilder: FormBuilder,
    private projectsFacade: ProjectsFacade
  ) {
  }

  ngOnInit(): void {
    this.initForm();
    this.projectsFacade.loadProjects();
    this.projectsFacade.mutations$.subscribe(() => this.reset())
  }

  reset() {
    this.formGroup.reset();
    this.project = {} as Project;
    Object.keys(this.formGroup.controls).forEach(key => {
      this.formGroup.get(key).setErrors(null);
    });
  }

  select(project: Project) {
    this.projectsFacade.selectProject(project.id);
    this.formGroup.patchValue(project);
  }

  create() {
    this.projectsFacade.createProject(this.formGroup.value);
  }

  update() {
    this.projectsFacade.updateProject(this.formGroup.value);
  }

  delete(project: Project) {
    this.projectsFacade.deleteProject(project);
  }

  save(project: Project) {
    if (project.id) {
      console.log('PROJECTS.TS UPDATE')
      this.update();
    } else {
      this.create();
    }
  }

  initForm() {
    this.formGroup = this.formBuilder.group({
      id: [null],
      title: ['', Validators.compose([
        Validators.required
      ])],
      details: ['', Validators.compose([
        Validators.required
      ])],
      importanceLevel: [0]
    });
  }

}
