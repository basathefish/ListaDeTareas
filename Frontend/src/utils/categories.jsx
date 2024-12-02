import {
  AcademicCapIcon,
  BriefcaseIcon,
  MusicalNoteIcon,
  FilmIcon,
  HomeIcon,
  HeartIcon,
  LifebuoyIcon,
  UserGroupIcon,
  PaintBrushIcon,
} from "@heroicons/react/24/solid";

export const categories = [
  {
    id: 1,
    name: "Trabajo",
    color: "work",
    icon: <BriefcaseIcon className="h-5 w-5" />,
  },
  {
    id: 2,
    name: "Universidad",
    color: "university",
    icon: <AcademicCapIcon className="w-5 h-5" />,
  },
  {
    id: 3,
    name: "Deportes",
    color: "sport",
    icon: <LifebuoyIcon className="h-5 w-5" />,
  },
  {
    id: 4,
    name: "Diseño",
    color: "design",
    icon: <PaintBrushIcon className="h-5 w-5" />,
  },
  {
    id: 5,
    name: "Social",
    color: "social",
    icon: <UserGroupIcon className="h-5 w-5" />,
  },
  {
    id: 6,
    name: "Música",
    color: "music",
    icon: <MusicalNoteIcon className="h-5 w-5" />,
  },
  {
    id: 7,
    name: "Salud",
    color: "health",
    icon: <HeartIcon className="h-5 w-5" />,
  },
  {
    id: 8,
    name: "Películas",
    color: "movie",
    icon: <FilmIcon className="h-5 w-5" />,
  },
  {
    id: 9,
    name: "Hogar",
    color: "home",
    icon: <HomeIcon className="h-5 w-5" />,
  },
];
