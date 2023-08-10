"use client"

import styles from './page.module.css'
import { FormEvent, useState } from 'react'
import { api } from '@/libs/api'

const Page = () => {

    const [loading, setLoading] = useState(false)
    const [passwordField, setPasswordField] = useState('')
    const [passwordField2, setPasswordField2] = useState('')

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(!passwordField || !passwordField2){
            alert('Preencha todos os campos!!!')
            return
        }

        if(passwordField !== passwordField2){
            alert('As senhas não batem')
            return
        }
           
        setLoading(true)
        const result = await api.redefinePassword(passwordField, '123')
        setLoading(false)

        if(result.error){
            alert(result.error)
        } else{
            alert("Senha redefinida")
            setPasswordField('')
            setPasswordField2('')
        }
    }

    return(
        <div className={styles.container}>
            <p>Olá Usuário, defina sua nova senha</p>

            <form className={styles.form} onSubmit={handleSubmit}>
                <input 
                    type="password" 
                    placeholder='Digite sua nova senha'
                    required
                    autoFocus
                    onChange={e => setPasswordField(e.target.value)}
                    value={passwordField}
                    disabled={loading}
                />
                <input 
                    type="password" 
                    placeholder='Confirme sua nova senha'
                    required
                    autoFocus
                    onChange={e => setPasswordField2(e.target.value)}
                    value={passwordField2}
                    disabled={loading}
                />

                <button 
                    type='submit'
                    disabled={loading}
                >
                        {loading ? 'Carregando...' : 'Definir nova senha'}
                </button>

            </form>
        </div>
    )
}

export default Page