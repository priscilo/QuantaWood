import { useState } from 'react'
import Button from '@/components/Button/Button'
import FormInput from '@/components/FormInput/FormInput'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = (e) => {
        e.preventDefault()
        // TODO: Validación y envío
        console.log('Login:', { email, password })
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-emerald-50 text-gray-800">
            <form onSubmit={handleLogin} className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-emerald-700">Iniciar sesión</h2>
                <FormInput label="Correo electrónico" type="email" value={email} onChange={setEmail} />
                <FormInput label="Contraseña" type="password" value={password} onChange={setPassword} />
                <Button type="submit" text="Entrar" />
            </form>
        </div>
    )
}