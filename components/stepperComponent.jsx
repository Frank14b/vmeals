import useTranslation from 'next-translate/useTranslation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import Image from 'next/image';

export default function StepperComponent({active}) {

    const { t } = useTranslation('common');
    const [slideLoading, setSlideLoading] = useState(true)


    useEffect(() => {

    }, [])


    return (
        <>
            <div className="col-md-12 col-xs-12 info_box22">
                <div className="stepper-wrapper t-15">
                    <div className={`stepper-item ${(active > 1) ? "completed" : (active == 1) && "active"}`}>
                        <div className="step-counter"><a><span style={{marginTop: "-0px", float: "left"}}><Image width={20} height={20} src={`https://workspace.vmeals.ae/wp-content/uploads/2019/06/choose-plan-${(active == 1) ? "active" : "inactive"}.png`} /></span>&nbsp;Choose your plan</a></div>

                    </div>
                    <div className={`stepper-item ${(active > 2) ? "completed" : (active == 2) && "active"}`}>
                        <div className="step-counter"><a><span style={{marginTop: "-0px", float: "left"}}><Image width={20} height={20} src={`https://workspace.vmeals.ae/wp-content/uploads/2019/06/customize-${(active == 2) ? "active" : "inactive"}.png`} /></span>&nbsp;Customize</a></div>

                    </div>
                    <div className={`stepper-item ${(active > 3) ? "completed" : (active == 3) && "active"}`}>
                        <div className="step-counter"><a><span style={{marginTop: "-0px", float: "left"}}><Image width={20} height={20} src={`https://workspace.vmeals.ae/wp-content/uploads/2019/06/Sign-Up-Login-${(active == 3) ? "active" : "inactive"}.png`} /></span>&nbsp;Sign Up/Login</a></div>

                    </div>
                    <div className={`stepper-item ${(active > 4) ? "completed" : (active == 4) && "active"}`}>
                        <div className="step-counter"><a><span style={{marginTop: "-0px", float: "left"}}><Image width={20} height={20} src={`https://workspace.vmeals.ae/wp-content/uploads/2019/06/delivery-icon-${(active == 4) ? "active" : "inactive"}.png`} /></span>&nbsp;Checkout</a></div>

                    </div>
                    <div className={`stepper-item ${(active > 5) ? "completed" : (active == 5) && "active"}`}>
                        <div className="step-counter"><a><span style={{marginTop: "-0px", float: "left"}}><Image width={20} height={20} src={`https://workspace.vmeals.ae/wp-content/uploads/2019/06/summary-${(active == 5) ? "active" : "inactive"}.png`} /></span>&nbsp;Summary</a></div>

                    </div>
                </div>
            </div>
        </>
    );
}