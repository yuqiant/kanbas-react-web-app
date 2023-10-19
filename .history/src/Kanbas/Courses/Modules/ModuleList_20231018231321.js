import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";

function ModuleList() {
    const { courseId } = useParams();
    const modules = db.modules;
    const buttonGroupStyle = {
        marginRight: '-5px',
    };
    return (
        <div>
            <div className="btn-group" style={buttonGroupStyle}>
                <button className="btn btn-light btn-sm">Collapse All</button>
                <button className="btn btn-light btn-sm">View Progress</button>

                <div className="dropdown">
                    <button className="btn btn-light btn-sm dropdown-toggle" type="button"
                        data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-check-circle"
                            aria-hidden="true" style={{ color: 'green' }}></i>
                        Publish All
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
                <button className="btn btn-danger btn-sm"><i className="fa fa-plus"
                    aria-hidden="true"></i>Module</button>
                <button className="btn btn-light btn-sm"><i className="fa fa-ellipsis-v"
                    aria-hidden="true"></i></button>
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
                            <li key={index} className="list-group-item">
                                <h3>{module.name}</h3>

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