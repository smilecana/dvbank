import React, {useState} from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {Button} from "@material-ui/core";
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
import {AccountList} from "./AccountList";
import axios from "axios";
import {useStore} from "react-stores";
import {store} from "../../store";
import {setCustomer} from "../../authActions";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #eee',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
            borderRadius: '5px'
        },
        btn:{
            marginBottom: '16px'
        },
        root: {
            width: '100%',
        },
        backButton: {
            marginRight: theme.spacing(1),
        },
        instructions: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
        },
        final: {
            textAlign: 'center'
        }
    }),
);

export default function NewAccount(props: any) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleOpen}  className={classes.btn}>
                Open Account
            </Button>
            <Modal
                aria-labelledby="new-account"
                aria-describedby="new-account"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title">New Account</h2>
                        <HorizontalLabelPositionBelowStepper/>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}


function getSteps() {
    return ['Select available account ...', 'Please check the terms and conditions.', 'Your last step!! Create an account!!!'];
}

function getStepContent(stepIndex:number, account:any) {
    switch (stepIndex) {
        case 0:
            return <AccountList accountArr={account}/>;
        case 1:
            return '';
        case 2:
            return '';
        default:
            return 'Unknown stepIndex';
    }
}

function HorizontalLabelPositionBelowStepper() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const customer = useStore(store).customer;
    const [account, setAccount] = useState<any>({"number":"","type":"chequing","balance":0,"creationDate":"27/04/2020","status":"open","creditLimit":"","transactions":[]});
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    };

    const openAccount = () => {
        const  number = (Math.floor(Math.random() * 1000) + 1000).toString();
        account['number'] = number;
        console.log(account);
        axios.post(`/account/${customer['id']}/addAccount`, account)
        .then((response) => {
            alert('Success');
            setCustomer(response.data);
            window.location.reload();
        }, (error) => {
            console.log(error);
        });
    };

    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map(label => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>
                {activeStep === steps.length ? (
                    <div className={classes.final}>
                        <Button variant="contained"  color="primary"  onClick={openAccount}>Open</Button>
                    </div>
                ) : (
                    <div>
                        <Typography className={classes.instructions}>{getStepContent(activeStep, account)}</Typography>
                        <div>
                            <Button
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                className={classes.backButton}
                            >
                                Back
                            </Button>
                            <Button variant="contained" color="primary" onClick={handleNext}>
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
