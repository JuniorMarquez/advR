import {RouterModule,Routes} from '@angular/router';
import {
	SliderHomeComponent,
	MyTixsComponent,
	LoginComponent,
	PartnersComponent,
	AffiliatesComponent,
	PartnerDetailComponent,
	AffiliateDetailComponent,
	TixDetailComponent,
	SignupComponent,
	ComingComponent,
	AlltixsComponent,
	NewMemberComponent

	}from "./components/index.paginas";

	import { AuthGuard } from './guards/auth.guard';

const app_routes: Routes = [
	{path:'',component:SliderHomeComponent},
	{path:'alltixs',component:AlltixsComponent},
	{path:'mytixs',component:MyTixsComponent},
	{path:'login',component:LoginComponent},
	{path:'affiliates',component:AffiliatesComponent},		
	{path:'partners',component:PartnersComponent},
	{path:'partner-detail/:id',component:PartnerDetailComponent},
	{path:'affiliate-detail/:id',component:AffiliateDetailComponent},
	{path:'tix-detail/:id',component:TixDetailComponent},
	{path:'signup',component:SignupComponent},
	{path:'coming',component:ComingComponent},
	{path:'new-member',component:NewMemberComponent},
	{path:'**',pathMatch:'full',redirectTo:''}
	];
	export const app_routing = RouterModule.forRoot(app_routes);

