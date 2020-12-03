import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from "./layout/header/header.component";
import { IndexComponent } from "./layout/index/index.component";

const routes: Routes = [
	{
		path: '',
		component: IndexComponent,
		//canActivate : [ AuthGuard ],
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
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
