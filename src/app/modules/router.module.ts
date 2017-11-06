import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Containers } from '../containers/containers.module';


const appRoutes: Routes = [
    // Add routes here, left this as examples.
    //
    // { path: 'crisis-center', component: CrisisListComponent },
    // { path: 'hero/:id', component: HeroDetailComponent },
    { path: '', component: Containers.HomeComponent },
    { path: 'home', component: Containers.HomeComponent },
    { path: '**', component: Containers.PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
        )
        // other imports here
    ],
    exports: [RouterModule]
})
export class AppRouterModule { }
