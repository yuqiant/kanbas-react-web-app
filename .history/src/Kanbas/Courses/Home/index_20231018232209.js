import ModuleList from "../Modules/ModuleList";


function Home() {
    return (
        <div className="row">
            <div className="col-8">
                <h2>Home</h2>
                <ModuleList />
            </div>
            <div className="col-6">
                <h2>Status</h2>
                <button class="btn btn-light btn-sm">Import Existing Content</button>
                <button class="btn btn-light btn-sm">Import From Commons</button>
                <button class="btn btn-light btn-sm">Choose Home Page</button>
                <button class="btn btn-light btn-sm">View Course Stream</button>
                <button class="btn btn-light btn-sm">New Announcement</button>
                <button class="btn btn-light btn-sm">New Analytics</button>
                <button class="btn btn-light btn-sm">View Course Notifications</button><br />
            </div>
        </div>
    );
}
export default Home;