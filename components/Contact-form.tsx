'use client'
import * as React from 'react'
import { Button } from "@/components/ui/button"

export default function Contact(){
    return(
    <div>
        <h3 className="text-xl font-bold mb-4">Send a Message</h3>
        <form
              className="space-y-4"
              onSubmit={async (e) => {
                e.preventDefault();

                const form = e.target as HTMLFormElement;
                const name = (form.elements.namedItem("name") as HTMLInputElement).value;
                const subject = (form.elements.namedItem("subject") as HTMLInputElement).value;
                const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
                const data = {
                  name,
                  subject,
                  message
                };

                const server_res = await fetch('pages/api/contact', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(data),
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