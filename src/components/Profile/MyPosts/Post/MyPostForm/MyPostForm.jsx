import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLength, required,} from "../../../../../untils/validators/validators";
import {Textarea} from "../../../../common/FormsControl/FormControls";


const maxLength20 = maxLength(20);


const MyPostsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Add a new post"} name={"newPostBody"} component={Textarea}
                       validate={[required, maxLength20]}/>
            </div>
            <div>
                <button>Add Post</button>
            </div>
        </form>
    );
}

const MyPostReduxForm = reduxForm({form: 'postAddForm'})(MyPostsForm)

export default MyPostReduxForm;
