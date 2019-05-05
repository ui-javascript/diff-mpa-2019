import 'styles/index.scss';
import {ReduxBoot} from 'next-react-redux';
import App from './app';


const render = () => {
  return ReduxBoot.run(App, 'root', {
    prefix: 'react-mpa'
  });
};

render() && module.hot && module.hot.accept('./app', render);
