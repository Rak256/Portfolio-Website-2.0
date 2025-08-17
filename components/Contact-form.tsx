'use client'
import * as React from 'react'
import { Button } from "@/components/ui/button"
import { useGoogleReCaptcha } from "react-google-recaptcha-v3"

export default function Contact(){
   const { executeRecaptcha } = useGoogleReCaptcha();
    return(
    <div>
        <h3 className="text-xl font-bold mb-4">Send a Message</h3>
        <form
              className="space-y-4"
              onSubmit={async (e) => {
                e.preventDefault();

                console.log("on submit working");
                
                if (!executeRecaptcha) {
                  console.log("failure to execute recaptcha")
                  return;
                }

                const RecaptchaToken = await executeRecaptcha('contact');

                const server_recap_res = await fetch('/api/Recaptcha', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ token: RecaptchaToken }),
                })

                type RecaptchaResponse = {
                  success: boolean;
                  score: number;
                };
                const data: RecaptchaResponse = await server_recap_res.json();

                 if (data?.success === true) {
                  console.log(`Success with score: ${data?.score}`);
                } else {
                  console.log(`Failure with score: ${data?.score}`);
                }

                const form = e.target as HTMLFormElement;
                const name = (form.elements.namedItem("name") as HTMLInputElement).value;
                const email = (form.elements.namedItem("email") as HTMLInputElement).value;
                const subject = (form.elements.namedItem("subject") as HTMLInputElement).value;
                const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
                const body = {
                  name,
                  subject,
                  email,
                  message
                };

                const server_res = await fetch('/api/contact', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(body),
                });

                if (server_res.ok) {
                  alert('Message sent successfully!');
                  form.reset();
                } else {
                  alert('Something went wrong.');
                }
              }}
              >
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Name
                      </label>
                      <input
                        id="name"
                        className="w-full rounded-md border border-border bg-background px-3 py-2 text-foreground focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                        placeholder="Your name"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email
                      </label>
                      <input
                        id="name"
                        className="w-full rounded-md border border-border bg-background px-3 py-2 text-foreground focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                        placeholder="Your email"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-1">
                        Subject
                      </label>
                      <input
                        id="subject"
                        className="w-full rounded-md border border-border bg-background px-3 py-2 text-foreground focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                        placeholder="How can I help you?"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full rounded-md border border-border bg-background px-3 py-2 text-foreground focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                        placeholder="Your message..."
                        required
                      ></textarea>
                    </div>

                    <Button className="w-full bg-cyan-600 hover:bg-cyan-700">Send Message</Button>
                  </form>
                </div>
    )
}