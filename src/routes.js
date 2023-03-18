import Home from './pages/HomePage.vue';
import Product from './pages/ProductPage.vue';
import Cart from './pages/CartPage.vue';

export default [
  {
    path: '/',
    component: Home,
    name: 'home'
  },
  {
    path: '/product/:id',
    component: Product,
    name: 'single',
    props: true, //for :id
  },
  {
    path: '/product/carts',
    component: Cart,
    name: 'allcarts',
    props: true,
  }
]