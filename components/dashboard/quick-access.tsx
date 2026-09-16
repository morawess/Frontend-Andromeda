import Link from "next/link"
import { UserPlus, ClipboardList, CreditCard, Wallet } from "lucide-react"
import { Card } from "@/components/ui/card"

const actions = [
  { label: "Nuevo alumno", href: "/students", icon: UserPlus },
  { label: "Nueva inscripción", href: "/enrollments", icon: ClipboardList },
  { label: "Registrar pago", href: "/payments", icon: CreditCard },
  { label: "Movimiento de caja", href: "/cash_box", icon: Wallet },
]

export function QuickAccess() {
  return (
    <Card className="p-5">
      <h2 className="text-sm font-semibold text-foreground">Accesos rápidos</h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {actions.map((action) => {
          const Icon = action.icon
          return (
            <Link
              key={action.label}
              href={action.href}
              className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-primary/5"
            >
              <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="size-4.5" aria-hidden="true" />
              </span>
              {action.label}
            </Link>
          )
        })}
      </div>
    </Card>
  )
}
