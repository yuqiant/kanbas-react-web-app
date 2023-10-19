import ModuleList from "../Modules/ModuleList";


function Home() {
    return (
        <div className="row">
            <div className="col-8">
                <h2>Home</h2>
                <ModuleList />
            </div>
            <div className="col-3">
                <h2>Status</h2>
                <div className="btn-group" style={{ display: "flex", flexDirection: "column" }}>

                    <button class="btn btn-light btn-sm">Import Existing Content</button><br />
                    <button class="btn btn-light btn-sm">Import From Commons</button><br />
                    <button class="btn btn-light btn-sm">Choose Home Page</button><br />
                    <button class="btn btn-light btn-sm">View Course Stream</button><br />
                    <button class="btn btn-light btn-sm">New Announcement</button><br />
                    <button class="btn btn-light btn-sm">New Analytics</button><br />
                    <button class="btn btn-light btn-sm">View Course Notifications</button><br />
                </div>
            </div>
        </div>
    );
}
export default Home;