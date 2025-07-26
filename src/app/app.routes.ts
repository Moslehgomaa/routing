import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { Notfound } from './components/notfound/notfound';
import { Gallery } from './components/gallery/gallery';

export const routes: Routes = [
    {path: '' , component: Home , title:'Home' } ,
    {path: 'home' , component: Home , title:'Home' } ,
    {path: 'about' , component: About , title:'About'} ,
    {path: 'gallery' , component: Gallery , title:'Portfolio'} ,
    {path: 'contact' , component: Contact , title:'Contact'} ,
    {path: '**' , component: Notfound , title:'Notfound'} ,
];
