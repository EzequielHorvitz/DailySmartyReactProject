import SearchBar from './searchBar';
import RecentPosts from './recentPosts';

export default class App extends Component {
export default class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <Logo/>
          <SearchBar/>
          <RecentPosts/>
        </div>
      </div>
    );
  }
}