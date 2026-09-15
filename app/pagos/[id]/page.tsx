import { notFound } from "next/navigation"
import { AppShell } from "@/components/app-shell"
import { HistorialAlumno } from "@/components/pagos/historial-alumno"
import { getAlumno } from "@/lib/alumnos-data"

export default async function HistorialAlumnoPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const alumno = getAlumno(id)
  if (!alumno) notFound()

  return (
    <AppShell title="Pagos">
      <HistorialAlumno alumno={alumno} />
    </AppShell>
  )
}
