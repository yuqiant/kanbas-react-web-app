
import db from "../Database";
import { Link } from "react-router-dom";
import blueImg from "../Dashboard/blue.png";
import "./index.css";

function Dashboard() {
    const courses = db.courses;

    const isDashboard = window.location.pathname.includes("/Kanbas/Dashboard");

    const [cardsPerRow, setCardsPerRow] = useState(4);

    useEffect(() => {
        function handleWindowResize() {
            const windowWidth = window.innerWidth;
            if (windowWidth < 1200) {
                setCardsPerRow(3);
            } else if (windowWidth < 768) {
                setCardsPerRow(2);
            } else if (windowWidth < 576) {
                setCardsPerRow(1);
            } else {
                setCardsPerRow(4);
            }
        }
        window.addEventListener("resize", handleWindowResize);

        // 初始化一次，以便根据初始窗口宽度设置卡片数量
        handleWindowResize();

        return () => {
            // 移除事件监听器，以避免内存泄漏
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);







    return (
        <div className="container">
            {/* <h1>{isDashboard ? "Dashboard" : "Published Courses"}</h1>
            <hr />
            {isDashboard && <h2>Published Courses ({courses.length})</h2>} */}
            <h1>Dashboard</h1>
            <hr />
            <h2>Published Courses ({courses.length})</h2>
            {/* <div class="d-flex flex-row flex-wrap"> */}
            {/* <div className="row row-cols-1 row-cols-md-4 g-3"> */}
            {/* <div className="row row-cols-4"> */}
            <div className={`custom-card-container cards-per-row-${cardsPerRow}`}>
                {courses.map((course, index) => (
                    <div className="col" key={course._id}>
                        <div className="card course-card">
                            <img src={blueImg} className="card-img-top" alt={`Course ${course.number}`} />
                            <div className="card-body">
                                <h5 className="card-title">
                                    <Link to={`/Kanbas/Courses/${course._id}`}>
                                        {course.number + " " + course.name}
                                    </Link>
                                </h5>
                                <p className="card-text">
                                    202410_Fall 2023 full semester
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        // </div>

    );
}

export default Dashboard;
