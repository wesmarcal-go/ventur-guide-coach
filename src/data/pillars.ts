import { Pillar } from "@/types/ventur";

export const pillars: Pillar[] = [
  {
    id: "detox",
    title: "Desintoxicação",
    description: "Avaliação dos processos de eliminação e purificação do organismo",
    icon: "Droplet",
    color: "from-teal-400 to-teal-500",
    questions: [
      { id: "detox-1", text: "Sente cansaço mesmo após dormir bem?", tag: "Vitalidade" },
      { id: "detox-2", text: "Apresenta inchaço frequente?", tag: "Retenção Líquida" },
      { id: "detox-3", text: "Tem dificuldade para perder peso?", tag: "Metabolismo" },
      { id: "detox-4", text: "Sente a digestão pesada após as refeições?", tag: "Digestão" },
      { id: "detox-5", text: "Apresenta irregularidade intestinal?", tag: "Eliminação" },
    ]
  },
  {
    id: "inflammation",
    title: "Desinflamar",
    description: "Identificação de processos inflamatórios e suas manifestações",
    icon: "Flame",
    color: "from-orange-400 to-orange-500",
    questions: [
      { id: "inflam-1", text: "Sente dores articulares ou musculares?", tag: "Articulações" },
      { id: "inflam-2", text: "Apresenta vermelhidão ou irritação na pele?", tag: "Pele" },
      { id: "inflam-3", text: "Tem sensibilidade a alimentos específicos?", tag: "Alimentação" },
      { id: "inflam-4", text: "Nota inchaço ou rigidez ao acordar?", tag: "Circulação" },
      { id: "inflam-5", text: "Apresenta alergias ou intolerâncias?", tag: "Imunidade" },
    ]
  },
  {
    id: "nourish",
    title: "Nutrir",
    description: "Avaliação da nutrição celular e absorção de nutrientes",
    icon: "Apple",
    color: "from-green-400 to-green-500",
    questions: [
      { id: "nourish-1", text: "Sente falta de energia durante o dia?", tag: "Energia" },
      { id: "nourish-2", text: "Tem queda de cabelo ou unhas fracas?", tag: "Estrutura" },
      { id: "nourish-3", text: "Apresenta pele seca ou sem brilho?", tag: "Hidratação" },
      { id: "nourish-4", text: "Sente desejo por doces com frequência?", tag: "Glicemia" },
      { id: "nourish-5", text: "Tem dificuldade de concentração?", tag: "Foco Mental" },
    ]
  },
  {
    id: "regenerate",
    title: "Regenerar",
    description: "Capacidade de recuperação e renovação celular",
    icon: "Sparkles",
    color: "from-purple-400 to-purple-500",
    questions: [
      { id: "regen-1", text: "Demora para se recuperar de exercícios?", tag: "Recuperação" },
      { id: "regen-2", text: "Apresenta cicatrização lenta?", tag: "Reparação" },
      { id: "regen-3", text: "Tem qualidade de sono insatisfatória?", tag: "Sono" },
      { id: "regen-4", text: "Sente fadiga muscular frequente?", tag: "Músculos" },
      { id: "regen-5", text: "Nota perda de elasticidade na pele?", tag: "Elasticidade" },
    ]
  },
  {
    id: "repair",
    title: "Reparar",
    description: "Processos de correção e equilíbrio dos sistemas corporais",
    icon: "Heart",
    color: "from-pink-400 to-pink-500",
    questions: [
      { id: "repair-1", text: "Apresenta desequilíbrios hormonais?", tag: "Hormônios" },
      { id: "repair-2", text: "Tem alterações de humor frequentes?", tag: "Emocional" },
      { id: "repair-3", text: "Sente ansiedade ou estresse constante?", tag: "Nervoso" },
      { id: "repair-4", text: "Apresenta irregularidades menstruais?", tag: "Ciclo" },
      { id: "repair-5", text: "Tem problemas de memória?", tag: "Cognição" },
    ]
  },
  {
    id: "integration",
    title: "Integração Mente-Corpo-Alma",
    description: "Conexão e equilíbrio entre os aspectos físico, mental e espiritual",
    icon: "Sparkle",
    color: "from-indigo-400 to-indigo-500",
    questions: [
      { id: "integ-1", text: "Sente desconexão com seu propósito?", tag: "Propósito" },
      { id: "integ-2", text: "Tem dificuldade para relaxar?", tag: "Relaxamento" },
      { id: "integ-3", text: "Apresenta sintomas psicossomáticos?", tag: "Psicossomático" },
      { id: "integ-4", text: "Sente falta de equilíbrio emocional?", tag: "Equilíbrio" },
      { id: "integ-5", text: "Tem dificuldade em se conectar consigo mesmo?", tag: "Autoconhecimento" },
    ]
  }
];
