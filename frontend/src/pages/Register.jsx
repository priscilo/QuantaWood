export default function Register() {
    const [form, setForm] = useState({ name: '', email: '', password: '' })

    const handleChange = (field) => (value) => {
        setForm({ ...form, [field]: value })
    }

    const handleRegister = (e) => {
        e.preventDefault()
        // TODO: Validación y envío
        console.log('Registro:', form)
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-emerald-50 text-gray-800">
            <form onSubmit={handleRegister} className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-emerald-700">Crear cuenta</h2>
                <FormInput label="Nombre completo" value={form.name} onChange={handleChange('name')} />
                <FormInput label="Correo electrónico" type="email" value={form.email} onChange={handleChange('email')} />
                <FormInput label="Contraseña" type="password" value={form.password} onChange={handleChange('password')} />
                <Button type="submit" text="Registrarse" />
            </form>
        </div>
    )
}