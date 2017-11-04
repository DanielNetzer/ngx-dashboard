import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '../containers/page-not-found/page-not-found.component';

const appRoutes: Routes = [
    // Add routes here, left this as examples.
    //
    // { path: 'crisis-center', component: CrisisListComponent },
    // { path: 'hero/:id', component: HeroDetailComponent },
    {
        path: 'home',
        component: PageNotFoundComponent
        // data: { title: 'Heroes List' }
    },
    {
        path: '',
        redirectTo: '/none',
        pathMatch: 'full'
    },
    { path: '**', component: PageNotFoundComponent }
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
