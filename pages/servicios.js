import Head from "next/head";

export default function Servicios() {
  return (
    <>
      <Head>
        <title>Servicios Veterinarios - Patita Feliz</title>
        <meta 
          name="description" 
          content="Consultas, vacunas, cirugías, baño y peluquería para tus mascotas." 
        />
        <meta property="og:title" content="Servicios Veterinarios" />
        <meta 
          property="og:description" 
          content="Ofrecemos atención integral para tu mascota." 
        />
        <meta property="og:image" content="/images/servicios.jpg" />
      </Head>

      <main>
        <h1>Servicios Veterinarios</h1>
        <ul>
          <li>Consultas generales</li>
          <li>Vacunas</li>
          <li>Cirugías</li>
          <li>Baño y peluquería</li>
        </ul>
      </main>
    </>
  );
}
