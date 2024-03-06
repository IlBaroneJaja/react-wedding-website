import React, {Fragment} from "react";
import UnderlinedHeader from "../UnderlinedHeader";
import withScroll from "../WithScroll";
import {
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardText,
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBTypography
} from "mdb-react-ui-kit";
import MDBRowDetail from "./MDBRowDetail";

import profilePhoto from "../../images/profileLogo.png";
import checkMark from "../../images/svg/checkmark.svg";
import crossSign from "../../images/svg/cross-sign.svg";

const ProfilePage = React.forwardRef(({id, guestInfo}, ref) => {
    const guestListFragment = (
        <>
            <ol>
                {guestInfo?.guest.guestList?.map((guest, index) => {
                    return <Fragment key={index}>
                        <li>{guest.firstName} {guest.lastName}</li>
                    </Fragment>;

                })}
            </ol>
        </>
    );

    return (
        <>
            <section ref={ref} id={id}>
                <UnderlinedHeader title="Profil utilisateur"/>
                <div className="gradient-custom-2">
                    <MDBContainer className="py-5 h-100">
                        <MDBRow className="justify-content-center align-items-center h-100">
                            <MDBCol lg="9" xl="7">
                                <MDBCard>
                                    <div className="rounded-top text-white d-flex flex-row"
                                         style={{backgroundColor: '#6a8fb4', height: '200px'}}>
                                        <div className="ms-4 mt-5 d-flex flex-column" style={{width: '150px'}}>
                                            <MDBCardImage src={profilePhoto} alt="photo profil"
                                                          className=" rounded-circle mt-4 mb-2 img-thumbnail"
                                                          fluid
                                                          style={{width: '150px', zIndex: '1'}}/>
                                        </div>
                                        <div className="ms-3" style={{marginTop: '130px'}}>
                                            <MDBTypography tag="h5">{guestInfo?.guest.firstName}</MDBTypography>
                                            <MDBCardText>{guestInfo?.guest.lastName}</MDBCardText>
                                        </div>
                                    </div>
                                    <MDBCardBody className="text-black p-4">
                                        <div className="mb-5">
                                            <p className="lead fw-normal mb-1">Statut</p>
                                            <div className="p-4" style={{backgroundColor: '#f8f9fa'}}>
                                                <MDBRow className="py-2">
                                                    <MDBCol md="6" className="text-start">
                                                        <MDBCardText className="font-italic mb-1">Confirmation présence:
                                                        </MDBCardText>
                                                    </MDBCol>
                                                    <MDBCol md="6" className="text-start">
                                                        {guestInfo?.guest.confirmationSiteDone ? (
                                                            <img src={checkMark} width="40px" height="40px"
                                                                 alt="valide"/>
                                                        ) : (
                                                            <img src={crossSign} width="40px" height="40px"
                                                                 alt="invalide"/>
                                                        )}
                                                    </MDBCol>
                                                </MDBRow>
                                                <MDBRow className="py-2">
                                                    <MDBCol md="6" className="text-start">
                                                        <MDBCardText className="font-italic mb-1">Réservation chambres:
                                                        </MDBCardText>
                                                    </MDBCol>
                                                    <MDBCol md="6" className="text-start">
                                                        {guestInfo?.guest.confirmationRoomBooking
                                                            ? <img src={checkMark} width="40px" height="40px"
                                                                   alt="valide"/>
                                                            : <img src={crossSign} width="40px" height="40px"
                                                                   alt="invalide"/>}
                                                    </MDBCol>
                                                </MDBRow>
                                            </div>
                                        </div>
                                        <div className="mb-5">
                                            <p className="lead fw-normal mb-1">Détails</p>
                                            <div className="p-4" style={{backgroundColor: '#f8f9fa'}}>
                                                <MDBRowDetail header="Allergies, régimes alimentaires:"
                                                              content={guestInfo?.guest.allergyInfo ? guestInfo?.guest.allergyInfo : "aucune"}/>
                                                <MDBRowDetail header="Liste invités:"
                                                              content={guestListFragment}/>
                                                {guestInfo?.guest.roomBooking && (
                                                    <Fragment>
                                                        <MDBRowDetail header="Type de chambre(s):"
                                                                      content={guestInfo?.guest.roomBooking.type}/>
                                                        <MDBRowDetail header="Nombre de chambre(s):"
                                                                      content={guestInfo?.guest.roomBooking.number}/>
                                                    </Fragment>
                                                )}
                                            </div>
                                        </div>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </div>
            </section>
        </>
    );
});
export default withScroll(ProfilePage);