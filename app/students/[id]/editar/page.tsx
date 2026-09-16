import { notFound } from "next/navigation"
import { AppShell } from "@/components/app-shell"
import { AlumnoForm } from "@/components/alumnos/alumno-form"
import { getAlumno } from "@/lib/alumnos-data"

export default async function EditarAlumnoPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const alumno = getAlumno(id)
  if (!alumno) notFound()

  return (
    <AppShell title="Alumnos">
      <AlumnoForm alumno={alumno} />
    </AppShell>
  )
}
