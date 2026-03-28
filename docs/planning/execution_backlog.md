# Execution Backlog

Date: 2026-03-28
Depends on:

- `docs/reviews/full_dx.md`
- `docs/planning/intervention_plan.md`

Workspace: `/Users/matheuscoelho/Library/Mobile Documents/com~apple~CloudDocs/Downloads/Temp/Dreno/cvc`

## Objetivo

Converter o diagnostico e o plano de intervencao em backlog executavel.

Este documento responde:

- o que fazer primeiro
- em que ordem
- com quais dependencias
- em qual arquivo
- com qual criterio de aceite

## Regras de Execucao

### 1. Nao abrir frentes demais ao mesmo tempo

Limite recomendado:

- 1 bloco estrutural grande
- 1 bloco de apoio medio
- 1 bloco pequeno de sincronizacao

### 2. Fechar uma promessa antes de abrir a proxima

Exemplo:

- antes de expandir arena, corrigir OSCE publico
- antes de vender premium melhor, corrigir premium hub

### 3. Toda tarefa precisa produzir uma melhoria visivel

Evitar tarefas vagas como:

- melhorar conteudo
- refinar premium
- pensar em assets

Preferir:

- reescrever secao X da pagina Y
- promover criterios da arena para a pagina Z

## Status Legend

- `todo`
- `doing`
- `blocked`
- `done`
- `deferred`

## Priority Legend

- `P0` critico
- `P1` alto
- `P2` medio

## Milestones

### M1 - Alinhar promessas mais quebradas

Saida esperada:

- Part 6 reestruturada
- OSCE Part 4 refeito
- Premium Hub coerente

### M2 - Ativar superfícies ainda shell

Saida esperada:

- Cross-part cases ativos
- Masterclass 5 aprofundada
- Ponte toracica com transferencia real

### M3 - Uniformizar camada overkill

Saida esperada:

- Masterclass 1 / 2 / 3 maduras
- exercises / code labs mais consistentes

### M4 - Consolidar sistema

Saida esperada:

- Arena ampliada
- registries atualizados
- assets derivados auditados

## Backlog

## P0

### BX-001

- Status: `todo`
- Priority: `P0`
- Surface: Part 6
- File(s):
  - `project/cvc_academy_v20_premium_dual_layer/pages/v20-reality-class-part6.html`
- Task:
  - Reescrever a taxonomia central da Part 6.
  - Substituir o eixo `mecanico / radiologico / biologico` por classes clinicamente estaveis.
- Suggested model:
  - dano mecanico imediato
  - erro de trajeto / malposicao / confirmacao inadequada
  - dano biologico / permanencia nociva
- Dependencies:
  - nenhuma
- Estimate:
  - 1 sessao grande
- Acceptance:
  - a classificacao nao mistura tipo de dano com modo de deteccao
  - o aluno entende claramente o que pertence a cada classe

### BX-002

- Status: `todo`
- Priority: `P0`
- Surface: Part 6
- File(s):
  - `project/cvc_academy_v20_premium_dual_layer/pages/v20-reality-class-part6.html`
- Task:
  - Adicionar bundles de primeira resposta por cenario.
- Minimum scenarios:
  - suspeita de dano toracico
  - suspeita de malposicao / confirmacao ruim
  - suspeita de dano biologico / linha sem motivo
- Dependencies:
  - BX-001
- Estimate:
  - 1 sessao media
- Acceptance:
  - cada cenario responde:
    - o que ver
    - o que fazer agora
    - o que interromper
    - quando pedir ajuda

### BX-003

- Status: `todo`
- Priority: `P0`
- Surface: OSCE Part 4
- File(s):
  - `project/cvc_academy_v20_premium_dual_layer/pages/v20-part4-osce.html`
  - `project/cvc_academy_v20_premium_dual_layer/scripts/training-arena-data.js`
- Task:
  - Reescrever a pagina publica do OSCE da Part 4 usando os melhores criterios da arena.
- Minimum content:
  - 3 a 4 estacoes
  - desempenho excelente / parcial / ruim
  - criterios criticos
  - ponte docente
- Dependencies:
  - nenhuma
- Estimate:
  - 1 sessao grande
- Acceptance:
  - a pagina deixa de ser checklist generica
  - a granularidade da Part 4 aparece no OSCE publico

### BX-004

- Status: `todo`
- Priority: `P0`
- Surface: Premium Hub
- File(s):
  - `project/cvc_academy_v20_premium_dual_layer/pages/v20-premium-hub.html`
  - `project/cvc_academy_v20_premium_dual_layer/data/v20_premium_map.json`
- Task:
  - Reorganizar o Premium Hub para refletir literalmente as superfícies canonicas.
- Minimum surfaces visible:
  - review
  - atlas
  - cross-part cases
  - graphics catalog
  - teacher mode
- Dependencies:
  - nenhuma
- Estimate:
  - 1 sessao media
- Acceptance:
  - hub premium e navegavel sem conhecimento previo
  - `teacher_mode` e `graphics_catalog` deixam de ser secundarios por acidente

### BX-005

- Status: `todo`
- Priority: `P0`
- Surface: Index / top-level expectation management
- File(s):
  - `project/cvc_academy_v20_premium_dual_layer/index.html`
  - `project/cvc_academy_v20_premium_dual_layer/pages/revisao-integral.html`
- Task:
  - Ajustar copy de entrada para nao vender profundidade uniforme antes das correcoes de masterclass.
- Dependencies:
  - BX-004 recomendada, mas nao obrigatoria
- Estimate:
  - 1 sessao pequena
- Acceptance:
  - navegacao reflete melhor o estado real de maturidade das superficies

## P1

### BX-006

- Status: `todo`
- Priority: `P1`
- Surface: Cross-part Cases
- File(s):
  - `project/cvc_academy_v20_premium_dual_layer/pages/v20-cross-part-cases.html`
  - `project/cvc_academy_v20_premium_dual_layer/data/v20_case_registry.json`
  - opcionalmente `project/cvc_academy_v20_premium_dual_layer/scripts/training-arena-data.js`
- Task:
  - Transformar os casos de pagina-resumo em casos ativos.
- Minimum structure per case:
  - pergunta inicial
  - escolha do usuario
  - erro tentador
  - custo do erro
  - take-home
  - links de aprofundamento
- Dependencies:
  - BX-004 recomendada
- Estimate:
  - 2 sessoes medias
- Acceptance:
  - pelo menos 2 casos deixam de ser estaticos
  - o usuario precisa decidir algo antes de receber a interpretacao

### BX-007

- Status: `todo`
- Priority: `P1`
- Surface: Part 5 Masterclass
- File(s):
  - `project/cvc_academy_v20_premium_dual_layer/pages/v20-part5-masterclass.html`
- Task:
  - Aprofundar a pagina para que ela seja realmente uma masterclass.
- Minimum blocks:
  - leitura em camadas
  - AP vs lateral
  - malposicao
  - artefato
  - mini-casos
  - fechamento operacional
- Dependencies:
  - nenhuma
- Estimate:
  - 1 sessao grande
- Acceptance:
  - a pagina ensina por si so
  - atlas e OSCE viram extensoes, nao muletas

### BX-008

- Status: `todo`
- Priority: `P1`
- Surface: Ponte toracica
- File(s):
  - `project/cvc_academy_v20_premium_dual_layer/pages/dreno-toracico.html`
- Task:
  - Aprofundar a ponte para dreno toracico com transferencia real.
- Minimum content:
  - quando muda de dominio
  - sinais de escalonamento
  - mini algoritmo
  - mini caso
- Dependencies:
  - BX-002 recomendada
- Estimate:
  - 1 sessao media
- Acceptance:
  - a pagina deixa de ser teaser
  - o usuario entende quando o problema deixa de ser apenas de linha

### BX-009

- Status: `todo`
- Priority: `P1`
- Surface: Teacher Mode
- File(s):
  - `project/cvc_academy_v20_premium_dual_layer/pages/modo-professor.html`
  - `project/cvc_academy_v20_premium_dual_layer/pages/v20-premium-hub.html`
- Task:
  - Dar mais protagonismo e mais ligacoes operacionais ao modo professor.
- Minimum additions:
  - rotas por duracao de sessao
  - ligacoes explicitas com cases e arena
  - "use esta estacao para..."
- Dependencies:
  - BX-004
- Estimate:
  - 1 sessao pequena ou media
- Acceptance:
  - professor entende em poucos segundos como transformar o bundle em sessao docente

### BX-010

- Status: `todo`
- Priority: `P1`
- Surface: Part 1 Masterclass
- File(s):
  - `project/cvc_academy_v20_premium_dual_layer/pages/v20-part1-masterclass.html`
- Task:
  - Reescrever a pagina para ficar no patamar minimo de `masterclass`.
- Dependencies:
  - nenhuma
- Estimate:
  - 1 sessao media
- Acceptance:
  - deixa de ser pagina-resumo
  - ganha densidade argumentativa e exemplos

### BX-011

- Status: `todo`
- Priority: `P1`
- Surface: Part 2 Masterclass
- File(s):
  - `project/cvc_academy_v20_premium_dual_layer/pages/v20-part2-masterclass.html`
- Task:
  - Reescrever a pagina como aula de escada do acesso.
- Dependencies:
  - nenhuma
- Estimate:
  - 1 sessao media
- Acceptance:
  - explica decisao, nao so mostra formatos

### BX-012

- Status: `todo`
- Priority: `P1`
- Surface: Part 3 Masterclass
- File(s):
  - `project/cvc_academy_v20_premium_dual_layer/pages/v20-part3-masterclass.html`
- Task:
  - Reescrever a pagina como aula de identidade de familias.
- Dependencies:
  - nenhuma
- Estimate:
  - 1 sessao media
- Acceptance:
  - a pagina deixa de ser poster hub
  - ganha comparadores clinicos fortes

## P2

### BX-013

- Status: `todo`
- Priority: `P2`
- Surface: Exercises / Code Labs consistency
- File(s):
  - `project/cvc_academy_v20_premium_dual_layer/pages/v20-part1-exercises.html`
  - `project/cvc_academy_v20_premium_dual_layer/pages/v20-part2-exercises.html`
  - `project/cvc_academy_v20_premium_dual_layer/pages/v20-part3-exercises.html`
  - `project/cvc_academy_v20_premium_dual_layer/pages/v20-part4-exercises.html`
  - `project/cvc_academy_v20_premium_dual_layer/pages/v20-part5-exercises.html`
  - `project/cvc_academy_v20_premium_dual_layer/pages/v20-part1-code-lab.html`
  - `project/cvc_academy_v20_premium_dual_layer/pages/v20-part2-code-lab.html`
  - `project/cvc_academy_v20_premium_dual_layer/pages/v20-part3-code-lab.html`
  - `project/cvc_academy_v20_premium_dual_layer/pages/v20-part4-code-lab.html`
  - `project/cvc_academy_v20_premium_dual_layer/pages/v20-part5-code-lab.html`
- Task:
  - Padronizar um piso minimo de densidade para todas essas superfícies.
- Dependencies:
  - BX-010, BX-011, BX-012, BX-007 recomendadas
- Estimate:
  - 2 sessoes medias
- Acceptance:
  - nenhuma pagina parece placeholder curto demais para o proprio nome

### BX-014

- Status: `todo`
- Priority: `P2`
- Surface: Arena corpus expansion
- File(s):
  - `project/cvc_academy_v20_premium_dual_layer/scripts/training-arena-data.js`
  - `project/cvc_academy_v20_premium_dual_layer/data/v20_training_registry.json`
  - opcionalmente `project/cvc_academy_v20_premium_dual_layer/pages/training-arena.html`
- Task:
  - Expandir o numero de itens por modulo.
- Suggested target:
  - pelo menos dobrar o corpus atual
- Dependencies:
  - BX-001 a BX-012 recomendadas
- Estimate:
  - varias sessoes pequenas ou medias
- Acceptance:
  - o volume da arena combina mais com a promessa de treino serio

### BX-015

- Status: `todo`
- Priority: `P2`
- Surface: Visual asset audit
- File(s):
  - `project/cvc_academy_v20_premium_dual_layer/assets/...`
  - paginas que referenciam esses assets
- Task:
  - Auditar assets derivados e classificar em:
    - forte
    - resumo util
    - cenografico
    - refazer
- Dependencies:
  - nenhuma
- Estimate:
  - 1 sessao media
- Acceptance:
  - a navegacao deixa de promover assets cenograficos como se fossem boards fortes

### BX-016

- Status: `todo`
- Priority: `P2`
- Surface: Registry and naming alignment
- File(s):
  - `project/cvc_academy_v20_premium_dual_layer/data/v20_premium_map.json`
  - `project/cvc_academy_v20_premium_dual_layer/data/v20_case_registry.json`
  - `project/cvc_academy_v20_premium_dual_layer/data/v20_training_registry.json`
  - paginas-hub relacionadas
- Task:
  - Sincronizar nome, promessa, papel didatico e `maturity` com o estado real final.
- Dependencies:
  - BX-004, BX-006, BX-014
- Estimate:
  - 1 sessao pequena
- Acceptance:
  - docs e registries deixam de inflar ou subestimar as superficies

## Recommended Execution Order

1. BX-001
2. BX-002
3. BX-003
4. BX-004
5. BX-005
6. BX-007
7. BX-006
8. BX-008
9. BX-009
10. BX-010
11. BX-011
12. BX-012
13. BX-013
14. BX-015
15. BX-014
16. BX-016

## Suggested Working Packs

### Pack A - Corrigir promessa de seguranca

- BX-001
- BX-002
- BX-003

### Pack B - Corrigir arquitetura premium

- BX-004
- BX-005
- BX-009

### Pack C - Ativar superficies shell

- BX-006
- BX-007
- BX-008

### Pack D - Uniformizar overkills

- BX-010
- BX-011
- BX-012
- BX-013

### Pack E - Consolidar sistema

- BX-015
- BX-014
- BX-016

## Fast Wins

Itens pequenos com alto retorno:

- BX-003
- BX-004
- BX-005
- BX-009

## Hardest Items

Itens com maior risco editorial:

- BX-001
- BX-002
- BX-006
- BX-007

## Definition of Success

O backlog tera funcionado quando:

- Part 6 deixar de ser o elo fraco do arco 4-6
- o OSCE da Part 4 deixar de parecer um resumo
- os casos transversais exigirem decisao real
- o Premium Hub representar a camada premium inteira
- `Masterclass` significar densidade didatica em todas as Parts
- a arena parecer motor + biblioteca, nao so motor
- assets derivados cenograficos perderem protagonismo didatico

## Short Command Version

Se fosse para reduzir o backlog inteiro a uma frase:

Corrigir primeiro o que quebra confianca, depois ativar o que hoje so aponta, e por fim expandir o que ja esta inteligente.
