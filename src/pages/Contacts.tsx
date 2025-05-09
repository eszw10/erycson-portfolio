import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";

export default function Contacts() {
  return (
    <section className="py-16 px-10 2xl:px-0">
      <div className="flex flex-col gap-6 text-center items-center font-medium mb-10">
        <h2 className=" xl:text-5xl decoration-primary underline-offset-8 underline lg:text-4xl text-3xl">
          Let's Connect
        </h2>
        <p className="text-blanco/60 dark:text-blanco-dark/60 lg:max-w-2xl max-w-sm ">
          For inquiries about potential projects or collaborations, please use
          the contact form below. I look forward to discussing how I can
          contribute to your next venture.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row xl:items-center gap-16">
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  );
}
