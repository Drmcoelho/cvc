# Master Schema v20+

## Finalidade

Este documento traduz a visao do CVC Academy em uma estrutura operacional.
Ele existe para impedir que o projeto volte a virar uma colecao de paginas soltas, assets sem destino ou promessas de interface sem espinha clinica.

O schema organiza o produto em quatro eixos:

1. Parts canonicas
2. Superficies do produto
3. Estados de maturidade
4. Contratos minimos de conteudo, midia e aceite

## Premissas canonicas

### Premissa 1: o projeto e maior que "passagem de CVC"

O eixo clinico e CVC.
O eixo pedagogico e decisao de acesso, escalonamento, escolha de via, escolha de dispositivo, tecnica, confirmacao, manutencao, complicacoes e ensino.

### Premissa 2: o projeto e offline-first

O nucleo do produto precisa existir localmente como pacote HTML funcional.

### Premissa 3: o projeto nao e offline-only

O produto pode usar links externos, fontes online, referencias conectadas e futuras capacidades web, desde que o nucleo confiavel nao dependa disso para existir.

### Premissa 4: visualidade e infraestrutura epistemica

Imagem real, imagem derivada, comparador, board, sequence, atlas e treino visual nao sao decoracao.
Sao parte do proprio raciocinio clinico que o produto quer ensinar.

### Premissa 5: o dashboard e parte do produto

Nao e apenas backlog estetico.
Ele e uma camada superior de navegacao, organizacao de trilhas, revisao e treino.

### Premissa 6: Mac e iOS sao evolucoes legitimas

O produto deve ser arquitetado para poder virar shell de Mac e iOS sem reescrever seu nucleo.

## Vocabulario de estados

### Estado de superficie

- `absent`: nao existe
- `placeholder`: existe, mas nao cumpre a funcao prometida
- `partial`: existe de modo util, mas incompleto
- `functional`: cumpre a funcao principal
- `mature`: cumpre bem a funcao, com identidade e densidade

### Estado de midia

- `planned`
- `curated`
- `ingested`
- `placed`
- `reused`
- `archived`

### Tipo de midia

- `clinical_real`
- `derived_didactic`
- `training_visual`
- `reference_external`
- `loop_or_microvideo`

### Tipo de fonte

- `internal_production`
- `external_curated`
- `institutional_permission`
- `own_archive`
- `future_capture`

## Arquitetura do produto

O ecossistema alvo tem estas superficies canonicas:

### 1. Trilha principal

A serie 1 a 9, com narrativa clinica coerente.

### 2. Overkills por dominio

Masterclass, exercicios, code labs, atlas e OSCEs.

### 3. Camada premium

Premium hub, premium review, premium atlas e futuras superficies transversais.

### 4. Treino serio

MCQ, V/F, pegadinhas, OSCE visual, casos multi-step, rubricas e feedback graduado.

### 5. Ferramentas auxiliares

Cross-part cases, graphics catalog, modo professor, mapas JSON, docs de governanca.

### 6. Dashboard

Porta de entrada superior para estudar, revisar, treinar e ensinar.

### 7. Casca de app

Shells futuros para Mac e iOS sobre o mesmo nucleo de conteudo e metadado.

## Parts canonicas

Cada Part deve responder a uma pergunta principal.
Isso impede duplicacao sem funcao e protege a coerencia da plataforma.

| Part | Nome canonico | Pergunta central | Papel na escada |
| --- | --- | --- | --- |
| 1 | Antes do CVC | Precisa mesmo de acesso? | decisao antes da invasao |
| 2 | Escada do acesso | Qual o menor acesso suficiente? | escalonamento de vias |
| 3 | Dispositivos | Qual familia de dispositivo faz sentido? | identidade de dispositivo |
| 4 | Tecnica viva | Como executar sem teatro tecnico? | gesto, kit, fio, seguranca |
| 5 | Imagem e confirmacao | Como ver, confirmar e nao se enganar? | US, RX, trajeto, ponta |
| 6 | Complicacoes | Qual o preco mecanico, radiologico e biologico? | dano, reconhecimento, conduta |
| 7 | Transferencia e ensino | Como transformar execucao em competencia ensinavel? | supervisao, bundle, debriefing |
| 8 | Continuidade e territorios hostis | O que muda quando o contexto piora? | adaptacao, humildade anatomica |
| 9 | Checklist integrado | Como fechar a jornada sem epilogo magro? | sintese operacional |

## Superficies canonicas

Cada superficie existe para cumprir uma funcao.
Nao se deve criar pagina apenas porque "faltava um formato".

| Superficie | Funcao | Escopo minimo | Observacao |
| --- | --- | --- | --- |
| `reality_class` | trilha principal de uma Part | pergunta central, bloco nuclear, checklist, ponte | base da Part |
| `masterclass` | aprofundamento denso | narrativa ampliada, comparadores, boards, treino orientado | overkill principal |
| `exercises` | treino objetivo | MCQ, V/F, pegadinhas, feedback | nao virar escolar |
| `code_lab` | logica procedural ou decisoria | algoritmos, fluxos, sequencias, troubleshooting | linguagem operacional |
| `atlas` | navegacao visual concentrada | comparadores, familias, mapas de imagem | nem toda Part precisa atlas desde o inicio |
| `osce` | treino observacional estruturado | checklist, rubrica, criterio de erro | obrigatorio em dominios procedurais |
| `premium_hub` | porta premium | acesso a review, atlas, trilhas e casos | nao pode ser placeholder |
| `premium_review` | revisao transversal | costura Parts, falhas e principios | linguagem de expertise |
| `premium_atlas` | mapa visual transversal | ativos, overkills, comparadores | deve ajudar revisao rapida |
| `cross_part_cases` | raciocinio multi-step | escalada, dispositivo, tecnica, confirmacao, complicacao | caso, nao antologia frouxa |
| `training_arena` | treino canonico | motor data-driven, score, taxonomia e memoria local | centro do treino serio |
| `graphics_catalog` | inventario visual | boards, sequences, posters, assets reusaveis | suporte de governanca |
| `dashboard` | entrada superior | trilhas, filtros, busca, mapa do ecossistema | camada de navegacao |
| `teacher_mode` | uso docente | rubricas, observaveis, debriefing | pode nascer depois, mas deve ser previsto |

## Espinha obrigatoria por Part

Toda Part madura deve ter, no minimo:

1. abertura clinica
2. pergunta central
3. mapa mental
4. bloco nuclear
5. comparadores
6. pitfalls
7. casos
8. treino
9. checklist
10. ponte para a proxima Part

## Matriz macro por Part e superficie

Legenda:

- `A`: ausente
- `P`: placeholder
- `X`: presente hoje
- `T`: alvo obrigatorio
- `O`: alvo opcional ou tardio

| Part | Reality Class | Masterclass | Exercises | Code Lab | Atlas | OSCE | Reuso Premium | Cross-Part Cases |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | X/T | X/T | X/T | X/T | A/O | A/O | T | T |
| 2 | X/T | X/T | X/T | X/T | A/O | A/O | T | T |
| 3 | X/T | X/T | X/T | X/T | X/T | A/O | T | T |
| 4 | X/T | X/T | X/T | X/T | A/O | X/T | T | T |
| 5 | X/T | X/T | X/T | X/T | X/T | X/T | T | T |
| 6 | X/T | A/T | A/T | A/O | A/O | A/T | T | T |
| 7 | X/T | A/O | A/O | A/O | A/O | A/T | T | T |
| 8 | X/T | A/O | A/O | A/O | A/O | A/O | T | T |
| 9 | X/T | A/O | A/O | A/O | A/O | A/T | T | T |

## Estado atual real do projeto ativo

Com base em `project/cvc_academy_v20_premium_dual_layer`:

- existem 39 paginas em `pages/`
- existem 17 docs, 12 JSONs, 374 assets e 14 scripts locais de suporte
- Parts 1 a 9 ja possuem reality class
- Parts 1 a 5 possuem overkills em varios formatos, com maior densidade nas Parts 2 a 5
- as masterclasses das Parts 1, 2, 3 e 5 agora ja estao mais alinhadas ao tronco visual atual, abrindo com midia e hardware reais antes de boards derivados
- as Parts 7, 8 e 9 agora tambem mostram manutencao real, territorio hostil real e fecho visual real na propria serie principal, com boards derivados rebaixados para papel de apoio
- premium hub, premium review e premium atlas deixaram de ser placeholder e viraram superficies funcionais iniciais
- alpha hub, dashboard alpha, training arena, cross-part cases, graphics catalog, revisao integral e modo professor ja existem no bundle, com casos, treino, estado local, catalogo e lote real aberto em nivel mais governado
- o pacote base voltou a ter `manifest.json`, `styles/site.css`, `scripts/`, `sw.js` e icones locais
- o bundle agora tambem tem contrato minimo de metadado em docs e registros JSON canonicos

## Schema operacional por Part

### Part 1: Antes do CVC

#### Pergunta central

Eu preciso mesmo invadir este paciente?

#### Subperguntas obrigatorias

- Qual o objetivo terapeutico?
- Via oral resolve?
- O problema e absorcao, velocidade, seguranca, duracao ou previsibilidade?
- O acesso e necessario ou a rotina empurrou a decisao?

#### Superficies-alvo

- reality class
- masterclass
- exercises
- code lab
- reuso em premium review
- casos transversais

#### Midia prioritaria

- comparadores de vias
- fluxos de decisao
- casos de excesso de invasao
- boards de "menor acesso suficiente"

#### Estado atual

- reality class presente
- masterclass presente
- exercises presente
- code lab presente

#### Falhas tipicas

- cognitiva: invadir por reflexo
- cultural: associar "mais acesso" a "melhor cuidado"
- sistemica: rotina empurrando acesso desnecessario

#### Criterio de aceite

O aluno termina a Part 1 menos propenso a pedir CVC por automatismo.

### Part 2: Escada do acesso

#### Pergunta central

Se preciso de acesso, qual o menor degrau suficiente?

#### Superficies-alvo

- reality class
- masterclass
- exercises
- code lab
- reuso em premium review
- casos transversais

#### Midia prioritaria

- ladder boards
- comparadores entre periferico, EJ, midline, PICC, CVC
- custo da escalada
- horizonte temporal

#### Estado atual

- masterclass presente
- exercises presente
- code lab presente
- reality class presente

#### Criterio de aceite

O aluno consegue justificar por que nao escalou, ou por que escalou.

### Part 3: Dispositivos

#### Pergunta central

Qual familia de dispositivo faz sentido para esta terapia, este tempo e este contexto?

#### Superficies-alvo

- reality class
- masterclass
- exercises
- code lab
- atlas
- reuso em premium review
- casos transversais

#### Midia prioritaria

- atlas comparativo de familias
- boards de identidade por dispositivo
- manutencao por familia
- comparadores PICC vs CVC, port vs PICC, HD vs CVC

#### Estado atual

- masterclass presente
- exercises presente
- code lab presente
- atlas presente
- reality class presente

#### Criterio de aceite

O aluno reconhece que dispositivos tem identidade propria e nao sao sinonimos de "acesso venoso".

### Part 4: Tecnica viva

#### Pergunta central

Como executar sem transformar tecnica em teatro?

#### Superficies-alvo

- reality class
- masterclass
- exercises
- code lab
- OSCE
- reuso em premium review
- casos transversais

#### Midia prioritaria

- landmark boards
- sequences de fio-guia e dilatacao
- comparadores direita vs esquerda
- micropuncture
- troubleshooting
- checklists

#### Estado atual

- masterclass presente
- exercises presente
- code lab presente
- OSCE presente
- reality class presente

#### Criterio de aceite

O aluno entende gesto, seguranca e troubleshooting como partes do mesmo ato tecnico.

### Part 5: Imagem e confirmacao

#### Pergunta central

Como ver, confirmar e nao se enganar com tela bonita?

#### Superficies-alvo

- reality class
- masterclass
- exercises
- code lab
- atlas
- OSCE
- reuso em premium review
- casos transversais

#### Midia prioritaria

- US
- RX
- artefatos
- AP vs lateral
- ponta vs trajeto
- malposicoes
- bundle de confirmacao

#### Estado atual

- masterclass presente
- exercises presente
- code lab presente
- atlas presente
- OSCE presente
- reality class presente

#### Criterio de aceite

O aluno para de achar que confirmar e so olhar uma ponta "bonita".

### Part 6: Complicacoes

#### Pergunta central

Qual e o preco do erro, do atraso e do reconhecimento salvador?

#### Superficies-alvo

- reality class
- masterclass
- exercises
- OSCE
- reuso em premium review
- casos transversais

#### Midia prioritaria

- pneumotorax
- hematoma
- punicao arterial
- ectopia
- malposicao com dano
- board de conduta apos complicacao

#### Falhas tipicas

- cognitiva: negar complicacao
- tecnica: nao reconhecer cedo
- cultural: seguir apesar do sinal de alarme

#### Estado atual

- reality class presente
- demais superficies ainda ausentes

#### Criterio de aceite

Complicacao deixa de ser rodape e vira parte central do raciocinio procedimental.

### Part 7: Transferencia e ensino

#### Pergunta central

Como transformar execucao em competencia observavel, ensinavel e auditavel?

#### Superficies-alvo

- reality class
- OSCE
- teacher mode
- premium reuse
- casos transversais

#### Midia prioritaria

- teaching boards
- bundle audit visuals
- rubricas
- microcasos de debriefing

#### Estado atual

- reality class presente
- demais superficies ainda ausentes

#### Criterio de aceite

Ensino deixa de ser comentario lateral e passa a ser dominio legitimo da plataforma.

### Part 8: Continuidade e territorios hostis

#### Pergunta central

O que muda quando a anatomia, a historia ou o contexto tornam o territorio hostil?

#### Superficies-alvo

- reality class
- premium reuse
- casos transversais
- possivel atlas tardio

#### Midia prioritaria

- boards de territorio hostil
- comparadores de lado
- contexto irradiado, obeso, ventilado, agitado
- ligacoes com drenagem, manutencao e decisao

#### Estado atual

- reality class presente
- demais superficies ainda ausentes

#### Criterio de aceite

O aluno entende que contexto ruim pede mais raciocinio, nao menos.

### Part 9: Checklist integrado

#### Pergunta central

Como fechar a jornada inteira em sintese operacional, sem epilogo fraco?

#### Superficies-alvo

- reality class
- OSCE final
- premium reuse
- cross-part cases
- dashboard summary card

#### Midia prioritaria

- grande tabela de sintese
- caso final ilustrado
- checklists integrados
- mapa de erros frequentes

#### Estado atual

- reality class presente
- demais superficies ainda ausentes

#### Criterio de aceite

Part 9 funciona como fecho memoravel e operacional, nao como apendice burocratico.

## Schema operacional por superficie

### Reality Class

#### Funcao

Ser a porta principal de cada Part na trilha base.

#### Deve conter

- pergunta central
- argumento clinico
- bloco nuclear
- pelo menos um comparador
- pelo menos um pitfall
- checklist
- ponte para proxima Part

#### Nao deve ser

- resumo seco
- landing page vazia
- duplicata pobre da masterclass

### Masterclass

#### Funcao

Aprofundamento vertical com densidade visual e argumentativa.

#### Deve conter

- boards
- comparadores
- principios
- treino orientado
- navegacao interna clara

#### Nao deve ser

- texto longo sem funcao visual

### Exercises

#### Funcao

Treino objetivo com feedback.

#### Deve conter

- MCQ
- V/F
- pegadinhas
- consequencia ou preco do erro

#### Nao deve ser

- prova escolar sem contexto

### Code Lab

#### Funcao

Explicitar logica decisoria ou procedural.

#### Deve conter

- algoritmos
- troubleshooting
- flow thinking
- escolhas condicionais

### Atlas

#### Funcao

Concentrar navegacao visual comparativa.

#### Deve conter

- familias ou grupos reconheciveis
- comparadores lado a lado
- uso de imagem forte

### OSCE

#### Funcao

Treino observacional e avaliativo.

#### Deve conter

- checklist
- rubrica
- observaveis claros
- criterio de bom, parcial e ruim

### Premium Review

#### Funcao

Costurar a linguagem de expertise entre Parts.

#### Deve conter

- principios transversais
- falhas recorrentes
- casos que atravessam dominios
- tom de revisao madura

### Premium Atlas

#### Funcao

Atalho visual transversal para ativos de alto valor.

#### Deve conter

- mapas por dominio
- boards principais
- comparadores reusaveis
- entrada rapida para revisao

### Dashboard

#### Funcao

Organizar o ecossistema inteiro.

#### Deve conter

- trilhas de uso
- filtros por Part
- filtros por dominio
- filtros por formato
- busca
- mapa premium
- atalhos para estudo, revisao, treino e ensino

#### Nao deve ser

- pagina bonita sem governanca de conteudo

## Contrato minimo de midia

Cada item de midia maduro deveria mapear:

- `id`
- `file`
- `part_targets`
- `surface_targets`
- `domain`
- `subdomain`
- `media_type`
- `didactic_function`
- `source_type`
- `source_reference`
- `permission_or_license`
- `anonymization_status`
- `trust_level`
- `status`
- `priority`
- `notes`

## Contrato minimo de um deliverable por Part

Para uma Part ser considerada `functional`, ela precisa ter:

1. uma pergunta central clara
2. uma reality class funcional
3. pelo menos um bloco de treino
4. pelo menos um conjunto de midia com destino didatico explicito
5. ligacao coerente com premium review ou casos transversais

Para uma Part ser considerada `mature`, ela precisa ter:

1. espinha completa
2. visualidade forte
3. comparadores memoraveis
4. treino com preco real do erro
5. reuso transversal
6. metadado organizado

## Divida atual prioritaria

O schema deixa claro o principal descompasso do projeto hoje:

- a infraestrutura minima do bundle foi recomposta, mas a maturidade editorial ainda e desigual
- a serie principal ja tem reality classes 1 a 9, mas varias ainda estao em estagio inicial
- Parts 2 a 5 seguem mais densas do que Parts 1, 6 e 9
- premium deixou de ser placeholder, mas ainda nao existe como camada madura
- o dashboard alpha agora existe, a arena ja entrega estado local e o bundle ja tem favoritos, concluidos, recentes e retomada, mas ainda faltam filtros globais mais profundos e sincronismo entre navegadores

## Ordem de execucao recomendada

1. consolidar espinha, treino minimo e comparadores nas reality classes novas
2. fixar metadado minimo e governanca de midia e superficie
3. densificar premium hub/review/atlas acima do nivel inicial
4. estruturar cross-part cases e graphics catalog com conteudo real
5. consolidar dashboard alpha e puxar filtros reais
6. amadurecer pipeline de midia real e ampliar a arena de treino

## Frase-guia

O master schema existe para garantir que cada nova pagina, cada novo asset, cada novo board e cada nova ideia de interface sirvam a uma unica plataforma medica visual, coerente, confiavel e escalonavel.
