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

                <button class="btn btn-light btn-sm">Import Existing Content</button><br />
                <button class="btn btn-light btn-sm">Import From Commons</button><br />
                <button class="btn btn-light btn-sm">Choose Home Page</button><br />
                <button class="btn btn-light btn-sm">View Course Stream</button><br />
                <button class="btn btn-light btn-sm">New Announcement</button><br />
                <button class="btn btn-light btn-sm">New Analytics</button><br />
                <button class="btn btn-light btn-sm">View Course Notifications</button><br />
            </div>
        </div>
<div></div>
Coming Up
        < div class="float-sm-end smaller-text" > <a href="#" style="color: red;">View Calendar</a></div >
<hr />

<div class="part">
    Lecture<br />
    CS4550.12631.202410<br />
    Sep 7 at 11:45am<br />
</div>

<div class="part">
    Lecture<br />
    CS4550.12631.202410<br />
    Sep 11 at 11:45am<br />
</div>

    );
}
export default Home;