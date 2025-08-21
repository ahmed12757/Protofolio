import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Contact = () => {
  const form = useRef();

  const validationSchema = Yup.object({
    from_name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .required("Full name is required"),
    from_email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    from_phone: Yup.string()
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(8, "Must be at least 8 digits")
      .max(15, "Must be 15 digits or less")
      .required("Mobile number is required"),
    from_subject: Yup.string()
      .min(5, "Subject must be at least 5 characters")
      .required("Subject is required"),
    message: Yup.string()
      .min(10, "Message must be at least 10 characters")
      .required("Message is required"),
  });

  const inputBase =
    "bg-transparent border-2 border-white/60 text-white rounded px-3 py-2 text-sm focus:outline-none focus:border-white placeholder-white/60";

  const sendEmail = (values, { resetForm }) => {
    emailjs
      .sendForm("service_7k6jzc9", "template_16gs1ic", form.current, {
        publicKey: "c0bNjxFfLOEmLXRav",
      })
      .then(
        () => {
          toast.success("Message sent! I'll get back to you soon 😊");
          resetForm();
        },
        (error) => {
          toast.error(
            "Oops! Something went wrong. Please try again later 😞",
            error.text
          );
        }
      );
  };

  return (
    <div
      id="contact"
      className="relative w-full flex flex-col items-center py-12 px-4 text-white pt-24 bg-black"
    >
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-white/20 rounded-full blur-3xl z-0"></div>
      <h1 className="text-3xl font-semibold text-white/90 mb-16">
        Contact{" "}
        <span className="italic text-white/70 tracking-[-0.1em] font-normal">
          Me!
        </span>
      </h1>

      <Formik
        initialValues={{
          from_name: "",
          from_email: "",
          from_phone: "",
          from_subject: "",
          message: "",
        }}
        validationSchema={validationSchema}
        onSubmit={sendEmail}
      >
        {({ isSubmitting }) => (
          <Form
            ref={form}
            className="w-full max-w-2xl flex flex-col gap-6 items-center"
          >
            <div className="flex flex-col md:flex-row gap-4 w-full justify-between">
              <div className="w-full relative">
                <motion.div
                  initial={{ x: -200, opacity: 0 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 1 }}
                >
                  <Field
                    type="text"
                    name="from_name"
                    placeholder="Full Name"
                    className={inputBase + " w-full"}
                  />
                  <ErrorMessage
                    name="from_name"
                    component="div"
                    className="text-red-400 text-sm mt-1"
                  />
                </motion.div>
              </div>

              <div className="w-full relative">
                <motion.div
                  initial={{ x: 200, opacity: 0 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 1.5 }}
                >
                  <Field
                    type="email"
                    name="from_email"
                    placeholder="Email Address"
                    className={inputBase + " w-full"}
                  />
                  <ErrorMessage
                    name="from_email"
                    component="div"
                    className="text-red-400 text-sm mt-1"
                  />
                </motion.div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 w-full justify-between">
              <div className="w-full relative">
                <motion.div
                  initial={{ x: -200, opacity: 0 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 1.2 }}
                >
                  <Field
                    type="text"
                    name="from_phone"
                    placeholder="Mobile Number"
                    className={inputBase + " w-full"}
                  />
                  <ErrorMessage
                    name="from_phone"
                    component="div"
                    className="text-red-400 text-sm mt-1"
                  />
                </motion.div>
              </div>

              <div className="w-full relative">
                <motion.div
                  initial={{ x: 200, opacity: 0 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 1.8 }}
                >
                  <Field
                    type="text"
                    name="from_subject"
                    placeholder="Email Subject"
                    className={inputBase + " w-full"}
                  />
                  <ErrorMessage
                    name="from_subject"
                    component="div"
                    className="text-red-400 text-sm mt-1"
                  />
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ x: -300, opacity: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 2 }}
              className="w-full relative"
            >
              <Field
                as="textarea"
                name="message"
                placeholder="Your Message"
                className={inputBase + " h-40 resize-none w-full"}
              />
              <ErrorMessage
                name="message"
                component="div"
                className="text-red-400 text-sm mt-1"
              />
            </motion.div>

            <motion.button
              type="submit"
              className="w-52 h-12 border-2 text-white/60 border-white/60 hover:text-white transition-all duration-300 rounded cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </motion.button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Contact;
