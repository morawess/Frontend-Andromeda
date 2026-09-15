import { notFound } from "next/navigation"
import { AppShell } from "@/components/app-shell"
import { AlumnoProfile } from "@/components/alumnos/alumno-profile"
import { getAlumno } from "@/lib/alumnos-data"

export default async function AlumnoPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const alumno = getAlumno(id)
  if (!alumno) notFound()

  return (
    <AppShell title="Alumnos">
      <AlumnoProfile alumno={alumno} />
    </AppShell>
  )
}
