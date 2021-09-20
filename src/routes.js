'use strict';
import Home from './views/Home.vue'
import About from './views/About.vue'
import NotFound from './views/NotFound.vue'
import Game from './views/Game.vue'
import Quiz from './components/game/Quiz.vue'
import home from './components/game/home.vue'
import stat from './components/game/stat.vue'
import gamenow from './components/game/gamenow.vue'
import Board from './components/rand/Board.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [

  { path: '/', component: () => import ('./views/Home.vue'), meta: { title: 'Home' } },
  { path:'/game',component:Game},
  {
    path: '/about',
    meta: { title: 'About' },
    component: About, component: () => import('./views/About.vue')},
  { path: '/:path(.*)', component: NotFound },
  {path:'/game/home',component:home },
    {path:'/game/stat',component:stat},
    {path:'/game/gamenow',component:gamenow},
     {path:'/game/quiz',component:Quiz},
     {path:'/game/board',component:Board}

 
]
