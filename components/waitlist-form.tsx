"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState(""); // To show success/error messages

  // --- IMPORTANT: Replace with your actual Formspree endpoint URL ---
  const formspreeEndpoint = "https://formspree.io/f/mrbqppoq";
  // ---

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default HTML form submission
    setIsSubmitting(true);
    setMessage(""); // Clear previous messages

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json", // Important for Formspree AJAX
          "Content-Type": "application/json", // Sending data as JSON
        },
        // Formspree expects the field names as keys in the JSON body
        // Ensure your input's 'name' attribute matches the key if not using JSON,
        // but with JSON, the key here ('email') is what matters most.
        body: JSON.stringify({ email: email }),
      });

      if (response.ok) {
        // Successful submission
        setMessage("Success! You've joined the waitlist.");
        setEmail(""); // Clear the input field
      } else {
        // Handle server-side errors from Formspree
        // You might want to parse response.json() for more specific errors
        const data = await response.json();
        if (data.errors) {
          // Example: Show the first error message from Formspree
          setMessage(
            `Error: ${data.errors.map((error: any) => error.message).join(", ")}`,
          );
        } else {
          setMessage("Oops! Something went wrong. Please try again.");
        }
        console.error("Formspree submission failed:", data);
      }
    } catch (error) {
      // Handle network errors or other unexpected issues
      setMessage("Network error. Please check your connection and try again.");
      console.error("Error submitting form:", error);
    } finally {
      // Ensure the submitting state is reset regardless of outcome
      setIsSubmitting(false);
    }
  };

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

      {/* Display Success/Error Messages */}
      {message && (
        <p
          className={`text-sm ${message.startsWith("Success") ? "text-green-400" : "text-red-400"}`}
        >
          {message}
        </p>
      )}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-white hover:bg-gray-200 text-black font-medium py-6 rounded-full"
      >
        {isSubmitting ? "Joining..." : "Join waitlist"}
      </Button>
    </form>
  );
}
