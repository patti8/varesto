// import NowPlaying from '../views/pages/now-playing';
// import Upcoming from '../views/pages/upcoming';
import Detail from '../views/resto/detail';
import TampilSemua from '../views/resto/tampil-semua';
import Like from '../views/resto/like';

const routes = {
  // '/': NowPlaying, // default page
  // '/now-playing': NowPlaying,
  // '/upcoming': Upcoming,
  '/detail/:id': Detail,
  '/': TampilSemua,
  '/like': Like,
};

export default routes;
