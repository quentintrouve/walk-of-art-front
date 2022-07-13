import React, { useEffect } from "react"

import s from "./index.module.scss"

import { FormOne, FormTwo, FormThree, FormFour, FormFive } from "../forms"
import { Stepper } from "@components"

export type IProps = {
  onSubmit: (formData: any) => void
}

const STEPS = [
  {
    id: 1,
    label: "Sélection",
    number: 1,
    completed: false,
  },
  {
    id: 2,
    label: "Liens",
    number: 2,
    completed: false,
  },
  {
    id: 3,
    label: "Détails exposition",
    number: 3,
    completed: false,
  },
  {
    id: 4,
    label: "Récapitulatif",
    number: 4,
    completed: false,
  },
  {
    id: 5,
    label: "Paiement",
    number: 5,
    completed: false,
  },
]

const getStepComponent = (
  step: number,
  compiledForm,
  handleStepSubmit,
  handleBack
) => {
  switch (step) {
    case 0:
      return (
        <FormOne
          handleStepSubmit={handleStepSubmit}
          handleBack={handleBack}
          defaultValues={compiledForm.one}
        />
      )
    case 1:
      return (
        <FormTwo
          handleStepSubmit={handleStepSubmit}
          handleBack={handleBack}
          defaultValues={compiledForm.two}
          amountOfAdditionalLinks={[]}
        />
      )
    case 2:
      return (
        <FormThree
          handleStepSubmit={handleStepSubmit}
          handleBack={handleBack}
          defaultValues={compiledForm.three}
          onClick={() => {}}
        />
      )
    case 3:
      return (
        <FormFour
          handleStepSubmit={handleStepSubmit}
          handleBack={handleBack}
          defaultValues={compiledForm.four}
          onClick={() => {}}
          formState={{ ...compiledForm.one, ...compiledForm.two, ...compiledForm.three, }}
        />
      )
    case 4:
      return (
        <FormFive
          handleStepSubmit={handleStepSubmit}
          handleBack={handleBack}
          // defaultValues={compiledForm.five}
        />
      )
    default:
      return "Unknown step"
  }
}

export const FormStepper: React.FC<IProps> = (props: IProps, { onSubmit }) => {
  const [compiledForm, setCompiledForm] = React.useState({})
  const [steps, setSteps] = React.useState(STEPS)

  const [activeStep, setActiveStep] = React.useState(0)

  const completeStep = (step: number) => {
    const newSteps = steps.map((s, i) => {
      if (i === step) {
        return { ...s, completed: true }
      }
      return s
    })
    setSteps(newSteps)
  }

  const uncompleteStep = (step: number) => {
    const newSteps = steps.map((s, i) => {
      if (i === step) {
        return { ...s, completed: false }
      }
      return s
    })
    setSteps(newSteps)
  }

  const handleStepSubmit = (data: any) => {
    console.log(data)
    switch (activeStep) {
      case 0:
        setCompiledForm({ ...compiledForm, one: data })
        break
      case 1:
        setCompiledForm({ ...compiledForm, two: data })
        break
      case 2:
        setCompiledForm({ ...compiledForm, three: data })
        break
      case 3:
        setCompiledForm({ ...compiledForm, four: data })
        onSubmit({
          ...compiledForm?.one,
          ...compiledForm?.two,
          ...compiledForm?.three,
          ...compiledForm?.four,
        })
        break
      case 4:
        'setCompiledForm({ ...compiledForm, five: data })'
        break
      default:
        throw new Error("not a valid step")
    }
    setActiveStep((prevActiveStep) => {
      completeStep(prevActiveStep)
      return prevActiveStep + 1
    })
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => {
      uncompleteStep(prevActiveStep - 1)
      return prevActiveStep - 1
    })
  }

  const handleReset = () => {
    setActiveStep(0)
    setCompiledForm({})
  }

  return (
    <div className={s.container}>
      <div>
        <Stepper
          setActiveStep={setActiveStep}
          variant="checked"
          activeStep={activeStep}
          steps={steps}
          completeOne={() => {}}
        />
      </div>
      <div className={s.formContainer}>
        {getStepComponent(
          activeStep,
          compiledForm,
          handleStepSubmit,
          handleBack
        )}
      </div>
    </div>
  )
}
