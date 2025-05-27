import '../../App.css';
import Banner from "../../components/Banner";
import Row from "../../components/Row";
import requests from "../../api/requests";

export default function MainPage() {
    return (
        <div className="App">
            <Banner />

            <Row
                title="넷플릭스 오리지널"
                id="NO"
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow
            />

            <Row title="지금 트렌드" id="TN" fetchUrl={requests.fetchTrending} isLargeRow/>
            <Row title="평점 높은 콘텐츠" id="TR" fetchUrl={requests.fetchTopRated} isLargeRow/>
            <Row title="액션 영화" id="AM" fetchUrl={requests.fetchActionMovies} isLargeRow/>
            <Row title="코미디 영화" id="CM" fetchUrl={requests.fetchComedyMovies} isLargeRow/>
            <Row title="공포 영화" id="HM" fetchUrl={requests.fetchHorrorMovies} isLargeRow/>
            <Row title="로맨스 영화" id="RM" fetchUrl={requests.fetchRomanceMovies} isLargeRow/>
            <Row title="다큐멘터리" id="DM" fetchUrl={requests.fetchDocumentaries} isLargeRow/>

        </div>
    );
}
