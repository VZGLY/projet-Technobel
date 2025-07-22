import { Routes } from '@angular/router';
import { Demo } from './demo/demo';
import { Exo } from './exo/exo';
import { Demo1 } from './demo/demo1/demo1';
import { Demo2 } from './demo/demo2/demo2';

export const routes: Routes = [
    {path : 'demo', component : Demo, children : [
        { path : 'demo1', component : Demo1},
        { path : 'demo2', component : Demo2}
    ]},
    {path : 'exo', component : Exo},
    {path : '**', redirectTo : 'demo'}
];
