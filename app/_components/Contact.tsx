"use client";

import React, { FormEvent } from "react";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "08a51ff1-5711-4684-a77a-b8fa65219ea9",
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      }),
    });

    if (response.ok) {
      toast({ description: "Your message has been sent." });
    } else {
      toast({
        description:
          "There was an error sending your message. Please try again.",
      });
    }
  }

  return (
    <div className="mt-24 flex justify-center bg-[#070707] py-10">
      <div className="md:w-3/4 w-10/12 flex flex-col md:flex-row gap-10">
        {/* Form Section */}
        <form
          className="w-full md:w-1/2 text-white flex flex-col gap-2"
          onSubmit={handleSubmit}
        >
          <h1 className="text-2xl font-semibold mb-2">
            Ready to Build Something Amazing?
          </h1>
          <p className="text-gray-300 mb-4">
            Whether you have a project in mind, a question, or just want to say
            hi, we'd love to hear from you.
          </p>

          <input
            className="glass placeholder:text-gray-500 px-4 py-3 outline-none rounded"
            type="text"
            name="name"
            required
            placeholder="Your name"
          />
          <input
            className="glass placeholder:text-gray-500 px-4 py-3 outline-none rounded"
            type="email"
            name="email"
            required
            placeholder="email@example.com"
          />
          <textarea
            className="glass placeholder:text-gray-500 px-4 py-3 outline-none rounded"
            name="message"
            required
            rows={5}
            placeholder="Enter Message"
          ></textarea>

          <button
            className="primary-bg text-black rounded-[0.45rem] font-medium px-4 py-3 hover:bg-blue-700"
            type="submit"
          >
            <div className="flex justify-center gap-3 items-center">
              <h1>Send Message</h1>
              <Send size={20} />
            </div>
          </button>
        </form>

        {/* Additional Contact Info */}
        <div className="w-full md:w-1/2 flex flex-col gap-4 text-gray-300">
          <h1 className="text-2xl font-semibold">Additional Contact Info</h1>
          <div>
            <h2 className="font-medium">Phone:</h2>
            <p>+91 9372611471 / +91 9321145169</p>
          </div>
          <div>
            <h2 className="font-medium">Location:</h2>
            <p>Navi Mumbai, India</p>
          </div>
          {/* Optional: You can add email, social links, or map here */}
        </div>
      </div>
    </div>
  );
}
