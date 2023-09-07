import React, { useMemo } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { loginWithCode } from '../../store/auth/thunks';
import "./InsertCode.scss";

export const InsertCode = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();

    const login = (data) => {
        console.log(data);
        dispatch(loginWithCode(data.code));
    }
    const { status, errorMessage } = useSelector(state => state.auth);
    const isAuthenticating = useMemo(() => status === 'checking', [status]);
    return (
        <main>
           

            <form className='form' onSubmit={handleSubmit(login)}>
                <h1>Ingrese su código de verificación</h1>
                <label>Código de verificación:</label>
                <input
                    type="text"
                    placeholder="Ingrese su código"
                    {...register("code")}
                />
                <button
                className='button' 
                disabled = {isAuthenticating}
                type="submit"
                >
                    Confirmar código
                </button>
            </form>
        </main>
    )
}
