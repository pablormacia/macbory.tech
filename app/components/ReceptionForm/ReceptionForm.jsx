"use client"

import { useState } from "react"
import { PatternLock } from "react-canvas-pattern-lock"

function ReceptionForm() {
  const [form, setForm] = useState({
    nombre: "",
    celular: "",
    email: "",
    tipo: "Celular",
    descripcion: "",
    pin: "",
    patron: "", // cadena tipo '01358' por ejemplo
  })

  const [mensaje, setMensaje] = useState("")
  const [enviando, setEnviando] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setEnviando(true)
    setMensaje("")

    const res = await fetch("/api/reception", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })

    const data = await res.json()
    if (res.ok) {
      setMensaje(`Orden registrada: ${data.numeroOrden}`)
      window.open(`/api/orden/${data.numeroOrden}/pdf`, "_blank")
      setForm({
        nombre: "",
        celular: "",
        email: "",
        tipo: "Celular",
        descripcion: "",
        pin: "",
        patron: "",
      })
    } else {
      setMensaje("Error al registrar la orden")
    }
    setEnviando(false)
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-xl mx-auto space-y-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold">Recepción de equipo</h2>

      <input
        type="text"
        placeholder="Nombre y apellido"
        className="w-full border p-2 rounded"
        value={form.nombre}
        onChange={(e) => setForm({ ...form, nombre: e.target.value })}
        required
      />

      <input
        type="tel"
        placeholder="Celular"
        className="w-full border p-2 rounded"
        value={form.celular}
        onChange={(e) => setForm({ ...form, celular: e.target.value })}
        required
      />

      <input
        type="email"
        placeholder="Email"
        className="w-full border p-2 rounded"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <select
        className="w-full border p-2 rounded"
        value={form.tipo}
        onChange={(e) => setForm({ ...form, tipo: e.target.value })}
      >
        <option value="Celular">Celular</option>
        <option value="PC">PC</option>
        <option value="Notebook">Notebook</option>
        <option value="Otro">Otro</option>
      </select>

      <textarea
        placeholder="Descripción del problema"
        className="w-full border p-2 rounded"
        value={form.descripcion}
        onChange={(e) => setForm({ ...form, descripcion: e.target.value })}
        required
      />

      <input
        type="text"
        placeholder="PIN o contraseña (si corresponde)"
        className="w-full border p-2 rounded"
        value={form.pin}
        onChange={(e) => setForm({ ...form, pin: e.target.value })}
      />

      <div>
        <p className="mb-2">Dibuja el patrón de desbloqueo (opcional)</p>
        {/* <PatternLock
          width={300}
          size={3}
          onChange={(pattern) => {
            const patternString = pattern.join("")
            setForm({ ...form, patron: patternString })
          }}
        /> */}
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        disabled={enviando}
      >
        {enviando ? "Enviando..." : "Enviar"}
      </button>

      {mensaje && <p className="text-green-700 font-semibold">{mensaje}</p>}
    </form>
  )
}


export default ReceptionForm