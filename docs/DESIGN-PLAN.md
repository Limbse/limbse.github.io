# Planejamento de Design - Site Institucional Limbse

**Versão:** 1.1  
**Atualização:** Maio de 2026  
**Audiência-alvo:** investidores, parceiros institucionais, avaliadores de edital e pesquisadores.

Este documento é a referência principal de design para o site institucional da Limbse e da solução NeurovIvA. Qualquer proposta visual, textual ou técnica deve preservar a identidade da marca, a narrativa de reabilitação pós-AVC e o estado real do projeto.

---

## 1. Estado Atual do Site

O site já possui uma landing page bilíngue com:

- Hero com vídeo clínico de fundo.
- Seções de Problema, NeurovIvA, Validação, Impacto, Equipe, CTA final e Rodapé.
- Modelo 3D wireframed em GLB da órtese, renderizado com Three.js.
- Contato por WhatsApp em português e e-mail como alternativa.
- Identidade visual baseada em navy, teal, coral e cream.
- Next.js com App Router, exportação estática, Tailwind CSS, Framer Motion e dicionário local em `lib/dictionaries.ts`.

### Decisão Importante

Não existe mais gráfico radar na landing page. O radar não deve ser reintroduzido. A evidência visual tecnológica passa a ser o modelo 3D wireframed da órtese em GLB, contextualizado como parte do fluxo digital da NeurovIvA.

---

## 2. Posicionamento Narrativo

A Limbse deve ser apresentada como uma startup de tecnologia assistiva e reabilitação que combina engenharia biomédica, design digital, manufatura aditiva e saúde digital.

A NeurovIvA não deve parecer apenas uma órtese. Ela é um ecossistema integrado composto por:

1. Plataforma profissional de prescrição e acompanhamento.
2. Órtese 3D personalizada.
3. App de telereabilitação para paciente/cuidador.

O foco narrativo é:

- Reabilitação pós-AVC.
- Continuidade do cuidado.
- Adesão terapêutica.
- Rastreabilidade.
- Personalização anatômica e clínica.
- Integração entre prescrição, fabricação e acompanhamento remoto.

### Mensagem Principal Recomendada

**H1 sugerido:**  
Tecnologia assistiva personalizada para reabilitação pós-AVC

**Frase secundária:**  
Design que transforma. Tecnologia que fortalece.

**Subtítulo sugerido:**  
A NeurovIvA integra órtese 3D personalizada, prescrição digital e telereabilitação para ampliar continuidade do cuidado, adesão e rastreabilidade.

---

## 3. Identidade Visual

### Paleta

- Navy: `#0E1E35`
- Navy Deep: `#10315A`
- Teal: `#3BB7A2`
- Teal Light: `#6FCFC0`
- Teal Pale: `#A8E3D9`
- Teal BG: `#E6F7F4`
- Cream: `#F9F8F4`
- Coral/Red: `#F04D4F`
- Amber: `#FFA62B`
- Dark Gray: `#2B2F33`
- Light Gray: `#E6E6E6`

### Uso das Cores

- Navy e Navy Deep sustentam seções institucionais, produto, tecnologia e CTA.
- Cream deve dar respiro, leitura e contraste nas seções de problema, validação e equipe.
- Teal é o acento principal: botões, bordas, microinterações, linhas de destaque e elementos do GLB.
- Coral deve ser usado com parcimônia para urgência, especialmente dados ligados ao problema do AVC.
- Evitar interfaces dominadas por uma única variação de azul ou teal. A alternância entre dark e cream deve criar ritmo editorial.

### Tipografia

- Títulos: Montserrat SemiBold/Bold/ExtraBold.
- Corpo: DM Sans Regular/Medium.
- Evitar excesso de pesos muito pesados em cards compactos.
- Hero pode usar maior impacto tipográfico; cards, badges e textos auxiliares devem ter escala menor e leitura estável.

### Diretrizes de Espaçamento

- Mobile-first: começar por 320px-390px e expandir.
- Seções devem ter respiro suficiente, mas sem criar blocos longos demais no celular.
- Cards devem manter espaçamento interno confortável, com hierarquia clara entre título, descrição e badge.
- CTAs devem ter altura mínima confortável para toque e largura total no mobile quando fizer sentido.

---

## 4. Ordem Narrativa Recomendada

### 1. Hero

Objetivo: explicar claramente o que é a NeurovIvA/Limbse em poucos segundos.

- Manter o vídeo de fundo.
- O vídeo deve funcionar como evidência humana/clínica e atmosfera institucional, não como demonstração técnica detalhada.
- O texto deve estar acima do vídeo com overlay suficiente para legibilidade.
- O slogan deve ser secundário ao posicionamento principal.
- CTAs recomendados:
  - Conheça a NeurovIvA
  - Fale conosco

### 2. Problema

Objetivo: mostrar o impacto do AVC e da descontinuidade do cuidado.

- Destacar números grandes com leitura rápida.
- Evitar excesso de texto pequeno.
- Conectar fila, rigidez, dor e dependência à necessidade de cuidado contínuo e personalização.

### 3. Solução NeurovIvA

Objetivo: apresentar a NeurovIvA como ecossistema integrado, não como três produtos isolados.

Ordem sugerida:

1. Plataforma de Prescrição.
2. Órtese 3D Personalizada.
3. App de Telereabilitação.

A seção deve deixar claro que a solução conecta prescrição, fabricação e acompanhamento.

### 4. Como Funciona / Fluxo Digital

Objetivo: mostrar a jornada operacional da NeurovIvA.

Fluxo sugerido:

Prescrição -> escaneamento tridimensional -> design/modelagem -> fabricação por filamento fundido (FFF) -> entrega -> acompanhamento remoto.

Esta seção pode ser textual, visual ou integrada à seção do GLB, desde que mantenha pouca carga de texto e boa hierarquia.

### 5. Tecnologia / GLB Wireframed

Objetivo: dar função narrativa ao modelo 3D da órtese.

Título sugerido:

Do escaneamento à órtese personalizada

Subtítulo sugerido:

A NeurovIvA transforma dados anatômicos e parâmetros clínicos em um fluxo digital para prescrição, modelagem, fabricação e acompanhamento da reabilitação.

Legenda recomendada próxima ao GLB:

Modelo tridimensional interativo de órtese personalizada.

Microtextos possíveis:

- Prescrição digital.
- Modelo anatômico.
- Design paramétrico.
- Manufatura aditiva.
- Acompanhamento remoto.

### 6. Evidência e Validação

Objetivo: responder rapidamente se a tecnologia é séria, validada e apoiada por instituições relevantes.

- Separar evidência científica, fomento, reconhecimento e parceiros.
- Evitar que todos os cards tenham o mesmo peso visual.
- Logos e nomes de parceiros devem ser legíveis e espaçados.

### 7. Equipe

Objetivo: mostrar credibilidade humana e técnica.

- Priorizar nome, função e contribuição de cada pessoa.
- Reduzir textos longos.
- Preparar estrutura visual para fotos quando os assets estiverem disponíveis.

### 8. CTA Final

Objetivo: converter o interesse em conversa.

Copy sugerida:

**Headline:** Quer implementar reabilitação personalizada na sua instituição?  
**Subtexto:** Converse com a Limbse sobre pilotos, parcerias e validação da NeurovIvA.  
**CTA:** Entrar em contato

---

## 5. Papel do Vídeo no Hero

O vídeo do hero deve ser preservado. Ele cumpre três funções:

1. Humanizar o primeiro contato com a Limbse.
2. Mostrar que a tecnologia já existe em contexto clínico real.
3. Criar uma entrada memorável sem transformar o hero em uma demonstração técnica pesada.

Diretrizes:

- Usar overlay navy suficiente para contraste.
- Evitar texto longo sobre áreas visualmente complexas do vídeo.
- Não colocar o GLB competindo com o vídeo no mesmo foco visual principal.
- Manter `autoPlay`, `muted`, `loop` e `playsInline`.
- Em mobile, priorizar legibilidade, LCP e consumo de dados.
- Se necessário em etapa futura, usar poster/fallback estático para conexões lentas ou dispositivos modestos.

---

## 6. Papel do GLB Wireframed da Órtese

O GLB deve ser mantido. Ele representa a dimensão técnica da NeurovIvA:

- Fluxo digital.
- Personalização anatômica.
- Modelagem tridimensional.
- Design paramétrico.
- Manufatura aditiva.
- Tecnologia assistiva aplicada à reabilitação.

Diretrizes:

- O GLB deve aparecer como evidência visual da tecnologia, não como decoração.
- A estética wireframe teal sobre fundo navy deve ser preservada.
- A seção deve explicar o que o visitante está vendo.
- O modelo deve ter legenda curta e, se possível, microtextos contextuais.
- O GLB não deve substituir a narrativa humana do hero.
- O GLB não deve ser removido.
- O radar não deve voltar como alternativa ao GLB.

Performance e fallback:

- Carregamento client-side, sem SSR.
- Lazy loading ou renderização apenas quando a seção estiver próxima/visível.
- Respeitar `prefers-reduced-motion`.
- Considerar imagem estática do modelo como fallback.
- Limitar DPR e animação em mobile.

---

## 7. Padrões de Componentes e Seções

### Cards

- Usar cards para itens repetidos: métricas, pilares, evidências, equipe e parceiros.
- Evitar cards dentro de cards.
- Raio visual moderado, preferencialmente até 8px quando possível.
- Em fundos claros: borda leve, sombra sutil e boa separação.
- Em fundos escuros: borda translúcida, fundo com baixa opacidade e destaque teal.
- Badge deve complementar a informação, não competir com o título.

### Botões e CTAs

- CTA primário: teal com texto navy ou branco, conforme contraste.
- CTA secundário: outline discreto ou link textual forte.
- WhatsApp deve aparecer onde o objetivo é contato direto.
- Botões mobile devem ter área de toque confortável e não quebrar texto.
- CTAs devem sempre indicar ação clara, não apenas navegação vaga.

### Seções

- Alternar seções dark e cream para ritmo e legibilidade.
- Cada seção deve ter uma função narrativa clara.
- Evitar seções que apenas repetem a mesma estrutura de cards.
- Em mobile, conteúdo deve empilhar de forma natural, sem scroll horizontal acidental.

### Motion

- Animações devem ser suaves e pontuais.
- Entrada em viewport pode usar fade/slide leve.
- Evitar excesso de delays no mobile.
- Respeitar `prefers-reduced-motion`.
- Não depender de hover como única indicação de interatividade.

---

## 8. Diretrizes Mobile-First

O mobile é a experiência prioritária. O desktop é uma expansão do layout mobile.

### Layout

- Hero deve manter H1, subtítulo e CTAs legíveis na primeira tela.
- Cards devem empilhar em coluna única no mobile.
- Métricas precisam de números grandes e labels curtos.
- Seção do GLB deve ter altura controlada para não dominar a página.
- CTA final deve ser direto e com botão em largura confortável.

### Interação

- Tap targets mínimos de aproximadamente 48px.
- Menu mobile deve manter foco claro e links grandes.
- Hover não pode ser a única indicação de estado.
- Não deve haver scroll horizontal.

### Acessibilidade

- Contraste mínimo WCAG AA nos textos principais.
- Ordem do DOM deve acompanhar a ordem visual.
- Imagens e elementos interativos devem ter texto alternativo ou labels apropriados quando aplicável.
- Foco de teclado deve permanecer visível.

---

## 9. Stack e Restrições Técnicas Atuais

Estado real do projeto:

- Next.js com App Router.
- Static export via `output: "export"`.
- Tailwind CSS.
- Framer Motion.
- Three.js com `@react-three/fiber` e `@react-three/drei`.
- Fontes via `next/font/google`.
- Conteúdo bilíngue em `lib/dictionaries.ts`.
- Rotas por idioma em `app/[lang]`.

Diretrizes:

- Antes de alterar código Next.js, consultar a documentação local relevante em `node_modules/next/dist/docs/`.
- Não introduzir novas dependências sem justificativa clara.
- Não alterar rotas, build ou configuração global para mudanças puramente visuais.
- Preservar exportação estática.
- Contato deve continuar sem backend.

---

## 10. Assets Confirmados

### Vídeo do Hero

Arquivos atuais:

- `public/assets/videos/clinica-fitting.mp4`
- `public/assets/videos/clinica-fitting-vertical.mp4`
- versões `.mov` como origem/backup.

Uso:

- Hero cinematográfico.
- Evidência humana e clínica.
- Deve permanecer.

### Vídeo Clínico Complementar

Arquivo:

- `public/assets/videos/clinica-paciente.mov`

Uso possível:

- Impacto humano ou seção futura, desde que haja autorização de imagem e estratégia de performance.

### Modelo 3D

Arquivo:

- `public/assets/3d/orthosis.glb`

Uso:

- Modelo wireframed interativo da órtese personalizada.
- Evidência visual do processo digital da NeurovIvA.
- Deve permanecer.

---

## 11. Decisões Registradas

- O hero mantém vídeo.
- O GLB da órtese wireframed permanece no site.
- O GLB deve ter função narrativa clara e não competir com o vídeo do hero.
- NeurovIvA é um ecossistema integrado, não apenas uma órtese.
- A ordem narrativa recomendada prioriza clareza: problema -> solução integrada -> fluxo digital/tecnologia -> evidência -> equipe -> CTA.
- O gráfico radar não existe mais e não deve ser reintroduzido.
- O redesign será incremental.
- A documentação deve ser atualizada antes de mudanças visuais maiores.

---

## 12. Questões Abertas

- Confirmar autorização de uso institucional/marketing para vídeos e imagens clínicas.
- Definir se haverá imagem estática fallback do GLB.
- Selecionar fotos reais para equipe, produto, laboratório e impacto humano conforme `docs/PHOTO-BRIEF.md`.
- Confirmar estratégia final de CTA para versão em inglês: e-mail principal ou WhatsApp secundário.
- Definir se analytics continuará com Plausible e quais eventos de CTA serão medidos futuramente.
