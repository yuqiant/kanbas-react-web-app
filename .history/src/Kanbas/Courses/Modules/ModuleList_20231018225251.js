import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";

function ModuleList() {
    const { courseId } = useParams();
    const modules = db.modules;
    return (
        <div>
            <div class="btn-group" style="margin-right: -5px;">
                <button class="btn btn-light btn-sm">Collapse All</button>
                <button class="btn btn-light btn-sm">View Progress</button>

                <div class="dropdown">
                    <button class="btn btn-light btn-sm dropdown-toggle" type="button"
                        data-bs-toggle="dropdown" aria-expanded="false"><i class="fa fa-check-circle"
                            aria-hidden="true" style="color: green;"></i>
                        Publish All
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
                <button class="btn btn-danger btn-sm"><i class="fa fa-plus"
                    aria-hidden="true"></i>Module</button>
                <button class="btn btn-light btn-sm"><i class="fa fa-ellipsis-v"
                    aria-hidden="true"></i></button>
            </div>







            <ul className="list-group">

                {
                    modules
                        .filter((module) => module.course === courseId)
                        .map((module, index) => (
                            <li key={index} className="list-group-item">
                                <h3>{module.name}</h3>

                                <p>{module.description}</p>
                                {
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
                                }
                            </li>
                        ))
                }
            </ul>
            );
}
            export default ModuleList;