import { Project } from '@bb/core-data';

import { createAction, props } from '@ngrx/store';

// Select
export  const projectSelected = createAction(
  '[PROJECTS] Project Selected',
  props<{ selectedProjectId: string | number }>()
);

//Load
export const loadProjects = createAction(
  '[PROJECTS] Load Projects',
);

export const projectsLoaded = createAction(
  '[PROJECTS] Projects Loaded',
  props<{ projects: Project[] }>()
);

// Create
export const createProject = createAction(
  '[PROJECTS] Create Project',
  props<{ project: Project }>()
);

export const projectCreated = createAction(
  '[PROJECTS] Project Created',
  props<{ project: Project }>()
);

// Update
export const updateProject = createAction(
  '[PROJECTS] Update Project',
  props<{ project: Project }>()
);

export const projectUpdated = createAction(
  '[PROJECTS] Project Updated',
  props<{ project: Project }>()
);

// Delete
export const deleteProject = createAction(
  '[PROJECTS] Delete Project',
  props<{ project: Project }>()
);

export const projectDeleted = createAction(
  '[PROJECTS] Project Deleted',
  props<{ project: Project }>()
);
