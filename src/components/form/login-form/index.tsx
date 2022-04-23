import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import s from './index.module.scss'
import { InputGroup, HeadingStrong, Button} from '@components'
import { IFormInput } from './interfaces'
import { ColorsType } from '../../../types'


export interface IProps { 
    inputs: Array<IFormInput>
    title: string,
    schema?: any,
    submitText: string,
    children?: React.ReactNode,
    onSubmit: (data: any) => void,
    titleColor?: ColorsType,
}


export const LoginForm: React.FC<IProps> = ({ inputs, title, submitText, children, titleColor = 'success', onSubmit, schema }: IProps) => {
    let formOptions: any = {
        criteriaMode: 'all',
    }
    if(schema !== undefined ) formOptions = {...formOptions, resolver: yupResolver(schema) }
    const { register, handleSubmit, watch, formState: { errors } } = useForm(formOptions);
    
    return (
        <div className={s.container}>  
            <div className={s.title}>
                <HeadingStrong content={title} elementColor={titleColor} color='black' />
            </div>
            {children && <div className={s.text}>
                {children}
            </div>}
            <form className={s.form} onSubmit={handleSubmit(onSubmit)} noValidate>
                {inputs.map((input, index) => (
                    <InputGroup {...input} register={register} guidance={input.guidance(errors)} key={index} />
                ))}
                <Button label={submitText} type='submit' />
            </form>
        </div>
    )
}
