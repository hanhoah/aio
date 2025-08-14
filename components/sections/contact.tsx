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

  const [submitError, setSubmitError] = React.useState<string | null>(null);

  const onSubmit = async (data: FormValues) => {
    try {
      setSubmitError(null);
      
      // Anfrage an API-Route senden
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      // Antwort parsen
      const responseData = await response.json();
      
      if (!response.ok) {
        throw new Error(responseData.error || 'Ein Fehler ist aufgetreten beim Senden der Nachricht.');
      }

      // Erfolgreiche Submission - Form wird zurückgesetzt
      reset();
      
      // Bei Erfolg gibt es keine spezielle Aktion, da das isSubmitSuccessful 
      // automatisch auf true gesetzt wird und die Erfolgsansicht angezeigt wird
    } catch (error) {
      console.error('Fehler beim Absenden des Formulars:', error);
      setSubmitError(
        error instanceof Error 
          ? error.message 
          : 'Ein unbekannter Fehler ist aufgetreten. Bitte kontaktieren Sie uns direkt per E-Mail an info@aio-consulting.de.'
      );
      // Form nicht zurücksetzen, damit der Benutzer es erneut versuchen kann
    }
  }

  return (
    <section id="kontakt" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Kontaktieren Sie uns</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Haben Sie Fragen oder möchten Sie ein Projekt mit uns starten? 
            Wir freuen uns auf Ihre Nachricht!
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
          {isSubmitSuccessful ? (
            <div className="text-center py-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Vielen Dank für Ihre Nachricht!</h3>
              <p className="text-gray-700 mb-6">
                Wir haben Ihre Anfrage erhalten und werden uns zeitnah bei Ihnen melden.
              </p>
              <p className="text-gray-600 text-sm mb-6">
                Falls Sie keine Antwort erhalten, kontaktieren Sie uns bitte direkt unter <span className="font-medium">info@aio-consulting.de</span>
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
                  placeholder="Wie können wir Ihnen helfen?"
                  rows={5}
                  {...register("message")}
                />
                {errors.message && (
                  <p className="text-sm text-red-500">{errors.message.message}</p>
                )}
              </div>

              {submitError && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-md text-red-600 mb-4">
                  {submitError}
                </div>
              )}
              
              <Button 
                type="submit" 
                className="w-full font-semibold"
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