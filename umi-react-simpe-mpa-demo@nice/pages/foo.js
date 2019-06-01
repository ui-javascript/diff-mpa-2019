import './foo.html';
import styles from './foo.css';
import stylesL from './foo2.less';

function App() {
  return (
    <div className={styles.normal}>
      <h1 className={stylesL.normal}>Foo222222 index</h1>
    </div>
  );
}

require('react-dom').render(<App />, document.getElementById('root'));

