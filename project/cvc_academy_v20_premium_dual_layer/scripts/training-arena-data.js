window.CVC_TRAINING_ARENA = {
  version: "v20+",
  updatedAt: "2026-03-26",
  storageKeys: {
    progress: "cvc.training.arena.progress.v1",
    snapshot: "cvc.training.arena.snapshot.v1"
  },
  feedbackScale: [
    {
      id: "elegante",
      label: "Elegante",
      score: 3,
      summary: "resolve com clareza, proporcao e baixo dano",
      accent: "ok"
    },
    {
      id: "prudente",
      label: "Prudente",
      score: 2,
      summary: "segura o dano, ainda que sem refinamento maximo",
      accent: "ok"
    },
    {
      id: "aceitavel",
      label: "Aceitavel",
      score: 1,
      summary: "nao compromete o caso, mas ainda deixa folga tecnica",
      accent: "warn"
    },
    {
      id: "precipitado",
      label: "Precipitado",
      score: -1,
      summary: "anda rapido demais para o problema real",
      accent: "warn"
    },
    {
      id: "desproporcional",
      label: "Desproporcional",
      score: -2,
      summary: "entrega mais invasao ou mais risco que o necessario",
      accent: "danger"
    },
    {
      id: "perigoso",
      label: "Perigoso",
      score: -3,
      summary: "aumenta claramente o dano ou ignora red flags",
      accent: "danger"
    }
  ],
  failureTaxonomy: [
    {
      id: "cognitive",
      label: "Cognitiva",
      summary: "erro de enquadramento, indicacao ou leitura do problema"
    },
    {
      id: "technical",
      label: "Tecnica",
      summary: "erro de gesto, sequencia, confirmacao ou resposta ao erro"
    },
    {
      id: "systemic",
      label: "Sistemica",
      summary: "erro de equipe, processo, preparo ou documentacao"
    },
    {
      id: "cultural",
      label: "Cultural",
      summary: "atalho perigoso normalizado pelo ambiente"
    }
  ],
  modes: [
    {
      id: "solo",
      label: "Solo training",
      summary: "treino individual com resposta imediata e memoria local"
    },
    {
      id: "examiner",
      label: "Examiner mode",
      summary: "modo de observacao e rubrica para ensino e OSCE"
    }
  ],
  modules: [
    {
      id: "decision_ladder",
      title: "Decision ladder",
      subtitle: "Antes de invadir, antes de pedir central, antes de racionalizar o excesso.",
      track: "decision_track",
      partTargets: ["part1", "part2", "part3"],
      estimatedMinutes: 14,
      focus: [
        "necessidade real de acesso",
        "menor acesso suficiente",
        "escolha de familia"
      ],
      items: [
        {
          id: "decision_01",
          type: "mcq_single",
          title: "Menor acesso suficiente",
          prompt: "Paciente com celulite, hemodinamicamente estavel, tolerando VO, sem vesicante e sem necessidade de velocidade de infusao. A equipe pede CVC porque a periferica esta dificil.",
          options: [
            {
              id: "a",
              text: "Solicitar CVC jugular agora para ganhar previsibilidade."
            },
            {
              id: "b",
              text: "Revalidar a necessidade de acesso e tentar manter tratamento nao invasivo."
            },
            {
              id: "c",
              text: "Passar femoral por ser mais rapido para a equipe."
            },
            {
              id: "d",
              text: "Implantar port porque pode precisar de outras internacoes."
            }
          ],
          bestAnswer: "b",
          mediaLinks: [
            {
              label: "Catalogo real",
              href: "v20-graphics-catalog.html#open-real-batch-2"
            }
          ],
          mediaPreview: [
            {
              src: "../assets/real/open/ultrasound/ijv_narrowing_mid_neck_wikimedia.jpg",
              alt: "Ultrassom real com estreitamento de jugular interna direita",
              caption: "US real para discutir territorio hostil e janela ruim."
            },
            {
              src: "../assets/real/open/ultrasound/ijv_collaterals_neck_mass_wikimedia.jpg",
              alt: "Ultrassom real com colaterais de jugular interna direita",
              caption: "US real que reforca a necessidade de replano em pescoco hostil."
            }
          ],
          responses: {
            "a": {
              grade: "desproporcional",
              errorType: "cognitive",
              consequence: "cria dano de procedimento sem necessidade clinica proporcional",
              feedback: "A dificuldade periferica nao substitui indicacao. Primeiro se confirma se ainda vale a pena invadir."
            },
            "b": {
              grade: "elegante",
              errorType: "cognitive",
              consequence: "preserva o paciente do excesso e mantem a escada clinica intacta",
              feedback: "Boa resposta. A pergunta certa vem antes do acesso: ainda precisa invadir?"
            },
            "c": {
              grade: "perigoso",
              errorType: "cultural",
              consequence: "normaliza territorio ruim como resposta a pressa operacional",
              feedback: "Rapidez da equipe nao e criterio suficiente para femoral. Aqui a pressa esta roubando o raciocinio."
            },
            "d": {
              grade: "desproporcional",
              errorType: "cognitive",
              consequence: "antecipa um problema futuro sem justificativa atual",
              feedback: "Reservatorio implantavel exige horizonte e indicacao compativeis. O caso nao sustenta isso."
            }
          },
          rationale: "A decisao madura nao comeca escolhendo o cateter. Comeca perguntando se o objetivo ainda exige invadir o paciente.",
          takeHome: "Dificuldade periferica nao e sinonimo de CVC."
        },
        {
          id: "decision_02",
          type: "trap",
          title: "Pegadinha cultural",
          prompt: "Durante o round surge a frase: 'Ja que pode piorar de madrugada, melhor centralizar logo agora'. Qual reenquadramento protege o paciente?",
          options: [
            {
              id: "a",
              text: "Aceitar, porque antecipar sempre evita correria."
            },
            {
              id: "b",
              text: "Pedir central de menor risco tecnico possivel, ja que o raciocinio esta fechado."
            },
            {
              id: "c",
              text: "Separar previsao util de fantasia preventiva e definir gatilhos reais para escalada."
            }
          ],
          bestAnswer: "c",
          responses: {
            "a": {
              grade: "perigoso",
              errorType: "cultural",
              consequence: "transforma ansiedade de equipe em indicacao invasiva",
              feedback: "Esse atalho empurra o paciente para um procedimento nao indicado no presente."
            },
            "b": {
              grade: "precipitado",
              errorType: "cognitive",
              consequence: "troca a discussao de necessidade por uma falsa discussao de tecnica",
              feedback: "Escolher o central menos ruim ainda pressupoe que o central e necessario. A premissa segue errada."
            },
            "c": {
              grade: "prudente",
              errorType: "cultural",
              consequence: "recoloca a discussao em necessidade, gatilho e proporcionalidade",
              feedback: "Correto. Quem define escalada nao e o medo difuso, mas um gatilho clinico claro."
            }
          },
          rationale: "Boa cultura de acesso troca profecias vagas por gatilhos observaveis.",
          takeHome: "Prevenir correria nao autoriza criar invasao sem indicacao."
        },
        {
          id: "decision_03",
          type: "multi_step_case",
          title: "Escalada sem reflexo",
          context: "Paciente com pneumonia grave, falha de VO, antibiotico EV por 10 a 14 dias, perifericas sucessivas perdidas, sem necessidade de dialise e sem vasopressor.",
          steps: [
            {
              id: "s1",
              prompt: "Qual e a decisao inicial mais madura?",
              options: [
                {
                  id: "a",
                  text: "CVC subclavio porque o curso do tratamento ja ficou medio."
                },
                {
                  id: "b",
                  text: "PICC ou midline conforme droga, osmolaridade e necessidade de centralidade."
                },
                {
                  id: "c",
                  text: "Femoral temporario para nao atrasar antibiotico."
                }
              ],
              bestAnswer: "b",
              responses: {
                "a": {
                  grade: "desproporcional",
                  errorType: "cognitive",
                  consequence: "antecipa um degrau mais invasivo que o problema pede",
                  feedback: "O horizonte nao exige, por si so, um central toracico."
                },
                "b": {
                  grade: "elegante",
                  errorType: "cognitive",
                  consequence: "alinha duracao, familia e invasividade",
                  feedback: "Boa escolha. A familia certa nasce do objetivo, nao do drama da puncao."
                },
                "c": {
                  grade: "perigoso",
                  errorType: "cultural",
                  consequence: "usa femoral como valvula de escape da pressa",
                  feedback: "Rapidez nao corrige territorio inadequado."
                }
              }
            },
            {
              id: "s2",
              prompt: "A droga passa a exigir ponta central. Qual familia conversa melhor agora?",
              options: [
                {
                  id: "a",
                  text: "Midline, porque o braco e sempre menos invasivo."
                },
                {
                  id: "b",
                  text: "PICC, porque entrega centralidade com horizonte compativel."
                },
                {
                  id: "c",
                  text: "Port, porque 14 dias ja justificam implantavel."
                }
              ],
              bestAnswer: "b",
              responses: {
                "a": {
                  grade: "precipitado",
                  errorType: "cognitive",
                  consequence: "confunde rota anatomica com ponta central",
                  feedback: "Braco nao significa automaticamente centralidade."
                },
                "b": {
                  grade: "prudente",
                  errorType: "cognitive",
                  consequence: "mantem a logica do menor dispositivo central suficiente",
                  feedback: "Correto. O cateter precisa conversar com o tipo de droga e o tempo de uso."
                },
                "c": {
                  grade: "desproporcional",
                  errorType: "cognitive",
                  consequence: "entrega dispositivo de outra identidade para um horizonte curto",
                  feedback: "Port e uma conversa de longa permanencia, nao de antibioticoterapia curta."
                }
              }
            },
            {
              id: "s3",
              prompt: "Antes de encerrar o caso, qual frase operacional fecha a indicacao com maturidade?",
              options: [
                {
                  id: "a",
                  text: "Colocar o que der certo na mao mais facil."
                },
                {
                  id: "b",
                  text: "Escolher a familia que entrega o objetivo clinico com o menor custo biologico hoje."
                },
                {
                  id: "c",
                  text: "Se ficou mais complexo, entao o central mais robusto sempre ganha."
                }
              ],
              bestAnswer: "b",
              responses: {
                "a": {
                  grade: "precipitado",
                  errorType: "cultural",
                  consequence: "troca criterio clinico por conveniencia imediata",
                  feedback: "O problema nao e achar uma veia. E resolver o objetivo certo com o acesso certo."
                },
                "b": {
                  grade: "elegante",
                  errorType: "cognitive",
                  consequence: "fecha a escada com linguagem de proporcionalidade",
                  feedback: "Boa sintese. Essa frase protege a tomada de decisao em equipe."
                },
                "c": {
                  grade: "desproporcional",
                  errorType: "cultural",
                  consequence: "reforca o mito de que complexidade pede sempre invasao maior",
                  feedback: "Complexidade pede raciocinio maior, nao necessariamente cateter maior."
                }
              }
            }
          ],
          summary: "A escada do acesso precisa sobreviver mesmo quando o caso complica."
        }
      ]
    },
    {
      id: "technique_damage_control",
      title: "Technique and damage control",
      subtitle: "Gesto tecnico, confirmacao e resposta ao erro antes que o dano se consolide.",
      track: "procedure_track",
      partTargets: ["part4", "part5", "part6"],
      estimatedMinutes: 18,
      focus: [
        "sequencia tecnica viva",
        "leitura de confirmacao",
        "resposta precoce a complicacao"
      ],
      items: [
        {
          id: "technique_01",
          type: "mcq_single",
          title: "Quando a tecnica deixa de ser teatro",
          prompt: "Paciente obeso, ventilado, com vasopressor e anatomia cervical dificil. Qual movimento inicial e mais maduro para puncao venosa central?",
          options: [
            {
              id: "a",
              text: "Partir para subclavia cega porque a janela cervical esta ruim."
            },
            {
              id: "b",
              text: "Reorganizar equipe, ultrassom, plano B e declarar checkpoints antes de perfurar."
            },
            {
              id: "c",
              text: "Mandar seguir rapido para nao prolongar hipotensao."
            },
            {
              id: "d",
              text: "Trocar imediatamente para femoral sem discutir o objetivo."
            }
          ],
          bestAnswer: "b",
          responses: {
            "a": {
              grade: "perigoso",
              errorType: "technical",
              consequence: "remove visibilidade justo no terreno que pede mais controle",
              feedback: "Cenario dificil nao autoriza perder imagem. Autoriza preparar melhor."
            },
            "b": {
              grade: "elegante",
              errorType: "systemic",
              consequence: "reduz erro de equipe e melhora a margem de seguranca tecnica",
              feedback: "Correto. Preparacao explicita vale mais que coragem performatica."
            },
            "c": {
              grade: "perigoso",
              errorType: "cultural",
              consequence: "pressa desorganizada aumenta puncao, fio e dilatacao errada",
              feedback: "Hipotensao nao e convite para perder checkpoints."
            },
            "d": {
              grade: "aceitavel",
              errorType: "cognitive",
              consequence: "pode resolver acesso, mas troca de territorio sem enquadrar o problema",
              feedback: "Pode existir como replano, mas nao como reflexo sem raciocinio e sem explicitar custo."
            }
          },
          mediaLinks: [
            {
              label: "Catalogo lote 2",
              href: "v20-graphics-catalog.html#open-real-batch-2"
            },
            {
              label: "Catalogo lote 3",
              href: "v20-graphics-catalog.html#open-real-batch-3"
            }
          ],
          mediaPreview: [
            {
              src: "../assets/real/open/ultrasound/neck_ultrasound_procedural_wikimedia.jpg",
              alt: "Foto procedural real de ultrassom no pescoco",
              caption: "Foto real de ergonomia e posicionamento do probe antes da puncao."
            }
          ],
          rationale: "Terreno ruim pede mais preparo, nao menos. A boa tecnica nasce de equipe, janela, plano B e checkpoints.",
          takeHome: "Em tecnica viva, a sequencia protege mais que a bravata."
        },
        {
          id: "technique_02",
          type: "visual_read",
          title: "Imagem sem supersticao",
          prompt: "Apos puncao dificil, as imagens reais abaixo mostram trajetos anormais e dano toracico possivel. Qual e a leitura operacional mais segura?",
          options: [
            {
              id: "a",
              text: "Se a ponta nao parece tao ruim, pode usar e rever depois."
            },
            {
              id: "b",
              text: "Tratar como confirmacao inadequada ate provar o contrario, suspender uso e reavaliar trajetoria e pleura."
            },
            {
              id: "c",
              text: "Documentar apenas a ponta e ignorar o restante do trajeto."
            }
          ],
          bestAnswer: "b",
          mediaLinks: [
            {
              label: "Catalogo lote 3",
              href: "v20-graphics-catalog.html#open-real-batch-3"
            },
            {
              label: "Premium Atlas",
              href: "v20-premium-atlas.html"
            }
          ],
          mediaPreview: [
            {
              src: "../assets/real/open/xray/subclavian_central_venous_catheter_xray_wikimedia.png",
              alt: "RX real com cateter venoso central em subclavia",
              caption: "Linha real para leitura de trajeto e confirmacao."
            },
            {
              src: "../assets/real/open/malposition/port_acath_azygos_ap_wikimedia.jpg",
              alt: "RX real com ponta de port em veia azigos",
              caption: "Malposicao real para ancorar leitura de trajeto aberrante."
            },
            {
              src: "../assets/real/open/malposition/port_acath_azygos_lateral_wikimedia.jpg",
              alt: "RX lateral real com port em veia azigos",
              caption: "Vista lateral para sair da leitura de malposicao em imagem unica."
            },
            {
              src: "../assets/real/open/complication/chest_xray_pneumothorax_wikimedia.png",
              alt: "RX real com pneumotorax",
              caption: "Complicacao real para ancorar resposta precoce ao dano."
            }
          ],
          responses: {
            "a": {
              grade: "perigoso",
              errorType: "technical",
              consequence: "autoriza uso de via mal confirmada e pode perder complicacao toracica",
              feedback: "Quando o trajeto e o paciente contam uma historia ruim, usar antes de esclarecer e erro grave."
            },
            "b": {
              grade: "prudente",
              errorType: "technical",
              consequence: "interrompe o dano e recoloca confirmacao e complicacao no centro",
              feedback: "Correto. Em imagem, ponta nao basta: trajeto, pleura e clinica falam juntos."
            },
            "c": {
              grade: "desproporcional",
              errorType: "cognitive",
              consequence: "reduz uma leitura complexa a um unico ponto de interesse",
              feedback: "Olhar so a ponta e um dos erros mais caros da confirmacao."
            }
          },
          rationale: "Imagem madura e leitura operacional, nao fetiche por uma ponta isolada.",
          takeHome: "Trajeto ruim + clinica ruim = parar e reavaliar."
        },
        {
          id: "technique_03",
          type: "osce_station",
          title: "OSCE de puncao prudente",
          prompt: "Pontue o desempenho numa insercao de CVC guiada por US com finalizacao segura.",
          criteria: [
            {
              id: "plan",
              label: "Declara indicacao, territorio e plano B antes de perfurar.",
              critical: true
            },
            {
              id: "sterile",
              label: "Mantem barreira esteril e organiza o campo sem atropelo.",
              critical: true
            },
            {
              id: "ultrasound",
              label: "Usa a imagem para alinhar vaso, agulha e profundidade.",
              critical: true
            },
            {
              id: "wire",
              label: "Para diante de resistencia de fio-guia e nao transforma isso em duelo.",
              critical: true
            },
            {
              id: "closure",
              label: "Fecha com confirmacao, fixacao, curativo e documentacao.",
              critical: false
            }
          ],
          rubricNotes: [
            "Falha em qualquer criterio critico rebaixa o caso no minimo para desproporcional.",
            "Execucao limpa sem fechamento completo costuma ser aceitavel, nao elegante."
          ],
          rationale: "OSCE serio nao julga estilo. Julga checkpoints que previnem dano.",
          takeHome: "Puncao prudente e sequencia observavel, nao talento difuso."
        }
      ]
    },
    {
      id: "hostile_closure_teaching",
      title: "Hostile context and closure",
      subtitle: "Contexto ruim, manutencao, remocao e ensino de equipe sem moralismo.",
      track: "teaching_track",
      partTargets: ["part7", "part8", "part9"],
      estimatedMinutes: 16,
      focus: [
        "territorios hostis",
        "bundle e remocao",
        "debriefing ensinavel"
      ],
      items: [
        {
          id: "closure_01",
          type: "true_false",
          title: "Bundle e remocao",
          prompt: "Verdadeiro ou falso: 'Se o acesso e dificil e a equipe sofreu para passar, isso por si so ja justifica mantelo mesmo depois de perder indicacao forte'.",
          truth: false,
          mediaLinks: [
            {
              label: "Catalogo real",
              href: "v20-graphics-catalog.html#open-real-batch-2"
            }
          ],
          mediaPreview: [
            {
              src: "../assets/real/open/maintenance/central_vein_line_dressing_wikimedia.jpg",
              alt: "Cateter venoso central real com curativo transparente",
              caption: "Manutencao real para discutir bundle, curativo e permanencia."
            },
            {
              src: "../assets/real/open/maintenance/central_line_sutures_wikimedia.jpg",
              alt: "Cateter venoso central real com suturas visiveis",
              caption: "Fixacao real para discutir tecnica, risco e criterio de remocao."
            }
          ],
          responses: {
            "true": {
              grade: "perigoso",
              errorType: "cultural",
              consequence: "confunde dificuldade de insercao com indicacao de permanencia",
              feedback: "Dificuldade de passagem nao compra imunidade contra remocao."
            },
            "false": {
              grade: "prudente",
              errorType: "systemic",
              consequence: "preserva logica de bundle e evita cateter sem destino",
              feedback: "Correto. A pergunta diaria continua sendo: ainda precisa?"
            }
          },
          rationale: "Cateter dificil nao e medalha; continua sendo um risco que precisa de motivo para existir.",
          takeHome: "A historia da puncao nao substitui a indicacao de hoje."
        },
        {
          id: "closure_02",
          type: "multi_step_case",
          title: "Febre, territorio hostil e tentacao de salvar a linha",
          context: "Paciente irradiado, acesso dificil, CVC antigo, nova febre e queda funcional do cateter. A equipe teme perder a unica via confiavel.",
          mediaLinks: [
            {
              label: "Catalogo lote 3",
              href: "v20-graphics-catalog.html#open-real-batch-3"
            },
            {
              label: "Catalogo lote 4",
              href: "v20-graphics-catalog.html#open-real-batch-4"
            },
            {
              label: "Premium Atlas",
              href: "v20-premium-atlas.html"
            }
          ],
          mediaPreview: [
            {
              src: "../assets/real/open/complication/ct_superior_vena_cava_thrombosis_wikimedia.png",
              alt: "CT real com trombose de veia cava superior",
              caption: "Complicacao trombotica real para tirar o debate de salvamento da abstracao."
            },
            {
              src: "../assets/real/open/maintenance/central_vein_line_dressing_wikimedia.jpg",
              alt: "Curativo real de linha central",
              caption: "A mesma linha pode parecer bem cuidada e ainda assim exigir reenquadramento biologico."
            },
            {
              src: "../assets/real/open/infection/catheter_biofilm_alcaligenes_phil_10548.jpg",
              alt: "Biofilme e material fibrinoide reais no lumen de um cateter venoso central",
              caption: "Biofilme real no lumen para ligar infeccao, oclusao e custo de salvage."
            }
          ],
          steps: [
            {
              id: "s1",
              prompt: "Qual e o primeiro eixo da conversa?",
              options: [
                {
                  id: "a",
                  text: "Salvar a linha a qualquer custo porque o acesso e raro."
                },
                {
                  id: "b",
                  text: "Reenquadrar risco biologico, necessidade real e alternativas de replano."
                },
                {
                  id: "c",
                  text: "Aumentar antibiotico e observar antes de discutir o cateter."
                }
              ],
              bestAnswer: "b",
              responses: {
                "a": {
                  grade: "perigoso",
                  errorType: "cultural",
                  consequence: "coloca apego ao dispositivo acima do risco infeccioso",
                  feedback: "Acesso raro nao suspende o raciocinio biologico."
                },
                "b": {
                  grade: "elegante",
                  errorType: "systemic",
                  consequence: "abre conversa madura entre dano, indicacao e replano",
                  feedback: "Correto. O territorio hostil aumenta a necessidade de raciocinio, nao de negacao."
                },
                "c": {
                  grade: "precipitado",
                  errorType: "technical",
                  consequence: "trata sintoma sem encarar a fonte potencial do problema",
                  feedback: "Postergar a discussao do cateter aqui custa caro."
                }
              }
            },
            {
              id: "s2",
              prompt: "Se o cateter perder funcao e a febre persistir, qual frase orienta o replano?",
              options: [
                {
                  id: "a",
                  text: "Linha dificil fica ate ultimo suspiro."
                },
                {
                  id: "b",
                  text: "Salvar o paciente vem antes de salvar o acesso; o replano precisa ser explicitado."
                },
                {
                  id: "c",
                  text: "Como foi muito dificil, documentar basta."
                }
              ],
              bestAnswer: "b",
              responses: {
                "a": {
                  grade: "perigoso",
                  errorType: "cultural",
                  consequence: "normaliza persistencia de cateter potencialmente nocivo",
                  feedback: "Essa frase e exatamente o tipo de cultura que um bundle serio precisa desmontar."
                },
                "b": {
                  grade: "prudente",
                  errorType: "systemic",
                  consequence: "liga remocao a replano e tira a equipe do impasse teatral",
                  feedback: "Boa resposta. Remover sem replano e amador; manter sem indicacao e pior."
                },
                "c": {
                  grade: "desproporcional",
                  errorType: "systemic",
                  consequence: "substitui decisao por registro",
                  feedback: "Documentar e necessario, mas nao resolve o problema clinico."
                }
              }
            },
            {
              id: "s3",
              prompt: "Ao revisar o CT real de trombose de VCS relacionada a cateter, qual linguagem protege melhor a equipe do apego a linha?",
              options: [
                {
                  id: "a",
                  text: "Se ainda infunde, a imagem e secundaria e o importante e nao perder o acesso."
                },
                {
                  id: "b",
                  text: "A imagem reposiciona o caso como complicacao biologica real, e o replano precisa superar o apego ao dispositivo."
                },
                {
                  id: "c",
                  text: "Basta anotar trombose no prontuario e manter tudo igual enquanto houver febre."
                }
              ],
              bestAnswer: "b",
              responses: {
                "a": {
                  grade: "perigoso",
                  errorType: "cultural",
                  consequence: "transforma funcionalidade parcial em desculpa para ignorar dano biologico",
                  feedback: "A linha pode infundir e ainda assim ser parte do problema."
                },
                "b": {
                  grade: "elegante",
                  errorType: "systemic",
                  consequence: "troca o foco do apego ao acesso para a seguranca real do paciente",
                  feedback: "Correto. Complicacao real exige replano explicito, nao romantizacao da linha dificil."
                },
                "c": {
                  grade: "desproporcional",
                  errorType: "technical",
                  consequence: "reduz uma complicacao de alto custo a um ato burocratico",
                  feedback: "Registro sem mudanca de conduta aqui e maquiagem, nao resposta clinica."
                }
              }
            }
          ],
          summary: "Hostilidade anatomica nao cancela hostilidade biologica."
        },
        {
          id: "closure_03",
          type: "osce_station",
          title: "Debriefing sem humilhar",
          prompt: "Pontue um debriefing de 8 minutos apos um quase erro de confirmacao e fechamento.",
          mediaLinks: [
            {
              label: "Catalogo lote 4",
              href: "v20-graphics-catalog.html#open-real-batch-4"
            },
            {
              label: "Teacher mode",
              href: "modo-professor.html"
            }
          ],
          mediaPreview: [
            {
              src: "../assets/real/open/maintenance/central_vein_catheter_entry_site_wikimedia.jpg",
              alt: "Sitio de saida real de cateter venoso central",
              caption: "Foto real para ancorar debriefing de vigilancia diaria, pele e trajeto externo."
            },
            {
              src: "../assets/real/open/infection/catheter_biofilm_staph_phil_7486.jpg",
              alt: "Biofilme estafilococico real em cateter de longa permanencia",
              caption: "Biofilme real para lembrar que linha aparentemente banal pode carregar custo biologico alto."
            }
          ],
          criteria: [
            {
              id: "naming",
              label: "Nomeia o quase erro sem personalizar o fracasso.",
              critical: true
            },
            {
              id: "trigger",
              label: "Explicita o gatilho cognitivo ou sistemico que levou ao erro.",
              critical: true
            },
            {
              id: "repair",
              label: "Formula uma correcao operacional curta e reaplicavel.",
              critical: true
            },
            {
              id: "tone",
              label: "Mantem tom firme, mas nao humilhante, para preservar aprendizagem.",
              critical: false
            },
            {
              id: "closure",
              label: "Fecha com proximo comportamento observavel em vez de conselho abstrato.",
              critical: false
            }
          ],
          rubricNotes: [
            "Debriefing que humilha e pouco ensinavel mesmo quando tecnicamente correto.",
            "Sem gatilho nomeado, a equipe sai com opiniao, nao com aprendizado."
          ],
          rationale: "Treinar equipe tambem e procedimento: precisa de estrutura, linguagem e fechamento.",
          takeHome: "Boa preceptoria transforma erro em comportamento observavel."
        }
      ]
    }
  ]
};
