import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        {/* Google Search Console Verification */}
        <meta 
          name="google-site-verification" 
          content="spIcTVeKysmp5qsJsOZd3X_J_q2wap4EXoMmBx28b5M" 
        />

        {/* SEO Básico */}
        <title>Veterinaria Patita Feliz - Inicio</title>
        <meta 
          name="description" 
          content="Veterinaria Patita Feliz ofrece servicios de cuidado para mascotas: consultas, vacunas, cirugías y más." 
        />
        <meta 
          name="keywords" 
          content="veterinaria, mascotas, perros, gatos, salud animal" 
        />

        {/* Open Graph para redes sociales */}
        <meta property="og:title" content="Veterinaria Patita Feliz" />
        <meta 
          property="og:description" 
          content="Cuidamos la salud de tus mascotas con amor y experiencia." 
        />
        <meta property="og:image" content="/images/portada.jpg" />
        <meta property="og:type" content="website" />

        {/* Para evitar errores en redes sociales */}
        <meta property="og:url" content="https://veterinaria-seo.vercel.app/" />
      </Head>

      <main>
        <h1>Veterinaria Patita Feliz</h1>
        <p>Cuidamos la salud de tus mascotas con amor y profesionalismo.</p>
      </main>
    </>
  );
}
