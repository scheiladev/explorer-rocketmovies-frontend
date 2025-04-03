import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Profile } from '../pages/Profile';
import { CreateMovie } from '../pages/CreateMovie';
import { MoviePreview } from '../pages/MoviePreview';

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/create' element={<CreateMovie />} />
      <Route path='/preview/:id' element={<MoviePreview />} />
    </Routes>
  );
}