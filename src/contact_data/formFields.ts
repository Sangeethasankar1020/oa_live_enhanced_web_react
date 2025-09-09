import { User, Mail, Phone, MessageSquare } from "lucide-react";

export const formFields = [
  {
    id: "Name",
    name: "Name",
    type: "text",
    label: "Name *",
    placeholder: "Enter your full name",
    icon: User,
    required: true,
  },
  {
    id: "email",
    name: "email",
    type: "email",
    label: "Email *",
    placeholder: "Enter your email ",
    icon: Mail,
    required: true,
  },
  {
    id: "phone",
    name: "phone",
    type: "tel",
    label: "Mobile Number",
    placeholder: "Enter your mobile number",
    icon: Phone,
    required: true,
  },
  {
    id: "subject",
    name: "subject",
    type: "text",
    label: "Subject *",
    placeholder: "Enter the subject of your inquiry",
    required: true,
  },
  {
    id: "message",
    name: "message",
    type: "textarea",
    label: "Message *",
    placeholder: "Enter your message here...",
    icon: MessageSquare,
    required: true,
  },
];
