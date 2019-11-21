export default {
  errors: "",
  main_data: {
    first_name: "Rodrigo",
    last_name: "Fernández",
    email: "rfernand@4talent.cl",
    status: "tests_completed",
    es_status: "Pruebas completadas",
    enrollment_id: 42,
    invitation_opened_at: "16/10/19 13:46",
    process_id: 9,
    process_name: "F - Proceso de Prueba 4Talent",
    profile_id: 2,
    profile_name: "Perfil Cajero Banco Estado",
    main_score: 55,
    count_rendered: 10,
    count_total: 11
  },
  cognitive_data: {
    main: {
      title: "Habilidades Cognitivas",
      description:
        "Las habilidades básicas que el cerebro usa en conjunto para tomar la información entrante y procesarla",
      cognitive_score: 59,
      count_rendered: 6,
      count_total: 6
    },
    scores: [
      {
        id: "logical_reasoning_planning",
        en_name: "Logical reasoning",
        es_name: "Razonamiento lógico",
        en_description: "Logical reasoning and long-term planning",
        es_description: "Razonamiento lógico y planificación a largo plazo",
        en_high_level: "Plan",
        es_high_level: "Planifica",
        en_low_level: "Does not plan",
        es_low_level: "No Planifica",
        en_tooltip:
          "Faced with a logical problem, the tool measures the effectiveness of the movements it performs. Does it test or plan before acting?",
        es_tooltip:
          "Frente a un problema lógico, la herramienta mide la efectividad de los movimientos que realiza ¿Hace pruebas o planifica antes de actuar?",
        optimal_score: 80.0,
        profiled_score: 80.0761734280586,
        score: 63.5990648849863
      },
      {
        id: "divided_attention",
        en_name: "Divided attention",
        es_name: "Atención Dividida",
        en_description: "Handling simultaneous tasks",
        es_description: "Manejo de tareas simultáneas",
        en_high_level: "Polyfunctional",
        es_high_level: "Polifuncional",
        en_low_level: "Monofunctional",
        es_low_level: "Monofuncional",
        en_tooltip:
          "In this test the person's ability to progressively perform more tasks and their level of effectiveness is evaluated",
        es_tooltip:
          "En este test se evalúa la habilidad de la persona para realizar progresivamente más tareas y su nivel de efectividad",
        optimal_score: 90.0,
        profiled_score: 87.0761734280586,
        score: 86.7264049330735
      },
      {
        id: "working_memory",
        en_name: "Working memory",
        es_name: "Memorización",
        en_description: "Short-term memorization",
        es_description: "Memorización a corto plazo",
        en_high_level: "High retention",
        es_high_level: "Alta retención",
        en_low_level: "Low retention",
        es_low_level: "Baja retención",
        en_tooltip:
          "From frequencies of numbers, faster and faster, how much does the person manage to retain and reproduce?",
        es_tooltip:
          "A partir de frecuencias de números, cada vez más rápidas, ¿Cuánto logra retener y reproducir la persona?",
        score: 80.2853082564392
      },
      {
        id: "accuracy",
        en_name: "Accuracy",
        es_name: "Precisión",
        en_description: "Visual precision",
        es_description: "Precisión visual",
        en_high_level: "Precise",
        es_high_level: "Exacto",
        en_low_level: "Imprecise",
        es_low_level: "Impreciso",
        en_tooltip:
          "Faced with numerical patterns for a limited time, how accurate is the person to retain and reproduce the pattern?",
        es_tooltip:
          "Frente a patrones numéricos por un tiempo limitado, ¿Cuán precisa es la persona para retener y reproducir el patrón?",
        optimal_score: 87.0,
        profiled_score: 87.0761734280586,
        score: 51.9172925077434
      },
      {
        id: "task_switching",
        en_name: "Task switching",
        es_name: "Cambio de tarea",
        en_description: "Speed of adaptation from one task to another",
        es_description: "Velocidad de adaptación de una tarea a otra",
        en_high_level: "Quick",
        es_high_level: "Rápido",
        en_low_level: "Slow",
        es_low_level: "Lento",
        en_tooltip:
          "This test measures the speed of adaptation against a change of tasks",
        es_tooltip:
          "Este test mide la velocidad de adaptación frente a un cambio de tareas",
        optimal_score: 75.0,
        profiled_score: 87.0761734280586,
        score: 34.8143611241782
      },
      {
        id: "switch_effort",
        en_name: "Switch effort",
        es_name: "Cambio de esfuerzo",
        en_description: "Effort to adapt to task change",
        es_description: "Esfuerzo de adaptación al cambio de tarea",
        en_high_level: "Flexible",
        es_high_level: "Flexible",
        en_low_level: "Inflexible",
        es_low_level: "Inflexible",
        en_tooltip:
          "How difficult is it for a person to adapt to different conditions or rules?",
        es_tooltip:
          "¿Cuán dificil es para una persona adaptarse a condiciones o reglas distintas?",
        optimal_score: 40.0,
        profiled_score: 87.0761734280586,
        score: 82.2537908728733
      }
    ]
  },
  personality_data: {
    main: {
      title: "Rasgos de Personalidad",
      description:
        "Las habilidades básicas que el cerebro usa en conjunto para tomar la información entrante y procesarla",
      personality_score: 50,
      count_rendered: 5,
      count_total: 5
    },
    scores: [
      {
        id: "impulse_control",
        en_name: "Impulse control",
        es_name: "Control de impulsos",
        en_description: "Self-control",
        es_description: "Autocontrol",
        es_high_level: "Autocontrol",
        en_low_level: "Impulsive",
        es_low_level: "Impulsivo",
        en_tooltip:
          "In this test the person's ability to progressively perform more tasks and their level of effectiveness is evaluated",
        es_tooltip:
          "En este test se evalúa la habilidad de la persona para realizar progresivamente más tareas y su nivel de efectividad",
        optimal_score: 55.0,
        profiled_score: 87.0761734280586,
        score: 87.5884874077593
      },
      {
        id: "speed",
        en_name: "Speed",
        es_name: "Velocidad",
        en_description: "Reaction speed",
        es_description: "Velocidad de reacción",
        en_high_level: "Quick",
        es_high_level: "Rápido",
        en_low_level: "Slow",
        es_low_level: "Lento",
        en_tooltip:
          "Measure the speed with which the person responds to situations and instructions",
        es_tooltip:
          "Mide la velocidad con la que la persona responde frente a situaciones e instrucciones",
        optimal_score: 23.0,
        profiled_score: 87.0761734280586,
        score: 51.180347107217095
      },
      {
        id: "need_for_excitement",
        en_name: "Need for excitement",
        es_name: "Necesidad de emoción",
        en_description: "Need for challenge",
        es_description: "Necesidad de desafío",
        en_high_level: "Need challenge",
        es_high_level: "Necesita desafío",
        en_low_level: "Need stability",
        es_low_level: "Necesita estabilidad",
        en_tooltip:
          "A greater challenge, does the person seek stability or persevere?",
        es_tooltip:
          "A mayor desafío, ¿La persona busca estabilidad o persevera?",
        optimal_score: 52.0,
        profiled_score: 87.0761734280586,
        score: 40.1276392385922
      },
      {
        id: "risk_assessment_ability",
        en_name: "Risk asessment ability",
        es_name: "Evaluación de Riesgos",
        en_description: "Risk / reward evaluation",
        es_description: "Evaluación de riesgos/recompensas",
        en_high_level: "Take risks",
        es_high_level: "Toma riesgos",
        en_low_level: "It does not take risks",
        es_low_level: "No toma riesgos",
        en_tooltip:
          "The behavior of the person is evaluated by increasing risks and incentives",
        es_tooltip:
          "Se evalúa el comportamiento de la persona al incrementar riesgos e incentivos",
        optimal_score: 63.0,
        profiled_score: 79.0761734280586,
        score: 49.3870572833393
      },
      {
        id: "loss_aversion",
        en_name: "Loss aversion",
        es_name: "Aversión a la pérdida",
        en_description: "How much you avoid losing",
        es_description: "Cuánto evitas perder",
        en_high_level: "Risk Optimist",
        es_high_level: "Optimista al riesgo",
        en_low_level: "It does not take risks",
        es_low_level: "Pesimista al riesgo",
        en_tooltip:
          "The behavior of the person is assessed against risks and loss situations",
        es_tooltip:
          "Se evalúa el comportamiento de la persona frente a riesgos y situaciones de pérdida",
        optimal_score: 95.0,
        profiled_score: 87.0761734280586,
        score: 46.1683344436987
      }
    ]
  }
};
