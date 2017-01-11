import { WorkItemBoardComponent } from './work-item-board/work-item-board.component';
import { WorkItemDetailComponent } from './work-item-detail/work-item-detail.component';
import { WorkItemListComponent } from './work-item-list/work-item-list.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { UsersResolve, AuthUserResolve } from './users.resolver';
import { WorkItemComponent } from './work-item.component';

const routes: Routes = [
  {
    path: 'work-item',
    component: WorkItemComponent,
    resolve: {
      allusers: UsersResolve,
      authuser: AuthUserResolve
    },
    children: [
      {
        path: ''
      },
      {
        path: 'list',
        component: WorkItemListComponent,
        resolve: {
          allusers: UsersResolve,
          authuser: AuthUserResolve
        },
        children: [
          {
            path: ''
          },
          {
            path: 'detail/:id',
            component: WorkItemDetailComponent,
            resolve: {
              allusers: UsersResolve,
              authuser: AuthUserResolve
            },
          }
        ]
      },

      {
        path: 'board',
        component: WorkItemBoardComponent,
        resolve: {
          allusers: UsersResolve,
          authuser: AuthUserResolve
        },
        children: [
          {
            path: ''
          },
          {
            path: 'detail/:id',
            component: WorkItemDetailComponent,
            resolve: {
              allusers: UsersResolve,
              authuser: AuthUserResolve
            },
          }
        ]
      }
    ]

  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class WorkItemRoutingModule {}