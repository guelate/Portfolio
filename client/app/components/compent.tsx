import Image from 'next/image'

export default function Components() {
    return (
      <div>
        <Image
          src="https://github.com/guelate/Portfolio/blob/main/client/public/iconeVsc.png"
          alt="Description de l'image"
          width={50} // La largeur souhaitée de l'image
          height={50} // La hauteur souhaitée de l'image
          unoptimized // Supprimez cette ligne si vous souhaitez activer l'optimisation
        />
      </div>
    )
  }

//   src="https://portfoliokillian.vercel.app/icons8-code-studio-visuel-2019-48.png"
