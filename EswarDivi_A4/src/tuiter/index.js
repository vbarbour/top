import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import ExploreComponent from "./explore";

function Tuiter() {
    return (
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-2 col-xl-2 offset-1">
                <NavigationSidebar active="explore"/>
            </div>
            <div className="col-6 col-md-8 col-lg-6 col-xl-5" style={{"position": "relative"}}>
                <ExploreComponent/>
            </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-3 col-xl-3">
                <WhoToFollowList/>
            </div>
        </div>
    )
}

export default Tuiter;