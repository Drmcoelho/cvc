# Run Local

## Visao rapida

Agora existem duas portas de entrada humanas na raiz do workspace:

1. `index.html`
2. `dashboard.zsh`

Elas existem para duas validacoes diferentes.

## Quando usar `index.html`

Use `index.html` quando quiser uma checagem offline direta por abertura de arquivo:

- abrir o site sem terminal
- validar se o launcher do pacote esta claro
- cair no indice canonico do bundle
- fazer uma leitura rapida do produto como HTML local

Esse fluxo redireciona para:

- `project/cvc_academy_v20_premium_dual_layer/index.html`

## Quando usar `dashboard.zsh`

Use `dashboard.zsh` quando quiser a validacao mais seria no navegador:

- servidor HTTP local real
- manifesto e service worker em contexto correto
- dashboard, arena e rotas locais sob URL HTTP
- fluxo mais proximo do uso futuro em shell de app

O script nao abre o navegador automaticamente.
Ele imprime as URLs e deixa voce escolher o que abrir.

## Comando para iTerm

Copie e cole isto no iTerm:

```bash
cd '/Users/matheuscoelho/Library/Mobile Documents/com~apple~CloudDocs/Downloads/Temp/Dreno/cvc' && zsh dashboard.zsh
```

Depois abra no navegador uma destas URLs:

- `http://127.0.0.1:8765/index.html`
- `http://127.0.0.1:8765/pages/dashboard-alpha.html`
- `http://127.0.0.1:8765/pages/training-arena.html`

Para parar:

- `Ctrl-C` no proprio iTerm

## Smoke test antes de abrir

Se quiser rodar a checagem HTTP automatizada antes:

```bash
cd '/Users/matheuscoelho/Library/Mobile Documents/com~apple~CloudDocs/Downloads/Temp/Dreno/cvc' && zsh TESTAR_CVC_LOCAL.command
```

O resultado esperado e:

- linhas `PASS` para as rotas e arquivos-chave
- linha final `Smoke test passed.`

## O que cada caminho realmente valida

### `index.html`

Valida:

- launcher offline da raiz
- acesso ao bundle canonico
- legibilidade geral do pacote em `file://`

Nao valida plenamente:

- service worker
- manifesto instalado em contexto HTTP
- qualquer detalhe que dependa de origem HTTP

### `dashboard.zsh`

Valida:

- servidor local funcional
- rotas HTTP do bundle
- manifesto no contexto certo
- dashboard alpha, arena e navegacao local em condicao mais real

## Comandos uteis

### Subir servidor local

```bash
python3 tools/run_bundle.py
```

### Subir servidor sem abrir navegador

```bash
python3 tools/run_bundle.py --no-open --quiet
```

### Rodar smoke test HTTP

```bash
python3 tools/smoke_test_bundle.py
```

### Rodar auditoria estrutural do bundle

```bash
python3 tools/validate_bundle.py
```

## Estado esperado hoje

No estado atual, o bundle canonico deve responder com:

- `39` paginas
- `17` docs
- `12` JSONs
- `374` assets
- `14` scripts
- `missing_key_files: 0`
- `missing_refs_unique: 0`

## Observacao pratica

Para revisao editorial rapida, `index.html` basta.

Para revisao funcional de produto, use `dashboard.zsh`.
