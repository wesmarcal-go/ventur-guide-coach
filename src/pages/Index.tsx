import React from "react";
import PillarCard from "@/components/PillarCard";
import { Button } from "@/components/ui/button";
import { pillars } from "@/data/pillars";
import { ArrowRight, Droplet, Leaf, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const handleStartAssessment = () => {
    navigate(`/pillar/${pillars[0].id}`);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 bg-gradient-overlay pointer-events-none" />
      <div className="absolute -top-32 -right-36 h-[26rem] w-[26rem] rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-36 -left-40 hidden h-[30rem] w-[30rem] rounded-full bg-secondary/10 blur-3xl md:block" />

      <div className="relative z-10">
        <div className="container mx-auto px-6 py-12 md:py-16 lg:py-20">
          <nav className="flex flex-col gap-4 rounded-3xl border border-border/70 bg-white/70 px-6 py-5 shadow-soft backdrop-blur lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-4">
              <img
                src="/ventur-logo.svg"
                alt="Logotipo Ventur"
                className="h-12 w-12 md:h-14 md:w-14"
              />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
                  Ventur Care
                </p>
                <p className="text-lg font-semibold text-foreground">
                  Guia Estético Integrativo
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <span className="rounded-full bg-accent/70 px-4 py-2 text-foreground shadow-soft">
                Atendimento especializado em harmonização facial preventiva
              </span>
            </div>
          </nav>

          <section className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/80 px-4 py-1 text-sm font-medium text-primary shadow-soft backdrop-blur">
                <Sparkles className="h-4 w-4" />
                Ritual de luminosidade facial
              </span>
              <h1 className="text-4xl font-semibold leading-tight text-foreground md:text-5xl lg:text-6xl">
                Radiância natural através de um cuidado guiado e individualizado
              </h1>
              <p className="max-w-xl text-base text-muted-foreground md:text-lg">
                Descubra os pilares Ventur e personalize o seu protocolo de bem-estar facial.
                Um fluxo acolhedor criado para profissionais de estética que buscam precisão,
                serenidade e resultados visíveis.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="rounded-full px-6 shadow-button"
                  onClick={handleStartAssessment}
                >
                  Iniciar avaliação
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="ghost"
                  className="rounded-full border border-transparent bg-white/70 px-6 text-primary hover:bg-white/90"
                  onClick={() => navigate("/pillar/integration")}
                >
                  Explorar pilares
                </Button>
              </div>
              <div className="flex flex-wrap gap-6 text-sm">
                <div>
                  <p className="text-3xl font-semibold text-foreground">97%</p>
                  <p className="text-muted-foreground">
                    das pacientes relatam pele mais luminosa após o plano Ventur
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-semibold text-foreground">+18</p>
                  <p className="text-muted-foreground">
                    combinações de protocolos personalizados para sua clínica
                  </p>
                </div>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-lg">
              <div className="absolute -inset-4 -bottom-8 rounded-[2.5rem] bg-primary/10 blur-2xl" />
              <div className="relative rounded-[2.5rem] border border-border/60 bg-white/80 p-8 shadow-elegant backdrop-blur">
                <div className="flex items-center gap-3 text-primary">
                  <Leaf className="h-5 w-5" />
                  <span className="text-xs font-semibold uppercase tracking-[0.4em]">
                    Protocolo Ventur
                  </span>
                </div>
                <h2 className="mt-6 text-2xl font-semibold text-foreground">
                  Ritual Visagista Contemporâneo
                </h2>
                <p className="mt-4 text-sm text-muted-foreground">
                  Um mapa sensorial que conecta biotecnologia natural e bem-estar emocional.
                  Cada etapa foi pensada para potencializar preenchimentos, bioestimuladores e rituais de autocuidado.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                      <Sparkles className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-medium text-foreground">Diagnóstico acolhedor</p>
                      <p className="text-sm text-muted-foreground">
                        Perguntas inteligentes que respeitam o ritmo da pessoa e ampliam a visão sobre necessidades faciais.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/15 text-secondary">
                      <Droplet className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-medium text-foreground">Protocolos bioativos</p>
                      <p className="text-sm text-muted-foreground">
                        Sugestões de ativos, hidratação e tecnologias regenerativas de acordo com o pilar de atenção.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 rounded-2xl border border-primary/20 bg-primary/5 p-4 text-sm text-primary">
                  Atualize o ritual sempre que desejar e acompanhe a evolução clínica com indicadores intuitivos.
                </div>
              </div>
            </div>
          </section>

          <section className="mt-20 space-y-8">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
                Pilares Ventur
              </span>
              <h2 className="mt-4 text-3xl font-semibold text-foreground md:text-4xl">
                Seis dimensões para equilibrar estética e bem-estar integral
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                Explore cada pilar para compreender fatores metabólicos, emocionais e comportamentais
                que influenciam a vitalidade da pele. Personalize as respostas e crie um plano exclusivo
                para cada paciente.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {pillars.map((pillar, index) => (
                <div key={pillar.id} style={{ animationDelay: `${index * 100}ms` }}>
                  <PillarCard
                    id={pillar.id}
                    title={pillar.title}
                    description={pillar.description}
                    icon={pillar.icon}
                    color={pillar.color}
                  />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Index;
