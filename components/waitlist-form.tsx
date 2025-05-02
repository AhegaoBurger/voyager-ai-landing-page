"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function WaitlistForm() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Reset form
    setEmail("")
    setIsSubmitting(false)

    // You would typically send this to your API
    console.log("Submitted email:", email)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="relative">
        <Input
          type="email"
          placeholder="Your mail address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full bg-gray-900/50 border-gray-800 rounded-full py-6 px-4 text-white placeholder:text-gray-500"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-white hover:bg-gray-200 text-black font-medium py-6 rounded-full"
      >
        {isSubmitting ? "Joining..." : "Join waitlist"}
      </Button>
    </form>
  )
}
