import React from "react";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControl/FormControls";
import {maxLength, required} from "../../../untils/validators/validators";


const maxLength50 = maxLength(50)

const MessagesForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={"New message"} name={"newMessageBody"}
                   component={Textarea} validate={[required, maxLength50]} />
        </div>
        <div>
            <button>Send</button>
        </div>
    </form>
}

const AddMessagesForm = reduxForm({form:'dialogAddMessagesForm'})(MessagesForm)

export default AddMessagesForm;