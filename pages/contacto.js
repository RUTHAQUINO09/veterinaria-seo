import Head from "next/head";

export default function Contacto() {
  return (
    <>
      <Head>
        <title>Contacto - Veterinaria Patita Feliz</title>
        <meta 
          name="description" 
          content="Contáctanos para reservar una cita o pedir información sobre nuestros servicios veterinarios." 
        />
        <meta property="og:title" content="Contacto Veterinaria" />
        <meta 
          property="og:description" 
          content="Estamos aquí para ayudarte y cuidar a tu mascota." 
        />
        <meta property="og:image" content="/images/contacto.jpg" />
      </Head>

      <main>
        <h1>Contacto</h1>
        <p>Teléfono: 999-888-777</p>
        <p>Dirección: Av. Las Mascotas 123</p>
      </main>
    </>
  );
}
