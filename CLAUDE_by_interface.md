# CLAUDE_by_interface.md

Guia operacional de divisão de trabalho entre as duas interfaces do Claude Code:
**VSCode Extension (UI)** e **Terminal (CLI)**.

Ambas acessam o mesmo repositório e o mesmo modelo — o que muda é o que cada interface
amplifica: a UI amplifica navegação visual, edição de conteúdo e diff; o terminal amplifica
execução, automação e git.

Fonte de referência: `reference/orientacoes.pdf` · `reference/CVC_v20_Mega_Plano_Expansao_de_Midia.pdf`

---

## Estado de versões

| Versão | Nome | Estado | Interface principal |
|---|---|---|---|
| V1 | Tronco Utilizável | ✅ feito | — |
| **V2** | **Espinha Fixa** | **→ agora** | UI (conteúdo) + Terminal (git/QA) |
| V3 | Media Batch A | aguarda V2 | Terminal (sourcing/naming) + UI (inserção) |
| V4 | Training Batch 1 | aguarda V3 | UI (casos/OSCE) + Terminal (arena JS) |
| V5 | Decisão, Escada, Dispositivos Premium | aguarda V4 | UI (Parts 1–3) |
| V6–V8 | Imagem premium / Complicações / Casos transversais | aguarda V5 | UI + Terminal |
| V9 | Premium Web Final | aguarda V8 | UI |
| V10 | Pré-dashboard / Pré-app | aguarda V9 | UI (specs) + Terminal (estrutura) |

**Regra:** não avançar para a versão seguinte sem fechar o critério de aceite da versão atual.
V2 não está fechada enquanto qualquer Part não tiver espinha rígida ou taxonomia de falha aplicada.

---

## Filosofia da divisão

| Dimensão | VSCode UI | Terminal CLI |
|---|---|---|
| **Ponto forte** | Edição de conteúdo rico, navegação entre arquivos, revisão de diff | Execução de scripts, automação, git, batch |
| **Custo de troca de contexto** | Alto — janela visual importa | Baixo — output textual basta |
| **Ideal para** | Sessões editoriais longas, espinha de Part, specs | Operações rápidas, validação, commits, sourcing |
| **Risco de usar errado** | Terminal edita HTML às cegas, sem contexto visual | UI bloqueia contexto com outputs longos de scripts |

---

## Interface 1 — VSCode Extension (UI)

### Quando usar a UI

- Editar páginas HTML com estrutura editorial longa
- Navegar entre arquivos com links clicáveis (go-to-definition, hover)
- Revisar diff visualmente antes de commitar
- Redigir specs e documentos markdown com referências cruzadas
- Comparar arquivos lado a lado durante edição

---

### V2 — Espinha Fixa (agora)

Critério de aceite da V2: usuário sente padrão de plataforma, não página isolada; toda Part fecha e abre a seguinte; taxonomia de falha começa a organizar casos e pitfalls.

**Espinha obrigatória por Part** (9 blocos):
`abertura → mapa mental → bloco nuclear → comparadores → pitfalls → casos → treino → checklist → ponte`

#### Pack A — Corrigir taxonomia e espinha da Part 6 (V2)

**BX-001 · P0 · Part 6 reality class**
- Arquivo: [v20-reality-class-part6.html](project/cvc_academy_v20_premium_dual_layer/pages/v20-reality-class-part6.html)
- Reescrever taxonomia central: substituir `mecânico / radiológico / biológico` por:
  - dano mecânico imediato
  - erro de trajeto / malposição / confirmação inadequada
  - dano biológico / permanência nociva
- Aplicar taxonomia de falha (cognitiva/técnica/sistêmica/cultural) nos pitfalls
- Aceite: classificação não mistura tipo de dano com modo de detecção

**BX-002 · P0 · Part 6 reality class**
- Arquivo: [v20-reality-class-part6.html](project/cvc_academy_v20_premium_dual_layer/pages/v20-reality-class-part6.html)
- Adicionar bundles de primeira resposta por cenário (depende de BX-001)
- Cenários mínimos: dano torácico · malposição / confirmação ruim · dano biológico / linha esquecida
- Cada cenário: o que ver · o que fazer · o que interromper · quando pedir ajuda
- Feedback de treino: substituir "certo/errado" por elegante/prudente/aceitável/precipitado/perigoso

---

#### Pack B — Canonização da porta de entrada (V2)

**BX-004 · P0 · Premium Hub**
- Arquivo: [v20-premium-hub.html](project/cvc_academy_v20_premium_dual_layer/pages/v20-premium-hub.html)
- Reorganizar hub para refletir literalmente as superfícies canônicas
- Superfícies mínimas visíveis: review · atlas · cross-part cases · graphics catalog · teacher mode
- Aceite: navegável sem conhecimento prévio

**BX-005 · P0 · Index + revisao-integral**
- Arquivos: [index.html](project/cvc_academy_v20_premium_dual_layer/index.html) · [revisao-integral.html](project/cvc_academy_v20_premium_dual_layer/pages/revisao-integral.html)
- Ajustar copy para não vender profundidade uniforme antes de V2 estar fechada
- Entrada deve oferecer 3 caminhos apenas: aprender · revisar · treinar
- Aceite: navegação reflete maturidade real

**BX-009 · P1 · Teacher Mode**
- Arquivos: [modo-professor.html](project/cvc_academy_v20_premium_dual_layer/pages/modo-professor.html) · [v20-premium-hub.html](project/cvc_academy_v20_premium_dual_layer/pages/v20-premium-hub.html)
- Adições: rotas por duração de sessão · ligações com cases e arena · "use esta estação para..."
- Aceite: professor entende em segundos como transformar o bundle em sessão docente

---

#### Pack C — Ativar superfícies shell (V2)

**BX-003 · P0 · OSCE Part 4**
- Arquivo: [v20-part4-osce.html](project/cvc_academy_v20_premium_dual_layer/pages/v20-part4-osce.html)
- Estrutura mínima: 3–4 estações · desempenho excelente/parcial/ruim · critérios críticos · ponte docente
- Aceite: página deixa de ser checklist genérica

**BX-006 · P1 · Cross-part Cases**
- Arquivo: [v20-cross-part-cases.html](project/cvc_academy_v20_premium_dual_layer/pages/v20-cross-part-cases.html)
- Estrutura mínima por caso: pergunta · escolha · erro tentador · custo do erro · take-home · links
- Taxonomia de falha em cada caso
- Aceite: pelo menos 2 casos exigem decisão antes de mostrar interpretação

**BX-007 · P1 · Part 5 Masterclass**
- Arquivo: [v20-part5-masterclass.html](project/cvc_academy_v20_premium_dual_layer/pages/v20-part5-masterclass.html)
- Blocos mínimos: leitura em camadas · AP vs lateral · malposição · artefato · mini-casos · fechamento
- Aceite: página ensina por si só (imagens reais vêm em V3/V6)

**BX-008 · P1 · Ponte torácica**
- Arquivo: [dreno-toracico.html](project/cvc_academy_v20_premium_dual_layer/pages/dreno-toracico.html)
- Conteúdo: quando muda de domínio · sinais de escalamento · mini algoritmo · mini caso
- Aceite: página deixa de ser teaser

---

#### Pack D — Espinha fixa Parts 1–9, taxonomia de falha (V2)

**B1 · staged · Part 1 reality class**
- Arquivo: [v20-reality-class-part1.html](project/cvc_academy_v20_premium_dual_layer/pages/v20-reality-class-part1.html)
- Verificar 9-blocos; aprofundar comparadores, treino com instrução concreta, checklist com itens que mudam conduta
- Aplicar taxonomia de falha nos pitfalls

**B3 · staged · Part 6 reality class**
- Arquivo: [v20-reality-class-part6.html](project/cvc_academy_v20_premium_dual_layer/pages/v20-reality-class-part6.html)
- Densificar com dano, reconhecimento e conduta guiada (depende de BX-001 + BX-002)

**B4 · staged · Part 9 reality class**
- Arquivo: [v20-reality-class-part9.html](project/cvc_academy_v20_premium_dual_layer/pages/v20-reality-class-part9.html)
- Fortalecer síntese, caso final e mapa de erros com taxonomia de falha

**Varredura de espinha — todas as Parts (V2)**
- Verificar blocos obrigatórios em: [v20-reality-class-part2.html](project/cvc_academy_v20_premium_dual_layer/pages/v20-reality-class-part2.html) · [part3](project/cvc_academy_v20_premium_dual_layer/pages/v20-reality-class-part3.html) · [part4](project/cvc_academy_v20_premium_dual_layer/pages/v20-reality-class-part4.html) · [part5](project/cvc_academy_v20_premium_dual_layer/pages/v20-reality-class-part5.html) · [part7](project/cvc_academy_v20_premium_dual_layer/pages/v20-reality-class-part7.html) · [part8](project/cvc_academy_v20_premium_dual_layer/pages/v20-reality-class-part8.html)
- Para cada Part: confirmar abertura · mapa mental · bloco nuclear · comparadores · pitfalls (com tipo de falha) · casos · treino (com instrução concreta) · checklist · ponte

---

### V3 — Media Batch A (depois de V2 fechada)

Critério de aceite V3: Parts 4–9 deixam de parecer secas; diferença visual clara antes vs depois; ao menos 1 board relevante por Part crítica.

#### Pack F — Inserção de imagens reais (V3, UI)

**MEDIA-01 · Part 4 — US e técnica procedural**
- Inserir operator-view US, sequência Seldinger, landmarks quando disponíveis
- Substituir poster_part4_masterclass.png da posição de abertura
- Converter `theory_svgs/` de visual principal para tabela HTML ou callout

**MEDIA-02 · Part 5 — Malposição variada**
- Inserir RX de malposição além da azigos (AD, VCS alto, subclávia)
- Substituir poster_part5_atlas.png da posição de abertura

**MEDIA-03 · Parts 6–9 — Completar espectro**
- Part 6: hemotórax, infecção visível em túnel ou sítio
- Part 7: processo de troca de curativo
- Part 9: imagem específica de fechamento/remoção

**MEDIA-04 · Rebaixar posters e SVGs de IA**
- Parts 2, 3, 4, 5: remover `poster_partX_masterclass.png` como abertura
- `assets/v20_part2_boost/theory_svgs/`: converter para tabela HTML ou remover da posição principal
- Regra: SVG de IA só como card inline, nunca como galeria de seção

---

### V4 — Training Batch 1 (depois de V3)

**BX-013 · P2 · Exercises + Code Labs (Parts 1–5)**
- Arquivos: [v20-part1-exercises.html](project/cvc_academy_v20_premium_dual_layer/pages/v20-part1-exercises.html) · [v20-part2-exercises.html](project/cvc_academy_v20_premium_dual_layer/pages/v20-part2-exercises.html) · [v20-part3-exercises.html](project/cvc_academy_v20_premium_dual_layer/pages/v20-part3-exercises.html) · [v20-part4-exercises.html](project/cvc_academy_v20_premium_dual_layer/pages/v20-part4-exercises.html) · [v20-part5-exercises.html](project/cvc_academy_v20_premium_dual_layer/pages/v20-part5-exercises.html) + code labs
- Piso mínimo de densidade; cada exercício com tipo de falha e feedback graduado

---

### V5 — Decisão, Escada, Dispositivos Premium (depois de V4)

**Pack D-V5 — Masterclasses Parts 1–3**

**BX-010 · P1 · Part 1 Masterclass**
- Arquivo: [v20-part1-masterclass.html](project/cvc_academy_v20_premium_dual_layer/pages/v20-part1-masterclass.html)
- Reescrever para nível de masterclass (densidade argumentativa + exemplos)

**BX-011 · P1 · Part 2 Masterclass**
- Arquivo: [v20-part2-masterclass.html](project/cvc_academy_v20_premium_dual_layer/pages/v20-part2-masterclass.html)
- Reescrever como aula de escada do acesso: explica decisão, não só mostra formatos

**BX-012 · P1 · Part 3 Masterclass**
- Arquivo: [v20-part3-masterclass.html](project/cvc_academy_v20_premium_dual_layer/pages/v20-part3-masterclass.html)
- Reescrever como aula de identidade de famílias com comparadores clínicos fortes

---

### V10 — Specs de plataforma (depois de V9)

**G4 · open · App-readiness spec**
- Destino: [docs/planning/spec-g4-app-readiness.md](docs/planning/spec-g4-app-readiness.md)
- Modelar separação conteúdo/metadado/navegação/casca

**H1 · open · Mac shell spec**
- Destino: [docs/planning/spec-h1-mac-shell.md](docs/planning/spec-h1-mac-shell.md)

**H2 · open · iOS app spec**
- Destino: [docs/planning/spec-h2-ios-app.md](docs/planning/spec-h2-ios-app.md)

---

### Ordem recomendada para sessões na UI

```
── V2 ──────────────────────────────────────────────────
1. Revisar diff das páginas modificadas pendentes
2. Pack A: BX-001 → BX-002  (Part 6 taxonomia + bundles)
3. Pack B: BX-004 → BX-005 → BX-009  (portal + teacher)
4. Pack C: BX-003 → BX-006 → BX-007 → BX-008
5. Pack D-V2: varredura de espinha em todas as Parts
6. B1 → B3 → B4  (reality classes 1, 6, 9)

── V3 (depois de V2 fechada e validada) ────────────────
7. Pack F: MEDIA-01 → 02 → 03 → 04

── V4 ──────────────────────────────────────────────────
8. BX-013  (exercises + code labs)

── V5 ──────────────────────────────────────────────────
9. Pack D-V5: BX-010 → BX-011 → BX-012  (masterclasses 1/2/3)

── V10 ─────────────────────────────────────────────────
10. G4 → H1 → H2  (specs de plataforma)
```

---

## Interface 2 — Terminal CLI

### Quando usar o terminal

- Rodar scripts Python de validação e QA
- Executar git (commit, push, log, diff)
- Operações em batch sobre múltiplos arquivos
- Manipular JSONs de registro com scripts
- Sourcing e organização de assets (naming, pastas, registry)
- Tarefas que produzem output longo (relatórios, crawls)

---

### V2 — Terminal (paralelo com UI)

**QA-01 · Baseline obrigatório antes de qualquer release**
```bash
python3 tools/validate_bundle.py
python3 tools/smoke_test_bundle.py
```
- Roda após qualquer lote de edição
- Aceite: zero links mortos, zero arquivos faltantes

**QA-02 · QA automatizado de interações**
```bash
python3 tools/browser_walk_bundle.py
python3 tools/review_live_interactions.py
```
- Roda após edições de páginas com JS interativo
- Aceite: relatório sem regressões novas

**GIT-01 · Commitar páginas modificadas pendentes**
- Páginas abertas: `v20-part1-masterclass.html`, `v20-reality-class-part7.html`, `v20-reality-class-part8.html`, `v20-reality-class-part9.html`, tools modificados
- Rodar QA-01 antes
- Commitar por lote descritivo (reality-upgrade, tool update, etc.)

**GIT-02 · Commit por pack concluído**
- Nunca acumular mais de 1 pack sem QA intermediário

**REG-01 · Sincronização de registros após V2**
- Arquivos: [data/v20_surface_registry.json](project/cvc_academy_v20_premium_dual_layer/data/v20_surface_registry.json) · [data/v20_premium_map.json](project/cvc_academy_v20_premium_dual_layer/data/v20_premium_map.json) · [data/v20_case_registry.json](project/cvc_academy_v20_premium_dual_layer/data/v20_case_registry.json) · [data/v20_training_registry.json](project/cvc_academy_v20_premium_dual_layer/data/v20_training_registry.json)
- Sincronizar `maturity`, nome e promessa com estado real pós-V2
- Aceite: registros não inflam nem subestimam as superfícies

---

### V3 — Terminal (Máquina B + ingestão)

**MEDIA-INGEST · Organização e naming do Batch A**
- Criar estrutura: `assets/media_expansion/batch_A/01_clinical_real/{technique,imaging_confirmation,complications,maintenance_bundles,hostile_contexts}/`
- Naming: `<dominio>__<subtema>__<uso>__<seq>.ext`
  - ex: `technique__ij_us_operator_view__clinical__01.jpg`
  - ex: `imaging__malposition_right_atrium__radiograph__01.jpg`
- Nunca: `final_final_agora_vai.jpg`

**F4 · Protocolo de anonimização (Máquina B)**
- Criar: [docs/ops/anonymization-protocol.md](docs/ops/anonymization-protocol.md)
- Template mínimo por arquivo de acervo próprio: origem · consentimento/licença · checklist de anonimização · destino didático
- Aceite: nada de acervo próprio entra sem preencher o template

**REG-MEDIA · Atualizar registry após cada lote de imagens**
- Cada imagem entra em [data/v20_media_registry_seed.json](project/cvc_academy_v20_premium_dual_layer/data/v20_media_registry_seed.json) com: `id`, `file`, `domain`, `part_targets`, `media_type`, `didactic_function`, `permission_or_license`, `trust_level`, `status`, `priority`
- Aceite: nenhuma imagem no bundle sem entrada no registry

**AUD-01 · Auditoria de assets derivados**
- Classificar assets existentes: `forte` · `resumo útil` · `cenográfico` · `refazer`
- Gerar [docs/reviews/asset-audit.md](docs/reviews/asset-audit.md)
- Aceite: navegação para de promover assets cenográficos

---

### V4 — Terminal

**REG-02 · Expansão do corpus da arena**
- Arquivo: [scripts/training-arena-data.js](project/cvc_academy_v20_premium_dual_layer/scripts/training-arena-data.js)
- Registro: [data/v20_training_registry.json](project/cvc_academy_v20_premium_dual_layer/data/v20_training_registry.json)
- Meta: 20 MCQ com imagem, 15 V/F, 10 pegadinhas, 10 OSCE, 6 casos multi-step
- Verificar sintaxe: `node --check scripts/training-arena-data.js`
- Cada item: tipo de falha + feedback graduado (elegante → perigoso)

---

### V9 — Terminal (dashboard maduro, só depois de conteúdo maduro)

**DASH-01 · Filtros reais no dashboard-alpha**
- Arquivo: [scripts/dashboard-alpha.js](project/cvc_academy_v20_premium_dual_layer/scripts/dashboard-alpha.js)
- Filtros por: Part · superfície · domínio · maturidade · falha
- Verificar: `node --check scripts/dashboard-alpha.js`
- Regra do roadmap: dashboard maduro entra depois que conteúdo base estiver maduro

---

### Ordem recomendada para sessões no terminal

```
── V2 ──────────────────────────────────────────────────
1. QA-01  (validate + smoke — baseline)
2. QA-02  (browser walk nas páginas modificadas pendentes)
3. GIT-01  (commitar pendentes após QA limpo)
4. GIT-02  (commit por pack após cada sessão de UI)
5. REG-01  (sync registros após V2 fechar)

── V3 ──────────────────────────────────────────────────
6. MEDIA-INGEST  (criar estrutura de pastas + naming)
7. F4  (protocolo de anonimização — Máquina B)
8. REG-MEDIA  (atualizar registry após cada lote)
9. AUD-01  (auditoria de assets derivados)
10. GIT-02  (commit por lote de imagens)

── V4 ──────────────────────────────────────────────────
11. REG-02  (expansão da arena)

── V9 ──────────────────────────────────────────────────
12. DASH-01  (filtros reais do dashboard)
```

---

## Diagrama de dependência entre interfaces

```
Terminal: QA-01 + QA-02  (baseline)
    ↓
Terminal: GIT-01  (commitar pendentes)
    ↓
── V2 ────────────────────────────────────────────────
UI: Pack A  (Part 6 — taxonomia + bundles)
    ↓
UI: Pack B  (portal + teacher mode)
    ↓
UI: Pack C  (OSCE + casos + ponte torácica)    → Terminal: QA-01 + GIT-02
    ↓
UI: Pack D-V2  (varredura espinha + reality classes)
    ↓
Terminal: REG-01  (sync registros)
Terminal: GIT-02  (commit V2 fechada)

── V3 ────────────────────────────────────────────────
Terminal: MEDIA-INGEST  (estrutura + naming)
    ↓
Terminal: F4  (protocolo anonimização)
UI: Pack F  (inserção de imagens reais)         → Terminal: REG-MEDIA + GIT-02
    ↓
Terminal: AUD-01  (auditoria assets)

── V4 ────────────────────────────────────────────────
UI: BX-013  (exercises + code labs)
Terminal: REG-02  (arena expansion)

── V5 ────────────────────────────────────────────────
UI: Pack D-V5  (masterclasses 1/2/3)

── V9 ────────────────────────────────────────────────
Terminal: DASH-01  (dashboard filtros)

── V10 ───────────────────────────────────────────────
UI: G4 → H1 → H2  (specs de plataforma)
```

---

## Regras de convivência entre interfaces

1. **Nunca editar o mesmo arquivo simultaneamente** nas duas interfaces.
2. **Terminal sempre roda QA antes de commitar** — independente de qual interface gerou a edição.
3. **UI fecha o diff** antes de abrir nova sessão editorial.
4. **Registros JSON são território do terminal** — edições de HTML não tocam diretamente nos JSONs de registry.
5. **Nenhuma imagem entra em página sem estar no registry** — terminal valida antes da UI inserir.
6. **Não avançar de versão sem critério de aceite fechado** — V2 não está fechada se qualquer Part não tiver espinha rígida.

---

## Referências rápidas

| Documento | Onde |
|---|---|
| **Plano executável de versões (V1–V10)** | [reference/orientacoes.pdf](reference/orientacoes.pdf) |
| **Mega Plano de Expansão de Mídia** | [reference/CVC_v20_Mega_Plano_Expansao_de_Midia.pdf](reference/CVC_v20_Mega_Plano_Expansao_de_Midia.pdf) |
| Plano de aprimoramento didático | [docs/planning/content_improvement_plan.md](docs/planning/content_improvement_plan.md) |
| Backlog operacional (BX-001–016) | [docs/planning/execution_backlog.md](docs/planning/execution_backlog.md) |
| Matriz de execução (blocos A–H) | [docs/planning/execution_matrix.md](docs/planning/execution_matrix.md) |
| Estado atual do produto | [docs/ops/MEGA_MVP_HANDOFF.md](docs/ops/MEGA_MVP_HANDOFF.md) |
| Roadmap 24–36 meses | [docs/foundation/roadmap.md](docs/foundation/roadmap.md) |
| Schema canônico de Parts | [docs/foundation/master_schema.md](docs/foundation/master_schema.md) |
| Registro de superfícies | [data/v20_surface_registry.json](project/cvc_academy_v20_premium_dual_layer/data/v20_surface_registry.json) |
