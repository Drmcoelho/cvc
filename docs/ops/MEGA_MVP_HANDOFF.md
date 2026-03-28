# Mega MVP Handoff

## O que este workspace entrega agora

Este workspace ja entrega um mega MVP real do `CVC Academy` como pacote web `offline-first`:

- indice principal do bundle
- serie principal Parts 1 a 9
- camada premium inicial funcional
- training arena com memoria local
- dashboard alpha com cockpit de estudo
- catalogo grafico com midia aberta real
- teacher mode e revisao integral

## Estado tecnico validado

O pacote canonico atual e:

- `project/cvc_academy_v20_premium_dual_layer`

Estado estrutural validado:

- `39` paginas HTML
- `17` docs
- `12` JSONs
- `374` assets
- `14` scripts

Checks ja fechados:

- `python3 tools/validate_bundle.py`
- `python3 tools/smoke_test_bundle.py`
- `node --check` nos scripts alterados

## O que ja esta pronto para teste humano

### Fluxo offline simples

- `index.html` na raiz do workspace
- redireciona para o indice canonico do bundle

### Fluxo HTTP local mais real

- `dashboard.zsh`
- sobe servidor local do bundle
- imprime URLs para `index`, `dashboard` e `training arena`

### Fluxo de QA automatizado

- `TESTAR_CVC_LOCAL.command`
- `tools/smoke_test_bundle.py`

### Fluxo online via GitHub Pages

- `.github/workflows/pages.yml`
- `docs/ops/GITHUB_PAGES.md`
- publica apenas `project/cvc_academy_v20_premium_dual_layer`
- mantem o bundle local como fonte canonica

## O que vale testar agora

### Pelo `index.html`

Confira:

- se o launcher da raiz abre o bundle certo
- se o indice canonico comunica bem as superficies
- se a navegacao inicial esta clara
- se o produto parece coerente mesmo em `file://`

### Pelo `dashboard.zsh`

Confira:

- se o servidor sobe sem atrito
- se o `dashboard alpha` carrega
- se o `training arena` abre
- se favoritos, concluidos, recentes e retomada aparecem no dashboard
- se o topo das paginas mostra controles de estado local

## O que ainda falta agora

Isto e o backlog real mais importante antes de chamar o produto de mais maduro.

### 1. Filtros reais no dashboard

Ainda faltam filtros operacionais de:

- Part
- superficie
- dominio
- falha
- maturidade

Hoje o dashboard ja tem cockpit e memoria local, mas ainda nao virou painel filtravel de verdade.

### 2. Sincronismo e portabilidade do estado local

Ja existem:

- favoritos
- concluidos
- recentes
- retomada

Ainda faltam:

- exportar estado
- importar estado
- sincronizar entre navegadores
- preparar modelo para shell de Mac e iOS

### 3. App-readiness real

Ainda faltam os blocos `G4`, `H1` e `H2` da matriz:

- separar melhor conteudo, navegacao, metadado e casca
- fechar shell spec de Mac
- fechar shell spec de iOS

Hoje existe produto web forte. Ainda nao existe casca de app pronta.

### 4. Protocolo de acervo proprio

O bloco `F4` segue aberto.
Ainda falta formalizar:

- permissao
- anonimizacao
- rastreio documental
- criterio de ingestao de acervo proprio

Sem isso, acervo clinico proprio nao deve entrar.

### 5. Densidade editorial desigual

As reality classes existem, mas a maturidade editorial ainda nao e uniforme.

Principalmente:

- Part 1
- Part 6
- Part 9
- pages base das Parts 2 a 5 frente aos overkills

Ou seja: a espinha existe, mas nem toda a base esta no mesmo nivel de densidade.

### 6. Midia real ainda incompleta

Ja existem lotes reais abertos com:

- US
- RX
- trombose
- manutencao
- sitio de saida
- biofilme

Ainda faltam alvos importantes:

- US operator-view melhor
- outra malposicao real fora da azigos
- foto clinica aberta de infeccao visivel em tunel ou sitio de saida

### 7. Integracao treino-professor-dashboard

As tres camadas ja existem.
Ainda falta costura mais profunda por metadado:

- usar falhas da arena no teacher mode
- puxar recomendacoes docentes para o dashboard
- transformar treino em trilha adaptativa

### 8. Publicacao publica e observabilidade basica

O deploy para `GitHub Pages` agora esta preparado, mas ainda faltam camadas de operacao real:

- configurar o remoto oficial
- publicar `main`
- ativar `Settings > Pages > GitHub Actions`
- validar a URL publica final
- decidir se havera dominio proprio
- decidir se havera analytics ou zero telemetria

## Como interpretar o estado atual

Este workspace ja deixou de ser prototipo cenografico.
Hoje ele ja e:

- bundle web local funcional
- produto estudavel
- cockpit de estudo inicial
- bundle apto para `GitHub Pages`
- base valida para evolucao multiplataforma

Mas ainda nao e:

- dashboard maduro com filtros profundos
- plataforma sincronizada entre dispositivos
- app de Mac pronto
- app de iOS pronto
- acervo proprio clinico governado

## Ordem certa para o proximo ciclo

1. filtros reais do dashboard
2. protocolo de acervo proprio
3. export/import do estado local
4. integracao treino-professor-dashboard
5. app-readiness para Mac e iOS
6. densificacao editorial das Parts mais fracas

## Arquivos-chave deste handoff

- `index.html`
- `dashboard.zsh`
- `docs/ops/RUN_LOCAL.md`
- `docs/planning/execution_matrix.md`
- `docs/foundation/master_schema.md`
- `project/cvc_academy_v20_premium_dual_layer/index.html`
- `project/cvc_academy_v20_premium_dual_layer/pages/dashboard-alpha.html`
- `project/cvc_academy_v20_premium_dual_layer/pages/training-arena.html`
