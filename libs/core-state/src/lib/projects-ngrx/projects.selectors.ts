import { PROJECTS_FEATURE_KEY, projectsAdapter, ProjectsPartialState, ProjectsState } from './projects.reducer';

import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectProjectsState = createFeatureSelector<
  ProjectsPartialState,
  ProjectsState
  >(PROJECTS_FEATURE_KEY);

const { selectAll, selectEntities } = projectsAdapter.getSelectors();

export const selectProjectsLoading = createSelector(
  selectProjectsState,
  (state: ProjectsState) => state.isLoading
);

export const selectAllProjects = createSelector(
  selectProjectsState,
  (state: ProjectsState) => selectAll(state)
);

export const selectProjectsEntities = createSelector(
  selectProjectsState,
  (state: ProjectsState) => selectEntities(state)
);

export const selectProjectId = createSelector(
  selectProjectsState,
  (state: ProjectsState) => state.selectedProjectId
);

export const selectProject = createSelector(
  selectProjectsEntities,
  selectProjectId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
