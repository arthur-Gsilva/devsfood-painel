"use client"

import styles from './page.module.css'
import { FormEvent, useState } from 'react'
import { api } from '@/libs/api'

const Page = () => {

    const [loading, setLoading] = useState(false)
    const [emailField, setEmailField] = useState('')

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(!emailField){
            alert('Preencha o campo de email!!!')
            return
        }
           
        setLoading(true)
        const result = await api.forgotPassword(emailField)
        setLoading(false)

        if(result.error){
            alert(result.error)
        } else{
            alert("Enviamos em email para recuperação de senha")
        }
    }

    return(
        <div className={styles.container}>
            <p>Deseja recuperar sua senha?</p>

            <form className={styles.form} onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder='Digite seu email'
                    required
                    autoFocus
                    onChange={e => setEmailField(e.target.value)}
                    value={emailField}
                    disabled={loading}
                />

                <button 
                    type='submit'
                    disabled={loading}
                >
                        {loading ? 'Carregando...' : 'Recuperar a senha'}
                </button>

            </form>
        </div>
    )
}

export default Page