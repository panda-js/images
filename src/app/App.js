import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import AppLayout from './AppLayout';
import ImageDetails from '../components/image/containers/ImageDetails';
import ImagesList from '../components/image/containers/ImagesList';
import { getImagesAction, selectImages } from '../components/image/imageSlice';

const App = () => {
  const dispatch = useDispatch();
  const { images } = useSelector(selectImages);

  useEffect(
    () => {
      if (!images.length) {
        dispatch(getImagesAction());
      }
    },
    [dispatch, images],
  );

  return (
    <Router>
      <AppLayout>
        <Switch>
          <Route path={['/create', '/edit/:id']}>
            <ImageDetails images={images} />
          </Route>
          <Route path="/">
            <ImagesList images={images} />
          </Route>
        </Switch>
      </AppLayout>
    </Router>
  );
};

export default App;
