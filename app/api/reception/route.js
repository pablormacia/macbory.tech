/* import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

function generarNumeroOrden(id) {
  return `MAC-${id.toString().padStart(5, "0")}`
}

export async function POST(req) {
  const data = await req.json()

  try {
    const nuevaOrden = await prisma.ordenes_recepcion.create({
      data: {
        nombre_apellido: data.nombre,
        celular: data.celular,
        email: data.email,
        tipo_equipo: data.tipo,
        descripcion: data.descripcion,
        pin_contrasena: data.pin,
        patron: JSON.stringify(data.patron),
        numero_orden: "", // temporalmente vacío
      },
    })

    const numeroOrden = generarNumeroOrden(nuevaOrden.id)

    await prisma.ordenes_recepcion.update({
      where: { id: nuevaOrden.id },
      data: { numero_orden: numeroOrden },
    })

    return NextResponse.json({ numeroOrden })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: "Error al guardar" }, { status: 500 })
  }
} */