# CVC Academy v20
## Batch A Operational Manifest
### Expansão de mídia robusta para Parts 4–9

## 1. Missão do Batch A
O Batch A existe para produzir o primeiro salto visual realmente perceptível na plataforma, sem depender ainda de sourcing externo pesado. O alvo é reforçar a metade final da série, onde o déficit visual tem impacto didático maior.

### Objetivos operacionais
1. Densificar visualmente as Parts 4–9.
2. Converter acervo existente em mídia derivada didática de alto valor.
3. Preparar banco de treino visual reutilizável.
4. Fechar uma release com acervo organizado, nomeado, rastreável e fácil de expandir.

### Meta quantitativa
- **70 a 90 mídias novas úteis**
- Distribuição principal:
  - Part 4: 15–20
  - Part 5: 18–22
  - Part 6: 10–14
  - Part 7: 8–10
  - Part 8: 8–10
  - Part 9: 4–6
- Derivados mínimos:
  - **5 boards**
  - **3 sequences**
  - **6 stems de treino**
  - **1 board de fechamento transversal**

---

## 2. Regra de ouro
A mídia entra para cumprir função didática explícita. Nenhum arquivo entra só para “ficar bonito”.

### Funções didáticas válidas
- anatomia_viva
- comparacao
- pitfall
- confirmacao
- consequencia
- manutencao
- treino
- debriefing
- osce
- review

---

## 3. Estrutura de pastas do Batch A

```text
assets/
  media_expansion/
    batch_A/
      01_clinical_real/
        technique/
        imaging_confirmation/
        complications/
        maintenance_bundles/
        hostile_contexts/
      02_derived/
        boards/
        sequences/
        contact_sheets/
      03_training_bank/
        mcq/
        vf/
        pitfalls/
        osce/
        cross_cases/
```

### Regra de segregação
- **clinical_real**: foto/RX/US/dispositivo/cena real
- **derived**: board, poster, contact sheet, sequence, comparador
- **training_bank**: stems prontos para treino

---

## 4. Convenção de nome
Formato obrigatório:

`<dominio>__<subtema>__<uso>__<seq>.ext`

### Exemplos
- `technique__subclavia_landmark__clinical__01.jpg`
- `imaging__tip_high_svc__radiograph__02.jpg`
- `complication__pneumothorax_small__radiograph__01.jpg`
- `bundle__good_dressing__clinical__01.jpg`
- `hostile__irradiated_chest__clinical__01.jpg`
- `board__bundle_good_vs_bad__01.jpg`
- `sequence__guidewire_depth__01.jpg`
- `mcq__malposition_azygos__01.jpg`

---

## 5. Taxonomia mínima de metadados

Cada item do Batch A deve conter:

- `id`
- `file`
- `domain`
- `part_targets`
- `media_type`
- `didactic_function`
- `source_type`
- `status`
- `priority`
- `can_be_reused_in`
- `notes`

### Valores padronizados
#### domain
- technique
- imaging
- complication
- maintenance
- hostile
- cross_part

#### media_type
- clinical_photo
- radiograph
- ultrasound
- device_photo
- board
- sequence
- contact_sheet
- mcq_stem
- vf_stem
- osce_station
- cross_case_panel

#### source_type
- existing_asset
- derived_internal
- curated_external
- future_capture

#### status
- planned
- curated
- ingested
- placed
- reused
- archived

#### priority
- A
- B
- C

---

## 6. Mapa operacional por Part

# Part 4 — Técnica viva
## Objetivo
Transformar técnica em gesto visível, comparável e criticável.

## Tipos de mídia prioritários
- landmark subclávia direita vs esquerda
- landmark IJ
- landmark femoral
- micropunção vs kit convencional
- sequência do fio-guia
- dilatação correta vs agressiva
- fixação e curativo inicial
- erro de ângulo
- erro de profundidade
- ectopia por guia muito profundo

## Meta
**15–20 mídias**

## Produtos obrigatórios
1. **Board**: landmark subclávia D vs E
2. **Sequence**: guia → dilatação → cateter
3. **Stem**: ectopia durante passagem do fio

## Lista operacional
- technique__subclavia_landmark_right__clinical__01
- technique__subclavia_landmark_left__clinical__01
- technique__ij_landmark_surface__clinical__01
- technique__femoral_triangle__clinical__01
- technique__micropuncture_vs_standard__device_photo__01
- technique__guidewire_depth_good__clinical__01
- technique__guidewire_depth_bad__clinical__01
- technique__dilator_hand_position__clinical__01
- technique__fixation_initial__clinical__01
- technique__bad_angle_entry__clinical__01
- board__subclavia_right_vs_left__01
- sequence__guidewire_to_catheter__01
- mcq__wire_depth_ectopy__01
- osce__landmark_prepuncture_check__01

---

# Part 5 — Imagem e confirmação
## Objetivo
Fazer o aluno parar de olhar só ponta e começar a ler trajeto, contexto e armadilha.

## Tipos de mídia prioritários
- RX ponta ideal
- RX ponta alta
- RX ponta baixa
- malposição em ázigos
- malposição contralateral
- AP vs lateral
- US IJ compressível
- US IJ não compressível
- artefato de agulha
- sliding pleural presente
- sliding ausente
- board ponta/trajeto/complicação

## Meta
**18–22 mídias**

## Produtos obrigatórios
1. **Board**: ponta correta vs alta vs baixa
2. **Contact sheet**: malposições radiográficas
3. **Stem**: artefato vs achado real em US

## Lista operacional
- imaging__tip_ideal_svc__radiograph__01
- imaging__tip_high_svc__radiograph__01
- imaging__tip_low_ra__radiograph__01
- imaging__azygos_malposition__radiograph__01
- imaging__contralateral_malposition__radiograph__01
- imaging__ap_vs_lateral__contact_sheet__01
- imaging__ij_compressible__ultrasound__01
- imaging__ij_noncompressible__ultrasound__01
- imaging__needle_tip_visible__ultrasound__01
- imaging__needle_tip_lost__ultrasound__01
- imaging__pleural_sliding_present__ultrasound__01
- imaging__pleural_sliding_absent__ultrasound__01
- board__tip_position_matrix__01
- board__artifact_vs_true_finding__01
- contact_sheet__radiographic_malpositions__01
- mcq__tip_not_everything__01
- vf__sliding_present_absent__01
- osce__post_line_confirmation__01

---

# Part 6 — Complicações
## Objetivo
Mostrar o preço do erro com visualidade suficiente para fixar reconhecimento e conduta.

## Tipos de mídia prioritários
- pneumotórax pequeno
- pneumotórax evidente
- punção arterial
- hematoma cervical
- hematoma inguinal
- malposição com repercussão
- saída inflamada
- arritmia por guia
- hemotórax / derrame

## Meta
**10–14 mídias**

## Produtos obrigatórios
1. **Board**: erro → preço → conduta
2. **Stem**: punção arterial vs venosa
3. **OSCE**: reconhecer complicação precoce

## Lista operacional
- complication__pneumothorax_small__radiograph__01
- complication__pneumothorax_large__radiograph__01
- complication__arterial_puncture__clinical__01
- complication__neck_hematoma__clinical__01
- complication__groin_hematoma__clinical__01
- complication__wire_induced_ectopy__monitor__01
- complication__inflamed_exit_site__clinical__01
- complication__hemothorax_post_line__radiograph__01
- board__error_price_conduct__01
- mcq__arterial_vs_venous_redflag__01
- osce__recognize_postline_complication__01

---

# Part 7 — Manutenção e bundles
## Objetivo
Tirar manutenção do campo do “detalhe de enfermagem” e colocá-la no centro do raciocínio de complicação evitável.

## Tipos de mídia prioritários
- curativo bom
- curativo ruim
- linhas organizadas
- linhas caóticas
- hubs limpos
- hubs contamináveis
- bundle completo
- bundle incompleto

## Meta
**8–10 mídias**

## Produtos obrigatórios
1. **Board**: bundle 5/5 vs 3/5
2. **Stem**: qual detalhe visual exige ação imediata

## Lista operacional
- maintenance__good_dressing__clinical__01
- maintenance__bad_dressing__clinical__01
- maintenance__organized_lines__clinical__01
- maintenance__chaotic_lines__clinical__01
- maintenance__clean_hubs__clinical__01
- maintenance__high_risk_hubs__clinical__01
- board__bundle_5of5_vs_3of5__01
- vf__dressing_visual_audit__01
- osce__bundle_visual_check__01

---

# Part 8 — Territórios hostis
## Objetivo
Ensinar adaptação real ao contexto e não insistência heroica estúpida.

## Tipos de mídia prioritários
- pescoço hostil
- tórax irradiado
- obesidade
- ventilação/campo difícil
- EJ como ponte
- femoral em cenário ruim
- restrição anatômica
- board de território e escolha proporcional

## Meta
**8–10 mídias**

## Produtos obrigatórios
1. **Board**: território hostil → o que muda
2. **Stem**: quando EJ/femoral é ponte inteligente

## Lista operacional
- hostile__hostile_neck__clinical__01
- hostile__irradiated_chest__clinical__01
- hostile__obesity_landmark_loss__clinical__01
- hostile__ventilated_patient_context__clinical__01
- hostile__ej_as_bridge__clinical__01
- hostile__femoral_high_risk_context__clinical__01
- board__hostile_context_matrix__01
- mcq__bridge_access_reasoning__01
- osce__territory_choice_under_constraint__01

---

# Part 9 — Fechamento
## Objetivo
Fechar a jornada inteira com síntese visual e caso transversal.

## Tipos de mídia prioritários
- board integrado da jornada
- sequence de fluxo decisório
- caso transversal ilustrado
- comparador final acesso suficiente vs exagero

## Meta
**4–6 mídias**

## Produtos obrigatórios
1. **Board**: da indicação ao preço da complicação
2. **Cross-case panel**: timeline visual

## Lista operacional
- board__integrated_course_closure__01
- sequence__decision_to_complication_flow__01
- crosspart__illustrated_case_timeline__01
- mcq__right_access_right_time__01
- osce__final_integrated_station__01

---

## 7. Matriz de prioridades do Batch A

### Prioridade A
Entram primeiro:
- técnica viva
- confirmação
- malposição
- pneumotórax
- bundle bom vs ruim
- território hostil muito claro

### Prioridade B
Entram na sequência:
- femoral em contexto
- EJ como ponte
- detalhamento de hubs
- mais variações de curativo
- comparadores de dispositivo

### Prioridade C
Entram depois:
- luxo funcional
- variantes finas
- versões alternativas para treino
- pôsteres mais sofisticados

---

## 8. Produtos derivados mínimos do lote

### Boards
1. `board__subclavia_right_vs_left__01`
2. `board__tip_position_matrix__01`
3. `board__error_price_conduct__01`
4. `board__bundle_5of5_vs_3of5__01`
5. `board__hostile_context_matrix__01`
6. `board__integrated_course_closure__01`

### Sequences
1. `sequence__guidewire_to_catheter__01`
2. `sequence__postline_confirmation_flow__01`
3. `sequence__decision_to_complication_flow__01`

### Treino mínimo
- 2 MCQ
- 2 V/F
- 2 OSCE
- 2 pitfalls com imagem
- 1 cross-case panel

---

## 9. Critérios de aceite do Batch A

### Técnico
- caminhos válidos
- arquivos presentes
- sem duplicatas inúteis
- nomes coerentes
- manifesto preenchido

### Didático
- cada mídia com função clara
- cada mídia com pelo menos um reuso previsto
- nenhuma mídia puramente decorativa

### Estrutural
- Part alvo definido
- prioridade definida
- status definido
- tipo de mídia definido

### Pedagógico
- incremento visível em Parts 4–8
- Part 9 com fechamento mais robusto
- ao menos 6 itens convertidos em treino real

---

## 10. Cronograma operacional sugerido

### Semana 1
- auditoria do acervo atual
- separar assets reaproveitáveis
- preencher manifesto inicial

### Semana 2
- integrar assets existentes nas Parts 4–6
- produzir 2 boards
- produzir 1 sequence

### Semana 3
- integrar manutenção/hostis nas Parts 7–8
- produzir 2 boards
- produzir stems de treino

### Semana 4
- reforçar Part 9
- revisar links/caminhos
- fechar release do Batch A

---

## 11. Entrega final esperada do Batch A
No fim do lote, a plataforma deve:
- parecer mais médica
- depender menos de texto
- ensinar melhor por contraste
- mostrar mais preço do erro
- sustentar treino visual básico com dignidade

Em resumo:
**o Batch A não é cosmético. Ele é o primeiro salto de patamar.**