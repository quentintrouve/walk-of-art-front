import React, { useEffect } from "react"
import { useForm, useFormContext, FormProvider } from "react-hook-form"

import styles from "./index.module.scss"
import { FormStepper as CreateWorkStepper } from "./stepper"

export type IProps = {
  onSubmit: (formData: any) => void
}

export const CreateWorkForm: React.FC<IProps> = ({ onSubmit }) => {
  return <CreateWorkStepper onSubmit={onSubmit} />
}
