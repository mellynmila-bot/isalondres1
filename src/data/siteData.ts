export interface ServiceItem {
  id: string;
  category: 'lashes' | 'brows' | 'lips';
  categoryName: { pt: string; en: string };
  name: { pt: string; en: string };
  description: { pt: string; en: string };
  image: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  service: string;
  text: string;
  rating: number;
}

export interface StudioFeature {
  id: string;
  title: { pt: string; en: string };
  description: { pt: string; en: string };
  icon: string;
}

export interface EducationTip {
  id: string;
  icon: string;
  title: { pt: string; en: string };
  description: { pt: string; en: string };
}

export interface FaqItem {
  id: string;
  question: { pt: string; en: string };
  shortAnswer: { pt: string; en: string };
  fullAnswer: { pt: string; en: string };
}

export const siteData = {
  name: "Isadora",
  businessName: "Isadora Lash & Brows",
  tagline: "Elevating your everyday beauty.",
  instagramHandle: "@isadorab.lash",
  instagramUrl: "https://www.instagram.com/isadorab.lash/",
  reelUrl: "https://www.instagram.com/reel/DdhCIUnIh38/",
  reelEmbedUrl: "https://www.instagram.com/reel/DdhCIUnIh38/embed",
  googleMapsEmbedUrl: "https://www.google.com/maps?q=London,+United+Kingdom&z=11&output=embed",
  city: "London",
  country: "United Kingdom",
  whatsappPhone: "447387625779",
  whatsappDefaultUrl: "https://api.whatsapp.com/send?phone=447387625779&text=Hello%20Isa%2C%20I%20would%20like%20to%20book%20an%20appointment.%20Could%20you%20please%20share%20your%20available%20times%3F%20%E2%9C%A8",
  contactEmail: "contact@isadorab-lash.com",
  legal: {
    activeOption: "sole_trader", // 'sole_trader' | 'limited'
    soleTraderText: "Isadora B. is a sole trader registered in the United Kingdom.",
    ltdText: "Isadora Lash & Brows Ltd, Company Registration Number: [XXXXXX], Registered Office: [London, UK].",
  },
  photos: {
    hero: "https://i.ibb.co/tMPy6fG7/838645612-17904498174598704-3108184795695297259-n-jpg.webp",
    about: "https://i.ibb.co/tMPy6fG7/838645612-17904498174598704-3108184795695297259-n-jpg.webp",
  },
  services: [
    {
      id: "fox-eyes",
      category: "lashes",
      categoryName: { pt: "Cílios", en: "Lashes" },
      name: { pt: "Fox Eyes", en: "Fox Eyes" },
      description: {
        pt: "Efeito alongado e levantado nos cantos externos, que desenha um olhar sofisticado e marcante, com mapping personalizado.",
        en: "Elongated, lifted outer corners creating a sophisticated, feline gaze crafted through personalized eye mapping."
      },
      image: "https://i.ibb.co/hFQhHGkj/791096354-17898508737598704-2655340463281553804-n.webp"
    },
    {
      id: "volume-5d",
      category: "lashes",
      categoryName: { pt: "Cílios", en: "Lashes" },
      name: { pt: "Volume 5D", en: "Volume 5D" },
      description: {
        pt: "Leques de fios ultraleves para um olhar preenchido, volumoso e elegante, sem peso nos cílios naturais.",
        en: "Ultra-lightweight handmade fans delivering a full, plush and glamorous finish without compromising natural lash health."
      },
      image: "https://i.ibb.co/N2VWgyfX/820568391-17902124109598704-6990642647768489921-n.webp"
    },
    {
      id: "volume-brasileiro",
      category: "lashes",
      categoryName: { pt: "Cílios", en: "Lashes" },
      name: { pt: "Volume Brasileiro", en: "Brazilian Volume" },
      description: {
        pt: "Técnica apreciada pelo acabamento macio, volumoso e natural, com sensação de densidade e leveza.",
        en: "Beloved signature technique known for its soft, fluttery density and natural elegance with featherlight feel."
      },
      image: "https://i.ibb.co/WWSBnnSn/830281678-17903207556598704-5802454966537184775-n.webp"
    },
    {
      id: "siren-effect",
      category: "lashes",
      categoryName: { pt: "Cílios", en: "Lashes" },
      name: { pt: "Siren Effect", en: "Siren Effect" },
      description: {
        pt: "Olhar sedutor e marcante, com alongamento nos cantos externos e acabamento texturizado e glamoroso.",
        en: "A magnetic, seductive look with textured outer corner graduation and red-carpet sophistication."
      },
      image: "https://i.ibb.co/KcGq4tDk/848774192-17906007111598704-1177502941476458059-n.webp"
    },
    {
      id: "brow-design",
      category: "brows",
      categoryName: { pt: "Sobrancelhas", en: "Brows" },
      name: { pt: "Design de sobrancelhas", en: "Brow Design" },
      description: {
        pt: "Mapeamento do formato que valoriza o seu rosto, com fios alinhados e acabamento limpo e natural.",
        en: "Precise anatomical mapping tailored to enhance your facial symmetry with clean, natural definition."
      },
      image: "https://i.ibb.co/DHYPpwrG/Save-Clip-App-684991781-17875593570598704-8934335603869686297-n.webp"
    },
    {
      id: "brow-henna",
      category: "brows",
      categoryName: { pt: "Sobrancelhas", en: "Brows" },
      name: { pt: "Design de sobrancelhas & Henna", en: "Brow Design & Henna" },
      description: {
        pt: "Pigmentação que preenche falhas e define o desenho, valorizando as sobrancelhas. A duração varia de pessoa para pessoa.",
        en: "Natural mineral tinting that fills gaps, defines the arch and enhances depth. Retention varies individually."
      },
      image: "https://i.ibb.co/wZrg8Mm0/858475338-17906628309598704-4404498835848038476-n.webp"
    },
    {
      id: "brow-lamination",
      category: "brows",
      categoryName: { pt: "Sobrancelhas", en: "Brows" },
      name: { pt: "Brow Lamination", en: "Brow Lamination" },
      description: {
        pt: "Alinha e disciplina os fios, para sobrancelhas mais preenchidas, penteadas e definidas, com efeito natural.",
        en: "Relaxes and sculpts hair direction for fuller, brushed-up and effortlessly feathered brows."
      },
      image: "https://i.ibb.co/hFQhHGkj/791096354-17898508737598704-2655340463281553804-n.webp"
    },
    {
      id: "hidralips",
      category: "lips",
      categoryName: { pt: "Boca", en: "Lips" },
      name: { pt: "Hidralips", en: "Hidralips" },
      description: {
        pt: "Tratamento voltado à hidratação e ao aspecto saudável dos lábios, para uma boca mais suave, uniforme e cuidada.",
        en: "Deep revitalizing hydration treatment enhancing smooth lip texture, natural glow, and supple softness."
      },
      image: "https://i.ibb.co/RTqSKhw6/Save-Clip-App-625691665-17859178392598704-2087762033953499135-n.webp"
    }
  ] as ServiceItem[],

  gallery: [
    {
      src: "https://i.ibb.co/hFQhHGkj/791096354-17898508737598704-2655340463281553804-n.webp",
      altPt: "Fox Eyes - Extensão de cílios com efeito delineado e olhar levantado",
      altEn: "Fox Eyes lash extensions with elongated outer lift",
      title: "Fox Eyes Effect"
    },
    {
      src: "https://i.ibb.co/N2VWgyfX/820568391-17902124109598704-6990642647768489921-n.webp",
      altPt: "Volume 5D - Cílios volumosos e densos com leques artesanais",
      altEn: "Volume 5D lash fans for dense and elegant lashes",
      title: "Volume 5D"
    },
    {
      src: "https://i.ibb.co/WWSBnnSn/830281678-17903207556598704-5802454966537184775-n.webp",
      altPt: "Volume Brasileiro - Acabamento macio e olhar expressivo",
      altEn: "Brazilian Volume lash styling with fluttery feel",
      title: "Volume Brasileiro"
    },
    {
      src: "https://i.ibb.co/KcGq4tDk/848774192-17906007111598704-1177502941476458059-n.webp",
      altPt: "Siren Effect - Olhar marcante e elegante em detalhes",
      altEn: "Siren Effect glamorous lash finish",
      title: "Siren Effect"
    },
    {
      src: "https://i.ibb.co/DHYPpwrG/Save-Clip-App-684991781-17875593570598704-8934335603869686297-n.webp",
      altPt: "Design de sobrancelhas personalizado para o formato do rosto",
      altEn: "Precision brow mapping and shaping",
      title: "Brow Design"
    },
    {
      src: "https://i.ibb.co/wZrg8Mm0/858475338-17906628309598704-4404498835848038476-n.webp",
      altPt: "Henna para sobrancelhas com preenchimento sutil e definição",
      altEn: "Eyebrow henna tinting with soft shadow effect",
      title: "Brow Henna"
    },
    {
      src: "https://i.ibb.co/hFQhHGkj/791096354-17898508737598704-2655340463281553804-n.webp",
      altPt: "Brow Lamination - Sobrancelhas alinhadas e com aspecto cheio",
      altEn: "Brow Lamination creating full brushed-up brows",
      title: "Brow Lamination"
    },
    {
      src: "https://i.ibb.co/RTqSKhw6/Save-Clip-App-625691665-17859178392598704-2087762033953499135-n.webp",
      altPt: "Hidralips - Lábios hidratados e revitalizados com brilho suave",
      altEn: "Hidralips hydrating lip care treatment",
      title: "Hidralips Glow"
    }
  ],

  studioImages: [
    {
      src: "https://i.ibb.co/wrwZCD1X/673890271-17874381984598704-8807297658953128957-n.webp",
      altPt: "Espaço de atendimento privativo e acolhedor em Londres",
      altEn: "Private and welcoming beauty studio in London"
    },
    {
      src: "https://i.ibb.co/G3sVdPy5/Save-Clip-App-820374034-17902125621598704-7300129319855757438-n.webp",
      altPt: "Maca confortável e iluminação profissional para aplicação de cílios",
      altEn: "Comfortable ergonomic bed and professional lighting"
    },
    {
      src: "https://i.ibb.co/tTWy0pxn/Save-Clip-App-793720304-17898939780598704-3893845646791036195-n.webp",
      altPt: "Detalhes de produtos esterilizados e adesivos de alta precisão",
      altEn: "Sterilized equipment and high-grade professional adhesives"
    },
    {
      src: "https://i.ibb.co/rGj8pWsQ/Save-Clip-App-756832932-17891898474598704-4505500773272372115-n.webp",
      altPt: "Ambiente sofisticado com atmosfera relaxante para o seu autocuidado",
      altEn: "Sophisticated and calming atmosphere for self-care"
    },
    {
      src: "https://i.ibb.co/8L4DBW2V/Save-Clip-App-683759894-17875188723598704-4555398987495274213-n.webp",
      altPt: "Organização impecável seguindo rigorosos padrões de biossegurança",
      altEn: "Impeccable sanitation meeting strict UK beauty standards"
    },
    {
      src: "https://i.ibb.co/Ng6KVbt2/Save-Clip-App-688433411-17876066247598704-604616501807043427-n.webp",
      altPt: "Cantinho pensado para o seu conforto durante cada procedimento",
      altEn: "Dedicated space crafted for total client serenity"
    },
    {
      src: "https://i.ibb.co/FjJfxBg/654099975-17866628988598704-78597957669922289-n.webp",
      altPt: "Materiais descartáveis e biossegurança em primeiro lugar",
      altEn: "Single-use disposables and client safety first"
    },
    {
      src: "https://i.ibb.co/gLSVhXZH/661710022-17870969049598704-8305624407785305538-n.webp",
      altPt: "Studio Isadora Lash & Brows em Londres",
      altEn: "Isadora Lash & Brows private studio in London"
    }
  ],

  studioFeatures: [
    {
      id: "hygiene",
      title: { pt: "Higiene rigorosa", en: "Rigorous Hygiene" },
      description: {
        pt: "Materiais esterilizados, pinças higienizadas e protocolos de biossegurança.",
        en: "Hospital-grade sterilized instruments and strict sanitation protocols."
      },
      icon: "ShieldCheck"
    },
    {
      id: "comfort",
      title: { pt: "Conforto total", en: "Total Comfort" },
      description: {
        pt: "Maca macia e confortável com ambiente calmo para você relaxar de verdade.",
        en: "Ergonomic plush lash bed and a calm space designed for deep rest."
      },
      icon: "Sparkles"
    },
    {
      id: "privacy",
      title: { pt: "Privacidade absoluta", en: "Total Privacy" },
      description: {
        pt: "Atendimento reservado individual: um cliente por vez no studio.",
        en: "One-on-one appointments ensuring quiet, personalized attention."
      },
      icon: "Lock"
    },
    {
      id: "quality",
      title: { pt: "Produtos selecionados", en: "Premium Products" },
      description: {
        pt: "Adesivos certificados, curvaturas nobres e fios ultraleves antialérgicos.",
        en: "Certified adhesives, luxury lash curls, and featherweight synthetic silk."
      },
      icon: "Award"
    },
    {
      id: "dedication",
      title: { pt: "Atenção exclusiva", en: "Exclusive Dedication" },
      description: {
        pt: "Tempo e calma em cada detalhe, sem pressa na aplicação dos fios.",
        en: "Meticulous care and zero rushed appointments for pristine durability."
      },
      icon: "Clock"
    },
    {
      id: "location",
      title: { pt: "Boa localização", en: "Prime London Setting" },
      description: {
        pt: "Fácil acesso ao transporte público londrino em área tranquila.",
        en: "Easily accessible via London public transit in a safe, tranquil area."
      },
      icon: "MapPin"
    }
  ],

  testimonials: [
    {
      id: "1",
      name: "Camila R.",
      service: "Volume Brasileiro",
      text: "Meus cílios ficaram leves, naturais e lindos. A Isa tem um olhar incrível!",
      rating: 5
    },
    {
      id: "2",
      name: "Sophie M.",
      service: "Fox Eyes",
      text: "Exactly the lifted look I wanted. Very gentle and professional.",
      rating: 5
    },
    {
      id: "3",
      name: "Fernanda L.",
      service: "Siren Effect",
      text: "Amei o efeito, super elegante. Atendimento cuidadoso do início ao fim.",
      rating: 5
    },
    {
      id: "4",
      name: "Juliana P.",
      service: "Brow Lamination",
      text: "Minhas sobrancelhas ficaram penteadas e definidas, do jeito que eu queria.",
      rating: 5
    },
    {
      id: "5",
      name: "Emma T.",
      service: "Volume 5D",
      text: "A lovely, relaxing experience and the lashes look beautiful.",
      rating: 5
    },
    {
      id: "6",
      name: "Mariana S.",
      service: "Henna + Design",
      text: "Ambiente lindo e muito carinho. Já marquei a próxima!",
      rating: 5
    }
  ],

  educationTips: [
    {
      id: "desired-effect",
      icon: "Sparkle",
      title: { pt: "Conte o que você imagina", en: "Share your vision" },
      description: {
        pt: "Explique se busca algo natural, volumoso, Fox Eyes ou Siren Effect.",
        en: "Tell us whether you prefer natural subtlety, plush volume, Fox Eyes or Siren."
      }
    },
    {
      id: "reference-photo",
      icon: "Camera",
      title: { pt: "Foto de referência", en: "Reference photos" },
      description: {
        pt: "Se tiver fotos de estilos que admira, envie pelo WhatsApp para alinharmos.",
        en: "If you have favorite lash/brow reference photos, share them on WhatsApp."
      }
    },
    {
      id: "eye-health",
      icon: "Eye",
      title: { pt: "Saúde dos olhos", en: "Eye health & safety" },
      description: {
        pt: "Informe previamente alergias, sensibilidade ocular, gravidez ou cirurgias.",
        en: "Disclose any adhesive allergies, sensitivities, pregnancy, or recent treatments."
      }
    },
    {
      id: "clean-lashes",
      icon: "Droplets",
      title: { pt: "Cílios limpos sem rímel", en: "Clean, makeup-free lashes" },
      description: {
        pt: "Venha sem maquiagem nos olhos e com os cílios lavados e livres de oleosidade.",
        en: "Arrive completely makeup-free and oil-free around your eye area."
      }
    },
    {
      id: "maintenance",
      icon: "RefreshCw",
      title: { pt: "Manutenção de outro espaço", en: "Work from other artists" },
      description: {
        pt: "Se ainda tiver extensões de outro studio, avise antes para planejar remoção.",
        en: "If you currently wear lashes from another salon, advise ahead for safe removal."
      }
    },
    {
      id: "punctuality",
      icon: "Clock",
      title: { pt: "Pontualidade e calma", en: "Punctuality & serenity" },
      description: {
        pt: "Venha pontualmente e, se possível, sem acompanhantes para total tranquilidade.",
        en: "Please arrive on time and without guests to preserve a tranquil sanctuary."
      }
    }
  ],

  faqs: [
    {
      id: "faq-1",
      question: {
        pt: "Como faço para agendar?",
        en: "How do I book an appointment?"
      },
      shortAnswer: {
        pt: "O agendamento é feito de forma direta e personalizada pelo WhatsApp.",
        en: "Bookings are made directly and individually through WhatsApp."
      },
      fullAnswer: {
        pt: "Preencha o mini formulário desta página ou envie uma mensagem direta no WhatsApp. A Isadora responde informando os dias e horários livres mais adequados à sua agenda.",
        en: "Fill out the mini-form on this page or message directly on WhatsApp. Isadora will reply promptly with the best available dates and times."
      }
    },
    {
      id: "faq-2",
      question: {
        pt: "Qual a diferença entre Fox Eyes, Volume 5D, Volume Brasileiro e Siren Effect?",
        en: "What is the difference between Fox Eyes, Volume 5D, Brazilian Volume, and Siren Effect?"
      },
      shortAnswer: {
        pt: "São desenhos e densidades diferentes adaptados ao seu gosto e formato de olho.",
        en: "They are distinct styling mappings and lash densities crafted to suit your facial features."
      },
      fullAnswer: {
        pt: "Fox Eyes alonga e levanta o olhar nos cantos externos; Volume 5D preenche com leques ultrafinos de alto glamour; Volume Brasileiro dá acabamento macio e volumoso com visual aveludado; e Siren Effect cria um olhar sedutor, texturizado e marcante.",
        en: "Fox Eyes lifts and elongates outer corners; Volume 5D delivers plush handmade fans; Brazilian Volume offers soft, fluttery density; and Siren Effect produces a seductive, textured and lifted glamour."
      }
    },
    {
      id: "faq-3",
      question: {
        pt: "Como sei qual é o melhor efeito para mim?",
        en: "How do I know which style suits me best?"
      },
      shortAnswer: {
        pt: "A Isadora realiza uma avaliação facial e mapping personalizado no início da sessão.",
        en: "Isadora conducts a full eye-mapping consultation at the start of your session."
      },
      fullAnswer: {
        pt: "Cada olhar tem formato único. A Isadora avalia a abertura dos olhos, formato da pálpebra, resistência dos fios naturais e a sua rotina para indicar a curvatura, comprimento e efeito mais harmoniosos.",
        en: "Every eye shape is unique. Isadora examines your eye anatomy, natural lash strength, eyelid space, and daily lifestyle to recommend the most flattering lash mapping."
      }
    },
    {
      id: "faq-4",
      question: {
        pt: "Tenho sensibilidade ou alergia. Posso fazer?",
        en: "I have sensitive eyes or allergies. Can I get extensions?"
      },
      shortAnswer: {
        pt: "Informe suas condições antes. Avaliação e teste de alergia podem ser indicados.",
        en: "Please inform us beforehand. An evaluation and patch test can be conducted if indicated."
      },
      fullAnswer: {
        pt: "A transparência quanto a alergias conhecidas (látex, cianoacrilato, cosméticos) é fundamental. Quando indicado, realizamos um teste preventivo (patch test) com alguns fios dias antes para assegurar seu conforto e segurança ocular.",
        en: "Full disclosure of past reactions is crucial. When indicated, a discreet patch test is performed 24-48 hours prior to the appointment to verify tolerance."
      }
    },
    {
      id: "faq-5",
      question: {
        pt: "Quanto tempo duram os cílios?",
        en: "How long do lash extensions last?"
      },
      shortAnswer: {
        pt: "A retenção média varia com o ciclo natural dos fios e os cuidados em casa.",
        en: "Retention varies according to your natural lash cycle and post-care diligence."
      },
      fullAnswer: {
        pt: "Nossos cílios naturais caem e se renovam diariamente. Por isso, os resultados e a duração variam de pessoa para pessoa. Para manter o olhar sempre preenchido e alinhado, recomenda-se manutenção periódica, combinada durante o atendimento.",
        en: "Natural lashes shed and renew continuously. Results and longevity vary individually. To maintain a full, pristine look, periodic infill appointments are scheduled based on your lash cycle."
      }
    },
    {
      id: "faq-6",
      question: {
        pt: "Posso molhar os cílios e usar rímel?",
        en: "Can I get my lashes wet and wear mascara?"
      },
      shortAnswer: {
        pt: "A higienização correta com shampoo específico é necessária, mas o rímel deve ser evitado.",
        en: "Proper gentle lash cleansing is essential, but mascara should be avoided."
      },
      fullAnswer: {
        pt: "Pode e deve lavar os cílios com espuma neutra específica para extensões. O rímel não é recomendado, pois acumula resíduos na raiz e compromete o adesivo. Você receberá um guia completo de cuidados no seu atendimento.",
        en: "Lashes must be washed gently with an oil-free lash cleanser. Mascara is strongly discouraged as it damages adhesive bonds. You will receive a complete aftercare guide at your appointment."
      }
    },
    {
      id: "faq-7",
      question: {
        pt: "O que é a henna de sobrancelhas?",
        en: "What is Brow Henna?"
      },
      shortAnswer: {
        pt: "Uma pigmentação vegetal que sombreia a pele e tinge os fios, definindo o contorno.",
        en: "A plant-based pigment that casts a soft shadow on the skin and tints brow hairs."
      },
      fullAnswer: {
        pt: "A henna preenche falhas e realça a geometria das sobrancelhas sem a invasividade de procedimentos permanentes. A duração varia de pessoa para pessoa dependendo do tipo de pele e rotina de skincare.",
        en: "Henna camouflages sparse areas and accentuates natural brow symmetry. Skin tint longevity varies by skin type (oily vs dry) and daily cleansing routines."
      }
    },
    {
      id: "faq-8",
      question: {
        pt: "O que é Brow Lamination?",
        en: "What is Brow Lamination?"
      },
      shortAnswer: {
        pt: "Procedimento que alinha e disciplina os fios, criando sobrancelhas cheias e penteadas.",
        en: "A relaxing chemical treatment that realigns brow hairs for a fuller, brushed-up shape."
      },
      fullAnswer: {
        pt: "Trata-se de uma técnica que relaxa a estrutura dos fios naturais, permitindo penteá-los e fixá-los na direção desejada. O resultado são sobrancelhas com aparência mais espessa, alinhada e moderna.",
        en: "Brow lamination softens hair bonds allowing hairs to be repositioned upward and outwards. It creates an instantly lifted, fluffy and obedient brow look."
      }
    },
    {
      id: "faq-9",
      question: {
        pt: "O que é o Hidralips?",
        en: "What is Hidralips?"
      },
      shortAnswer: {
        pt: "Tratamento de hidratação e revitalização estética para os lábios.",
        en: "An intense aesthetic hydration and revitalization treatment for lips."
      },
      fullAnswer: {
        pt: "O Hidralips é focado na regeneração da pele labial, reduzindo o aspecto ressecado e realçando o viço e a maciez natural da boca sem intervenções cirúrgicas ou promessas médicas.",
        en: "Hidralips restores moisture balance to dry, chapped lips, smoothing fine dehydration lines and restoring natural plump glow."
      }
    },
    {
      id: "faq-10",
      question: {
        pt: "Quanto custam os procedimentos?",
        en: "How much do treatments cost?"
      },
      shortAnswer: {
        pt: "Os valores são passados sob consulta via WhatsApp de acordo com o serviço.",
        en: "Pricing is provided on request via WhatsApp tailored to each treatment."
      },
      fullAnswer: {
        pt: "Todos os procedimentos possuem valores sob consulta. Ao conversar pelo WhatsApp, a Isadora informa o investimento e as opções de pacotes ou manutenções disponíveis.",
        en: "All procedures are listed with pricing upon request. When connecting via WhatsApp, Isadora provides detailed quotes and infill options for your desired treatment."
      }
    },
    {
      id: "faq-11",
      question: {
        pt: "Onde fica localizado o studio?",
        en: "Where is the studio located?"
      },
      shortAnswer: {
        pt: "Em Londres, Reino Unido. O endereço exato é enviado após a confirmação.",
        en: "In London, UK. The exact studio address is shared upon booking confirmation."
      },
      fullAnswer: {
        pt: "Por razões de segurança e privacidade das nossas clientes, o endereço exato com instruções completas de acesso e transporte é transmitido diretamente após a confirmação do agendamento.",
        en: "To safeguard our clients' quiet sanctuary and privacy, the exact address, transit guide and arrival instructions are sent once your appointment is confirmed."
      }
    },
    {
      id: "faq-12",
      question: {
        pt: "E se eu precisar remarcar ou cancelar?",
        en: "What is the policy for rescheduling or cancellation?"
      },
      shortAnswer: {
        pt: "Pedimos aviso prévio com a máxima antecedência possível pelo WhatsApp.",
        en: "Please provide advance notice via WhatsApp as early as possible."
      },
      fullAnswer: {
        pt: "Entendemos que imprevistos acontecem. Como os atendimentos são exclusivos, pedimos a gentileza de avisar com antecedência para possibilitar a reorganização da agenda.",
        en: "We recognize unforeseen circumstances arise. As each slot is reserved exclusively for one person, we kindly request early notification to reschedule smoothly."
      }
    }
  ] as FaqItem[]
};
