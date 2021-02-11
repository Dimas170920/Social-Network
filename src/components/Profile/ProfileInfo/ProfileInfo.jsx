import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import checkMark from "../../../assets/images/check-mark.png"
import sadSmile from "../../../assets/images/smiley_sad.png"
import ProfileStatus from "./ProfileStatus"

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }
    return (
        <div>
           {/* <div>
                <img
                    src={"https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F191120053137-03-milky-way-images-australia.jpg"}/>
            </div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
                <div>{props.profile.aboutMe}</div>
                <div>{props.profile.contacts.instagram}</div>
                <div className={s.lookingForAJob}>
                    {props.profile.lookingForAJob?<img src={checkMark}/>:<img src={sadSmile}/> } </div>
                {/*<img src={'https://cdn.jpegmini.com/user/images/slider_puffin_jpegmini_mobile.jpg'}/>*/}
            </div>



        </div>
    );
}
export default ProfileInfo;