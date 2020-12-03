import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from "./layout/header/header.component";
import { IndexComponent } from "./layout/index/index.component";
import { GuardGuard } from './config/guard/guard.guard';

const routes: Routes = [
	{
		path: '',
		component: IndexComponent,
		canActivate : [ GuardGuard ],
		children: [
			{
				path: '',
				outlet: 'header',
				component: HeaderComponent
			},
			{
				path: '',
				loadChildren: () => import('./modules/modules.module').then(m => m.ModulesModule)
			}
		]
	},
	{
		path: 'login',
		loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
	},
	{
		path: 'registro',
		loadChildren: () => import('./modules/register/register.module').then(m => m.RegisterModule)
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
