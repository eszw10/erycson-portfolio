import { useState } from "react";
import toast from "react-hot-toast";
import { FaPaperPlane } from "react-icons/fa6";
import Button from "../ui/Button";
import SpinnerMini from "../ui/SpinnerMini";

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const formData = new FormData(event.target as HTMLFormElement);

    formData.append("access_key", "6b441304-d52b-43b2-a1c0-1a041cac7943");

    const response = await fetch("https://api.web3forms.com/submi", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      toast.success("The Message has been sent successfully!");
      (event.target as HTMLFormElement).reset();
    } else {
      console.log("Error", data);
      toast.error(
        "There is an error sending the message, please try again later.."
      );
      throw new Error(data.message);
    }
    setIsLoading(false);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="border bordes-theme shadow-xl flex flex-col gap-4 rounded-lg p-8 w-full lg:flex-1/2 h-[600px]"
    >
      <p className="font-semibold text-2xl underline decoration-primary  underline-offset-8 mb-2">
        Send Me a Message
      </p>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Name</label>
          <input
            name="name"
            type="text"
            placeholder="John Doe"
            className="p-2 rounded-md border bordes-theme"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            placeholder="example@.com"
            className="p-2 rounded-md border bordes-theme"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="subject">Subject</label>
          <input
            name="subject"
            type="text"
            placeholder="Subject"
            className="p-2 rounded-md border bordes-theme"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="message">Message</label>
          <textarea
            placeholder="Message"
            name="message"
            className="p-2 rounded-md border bordes-theme h-full resize-none"
            rows={3}
            required
          ></textarea>
        </div>
      </div>
      <Button
        variant="primary"
        disabled={isLoading}
        className=" mt-auto flex items-center justify-center gap-3 text-center"
      >
        <span>{isLoading ? "Sending..." : "Send a Message"}</span>
        {isLoading ? <SpinnerMini /> : <FaPaperPlane />}
      </Button>
    </form>
  );
}
