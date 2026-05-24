import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
    BadgeCheckIcon,
    CalendarIcon,
  UsersIcon
} from "lucide-react";

const features = [
  {
    icon: <UsersIcon size={32} />,
    description: "Tecnici sempre al posto giusto."
  },{
    icon: <CalendarIcon size={32} />,
    description: "Calendario e disponibilità live."
  },{
    icon: <BadgeCheckIcon size={32} />,
    description: "Assegnazioni rapide e senza errori."
  }
]

export default function Home() {

  return (
    <main className="flex min-h-[calc(100vh-70px)] flex-col items-center justify-between">
      <div className="relative h-[calc(100vh-70px)] overflow-hidden">
        <Image
          className="object-cover object-center min-h-[calc(100vh-70px)] min-w-screen"
          src="https://ipzctbvfmsfdjaohawys.supabase.co/storage/v1/object/public/images/sfondo.png"
          alt="sfondo"
          width={1536}
          height={1024}
          priority
        />
        <div className="absolute inset-0 flex flex-col text-white font-bold h-full justify-center max-w-2xl p-8">
          <h3 className="text-2xl md:text-6xl mb-8">Organizza. <br />Assegna.<br /><span className="text-indigo-600">Fai suonare</span> lo show.</h3>
          <p className="md:text-2xl">
            StageFlow ti aiuta a gestire i tuoi eventi live in modo semplice: tecnici, disponibilità, assegnazioni e tutto
            sotto controllo.
          </p>
          <Button className="mt-8 w-max p-6 text-xl bg-indigo-700 hover:bg-indigo-700 text-white">
            Inizia gratis
          </Button>
          <div className="grid grid-cols-3 text-xs md:text-sm gap-6 mt-12">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col">
                {feature.icon}
                <p className="mt-4">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
