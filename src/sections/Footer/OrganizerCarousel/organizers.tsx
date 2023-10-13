import {
  AllenLuImg,
  DanielLuImg,
  RahulAggarwalImg,
  YashDaniImg,
  RachelXuImg,
  YiNanZhangImg,
  KelvinZhangImg,
  WilburZhangImg,
  AngelaNguyenImg,
  HelenWangImg,
  RebeccaLeeImg,
  ZafinHassanImg,
  JennyChenImg,
  LeoLiImg,
  JenniferLuImg,
  WendiYuImg,
  AlbertLaiImg,
  RohanRavindranImg,
  LeonFattakhovImg,
  AdvaitMaybhate,
  StevenXuImg,
  AlexXieImg,
  HankWuImg,
  JessicaZhangImg,
  OanaBinderImg,
  HongYiChenImg,
  JackieChenImg,
  TailaiWangImg,
  FaizaanMadhaniImg,
  JosephWangImg,
  KevinZhangImg,
  LaurenYoshidaImg,
  GraceGaoImg,
  RachelleDongImg,
  HimaShethImg,
  SaraLongImg,
  CarterWatkinsonImg,
  WinnieSzetoImg,
  JingYiWangImg,
  ElaineCheungImg,
  SerenaPangImg,
  BoyaZhangImg,
  LeonHanImg,
  JenniferTsaiImg,
} from "src/assets/img";

export interface Organizer {
  name: string;
  team:
    | "Design"
    | "Frontend"
    | "Backend"
    | "Infrastructure"
    | "Finance"
    | "Logistics"
    | "Marketing"
    | "Sponsorship"
    | "Product Manager"
    | "Internal Operations"
    | "Co-director"
    | "Design Advisor"
    | "Marketing Advisor"
    | "Sponsorship Advisor"
    | "Logistics Advisor";
  emoji: string;
  img: string;
  isSquare: boolean;
  srcSet?: string;
}

export const ORGANIZERS: Organizer[] = [
  // backend
  {
    name: "Allen Lu",
    team: "Backend",
    emoji: "🤠",
    img: AllenLuImg,
    isSquare: false,
    srcSet: `${AllenLuImg} 1x`,
    // srcSet: `${AllenLuImg} 1x, ${AllenLuImg2x} 2x`,
  },
  {
    name: "Daniel Lu",
    team: "Backend",
    emoji: "🚀",
    img: DanielLuImg,
    isSquare: false,
    srcSet: `${DanielLuImg} 1x,`,
    // srcSet: `${DanielLuImg} 1x, ${DanielLuImg2x} 2x`,
  },
  {
    name: "Rahul Aggarwal",
    team: "Backend",
    emoji: "🤔",
    img: RahulAggarwalImg,
    isSquare: false,
    srcSet: `${RahulAggarwalImg} 1x,`,
    // srcSet: `${RahulAggarwalImg} 1x, ${RahulAggarwalImg2x} 2x`,
  },
  {
    name: "Yash Dani",
    team: "Backend",
    emoji: "🌊",
    img: YashDaniImg,
    isSquare: false,
    srcSet: `${YashDaniImg} 1x,`,
    // srcSet: `${YashDaniImg} 1x, ${YashDaniImg2x} 2x`,
  },

  // design
  {
    name: "Rachel Xu",
    team: "Design",
    emoji: "😵‍💫",
    img: RachelXuImg,
    isSquare: false,
    // srcSet: `${RachelXuImg} 1x, ${RachelXuImg2x} 2x`,
  },
  {
    name: "Yi Nan Zhang",
    team: "Design",
    emoji: "💜",
    img: YiNanZhangImg,
    isSquare: false,
    // srcSet: `${YiNanZhangImg} 1x, ${YiNanZhangImg2x} 2x`,
  },
  {
    name: "Kelvin Zhang",
    team: "Design",
    emoji: "😁",
    img: KelvinZhangImg,
    isSquare: false,
    // srcSet: `${KelvinZhangImg} 1x, ${KelvinZhangImg2x} 2x`,
  },
  {
    name: "Wilbur Zhang",
    team: "Design",
    emoji: "🎐",
    img: WilburZhangImg,
    isSquare: false,
    // srcSet: `${WilburZhangImg} 1x, ${WilburZhangImg2x} 2x`,
  },
  {
    name: "Angela Nguyen",
    team: "Design",
    emoji: "🌸",
    img: AngelaNguyenImg,
    isSquare: false,
    // srcSet: `${AngelaNguyenImg} 1x, ${AngelaNguyenImg2x} 2x`,
  },

  // finance
  {
    name: "Helen Wang",
    team: "Finance",
    emoji: "🤗",
    img: HelenWangImg,
    isSquare: false,
    // srcSet: `${HelenWangImg} 1x, ${HelenWangImg2x} 2x`,
  },
  {
    name: "Rebecca Lee",
    team: "Finance",
    emoji: "🥺",
    img: RebeccaLeeImg,
    isSquare: false,
    // srcSet: `${RebeccaLeeImg} 1x, ${RebeccaLeeImg2x} 2x`,
  },

  // frontend
  {
    name: "Zafin Hassan",
    team: "Frontend",
    emoji: "🇧🇩",
    img: ZafinHassanImg,
    isSquare: false,
    // srcSet: `${ZafinHassanImg} 1x, ${ZafinHassanImg2x} 2x`,
  },
  {
    name: "Jenny Chen",
    team: "Frontend",
    emoji: "🌝",
    img: JennyChenImg,
    isSquare: false,
    // srcSet: `${JennyChenImg} 1x, ${JennyChenImg2x} 2x`,
  },
  {
    name: "Leo Li",
    team: "Frontend",
    emoji: "🥵",
    img: LeoLiImg,
    isSquare: false,
    // srcSet: `${LeoLiImg} 1x, ${LeoLiImg2x} 2x`,
  },
  {
    name: "Jennifer Lu",
    team: "Frontend",
    emoji: "🔥",
    img: JenniferLuImg,
    isSquare: false,
    // srcSet: `${JenniferLuImg} 1x, ${JenniferLuImg2x} 2x`,
  },
  {
    name: "Wendi Yu",
    team: "Frontend",
    emoji: "😳",
    img: WendiYuImg,
    isSquare: false,
    // srcSet: `${WendiYuImg} 1x, ${WendiYuImg2x} 2x`,
  },
  {
    name: "Albert Lai",
    team: "Frontend",
    emoji: "😤",
    img: AlbertLaiImg,
    isSquare: false,
    // srcSet: `${AlbertLaiImg} 1x, ${AlbertLaiImg2x} 2x`,
  },
  {
    name: "Rohan Ravindran",
    team: "Frontend",
    emoji: "👀",
    img: RohanRavindranImg,
    isSquare: false,
    // srcSet: `${RohanRavindranImg} 1x, ${RohanRavindranImg2x} 2x`,
  },

  // infrastructure
  {
    name: "Leon Fattakhov",
    team: "Infrastructure",
    emoji: "🎆",
    img: LeonFattakhovImg,
    isSquare: false,
    // srcSet: `${LeonFattakhovImg} 1x, ${LeonFattakhovImg2x} 2x`,
  },
  {
    name: "Advait Maybhate",
    team: "Infrastructure",
    emoji: "🤯",
    img: AdvaitMaybhate,
    isSquare: false,
    // srcSet: `${AdvaitMaybhateImg} 1x, ${AdvaitMaybhateImg2x} 2x`,
  },
  {
    name: "Steven Xu",
    team: "Infrastructure",
    emoji: "😩",
    img: StevenXuImg,
    isSquare: false,
    // srcSet: `${StevenImgXu} 1x, ${StevenXuImg2x} 2x`,
  },
  {
    name: "Alex Xie",
    team: "Infrastructure",
    emoji: "🌻",
    img: AlexXieImg,
    isSquare: false,
    // srcSet: `${AlexXieImg} 1x, ${AlexXieImg2x} 2x`,
  },

  // internal ops
  {
    name: "Hank Wu",
    team: "Internal Operations",
    emoji: "🎡",
    img: HankWuImg,
    isSquare: false,
    // srcSet: `${HankWuImg} 1x, ${HankWuImg2x} 2x`,
  },

  // leadership
  {
    name: "Jessica Zhang",
    team: "Co-director",
    emoji: "✌️",
    img: JessicaZhangImg,
    isSquare: false,
    // srcSet: `${JessicaZhangImg} 1x, ${JessicaZhangImg2x} 2x`,
  },
  {
    name: "Oana Binder",
    team: "Co-director",
    emoji: "😎",
    img: OanaBinderImg,
    isSquare: false,
    // srcSet: `${OanaBinderImg} 1x, ${OanaBinderImg2x} 2x`,
  },
  {
    name: "Hong Yi Chen",
    team: "Product Manager",
    emoji: "🅿️",
    img: HongYiChenImg,
    isSquare: false,
    srcSet: `${HongYiChenImg} 1x,`,
    // srcSet: `${HongYiChenImg} 1x, ${HongYiChenimg2x} 2x`,
  },

  // logistics
  {
    name: "Jackie Chen",
    team: "Logistics",
    emoji: "🤧",
    img: JackieChenImg,
    isSquare: false,
    // srcSet: `${JackieChenImg} 1x, ${JackieChenImg2x} 2x`,
  },
  {
    name: "Tailai Wang",
    team: "Logistics",
    emoji: "🙈",
    img: TailaiWangImg,
    isSquare: false,
    // srcSet: `${TailaiWangImg} 1x, ${TailaiWangImg2x} 2x`,
  },
  {
    name: "Faizaan Madhani",
    team: "Logistics",
    emoji: "😶",
    img: FaizaanMadhaniImg,
    isSquare: false,
    // srcSet: `${FaizaanMadhaniImg} 1x, ${FaizaanMadhaniImg2x} 2x`,
  },
  {
    name: "Joseph Wang",
    team: "Logistics",
    emoji: "🥴",
    img: JosephWangImg,
    isSquare: false,
    // srcSet: `${JosephWangImg} 1x, ${JosephWangImg2x} 2x`,
  },
  {
    name: "Kevin Zhang",
    team: "Logistics",
    emoji: "😳",
    img: KevinZhangImg,
    isSquare: false,
    // srcSet: `${KevinZhangImg} 1x, ${KevinZhangImg2x} 2x`,
  },
  {
    name: "Lauren Yoshida",
    team: "Logistics",
    emoji: "☁️",
    img: LaurenYoshidaImg,
    isSquare: false,
    // srcSet: `${LaurenYoshidaImg} 1x, ${LaurenYoshidaImg2x} 2x`,
  },
  {
    name: "Grace Gao",
    team: "Logistics",
    emoji: "👁",
    img: GraceGaoImg,
    isSquare: false,
    // srcSet: `${GraceGaoImg} 1x, ${GraceGaoImg2x} 2x`,
  },
  {
    name: "Rachelle Dong",
    team: "Logistics",
    emoji: "☀️",
    img: RachelleDongImg,
    isSquare: false,
    // srcSet: `${RachelleDongImg} 1x, ${RachelleDongImg2x} 2x`,
  },
  {
    name: "Hima Sheth",
    team: "Logistics",
    emoji: "😳",
    img: HimaShethImg,
    isSquare: false,
    // srcSet: `${HimaShethImg} 1x, ${HimaShethImg2x} 2x`,
  },

  // marketing
  {
    name: "Sara Long",
    team: "Marketing",
    emoji: "🥳",
    img: SaraLongImg,
    isSquare: false,
    // srcSet: `${SaraLongImg} 1x, ${SaraLongImg2x} 2x`,
  },
  {
    name: "Winnie Szeto",
    team: "Marketing",
    emoji: "😛",
    img: WinnieSzetoImg,
    isSquare: false,
    // srcSet: `${WinnieSzetoImg} 1x, ${WinnieSzetoImg2x} 2x`,
  },
  {
    name: "Carter Watkinson",
    team: "Marketing",
    emoji: "😴",
    img: CarterWatkinsonImg,
    isSquare: false,
    // srcSet: `${CarterWatkinsonImg} 1x, ${CarterWatkinsonImg2x} 2x`,
  },

  // sponsorship
  {
    name: "Jing Yi Wang",
    team: "Sponsorship",
    emoji: "❤️‍🔥",
    img: JingYiWangImg,
    isSquare: false,
    // srcSet: `${JingYiWangImg} 1x, ${JingYiWangImg} 2x`,
  },
  {
    name: "Elaine Cheung",
    team: "Sponsorship",
    emoji: "🤸🏻‍♀️",
    img: ElaineCheungImg,
    isSquare: false,
    // srcSet: `${ElaineCheungImg} 1x, ${ElainCheungImg2x} 2x`,
  },
  {
    name: "Serena Pang",
    team: "Sponsorship",
    emoji: "✨",
    img: SerenaPangImg,
    isSquare: false,
    // srcSet: `${SerenaPangImg} 1x, ${SerenaPangImg2x} 2x`,
  },
  {
    name: "Boya Zhang",
    team: "Sponsorship",
    emoji: "🐸",
    img: BoyaZhangImg,
    isSquare: false,
    // srcSet: `${BoyaZhangImg} 1x, ${BoyaZhangImg2x} 2x`,
  },
  {
    name: "Leon Han",
    team: "Sponsorship",
    emoji: "🤦",
    img: LeonHanImg,
    isSquare: false,
    // srcSet: `${LeonHanImg} 1x, ${LeonHanImg2x} 2x`,
  },
  {
    name: "Jennifer Tsai",
    team: "Sponsorship",
    emoji: "🤪",
    img: JenniferTsaiImg,
    isSquare: false,
    // srcSet: `${JenniferTsaiImg} 1x, ${JenniferTsaiImg2x} 2x`,
  },
];
