# Execution Matrix v20+

## Finalidade

Esta matriz converte `docs/foundation/codex.md`, `docs/foundation/roadmap.md` e `docs/foundation/master_schema.md` em execucao real.
Ela existe para responder:

- o que fazer agora
- em que ordem
- com que dependencia
- como saber se terminou
- qual o risco de empurrar cada bloco

## Legenda operacional

### Prioridade

- `P0`: trava integridade do produto
- `P1`: destrava superficies centrais
- `P2`: acelera valor didatico e premium
- `P3`: expande plataforma

### Estado

- `open`
- `in_progress`
- `blocked`
- `staged`
- `done`

### Trilhas

- `foundation`
- `core-series`
- `premium`
- `dashboard`
- `media-governance`
- `real-media`
- `training`
- `platform`

## Regras de sequenciamento

1. Nao abrir novas superficies enquanto o pacote base estiver quebrado.
2. Nao chamar placeholder de entrega.
3. Nao escalar dashboard sem metadado e trilhas minimamente organizados.
4. Nao escalar app antes de separar conteudo, navegacao e casca.
5. Nao acumular midia sem destino didatico explicito.

## Bloco A: tronco utilizavel agora

| ID | Pri | Trilha | Superficie | Escopo | Dependencias | Estado atual | Proximo passo | Criterio de pronto | Risco se adiar |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A1 | P0 | foundation | package-core | Restaurar `manifest.json`, `styles/site.css`, `scripts/` e assets tecnicos faltantes | arvore canonica limpa | done | manter esta base como baseline do pacote canonico | `index.html` abre sem quebrar CSS/JS principal | todo o resto trabalha sobre pacote quebrado |
| A2 | P0 | foundation | link-integrity | Eliminar links mortos do indice, hubs e footers | A1 | done | rerodar a auditoria a cada lote de pagina nova | zero referencias locais mortas nas superficies publicas | navegacao segue mentindo sobre o produto |
| A3 | P0 | foundation | schema-part-spine | Formalizar espinha obrigatoria por Part no conteudo real | `docs/foundation/master_schema.md` pronto | done | manter a espinha das reality classes como baseline e puxar overkills antigos para o mesmo idioma | Parts presentes seguem um padrao reconhecivel | crescimento continua artesanal |
| A4 | P0 | media-governance | metadata-minimum | Fixar campos minimos de metadado para midia e superficies | `docs/foundation/master_schema.md` pronto | done | manter `docs/METADATA_MINIMUM.md` e os registros JSON como baseline canonico | novos assets entram com id, dominio, alvo e status | caos de acervo e retrabalho |
| A5 | P1 | foundation | qa-local | Criar validacao local de links e assets | A1, A2 | done | rodar `python3 tools/validate_bundle.py` antes de cada release local | existe checagem repetivel antes de cada release | regressao silenciosa a cada lote |

## Bloco B: cobertura minima da serie principal

| ID | Pri | Trilha | Superficie | Escopo | Dependencias | Estado atual | Proximo passo | Criterio de pronto | Risco se adiar |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| B1 | P1 | core-series | Part 1 reality class | Criar base da decisao antes do CVC | A1, A2, A3 | staged | aprofundar comparadores, treino e checklist para sair do nivel inicial | Part 1 funcional na trilha principal | serie segue nascendo no meio da escada |
| B2 | P1 | core-series | Parts 2-5 reality class | Criar bases canonicamente mais leves que os overkills | A1, A2, A3 | staged | elevar as pages base acima do status de ponte entre overkills | Parts 2-5 tem superficie base alem do overkill | overkill continua substituindo base |
| B3 | P1 | core-series | Part 6 reality class | Abrir o eixo de complicacoes como parte central da serie | A1, A2, A3 | staged | densificar com dano, reconhecimento e conduta guiada | Part 6 funcional e linkada | plataforma parece fugir do dano real |
| B4 | P1 | core-series | Part 9 reality class | Fecho integrado da jornada | A1, A2, A3 | staged | fortalecer sintese, caso final e mapa de erros | Part 9 deixa de ser promessa vazia | fim da serie continua fraco |
| B5 | P1 | core-series | Series hub | Consolidar `v20-alpha-hub` ou hub equivalente com rotas reais | A1, A2 | done | manter o hub alinhado ao indice e ao bundle real | existe hub da serie coerente com a arvore real | experiencia segue fragmentada |

## Bloco C: camada premium real

| ID | Pri | Trilha | Superficie | Escopo | Dependencias | Estado atual | Proximo passo | Criterio de pronto | Risco se adiar |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| C1 | P1 | premium | premium-hub | Transformar hub premium em pagina real, nao placeholder | A1, A2 | done | manter o hub alinhado ao contrato premium, casos e catalogo | hub premium organiza review, atlas e casos | premium continua cenografico |
| C2 | P1 | premium | premium-review | Construir costura transversal da serie | B1-B4 | done | ampliar quando novos casos e taxonomias surgirem | revisao transversal util em si mesma | review continua nome sem produto |
| C3 | P1 | premium | premium-atlas | Organizar atalho visual transversal | A4, B2-B4 | done | manter atlas e catalogo coerentes com o registry de midia | atlas premium serve revisao rapida | ativos seguem espalhados sem mapa |
| C4 | P2 | premium | V20_PREMIUM_UNIFIED | Preencher o doc como contrato de produto premium | C1, C2, C3 | done | usar o documento como baseline para dashboard e futuros shells | doc deixa de ser casca vazia | premium cresce sem governanca |

## Bloco D: casos, catalogo e modo professor

| ID | Pri | Trilha | Superficie | Escopo | Dependencias | Estado atual | Proximo passo | Criterio de pronto | Risco se adiar |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| D1 | P1 | training | cross-part-cases | Criar hub de casos multi-step | B1-B4, C2 | done | expandir a biblioteca de casos sem perder clareza editorial | existe pagina navegavel de casos multi-Part | expertise fica implita e difusa |
| D2 | P1 | media-governance | graphics-catalog | Criar catalogo de boards, sequences e ativos reusaveis | A4, C3 | done | ampliar inventario e manter taxonomia visivel | catalogo permite descobrir e reusar midia | assets seguem invisiveis fora de quem criou |
| D3 | P2 | training | teacher-mode | Estruturar rubricas, observaveis e debriefing | D1, B5 | done | manter teacher mode alinhado ao training registry e aos casos | existe superficie docente funcional | bloco de ensino fica subexplorado |
| D4 | P2 | training | review-integral | Definir papel desta superficie frente ao premium review | C2, D1 | done | manter a fronteira clara: triagem leve aqui, costura senior no premium | sem sobreposicao confusa de revisao | redundancia conceitual entre revisoes |

## Bloco E: treino serio

| ID | Pri | Trilha | Superficie | Escopo | Dependencias | Estado atual | Proximo passo | Criterio de pronto | Risco se adiar |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| E1 | P2 | training | training-batch-1 | Primeiro lote serio de MCQ, V/F, pegadinhas e OSCE | B1-B4, A4 | done | expandir modulo, tags e volume sem quebrar o motor canonico | treino existe por trajetoria, nao so por leitura | plataforma segue consultiva demais |
| E2 | P2 | training | failure-taxonomy | Aplicar cognitiva/tecnica/sistemica/cultural nos itens de treino | A3, A4 | done | ligar taxonomia a filtros, dashboard e leitura docente | feedback deixa de ser binario | treino vira quiz raso |
| E3 | P2 | training | feedback-graduated | Elegante, prudente, aceitavel, precipitado, desproporcional, perigoso | E1, E2 | done | densificar exemplos e calibracao por dominio | erros passam a ter preco clinico | aprendizagem segue moralista ou simplista |

## Bloco F: governanca de midia e acervo real

| ID | Pri | Trilha | Superficie | Escopo | Dependencias | Estado atual | Proximo passo | Criterio de pronto | Risco se adiar |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| F1 | P1 | media-governance | sourcing-manifest | Especificar fontes, licencas, risco juridico e uso permitido | A4 | done | manter allowlist dura e exigir rastreio completo por arquivo | regra clara para entrada de acervo externo | midia entra sem rastreabilidade |
| F2 | P1 | real-media | acquisition-queue | Fila por dominio, prioridade e part target | F1 | done | alimentar a fila com US real, malposicao e manutencao | backlog de midia real fica visivel | sourcing vira wishful thinking |
| F3 | P2 | real-media | first-real-batch | Primeiro lote real por tecnica, imagem, complicacao, bundles e hostis | F1, F2 | done | ampliar variedade operator-view e preparar lote proprio anonimizado | lote real entra com metadado e destino | visualidade continua dependente demais de derivado |
| F4 | P2 | media-governance | anonymization-protocol | Protocolo de acervo proprio e permissao | F1 | open | definir fluxo documental minimo | nada proprio entra de modo amador | risco juridico e etico cresce cedo |

## Bloco G: dashboard e plataforma

| ID | Pri | Trilha | Superficie | Escopo | Dependencias | Estado atual | Proximo passo | Criterio de pronto | Risco se adiar |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| G1 | P1 | dashboard | dashboard-information-architecture | Definir trilhas, filtros, mapa e entidades | A3, A4, B5 | done | manter IA alinhada aos registries e ao bundle real | existe blueprint claro do dashboard | interface cresce em cima de caos |
| G2 | P2 | dashboard | dashboard-alpha | Primeira versao local para navegacao superior | G1, C1-C3, D1-D2 | done | evoluir o alpha para filtros reais e estado local | dashboard melhora navegacao sem fingir completude | produto continua com cara de arquipelago |
| G3 | P3 | platform | search-and-local-state | Busca, favoritos, historico e trilhas locais | G2, A5 | done | ligar o estado local ao teacher mode, aos filtros reais e a futuras exportacoes | busca, favoritos, concluidos e retomada de estudo funcionam | dashboard vira menu sem memoria |
| G4 | P3 | platform | app-readiness | Separar conteudo, metadado, navegacao e casca | G1, A4, G2 | open | modelar entidades para futura exportacao | base HTML fica pronta para Mac/iOS | futura transicao exigira reescrita |

## Bloco H: expansao de produto

| ID | Pri | Trilha | Superficie | Escopo | Dependencias | Estado atual | Proximo passo | Criterio de pronto | Risco se adiar |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| H1 | P3 | platform | Mac shell spec | Definir shell de Mac sobre o nucleo HTML | G4 | open | fechar mapa de views e dados | especificacao clara e enxuta | app Mac nasce improvisado |
| H2 | P3 | platform | iOS app spec | Definir shell iOS, offline e deep links | G4 | open | fechar casos de uso e paridade minima | iOS tem caminho concreto | app vira fantasia solta |
| H3 | P3 | platform | app-alpha | Alpha de leitura, atlas e navegacao rapida | H1, H2 | open | implementar depois da maturidade web minima | app alpha reaproveita o nucleo sem reescrever | risco alto de duplicacao de esforco |

## Fila de execucao recomendada

### Agora

1. F3
2. G4
3. H1
4. H2
5. F4
6. ampliar filtros reais do dashboard

### Em seguida

1. H3
2. elevar os lotes 2, 3 e 4 da arena
3. ligar treino ao teacher mode
4. ligar treino, dashboard e professor por metadado
5. iniciar lote proprio anonimizado
6. aprofundar atlas real

### Depois

1. exportar e importar estado local entre navegadores
2. ligar filtros reais a falha, Part, formato e maturidade
3. ligar shells de Mac e iOS ao nucleo web

## Gate de progresso

Nota de estado atual:

- as masterclasses das Parts 1, 2, 3 e 5 ja deixaram de ser superfícies dominadas por SVG e agora usam ancoras reais como base de ensino
- as Parts 7, 8 e 9 tambem ja receberam `reality upgrade`, com manutencao real, territorio hostil real, fecho visual real e boards rebaixados para papel de apoio
- a densificacao futura mais critica ficou mais concentrada na Part 6, em atlas transversais e na camada de plataforma

### Gate 1: pacote honesto

- A1, A2 e A5 concluidos

### Gate 2: serie base funcional

- B1, B2, B3, B4 e B5 concluidos

### Gate 3: premium e casos reais de navegacao

- C1, C2, D1 e D2 concluidos

### Gate 4: treino e acervo governados

- E1, E2, F1, F2 e F3 concluidos

### Gate 5: dashboard alpha defensavel

- G1, G2 e G3 concluidos

### Gate 6: plataforma pronta para salto de casca

- G4, H1 e H2 concluidos

## Frase-guia

Se uma tarefa nao melhora integridade, cobertura da serie, premium real, treino serio, governanca de midia ou readiness de dashboard/app, ela provavelmente esta fora de hora.
