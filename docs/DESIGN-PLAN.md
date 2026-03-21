# Planejamento de Design — Site Institucional Limbse
**Versão:** 1.0 · Março 2026
**Audiência-alvo:** Investidores, parceiros institucionais, avaliadores de edital, pesquisadores

---

## 1. Síntese das Referências Visuais

Cada site selecionado contribui com um padrão específico adaptável à Limbse:

| Referência | O que inspira para a Limbse |
|---|---|
| **Tempus** | Hero escuro com elemento 3D central flutuante; seções alternadas dark/light; tipografia bold de alto contraste |
| **Neuralink** | Hero cinematográfico fullscreen; narrativa de "pioneiros" (pacientes reais); tom sóbrio que humaniza tecnologia radical |
| **CMR Surgical** | Paleta navy/teal muito próxima da Limbse; destaque de estatísticas volumosas; estrutura clara para audiência de saúde corporativa |
| **Hinge Health** | Real-world photography de pessoas em reabilitação; seção de métricas de resultado com números grandes; comunicação empática sem ser clínica |
| **Sword Health** | Número de impacto único em destaque absoluto (ex: "$1.4 bi economizados"); showcase do produto físico/digital; layout limpo com muito espaço em branco |
| **Altos Labs** | Hero com imagem científica de alta qualidade; estrutura editorial magazine abaixo do fold; credibilidade científica visível |
| **Orna** | Uso de formas orgânicas como elemento gráfico; seção de time com fotos e vínculos; tom de biotech com calor humano |
| **Ottobock** | Contextualização clínica do produto ortótico; galeria de condições tratadas — útil como referência de conteúdo, não de estética |

**Síntese direcional:** O site da Limbse deve ter a sofisticação técnica do Tempus, a humanidade do Hinge Health, a credibilidade científica do Altos Labs e a paleta do CMR Surgical — mas com identidade própria ancorada no Navy + Teal da marca.

---

## 2. Direção Visual Consolidada

### Estética Geral
- **Dark-first com respiro cream:** Hero e seções de produto em `#0E1E35` (Navy). Seções intermediárias em `#F9F8F4` (Cream) para contraste e leitura. CTA final retorna ao dark.
- **Não clínico, não corporativo genérico:** Nenhum ícone de "estetoscópio clipart". Fotografia editorial real ou 3D de alta qualidade.
- **Acento teal como "pulso":** `#3BB7A2` aparece como highlight, bordas, sublinhados e botões primários — nunca como fundo dominante.
- **Red com parcimônia:** `#F04D4F` apenas para dados de urgência (344 mil AVCs/ano) ou indicadores de problema. Nunca decorativo.

### Tipografia
- **Montserrat 800–900** para headlines grandes (hero, seções de impacto)
- **Montserrat 700** para subtítulos de seção
- **DM Sans 400** para corpo de texto
- **DM Sans 300 itálico** para citações ou destaques suaves

### Elementos Visuais Diferenciadores
1. **Render 3D da órtese NeurovIvA** como hero element — rotacionando suavemente, com profundidade. Referência direta: esfera 3D do Tempus.
2. **Linhas de scan/grid biomédico** como textura de fundo nas seções dark — discreta, sugere tecnologia sem gritar.
3. **Morphing de curvas orgânicas** como separadores de seção (inspirado na onda do Orna) — reforça o orgânico/humano da reabilitação.
4. **Fotografia de paciente real:** uma imagem de alta qualidade de pessoa usando a órtese no cotidiano. Âncora humana do produto.

---

## 3. Arquitetura de Seções

### Seção 1 — Hero (fullscreen, dark navy)
**Objetivo:** Capturar atenção e comunicar posicionamento em 5 segundos.

- Background: `#0E1E35` com textura de grid biomédico muito sutil
- **Elemento central:** render 3D da órtese flutuando + rotação lenta (Three.js ou Spline)
- **Headline:** `"Design que Transforma. Tecnologia que Fortalece."` — Montserrat 900, branco, palavra "Transforma" ou "Fortalece" em teal
- **Subheadline:** `"Plataforma integrada de reabilitação pós-AVC com órtese 3D personalizada, prescrição digital e telereabilitação."` — DM Sans 400, cinza claro
- **CTAs:** `[Conheça o NeurovIvA]` (botão teal) + `[Fale conosco]` (WhatsApp, outline branco)
- **Scroll indicator:** animação sutil de seta ou linha pulsando em teal
- **Referências diretas:** Tempus (3D + dark), Neuralink (hero cinematográfico)

---

### Seção 2 — O Problema (cream/light, dramática)
**Objetivo:** Criar urgência e justificar a existência da Limbse. Gatilho emocional para investidor.

- Background: `#F9F8F4` (Cream)
- **Headline:** `"Cada mês sem reabilitação custa caro — em todos os sentidos."` — Montserrat 800, Navy
- **Três métricas animadas** (counter que incrementa ao entrar na viewport):
  - `344 mil` novos AVCs por ano no Brasil
  - `67%` desenvolvem sequelas motoras
  - `70%` atendidos pelo SUS — sem estrutura suficiente
- **Parágrafo âncora:** 1–2 frases sobre o gap no acesso à reabilitação especializada
- **Foto editorial:** pessoa em reabilitação ou sombra/silhueta — humaniza o dado
- **Referências diretas:** Hinge Health (métricas grandes + foto real), Sword Health (número de impacto único)

---

### Seção 3 — Solução: NeurovIvA (dark navy, destaque de produto)
**Objetivo:** Apresentar os três pilares do produto com clareza tecnológica.

- Background: `#10315A` (Navy Deep)
- **Headline:** `"NeurovIvA — Reabilitação integrada do início ao fim."` — Montserrat 900, branco
- **Layout de 3 cards** em linha (desktop) / stack vertical (mobile):

  **Card 1 — Órtese 3D Personalizada**
  - Ícone/micro-render da órtese
  - `"Escaneamento 3D · Design paramétrico · Impressão com material nacional"`
  - Badge: `TRL 6 · Estudo clínico ativo (CAAE)`

  **Card 2 — Plataforma de Prescrição**
  - Screenshot ou mockup do web app
  - `"Profissionais prescrevem, configuram e acompanham remotamente"`
  - Badge: `Em aceleração In.cube InovaHC/USP`

  **Card 3 — App de Telereabilitação**
  - Mockup mobile
  - `"Exercícios supervisionados, monitoramento de adesão, teleatendimento"`
  - Badge: `Mobile-first · Integrado ao SUS Digital`

- **Animação:** cards entram com fade + slide-up ao fazer scroll (GSAP ScrollTrigger)
- **Referências diretas:** CMR Surgical (estrutura de features), Sword Health (showcase de produto)

---

### Seção 4 — Validação Científica (cream com elementos de destaque)
**Objetivo:** Responder à pergunta do investidor: "isso tem evidência?"

- Background: `#F9F8F4` com linha divisória teal
- **Headline:** `"Tecnologia validada. Parceria com as maiores instituições do Brasil."` — Montserrat 800
- **Dois blocos lado a lado:**

  **Bloco Evidência Clínica:**
  - Estudo com 12 pacientes pós-AVC
  - Parceria UNIFESP + UniVap
  - CAAE 85355924.1.0000.5503
  - Fomento: CNPq Processo 445657/2023-5 + Finep Rede 5.0

  **Bloco Reconhecimento:**
  - 🥇 1º lugar Acelera Startup FIESP 2025
  - 🥈 2º lugar Prêmio Inovação Eng. Biomédica para o SUS — SBEB 2025
  - In.cube InovaHC/USP
  - UPLab

- **Grid de logos parceiros:** UNIFESP, UniVap, SENAI, AWS Startups, Sebrae, Mão3D, Ministério da Saúde, SUS Digital — logos em grayscale que voltam a cor no hover
- **Referências diretas:** Altos Labs (credibilidade científica editorial), Orna (logos de parceiros)

---

### Seção 5 — Impacto em Perspectiva (dark navy, inspiracional)
**Objetivo:** Elevar o discurso do produto para missão. O momento "por que isso importa".

- Background: `#0E1E35`
- **Foto fullwidth** de pessoa com órtese em contexto real (casa, clínica, ao ar livre) — em overlay escuro
- **Citação sobreposta:** frase de paciente ou de profissional de saúde do estudo clínico
- **Tagline de missão:** `"Tornar a personalização na reabilitação acessível e inteligente."` — Montserrat 700, teal
- **Referências diretas:** Neuralink (narrativa de pioneiros), CMR Surgical (citação de paciente)

---

### Seção 6 — Equipe (cream, humanizada)
**Objetivo:** Estabelecer credibilidade da equipe. Investidor investe em pessoas antes do produto.

- Background: `#F9F8F4`
- **Headline:** `"A equipe por trás do NeurovIvA."` — Montserrat 800, Navy
- **Cards de perfil** para os 3 fundadores:
  - Foto profissional (ou ilustração coerente com a marca)
  - Nome + cargo
  - Formação + vínculo institucional (UNIFESP, etc.)
  - Linha de especialidade em teal
- **Conselho Científico:** linha compacta com nomes, títulos e áreas
- **Referências diretas:** Orna (seção de time limpa), CMR Surgical (faces + cargos)

---

### Seção 7 — CTA Final (dark navy, direto)
**Objetivo:** Conversão. Contato via WhatsApp.

- Background: gradiente `#0E1E35` → `#10315A`
- **Headline:** `"Pronto para conversar?"` — Montserrat 900, branco
- **Subheadline:** `"Somos uma startup com tecnologia validada e time sério. Se você investe, pesquisa ou quer ser parceiro — vamos falar."` — DM Sans 400, teal claro
- **Botão principal:** `[💬 Falar no WhatsApp]` — verde WhatsApp com hover teal — link direto `https://wa.me/55...`
- **Email de contato:** `contato@limbse.com` em texto claro
- **Redes:** @limbse — ícone Instagram/LinkedIn

---

### Rodapé (dark, compacto)
- Logo Limbse branco
- CNPJ + Sede (São José dos Campos, SP)
- Links: #produto · #validação · #equipe · #contato
- `© 2025 Limbse Tecnologia Assistiva`

---

## 4. Design Responsivo — Mobile-First

O site é projetado e codificado **começando pelo mobile** (320px–390px). Desktop é uma expansão do mobile, não o contrário. Cada decisão de layout, tipografia e interação parte da tela menor e escala para cima.

### Breakpoints (Tailwind padrão)

| Nome | Largura | Dispositivo referência |
|---|---|---|
| base (mobile) | 0 – 639px | iPhone SE → iPhone 16 Pro |
| `sm` | 640px+ | iPhone landscape, tablets pequenos |
| `md` | 768px+ | iPad portrait |
| `lg` | 1024px+ | iPad landscape, notebooks |
| `xl` | 1280px+ | Desktop padrão |
| `2xl` | 1536px+ | Desktop widescreen |

---

### Navegação

**Mobile:** header fixo com logo à esquerda + botão hamburguer à direita. Menu abre em fullscreen overlay com animação Framer Motion (slide de cima). Links grandes (min. 48px tap target). Toggle PT/EN no rodapé do overlay.

**Desktop:** header fixo com logo à esquerda, links de navegação no centro, toggle PT/EN + botão CTA (WhatsApp/email) à direita.

---

### Tipografia Responsiva (escala fluida)

| Elemento | Mobile | Desktop |
|---|---|---|
| Headline Hero | `text-4xl` (36px) | `text-7xl` (72px) |
| Headline Seção | `text-3xl` (30px) | `text-5xl` (48px) |
| Subtítulo | `text-xl` (20px) | `text-2xl` (24px) |
| Corpo | `text-base` (16px) | `text-lg` (18px) |
| Label/Badge | `text-xs` (12px) | `text-sm` (14px) |

Usar `clamp()` via plugin Tailwind (`fluid-type`) para interpolação contínua sem saltos bruscos entre breakpoints.

---

### Layout por Seção

**Hero**
- Mobile: wireframe 3D ocupa 50% da tela, headline abaixo, CTAs empilhados verticalmente
- Desktop: wireframe 3D centralizado com headline e CTAs sobrepostos, layout dividido em duas colunas ou centrado

**Problema (métricas)**
- Mobile: cards de métricas em coluna única, fonte grande, muito espaço vertical
- Desktop: 3 cards lado a lado em linha

**NeurovIvA (3 pilares)**
- Mobile: stack vertical com scroll — cada card ocupa 100% da largura
- Desktop: grid 3 colunas

**Validação**
- Mobile: stack vertical — evidência clínica, depois reconhecimento, depois logos parceiros em grid 2×N
- Desktop: dois blocos lado a lado + logos em linha

**Equipe**
- Mobile: cada membro em card vertical empilhado (foto, nome, cargo, especialidade)
- Desktop: 3 cards em linha

**CTA Final**
- Mobile: texto centralizado, botão em largura total
- Desktop: texto e botão lado a lado ou centralizado com mais espaço em branco

---

### Elemento 3D no Mobile

Three.js em mobile tem custo de performance. Estratégia:

- **Dispositivos com GPU capaz** (detectado via `navigator.hardwareConcurrency >= 4`): renderiza o wireframe normalmente com rotação reduzida (15fps é suficiente para efeito de blueprint)
- **Dispositivos de baixo desempenho** ou **`prefers-reduced-motion: reduce`**: substitui o canvas WebGL por uma imagem estática do wireframe (PNG transparente gerada durante o desenvolvimento)
- O canvas 3D é sempre carregado com `dynamic + ssr: false` e `loading="lazy"` — nunca bloqueia o LCP

---

### Vídeo no Mobile

iOS não faz autoplay de vídeo com áudio. Estratégia para os vídeos clínicos:
- `autoPlay muted loop playsInline` — funciona no iOS e Android
- `IMG_1187` (hero loop): carregado apenas em `md+` — em mobile usa foto estática para não impactar dados móveis
- `IMG_1191` (seção de impacto): carregado sob demanda com `IntersectionObserver` — começa a baixar quando o usuário chega perto da seção

---

### Touch e Interações Mobile

- Tap targets mínimos: 48×48px para todos os botões e links
- Sem efeitos hover como única indicação de interatividade — usar estados `active:` como alternativa em mobile
- Cards dos pilares NeurovIvA: em mobile, toque abre um accordion com detalhes (em vez de hover)
- Sem scroll horizontal em nenhum breakpoint
- Seção de logos de parceiros: scroll horizontal suave com snap (`overflow-x: auto; scroll-snap-type: x mandatory`) em mobile

---

### Acessibilidade

- Contraste mínimo WCAG AA em todos os textos
- `alt` descritivo em todas as imagens
- `aria-label` em botões de ícone (WhatsApp, hamburguer)
- Focus ring visível para usuários de teclado (não remover o outline padrão sem substituir)
- Ordem lógica do DOM igual à ordem visual

---

## 5. Stack Técnica Recomendada

### Framework
**Next.js 14+ (App Router) + TypeScript** — repositório já criado em `github.com/Limbse/limbse.github.io`.

**Configuração confirmada no repo:**
- `output: "export"` → geração estática, deploy direto no GitHub Pages
- `basePath: ""` → domínio raiz (`limbse.github.io` ou domínio customizado)
- Workflow GitHub Actions já estruturado (`.github/workflows`)

**Implicações do static export:**
- Componentes com Three.js precisam de diretiva `'use client'`
- i18n via `next-intl` com `generateStaticParams` por locale (não `next-i18next` que não funciona bem com static export)
- Sem API routes — contato via WhatsApp link direto e `mailto:`

### Estilização
**Tailwind CSS v3** (já incluso no template `create-next-app`) + arquivo `tailwind.config.ts` com os tokens de design da Limbse (cores, fontes, breakpoints).

### Animações
**Framer Motion** — melhor integração com React/Next.js que o GSAP, suporte nativo a `AnimatePresence` e `useInView`. Fade, slide-up, scale e counter incremental com `useMotionValue`.

### Elemento 3D
**Three.js + @react-three/fiber + @react-three/drei** — ecossistema React nativo para Three.js. Renderização do wireframe com `<WireframeGeometry>` ou shader customizado. Componente marcado como `'use client'`, lazy-loaded com `dynamic(() => import(...), { ssr: false })` para não bloquear o SSG.

### Internacionalização
**next-intl** com rotas estáticas: `/` (PT, padrão) e `/en/` (EN). Locale detectado pelo browser na primeira visita, persistido em cookie.

### Fontes
`next/font/google` com `Montserrat` (700, 800, 900) + `DM Sans` (300, 400, 500) — otimização automática do Next.js, zero layout shift.

### Contato
- PT: botão WhatsApp direto (`https://wa.me/55...`)
- EN: botão email (`mailto:contato@limbse.com`) como CTA principal

### Performance
- Imagens via `next/image` com formato WebP automático e lazy loading
- 3D carregado apenas após hydration com `dynamic + ssr: false`
- `prefers-reduced-motion`: desativa animações e substitui 3D por imagem estática
- Lighthouse target: Performance ≥ 90 mobile

### Deploy
GitHub Pages via GitHub Actions. Branch `main` → build `next build` → pasta `out/` publicada.

---

## 5. Estrutura de Assets no Repositório

### ⚠️ Localização correta no Next.js

Assets estáticos (imagens, vídeos, modelos 3D) devem ficar em **`public/`**, não dentro de `app/`. Arquivos em `app/` são tratados como código pelo Next.js e não são servidos como arquivos estáticos.

- `public/assets/` → acessíveis pela URL `/assets/...`
- Referenciados com `next/image` (`src="/assets/images/foto-paciente.jpg"`) ou diretamente via `<video src="/assets/videos/hero.mp4">`
- O build estático (`output: "export"`) copia tudo de `public/` para `out/` automaticamente

### Estrutura de pastas proposta

```
public/
└── assets/
    ├── images/
    │   ├── foto-paciente-impacto.jpg       → Seção Impacto Humano
    │   ├── foto-ortese-produto.jpg         → Seção NeurovIvA
    │   ├── foto-impressao-3d.jpg           → Seção NeurovIvA
    │   ├── foto-lab.jpg                    → Seção Validação
    │   ├── equipe-thabata.jpg              → Seção Equipe
    │   ├── equipe-eduardo.jpg              → Seção Equipe
    │   ├── equipe-elizete.jpg              → Seção Equipe
    │   └── parceiros/                      → logos PNG transparente
    │       ├── unifesp.png
    │       ├── innovahc.png
    │       ├── cnpq.png
    │       └── ...
    ├── videos/
    │   ├── clinica-fitting.mov             → renomear de IMG_1187.MOV
    │   └── clinica-paciente.mov            → renomear de IMG_1191.MOV
    └── 3d/
        └── orthosis.glb
```

### Convenção de nomenclatura

- Nomes em **kebab-case**, sem espaços, sem caracteres especiais
- Descritivos e semânticos (não `IMG_1187`, não `foto1`)
- Imagens de parceiros: nome da instituição em minúsculo (`unifesp.png`, `aws.png`)

### Workflow da equipe

Conforme as fotos forem selecionadas do Google Fotos, colocar diretamente em `public/assets/images/` com o nome correto da tabela acima. O componente da seção correspondente já vai estar configurado para buscar o arquivo por aquele nome — basta adicionar a foto e o site atualiza automaticamente no próximo build.

---

## 6. Mapa de Conteúdo × Assets Necessários

| Seção | Copy necessária | Assets visuais |
|---|---|---|
| Hero | Tagline (pronta no AGENTS.md) | `3d/orthosis.glb` |
| Problema | 3 estatísticas + 1 parágrafo | — (seção tipográfica) |
| NeurovIvA | Descrição dos 3 pilares | `foto-ortese-produto.jpg`, `foto-impressao-3d.jpg` |
| Validação | Dados CAAE, prêmios, fomento | `foto-lab.jpg` + logos em `parceiros/` |
| Impacto | Citação de paciente ou prof. de saúde | `foto-paciente-impacto.jpg` + `videos/clinica-paciente.mov` |
| Equipe | Bio curta de cada membro | Fotos profissionais (3 fundadores) |
| CTA | Frase de chamada + número WhatsApp | — |

---

## 6. Prioridade de Desenvolvimento

**Fase 1 — MVP Institucional (1–2 semanas)**
Hero + Problema + Produto (NeurovIvA) + CTA com WhatsApp. Sem 3D ainda. Animações básicas de fade/slide.

**Fase 2 — Credibilidade + Equipe (1 semana)**
Seções de Validação, Equipe e rodapé. Logos parceiros. Refinamento de animações.

**Fase 3 — Diferenciação Visual (1–2 semanas)**
Integração do 3D (Spline ou Three.js). Animações de counter. Seção de impacto com foto fullwidth. Ajustes finais mobile.

---

## 7. Inventário de Assets Confirmados

### Modelo 3D — `orthosis.glb`
- **Formato:** GLB 2.0, gerado no Blender
- **Geometria:** 1 mesh (`orhosis`), 2.970 triângulos — **leve e ideal para web**
- **Atributos:** POSITION + NORMAL — suficiente para PBR rendering
- **Tamanho:** 78 KB — sem impacto relevante no carregamento
- **Status:** ✅ Pronto para Three.js
- **Estética definida: WIREFRAME** — usar `WireframeGeometry` + `LineBasicMaterial` em teal (`#3BB7A2`) sobre fundo navy. Evoca blueprint de engenharia, coerente com a identidade técnica da Limbse. Sem necessidade de textura ou PBR.
- **Efeito sugerido:** rotação lenta + pulso sutil de opacidade nas linhas (como se o modelo "respirasse")
- **STL:** `orhosis.stl` (46 MB) — backup de alta resolução para fabricação, não usar no site

### Vídeos Clínicos
| Arquivo | Duração | Resolução | Conteúdo |
|---|---|---|---|
| `IMG_1187.MOV` | 8 s | 1920×1080 | Close-up da colocação da órtese na paciente — mão da profissional ajustando as tiras; órtese branca com velcro preto claramente visível |
| `IMG_1191.MOV` | 27 s | 1920×1080 | Profissional e paciente em conversa na clínica; paciente segura e examina a órtese; médico ao fundo — cena clínica autêntica e humanizada |

**Uso recomendado:**
- `IMG_1187` → **Hero section:** loop silencioso em background (recortado para foco na órtese + mãos)
- `IMG_1191` → **Seção de Impacto Humano:** vídeo completo com fade, âncora emocional do site

### Assets a selecionar (fase pré-desenvolvimento)
Briefing detalhado em `PHOTO-BRIEF.md`. Seleção a ser feita pela equipe antes do início da fase 2.

| Asset | Seção | Status |
|---|---|---|
| Foto da paciente em momento orgânico | Impacto Humano | 🔴 Pendente |
| Foto da órtese como produto | NeurovIvA | 🔴 Pendente |
| Headshot Thabata (CEO) | Equipe | 🔴 Pendente |
| Headshot Eduardo (CTO) | Equipe | 🔴 Pendente |
| Headshot Dra. Maria Elizete | Equipe | 🟡 Pendente |
| Foto impressão 3D / CAD | NeurovIvA | 🟡 Pendente |
| Foto laboratório | Validação | 🟡 Pendente |
| Vídeo impressão 3D | NeurovIvA | 🟢 Pendente |

---

## 8. Decisão Confirmada: Site Bilíngue (PT / EN)

### Estratégia de Internacionalização
- **Framework i18n:** `react-i18next` — padrão maduro, bem integrado com React/Vite
- **Estrutura de arquivos:** `locales/pt/translation.json` + `locales/en/translation.json`
- **Seletor de idioma:** toggle discreto no header (`PT | EN`) — sem dropdown
- **Detecção automática:** detectar idioma do browser e aplicar como padrão
- **URLs:** rota por prefixo `/en/` ou parâmetro — a decidir conforme SEO target
- **Prioridade de tradução:** todo o conteúdo de seções principais. Rodapé e detalhes legais podem ser apenas PT na fase MVP.

### Implicações de Conteúdo
- Todos os copies do AGENTS.md precisam de versão EN revisada (não só tradução automática)
- Estatísticas contextuais do Brasil precisam de nota explicativa em inglês (ex: "SUS = Brazil's public health system")
- Nomes de prêmios e programas brasileiros mantêm nome original com tradução em parênteses

---

## 9. Decisões de Design Abertas

1. ~~**Material do 3D:**~~ ✅ **Definido: wireframe teal (`#3BB7A2`) sobre fundo navy** — estética de blueprint de engenharia.
2. **Autorização das imagens:** os vídeos clínicos possuem TCLE/autorização de imagem da paciente para uso em material institucional/marketing?
3. **Domínio/Deploy:** Vercel (recomendado para React) ou hospedagem específica já definida?
4. **Analytics:** Google Analytics 4 ou Plausible (privacy-first, mais adequado ao contexto de saúde e LGPD)?
5. **Formulário de contato vs. WhatsApp:** o AGENTS.md define apenas WhatsApp — confirmar se essa é a decisão final também para a versão EN (audiência internacional pode preferir e-mail).
