import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { PhoneIcon, MapIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
type Props = {};

export default function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:lillaknt@gmail.com?subject=${formData.subject}&body=${formData.message}`;
  };

  return (
    <div className="sectionDiv md:text-left md:flex-row max-w-7xl">
      <h3 className="sectionTitle">Contact</h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I get just what you need -{" "}
          <span className=" underline decoration-turqAccent">
            Let&apos;s talk
          </span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5">
            {" "}
            <PhoneIcon className="text-turqAccent h-7 w-7 animate-pulse" />
            <p className="">+111111</p>
          </div>
          <div className="flex items-center space-x-5">
            {" "}
            <MapIcon className="text-turqAccent h-7 w-7 animate-pulse" />
            <p className="">Aarhus C</p>
          </div>

          <div className="flex items-center space-x-5">
            <EnvelopeIcon className="text-turqAccent h-7 w-7 animate-pulse" />
            <p className="">lillaknt@gmail.com</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col  space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          ></textarea>
          <button type="submit" className="contactInput font-bold">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
