import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { BiPlus, BiDotsVertical, BiCheckCircle } from "react-icons/bi"; // 导入react-icons库中的图标


function ModuleList() {
    const { courseId } = useParams();
    const modules = db.modules;
    const buttonGroupStyle = {
        marginRight: '-5px',
    };

    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };
    return (
        <div style={{ marginRight: '20px' }}>
            <div className="btn-group" style={buttonGroupStyle}>
                <button className="btn btn-light btn-sm">Collapse All</button>
                <button className="btn btn-light btn-sm">View Progress</button>

                {/* <div className="dropdown">
                    <button className="btn btn-light btn-sm dropdown-toggle" type="button"
                        data-bs-toggle="dropdown" aria-expanded="false"> <BiCheckCircle style={{ color: 'green' }} />
                        Publish All
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div> */}
                <div className="dropdown-container">
                    <button className="btn btn-light btn-sm" onClick={toggleDropdown}>
                        <BiCheckCircle style={{ color: 'green' }} />
                        Publish All
                    </button>
                    {isDropdownOpen && (
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    )}
                </div>
                <button className="btn btn-danger btn-sm"><BiPlus />Module</button>
                <button className="btn btn-light btn-sm"><BiDotsVertical /></button>
            </div>
            <hr />

            {/* <div class="list-group mb-4">
                <a href="#" class="list-group-item list-group-item-secondary">Resources</a><br />
                <a href="#" class="list-group-item list-group-item-secondary">Required Textbook</a> <br />


                <a href="#" class="list-group-item list-group-item-secondary">Week 0 - INTRO</a> <br />
                <a href="#" class="list-group-item list-group-item-secondary">Week 1 - HTML</a><br />
            </div> */}


            <ul className="list-group">

                {
                    modules
                        .filter((module) => module.course === courseId)
                        .map((module, index) => (
                            // <li key={index} className="list-group-item">
                            <li key={index} className="list-group-item list-group-item-secondary" style={{ marginBottom: "40px" }

                            }>
                                <h4>{module.name}</h4>

                                <p>{module.description}</p>
                                {/* {
                                    module.lessons && (
                                        <ul className="list-group">
                                            {
                                                module.lessons.map((lesson, index) => (
                                                    <li key={index} className="list-group-item">
                                                        <h4>{lesson.name}</h4>
                                                        <p>{lesson.description}</p>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    )
                                } */}
                            </li>

                        ))
                }
            </ul>

        </div>
    );
}
export default ModuleList;