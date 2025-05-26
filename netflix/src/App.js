import './App.css';
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Row from "./components/Row";
import requests from "./api/requests";

function App() {
    return (
        <div className="App">
            <Nav />
            <Banner />
            <Row
                title="넷플릭스 오리지널"
                id="NO"
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow
            />

            <Row title="지금 트렌드" id="TN" fetchUrl={requests.fetchTrending} />
            <Row title="평점 높은 콘텐츠" id="TR" fetchUrl={requests.fetchTopRated} />
            <Row title="액션 영화" id="AM" fetchUrl={requests.fetchActionMovies} />
            <Row title="코미디 영화" id="CM" fetchUrl={requests.fetchComedyMovies} />
            <Row title="공포 영화" id="HM" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="로맨스 영화" id="RM" fetchUrl={requests.fetchRomanceMovies} />
            <Row title="다큐멘터리" id="DM" fetchUrl={requests.fetchDocumentaries} />
        </div>
    );
}

export default App;