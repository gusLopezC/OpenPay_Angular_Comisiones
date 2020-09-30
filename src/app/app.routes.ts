import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { AppComponent } from './app.component';


const appRoutes: Routes = [

    {
        path: '', pathMatch: 'full', redirectTo: '/home'
    },
    {
        path: 'home', pathMatch: 'full', component: AppComponent
    },
    

];


export const APP_ROUTES = RouterModule.forRoot(appRoutes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    useHash: false,
    enableTracing: false, // <-- debugging purposes only
    preloadingStrategy: PreloadAllModules
});