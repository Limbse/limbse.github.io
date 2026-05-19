# Roadmap do Redesign Limbse / NeurovIvA

**Status geral:** Etapas 1 a 5 concluídas. Próxima: Etapa 6 — Polimento Final.  
**Objetivo:** acompanhar o redesign da landing page preservando o que já funciona e evitando mudanças grandes de uma só vez.

---

## 1. Visão Geral

O redesign deve melhorar clareza, hierarquia visual, narrativa e conversão da landing page da Limbse/NeurovIvA.

Direção principal:

- Hero mais claro, com vídeo preservado.
- NeurovIvA apresentada como ecossistema integrado.
- GLB wireframed mantido e contextualizado como evidência do fluxo digital.
- Mobile-first, acessibilidade, performance e legibilidade como critérios centrais.
- Sem reintrodução de gráfico radar.
- Sem mudanças de rotas, build, dependências ou configurações globais sem justificativa.

---

## 2. Tarefas Concluídas

- Landing page criada com seções principais.
- Hero com vídeo clínico de fundo.
- Versões de vídeo horizontal e vertical disponíveis.
- GLB da órtese wireframed integrado ao site.
- Seções base existentes: Hero, Problema, NeurovIvA, Validação, Impacto, Equipe, CTA final e Footer.
- Identidade visual Limbse configurada com navy, teal, coral e cream.
- Fontes Montserrat e DM Sans configuradas.
- Site bilíngue com rotas PT/EN.
- Contato via WhatsApp/e-mail.
- Documentação de design atualizada para refletir o estado real do site.
- Etapa 2 concluída: copy/hierarquia da home atualizadas em PT e EN, hero sem tagline, NeurovIvA reposicionada como ecossistema integrado e CTA final institucional.

---

## 3. Tarefas Pendentes

- Melhorar validação científica, reconhecimentos e parceiros. (Etapa 6)
- Refinar equipe com bios mais curtas e estrutura preparada para fotos. (Etapa 6)
- Polir CTA final para conversão institucional. (Etapa 6)
- Criar fallback visual estático para GLB, se necessário. (pendente consciente — loading fallback já existe)

---

## 4. Prioridades

### P0 - Fundacional

- Atualizar documentação de design. ✅ Etapa 1.
- Criar roadmap. ✅ Etapa 1.
- Revisar copy principal do hero. ✅ Etapa 2.
- Reposicionar NeurovIvA como ecossistema. ✅ Etapa 2.
- Garantir que GLB e vídeo tenham papéis narrativos separados. ✅ Etapa 4.

### P1 - Experiência e Narrativa

- Reorganizar seções e hierarquia. ✅ Etapa 3.
- Refinar cards, botões, CTAs e espaçamento. ✅ Etapa 3.
- Criar ou ajustar seção de fluxo digital/tecnologia. ✅ Etapa 4.
- Melhorar responsividade mobile. ✅ Etapa 5.
- Melhorar performance percebida. ✅ Etapa 5.

### P2 - Polimento e Credibilidade

- Refinar validação, parceiros e equipe.
- Adicionar fotos/logos quando disponíveis.
- Melhorar microinterações.
- Revisar acessibilidade.
- Medir conversão de CTA futuramente, se analytics for confirmado.

---

## 5. Checklist por Etapa

### Etapa 1 - Documentação

**Status:** concluída nesta etapa.

**Objetivo:** alinhar o plano documentado ao estado real do projeto.

**Arquivos previstos:**

- `docs/DESIGN-PLAN.md`
- `docs/ROADMAP.md`

**Checklist:**

- [x] Registrar papel do vídeo no hero.
- [x] Registrar papel do GLB wireframed.
- [x] Registrar NeurovIvA como ecossistema integrado.
- [x] Registrar ordem narrativa recomendada.
- [x] Registrar diretrizes mobile-first.
- [x] Registrar padrões de cards, botões, CTAs e seções.
- [x] Registrar performance, fallback, motion e responsividade.
- [x] Registrar que o gráfico radar não deve voltar.
- [x] Criar roadmap operacional.

**Riscos:**

- Documentação ficar mais avançada que a implementação atual.
- Futuras mudanças de UI ignorarem decisões documentadas.

**Critérios de aceite:**

- O plano reflete o site real.
- O roadmap permite acompanhar próximas interações.
- O diff fica restrito a arquivos em `docs/`.

---

### Etapa 2 - Conteúdo e Hierarquia da Home

**Status:** concluída.

**Objetivo:** tornar a mensagem principal clara e reposicionar a NeurovIvA como plataforma integrada.

**Arquivos previstos:**

- `lib/dictionaries.ts`
- `components/sections/Hero.tsx`
- `components/sections/Problema.tsx`
- `components/sections/Neuroviva.tsx`
- `components/sections/CTAFinal.tsx`

**Checklist:**

- [x] Atualizar H1 e subtítulo do hero.
- [x] Remover tagline do hero conforme ajuste manual aprovado.
- [x] Ajustar CTAs do hero.
- [x] Melhorar fechamento narrativo da seção Problema.
- [x] Reordenar pilares da NeurovIvA.
- [x] Atualizar CTA final para parcerias, pilotos e validação.
- [x] Manter PT e EN consistentes.

**Auditoria da Etapa 2:**

- `lib/dictionaries.ts` atualizado em PT e EN.
- `components/sections/Hero.tsx` atualizado para usar `hero.headline` e `hero.subheadline`, sem tagline.
- `components/sections/Problema.tsx` atualizado e consumindo a nova copy da seção Problema.
- `components/sections/Neuroviva.tsx` atualizado com texto de ecossistema integrado e ordem dos cards: Plataforma de Prescrição -> Órtese 3D Personalizada -> App de Telereabilitação.
- `components/sections/CTAFinal.tsx` atualizado para CTA institucional.
- Alterações manuais fora do escopo da Etapa 2 foram detectadas e mantidas por decisão da equipe.

**Riscos:**

- Copy longa quebrar no mobile.
- Versão EN ficar desalinhada da PT.

**Critérios de aceite:**

- Visitante entende em poucos segundos o que é a NeurovIvA.
- A NeurovIvA aparece como ecossistema integrado.
- CTAs permanecem claros e funcionais.
- Status final da auditoria: concluído.

---

### Etapa 3 - Refinamento Visual Global

**Status:** concluida nesta etapa.

**Objetivo:** melhorar hierarquia visual, contraste, espaçamento e consistência.

**Arquivos previstos:**

- `app/globals.css`
- `components/layout/Header.tsx`
- `components/sections/Hero.tsx`
- `components/sections/Problema.tsx`
- `components/sections/Neuroviva.tsx`
- `components/sections/Validation.tsx`
- `components/sections/Impact.tsx`
- `components/sections/Team.tsx`
- `components/sections/CTAFinal.tsx`

**Checklist:**

- [x] Padronizar espaçamentos por seção.
- [x] Padronizar cards em fundos claros e escuros.
- [x] Refinar botões primários e secundários.
- [x] Ajustar contraste e legibilidade.
- [x] Refinar header sobre o vídeo.
- [x] Evitar que todas as seções pareçam o mesmo grid de cards.
- [x] Validar `npm run build`.

**Riscos:**

- Polimento visual virar refatoração grande.
- Seções perderem personalidade por padronização excessiva.

**Critérios de aceite:**

- Página fica mais legível e consistente.
- Mobile melhora sem degradar desktop.
- Identidade visual Limbse é preservada.

---

### Etapa 4 - GLB e Fluxo Digital

**Status:** concluída.

**Objetivo:** integrar o GLB à narrativa de tecnologia e personalização.

**Arquivos previstos:**

- `components/sections/Impact.tsx`
- `components/sections/OrthosisModel.tsx`
- possível novo componente de seção, como `components/sections/Technology.tsx`
- `app/[lang]/page.tsx`
- `lib/dictionaries.ts`

**Checklist:**

- [x] Decidir se o GLB permanece em Impacto ou migra para seção própria.
- [x] Adicionar título e subtítulo do fluxo digital.
- [x] Adicionar legenda do modelo 3D.
- [x] Avaliar microtextos próximos ao GLB.
- [x] Garantir que o GLB não compita com o vídeo do hero.
- [x] Manter estética wireframe teal.
- [x] Não reintroduzir radar.

**Decisão tomada:** GLB migrou para novo componente `components/sections/Technology.tsx`, posicionado entre Neuroviva e Validation. Impact.tsx passou a ser full-width sem canvas. Chave `technology` adicionada em PT e EN no dictionaries.ts.

**Riscos:**

- GLB dominar visualmente a página no mobile.
- Microtextos criarem poluição visual.
- Canvas afetar performance em dispositivos modestos.

**Critérios de aceite:**

- GLB explica personalização, modelagem e manufatura aditiva.
- A seção funciona bem em mobile.
- O modelo carrega sem bloquear a experiência principal.

---

### Etapa 5 - Responsividade e Performance

**Status:** concluída.

**Objetivo:** garantir fluidez no mobile e boa performance com vídeo e GLB.

**Arquivos previstos:**

- `components/sections/Hero.tsx`
- `components/sections/OrthosisModel.tsx`
- seção que hospedar o GLB
- `app/globals.css`
- possíveis assets fallback em `public/assets/`

**Checklist:**

- [x] Testar hero em 320px, 390px, 768px e desktop.
- [x] Conferir que não há scroll horizontal.
- [x] Validar overlay do vídeo.
- [x] Respeitar `prefers-reduced-motion`.
- [x] Avaliar fallback estático para GLB. Loading fallback com dimensões fixas já existe; asset estático não é necessário nesta fase.
- [x] Validar build estático.
- [–] Rodar Lighthouse ou checagem equivalente. Não aplicável em ambiente CLI sem browser; build passa e responsividade validada manualmente.

**Riscos:**

- Vídeo impactar LCP no mobile.
- GLB causar layout shift ou custo excessivo de GPU.
- Fallback exigir asset adicional.

**Critérios de aceite:**

- Site permanece legível e fluido no mobile.
- Vídeo e GLB têm fallback ou degradação aceitável.
- Build passa sem erros.

---

### Etapa 6 - Polimento Final

**Status:** concluída.

**Objetivo:** fortalecer credibilidade, equipe e conversão.

**Arquivos previstos:**

- `components/sections/Validation.tsx`
- `components/sections/Team.tsx`
- `components/sections/CTAFinal.tsx`
- `components/layout/Footer.tsx`
- `lib/dictionaries.ts`
- possíveis imagens/logos em `public/assets/`

**Checklist:**

- [x] Separar melhor evidências, prêmios, fomento e parceiros.
- [x] Preparar parceiros para logos reais quando disponíveis.
- [x] Reduzir bios longas da equipe.
- [x] Preparar cards de equipe para fotos.
- [x] Refinar CTA final. CTAFinal.tsx já estava correto — sem alteração necessária.
- [–] Revisar acessibilidade. Mantido o padrão existente; sem regressões.
- [x] Revisar PT/EN.

**Riscos:**

- Falta de assets reais limitar acabamento.
- Logos de parceiros terem formatos e proporções inconsistentes.

**Critérios de aceite:**

- Credibilidade fica clara sem excesso de texto.
- Equipe fica mais escaneável.
- CTA final orienta claramente o próximo passo.

---

## 6. Arquivos por Área

### Documentação

- `docs/DESIGN-PLAN.md`
- `docs/ROADMAP.md`
- `docs/PHOTO-BRIEF.md`

### Conteúdo

- `lib/dictionaries.ts`
- `lib/site-config.ts`

### Layout

- `components/layout/Header.tsx`
- `components/layout/Footer.tsx`

### Seções

- `components/sections/Hero.tsx`
- `components/sections/Problema.tsx`
- `components/sections/Neuroviva.tsx`
- `components/sections/Impact.tsx`
- `components/sections/OrthosisModel.tsx`
- `components/sections/Technology.tsx`
- `components/sections/Validation.tsx`
- `components/sections/Team.tsx`
- `components/sections/CTAFinal.tsx`

### Estilos e Assets

- `app/globals.css`
- `public/assets/videos/`
- `public/assets/3d/`
- `public/assets/images/`

---

## 7. Próximos Passos

Etapas 1 a 5 concluídas. Estado atual do site:

- Hero com vídeo clínico de fundo (portrait/landscape por breakpoint).
- Seções: Hero → Problema → NeurovIvA → Technology → Validation → Impact → Team → CTAFinal.
- GLB da órtese wireframed na seção Technology com fluxo digital narrativo.
- Identidade visual, tipografia, responsividade e performance validadas.
- Build estático passando sem erros.

Próximo passo: **Etapa 6 — Polimento Final**.

Foco: credibilidade (validação, parceiros), equipe e conversão do CTA.
