import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Send } from "lucide-react";
import InputField from "./InputField";
import TextAreaField from "./TextAreaField";
import { formFields } from "../contact_data/formFields";
import { contactSchema } from "../contact_data/validationSchema";

interface FormData {
  Name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(contactSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Form Submitted ✅", data);
    reset();
  };

  return (
    <div className="bg-white rounded-2xl sm:shadow-lg p-2 sm:p-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#034E72] mb-2">
        Send us a Message
      </h2>
      <p className="text-gray-600 mb-8">
        Fill out the form below and we'll get back to you as soon as possible.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {formFields.map((field) =>
          field.type === "textarea" ? (
            <TextAreaField
              key={field.id}
              id={field.id}
              name={field.name}
              label={field.label}
              placeholder={field.placeholder}
              icon={field.icon}
              register={register}
              error={errors[field.name as keyof FormData]}
            />
          ) : (
            <InputField
              key={field.id}
              id={field.id}
              name={field.name}
              type={field.type}
              label={field.label}
              placeholder={field.placeholder}
              icon={field.icon}
              register={register}
              error={errors[field.name as keyof FormData]}
            />
          )
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#00AEFF] text-white py-4 px-6 rounded-lg font-semibold hover:bg-[#0099DD] 
                     focus:ring-2 focus:ring-[#00AEFF] focus:ring-offset-2 transition-all 
                     disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              <span>Sending...</span>
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              <span>Send Message</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
