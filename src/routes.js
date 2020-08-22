import Main from './pages/Main.svelte';
import Sign from './pages/Sign.svelte'
import Signin from './pages/Signin.svelte';
import Signup from './pages/Signup.svelte';
import Policy from './pages/Policy.svelte';

const routes = {
  '/': Main,
  '/signin': Signin,
  '/signup': Signup,
  '/sign': Sign,
  '/policy': Policy,
};

export default routes;

