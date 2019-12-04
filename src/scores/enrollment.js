export default {
  errors: '',
  main_data: {
    email: 'matiashesoal@gmail.com',
    status: 'tests_completed',
    es_status: 'Pruebas completadas',
    last_name: 'Sotomayor',
    first_name: 'Matias',
    main_score: 50,
    process_id: 201,
    profile_id: 3,
    count_total: 3,
    process_name: '[2019111051]-Relacionador Comercial',
    profile_name: 'Relacionador Comercial',
    enrollment_id: 13528,
    count_rendered: 3,
    invitation_opened_at: '03/12/19 13:06'
  },
  cognitive_data: {
    main: {
      title: 'Habilidades Cognitivas',
      count_total: 2,
      description:
        'Las habilidades básicas que el cerebro usa en conjunto para tomar la información entrante y procesarla',
      count_rendered: 2,
      cognitive_score: 42
    },
    scores: [
      {
        id: 'logical_reasoning_planning',
        score: 68,
        en_name: 'Logical reasoning and planning ability',
        es_name: 'Razonamiento lógico',
        en_tooltip:
          'Faced with a logical problem, the tool measures the effectiveness of the movements it performs. Does it test or plan before acting?',
        es_tooltip:
          'Frente a un problema lógico, la herramienta mide la efectividad de los movimientos que realiza ¿Hace pruebas o planifica antes de actuar?',
        en_low_level: 'Does not plan',
        es_low_level: 'No Planifica',
        en_high_level: 'Plan',
        es_high_level: 'Planifica',
        optimal_score: 100,
        en_description: 'Logical reasoning and long-term planning',
        es_description: 'Razonamiento lógico y planificación a largo plazo',
        profiled_score: 68
      },
      {
        id: 'task_switching',
        score: 16,
        en_name: 'Task switching',
        es_name: 'Cambio de tarea',
        en_tooltip:
          'This test measures the speed of adaptation against a change of tasks',
        es_tooltip:
          'Este test mide la velocidad de adaptación frente a un cambio de tareas',
        en_low_level: 'Slow',
        es_low_level: 'Lento',
        en_high_level: 'Quick',
        es_high_level: 'Rápido',
        optimal_score: 100,
        en_description: 'Speed of adaptation from one task to another',
        es_description: 'Velocidad de adaptación de una tarea a otra',
        profiled_score: 16
      }
    ]
  },
  personality_data: {
    main: {
      title: 'Rasgos de Personalidad',
      count_total: 1,
      description:
        'Refleja los patrones característicos de pensamientos, sentimientos y comportamientos de las personas. Los rasgos de personalidad implican consistencia y estabilidad',
      count_rendered: 1,
      personality_score: 65
    },
    scores: [
      {
        id: 'impulse_control',
        score: 65,
        en_name: 'Impulse control',
        es_name: 'Control de impulsos',
        en_tooltip:
          "In this test the person's ability to progressively perform more tasks and their level of effectiveness is evaluated",
        es_tooltip:
          'En este test se evalúa la habilidad de la persona para realizar progresivamente más tareas y su nivel de efectividad',
        en_low_level: 'Impulsive',
        es_low_level: 'Impulsivo',
        en_high_level: 'Self control',
        es_high_level: 'Autocontrol',
        optimal_score: 100,
        en_description: 'Self-control',
        es_description: 'Frente a cambios, ¿cómo maneja el control impulsos?',
        profiled_score: 65
      }
    ]
  }
}
