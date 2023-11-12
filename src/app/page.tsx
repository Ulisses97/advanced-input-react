"use client";

import { Input } from "@/components/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(3, "Por favor, informe um nome válido"),
  email: z
    .string()
    .min(1, "Por favor, informe um email válido")
    .email("Esse não é um email válido"),
});

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: zodResolver(schema),
  });

  const [isSubmit, setIsSubmit] = useState(false);

  return (
    <main>
      <section className=" w-full bg-gray-100 h-screen flex items-center justify-center">
        <div
          className={`transition-all duration-200 ease-in-out min-w-[500px] min-h-[400px] ${
            isSubmit ? "bg-[#3B3BF4]" : "bg-white"
          } p-6 rounded-lg flex flex-col justify-between gap-3`}
        >
          {isSubmit ? (
            <div className="mt-auto mb-auto ">
              <h2 className="text-6xl text-white">Obrigado</h2>
              <h3 className="text-white text-xl mt-6">
                Entraremos em contato em breve!
              </h3>
            </div>
          ) : (
            <>
              <h1 className="text-2xl">Entre em contato</h1>
              <form
                className="flex flex-col flex-1"
                onSubmit={handleSubmit(() => setIsSubmit(true))}
              >
                <div className=" mt-auto flex flex-col gap-8">
                  <Input
                    {...register("name")}
                    name="name"
                    type="text"
                    placeholder="Entre com seu nome"
                    label="Nome"
                    helperText={errors.name?.message}
                  />
                  <Input
                    {...register("email")}
                    name="email"
                    type="email"
                    placeholder="Entre com seu email"
                    label="Email"
                    helperText={errors.email?.message}
                  />
                </div>
                <button
                  className="mt-auto bg-[#3B3BF4] text-white p-2 rounded-md"
                  type="submit"
                >
                  Enviar
                </button>
              </form>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
