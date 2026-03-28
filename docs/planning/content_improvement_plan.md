# Plano de aprimoramento didático

Date: 2026-03-28
Fonte de referência: `reference/orientacoes.pdf` · `reference/CVC_v20_Mega_Plano_Expansao_de_Midia.pdf`

---

## Posição no roadmap de versões

O projeto está no **gap V1→V2**. V1 (Tronco Utilizável) está fechado. V2 é o próximo movimento.

| Versão | Nome | Estado | O que entrega |
|---|---|---|---|
| V1 | Tronco Utilizável | ✅ feito | árvore íntegra, index, zero links mortos, Parts 1-9 navegáveis |
| **V2** | **Espinha Fixa** | **→ agora** | schema finalizado, espinha rígida por Part, taxonomia de falha, feedback graduado |
| V3 | Media Batch A | aguarda V2 | +70–90 mídias reais, foco Parts 4–9 |
| V4 | Training Batch 1 | aguarda V3 | 20 MCQ, 15 V/F, 10 pegadinhas, 10 OSCE, 6 casos multi-step |
| V5 | Decisão, Escada, Dispositivos Premium | aguarda V4 | Parts 1–3 no nível de 4–6 |
| V6 | Imagem e Confirmação Premium | aguarda V5 | Part 5 como mini-curso, atlas de imagem, RX/US profundos |
| V7 | Complicações, Bundles, Territórios Hostis | aguarda V6 | mundo real ruim incorporado |
| V8 | Casos Transversais e Linguagem de Expertise | aguarda V7 | casos multi-step com taxonomia de falha plena |
| V9 | Premium Web Final | aguarda V8 | plataforma única, não arquipélago |
| V10 | Pré-dashboard / Pré-app | aguarda V9 | specs fechadas, exportabilidade, camada superior |

**Regra cardinal do roadmap:** sem espinha fixa, todo refinamento visual é retrabalho.
Isso significa: **V2 precede qualquer expansão de mídia**. A fila de aquisição visual neste documento é referência para V3 — não para a sessão de hoje.

---

## Diagnóstico de estado

### Inventário de assets (374 total)

| Categoria | Quantidade | Função real |
|---|---|---|
| Imagens clínicas reais open-source | 19 | Ancora didática de alto valor |
| SVGs gerados por IA (theory + question) | 263 | Esquemas de texto formatado — baixa ancoragem clínica |
| Posters PNG derivados (AI) | ~40 | Decorativo ou redundante com texto |
| Boards JPG derivados | 4 | Suporte editorial leve |
| Backgrounds PNG | ~40 | Puramente decorativo |

**Conclusão:** proporção invertida. O que ensina de verdade (imagem clínica real) representa 5% do acervo. O que preenche espaço sem construir memória visual (SVG de IA) representa 70%.

### O problema com os SVGs gerados por IA

IA gera SVG de texto formatado com aparência de esquema. O resultado:

1. **Não ancora em realidade clínica** — o aluno vê texto em caixas, não vê anatomia, gesto ou exame real
2. **Não constrói memória visual** — o aluno não reconhece o objeto real quando encontra na beira do leito
3. **Mimetiza profundidade sem entregar** — parece informação organizada, mas é o mesmo conteúdo do texto ao lado
4. **Compete com imagens reais pelo espaço visual** — quando um SVG de IA aparece ao lado de uma foto clínica real, ele enfraquece a foto

**Regra**: SVG de IA pode existir como *suporte inline de texto* (card com 2-3 bullets). Nunca como *visual principal* de seção de conteúdo clínico.

### Problemas didáticos identificados por página

#### Part 1 — Decisão antes da técnica
- Bom: 4 imagens reais, tabela decisional sólida, filtros bem definidos
- Fraco V2: casos sem âncora visual; treino é parágrafo descritivo sem objeto real
- Fraco V2: taxonomia de falha não está embutida nos pitfalls
- Gap visual V3: sem imagem de comparação periférico vs central no mesmo paciente

#### Part 2 — Escada de acesso / seleção de dispositivo
- Problema V2: visual principal são posters PNG de IA
- Problema V2: `theory_svgs/` (ladder_hero, ladder_overview, etc.) dominam espaço visual
- Gap visual V5: sem imagem real de escalada com contexto de decisão

#### Part 3 — Identidade dos dispositivos
- Problema V2: visual principal é poster_part3_atlas.png (IA)
- Tem port com gripper (boa imagem)
- Gap visual V5: sem comparação visual real das famílias lado a lado (port/PICC/CVC/HD/tunelizado)

#### Part 4 — Técnica e US
- Gap mais crítico de todo o bundle: **zero imagem operator-view real de US procedural**
- As imagens de US existentes (IJV colaterais, IJV narrowing) são patológicas, não guias de técnica
- Sem sequência Seldinger real
- Visual principal é poster_part4_masterclass.png (IA)
- Gap visual V3: operator-view US, sequência procedural, landmarks

#### Part 5 — Confirmação por imagem
- Base razoável (RX subclávia + CVC geral)
- Gap visual V3: sem par AP/lateral além da azigos; sem malposição em AD, VCS alto, subclávia
- Visual principal é poster_part5_atlas.png (IA) — V3 corrige isso

#### Part 6 — Complicações
- Melhor estado visual do bundle: pneumotórax, trombose VCS, sítio saída, biofilme
- Problema V2 (didático, não visual): taxonomia mecânico/radiológico/biológico mistura tipo de dano com modo de detecção
- Problema V2: casos são texto puro, sem âncora visual por cenário
- Gap visual V3: sem hemotórax, sem infecção visível em túnel

#### Part 7 — Manutenção
- Base razoável
- Gap visual V3: sem processo de troca de curativo (só produto), sem bundle visual completo

#### Part 8 — Territórios hostis
- Imagens patológicas pertinentes (colaterais, estreitamento)
- Gap visual V3: sem paciente obeso com US, sem coagulopatia visível

#### Part 9 — Checklist integrado
- Todas as imagens são reaproveitadas de outras Parts
- Gap visual V3: sem imagem específica de fechamento (remoção, oclusão de sítio)

---

## Hierarquia visual do conteúdo

Define qual tipo de visual deve ocupar qual posição em cada página.
Aplicável **a partir de V3** — V2 foca em estrutura, não em substituição de imagem.

### Nível 1 — Ancora principal (topo de seção, galeria de abertura)
- Foto clínica real com licença aberta
- Deve mostrar: paciente real, exame real, gesto real, ou dano real
- Fontes válidas: Wikimedia Commons (CC), CDC PHIL, PMC Open Access (CC-BY)

### Nível 2 — Suporte contextual (ao lado de texto explicativo)
- Foto clínica real de suporte (dispositivo real, kit real, material real)
- Fontes válidas: mesmas do Nível 1

### Nível 3 — Tabela ou comparador textual (inline com conteúdo)
- Tabela HTML (`data-table`) ou lista comparativa
- Substitui SVG de IA quando o conteúdo é comparativo/decisional

### Nível 4 — SVG/schema de IA (suporte inline apenas)
- Só como cartão de texto formatado (card de 2-3 bullets)
- **Nunca** como imagem principal de seção
- **Nunca** em galeria ao lado de foto clínica real

### Proibido como visual principal
- `poster_partX_masterclass.png` como abertura de masterclass
- `theory_svgs/ladder_*.svg` como visual de escada de acesso
- Boards derivados JPG como substituto de imagem clínica real

---

## Fontes de imagens reais open-source

*Referência para V3. Não sourcing antes de V2 estar fechada.*

### Wikimedia Commons
- Licenças válidas: CC BY, CC BY-SA, CC0, Public Domain
- **Termos de busca por Part:**
  - Part 4: `ultrasound guided central line`, `Seldinger technique`, `internal jugular vein needle`
  - Part 5: `central line chest xray malposition`, `right atrium catheter xray`, `subclavian catheter xray`
  - Part 6: `hemothorax chest xray`, `catheter related infection`, `exit site infection`
  - Part 7: `central line dressing change procedure`
  - Part 8: `ultrasound obese patient`, `difficult iv access`
  - Part 2/3 (V5): `peripheral intravenous catheter`, `PICC line insertion`, `tunneled catheter`, `implanted port`

### CDC PHIL (Public Health Image Library)
- Licença: domínio público
- Forte para: biofilme, infecção, CLABSI
- Já utilizados: `phil_7486` (staph), `phil_10548` (Alcaligenes)

### PMC Open Access (PubMed Central)
- Figuras CC-BY de artigos em acesso livre
- Forte para: sequências técnicas, comparadores, casos comentados
- Verificar licença individualmente por figura

### Radiopaedia
- CC BY-NC-SA — somente educação não comercial
- Forte para: variações de malposição em RX e TC

---

## Fila de aquisição (V3) — por prioridade

### Crítico — Part 4: zero imagem procedural real

| Target | Busca sugerida | Fonte |
|---|---|---|
| Probe US no pescoço (operator-view) | `ultrasound probe neck internal jugular` | Wikimedia |
| Needle in-plane / out-of-plane | `in-plane ultrasound guided needle` | PMC |
| Fio guia na veia | `guidewire central venous catheter` | Wikimedia |
| Dilatador sendo passado | `seldinger dilator central line` | PMC |

### Alto — Part 5: malposição além da azigos

| Target | Busca sugerida | Fonte |
|---|---|---|
| Cateter em AD (RX AP) | `right atrium catheter chest xray` | Wikimedia / PMC |
| Cateter alto em VCS | `high SVC catheter position xray` | PMC |
| Par AP + lateral de malposição não-azigos | `catheter malposition lateral xray` | PMC |

### Alto — Part 6: espectro de dano incompleto

| Target | Busca sugerida | Fonte |
|---|---|---|
| Hemotórax (RX) | `hemothorax chest xray` | Wikimedia |
| Infecção em túnel ou sítio | `catheter tunnel infection`, `exit site infection` | CDC PHIL / PMC |
| Hematoma de punção | `subclavian hematoma catheter` | PMC |

### Médio — Parts 7–9

| Target | Part | Busca sugerida | Fonte |
|---|---|---|---|
| Troca de curativo em andamento | 7 | `central line dressing change procedure` | Wikimedia |
| Sítio limpo vs comprometido | 7 | `catheter exit site comparison` | PMC |
| Remoção de cateter | 9 | `central venous catheter removal` | PMC |

### Baixo — Parts 2–3 (V5, não V3)

| Target | Part | Busca sugerida | Fonte |
|---|---|---|---|
| PICC sendo inserido | 2 | `PICC line insertion brachial` | Wikimedia |
| Periférico em antebraço | 2 | `peripheral intravenous cannula forearm` | Wikimedia |
| Cateter tunelizado (tipo Hickman) | 3 | `Hickman catheter tunneled` | Wikimedia |
| Famílias lado a lado | 3 | `central venous catheter types comparison` | PMC |

---

## Plano de rebaixamento dos SVGs de IA (V3)

*Executar após V2 fechar — não antes, para não retrabalhar estrutura ainda em mudança.*

### `assets/v20_part2_boost/theory_svgs/`
- `ladder_hero.svg`, `ladder_overview.svg` → substituir por tabela HTML decisional
- `escalation_cost_panel.svg`, `deescalation_panel.svg` → transformar em `callout` HTML
- `device_therapy_panel.svg`, `device_duration_panel.svg` → virar `data-table`
- `ij_vs_femoral_panel.svg` → remover como visual principal; substituir por imagem real quando disponível

### `assets/v20_part2_boost/question_svgs/`
- Cards de treino (MCQ, V/F, OSCE) — uso inline aceitável
- Nunca como visual principal de seção de conteúdo

### `assets/v20_part2_boost/posters_png/` (e boosts equivalentes de Parts 3, 4, 5)
- `poster_partX_masterclass.png` → remover como abertura visual das masterclasses
- Demais posters → mover para posição de suporte, após imagem real

### `assets/real/derived/`
- `maintenance_bundles_board.jpg` → manter como Nível 2 (suporte contextual)
- `hostile_territories_board.jpg` → manter como Nível 2
- `v20_premium_system_map.jpg` → usar só em contexto de navegação
- `v20_question_arsenal_board.jpg` → mover para surface de treinamento

---

## Critérios de qualidade didática por superfície

*Gate de V2: estrutura. Gate de V3+: visual.*

### Reality class (espinha da série) — V2 gate
- Blocos obrigatórios presentes: abertura · mapa mental · bloco nuclear · comparadores · pitfalls · casos · treino · checklist · ponte
- Cada pitfall com tipo de falha (cognitiva/técnica/sistêmica/cultural)
- Seção de treino com instrução concreta — não parágrafo descritivo
- Checklist com itens que mudam conduta

### Reality class — V3 gate (visual)
- Mínimo de **3 imagens reais** (Nível 1 ou 2)
- Pelo menos **1 imagem por seção principal** (mapa, casos, checklist)
- Cada caso com pelo menos **1 âncora visual**

### Masterclass (camada premium) — V2 gate
- Densidade argumentativa: explica decisão, não só mostra formatos
- Pelo menos 1 mini-caso com decisão explícita e consequência
- Nenhum poster PNG de IA como abertura

### Masterclass — V3/V5 gate (visual por arco)
- Parts 4–9: ≥ 4 imagens reais em V3
- Parts 1–3: ≥ 4 imagens reais em V5

### OSCE — V4 gate
- Cada estação com pelo menos 1 imagem clínica real como parte do prompt
- Critérios de desempenho referem a achados observáveis

### Casos transversais — V4/V8 gate
- Cada caso abre com imagem clínica real
- Decisão do usuário muda o que ele vê em seguida
- Erro tem custo visual (imagem do dano potencial)

---

## Regras operacionais para sessões de edição

1. **V2 primeiro, imagem depois.** Não inserir nova imagem antes de a espinha da Part estar rígida.

2. **Taxonomia de falha em cada pitfall.** Ao editar seção de pitfalls, classificar: cognitiva / técnica / sistêmica / cultural.

3. **Feedback graduado nos pontos de treino.** Substituir "certo/errado" por: elegante · prudente · aceitável · precipitado · desproporcional · perigoso.

4. **Imagem real antes, texto depois** (V3+). Ao abrir seção nova em V3, a pergunta é: *que imagem clínica real posso ancorar aqui?*

5. **Substituir SVG antes de adicionar** (V3+). Em página com SVG de IA como visual principal, remover da posição principal antes de inserir novo conteúdo visual.

6. **Licença antes da inserção.** Toda imagem nova entra com `source_reference`, `permission_or_license` e `trust_level` preenchidos no registry.

7. **Legenda com função didática.** Exemplo ruim: "Cateter em subclávia". Exemplo bom: "Ponta alta demais: o RX parece normal até você medir onde o cateter termina".

8. **Casos precisam de imagem** (V3+). Nenhum caso novo entra sem âncora visual.

---

## Métricas de acompanhamento

| Métrica | Hoje | Meta V2 | Meta V3 | Meta V5+ |
|---|---|---|---|---|
| Parts com espinha 9-blocos completa | ~6 | 9 | 9 | 9 |
| Parts com taxonomia de falha nos pitfalls | 0 | 9 | 9 | 9 |
| Imagens reais open-source no bundle | 19 | 19 | ≥ 60 | ≥ 120 |
| Parts com ≥ 3 imagens reais na reality class | ~4 | ~4 | 9 | 9 |
| SVGs de IA como visual principal de seção | ~40 | ~40 | 0 | 0 |
| Casos com âncora visual | 0 | 0 | ≥ 6 | ≥ 12 |
| Imagens operator-view de US | 0 | 0 | ≥ 3 | ≥ 5 |
| Variedade de malposição em RX | 1 (azigos) | 1 | ≥ 4 | ≥ 6 |

---

## Ordem de execução correta

### V2 — Espinha Fixa (agora, Máquina A)

1. Verificar e completar espinha 9-blocos em todas as Parts (abertura · mapa mental · bloco nuclear · comparadores · pitfalls · casos · treino · checklist · ponte)
2. Corrigir taxonomia Part 6: substituir mecânico/radiológico/biológico por classes clinicamente estáveis
3. Embutir tipo de falha (cognitiva/técnica/sistêmica/cultural) em pitfalls e casos de cada Part
4. Implementar feedback graduado nas seções de treino (elegante → perigoso)
5. Corrigir copy de entrada (index, premium hub) para refletir maturidade real
6. Fechar OSCE Part 4 com estrutura de estação real
7. Atualizar `v20_surface_registry.json` com maturidade pós-V2

**Critério de aceite da V2:** usuário sente padrão de plataforma, não página isolada; toda Part fecha e abre a seguinte; a taxonomia de falha começa a organizar casos e pitfalls.

### V3 — Media Batch A (depois de V2, Máquinas A + B)

1. Criar `assets/media_expansion/batch_A/` seguindo convenção de naming do Mega Plano
2. Sourcing e download da fila crítica: Part 4 (US operator-view), Part 5 (malposição), Part 6 (hemotórax, sítio inflamado)
3. Registrar cada asset no `v20_media_registry_seed.json` antes de inserir em página
4. Remover posters PNG de IA das posições principais nas masterclasses
5. Converter `theory_svgs/` de visual principal para tabela HTML ou callout
6. Inserir imagens reais por Part, iniciando por 4–9
7. Adicionar âncora visual a cada caso das reality classes
8. Reescrever seções "Como praticar" com objeto real e imagem associada

**Critério de aceite da V3:** Parts 4–9 deixam de parecer secas; existe diferença visual clara antes vs depois; ao menos 1 board relevante por Part crítica.

### V4 — Training Batch 1 (depois de V3)

1. Expandir corpus da arena: 20 MCQ com imagem, 15 V/F, 10 pegadinhas, 10 OSCE visual
2. 6 casos transversais multi-step com imagem clínica real
3. Cada item com tipo de falha + feedback graduado
4. Atualizar `v20_training_registry.json`

### V5 — Decisão, Escada, Dispositivos Premium (depois de V4)

1. Parts 1–3 em nível de sophisticação de 4–6
2. Media Batch B (+60–80 mídias: periférico, EJ, midline, PICC, port, tunelizados, HD, comparadores)
3. Atlas comparativo de famílias de dispositivos

### V3 auditoria final (junto com V3, no terminal)

1. Rodar `validate_bundle.py` após cada inserção de imagem
2. Auditar `assets/` completo — classificar: forte / resumo útil / cenográfico / refazer
3. Gerar `docs/reviews/asset-audit.md`
