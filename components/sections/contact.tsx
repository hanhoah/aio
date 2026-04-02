"use client"

import React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Der Name muss mindestens 2 Zeichen lang sein.",
  }),
  email: z.string().email({
    message: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
  }),
  message: z.string().min(10, {
    message: "Die Nachricht muss mindestens 10 Zeichen lang sein.",
  }),
})

type FormValues = z.infer<typeof formSchema>

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  })

  const [submitError, setSubmitError] = React.useState<string | null>(null)

  const onSubmit = async (data: FormValues) => {
    try {
      setSubmitError(null)

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      const responseData = await response.json()

      if (!response.ok) {
        throw new Error(
          responseData.error || "Ein Fehler ist aufgetreten beim Senden der Nachricht."
        )
      }

      reset()
    } catch (error) {
      console.error("Fehler beim Absenden des Formulars:", error)
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Ein unbekannter Fehler ist aufgetreten. Bitte kontaktieren Sie mich direkt per E-Mail an info@aio-consulting.de."
      )
    }
  }

  return (
    <section id="kontakt" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="mb-3 text-sm font-mono text-blue-600 tracking-wider uppercase">
            Kontakt
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Sprechen wir über Ihr Projekt
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Schreiben Sie mir kurz, was Sie beschäftigt — ich antworte innerhalb von{" "}
            <span className="font-semibold text-slate-800">24 Stunden</span> mit einer konkreten Einschätzung.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-md border border-slate-100">
          {isSubmitSuccessful ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold font-display text-slate-900 mb-4">
                Nachricht erhalten!
              </h3>
              <p className="text-slate-600 mb-6">
                Ich habe Ihre Anfrage erhalten und melde mich zeitnah — in der Regel innerhalb von 24 Stunden.
              </p>
              <p className="text-slate-500 text-sm mb-6">
                Falls Sie nichts hören, erreichen Sie mich direkt unter{" "}
                <span className="font-medium text-slate-700">info@aio-consulting.de</span>
              </p>
              <Button
                onClick={() => reset({}, { keepValues: false })}
                variant="outline"
              >
                Neues Formular
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Ihr Name"
                  {...register("name")}
                />
                {errors.name && (
                  <p className="text-sm text-red-500">{errors.name.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">E-Mail</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="ihre-email@beispiel.de"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Nachricht</Label>
                <Textarea
                  id="message"
                  placeholder="Was soll automatisiert werden? Welches Problem haben Sie?"
                  rows={5}
                  {...register("message")}
                />
                {errors.message && (
                  <p className="text-sm text-red-500">{errors.message.message}</p>
                )}
              </div>

              {submitError && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-md text-red-600 text-sm">
                  {submitError}
                </div>
              )}

              <Button
                type="submit"
                className="w-full font-semibold bg-blue-600 hover:bg-blue-500"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default Contact
