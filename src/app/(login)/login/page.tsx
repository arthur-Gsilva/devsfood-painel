"use client"

import Link from 'next/link'
import styles from './page.module.css'
import { FormEvent, useState } from 'react'
import { api } from '@/libs/api'

const Page = () => {

    const [loading, setLoading] = useState(false)
    const [emailField, setEmailField] = useState('')
    const [passwordField, setPasswordField] = useState('')

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(!emailField || !passwordField){
            alert('Preencha todos os campos!!!')
            return
        }
           
        setLoading(true)
        const result = await api.login(emailField, passwordField)
        setLoading(false)

        if(result.error){
            alert(result.error)
        }
    }

    return(
        <div className={styles.container}>
            <p>Digite seus dados para acessar o painel administrativo do estabelecimento</p>

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
                <input 
                    type="password" 
                    placeholder='Digite sua senha'
                    required
                    onChange={e => setPasswordField(e.target.value)}
                    value={passwordField}
                    disabled={loading}
                />

                <button 
                    type='submit'
                    disabled={loading}
                >
                        {loading ? 'Carregando...' : 'Entrar'}
                </button>

                <Link href={'/login/forgot'}>Esqueceu a sua senha?</Link>
            </form>
        </div>
    )
}

export default Page