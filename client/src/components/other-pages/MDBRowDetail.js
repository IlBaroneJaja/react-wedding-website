import {MDBCardText, MDBCol, MDBRow} from "mdb-react-ui-kit";
import React from "react";

const MDBRowDetail = ({header, content}) => {
    return (
        <MDBRow className="py-2">
            <MDBCol md="6" className="text-start">
                <MDBCardText className="font-italic mb-1">{header}</MDBCardText>
            </MDBCol>
            <MDBCol md="6" className="text-start">
                <MDBCardText className="font-italic mb-1">
                    {content}
                </MDBCardText>
            </MDBCol>
        </MDBRow>
    );
}

export default MDBRowDetail;