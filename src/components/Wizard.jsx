import React, { useEffect, useState } from "react"
import { useHistory, useLocation } from "react-router-dom"
import StepWizard from "react-step-wizard"
import qs from "qs"
import { UncontrolledTooltip } from "reactstrap"
import { Step, Stepper } from "react-form-stepper"
import '../@core/scss/react/reactstrap/_wizard-header.scss'

const WizardComp = ({ step = 1, children }) => {

    const history = useHistory()
    const location = useLocation()
    const query = qs.parse(location.search, { ignoreQueryPrefix: true })
    const [currentStep, setStep] = useState(query.step || step)

    useEffect(() => {
        const finalQuery = {
            ...query,
            step: currentStep
        }
        history.push({
            pathname: location.pathname,
            search: `?${qs.stringify(finalQuery)}`
        })
    }, [currentStep])

    return (
        <>
            <Stepper activeStep={currentStep} className={"d-none"}>
                {children?.map((element, index) => (
                    <div key={index}>
                        <Step id={element?.id} />
                        <UncontrolledTooltip placement="top" target={element?.id}>
                            {element?.title}
                        </UncontrolledTooltip>
                    </div>
                )
                )}
            </Stepper>
            <Stepper activeStep={currentStep - 1}>
                {children?.map((element, index) => <Step key={index} id={element?.id}
                    children={index + 1 === parseInt(currentStep) ? index + 1 : element?.icon !== undefined ? element?.icon : index + 1} />)}
            </Stepper>
            <StepWizard initialStep={currentStep} onStepChange={(step) => setStep(step?.activeStep)}>
                {children?.map(child => child?.content)}
            </StepWizard>
        </>
    )
}

export default WizardComp
