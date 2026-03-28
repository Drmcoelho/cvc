# Protocolo F4 — Anonimizacao e Acervo Proprio

## Finalidade

Este documento fecha o bloco F4 da execution matrix.

Ele define as regras minimas para que qualquer imagem ou midia de acervo clinico proprio possa entrar no bundle do CVC Academy de modo seguro, rastreavel e defensavel.

Sem este protocolo fechado, nenhum acervo proprio clinico deve entrar no bundle — nem para teste, nem como placeholder.

## Principio cardinal

Conteudo clinico proprio so entra com:

1. Permissao documentada do paciente ou responsavel legal (ou isencao formal aplicavel)
2. Anonimizacao verificada por checklist antes de qualquer exportacao
3. Registro documental minimo vinculado ao arquivo
4. Aprovacao explicita do responsavel editorial do projeto

Ausencia de qualquer um destes quatro itens bloqueia a entrada do material.

## Definicoes

### Acervo proprio

Imagem, video, audio ou dado clinico originado de:

- pratica clinica propria do time editorial
- parceria com servico clinico parceiro
- captura realizada especificamente para o projeto

Nao se enquadra aqui:

- imagem open-source licenciada externamente (cobertas pelo `F1 sourcing-manifest`)
- imagem derivada/diagrama produzido internamente sem dado clinico real

### Dado identificador

Qualquer elemento que permite, direta ou indiretamente, reidentificar o paciente:

- nome, iniciais, data de nascimento, numero de prontuario
- foto de rosto ou parte do corpo que permita identificacao
- data exata de procedimento combinada com nome de instituicao e diagnostico raro
- numero de leito ou quarto com data
- tatuagem, cicatriz ou marca fisica identitaria visivel
- metadado DICOM nao removido (nome, ID, data, instituicao)

## Fluxo de entrada — acervo proprio

### Passo 1 — Permissao

Opcoes validas (em ordem de preferencia):

1. **Consentimento informado escrito** do paciente ou responsavel, com finalidade explicita de uso educacional nao comercial e possibilidade de retirada.
2. **Isencao de TCLE por comite** (CAAE ou equivalente), quando o material for retrospectivo e o risco de reidentificacao for baixo.
3. **Material de dominio publico por definicao legal** (ex: imagem de prontuario de paciente falecido sem herdeiros vivos em jurisdicao que permite isso — verificar caso a caso).

Documentacao exigida: numero do TCLE ou numero do CAAE ou justificativa escrita assinada pelo responsavel editorial.

### Passo 2 — Anonimizacao

Checklist obrigatorio antes de qualquer exportacao:

```
[ ] Nome e iniciais removidos da imagem e do metadado
[ ] Data de nascimento e data do exame removidos do metadado DICOM
[ ] Numero de prontuario e numero de leito removidos
[ ] Rosto ou parte identificadora coberta ou recortada
[ ] Metadado EXIF/DICOM exportado e auditado manualmente
[ ] Revisor independente confirmou ausencia de dado identificador
```

Ferramenta recomendada para DICOM: `dicom-anonymizer` (open-source) ou equivalente auditavel.

Para imagens nao-DICOM (JPEG, PNG): usar ExifTool para verificar e limpar metadado.

### Passo 3 — Registro documental minimo

Para cada arquivo aceito, criar entrada no `v20_media_registry_seed.json` com os campos:

```json
{
  "id": "proprio__<dominio>__<subtema>__<seq>",
  "source": "proprio",
  "license": "uso_interno_educacional",
  "consent_ref": "<numero_TCLE_ou_CAAE>",
  "anonymized_by": "<nome_do_revisor>",
  "anonymized_date": "<YYYY-MM-DD>",
  "parts_target": ["part6"],
  "domain": "complication",
  "subtopic": "exit_site_infection",
  "maturity": "validated",
  "status": "approved"
}
```

O campo `consent_ref` e obrigatorio. Arquivo sem `consent_ref` nao passa pela validacao do registry.

### Passo 4 — Aprovacao editorial

O responsavel editorial do projeto revisa:

- o checklist de anonimizacao preenchido
- o registro documental
- a intencao didatica do material (qual pergunta este material ancora?)

Aprovacao e registrada com data e assinatura no log de entrada de acervo proprio.

## Convencao de nomenclatura — acervo proprio

Seguir o mesmo padrao do `CVC_v20_Mega_Plano_Expansao_de_Midia.pdf`:

```
<dominio>__<subtema>__<uso>__<seq>.ext
```

Prefixo obrigatorio para acervo proprio: `proprio__`

Exemplos:
- `proprio__technique__ij_real_operator_view__01.jpg`
- `proprio__complication__exit_site_infection_real__01.jpg`
- `proprio__maintenance__dressing_real_bundle__01.jpg`

O prefixo `proprio__` garante que o validador automatico e o revisor humano identifiquem imediatamente que este material exige documentacao de permissao.

## Casos especiais

### Material retrospectivo de ensino ja existente

Se o servico clinico parceiro ja usava o material em ensino interno, verificar:

- se havia consentimento para uso educacional no TCLE original do paciente
- se o material pode ser considerado anonimizado pelo padrao deste protocolo

Se sim para os dois: proceder com registro normal.
Se nao para qualquer um: tratar como novo caso de consentimento.

### Imagem capturada em treinamento simulado

Sem paciente real envolvido: sem necessidade de TCLE. Documentar como `simulacao` no campo `source`.

### Video de procedimento assistido por supervisor

Se o video foi capturado com finalidade didatica explicita e o paciente assinou TCLE com essa finalidade: valido. Se o TCLE nao menciona uso em produto digital distribuivel (mesmo offline): requerer novo consentimento.

## O que este protocolo nao cobre

- Imagens open-source com licenca publica (cobertas por `F1`)
- Material derivado sem dado clinico real (diagramas, boards SVG)
- Video de simulacao sem paciente real

## Criterio de pronto para o bloco F4

O bloco F4 e considerado fechado quando:

- [ ] este documento e aprovado e commitado
- [ ] ao menos um caso de uso real foi percorrido seguindo o fluxo completo (permissao + anonimizacao + registro + aprovacao)
- [ ] o `validate_bundle.py` consegue detectar arquivos com prefixo `proprio__` sem `consent_ref` e sinalizar como erro

## Proximos passos recomendados

1. Adicionar validacao de `consent_ref` ao `validate_bundle.py` para entradas `proprio__` no registry.
2. Identificar o primeiro material de acervo proprio candidato (ex: US operator-view de procedimento recente).
3. Percorrer o fluxo completo com esse material como caso de uso piloto.
4. Revisar este protocolo apos o caso piloto.

## Historico

- 2026-03-28: versao inicial criada para fechar F4 da execution matrix.
