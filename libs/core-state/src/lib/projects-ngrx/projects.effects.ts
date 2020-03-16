import { Injectable } from '@angular/core';

import { Project, ProjectsService } from '@bb/core-data';
import { ProjectsPartialState } from './projects.reducer';
import { ProjectsFacade } from './projects.facade';
import * as projectsActions from './projects.actions';

import { DataPersistence } from '@nrwl/angular';
import { Actions, createEffect } from '@ngrx/effects';
import { map } from 'rxjs/operators';

@Injectable()
export class ProjectsEffects {
  loadProjects$ = createEffect(() =>
    this.dataPersistence.fetch(projectsActions.loadProjects, {
      run: (
        action: ReturnType<typeof projectsActions.loadProjects>,
        state: ProjectsPartialState
      ) => {
        return this.projectsService.all().pipe(
          map((projects: Project[]) => projectsActions.projectsLoaded({ projects }))
        );
      },
      onError: (action: ReturnType<typeof projectsActions.loadProjects>, error) => {
        console.log('Effects Load Errors ', error);
      }
    })
  );

  createProjects$ = createEffect(() =>
    this.dataPersistence.fetch(projectsActions.createProject, {
      run: (
        action: ReturnType<typeof projectsActions.createProject>,
        state: ProjectsPartialState
      ) => {
        return this.projectsService.create(action.project).pipe(
          map((project: Project) => projectsActions.projectCreated({ project }))
        );
      },
      onError: (action: ReturnType<typeof projectsActions.createProject>, error) => {
        console.log('Effects Create Errors ', error);
      }
    })
  );

  updateProjects$ = createEffect(() =>
    this.dataPersistence.fetch(projectsActions.updateProject, {
      run: (
        action: ReturnType<typeof projectsActions.updateProject>,
        state: ProjectsPartialState
      ) => {
        return this.projectsService.update(action.project).pipe(
          map((project: Project) => projectsActions.projectUpdated({ project }))
        );
      },
      onError: (action: ReturnType<typeof projectsActions.updateProject>, error) => {
        console.log('Effects Update Errors ', error);
      }
    })
  );

  deleteProjects$ = createEffect(() =>
    this.dataPersistence.fetch(projectsActions.deleteProject, {
      run: (
        action: ReturnType<typeof projectsActions.deleteProject>,
        state: ProjectsPartialState
      ) => {
        return this.projectsService.delete(action.project).pipe(
          map((project: Project) => projectsActions.projectDeleted({ project: action.project  }))
        );
      },
      onError: (action: ReturnType<typeof projectsActions.deleteProject>, error) => {
        console.log('Effects Delete Errors ', error);
      }
    })
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<ProjectsPartialState>,
    private projectsService: ProjectsService,
    private projectsFacade: ProjectsFacade
  ) {}
}
