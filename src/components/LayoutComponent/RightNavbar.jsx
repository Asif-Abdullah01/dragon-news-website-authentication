import FindUs from "../FindUs";
import RightPictures from "../RightPictures";
import SocialLogin from "../SocialLogin";

const RightNavbar = () => {
    return (
        <div className="space-y-5">
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
            <RightPictures></RightPictures>
        </div>
    );
};

export default RightNavbar;